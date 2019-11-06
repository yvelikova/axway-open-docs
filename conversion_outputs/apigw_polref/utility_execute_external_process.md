{
"title": "Execute external process",
"linkTitle": "Execute external process",
"date": "2019-10-17",
"description": "This filter enables you to execute an external process from a policy. It can execute any external process (for example, start an SSH session to connect to another machine, run a script, or send an SMS message)."
}
﻿
<div id="p_execute_external_process_over">

Overview
--------

This filter enables you to execute an external process from a policy. It can execute any external process (for example, start an SSH session to connect to another machine, run a script, or send an SMS message).

</div>

<div id="p_utility_execute_external_process_conf">

Configuration
-------------

 Complete the following fields:

**Name**:\
Enter an appropriate name for the filter to display in a policy.

<div>

### Command settings

The **Command**
tab includes the following fields:

|                                      |                                                                                                                                                                                                  |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Command to execute**               | Specify the full path to the command to execute (for example, `c:\cygwin\bin\mkdir.exe`).                                                                                                        |
| **Arguments**                        | Click **Add**                                                                                                                                                                                    
  to add arguments to your command. Specify an argument in the **Value**                                                                                                                            
  field (for example, `dir1`), and click **OK**. Repeat these steps to add multiple arguments (for example, `dir2`                                                                                  
  and `dir3`).                                                                                                                                                                                      |
| **Working directory**                | Specify the directory to run the command from. You can specify this using a selector that is expanded to the specified value at runtime. Defaults to `${environment.VINSTDIR}`, where `VINSTDIR` 
  is the location of a running API Gateway instance. For more details, see                                                                                                                          
  [Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)                                                                                                            
  in the                                                                                                                                                                                            
  [API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)                                                                                                        
  .                                                                                                                                                                                                 |
| **Expected exit code**               | Specify the expected exit code for the process when it has finished. Defaults to `0`.                                                                                                            |
| **Kill if running longer than (ms)** | Specify the number of milliseconds after which the running process is killed. Defaults to `60000`.                                                                                               |

</div>

<div>

### Advanced settings

The **Advanced**
tab includes the following fields:

|                                  |                                                                                                     |
|----------------------------------|-----------------------------------------------------------------------------------------------------|
| **Environment variables to set** | Click **Add**                                                                                       
  to add environment variables. In the dialog, specify an **Environment variable name**                
  (for example, `JAVA_HOME`) and a **Value**                                                           
  (for example, `c:\jdk1.6.0_18`), and click **OK**. Repeat to add multiple variables.                 |
| **Block till process finished**  | Select whether to block until the process is finished in the check box. This is enabled by default. |

</div>

</div>
