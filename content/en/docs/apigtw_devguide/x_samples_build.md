{
"title": "Build the code samples",
"linkTitle": "Build the code samples",
"date": "2019-11-27",
"description": "API Gateway provides several code samples that demonstrate the tasks described in this guide, such as adding a custom filter or adding a message listener to API Gateway. This topic describes how to build the code samples."
}
﻿

API Gateway provides several code samples that demonstrate the tasks described in this guide, such as adding a custom filter or adding a message listener to API Gateway. This topic describes how to build the code samples.

Build prerequisites
-------------------

API Gateway is built with JDK 1.8. To avoid `BadClassVersion` errors that might arise when deploying your sample classes with the API Gateway, you must also build the code samples with JDK 1.8.

Build the samples
-----------------

Complete the following steps to build the samples:

1.  Set the `VORDEL_HOME` and `POLICYSTUDIO_HOME` environment variables:
    -   Set the `VORDEL_HOME` environment variable to point to the root of your Axway API Gateway installation. For example, if you installed API Gateway in `C:\Axway7.8\apigateway`, set `VORDEL_HOME` to this directory.
    -   Set the `POLICYSTUDIO_HOME` environment variable to point to the root of your Policy Studio installation. For example, if you installed Policy Studio in `C:\Axway7.8\policystudio`, set `POLICYSTUDIO_HOME` to this directory.

>

Set the `JAVA_HOME` and `JUNIT_HOME` environment variables:

-   Set the `JAVA_HOME` environment variable to point to the root of a JDK 1.8 installation (for example,` C:\jdk1.8.0_07`).
-   Set the `JUNIT_HOME` environment variable to point to the directory containing your JUnit JAR file. The required version is 4.8.2 (for example, `junit_4.8.2.jar`).

Add Apache Ant to your `PATH` environment variable. For example, if Apache Ant is installed in `C:\ant`, add `C:\ant\bin` to your `PATH`. See the [Apache Ant website](http://ant.apache.org/) for more information on Apache Ant.

<http://www.igniterealtime.org/downloads/download-landing.jsp?file=smack/smack_3_2_2.zip>

b.  Save the Smack API to the `DEVELOPER_SAMPLES/lib` directory.
c.  Set the `JABBER_HOME` environment variable to point to the `DEVELOPER_SAMPLES/lib` directory.

To build and run each sample, follow these steps:

a.  Change to the directory where the sample is installed. Each sample is installed under `DEVELOPER_SAMPLES/SAMPLE_NAME` (for example, `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule`).
b.  Open the `README.TXT` file and follow the instructions to build and run the sample.

Description of samples
----------------------

The following code samples are included:

-   `DEVELOPER_SAMPLES/FilterInterceptorLoadableModule` – Sample classes that implement Java interfaces. For more information, see [*Java interfaces for extending* on page 1](java_extend_gateway.htm).

