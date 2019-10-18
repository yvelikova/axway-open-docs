{
"title": "Sun Access Manager settings",
"linkTitle": "Sun Access Manager settings",
"date": "2019-10-17",
"description": "This feature has been deprecated and will be removed in a future release. See [Oracle Access Manager filters](%3Ca%20href=)."
}
﻿

{{< alert title="Note" color="primary" >}}This feature has been deprecated and will be removed in a future release. See Oracle Access Manager filters.{{< /alert >}}

The **Access Manager** settings window enables you to configure how the access manager policy agents embedded in API Gateway's Sun Access Manager filters connect to Sun Access Manager. These settings also enable you to determine how and where these agents trace and log runtime information.

The access manager settings are available from the **Environment Configuration > Server Settings** node in the Policy Studio tree. Select the **Security > Access Manager** tab at the bottom of the window. For a more detailed explanation of any of the settings described in this topic, see the Sun Access Manager documentation.

Connection settings
-------------------

The following configuration fields are available in this section:

**Naming URL**:\
This property represents the URL where the access manager filters can retrieve the URLs of access manager internal services. This field sets the `com.iplanet.am.naming.url`
property.

**User name**:\
Specify the user name to read configuration data from the access manager. This sets the `com.sun.identity.agents.app.username` property.

**Password**:\
Enter the password for this user. This setting configures the `com.iplanet.am.service.password`
property.

Output settings
---------------

The fields in this section are used to configure the output from the access manager policy agent that is embedded into API Gateway's Sun Access Manager integration filters. In most cases, the default options should be sufficient.

**Debug level**:\
This setting specifies the level that the access manager agent writes debug information at. Possible values are `message`, `warning`, `error`, and `off`. This setting corresponds to the `com.iplanet.services.debug.level` property.

**Debug directory**:\
Specify the location of the directory where debug output is written to. This configures the `com.iplanet.services.debug.directory` property.

**Log file name**:\
Enter the name of the log file where policy decision information is written to. This sets the `com.sun.identity.agents.server.log.file.name` property.

**Logging level**:\
Select the logging level for entries in the log file from the following available levels: `NONE`, `ALLOW`, `DENY`, `BOTH`, or `DECISION`. The value selected sets the value of the `com.sun.identity.agents.logging.level` property.

General settings
----------------

The following general settings are available in this section:

**Cache time**:\
The value entered can be used to determine how long (in minutes) configuration data is cached before it is fetched again from the access manager server. This setting corresponds to the `com.sun.identity.sm.cacheTime` property.

**Polling interval**:\
The polling interval entered represents the time (in minutes) after which the user management cache is updated. This field sets the value of the `com.iplanet.am.sdk.remote.pollingTime` property.

Additional properties
---------------------

This section enables you to specify any additional properties used by the Sun Access Manager Client SDK as name-value pairs. Click the **Add** button to enter the name and value of the required property. For more information on available client SDK properties, see the Sun Access Manager documentation.
