---
title: Token information service flow
linkTitle: Token information service flow
weight: 90
date: 2019-11-18
description: You can use the token information service to validate that an access token was issued by the API Gateway. A request to the `tokenInfo` service is an HTTP `GET` request for information in a specified OAuth 2.0 access token.
---

![OAuth 2.0 Token Info](/Images/OAuth/APIgw_token_info.png)

The endpoint for the token information service is as follows:

``` {space="preserve"}
https://HOST:8089/api/oauth/tokeninfo
```

Getting information about a token from the authorization server only requires a `GET`request to the token info endpoint. For example:

``` {space="preserve"}
    GET /api/oauth/tokeninfo HTTP/1.1
    Host:192.168.0.48:8080
    access_token=4eclEUX1N6oVIOoZBbaDTI977SV3T9KqJ3ayOvs4gqhGA4
```

This request includes the following parameter:

| Parameter      | Description                                                                                                       |
|----------------|-------------------------------------------------------------------------------------------------------------------|
| `access_token` | Required. A token that you want information about (for example:`4eclEUX1N6oVIOoZBbaDTI977SV3T9KqJ3ayOvs4gqhGA4`) |

The following example uses this parameter:

``` {space="preserve"}
    https://apigateway/api/oauth/tokeninfo?access_token=4eclEUX1
    N6oVIOoZBbaDTI977SV3T9KqJ3ayOvs4gqhGA4
```

## Run the sample client

The following Jython sample client creates a token information request to the authorization server:

``` {space="preserve"}
    INSTALL_DIR/samples/scripts/oauth/token_info.py
```

To run the sample, open a shell prompt at `INSTALL_DIR/samples/scripts`, and execute the following command:

``` {space="preserve"}
    > run oauth/token_info.py
```

This displays the following dialog:

![Getting OAuth 2.0 Token Info](/Images/OAuth/oauth_token_info_dialog.png)

When the authorization server receives the token information request, it first ensures the token is in its cache (EhCache or Database), and then ensures the token is valid and has not expired.

The following is an example response:

``` {space="preserve"}
    Get token info for this token:BcYGjPOQSCrtbEc1F0ag8zf6OT9rCaMLiI1dYjFLT5zhxz3x5ScrdN
    Response from token info request is:200
    **********************TOKEN INFO RESPONSE***********************************
    Token audience received from authorization server:SampleConfidentialApp
    Scopes user consented to:https://localhost:8090/auth/userinfo.email
    Token expiry time:3566
    User id :admin
    ******************************************************************************
```

## Response codes

The following HTTP status codes are returned:

* 200 if processing is successful
* 400 on failure

The response is sent back as a JSON message. For example:

``` {space="preserve"}
    {
     "audience" :"SampleConfidentialApp",
     "user_id" :"admin",
     "scope" :"https://localhost:8090/auth/userinfo.email",
     "expires_in" :2518
    }
```

You can get additional information about the access token using message attributes. For more details, see [OAuth 2.0 server message attributes](/docs/apigw_oauth/oauth_message_attributes).
