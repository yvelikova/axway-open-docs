{
"title": "Scan with ClamAV anti-virus",
"linkTitle": "Scan with ClamAV anti-virus",
"date": "2019-10-17",
"description": "You can use the **ClamAV Anti-Virus**\\nfilter to check messages for viruses by connecting to a ClamAV daemon running on network. The ClamAV daemon inspects the message and if the daemon finds a virus, it returns a corresponding response to the API Gateway, which can then block the message, if necessary. "
}
﻿
<div id="p_connector_clam_over">

Overview
--------

You can use the **ClamAV Anti-Virus**
filter to check messages for viruses by connecting to a ClamAV daemon running on network. The ClamAV daemon inspects the message and if the daemon finds a virus, it returns a corresponding response to the API Gateway, which can then block the message, if necessary.

</div>

<div id="p_connector_clam_conf">

Configuration
-------------

Complete the following fields to configure the **ClamAV Anti-Virus**
filter:

**Name**:\
Enter an appropriate name for this filter to display in a policy.

**ClamAV Daemon Host**:\
Enter the host name of the machine on which the ClamAV daemon is running.

**ClamAV Daemon Port Number**:\
Enter the port on which the ClamAV daemon is listening.

</div>
