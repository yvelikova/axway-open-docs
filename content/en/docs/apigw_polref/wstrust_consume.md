{
"title": "Consume WS-Trust message",
"linkTitle": "Consume WS-Trust message",
"date": "2019-10-17",
"description": "You can configure the API Gateway to consume various types of WS-Trust messages. For example, `RequestSecurityToken`\\n(RST), `RequestSecurityTokenResponse`\\n(RSTR), and `RequestSecurityTokenResponseCollection`\\n(RSTRC). "
}
﻿
<div id="p_wstrust_consume_overview">

Overview
--------

You can configure the API Gateway to consume various types of WS-Trust messages. For example, `RequestSecurityToken`
(RST), `RequestSecurityTokenResponse`
(RSTR), and `RequestSecurityTokenResponseCollection`
(RSTRC).

For more details on WS-Trust messages and their semantics and format, see the WS-Trust specification. For details on creating WS-Trust messages, see [*Create WS-Trust message* on page 1](wstrust_create.htm).

</div>

<div id="p_wstrust_consume_config">

Configuration
-------------

Configure the fields in the following sections.

<div id="p_wstrust_consume_msg">

### Message types

The API Gateway can consume the following types of WS-Trust messages.Select the appropriate message type based on your requirements:

-   **RST:RequestSecurityToken**:\
    The RST message contains a request for a single token to be issued by the Security Token Service (STS).
-   **RSTR:RequestSecurityTokenResponse**:\
    The RSTR message is sent in response to an RST message from a token requestor. It contains the token issued by the STS.
-   **RSTRC:RequestSecurityTokenResponseCollection**:\
    The RSTRC message contains an RSTR (containing a single issued token) for each RST that was received in an RSTC message.

</div>

<div id="p_wstrust_consume_settings">

### Message consumption settings

The configuration options available on the **Message Consumption**
tab enable you to extract various parts of the WS-Trust message and store them in message attributes for use in subsequent filters.

**Extract Token**:\
Extracts a `<RequestedSecurityToken>`
from theWS-Trust message and stores it in a message attribute. Select the expected value of the `<TokenType>`
element in the `<RequestSecurityToken>`
block. The default URI is `http://schemas.xmlsoap.org/ws/2005/02/sc/sct`.

**Extract BinaryExchange**:\
Extracts a `<BinaryExchange>`
token from the message and stores it in a message attribute. Select the `ValueType`
of the token from the list.

**Extract Entropy**:\
The client can provide its own key material (entropy) that the token issuer may use when generating the token. The issuer can use this entropy as the key itself, it can derive another key from this entropy, or it can choose to ignore the entropy provided by the client altogether in favor of generating its own entropy.

**Extract RequestedProofToken**:\
Select this option to extract a `<RequestedProofToken>`
from the WS-Trust message and store it in a message attribute for later use. You must select the type of the token (`encryptedKey`
or `computedKey`) from the list.

**Extract CancelTarget**:\
You can select this option to extract a `<CancelTarget>`
block from the WS-Trust message and store it in a message attribute.

**Extract RequestedTokenCancelled**:\
You can select this option to extract a `<RequestedTokenCancelled>`
block from the WS-Trust message and store it in a message attribute.

**Match Context ID**
:\
Select this option to correlate the response message from the STS with a specific request message. The `Context`
attribute on the `RequestSecurityTokenResponse`
message is compared to the value of the `ws.trust.context.id`
message attribute, which contains the context ID of the current token request.

**Extract Lifetime**:\
Select this option to remove the `<Lifetime>`
elements from the WS-Trust token.

**Extract Authenticator**:\
Select this option to extract the `<Authenticator>`
from the WS-Trust token and store it in a message attribute.

</div>

<div id="p_wstrust_consume_advanced">

### Advanced settings

The following fields can be configured on the **Advanced**
tab:**WS-Trust Namespace**:\
Enter the WS-Trust namespace that you expect all WS-Trust elements to be bound to in tokens that are consumed by this filter. The default namespace is `http://schemas.xmlsoap.org/ws/2005/02/trust`.

**Cache Security Context Session Key**:\
Click the browse button, and select the cache to store the security context session key. The session key (the value of the `security.context.session.key`
attribute), is cached using the value of the `security.context.token.unattached.id`
message attribute as the key into the cache.

You can select a cache from the list of currently configured caches in the tree. To add a cache, right-click the **Caches**
tree node, and select **Add Local Cache**
or **Add Distributed Cache**. Alternatively, you can configure caches under the **Libraries**
node in the Policy Studio tree. For more details, see
[Global caches](/csh?context=604&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

**Lifetime of ComputedKey**:\
The settings in this section enable you to add a time stamp to the extracted `computedKey`
using the values specified in the `<Lifetime>`
element. This section is enabledonly after selecting the **Extract RequestedProofToken**
check box above, selecting the `computedKey`
option from the associated list, and finally by selecting **Extract Lifetime**. Configure the following fields in this section:

-   **Add Lifetime to ComputedKey**:\
    Adds the `<Lifetime>`
    details to the`security.context.session.key`
    message attribute.This enables you to check the validity of the key every time it is used against the details in the `<Lifetime>`
    element.
-   **Format of Timestamp**:\
    Specify the format of the time stamp using the Java date and time pattern settings.
-   **Timezone**:\
    Select the appropriate time zone from the list.
-   **Drift**:\
    To allow for differences in the clock times on the machine on which the WS-Trust token was generated and the machine running the API Gateway, enter a drift time. This allows for differences in the clock times on these machines and is used when validating the time stamp on the `computedKey`.

**Verify Authenticator Using**:\
You can verify the authenticator using either the **Generated**
or **Consumed**
message. In either case select the appropriate type of WS-Trust message from the available options.

</div>

</div>
