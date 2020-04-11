---
title: Discovery Agent flags
description: "Use the following parameters [flags] when issuing the
  discovery_agent command. View these flags with command discovery_agent -h. "
---
{{< alert title="Note" color="primary" >}}These parameters are also environment variables referenced in the Create your configuration section, with the exception of help and pathConfig. These parameters are not configuration values.{{< /alert >}}

<table style="width: 90%;mc-table-style: url('../Resources/TableStyles/SynchTableStyle_noshade.css');margin-left: auto;margin-right: 0;" class="TableStyle-SynchTableStyle_interop" cellspacing="0">
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" style="width: 304px;" />
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" style="width: 214px;" />
            <thead>
                <tr class="TableStyle-SynchTableStyle_interop-Head-Header1">
                    <th class="TableStyle-SynchTableStyle_interop-HeadE-Column1-Header1"><strong>discovery_agent \[flags] Flags</strong>
                    </th>
                    <th class="TableStyle-SynchTableStyle_interop-HeadD-Column1-Header1"><strong>Description</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerHost</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Host of API Manager service (default "localhost").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerPassword</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. API Manager password.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerPort</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Int. Port of API Manager service (default 8075).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerDiscoveryIgnoreTags</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. List of tags on frontend proxy to check for and ignore discovery.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerFilter</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Filter condition for discovery </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerPollInterval</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Duration. The time interval at which the published proxies will be checked for publishing as catalog. (default 30s).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apimanagerUsername</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. API Manager username.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiManagerSSLMinVersion</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Minimum acceptable SSL/TLS protocol version (default "TLS1.2").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiManagerSSLMaxVersion</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Maximum acceptable SSL/TLS protocol version (default "0").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiManagerSSLCipherSuites</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Strings. A list of supported cipher suites, comma separated (default \[ECDHE-ECDSA-AES-256-GCM-SHA384,ECDHE-RSA-AES-256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-ECDSA-AES-128-GCM-SHA256,ECDHE-RSA-AES-128-GCM-SHA256,ECDHE-ECDSA-AES-128-CBC-SHA256,ECDHE-RSA-AES-128-CBC-SHA256])</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiManagerSSLNextProtos</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Strings. List of supported application level protocols, comma separated.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiServerEnvironment</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. The Environment that the APIs will be associated with in AMPLIFY Central.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiVersion</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. The version of the V7 API. (default "1.3").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">apiManagerSSLInsecureSkipVerify</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Controls whether a client verifies the server's certificate chain and host name. </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authClientId</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Client ID for the service account.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authKeyPassword</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Password for the private key, if needed.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authPrivateKey</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Path to the private key for AMPLIFY Central Authentication (default "/etc/private_key.pem").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authPublicKey</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Path to the public key for AMPLIFY Central Authentication (default "/etc/public_key").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authRealm</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. AMPLIFY Central authentication Realm (default "Broker").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authTimeout</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Duration. Timeout waiting for AxwayID response (default 10s).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">authUrl</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. AMPLIFY Central authentication URL (default "https://login-preprod.axway.com/auth").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2"><a name="centralMode"></a>centralMode</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Agent Mode (default "disconnected").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralPollInterval</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Duration. The time interval at which the central will be polled for subscription processing (default 1m0s).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralSSLCipherSuites</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Strings. List of supported cipher suites, comma separated (default \[ECDHE-ECDSA-AES-256-GCM-SHA384,ECDHE-RSA-AES-256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-ECDSA-AES-128-GCM-SHA256,ECDHE-RSA-AES-128-GCM-SHA256,ECDHE-ECDSA-AES-128-CBC-SHA256,ECDHE-RSA-AES-128-CBC-SHA256]).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralSSLInsecureSkipVerify</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Controls whether a client verifies the server's certificate chain and host name.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralSSLMaxVersion</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Maximum acceptable SSL/TLS protocol version (default "0").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralSSLMinVersion</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Minimum acceptable SSL/TLS protocol version (default "TLS1.2").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralSSLNextProtos</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Strings. List of supported application level protocols, comma separated.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralTeamId</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Team ID for the current default team for creating catalog.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralTenantId</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Tenant ID for the owner of the environment.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">centralUrl</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. URL of AMPLIFY Central (default "https://apicentral.preprod.k8s.axwayamplify.com").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">help</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Help for discovery_agent.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">logFormat</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Log format (json, line, package) (default "json").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">logLevel</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Log level (debug, info, warn, error) (default "info").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">logOutput</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Log output type (stdout, file, both) (default "stdout").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">logPath</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Log file path if output type is file or both (default "logs").</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">pathConfig</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. Configuration file path for the agent.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">subscriptionApplicationField</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String. The custom field name in V7 to track Subscription IDs. (default "subscriptions").
</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyB-Column1-Body2">version</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyA-Column1-Body2">Version for discovery_agent.</td>
                </tr>
            </tbody>
        </table>