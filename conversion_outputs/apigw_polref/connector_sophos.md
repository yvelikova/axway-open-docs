{
"title": "Scan with Sophos anti-virus",
"linkTitle": "Scan with Sophos anti-virus",
"date": "2019-10-17",
"description": "The **Sophos Anti-Virus**\\nfilter uses the Sophos Anti-Virus Interface (SAVI) to screen messages for viruses. You can configure the behavior of the Sophos library using configuration options available in the **Sophos Anti-Virus**\\nfilter."
}
﻿
<div id="p_connector_sophos_overview">

Overview
--------

The **Sophos Anti-Virus**
filter uses the Sophos Anti-Virus Interface (SAVI) to screen messages for viruses. You can configure the behavior of the Sophos library using configuration options available in the **Sophos Anti-Virus**
filter.

{{< alert title="Note" color="primary" >}}Because the API Gateway does not ship with any Sophos binaries, the API Gateway must be installed on the same machine as the Sophos AV distribution. On Linux, before starting the API Gateway, ensure that the Sophos AV `lib`
directory is on your `LD_LIBRARY_PATH`.{{< /alert >}}

</div>

<div id="p_connector_sophos_prereq">

Prerequisites
-------------

Integration with Sophos requires Sophos SAV Interface version 4.8. You must add the required third-party binaries to your API Gateway and Policy Studio installations.

**Add third-party binaries to API Gateway**

To add third-party binaries to API Gateway, perform the following steps:

1.  Add the binary files as follows:
    -   Add `.jar`
        files to the `INSTALL_DIR/apigateway/ext/lib`
        directory.
    -   Add `.so`
        files to the `INSTALL_DIR/apigateway/<platform>/lib` directory.

    >
2.  Restart API Gateway.

**Add third-party binaries to Policy Studio**

To add third-party binaries to Policy Studio, perform the following steps:

1.  Select **Window > Preferences > Runtime Dependencies**
    in the Policy Studio main menu.
2.  Click **Add**
    to select a JAR file to add to the list of dependencies.
3.  Click **Apply**
    when finished. A copy of the JAR file is added to the `plugins`
    directory in your Policy Studio installation.
4.  Click **OK**.
5.  Restart Policy Studio with the `-clean` option. For example:
6.  > cd INSTALL\_DIR/policystudio/\
    > policystudio -clean

</div>

<div id="p_connector_sophos_conf">

Sophos configuration settings
-----------------------------

All SAVI configuration options take the form of a name-value pair. Each name is unique and its corresponding value controls specific behavior in the Sophos anti-virus library (for example, decompress `.zip`
files to examine their content). You can specify these SAVI configuration settings in the **Sophos configuration settings**
section:

**Name**:\
The **Sophos Anti-Virus**
filter ships with two sets of default configuration settings: one for UNIX-based platforms, and the other for Windows platforms. Select the
Linux configuration settings for your target platform from the list.

You can create a new set of configuration options by clicking the **Add**
button, and adding the name-value pairs to the table provided. For convenience, you can base a new configuration set on a previously existing one, including the default Linux set. In this way, you can create a new configuration set that *inherits*
from the default set, and then adds more configuration options.

To add a new configuration name-value pair, click the **Add**
button under the table, and configure the following fields in the dialog:

**Name**:\
Enter a name for the SAVI configuration option. This name must be available in the version of the SAVI library that is used by the API Gateway. See your SAVI documentation for a complete reference on available options.

**Value**:\
Enter an appropriate value for the SAVI configuration option entered above. See your SAVI documentation for more information on acceptable values for this configuration option.

**Type**:\
Select the appropriate type of this configuration option from the list. See your SAVI documentation for more information on the type of the value for this configuration option.

</div>
