{
    "title": "API Manager response codes",
    "linkTitle": "Response codes",
    "weight": "4",
    "date": "2019-09-17",
    "description": "HTTP response codes that the API Manager runtime can return when a transaction is terminated by an API Manager-enabled API Gateway."
}

| Response code | Response text              | Reason                                                                                                                                        |
|---------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 400           | Bad Request                | <ul><li>Malformed URI received</li><li>Content-type checking failed</li><li>Parameter validation failed</li><li>Unable to resolve path parameters</li><li>Unable to encode outbound parameters as UTF-8</li></ul>                                                                                              |
| 401           | Unauthorized               | Authentication failure (Inbound security device authentication failed)                                                                        |
| 403           | Forbidden                  | <ul><li>Authorization failure (API being invoked has not been granted access to the application associated with the presented client credentials)</li><li>Presented CORS Origin does not match Javascript Origin configured for the presented client credentials</li></ul>                                     |
| 404           | No match found for request | Unable to find a matched API method                                                                                                           |
| 404           | General Exception          | Generic error thrown by the underlying API Gateway (on which the API Managerruntime is running) when an unexpected exception occurs           |
| 405           | Method Not Allowed         | No match found for the presented verb/path combination (there may be a match on path, but not on verb)                                        |
| 429           | Too Many Requests          | Configured quota has been exceeded                                                                                                            |
| 500           | Internal Server Error      | Generic error returned when an unexpected exception occurs (for example, Cassandra not reachable)                                             |
| 500           | Unexpected API invocation  |                                                                                                                                               |
| 504           | Gateway Timeout            | Gateway times out when attempting to contact a back-end service via the Connection or Connect to URL filter                                   |
