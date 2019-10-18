{
"title": "Oracle Security Service Module settings (10g)",
"linkTitle": "Oracle Security Service Module settings (10g)",
"date": "2019-10-17",
"description": "An Oracle Security Service Module (SSM) integrates a secured application (in this case, the API Gateway) with an Oracle Entitlements Server (OES) 10g so that security administration (for example, roles, resources, and policies) is delegated to the Oracle Entitlements Server 10g. An SSM must be installed on the machine hosting the application to be secured by the Oracle Entitlements Server 10g. The SSM runs in-process with the secured application, which improves performance and on-the-wire security."
}
﻿
<div id="p_general_oracle_ssm_over">

Overview
--------

An Oracle Security Service Module (SSM) integrates a secured application (in this case, the API Gateway) with an Oracle Entitlements Server (OES) 10g so that security administration (for example, roles, resources, and policies) is delegated to the Oracle Entitlements Server 10g. An SSM must be installed on the machine hosting the application to be secured by the Oracle Entitlements Server 10g. The SSM runs in-process with the secured application, which improves performance and on-the-wire security.

In Policy Studio, select the **Environment Configuration** > **Server Settings**
node in the tree, and select **Security**> **Security Service Module**
in the right pane. The **Security Service Module**
settings enable you to configure the API Gateway to act as a Java SSM. For more details on Oracle Entitlements Server 10g and SSMs, see the [Oracle Entitlements Server](http://www.oracle.com/technetwork/middleware/oes/overview/index.html)
website.

{{< alert title="Note" color="primary" >}}Oracle SSM is required only for integration with Oracle OES 10g. Oracle SSM is not required for integration with Oracle OES 11g. OES 10g was previously known as BEA AquaLogic Enterprise Security (ALES). Some items, such as schema objects, paths, and so on, may still use the ALES name. {{< /alert >}}

</div>

<div id="p_general_oracle_ssm_prereqs">

Prerequisites
-------------

Before configuring the settings on the **Security Service Module**
tab, you must perform the following prerequisite tasks.

### Test the SSM installation\

Because the API Gateway is running a Java SSM internally, it is recommended that the example Java SSM client that ships with the OES installation is set up and configured. This example can be found in the following directory:

``` {space="preserve"}
/ales32-ssm/java-ssm/examples/JavaAPIExample
```

Follow the instructions in the README file in this directory to test the installation. When the testing of the `JavaAPIExample`
is complete, all the configuration files for an SSM instance are located in the `/ales32-ssm/java-ssm/SSM-Name`
directory, where `SSM-Name`
is the name of the SSM setup when testing the example.

### Configure the API Gateway classpath\

The API Gateway classpath must be updated to include the JARs and configuration files for the SSM instance. The `jvm.xml`
file must be updated so that various environment variables and the `SSM-Name`
are updated to reflect the installation of the Java SSM. At minimum, the following must be updated in `jvm.xml`:

``` {space="preserve"}
<Environment name="BEA_HOME" value="/opt/apps/bea" >
<Environment name="INSTANCE_NAME" value="SSM-Name" >
```

For example, to modify the classpath, place the following `jvm.xml`
in the `conf`
directory of the API Gateway installation:

    <!--Additional JVM settings to run with Oracle Entitlements Server BEA_HOME must be set to the location 
      where the SSM is installed -->
    <ConfigurationFragment>
      <!-- Environment variables -->
      <!-- change these to match location where SSM has been installed and configured -->
      <Environment name="BEA_HOME" value="/opt/apps/bea" />
      <Environment name="ALES_SHARED_HOME" value="$BEA_HOME/ales32-shared" />
      <!-- Name of the SSM running in the API Gateway, replace the "SSM-Name" with the name of the SSM for 
        the API Gateway -->
      <Environment name="INSTANCE_NAME" value="SSM-Name" />
      <Environment name="INSTANCE_HOME" value="$BEA_HOME/ales32-ssm/java-ssm/instance/
    $INSTANCE_NAME" />
      <Environment name="PDP_PROXY" value="$INSTANCE_HOME/pdpproxy" />
      <!-- Location of the Java SSM libraries -->
      <!-- <ClassDir name="$BEA_HOME" /> -->
      <ClassDir name="$BEA_HOME/ales32-ssm/java-ssm/lib" />
      <ClassDir name="$BEA_HOME/ales32-ssm/java-ssm/lib/providers/ales" />
      <!-- Add location of the SSM configuration to classpath -->
      <ClassPath name="$INSTANCE_HOME/config/" />
      <!-- Additional JVM parameters based on the %JAVA-OPTIONS% of set-env script in SSM instance running 
        in API Gateway $BEA_HOME/ales32-ssm/java-ssm/instance/ssm-name/config -->
      <VMArg name="-Dwles.scm.port=7005" />
      <VMArg name="-Dwles.arme.port=8000" />
      <VMArg name="-Dwles.config.signer=Oracle Entitlements Serverdemo.oracle.com" />
      <VMArg name="-Dlog4j.configuration=file:$INSTANCE_HOME/config/log4j.properties" />
      <VMArg name="-Dlog4j.ignoreTCL=true" />
      <VMArg name="-Dwles.ssl.passwordFile=$ALES_SHARED_HOME/keys/password.xml" />
      <VMArg name="-Dwles.ssl.passwordKeyFile=$ALES_SHARED_HOME/keys/password.key" />
      <VMArg name="-Dwles.ssl.identityKeyStore=$ALES_SHARED_HOME/keys/identity.jceks" />
      <VMArg name="-Dwles.ssl.identityKeyAlias=wles-ssm" />
      <VMArg name="-Dwles.ssl.identityKeyPasswordAlias=wles-ssm" />
      <VMArg name="-Dwles.ssl.trustedCAKeyStore=$ALES_SHARED_HOME/keys/trust.jks" />
      <VMArg name="-Dwles.ssl.trustedPeerKeyStore=$ALES_SHARED_HOME/keys/peer.jks" />
      <VMArg name="-Djava.io.tmpdir=$INSTANCE_HOME/work/jar_temp" />
      <VMArg name="-Darme.configuration=$INSTANCE_HOME/config/WLESarme.properties" />
      <VMArg name="-Dales.blm.home=$INSTANCE_HOME" />
      <VMArg name="-Dkodo.Log=log4j" />
      <VMArg name="-Dwles.scm.useSSL=true" />
      <VMArg name="-Dwles.providers.dir=$BEA_HOME/ales32-ssm/java-ssm/lib/providers" />
      <VMArg name="-Dpdp.configuration.properties.location=$PDP_PROXY/
    PDPProxyConfiguration.properties" />
    </ConfigurationFragment>

### Centralize all trace output\

Oracle’s Java SSM uses log4j to output any diagnostics. You can also add these messages to the API Gateway trace output by adding the log4j that ships with the API Gateway to the following file:

    /ales32-ssm/java-ssm/SSM-NAME/conf/log4j.properties

Then the `log4j.rootCategory=WARN, A1, ASIlogFile`
line includes a new appender called `VordelTrace`
as follows:

    log4j.rootCategory=WARN, A1, ASIlogFile, VordelTrace

Add the configuration for this new appender by adding the following line to the file:

    log4j.appender.VordelTrace=com.vordel.trace.VordelTraceAppender

You can now start the API Gateway so that it runs with the Java SSM classpath and the centralized trace output.

### Further information\

For more details on configuring and testing SSMs, see the *Oracle SSM Installation and Configuration Guide*.

</div>

<div id="p_general_oracle_ssm_settings">

Settings
--------

On the **Security Service Module**
settings window, configure the following fields on the **Settings**
tab:

**Enable Oracle Security Service Module**:\
Select whether to enable the API Gateway instance to act as an SSM. This setting is disabled by default.

**Application Configuration Name**:\
Enter the Application Configuration name for the SSM instance. This is the name of your runtime application used by OES (for example, for monitoring purposes).

**Configuration Name**:\
Enter the OES Configuration name for the SSM instance to be stored in the OES Configuration Repository. Configuration names share the same name as their Policy Domain names.

**Application Configuration Properties**:\
Click **Add**
to specify optional configuration properties as name-value pairs. Enter a **Name**
and **Value**
in the **Properties**
dialog. Repeat to specify multiple properties.

**Policy Domain Name**:\
Enter the OES Policy Domain name for the SSM instance. Policy Domains contain policy definitions (target resource, permission set, and policy). Policy Domain names share the same name as their Configuration names.

</div>

<div id="p_general_oracle_ssm_name_auth">

Name authority definition settings
----------------------------------

Configure the following field on the **Name Authority Definition**
tab:

**Name Authority Definition File**:\
Click the **Browse**
button at the bottom right to configure the Name Authority Definition file for the SSM. This is an XML file that specifies the naming authority definition required for the API Gateway. For example, a specified XML file named `apigatewayNameAuthorityDefinition.xml`
file should contain the following settings:

    <AuthorityConfig>
      <AuthorityDefinition name="apigatewayResource" delimiters="/\">
        <Attribute name="protocol" type="MULTI_TOKEN" authority="URLBASE" />
      </AuthorityDefinition>
      <AuthorityDefinition name="apigatewayAction" delimiters="/">
        <Attribute name="action" type="SINGLE_VALUE_TERMINAL" />
      </AuthorityDefinition>
    </AuthorityConfig>

</div>
