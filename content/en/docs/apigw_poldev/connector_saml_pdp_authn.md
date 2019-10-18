{
"title": "SAML PDP authentication",
"linkTitle": "SAML PDP authentication",
"date": "2019-10-17",
"description": "The API Gateway can request an authentication decision from a Security Assertion Markup Language (SAML) Policy Decision Point (PDP) for an authenticated client using the SAML Protocol (SAMLP). In such cases, the API Gateway presents evidence to the PDP in the form of some user credentials, such as the Distinguished Name of a client's X.509 certificate. "
}
﻿
<div id="p_connector_saml_pdp_authn_overview">

Overview
--------

The API Gateway can request an authentication decision from a Security Assertion Markup Language (SAML) Policy Decision Point (PDP) for an authenticated client using the SAML Protocol (SAMLP). In such cases, the API Gateway presents evidence to the PDP in the form of some user credentials, such as the Distinguished Name of a client's X.509 certificate.

The PDP decides whether to authenticate the end user. It then creates an authentication assertion, signs it, and returns it to the API Gateway in a SAMLP response. The API Gateway can then perform a number of checks on the response, such as validating the PDP signature and certificate, and examining the assertion. It can also insert the SAML authentication assertion into the message for consumption by a downstream web service.

</div>

<div id="p_connector_saml_pdp_authn_request">

Request settings
----------------

The **Request** tab describes how the API Gateway should package the SAMLP request before sending it to the SAML PDP.

You can configure the following fields on the **Request**
tab:

**SAML PDP URL Set**:\
You can configure a group of SAML PDPs to which the API Gateway connects in a round-robin fashion if one or more of the PDPs are unavailable. This is known as a SAML PDP URL set. Click the button on the right, and select a previously configured SAML PDP URL set in the tree. To add a URL set, right-click the **SAML PDP URL Sets**
tree node, and select **Add a URL Set**. Alternatively, you can configure a SAML PDP URL set under the **Environment Configuration** > **External Connections**
node in the Policy Studio tree.

**SOAP Action**:\
Enter the SOAP action required to send SAMLP requests to the PDP. Click the **Use Default**
button to use the following default SOAP action as specified by SAMLP:

``` {space="preserve"}
http://www.oasis-open.org/committees/security
```

**SAML Version**:\
Select the SAML version to use in the SAMLP request.

**Signing Key**:\
If the SAMLP request is to be signed, click the **Signing Key**
button, and select the appropriate signing key from the certificate store.

<div>

### SAML subject settings

You can describe the *subject*
of the SAML assertion on the **SAML Subject**
tab. Complete the following fields:

**Subject Selector Expression**:\
Enter a selector expression for the message attribute that contains the user name of an authenticated user. The default value is `${authentication.subject.id}`.

**Subject Format**:\
Select the format of the subject selected in the **Subject Selector Expression**
field above.

{{< alert title="Note" color="primary" >}}There is no need to select a format here if the **Subject Selector Expression**
field is set to `authentication.subject.id`.{{< /alert >}}

</div>

<div>

### Subject confirmation settings

The settings on the **Subject Confirmation**
tab determine how the `<SubjectConfirmation>`
block of the SAML assertion is generated. When the assertion is consumed by a downstream web service, the information contained in the `<SubjectConfirmation>`
block can be used to authenticate the end user that authenticated to the API Gateway, or the issuer of the assertion, depending on what is configured.

The following is a typical `<SubjectConfirmation>`
block:

``` {space="preserve"}
<saml:SubjectConfirmation>
  <saml:ConfirmationMethod>
    urn:oasis:names:tc:SAML:1.0:cm:holder-of-key
  </saml:ConfirmationMethod>
  <dsig:KeyInfo xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
    <dsig:X509Data>
      <dsig:X509SubjectName>CN=axway</dsig:X509SubjectName>
      <dsig:X509Certificate>
        MIICmzCCAY ...... mB9CJEw4Q=
      </dsig:X509Certificate>
    </dsig:X509Data>
  </dsig:KeyInfo>
</saml:SubjectConfirmation>
```

You must configure the following fields on the **Subject Confirmation**
tab:

**Method**:\
The selected value determines the value of the `<ConfirmationMethod>`
element. The following table shows the available methods, their meanings, and their respective values in the `<ConfirmationMethod>`
element:

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Method           Meaning                                                                                                                                                                                      Value
  ---------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------
  Holder Of Key    A `<SubjectConfirmation>`                                                                                                                                                                    `urn:oasis:names:tc:SAML:1.0:cm:holder-of-key`
                   is inserted into the SAMLP request. The `<SubjectConfirmation>`                                                                                                                              
                   contains a `<dsig:KeyInfo>`                                                                                                                                                                  
                   section with the certificate of the user selected to sign the SAMLP request. The user selected to sign the SAMLP request must be the authenticated subject (`authentication.subject.id`).\   
                   Select the ****Include Certificate****                                                                                                                                                       
                   option if the signer's certificate is to be included in the `SubjectConfirmation`                                                                                                            
                   block. Alternatively, select the ****Include Key Name****                                                                                                                                    
                   option if only the key name is to be included.                                                                                                                                               

  Bearer           A `<SubjectConfirmation>`                                                                                                                                                                    `urn:oasis:names:tc:SAML:1.0:cm:bearer`
                   is inserted into the SAMLP request.                                                                                                                                                          

  SAML Artifact    A `<SubjectConfirmation>`                                                                                                                                                                    `urn:oasis:names:tc:SAML:1.0:cm:artifact`
                   is inserted into the SAMLP request.                                                                                                                                                          

  Sender Vouches   A `<SubjectConfirmation>`                                                                                                                                                                    `urn:oasis:names:tc:SAML:1.0:cm:bearer`
                   is inserted into the SAMLP request. The SAMLP request must be signed by a user.                                                                                                              
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the **Method**
field is left blank, no `<ConfirmationMethod>`
block is inserted into the assertion.

**Include Certificate**:\
Select this option to include the SAML subject's certificate in the `<KeyInfo>`
section of the `<SubjectConfirmation>`
block.

**Include Key Name**:\
Alternatively, to not include the certificate, select this option to only include the key name in the `<KeyInfo>`
section.

</div>

</div>

<div id="p_connector_saml_pdp_authn_response">

Response settings
-----------------

The **Response**
tab configures the SAMLP response returned from the SAML PDP. The following fields are available:

**SOAP Actor/Role**:\
If the SAMLP response from the PDP contains a SAML authentication assertion, the API Gateway can extract it from the response and insert it into the downstream message. The SAML assertion is inserted into the WS-Security block identified by the specified SOAP actor/role.

**Drift Time**:\
The SAMLP request to the PDP is time stamped by the API Gateway. To account for differences in the times on the machines running the API Gateway and the SAML PDP the specified time is subtracted from the time at which the API Gateway generates the SAMLP request.

</div>
