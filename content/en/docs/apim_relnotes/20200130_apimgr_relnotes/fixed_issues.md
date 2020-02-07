{
"title": "Fixed issues",
"linkTitle": "Fixed issues",
"weight": "20",
"date": "2019-09-20",
"description": "Listing of fixed issues in this release of API Gateway and API Manager."
}

This version of API Gateway and API Manager includes the fixes from all 7.5.3, 7.6.2, and 7.7 service packs or updates released prior to this version. For details of all the service pack fixes included, see corresponding _SP Readme_ attached to each service pack on [Axway Support](https://support.axway.com).

## Fixed security vulnerabilities

There are no fixed security vulnerabilities in this version.

## Other fixed issues

| Internal ID | Case ID       | Description                                                                    |
| ----------- | ------------- | ------------------------------------------------------------------------------ |
| RDAPI-18533|612543 01095012 01094618                            |**Issue**: **Retrieve OAuth Client Access Token from Token Storage** filter requires a hard-coded client credential profile. **Resolution**: This filter reads the client credential profile from the whiteboard in the same way as the **Get OAuth Access Token** filter.
| RDAPI-18647|616503 01103775 01073101                            |**Issue**: XML redaction is very slow when processing large XML files. **Resolution**: XML redaction has been fully rewritten to increase performance and reduce the memory foot print. You can control the maximum memory size and the maximum acceptable XML nodes depth using the properties `<XMLRedactor maxBufferSize="32768" maxDepth="1024">`. **Issue**: XML redaction with disposition `redactDescendants` is only removing children nodes. **Resolution**: XML redaction correctly removes both text and children nodes.
| RDAPI-18669|622369 01088090                                      |**Issue**: **Get OAuth Client Access Token** filter does not handle array data on the JSON returned by the OAuth server. **Resolution**: The JSON can contain arrays as additional information.
| RDAPI-18797|629370 01119493 01123904 01122491 01119522            |**Issue**: API Gateway 7.7 does not allow underscores in API Manager back-end URLs as per RFC952. If you upgrade from an earlier version of API Gateway (which allowed underscores) and you are using underscores in the host name component of your back-end URLs, calls to these APIs will fail. **Resolution**: Set the new JVM property `com.axway.apimanager.backend.url.validation.hostname.allowunderscore` to `true` in the `jvm.xml` configuration to allow underscores in the host name part of an API Manager back-end URL.
| RDAPI-18851|642983 01127663                                       |**Issue**: Some APIs are not working after upgrade from 7.5.3 to 7.7 and logs show an error `Unrecognized field "blob"`. **Resolution**: Field `blob` was added to 7.7 to match the 7.5.3 method definition.|
