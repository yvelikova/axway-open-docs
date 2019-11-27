{
"title": "Write a custom filter using the extension kit",
"linkTitle": "Write a custom filter using the extension kit",
"date": "2019-11-27",
"description": "The following sections refer to `jabber` sample code that is no longer included in the code samples supplied with API Gateway. We recommend that you use this section only as a general guide for writing a custom filter using the extension kit. "
}
﻿

{{< alert title="Note" color="primary" >}}The following sections refer to `jabber` sample code that is no longer included in the code samples supplied with API Gateway. We recommend that you use this section only as a general guide for writing a custom filter using the extension kit. {{< /alert >}}

In this approach, you write your custom filter using the API Gateway developer extension kit. This section details how to write a custom message filter, called the **Jabber Filter** (API Gateway runtime component and Policy Studio configuration component). It also shows how to configure it as part of a policy in Policy Studio and then demonstrates how the filter sends an instant message to an account on Google Talk.

The steps required to build, integrate, configure, and test the supplied `JabberFilter` and `JabberProcessor` sample classes are as follows:

+--------------------+-------------------------------------------------+
| Step               | Description                                     |
+====================+=================================================+
| [Create the        | Every filter has an associated XML-based        |
| TypeDoc](extkit_cr | TypeDoc description file that contains the      |
| eate_typedoc.htm)  | entity type definition. It defines the          |
|                    | configuration field names for that filter and   |
|                    | the corresponding data types for that filter.   |
+--------------------+-------------------------------------------------+
| [Create the Filter | Every message filter returns its corresponding  |
| class](extkit_crea | Processor and Policy Studio classes.            |
| te_filterclass.htm |                                                 |
| )                  |                                                 |
+--------------------+-------------------------------------------------+
| [Create the        | The Processor class is the API Gateway runtime  |
| Processor          | component that is responsible for processing    |
| class](extkit_crea | the message. Every message filter has an        |
| te_processorclass. | associated Processor and Filter class.          |
| htm)               |                                                 |
+--------------------+-------------------------------------------------+
| [Create the        | The declarative XML file is used to define the  |
| declarative UI XML | user interface for filters and dialogs.         |
| file](extkit_creat |                                                 |
| e_decuixml.htm)    |                                                 |
+--------------------+-------------------------------------------------+
| [Create the        | All filters are configured using Policy Studio. |
| classes](extkit_cr | Every filter has a configuration wizard that    |
| eate_psclasses.htm | enables you to set each of the fields defined   |
| )                  | in the entity that corresponds to that filter.  |
|                    | You can then add the filter to a policy to      |
|                    | process messages.                               |
+--------------------+-------------------------------------------------+
| [Build the         | When the classes are written, you must build    |
| classes](extkit_bu | them and add them to the API Gateway and client |
| ild_classes.htm)   | CLASSPATH. Example classes are included in the  |
|                    | `DEVELOPER_SAMPLES/jabber` directory.           |
+--------------------+-------------------------------------------------+
| [Load the          | You must register the TypeDoc created for the   |
| TypeDocs](extkit_l | filter with the entity store.                   |
| oad_typedocs.htm)  |                                                 |
+--------------------+-------------------------------------------------+
| [Construct a       | Construct a policy that sends an instant        |
| policy](extkit_con | message to an account on Google Talk and echoes |
| struct_policy.htm) | a message back to the client. Use the GUI       |
|                    | component of the newly added filter to specify  |
|                    | its configuration and test the functionality of |
|                    | the filter (and its configuration).             |
+--------------------+-------------------------------------------------+


