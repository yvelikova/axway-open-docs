{
"title": "Open traffic event log settings",
"linkTitle": "Open traffic event log settings",
"date": "2019-10-14",
"description": "The **Open Traffic Event Log**\\nsettings enable you to configure the open traffic event logs written by the API Gateway instances. For example, you can enable open traffic event logging, configure where the logs are stored, and whether or not transaction payloads are stored."
}
﻿

The **Open Traffic Event Log**
settings enable you to configure the open traffic event logs written by the API Gateway instances. For example, you can enable open traffic event logging, configure where the logs are stored, and whether or not transaction payloads are stored.

For more information on open logging, see [*Configure open logging* on page 1](admin_open_logging.htm).

Configure the open traffic event log
------------------------------------

To configure the open traffic event log in the Policy Studio tree, select the **Server Settings**
node, and click **Logging**
> **Open Traffic Event Log**.

Configure the following fields:

**Enable Open Traffic Event Log**:\

Enables writing to an open event log. This setting is disabled by default.

**Event Log Output**:

Choose one of the following options:

-   `Use filesystem` – Select this option to write the log data to a file. If you select this option you must enter a directory in the **Event logs directory** field. This can be a location on the local drive, NFSv4, or SAN file system. This is the default.
-   `Use console / traces` – Select this option to stream the traffic logs to `stdout` (console/trace files).

**Event logs directory**:\

Specifies the directory where open traffic event logs are written. Defaults to `${environment.VDISTDIR}/logs`.

**Maximum disk space for logs (MB)**:\

Specifies the maximum amount of disk space used for open traffic event logs. When the directory reaches the specified limit, the oldest log files are deleted. Defaults to `1024`
MB.

**Check disk space interval (secs)**:\

Specifies how often the amount of available disk space used for event logs is checked. Defaults to `600`
seconds. Enter `0` to disable disk space checks.

**Payload Storage**:

Choose one of the following options:

-   `Do not store payloads` – Select this option to prevent received and sent payloads being stored. This is the default.
-   `Use filesystem` – Select this option to store received and sent payloads on the file system. If you select this option you must enter a directory in the **Filesystem directory** field. This can be a location on the local drive, NFSv4, or SAN file system.

To confirm updates to these settings, click **Save**
at the bottom right of the window. Click **Deploy**
in the toolbar to deploy the updated configuration to the API Gateway.
