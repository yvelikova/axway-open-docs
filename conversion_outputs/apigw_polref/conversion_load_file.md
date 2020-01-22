{
"title": "Load contents of a file",
"linkTitle": "Load contents of a file",
"date": "2019-10-17",
"description": "The **Load File**\\nfilter enables you to load the contents of the specified file, and set them as message content to be processed. When the contents of the file are loaded, they can be passed to the core message pipeline for processing by the appropriate message filters. For example, you might use the **Load File**\\nfilter in cases where an external application drops XML or JSON files on to the file system to be validated, modified, and potentially routed on over HTTP, JMS, or stored to a directory where the application can access them again. "
}
﻿
<div id="p_conversion_load_file_over">

Overview
--------

The **Load File**
filter enables you to load the contents of the specified file, and set them as message content to be processed. When the contents of the file are loaded, they can be passed to the core message pipeline for processing by the appropriate message filters. For example, you might use the **Load File**
filter in cases where an external application drops XML or JSON files on to the file system to be validated, modified, and potentially routed on over HTTP, JMS, or stored to a directory where the application can access them again.

For example, this sort of protocol mediation can be useful when integrating legacy systems. Instead of making drastic changes to the legacy system by adding an HTTP engine, the API Gateway can load files from the file system, and route them on over HTTP to another back-end system. The added benefit is that messages are exposed to the full range of message processing filters available in the API Gateway. This ensures that only properly validated messages are routed on to the target system.

</div>

<div id="p_conversion_load_file_conf">

Configuration
-------------

Configure the following fields.

<div id="p_conversion_load_file_input">

### Input settings

**File**:\
Enter the name of the file to load, or browse to the file in the file system. This setting is required.

</div>

<div id="p_conversion_load_file_output">

### Processing settings

The fields in this section determine what processing is performed on the input files, and where files are placed before and after processing.

**Processing Directory**:\
Enter or browse to the directory to which the input file is copied prior to processing. This field is optional. If this is not specified, the input file remains in the current input directory.

**Response Directory**:\
Enter or browse to the directory to which the response file is copied. This field is optional. If this is not specified, the response file is not written to disk.

**Processing Policy**:\
Select the policy executed on the input file. For example, the policy could perform message validation, routing, virus checking, or XSLT transformation. This field is optional.

**File Type**:\
Specifies how the input file is interpreted. Select one of the following options:

-   **Raw**:\
    Assumes a content-type of `application/octet-stream`. This is the default.
-   **Treat as HTTP Message (including headers)**:\
    Assumes the inbound file contains an HTTP request (optionally with HTTP headers).
-   **Infer content-type from extension**:\
    Performs a lookup on configured MIME types to determine the content-type of the file based on its extension.
-   **Use Content-type**:\
    Enables you to specify a content-type in the text box.

</div>

<div id="p_conversion_load_file_comp">

### On completion settings

You can specify what to do when the file processing has completed. Select one of the following options:

-   **Do Nothing**:\
    The input file remains in the input directory or in the **Processing Directory**. This is the default.
-   **Delete Input File**:\
    The input file is deleted from the input directory or the **Processing Directory**.
-   **Move Input File**:\
    The input file is moved (archived) to the directory specified in the **To Directory**
    field. You can also specify an optional **File Prefix**
    or **File Suffix**
    for the archived file.

</div>

</div>
