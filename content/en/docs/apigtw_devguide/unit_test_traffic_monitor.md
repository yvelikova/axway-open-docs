{
"title": "Unit test a filter using the Traffic Monitor API",
"linkTitle": "Unit test a filter using the Traffic Monitor API",
"date": "2019-11-27",
"description": "The following example shows you how to create JUnit tests to test a custom filter using the Traffic Monitor API. Any JUnit test classes you write should extend and use the existing test classes that are shipped with API Gateway, as these test classes provide several assertions that are used to evaluate the responses returned."
}
﻿

The following example shows you how to create JUnit tests to test a custom filter using the Traffic Monitor API. Any JUnit test classes you write should extend and use the existing test classes that are shipped with API Gateway, as these test classes provide several assertions that are used to evaluate the responses returned.

The two main classes to use are:

-   `TestClientResponse` – Uses Jersey client APIs to send GET and POST requests to API Gateway. The JAR files can be found in the `INSTALL_DIR/apigateway/system/lib/modules` directory.
-   `TrafficMonitorClient` – Used to invoke the Traffic Monitor REST API, which monitors the traffic in and out of the API Gateway, and evaluate the responses returned. These classes are contained in `testClient.jar`, which can be found in the `INSTALL_DIR/apigateway/system/lib/` directory.

{{< alert title="Note" color="primary" >}}A Node Manager and an API Gateway instance must be running before the JUnit tests can be run.{{< /alert >}}

Write a JUnit test for the Health Check policy filters
------------------------------------------------------

Perform the following steps to write a JUnit test for the Health Check policy filters:

1.  Create a test class called `TestHealthCheck`. It should extend the `TestClientResponse` utility class, which contains several assertion methods that can be used to test the client responses returned from a web resource. For example:
2.  ``` {space="preserve"}
    import com.vordel.ops.TestClientResponse;

    public class TestHealthCheck extends TestClientResponse {
    …
    }
    ```

3.  Within the `setup` method, create a new instance of a `com.vordel.ops.TrafficMonitorClient`. This client contains several assertion methods that can be used to evaluate the response based on the traffic information in and out of the API Gateway, and the CorrelationId.
4.  ``` {space="preserve"}
    @BeforeClass
    public static void setup() throws NodeManagerAPIException {
      client = new TrafficMonitorClient("https", "localhost", "8090", 
        SERVER_ID, USERNAME, PASSWORD);
    }
    ```

5.  Create a test case that invokes a request and evaluates the response returned using the `TrafficMonitorClient`. Each filter of the policy can be evaluated to determine if it passed or failed.
6.  ``` {space="preserve"}
    import javax.ws.rs.core.Response;

    @Test
    public void testHealthCheck() {
         
        // Execute health check policy
        Response response = get("http://localhost:8080/healthcheck");
        assertStatusCode(response, 200);

        // Get its correlation id.
        String correlationId = getCorrelationId(response);                               
        // check HTTP header
        assertContainsHeader(response, "Host");
         
        // check HTTP header and value
        assertContainsHeaderWithValue(response, "Host", "localhost:8080");           
        // Check that Set Message and Reflect Filters pass.
        client.assertFilterPassed(correlationId, "Set Message", "Reflect");
         
        // Ensure fault handlers did not fire.
        client.assertFilterOfTypeDidNotExecute(correlationId, "GenericError");
        client.assertFilterOfTypeDidNotExecute(correlationId, "JSONError");
        client.assertFilterOfTypeDidNotExecute(correlationId, "SOAPFault");
             
        client.assertNFiltersPassed(correlationId, 2);
        client.assertNFiltersFailed(correlationId, 0);                       
    }
    ```

For more information on the client assertion methods, go to [API Gateway Javadoc](https://support.axway.com/htmldoc/1433380)
.
