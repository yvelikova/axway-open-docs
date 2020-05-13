{
    "title": "API-Gateway client TLS configuration for IBM MQ",
    "linkTitle": "TLS config of API Gateway for IBM MQ",
    "weight": "10",
    "date": "2020-05-11",
    "description": "How to configure TLS communication on API-Gateway for different IBM MQ server versions."
}

## Integration with IBM MQ

One of the core components of Axway AMPLIFY API Management is the API-Gateway. API-Gateway ships with support of several 3rd party systems for a more easy integration. It's acting as a client which is requesting services from an external provider. One of those built-in features is support for the messaging system [IBM MQ](https://www.ibm.com/products/mq). IBM MQ is a widely used enterprise message communication service that often powers complex and mission critical services for large enterprises.

API-Gateway is built on Java and therefore uses JMS for messaging. Connecting to JMS servers needs some general configuration and special settings:

* Connect to JMS server configuration: [Configure messaging services](/docs/apim_policydev/apigw_poldev/general_messaging/index.html)
* In order to listen on queues or topics for messages to process a JMS service provider (listener) must be configured: [Configure API Gateway instances and listeners](/docs/apim_policydev/apigw_gw_instances/index.html) on section *Configure Messaging System connections*
* For writing otherwise received and processed messages to queues or topics and waiting for reply messages from backend services: [Policy filter reference](https://docs.axway.com/bundle/axway-open-docs/page/docs/apim_policydev/apigw_polref/index.html) - [Route to JMS filters](/docs/apim_policydev/apigw_polref/routing_jms/index.html)

Different vendors have different strategies how to maintain compatibility between messaging clients and JMS servers. IBM offers backward compatibility for some versions of MQ clients - reference: [IBM Support, MQ 7.x, MQ 8.0, MQ 9.0 and MQ 9.1 compatibility with previous versions](https://www.ibm.com/support/pages/mq-7x-mq-80-mq-90-and-mq-91-compatibility-previous-versions-including-usage-ccdt-files-jms-bindings-ssltls).  
That means, client programs can use older connectivity libraries to connect to newer versions of the MQ servers. This allows to decouple lifetime/maintenance cycles of client applications from a currently used MQ server. But, for securing the communication via TLS IBM is not compromising on security. Hence, all clients need to support a minimum TLS version and a defined set of TLS ciphers defined by the MQ server. If a MQ client uses a cipher that is not on the list of the supported ones of the IBM MQ server channel, the TLS handshake will fail (error log: `MQRC_UNSUPPORTED_CIPHER_SUITE`).

*Several API-Management customers had the challenge to connect API-Gateway to an upgraded IBM MQ server and reconfigure the IBM MQ client settings within Policy Studio for this change. The following describes steps and background on how to accomplish this.*

## API-Gateway configuration for TLS with IBM MQ Server

API Gateway is acting as client connecting to an IBM MQ server. Therefore, its installation is bundled with the *IBM MQ JMS and Java redistributable client* (up to API-Gateway v7.7.20200130 its IBM MQ client v7.5.0.8). More current versions of IBM MQ server (like 9.1.5 we tested with) still allow those clients to connect, but have more strict requirements on TLS.

The basic setup within Policy Studio for IBM MQ server connectivity needs to be adopted:

1) follow the instructions on [Configure messaging services](/docs/apim_policydev/apigw_poldev/general_messaging/index.html) for IBM MQ  
   *Figure shows the JMS service configuration wizard:*  
   ![MQ JMS Service](/Images/APIGateway/extconn_jms_service_ibmmq_settings.png)  
  
2) In the JMS wizard, with service type *IBM MQ* selected:  
   Change the cipher suite name to one of the ciphers suites supported by your MQ server.  
   *For our tests we tried TLS_RSA_WITH_AES_128_CBC_SHA256 and TLS_RSA_WITH_AES_256_CBC_SHA256.*  
   The supported ciphers are subject to the ones available within the JVM API-Gateway is running on.  
   {{< alert title="Note" color="primary" >}}
   The cipher suite names differ between different vendors of JVM's. API-Gateway comes with a JVM that uses the Oracle naming conventions. See details on: [SSL/TLS CipherSpecs and CipherSuites in IBM MQ classes for JMS](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_8.0.0/com.ibm.mq.dev.doc/q113220_.htm)  
   An MQ client must signal *one* specific cipher suite it intents to use to the MQ server. So, the best fitting one of the configured ciphers suites of the IBM MQ channel needs to be selected upfront and configured at the client. And of course, the trusted certificate or trust chain of the server certificate must be determined.
   {{< /alert >}}  
   *Figure shows the TLS configuration (TLS server authentication only):*  
   ![MQ JMS Advanced](/Images/APIGateway/extconn_jms_service_ibmmq_advanced.png)  
  
3) The JVM, more precise the IBM MQ JMS client code, needs to know how to handle the TLS cipher suite name string. In order to allow the correct interpretation a Java parameter must be set for the JVM. For API-Gateway these parameters are configured within `<installpath>/apigateway/system/conf/jvm.xml`.
For changes on this config file to take effect API-Gateway must be stopped and started.

*Sample change on jvm.xml:*  
```
...
<JVMSettings classloader="com.vordel.boot.ServiceClassLoader">
...
    <!--
         Parameter is needed for IBM MQ client to correctly interpret TLS
         cipher specification names. See: Axway KB #178678
    -->
    <VMArg name="-Dcom.ibm.mq.cfg.useIBMCipherMappings=false"/>

</JVMSettings>
</ConfigurationFragment>
```

## Tools for analyzing and solving TLS issues

From experiences of Axway pre-sales and services consultants, sometimes it can be hard to find out what the right configuration option for TLS might be. Best options is to request  detail from the MQ server owners or operators. Sometimes its not practicable or takes to long to get those details (especially for testing or in POC's). In those situations it can be helpful to find out what TLS cipher specifications are currently provided by the MQ server in order to choose a supported one for proper API-Gateway configuration.

A Linux bash script as provided in this blog post [How to list TLS cipher suites a particular web-site offers?](https://superuser.com/questions/109213/how-do-i-list-the-ssl-tls-cipher-suites-a-particular-website-offers#answer-224263) *[last visited: 12th May 2020]* can help to get the needed insight.
As mentioned above different vendors or entities name the SSL/TLS cipher suites differently. To get a translation from OpenSSL names to the needed cipher suite names the Oracle JVM is using, a lookup here can help: [Testssl.sh - OpenSSL to IANA name mapping](https://testssl.sh/openssl-iana.mapping.html) *[last visited: 12th May 2020]*.  
Sample for calling this script: `bash ciphertest.sh localhost:1414 | grep YES`

## Improving IBM MQ Compatibility

Another idea to improve the compatibility of API-Gateway for use with IBM MQ server is to use the extension mechanism provided by API-Gateway. 3rd party Java archives can be added to API-Gateway by applying the needed jar files in directory `<installdir>/apigateway/ext/lib`. These Java files now within the classpath of the API-Gateway. This mechanism is used to add capabilities to the API-Gateway. For example 3rd party vendor clients or custom developed enhancements can be added to API-Gateway this way. See [Adding a custom filter](/docs/apigtw_devguide/custom_filter_add/index.html) for details.

Knowing this, we can install newer client libraries as the ones that come packaged with the product. As long as the client interfaces have not changed significantly upgrades are possible this way. This works because the `<installdir>/apigateway/ext/lib` subdirectory takes precedence over the API-Gateway out-of-the-box libraries. Therefore, we can substitute the originally shipped libraries by those provided ones.

### Steps to install a new IBM MQ client

IBM is providing JMS client libraries for IBM MQ named *IBM MQ JMS and Java redistributable client*.

{{< alert title="Note" color="primary" >}}
Please note, this information is provided for convenience only. Getting software from IBM requires an IBM ID for logging in and downloading artifacts. The IBM terms and conditions apply. Axway is not responsible for this service. Use of the downloaded components is at the risk of the API-Gateway user.  
The configuration steps 1-3 still apply!
{{< /alert >}}

1) Open the IBM MQ Client list from IBM: [IBM MQ V9 Clients](https://www.ibm.com/support/pages/node/586851) *[last visited: 12th May 2020]*  
2) Follow the link for the needed client version.  
3) Chose the package "IBM MQ JMS and Java redistributable client", e.g. *9.0.0.9-IBM-MQC-Redist-Java*  
4) Download fix pack "9.0.0.9-IBM-MQC-Redist-Java.zip"  
5) unzip the downloaded file and copy content of folder `java/lib` to `<installdir>/apigateway/ext/lib`  
6) API-Gateway restart is needed to make the change effective.  

{{< alert title="Note" color="primary" >}}
There is no guarantee for this "upgrade in the field" will work as expected. It's only possible as long as IBM is not changing the IBM MQ JMS client interface. In case IBM might introduce a breaking change in the MQ JMS client interface a customer enhancement request must be requested from Axway in order to adopt the product to those changes.  
{{< /alert >}}

### How to test a TLS connectivity to IBM MQ?

Since containers have become popular many products are available as pre-build Docker images from repositories like Docker-Hub. We have used such an IBM provided Docker image to run an IBM MQ server locally for our tests.

* Docker image: [Docker Hub ibmcom/mq](https://hub.docker.com/r/ibmcom/mq/) *[last visited: 12th May 2020]*
* Additional documentation: [Github ibm-messaging/mq-container](https://github.com/ibm-messaging/mq-container/blob/9.1.0/docs/usage.md) *[last visited: 12th May 2020]*

**Sample commands for using IBM MQ container with TLS for testing:**

```Sample Linux CLI commands
# 1) create self-signed server certificate (key + cert)
$JAVA_HOME/jre/bin/keytool -genkey -keyalg RSA -keysize 2048 -dname "CN=localhost, OU=Axway, O=Testing, L=Frankfurt, ST=Hessen, C=DE" -validity 365 -keypass password -alias mq -keystore mykeystore.jks -storepass password

$JAVA_HOME/jre/bin/keytool -list -v -keystore mykeystore.jks

# 2) export key to p12 container file
$JAVA_HOME/jre/bin/keytool -importkeystore -srckeystore mykeystore.jks -destkeystore mqserver.p12 -deststoretype PKCS12

# 3) convert private key to p8 container without password
openssl pkcs12 -in mqserver.p12 -nocerts -nodes -out mqskey.pem
openssl pkcs8 -in mqskey.pem -topk8 -nocrypt -out mqskey.pk8

# 4) convert self-signed server certificate to PEM
$JAVA_HOME/jre/bin/keytool -exportcert -keystore mykeystore.jks -alias mq -file mqserver.cer
openssl x509 -in mqserver.der -inform DER -out mqscert.pem -outform PEM

# 5) save key and cert to docker volume directory
mkdir -p ~/mqtest/pki/keys/mykey
cp mqskey.pk8 ~/mqtest/pki/keys/mykeytls.key
cp mqscert.pem ~/mqtest/pki/keys/mykey/tls.crt

# 6) start docker container with provided server-cert
docker run \
  --name ibmmq91test \
  --env LICENSE=accept \
  --env MQ_QMGR_NAME=QM1 \
  --env MQ_APP_PASSWORD=passw0rd \
  --label mykey \
  --publish 1414:1414 \
  --publish 9443:9443 \
  --detach \
  --volume qm1data:/mnt/mqm \
  --volume ~/mqtest:/etc/mqm/pki/:rw \
  ibmcom/mq
  
# 7) check if MQ server channel is TLS secured
openssl s_client -showcerts -connect localhost:1414
```

## Conclusion

API-Gateway is providing out-of-the-box support for IBM MQ server connectivity. In case the delivered IBM MQ client version is not suitable for a new IBM MQ server version it still can be configured to work with this new IBM MQ version. This is based on the IBM MQ server built-in backward compatibility for older clients.  
What TLS cipher suites are available for API-Gateway as MQ client are depending on the JVM API-Gateway is running with.

For long term support of the IBM MQ connectivity Axway should update the packaged IBM MQ libraries. If needed, please raise an CER with Axway Support.

## Additional Tools for IBM MQ

Useful tool is [IBM MQ Explorer](https://www.ibm.com/support/pages/ms0t-ibm-mq-explorer). Although its intended as MQ administration tool it also becomes handy for testing and verification of IBM MQ interaction. More details can be found at [IBM Knowledge Center - MQ Explorer](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.1.0/com.ibm.mq.explorer.doc/help_home_wmq.htm) *[last visited: 12th May 2020]*
