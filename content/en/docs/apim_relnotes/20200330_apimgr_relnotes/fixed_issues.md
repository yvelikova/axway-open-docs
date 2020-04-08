{
"title": "Fixed issues",
  "linkTitle": "Fixed issues",
  "weight": "20",
  "date": "2020-03-11",
  "description": "Listing of fixed issues in this release of API Gateway and API Manager."
}

This version of API Gateway and API Manager includes the fixes from all 7.5.3, 7.6.2, and 7.7 service packs or updates released prior to this version. For details of all the service pack fixes included, see corresponding _SP Readme_ attached to each service pack on [Axway Support](https://support.axway.com).

## Fixed security vulnerabilities

There are no fixed security vulnerabilities in this version.

## Other fixed issues

| Internal ID | Case ID       | Description                                                                    |
| ----------- | ------------- | ------------------------------------------------------------------------------ |
|RDAPI-16631|01111760  01059684  01134442|**Issue**: Weak validation of Password Lifetime in password policy configuration of API Gateway Manager. **Resolution**: Validation of Password Lifetime has been improved.
|RDAPI-18473|111399|**Issue**: Customers cannot define `aud` JWT claim as an Additional JWT Claim in Get OAuth Access Token filter. **Resolution**: `aud` JWT claim can be defined in Get OAuth Access Token filter and overwrites the default value set by API Gateway.
|RDAPI-18485|01055643  01137377|**Issue**: Message body is lost in case of OAuth token and refresh token expiry case. **Resolution**: Message body is preserved in case of OAuth token and refresh token expiry.
|RDAPI-18737|111867|**Issue**: In API Manager, when flags **Delegate user management** and **Delegate application management** are turned off, the email address field of a user profile stays enabled and modifying its value leads to a deadlock forcing the user to refresh the browser. **Resolution**: Turning off **Delegate user management** and **Delegate application management** completely disables all fields on a user profile.
|RDAPI-18774|01078776  01109328  01110676|**Issue**: A change in the behavior of nested relative paths was causing customer policies to fail. **Resolution**: The invocation of policies for nested relative paths in API Gateway has been corrected.
|RDAPI-18812|111036|**Issue**: Wildcard user name and password database configuration does not work when used for OAuth access token store. **Resolution**: Database connector fixed to support wildcard user name and password when used in OAuth access token store.
|RDAPI-18983|112698|**Issue**: Configuring Certificate Chain filter with a large number of CA certificates results in high CPU consumption and high response time. **Resolution**: Certificate Chain filter has been improved to reduce the number of signature calculations performed when validating a certificate chain.
|RDAPI-18999|01130847  01131098|**Issue**: In API Manager, when authenticating a request using multiple security devices in a security profile, an authentication failure in any of the security devices causes the request to be rejected. **Resolution**:  Authentication succeeds when one of the security devices in the security profile successfully authenticates the caller.
|RDAPI-19004|113104|**Issue**: External Client ID can be set to null when a new external credential for an application is created and no value for External Client ID is provided. **Resolution**: A random value is generated for External Client ID if no value is provided.
|RDAPI-19019|112866|**Issue**: When using the XML to JSON filter and enabling the conversion of number/boolean/null elements to primitives in a policy, the XML into JSON filter treats certain strings incorrectly. **Resolution**: The third party `de.odysseus.staxon` jar has been updated to latest codebase (Version 1.4-AXWAY-1).
|RDAPI-19020|112119|**Issue**: Application Export DAT file is encrypted if the password field in the UI dialog contains data. Encrypt option is ignored if a password was previously set. **Resolution**: Application Export DAT file is only be encrypted if the encrypt option is set and a password is provided.
|RDAPI-19032|01122840  01102901|**Issue**: The `projpack` utility is extremely slow to process large numbers of projects as it merges the same dependent projects multiple times. **Resolution**: Duplicate dependent projects are removed from the projects to be merged and this reduces the merge time.
|RDAPI-19033|110944|**Issue**: Validation in UI allows zero and decimal-values, but service is not able to handle them. **Resolution**: Improved validation in UI does not allow zero or decimal values in quota settings.
|RDAPI-19034|110943|**Issue**: UI validation of quotas gets stuck in invalid state even when correct values are entered again. **Resolution**: Validation gets correctly triggered on quota changes and behaves as it should.
|RDAPI-19048|108098|**Issue**: API Gateway Analytics metrics include the start and end time data point, causing an overlap when combining consecutive time frames. **Resolution**: Reports exclude the end time data point so that consecutive reports' metrics match the combined report totals.
|RDAPI-19066|111455|**Issue**: In API Gateway, calling the function `removeAttribute` on an XML element in a Scripting filter causes the API Gateway to crash. **Resolution**: Using the function `removeAttribute` removes the attribute correctly.
|RDAPI-19106|01119257  01135525|**Issue**: Front-end organization object information becomes outdated when the name is changed. **Resolution**: Changed organization information is retrieved from the KPS when attempting to update.
|RDAPI-19107|111618|**Issue**: In API Gateway, when using an ICAP filter, sending a file larger than the **Maximum Sent Bytes per Transaction** results in a crash. **Resolution**: Sending a file larger than the **Maximum Sent Bytes per Transaction** to an ICAP server stops the transaction and logs that the limit has been reached.
|RDAPI-19170|110803|**Issue**: Get requests for WSDLs are not validating that the request path contains `?WSDL` before path matching. **Resolution**: Get requests for WSDLs check for `?WSDL` before path matching.
|RDAPI-19176|111127|**Issue**: Extract REST Request Attribute incorrectly validating the URI path as a host when attempting to decode the extracted attribute. **Resolution**: Extract REST Request Attribute treats the URI path correctly when decoding the extracted attribute.
|RDAPI-19209|01114234  01103799|**Issue**: API Gateway Analytics cannot handle a time range greater than one year. **Resolution**: Analytics has been updated to handle time ranges greater than one year.
|RDAPI-19223|01139040  01139863|**Issue**: Export of OAS3 (Swagger 3.0) is not restricted and fails in some cases. **Resolution**: Export of OAS3 (Swagger 3.0) is restricted to back-end APIs created with the same version and does not fail when some attribute values are missing.
|RDAPI-19236|112753|**Issue**: Performance issues on Dashboard of API Gateway Manager UI. **Resolution**: Performance of API Gateway Manager Dashboard has been improved by reducing the amount of data sent to the UI.
|RDAPI-19264|01121103  01120682|**Issue**: In API Gateway, when using a Execute External Process filter, the timeout attribute cannot be configured using a selector. **Resolution**: The timeout attribute of the Execute External Process filter now accepts selectors.
|RDAPI-19424|114196|**Issue**: SSO LoginName is not set when using Okta as an Identity Provider, causing a Name field validation error when adding the user to the KPS. **Resolution**: The Name field is now set to the Identity Provider defined user name by default.|
