{"title":"Troubleshoot API Portal","linkTitle":"Troubleshoot API Portal","weight":"23","date":"2019-07-30","description":""} 

This section outlines the specifics of the solution troubleshooting steps, as well as some general troubleshooting approach recommendations.

General troubleshooting steps
-----------------------------

Use these steps if you encounter any problems with this solution:

1.  Check if your issue and a workaround for it is listed in the "Known issues" section of *API Gateway Release Notes* shipped with the installed package.
2.  Restart the failing servers or clients.
3.  Collect the log files, screen shots, and any other data related to the issue, and contact Axway Global Support or your Axway Services contact.

The Apache `error_log` file is located at `/var/log/apache2/`.

You can also turn on Joomla error reporting on the **System > Global Configuration > Server** tab in the Joomla administrator UI, and set the error reporting to the desired level. However, use caution, because this may lead to warnings and errors on the API Portal pages. It is recommended that you do this only in critical situations, and not in production environment.

API response class details missing
----------------------------------

The following is an example of missing response class details. An `array[null]` value is displayed instead of details:

![An example of an "array\[null\]" Response Class with missing details](/Images/APIPortal/troubleshooting1.png)

The following is an example of the expected response class details:

![An example showing an expected response class](/Images/APIPortal/troubleshooting2.png)

To solve this issue, set the correct return type for any APIs causing the error, and then republish them:

1.  Log in to API Manager, and click **API Registration**.
2.  Select the API causing the error, click **Manage selected**, and select **Unpublish**. You can unpublished multiple APIs at one go.
3.  Click the API, select the **API Methods** tab, set **Response type** for the method causing the error, spoand click **Save**.
4.  Go back to **API Registration**, select the edited API, click **Manage selected**, and select **Publish**.

