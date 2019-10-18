{
"title": "Send a request with API Tester",
"linkTitle": "Send a request with API Tester",
"date": "2019-10-17",
"description": "This topic describes how to create and send a request in the API Tester test client GUI. You can start API Tester using the `apitester`\\ncommand from the installation directory."
}
﻿
<div id="p_sample_policies_soapbox_overview">

Overview
--------

This topic describes how to create and send a request in the API Tester test client GUI. You can start API Tester using the `apitester`
command from the installation directory.

{{< alert title="Note" color="primary" >}}API Tester is deprecated and will be removed in a future release.{{< /alert >}}

</div>

<div id="p_sample_policies_soapbox_create">

Create a request in API Tester
------------------------------

To create a request, perform the following steps:

1.  Click the down arrow button beside the Send Request button in the toolbar, and select **Request Settings**:
2.  ![Select Request Settings](/Images/docbook/images/samples/soapbox_create_request.gif)
3.  In the Request Settings
    dialog, click the **Add Request**
    button in the toolbar:
4.  ![Select Add Request](/Images/docbook/images/samples/soapbox_add_request.gif)
5.  Enter the details for the request to execute in the Add Request Configuration
    dialog. For example, enter `http://localhost:8080/conversion` in the **URL** field. If the **Request name matches URL**
    setting is not selected, you can supply a custom **Request Name**
    for this request. Click **OK**
    to save the request configuration.
6.  ![Add Request Configuration](/Images/docbook/images/samples/soapbox_add_request_dialog.gif)
7.  Click the down arrow button beside the Send Request button in the toolbar, and select the request that you created in the **Select Request Configuration**
    menu:
8.  ![Select Request Configuration](/Images/docbook/images/samples/soapbox_select_request.gif)
9.  In the main menu, select **File** >**Load Request**, and browse to the file to use as input for this request. For example, you can select the following file for the Virtualized Service sample:
10. INSTALL_DIR/samples/SamplePolicies/VirtualizedService/Request.xml

11. Click the Send Request button in the toolbar to send the request.

</div>

<div id="p_sample_policies_soapbox_further_info">

Further information
-------------------

For more details on using the API Tester client GUI tool, see the API Tester online help.

</div>
