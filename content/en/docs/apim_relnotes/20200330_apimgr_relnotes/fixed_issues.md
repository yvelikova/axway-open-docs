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
|RDAPI-16631|01111760  01059684  01134442|**Issue**: Weak validation of Password Lifetime in password policy configuration of API Gateway Manager.</br>**Resolution**: Validation of Password Lifetime is improved in UI and backend as well.
|RDAPI-18473|111399|**Issue**: Customers cannot define "aud" JWT claim as an Additional JWT Claim in Get OAuth Access Token filter.</br>**Resolution**: aud JWT claim can be defined in Get OAuth Access Token filter. It will overwrite the default value set by API Gateway.
|RDAPI-18485|01055643  01137377|**Issue**: Message body is lost in case of OAuth token and refesh token expiry case.</br>**Resolution**: Message body is preserved in case of OAuth token and refresh token expiry.
|RDAPI-18737|111867|**Issue**: In API Manager, when flags "Delegate user management" and "Delegate application management" are turned off, the email address field of a user profile stays enabled; modifying its value leads to a deadlock forcing the user to refresh the browser.</br>**Resolution**: In API Manager, turning off "Delegate user management" and "Delegate application management" completely disables all fields on a user profile.
|RDAPI-18774|01078776  01109328  01110676|**Issue**: Nested relative path behavior changed, causing customer policies to fail.</br>**Resolution**: The invocation of policies for nested relative paths in API Gateway has been corrected according to Axway API Gateway documentation.
|RDAPI-18812|111036|**Issue**: Wildcard username and password database configuration does not work when used for OAuth access token store.</br>**Resolution**: Database connector fixed to support wildcard username and password when used in OAuth access token store.
|RDAPI-18983|112698|**Issue**: Configuring Certificate Chain filter with a large number of CA certificates result in high CPU consumption and high response time.</br>**Resolution**: Certificate Chain filter has been improved to reduce the number of signature calculation performed when validating a certificate chain.
|RDAPI-18999|01130847  01131098|**Issue**: In API Manager, when authenticating a request using multiple security devices in a security profile, an authentication failure in any of the security devices causes the request to be rejected.</br>**Resolution**:  Authentication is now successful when one of the security devices in the security profile successfully authenticates the caller.
|RDAPI-19004|113104|**Issue**: External Client Id can be set to null when a new external credential for an application is created and no value for External Client Id is provided.</br>**Resolution**: A random value is generated for External Client Id if no value is provided.
|RDAPI-19019|112866|**Issue**: When using the XML to JSON filter and enabling "Convert number/boolean/null elements" to "primitives" in a policy, the XML into JSON filter treats certain strings wrongly, like they were Big Decimals.</br>**Resolution**: The third party de.odysseus.staxon jar has been updated to latest codebase. (Version 1.4-AXWAY-1).
|RDAPI-19020|112119|**Issue**: Application Export DAT file is encrypted if the password field in the UI dialog contains data. Encrypt option is ignored if a password was previously set.</br>**Resolution**: Application Export DAT file will only be encrypted if the encrypt option is set and a password is provided.
|RDAPI-19032|01122840  01102901|**Issue**: Projpack is extremely slow to process large numbers of projects as it merges the same dependent projects multiple times.</br>**Resolution**: Duplicate dependent projects are removed from the projects to be merged and this reduces the merge time.
|RDAPI-19033|110944|**Issue**: Validation in UI does allow zero and decimal-values, but service is not able to handle them.</br>**Resolution**: Improved validation in UI does not allow zero, or decimal values in quota settings.
|RDAPI-19034|110943|**Issue**: UI Validation of quotas gets stuck in invalid state even when correct values are entered again.</br>**Resolution**: Validation gets correctly triggered on quota changes and behaves as it should.
|RDAPI-19048|108098|**Issue**: API Gateway Analytics metrics include include the start and end time data point, causing an overlap when combining consecutive time frames.</br>**Resolution**: Reports exclude the end time data point so that consecutive reports' metrics match the combined report totals.
|RDAPI-19066|111455|**Issue**: In API Gateway, calling the function "removeAttribute" on an XML Element in a Scripting Filter leads the Gateway to crash.</br>**Resolution**: Using the function "removeAttribute" on an XML Element in a Scripting Filter now remove the attribute correctly.
|RDAPI-19106|01119257  01135525|**Issue**: Front-end Organization object information becomes outdated when the name is changed.</br>**Resolution**: Changed Organization information is now being retrieved from the KPS when attempting to update.
|RDAPI-19107|111618|**Issue**: In API Gateway, when using an ICAP Filter, sending a file larger than the "Maximum Sent Bytes per Transaction" results in a crash.</br>**Resolution**: In API Gateway, sending a file larger than the "Maximum Sent Bytes per Transaction" to an ICAP server will stop the transaction and log that the limit has been reached.
|RDAPI-19170|110803|**Issue**: Get requests for WSDLs are not validating that the request path contains ?WSDL before path matching.</br>**Resolution**: Get requests for WSDLs now check for ?WSDL before path matching.
|RDAPI-19176|111127|**Issue**: Extract REST Request Attribute incorrectly validating the URI path as a host when attempting to decode the extracted attribute.</br>**Resolution**: Extract REST Request Attribute now treats the URI path correctly when decoding the extracted attribute.
|RDAPI-19209|01114234  01103799|**Issue**: API Gateway Analytics can't handle a time range greater than one year.</br>**Resolution**: Analytics has been updated to handle time ranges greater than one year.
|RDAPI-19223|01139040  01139863|**Issue**: Export of OAS3 (Swagger 3.0) is not restricted and fails in some cases.</br>**Resolution**: Export of OAS3 (Swagger 3.0) is restricted to backend APIs created with same version and code is fixed to not fail when some attribute values are missing.
|RDAPI-19236|112753|**Issue**: Performance Issues caused on Dashboard of API Gateway Manager UI caused by huge amounts of unnecessary data sent to UI.</br>**Resolution**: Performance of API Gateway Manager Dashboard improved by reducing the amount of data sent to UI.
|RDAPI-19264|01121103  01120682|**Issue**: In API Gateway, when using a "Execute External Process" filter, the timeout attribute can't be configured using a selector.</br>**Resolution**: In API Gateway, the timeout attribute of "Execute External Process" filter now accepts selectors.
|RDAPI-19424|114196|**Issue**: SSO LoginName is not set when using Okta as Identity Provider causing a Name field validation error when adding the user to the KPS.</br>**Resolution**: The Name field is now set to the Identity Provider defined Username by default.|

