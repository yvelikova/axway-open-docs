{
"title": "OCSP client",
"linkTitle": "OCSP client",
"date": "2019-10-17",
"description": "You can use the Online Certificate Status Protocol (OCSP) to retrieve the revocation status of a certificate, as an alternative to retrieving Certificate Revocation Lists (CRLs). "
}
﻿

You can use the Online Certificate Status Protocol (OCSP) to retrieve the revocation status of a certificate, as an alternative to retrieving Certificate Revocation Lists (CRLs).

The **OCSP Client**
filter enables you to retrieve certificate revocation status from an OSCP responder, such as Axway Validation Authority. The input to this filter is the certificate to be checked. You must specify the message attribute that contains the certificate (`java.security.cert.X509Certificate`).

This filter returns the following outputs:

-   `True`
    if the certificate status is `GOOD`
-   `False`
    if the certificate status is `REVOKED`
    or `UNKNOWN`
    (or if an exception occurs)

This filter also outputs the following message attributes:

-   `ocsp.response.certificate.status`: The status of the OCSP responder certificate as an `java.lang.Integer`. The possible values are:
    -   `0`
        (`GOOD`)
    -   `1`
        (`REVOKED`)
    -   `2`
        (`UNKNOWN`)

    >
-   You can use this attribute if the filter return value is not detailed enough.
-   `ocsp.response.signing.certificate`: The optional certificate included in the OCSP response (`java.security.cert.X509Certificate`) used to sign the response. You can use an additional OCSP filter to verify the status of this certificate.

General settings
----------------

Configure the following general settings on the **OCSP Client**
dialog:

**Name**:\

Enter a suitable name for this OCSP client filter to display in a policy.

**OCSP Responder URL**:\

Enter the URL of the OCSP responder.

Message settings
----------------

Configure the following OCSP message settings on the **Settings**
tab:

**The message attribute storing the certificate to validate**:\

Enter the name of the attribute that contains the certificate to be checked (`java.security.cert.X509Certificate`). The default is `${certificate}`.

**The key to sign the request**:\

Click the **Signing Key**
button to open the list of certificates in the certificate store. You can then select the key to use to sign requests to the OCSP responder.

You can select a specific certificate from the certificate store in the dialog, or click **Create/Import**
to create or import a certificate. Alternatively, you can specify a certificate to bind to at runtime using an environment variable selector (for example, `${env.serverCertificate}`). For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Validate response**:\

Select the **Do not validate response**
option to disable response validation. The response from the OCSP responder is not validated when this option is selected.

Select the **Validate response**
option to enable response validation. Click one or more of the following options to specify how the response from the OCSP responder is validated:

-   **Against the certificate contained in the response**:\
-   The response is validated against the certificate contained in the response. This option is selected by default.
-   **Against the CA certificate of the certificate being validated**:\
-   The response is validated against the CA certificate of the certificate being validated. This option is selected by default.
-   **Against the specified certificate**:\
-   Click **Signing Key**
    to choose a certificate from the certificate store or to specify a certificate to bind to at runtime.

You can select any combination of these options. If multiple options are selected, the filter continues as soon as the response is successfully validated against one of the selected options.

When the **Validate response**
option is selected, you can also use the following time validation options:

-   **Allowable time difference between this system and update time in the response**:
-   Enter a value in milliseconds. You can use this field to allow for drift on server and client machines. The default value is 3000 (3 seconds).
-   **The response is valid until**:
-   Select the **Expiration date** check box to use the `nextUpdate` field in the OCSP response as the expiration date. This is the default.
-   Alternatively, to override the expiration date in the response (for example, to set a longer expiration), deselect the **Expiration date** check box, enter a value in the text box, and select a time unit (days, hours, minutes, or seconds).
-   **A response with no expiration date is valid for**:
-   Enter a value in the text box and select a time unit (days, hours, minutes, or seconds). The default value is 6 hours.

1.  For more information on the time validation logic, see [Time validation logic](#Time).

**Use nonce to prevent reply attack**:\

Select this option to include a nonce in the request. This is a randomly generated number that is added to the message to help prevent reply attacks.

**Store results of certificate status in**:\

Click the browse button to select the cache in which to store the certificate status result. The list of currently configured caches is displayed in the tree. To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Environment Configuration** > **Libraries**
node in the Policy Studio tree. For more details, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Storing the certificate status in the cache enables the certificate status to be retrieved without having to return to the OCSP responder.

### Time validation logic

When you enable response validation, the following time validation logic is applied in the following order:

1.  The `thisUpdate` field in the response is checked against the value you entered in **Allowable time difference between this system and update time in the response**. The response is valid if the current time on this system does not differ from the `thisUpdate` field in the response by more than the value entered (or the default value of 3000 milliseconds). For example:
2.  thisUpdate + allowable time difference < current time on this system

3.  If you selected the **Expiration date** check box in the **The response is valid until** field, the response is checked against the `nextUpdate` field in the response. The response is considered *valid until* the `nextUpdate` time in the response. For example:
4.  ``` {space="preserve"}
    thisUpdate + allowable time difference < current time on this system < nextUpdate
    ```

5.  If you did not select the **Expiration date** check box in the **The response is valid until** field, the response is checked against the expiration value you entered in the text box. The response is considered valid if the current time on this system is less than the sum of the `thisUpdate` time in the response and the value you entered. For example:
6.  ``` {space="preserve"}
    thisUpdate + allowable time difference < current time on this system < thisUpdate + valid until
    ```

    {{< alert title="Note" color="primary" >}}The **The response is valid until** settings are only applicable when the `nextUpdate` field is present in the response and the **Expiration date** check box is not selected.{{< /alert >}}

7.  If no expiration date is available (that is, if the `nextUpdate` field is not present in the response), the response is checked against the value you entered in **A response with no expiration date is valid for**. The response is considered valid if the current time on this system is less than the sum of the `thisUpdate` time in the response and the value you entered (or the default value of 6 hours). For example:
8.  ``` {space="preserve"}
    thisUpdate + allowable time difference < current time on this system < thisUpdate + valid for
    ```

9.  {{< alert title="Note" color="primary" >}}The **A response with no expiration date is valid for** settings are only applicable when the `nextUpdate` field is not present in the response.{{< /alert >}}

Routing settings
----------------

You can configure the settings for routing the OCSP request to the OCSP responder on the **Routing**
tab.

You can configure SSL settings, credential profiles for authentication, and other settings for the connection using the **SSL**, **Authentication**, and **Settings**
tabs. For more details, see [*Connect to URL* on page 1](connection_to_url.htm).

Advanced settings
-----------------

On the **Advanced**
tab, you can enable a specific policy to run after the message is created, or after the response is received.

Configure the following advanced settings:

**Run this policy after the message has been created**:\

Click the browse button to select a policy to be run after the message has been created.

**Run this policy after a response has been received**:\

Click the browse button to select a policy to be run after a response has been received.

**Record outbound transactions**:\

Select this option to enable recording of outbound transactions on the **Traffic**
tab in API Gateway Manager. This field is not selected by default. For more details, see the
[API Gateway Administrator Guide](/bundle/APIGateway_77_AdministratorGuide_allOS_en_HTML5/)
.

Integration with Axway Validation Authority
-------------------------------------------

When using the **OCSP client**
with Axway Validation Authority (VA) as an OCSP responder, you can use the following trust models:

-   **Direct trust**\
-   In this model, OCSP responses are signed with the OCSP signing certificate of the VA server. The signing certificate is not included in the OCSP response.
-   **VA delegated trust**\
-   In this model, the signing certificate is included in the OCSP response. API Gateway might not have this certificate. If not, it must have the issuer (CA) certificate of the signing certificate.

You can import certificates into the API Gateway trusted certificate store under the **Environment Configuration** > **Certificates and Keys**
node in the Policy Studio tree. For more details, see
[Manage X.509 certificates and keys](/csh?context=619&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

For more information on Axway Validation Authority, see the Axway Validation Authority user documentation.
