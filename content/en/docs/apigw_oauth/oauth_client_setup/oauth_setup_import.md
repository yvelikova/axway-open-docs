---
title: Import sample client applications
linkTitle: Import sample client applications
date: 2019-11-18
description: The API Gateway ships with a number of preregistered sample client applications. For example, the default sample client applications include the following
---

| Client ID               | Client secret                          |
|-------------------------|----------------------------------------|
| `SampleConfidentialApp` | `6808d4b6-ef09-4b0d-8f28-3b05da9c48ec` |
| `SamplePublicApp`       | `3b001542-e348-443b-9ca2-2f38bd3f3e84` |

{{< alert title="Note" color="primary" >}}The sample client applications are for demonstration purposes only and should be removed before moving the authorization server into production. {{< /alert >}}

To import the sample client applications into the Client Application Registry, perform the following steps:

1. Access the Client Application Registry web interface at the following URL: https://localhost:8089
2. Enter the Client Application Registry user name and password.
3. Click the **Import** button at the top right of the window.
4. Select the following sample file in the dialog:

    ``` {space="preserve"}
    INSTALL_DIR/apigateway/samples/scripts/oauth/sampleapps.dat
    ```

5. You can also enter a **Decryption Secret** in the dialog. However, the `sampleapps.dat` file is in plain text format, and does not require a password.
6. Click **OK** to import the sample applications. The following figure shows these applications imported into the Client Application Registry:
    ![Client Application Registry HTML interface](/Images/OAuth/oauth_app_reg_ui.png)

Alternatively, you can use the following script to import the sample client application data without using the Client Application Registry web interface:

``` {space="preserve"}
INSTALL_DIR/apigateway/samples/scripts/oauth/importSampleData.py
```

Edit this script to configure your user credentials and file location.
