---
title: Discovery Agent variables
description: >-
  
  Use the following environment variables to create your Discovery Agent env_vars file. for additional information, see Deploy your agents.
---
<table style="width: 90%;mc-table-style: url('../Resources/TableStyles/SynchTableStyle_noshade.css');margin-left: auto;margin-right: 0;" class="TableStyle-SynchTableStyle_interop" cellspacing="0">
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" style="width: 304px;" />
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" style="width: 214px;" />
            <thead>
                <tr class="TableStyle-SynchTableStyle_interop-Head-Header1">
                    <th class="TableStyle-SynchTableStyle_interop-HeadE-Column1-Header1"><strong>Variable name</strong>
                    </th>
                    <th class="TableStyle-SynchTableStyle_interop-HeadD-Column1-Header1"><strong>Description</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2" colspan="2"><strong>API Manager variables</strong>
                    </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_HOST</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The host API Manager is running on (localhost).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_PORT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The port API Manager is listening on.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_DISCOVERYIGNORETAGS</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Comma-separated blacklist of tags that should not be on a Proxy before sending to AMPLIFY Central. Take precedence over APIMANAGER_FILTER</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2"><a name="APIMANAGER_FILTER"></a>APIMANAGER_FILTER</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Expression to filter the API you want the agent to discover. See <MadCap:xref href="Filtering APIs to be discovered.htm"><span style="color: #0073a5;" class="mcFormatColor"><i>Filtering APIs to be discovered</i></span></MadCap:xref> for conditional expression samples. </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_APIVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The API version of the API Manager (1.3).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_POLLINTERVAL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The frequency in which API Manager is polled for new endpoints (default=ns, us, ms, s, m, h). Set to <strong>30s</strong>.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2"><a name="APIMANAGER_PROXYAPICIDFIELD"></a>APIMANAGER_PROXYAPICIDFIELD</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The field name used to store AMPLIFY Central identifier for the frontend proxy in API Manager.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_PROXYURL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The URL for the proxy for API Manager (http://username:password@hostname:port). If empty, no proxy is defined.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SUBSCRIPTIONAPPLICATIONFIELD</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The field name used to save subscription IDs to the API Manager application (default=subscriptions). To display this in the UI, add a custom property under applications in your API Manager configuration. See <a href="https://docs.axway.com/bundle/axway-open-docs/page/docs/apim_administration/apimgr_admin/api_mgmt_custom/index.html#customize-api-manager-data">Customize API Manager</a>. </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_AUTH_USERNAME</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The API Manager username for this agent. Created in API Manager (must be API Manager Admin).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_AUTH_PASSWORD</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The password created for the API Manager username created for this agent (created in API Manager).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SSL_MINVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String value for the minimum SSL/TLS version that is acceptable. If zero, empty TLS 1.0 is taken as the minimum. Allowed values are: TLS1.0, TLS1.1, TLS1.2, TLS1.3.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SSL_MAXVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String value for the maximum SSL/TLS version that is acceptable. If empty, then the maximum version supported by this package is used, which is currently TLS 1.3. Allowed values are: TLS1.0, TLS1.1, TLS1.2, TLS1.3.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SSL_CIPHERSUITES</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">An array of strings. It is a list of supported cipher suites for TLS versions up to TLS 1.2. If CipherSuites is nil, a default list of secure cipher suites is used, with a preference order based on hardware performance. See <MadCap:xref href="SSL TLS advanced.htm#Supporte"><span style="color: #0073a5;" class="mcFormatColor"><i>Supported Cipher Suites</i></span></MadCap:xref>.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SSL_NEXTPROTOS</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">An array of strings. It is a list of supported application level protocols, in order of preference, based on the ALPN protocol list. Allowed values are: h2, http/1.0, http/1.1, h2c.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">APIMANAGER_SSL_INSECURESKIPVERIFY</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Controls whether a client verifies the server's certificate chain and host name. If true, TLS accepts any certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to man-in-the-middle attacks.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">LOG_LEVEL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The log level for output messages (debug, info, warn, error).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">LOG_FORMAT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The format to print log messages (json, line, package).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">LOG_OUTPUT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The output for the log lines (stdout, file, both).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">LOG_PATH</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The path (relative or absolute) to save logs files, if output type file or both.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2" colspan="2"><strong>AMPLIFY Central variables</strong>
                    </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_URL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The URL to the AMPLIFY Central instance being used for this Discovery Agent.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_TENANTID</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The Organization ID from AMPLIFY Central. Locate this at Platform &gt; User &gt; Organization.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_TEAMID</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The Team ID in AMPLIFY Central that all AWS APIs will be linked. Locate this at AMPLIFY Central &gt; Access &gt; Teams.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2"><a name="CENTRAL_MODE"></a>CENTRAL_MODE</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Method to send endpoints back to Central. (connected = API Server, disconnected = Catalog).</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_PROXYURL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The URL for the proxy for Amplify Central (http://username:password@hostname:port). If empty, no proxy is defined.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_ENVIRONMENT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Environment that is set by download kit in APIC</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_URL</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The AMPLIFY login URL: <a href="https://login.axway.com/auth">https://login.axway.com/auth</a></td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_REALM</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The Realm used to authenticate for AMPLIFY Central.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_CLIENTID</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The name of the Service Account created in AMPLIFY Central. Locate this at AMPLIFY Central &gt; Access &gt; Service Accounts.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_PRIVATEKEY</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The private key associated with the Service Account.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_PUBLICKEY</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">
                        <p>The public key associated to the Service Account. Extract using the following commands:</p>
                        <ul>
                            <li>
                                <p><code>openssl genpkey -algorithm RSA -out ./private_key.pem -pkeyopt rsa_keygen_bits:2048</code>
                                </p>
                            </li>
                            <li>
                                <p><code>openssl rsa -pubout -in ./private_key.pem -out ./public_key.pem</code>
                                </p>
                            </li>
                            <li>
                                <p><code>openssl rsa -pubout -in ./private_key.pem -out ./public_key.der -outform der</code>
                                </p>
                            </li>
                            <li>
                                <p><code>base64 ./public_key.der &gt; ./public_key</code>
                                </p>
                            </li>
                        </ul>
                        <p>If the keys for APIC service account have already been generated, then only the 3rd and 4th bullet points need to be run using the public key that was previously generated.</p>
                    </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_KEYPASSWORD</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The password for the private key, if applicable.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_AUTH_TIMEOUT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">The timeout to wait for the authentication server to respond (ns - default, us, ms, s, m, h). Set to <strong>10s</strong>.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_ENVIRONMENT</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Name of the AMPLIFY Central environment.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_APISERVERVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Version of the API Server that the agent will communicate with</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_ADDITIONALTAGS</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Additional tag names to publish separated by a comma.
</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_SSL_MINVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String value for the minimum SSL/TLS version that is acceptable. If zero, empty TLS 1.0 is taken as the minimum. Allowed values are: TLS1.0, TLS1.1, TLS1.2, TLS1.3.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_SSL_MAXVERSION</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">String value for the maximum SSL/TLS version that is acceptable. If empty, then the maximum version supported by this package is used, which is currently TLS 1.3. Allowed values are: TLS1.0, TLS1.1, TLS1.2, TLS1.3.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_SSL_CIPHERSUITES</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">An array of strings. It is a list of supported cipher suites for TLS versions up to TLS 1.2. If CipherSuites is nil, a default list of secure cipher suites is used, with a preference order based on hardware performance. See <MadCap:xref href="SSL TLS advanced.htm#Supporte"><span style="color: #0073a5;" class="mcFormatColor"><i>Supported Cipher Suites</i></span></MadCap:xref>.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">CENTRAL_SSL_NEXTPROTOS</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">An array of strings. It is a list of supported application level protocols, in order of preference, based on the ALPN protocol list. Allowed values are: h2, http/1.0, http/1.1, h2c.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyB-Column1-Body2">CENTRAL_SSL_INSECURESKIPVERIFY</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyA-Column1-Body2">Controls whether a client verifies the server's certificate chain and host name. If true, TLS accepts any certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to man-in-the-middle attacks.</td>
                </tr>
            </tbody>
        </table>