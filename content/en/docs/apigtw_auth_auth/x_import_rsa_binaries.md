{
"title": "Add RSA Access Manager binaries to API Gateway",
"linkTitle": "Add RSA Access Manager binaries to API Gateway",
"date": "2020-01-20",
"description": "You must copy RSA Access Manager libraries to API Gateway, so you must have RSA Access Manager installed on a server."
}
﻿

You must copy RSA Access Manager libraries to API Gateway, so you must have RSA Access Manager installed on a server.

1.  Copy the following files from the `lib` directory on your RSA Access Manager installation:
2.  -   `axm-core-6.2.jar`
    -   `cryptojce-6.1.jar`
    -   `cryptojcommon-6.1.jar`
    -   `jcm-6.1.jar`

3.  Add the files to the `INSTALL_DIR/apigateway/ext/lib` directory on API Gateway:
4.  Restart API Gateway.

