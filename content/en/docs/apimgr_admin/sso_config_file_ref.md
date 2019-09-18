{
"title": "service-provider.xml reference",
"linkTitle": "service-provider.xml reference",
"date": "2019-09-17",
"description": "This section describes the elements in the `service-provider.xml` configuration file."
}
﻿

This section describes the elements in the `service-provider.xml` configuration file.

<SSOConfiguration>

This is the root element of the configuration descriptor. This section contains one `<CertificateValidation>` element (optional), one `<ServiceProvider>` element and one `<IdentityProviders>` element.

<CertificateValidation>

This element describes the certificate validation. You can configure certificate validation to validate the SP and IdP certificates at startup. The following attributes are supported:

<div class="indentTableNested">

| Attribute                     | Description                                                                                                                                                        |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pathValidation                | If set to `true`, the certification path for each certificate will be checked. If set to `false`, the agent verifies only the validity period of each certificate. 
                                                                                                                                                                      
  A trust store must be specified if this attribute is `true`.                                                                                                        |
| enableRevocation              | If set to `true`, the agent also verifies if the certificates are not revoked.                                                                                     |
| trustStorePath                | The path to the trust store containing the trusted certificates.                                                                                                   |
| trustStorePassword            | The password to access the trust store.                                                                                                                            |
| intermediateStorePath         | The path to a store containing intermediate certificates that can appear in certificate chains.                                                                    |
| intermediateStorePassword     | The password to access the intermediate certificates store.                                                                                                        |
| delayBetweenValidations       | Defines at which interval certificate validation occurs, in hours.                                                                                                 |

</div>

To disable certificate validation, set `pathValidation` to false. For example:

<div class="indentTableNested">

``` {space="preserve"}
<CertificateValidation
    pathValidation="false"
    ...
</CertificateValidation>
```

</div>

<ServiceProvider>

This element describes the SP. The following attributes are supported:

<div class="indentTableNested">

| Attribute               | Description                                                                                                                                                       |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId                | Sets the unique identifier of the SP. This identifier is sent to the IdP so it can know who is requesting an authentication or logging out.                       |
| useAppSessions          | Delegates the session management to the application. The default value is `true`.                                                                                 |
| filteredUri             | Specifies the URI of the SSO filter entry point for authentication. Set this value to `/sso/login`.                                                               
                                                                                                                                                                     
  The SSO filter only manages login URI, for other requests the application must redirect to SSO filter to manage authentication.                                    
                                                                                                                                                                     
  If the user is not authenticated, a SAML authentication request is built and sent to the IdP. Otherwise, the security token is forwarded to the application.       |
| logoutUri               | Specifies the URI of the SSO filter entry point for logout process. Set this value to `/sso/logout`.                                                              
                                                                                                                                                                     
  The SSO filter generates a logout request and sends it to the IdP.                                                                                                 |
| logoutRedirectUri       | Specifies the URI where to redirect after the logout process. Set this value to `/api/portal/v1.3/sso/login` to redirect the user to the login page after logout. |
| keystore                | Specifies the name of a keystore where the private key of the SP is stored. The default value is `conf/sso.jks`.                                                  
                                                                                                                                                                     
  The SP uses this private key to sign messages to the IdP, and to decrypt messages from the IdP that the IdP has encrypted with the SP's public key.                
                                                                                                                                                                     
  When you set this attribute, you must also set the associated attributes `keystorePassphrase` and `keyAlias`.                                                      
                                                                                                                                                                     
  The keystore must be in the `classpath` of the application or in its working directory. The keystore format must be `.jks`.                                        |
| keystorePassphrase      | Specifies the password of the keystore.                                                                                                                           |
| keyAlias                | Specifies the alias of the SP's private key in the keystore.                                                                                                      |
| sessionIdCookieName     | Sets the name of the cookie where the SSO session identifier is stored if the SSO module is the session manager. The recommended value is `spSessionId2`.         |

</div>

<AssertionConsumerService>

This element specifies an entry point for receiving SAML assertions from the IdP.

<SingleLogoutService>

This element specifies the IdP URL where the logout responses are sent. Only `HTTP-POST` binding is managed.

<IdentityProviders>

This element describes the entity that exchanges SAML messages with the SSO filter. This section contains a section called `<SamlIdentityProvider>`, which supports the following attributes:

<div class="indentTableNested">

| Attribute                     | Description                                                                                                                                                                                                                                                                                                                             |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entityId                      
                                
     format                     | Sets the unique identifier of the IdP. These values must match the `entityId` and `format` values of the Issuer element in the SAML assertions.                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                           
  If the SAML assertion does not have the `format` set, omit the `format` element.                                                                                                                                                                                                                                                         |
| metadataUrl                   | Specifies the URL of the metadata file. The default value is `./idp.xml`.                                                                                                                                                                                                                                                               |
| userNameAttribute             | Specifies the name of the IdP attribute that provides the user name. The default value is `urn:oid:2.5.4.42`.                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                           
  When a user is authenticated, the SSO filter sets a principal on the `HttpServletRequest`. By default, the name of this principal is extracted from the `Subject` element in the assertions of an authentication response. If `userNameAttribute` is set, the name of the principal is set to the value of the specified IdP attribute.  |
| verifyAssertionExpiration     | Verifies the validity period of a SAML assertion. The default value is `false`.                                                                                                                                                                                                                                                         |

</div>

<Mappings>

This element contains the mappings to be applied on the IdP attributes.

<Features>

You can set extra features in the configuration file to fine-tune the SP and the IdPs.
