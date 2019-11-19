{
"title": "Automate processes for continuous integration",
"linkTitle": "Automate processes for continuous integration",
"date": "2019-11-19",
"description": "The API Gateway package and deploy tools enable you to automate processes for continuous integration. You can use the tools to:"
}
﻿

The API Gateway package and deploy tools enable you to automate processes for continuous integration. You can use the tools to:

-   [*Generate configuration packages from API Gatewayprojects* on page 1](#Generate)
-   [*Build and deploy API Gateway configurations* on page 1](#Build)
-   [*Change the passphrase of an API Gateway project* on page 1](#Change)
-   [*Upgrade an API Gateway project* on page 1](#Upgrade)

For details on installing the package and deploy tools, see the
[API Gateway Installation Guide](/bundle/APIGateway_77_InstallationGuide_allOS_en_HTML5/)
. For details on using API Gateway projects, see the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

Run the package and deploy tools
--------------------------------

You can run the package and deploy tools from the following directory:

``` {space="preserve"}
INSTALL_DIR/apigateway/posix/bin
```

For example, to run the `projpack --help` command:

``` {space="preserve"}
> cd /opt/Axway-7.8/apigateway/posix/bin
```

``` {space="preserve"}
> projpack --help
```

Generate configuration packages from API Gateway projects
---------------------------------------------------------

The `projpack` tool enables you to use automatic processes to generate API Gateway configuration packages from multiple API Gateway projects. For example, you can automatically generate deployment packages (`.fed`), policy packages (`.pol`), and environment packages (`.env`), which you can then use to promote APIs and policy configuration to upstream environments.

For more details on configuration packages and upstream environments, see [*Introduction to API Gateway deployment and promotion* on page 1](promotion_intro.htm).

### projpack command options

The `projpack` command options are described as follows:

| Option                 | **Description**                                                                                                                                                                                                                                                                                                                                                                              |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 --help, -h              
 ```                     | Display help message and exit.                                                                                                                                                                                                                                                                                                                                                               |
| --create, -c           | Create a new configuration package (`.pol`, `.env`, or `.fed`) from an API Gateway project.                                                                                                                                                                                                                                                                                                  |
| --import, -i           | Import project configuration into an existing configuration package (`.pol`, `.env`, or `.fed`).                                                                                                                                                                                                                                                                                             |
| --name, -n             | Name of the configuration package. Possible values are the file name, and the directory path and file name for `--import`. When used with `--create` this is the name of the configuration package to be created (for example, `myarchive`). When used with `--import` this is the name of the configuration package to import into (for example, `/temp/dev.pol`). This option is required. |
| --add, -a              | List of projects to merge into the configuration package. You must specify a passphrase for each list of projects with the `--projpass` option (or use `--projpass-none`). Use a space to separate multiple projects.                                                                                                                                                                        
                                                                                                                                                                                                                                                                                                                                                                                                
  For example, to specify two projects with the same passphrase and one project with a different passphrase:                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                
  ``` {space="preserve"}                                                                                                                                                                                                                                                                                                                                                                        
  --add /home/user1/apiprojects/proj1 /home/user1/apiprojects/proj2 --projpass=testa                                                                                                                                                                                                                                                                                                            
  --add /home/user1/apiprojects/proj3 --projpass=testb                                                                                                                                                                                                                                                                                                                                          
  ```                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                
  For example, to specify two projects with the same passphrase and two projects with no passphrase:                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                
  ``` {space="preserve"}                                                                                                                                                                                                                                                                                                                                                                        
  --add /home/user1/apiprojects/proj1 /home/user1/apiprojects/proj2 --projpass=testa                                                                                                                                                                                                                                                                                                            
  --add /home/user1/apiprojects/proj3 /home/user1/apiprojects/proj4 --projpass-none                                                                                                                                                                                                                                                                                                             
  ```                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                
  {{< alert title="Note" color="primary" >}}If you are using a passphrase file to specify the passphrases you must specify each project individually to the `--add` option. {{< /alert >}}                                                                                                                                                                                          
  For example, to specify four projects with all passphrases in a passphrase file:                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                
  ``` {space="preserve"}                                                                                                                                                                                                                                                                                                                                                                        
  --add /home/user1/apiprojects/proj1 -add /home/user1/apiprojects/proj2 --add /home/user1/apiprojects/proj3                                                                                                                                                                                                                                                                                    
  --add /home/user1/apiprojects/proj4 --passfile=/home/user1/passfile.txt                                                                                                                                                                                                                                                                                                                       
  ```                                                                                                                                                                                                                                                                                                                                                                                           |
| --replace, -r          | Replace conflicts when `--add` is specified. You must specify `--replace` before `--add`. If there is a conflict, and `--replace` is not specified, `projpack` exits.                                                                                                                                                                                                                        |
| --printDiffs           | Print a tree with the changes for every project as it                                                                                                                                                                                                                                                                                                                                        
  is added to the package.                                                                                                                                                                                                                                                                                                                                                                      |
| --passfile, -f         | File that contains the project and target configuration package                                                                                                                                                                                                                                                                                                                              
  passphrases. You can use this option instead of the `--passphrase`                                                                                                                                                                                                                                                                                                                            
  (or `--passphrase-none`) and `--projpass` (or `--projpass-none`) options. For an example, see [*Example projpack use cases* on page 1](#Example3). For more details on the file format, see [*Read passphrases from a file* on page 1](#Reading).                                                                                                                                             |
| --projpass             | Passphrase used to encrypt projects specified by `--add` option. This can be any text. This option is required for projects specified by `--add`, or you can use `--projpass-none` to specify a zero-length passphrase.                                                                                                                                                                      |
| --passphrase           | Passphrase used to encrypt the generated target configuration package. This can be any text. This option is required, or you can use `--passphrase-none` to set a zero-length passphrase.                                                                                                                                                                                                    |
| --dir, -d              | Full output directory path to the generated target configuration package. Defaults to the current directory. You can also use this option with `--import` to specify the full directory path of the configuration package to import into.                                                                                                                                                    |
| --type, -t             | The generated configuration package type (`pol`, `env`, or `fed`). A `pol` and `env` file are generated by default. You can also use this option with `--import` to specify the type of the configuration package to import into.                                                                                                                                                            |
| --polprop              | Policy metadata added to the policy                                                                                                                                                                                                                                                                                                                                                          
  manifest for the generated target configuration package (for example, `--polprop=createdBy:joebloggs`).                                                                                                                                                                                                                                                                                       
  For more details, see [*Configure package properties* on page 1](promotion_props.htm).                                                                                                                                                                                                                                                                                                        |
| --envprop              | Environment metadata added to the                                                                                                                                                                                                                                                                                                                                                            
  environment manifest for the generated target configuration package (for example, `--envprop="envCreationTime:\$(date +'%c')"`). For more details, see [*Configure package properties* on page 1](promotion_props.htm).                                                                                                                                                                       |
| --tracelevel           | Trace level for the generated trace file.                                                                                                                                                                                                                                                                                                                                                    
  Supported trace levels are `FATAL`, `ALWAYS`, `ERROR`, `INFO`,                                                                                                                                                                                                                                                                                                                                
  `MIN`, `DEBUG`, `VERBOSE`. The default is `INFO`.                                                                                                                                                                                                                                                                                                                                             |
| --tracedir             | Directory to write trace files to. The default is none.                                                                                                                                                                                                                                                                                                                                      |

### Example projpack use cases

The following examples describe how you might use `projpack`.

#### Create encrypted policy and environment packages from a single project

The following example shows how to create an encrypted policy package (`.pol`) and environment package (`.env`) from a specified API Gateway project:

``` {space="preserve"}
projpack --create --passphrase=my_text --name=my_package --add /home/user1/apiprojects/proj1 --projpass=my_text
```

The `--passphrase` and `--projpass` options are required, or you can use `--passphrase-none` and `--projpass-none`.

#### Create an encrypted deployment package from multiple projects

The following example shows how to create a deployment package (`.fed`) from multiple API Gateway projects:

``` {space="preserve"}
projpack --create --dir=/home/jbloggs/testfeds/ --passphrase=my_text --name=dev.fed --type=fed 
--add /home/jbloggs/apiprojects/proj1 /home/jbloggs/apiprojects/proj2 --projpass-none
```

#### Create an encrypted deployment package from multiple projects using a passphrase file

The following example shows how to create a deployment package (`.fed`) from multiple API Gateway projects, where the passphrases are supplied in a passphrase file:

``` {space="preserve"}
projpack --create --dir=/home/jbloggs/testfeds/ --name=dev.fed --type=fed 
--add /home/jbloggs/apiprojects/proj1 -add /home/jbloggs/apiprojects/proj2 --passfile=/home/jbloggs/passfile.txt
```

For more details on the passphrase file format, see [*Read passphrases from a file* on page 1](#Reading).

#### Import project configuration into an existing deployment archive

The following example shows how to import configuration from specified API Gateway projects into a specified deployment package:

``` {space="preserve"}
projpack --import --replace --dir=/home/user1/testfeds/ --passphrase=my_text --name=my_package --type=fed 
--add /home/user1/apiprojects/proj1 --projpass=my_text1 --add /home/user1/apiprojects/proj2 --projpass=my_text2
```

{{< alert title="Note" color="primary" >}}You can use the `--replace` option before `--add` to override conflicts, otherwise if conflicts are found the command exits. {{< /alert >}}

For more examples, see `projpack --help`.

### Read passphrases from a file

The `projpack` command provides the`--passfile` or `-f` option to specify the location of a passphrases file. This file contains a passphrase for the generated target configuration package and passphrases for the projects to be packaged.

The section names in the passphrase file are predefined. The names of the keys in a section are arbitrary, but must be unique in that section. For example:

``` {space="preserve"}
[target]
pp=my_text

[projects]
p1=my_text1
p2=my_text2
```

{{< alert title="Note" color="primary" >}}For security reasons, this file should be protected with appropriate permissions. For example, the following command changes the file ownership: {{< /alert >}}

    sudo chown root: <passphrases_file>

The following command specifies file permissions:

    sudo chmod 400 <passphrases_file>

Build and deploy API Gateway configurations
-------------------------------------------

Environment settings are subject to change during the development, test, and production phases. The `projdeploy` tool enables you to use automated processes to build API Gateway configurations, to apply or modify the environment settings of a specified configuration package (`.fed` or `.pol`), and to deploy the package to specified API Gateway group instances.

### projdeploy command options

The `projdeploy` command options are described as follows:

| Option                    | **Description**                                                                                                                                                                                        |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"}    
 --help, -h                 
 ```                        | Display help message and exit.                                                                                                                                                                         |
| --dir, -d                 | Directory where the configuration package is located and modified. Defaults to the current directory.                                                                                                  |
| --name, -n                | Name of configuration package to deploy (for example, for `dev.fed`                                                                                                                                    
  or `dev.pol` file, specify `dev`). This option is required.                                                                                                                                             |
| --type, -t                | Type of configuration package to deploy (for example, `pol` or `fed`). Defaults to `pol`.                                                                                                              |
| ``` {space="preserve"}    
 --apply-env, -e            
 ```                        | Name of environment package (`.env`) to apply to the configuration package being deployed (for example, `/temp/dev.env`).                                                                              |
| --passphrase              | Encryption passphrase for the source configuration. This can be any text. This option is required, or you can use `--passphrase-none` to specify a zero-length passphrase.                             |
| --change-pass-to          | Encryption passphrase for the target configuration. This can be any text. You can also use `--change-pass-to-none` to set a zero-length passphrase.                                                    |
| --polprop                 | Policy metadata added to the policy                                                                                                                                                                    
  manifest for the configuration package (for example, `--polprop=createdBy:joebloggs`).                                                                                                                  
  For more details, see [*Configure package properties* on page 1](promotion_props.htm).                                                                                                                  |
| --envprop                 | Environment metadata added to the                                                                                                                                                                      
  environment manifest for the configuration package (for example, `--envprop="envCreationTime:\$(date +'%c')"`). For more details, see [*Configure package properties* on page 1](promotion_props.htm).  |
| --deploy-to               | Deploys a specified configuration package to a specified Admin Node Manager server.                                                                                                                    |
| --host-name               | Use with `--deploy-to` option to specify Admin Node Manager host name to deploy configuration to.                                                                                                      |
| --port                    | Use with `--deploy-to` option to specify Admin Node Manager port number to connect to.                                                                                                                 |
| --user-name               | Use with `--deploy-to` option to specify user name for authentication.                                                                                                                                 |
| --password                | Use with `--deploy-to` option to specify user password for authentication.                                                                                                                             |
| --truststore-file         | File name for the SSL certificate truststore that holds all trusted                                                                                                                                    
  SSL certificates. Defaults to trusting all.                                                                                                                                                             |
| --truststore-password     | Truststore file password that holds all trusted SSL                                                                                                                                                    
  certificates.                                                                                                                                                                                           |
| --group, -g               | Use with `--deploy-to` option to specify API Gateway group name to deploy configuration to.                                                                                                            |
| --includes, -i            | Use with `--deploy-to` option to specify a list of names of API Gateway instances to deploy to. Alternatively, you can specify a list of API Gateways to exclude with the `--excludes` option.         |
| ``` {space="preserve"}    
 --excludes, -x             
 ```                        | Use with `--deploy-to` option to specify a list of names of API Gateway instances not to deploy to. Mutually                                                                                           
  exclusive with the `--includes` option.                                                                                                                                                                 |
| --tracelevel              | Trace level for the generated trace file.                                                                                                                                                              
  Supported trace levels are `FATAL`, `ALWAYS`, `ERROR`, `INFO`,                                                                                                                                          
  `MIN`, `DEBUG`, `VERBOSE`. The default is `INFO`.                                                                                                                                                       |
| --tracedir                | Directory to write trace files to. The default is none.                                                                                                                                                |

### Example projdeploy use cases

The following examples describe how you might use `projdeploy`.

#### Deploy a deployment package on a local host

The following simple example shows how to deploy a specified deployment package (`.fed`) to a locally running API Gateway instance:

    projdeploy --passphrase-none --name=test.fed

#### Deploy a deployment package with new environment settings and passphrase

The following example shows how to deploy a specified deployment package and apply a new passphrase and environment settings on a local host:

``` {space="preserve"}
projdeploy --dir=/tests --passphrase=pass --name=my_package --type=fed 
--change-pass-to=newpass --apply-env=/tests/prod/prod.env
```

#### Deploy a policy package to a specified host and group

The following example shows how to deploy a specified policy package and apply new settings on a specified Admin Node Manager host and port, and API Gateway group:

``` {space="preserve"}
projdeploy --dir=/tests --passphrase=pass --name=mypackage --type=pol 
--change-pass-to-none --apply-env=/tests/prod/prod.env 
--deploy-to --host-name=myhost --port=myport --user-name=myname --password==mypass --group-name=mygroup
```

#### Deploy a deployment package to specified instances

The following example shows how to deploy a specified deployment package and apply new settings on a specified Admin Node Manager host, port, and set of API Gateway instances:

``` {space="preserve"}
projdeploy --dir=/tests --passphrase=pass --name=mypackage --type=fed 
--deploy-to --host-name=myhost --port=myport --user-name=myname --password==mypass --group-name=mygroup 
--includes mygateway1 mygateway2 mygateway3
```

Change the passphrase of an API Gateway project
-----------------------------------------------

The `projchangepass` tool enables you to change the passphrase of an API Gateway project.

### projchangepass command options

The `projchangepass` command options are described as follows:

| Option                 | **Description**                                                                               |
|------------------------|-----------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 --help, -h              
 ```                     | Display help message and exit.                                                                |
| ``` {space="preserve"} 
 --proj                  
 ```                     | Directory where the project is located.                                                       |
| ``` {space="preserve"} 
 --oldpass               
 ```                     | The old project passphrase.                                                                   |
| ``` {space="preserve"} 
 --newpass               
 ```                     | The new project passphrase.                                                                   |
| ``` {space="preserve"} 
 --confirmpass           
 ```                     | Confirm the new project passphrase.                                                           |
| ``` {space="preserve"} 
 --passfile              
 ```                     | File that contains the project                                                                
  passphrases. For a sample file, see [*Example projchangepass use cases* on page 1](#Example).  |
| --tracelevel           | Trace level for the generated trace file.                                                     
  Supported trace levels are `FATAL`, `ALWAYS`, `ERROR`, `INFO`,                                 
  `MIN`, `DEBUG`, `VERBOSE`. The default is `INFO`.                                              |
| --tracedir             | Directory to write trace files to. The default is none.                                       |

### Example projchangepass use cases

The following examples describe how you might use `projchangepass`.

#### Change the passphrase of a project

This example shows how to change the project passphrase on proj1 from `changeme` to `newpassPhrase`:

``` {space="preserve"}
projchangepass --proj=/home/user1/apiprojects/proj1 --oldpass=changeme --newpass=newpassPhrase --confirmpass=newpassPhrase
```

#### Change the passphrase of a project using a passphrase file

This example shows how to change the project passphrase on proj1 using the contents in `passfile.txt`:

``` {space="preserve"}
projchangepass --proj=/home/user1/apiprojects/proj1 --passfile=/home/user1/passfile.txt
```

Example `passfile.txt`:

``` {space="preserve"}
[currentProj]
oldPP="changeme"
newPP=newpassPhrase
confirmPP=newpassPhrase
```

Upgrade an API Gateway project
------------------------------

The `projupgrade` tool enables you to upgrade one or more API Gateway projects from earlier versions (7.5.1 or later) to version 7.8. For example, after using `sysupgrade` to upgrade your API Gateway installation to version 7.8, you must upgrade the configuration projects in your development environment, or you cannot deploy them to your upgraded API Gateways.

You can use the `projupgrade` tool to upgrade a number of configuration projects at once. These projects might be independent of one another, or could include shared projects and their dependencies.

{{< alert title="Note" color="primary" >}}`projupgrade` upgrades all of the projects in a particular directory. If you keep projects in different source directories, remember to run `projupgrade` on all of them.{{< /alert >}}

After using `projupgrade` to upgrade your projects, you can:

-   Open these projects in Policy Studio 7.8 and continue working as before.
-   Deploy them to an API Gateway 7.8 instance.
-   Merge the projects to create configuration packages (`.fed` or `.pol`/`.env`) using `projpack`. For more information, see [*Generate configuration packages from API Gatewayprojects* on page 1](#Generate).

For more details on upgrading your API Gateway installation, see the
[API Gateway Upgrade Guide](/bundle/APIGateway_77_UpgradeGuide_allOS_en_HTML5)
.

### projupgrade command options

The `projupgrade` command options are described as follows:

| Option                 | **Description**                                                                                                                                 |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| ``` {space="preserve"} 
 --help, -h              
 ```                     | Display help message and exit.                                                                                                                  |
| --projdir              | Directory containing the projects to be upgraded (for example, `/home/user1/apiprojects`). This option is required.                             |
| --backupdir            | Directory into which projects are copied                                                                                                        
  before upgrade begins. This directory is created if it does not                                                                                  
  exist. If this option is not specified a backup is not created.                                                                                  |
| --projpass             | Encryption passphrase for the projects to be upgraded. You can use the `--passfile` option to override this passphrase for individual projects. 
  If passphrases are not specified using this option or `--passfile`, the command uses a zero-length string as the passphrase.                     |
| --passfile             | File that contains the project                                                                                                                  
  passphrases. For a sample file, see [*Example projupgrade use cases* on page 1](#Example2).                                                      |
| --tracelevel           | Trace level for the generated trace file.                                                                                                       
  Supported trace levels are `FATAL`, `ALWAYS`, `ERROR`, `INFO`,                                                                                   
  `MIN`, `DEBUG`, `VERBOSE`. The default is `INFO`.                                                                                                |
| --tracedir             | Directory to write trace files to. This directory is created if it does not                                                                     
  exist. The default is the current directory.                                                                                                     |

### Example projupgrade use cases

The following examples describe how you might use `projupgrade`.

#### Back up and upgrade projects

This example shows how to upgrade the projects contained in a specified directory:

``` {space="preserve"}
projupgrade --projdir=/home/user1/apiprojects --backupdir=/home/user1/backup
```

Before the upgrade the projects are backed up to the specified backup directory. As no passphrases are specified the command uses a zero-length string as the passphrase for all projects.

#### Upgrade projects with different passphrases using a passphrase file

This example shows how to upgrade the projects contained in a specified directory, and specify the passphrases with the `--projpass` and `--passfile` options:

``` {space="preserve"}
projupgrade --projdir=/home/user1/apiprojects --projpass=mypass --passfile=/tmp/passfile.txt
```

Example `passfile.txt`:

``` {space="preserve"}
[projects]
Project 1=
Project 2=My passphrase!
```

The passphrase `mypass` is used for any projects not listed in `passfile.txt`, while the passphrases specified in the file are used for the projects listed in `passfile.txt`.

{{< alert title="Note" color="primary" >}}`projupgrade` accepts the same passphrase file format as `projpack`, but only the section shown in the example above is actually used.{{< /alert >}}

### projupgrade output

The `projupgrade` command produces the following outputs:

-   `projupgrade.log` – A log of any errors or warnings generated by the `projupgrade` command.
-   `projupgrade.report` – A summary report of the projects upgraded.

For example, the following command is run on a project directory containing two projects:

    projupgrade --projdir=/home/user1/apiprojects --backupdir=/tmp --tracedir=/tmp

The following is an example of the `projupgrade.report`:

``` {space="preserve"}
# ProductName=projupgrade 7.5.3-2017-01-17 rev. 4712b77 (Linux.x86_64)
# CurrentDate=Mon, 23 Jan 2017 15:59:49 +0000
# CurrentDateUTC=1485187189
# TZ=GMT

REPORT 23/Jan/2017:15:59:49.876 ... Tracing to directory: /tmp/projupgrade_logs_2017-01-23_15-59-49 filename: projupgrade.report
REPORT 23/Jan/2017:15:59:49.876 ... ===================
REPORT 23/Jan/2017:15:59:49.876 ... Running projupgrade
REPORT 23/Jan/2017:15:59:49.876 ... ===================
REPORT 23/Jan/2017:15:59:49.876 ... Projects directory : /home/user1/apiprojects
REPORT 23/Jan/2017:15:59:49.876 ... Backup directory : /tmp/projupgrade_backup_2017-01-23_15-59-49
REPORT 23/Jan/2017:15:59:49.876 ... Logging directory : /tmp/projupgrade_logs_2017-01-23_15-59-49
REPORT 23/Jan/2017:15:59:49.876 ... 
REPORT 23/Jan/2017:15:59:49.876 ... Skipping non-project directory: /home/user1/apiprojects
REPORT 23/Jan/2017:15:59:49.877 ... 
REPORT 23/Jan/2017:15:59:49.882 ... Upgrading project 'Project1': /home/user1/apiprojects/Project1 ...
REPORT 23/Jan/2017:15:59:49.885 ... Upgrading 'federated:file:////home/user1/apiprojects/Project1/configs.xml' 
and putting output into '/home/user1/dev/temp/tmpB3F1P5'...
REPORT 23/Jan/2017:15:59:50.726 ... Writing upgrade to 'federated:file:/home/user1/dev/temp/tmpB3F1P5/configs.xml', please wait...
REPORT 23/Jan/2017:15:59:53.650 ... Migrating TivoliSettings from version 0 to version 1
REPORT 23/Jan/2017:15:59:53.651 ... Downgrade the cardinality on version field so we can remove it later
REPORT 23/Jan/2017:15:59:59.641 ... ... Upgrade successful.
REPORT 23/Jan/2017:15:59:59.863 ... OK
REPORT 23/Jan/2017:15:59:59.864 ... 
REPORT 23/Jan/2017:15:59:59.864 ... Upgrading project 'Project2': /home/user1/apiprojects/Project2 ...
REPORT 23/Jan/2017:15:59:59.866 ... Upgrading 'federated:file:////home/user1/apiprojects/Project2/configs.xml' 
and putting output into '/home/user1/dev/temp/tmp2Pd4Dz'...
REPORT 23/Jan/2017:16:00:00.005 ... Problem connecting to store:
REPORT 23/Jan/2017:16:00:00.005 ... Invalid group passphrase
ERROR 23/Jan/2017:16:00:00.005 ... FAILED: 1
REPORT 23/Jan/2017:16:00:00.005 ... 
REPORT 23/Jan/2017:16:00:00.005 ... projupgrade summary
REPORT 23/Jan/2017:16:00:00.005 ... ===================
REPORT 23/Jan/2017:16:00:00.005 ... Number of projects successfully upgraded: 1
REPORT 23/Jan/2017:16:00:00.005 ... Number of projects where upgrade failed: 1
REPORT 23/Jan/2017:16:00:00.005 ... 
REPORT 23/Jan/2017:16:00:00.005 ... Projects where upgrade failed:
REPORT 23/Jan/2017:16:00:00.005 ... /home/user1/apiprojects/Project2
REPORT 23/Jan/2017:16:00:00.005 ... 
REPORT 23/Jan/2017:16:00:00.005 ... The contents of these projects have not been changed.
REPORT 23/Jan/2017:16:00:00.005 ... Fix the problems identified in the logs and rerun projupgrade.
REPORT 23/Jan/2017:16:00:00.005 ... Logging directory: /tmp/projupgrade_logs_2017-01-23_15-59-49
```

The output shows that Project1 was upgraded successfully, but Project2 failed to upgrade because of an `"Invalid group passphrase"`. To fix this, you could write the Project2 passphrase to a file and rerun `projupgrade` with the `--passfile` option.
