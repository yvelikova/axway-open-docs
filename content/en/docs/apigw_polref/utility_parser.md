{
"title": "HTTP parser",
"linkTitle": "HTTP parser",
"date": "2019-10-17",
"description": "TODO"
}

The **HTTP Parser** filter parses the HTTP message headers and body. As such, it acts as a barrier in the policy to guarantee that the entire content has been received before any other filters are invoked. It can be used, for example, to wait for an entire message from the back-end service before the gateway begins to reply to the caller. It requires the `content.body` attribute.

The **HTTP Parser** filter forces the server to do *store-and-forward* routing instead of the default *cut-through* routing, where the request is only parsed on-demand. For example, you can use this filter as a simple test to ensure that the message is XML.

See also [*HTTP header authentication* on page 1](authn_http_header.htm).
