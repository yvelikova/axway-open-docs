{
"title": "JSON schema validation",
"linkTitle": "JSON schema validation",
"date": "2019-10-17",
"description": "The API Gateway can check that JavaScript Object Notation (JSON) messages conform to the format expected by a web service by validating requests against a specified JSON schema. A JSON schema precisely defines the items that constitute an instance of an incoming JSON message. It also specifies their data types to ensure that only appropriate data is allowed through to the web service."
}
﻿
<div id="p_content_schema_json_overview">

The API Gateway can check that JavaScript Object Notation (JSON) messages conform to the format expected by a web service by validating requests against a specified JSON schema. A JSON schema precisely defines the items that constitute an instance of an incoming JSON message. It also specifies their data types to ensure that only appropriate data is allowed through to the web service.

For example, the following simple JSON schema requires that all requests sent to a particular web service use this format:

``` {space="preserve"}
{
  "description":"A geographical coordinate",
  "type":"object",
  "properties":{
    "latitude":{"type":"number"},
    "longitude":{"type":"number"}
  }
}
```

If a **JSON Schema Validation**
filter is configured with this JSON schema, and the API Gateway receives an incorrectly formed message, the API Gateway rejects that message.

For example, the following message would pass because it specifies the coordinates correctly as numbers:

``` {space="preserve"}
{
  "latitude":55.22,
  "longitude":117.22
}
```

However, the following message would fail because it specifies the coordinates incorrectly as strings:

``` {space="preserve"}
{
  "latitude":"55.22",
  "longitude":"117.22"
}
```

You can find the **JSON Schema Validation**
filter in the **Content Filtering**
category of filters in the Policy Studio. Drag and drop the filter on to the policy where you want to perform JSON schema validation.

API Gateway supports [draft version 3](http://tools.ietf.org/html/draft-zyp-json-schema-04) and [draft version 4](http://tools.ietf.org/html/draft-zyp-json-schema-03) of the JSON Schema specification. For more details on JSON schemas, see [http://www.json-schema.org](http://www.json-schema.org/).

</div>

<div id="p_content_schema_json_config">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**Select which JSON schema to validate messages with**:\
Select one of the following options:

-   **Use JSON schema file**\
-   Click the button on the right, and select a JSON schema to validate incoming messages from the tree in the dialog. To add a schema, right-click the **JSON Schemas**
    node, and select **Add Schema**
    to load the schema from a `.json`
    file. Alternatively, you can configure schemas under the **Resources** > **JSON Schemas**
    node in the Policy Studio tree. By default, the API Gateway provides the example JSON schemas available from [http://www.json-schema.org](http://www.json-schema.org/).
-   Select the **Use v4 draft validator** to validate against [draft version 4](http://tools.ietf.org/html/draft-zyp-json-schema-03) of the JSON Schema specification, or select **Use v3 draft validator** to validate against [draft version 3](http://tools.ietf.org/html/draft-zyp-json-schema-04) of the JSON Schema specification. The default is v4.
-   **Use this class**\
-   Enter the Java class name used to specify the JSON schema (for example, `com.vordel.samples.GeoLocationTest`), and enter the name of message attribute to store the created object (for example, `my.geo.location`).This option enables you to take incoming JSON message data and deserialize it into a Java object.

### Example using a Java class

For example, to use a Java class for the geographical schema used in the previous section, perform the following steps:

1.  Create the annotated Java class as follows:
2.  ``` {space="preserve"}
    package com.vordel.samples;
    import java.lang.String;
    import javax.xml.bind.annotation.XmlAttribute;
    import javax.xml.bind.annotation.XmlRootElement;

    @XmlRootElement
    public class GeoLocationTest {
        public GeoLocationTest() { }
        public int latitude;
        public int longitude;
    }
    ```

3.  Place this class in a JAR file, and put it in the API Gateway `ext/lib`
    directory.
4.  In the **JSON Schema Validation**
    filter window, enter `com.vordel.samples.GeoLocationTest` in the **Use this class**
    field.
5.  Enter `my.geo.location` in the **Store created object in message attribute**
    field.

At runtime when the JSON message arrives, the API Gateway takes the JSON data and tries to instantiate a new `GeoLocationTest`
object. If this succeeds, the **JSON Schema Validation**
filter passes. However, if the object cannot be instantiated, the filter fails because the incoming data does not conform to the JSON schema specified by the annotated class.

</div>

<div id="p_content_schema_json_script">

Generate a JSON schema using Jython
-----------------------------------

The API Gateway also provides a Jython script to enable you to generate a JSON schema based on a specified Java annotated class. This script is available in the following directory of your API Gateway installation:

``` {space="preserve"}
INSTALL_DIR/apigateway/samples/scripts/json/schemagenerator.py
```

Given an annotated Java `.class`
file, you can generate a schema from this and output a `.json`
schema file. This schema can then be imported into the API Gateway schema library and used subsequently for future validations.

For example, using the Java class from the previous section, you can generate the schema as follows:

    sh run.sh json/schemagenerator.py com.vordel.samples.GeoLocationTest MyLocationSchema.json

This script requires that you specify the location of your JAR file. You can do this by setting the `JYTHONPATH`
environment variable, for example:

    export JYTHONPATH=/home/user/mylocation.jar

Alternatively, if you have compiled your classes to `/home/user/classes`, specify the following:

    export JYTHONPATH=/home/user/classes

For more details on using Jython, see <http://www.jython.org/>.

Exceptions
----------

The **JSON Schema Validation** filter aborts with a `CircuitAbortException` if:

-   Content body of the payload is not in valid JSON format
-   **Use this class** option is selected to validate schema and the specified Java class is not found
-   **Use JSON schema file** option is selected and the payload is not in valid JSON format

</div>
