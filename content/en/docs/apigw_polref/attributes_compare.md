{
"title": "Attribute filters",
"linkTitle": "Attribute filters",
"weight": 20,
"date": "2019-10-17",
"description": "TODO Attributes"
}

## Compare attribute filter

The **Compare Attribute**
filter enables you to compare the value of a specified message attribute on the API Gateway white board with the values specified in the filter. For example, the following filter only passes if the `${authentication.subject.id}`
message attribute has a value of `penelope`:

![Compare Attribute Filter](/Images/docbook/images/attr/compare_attributes.png)

Configure the following fields:

**Name**:
Enter an appropriate name for this filter to display in a policy.

**Filter will pass if**:
Select **all**
or **one**
of the specified conditions to apply. Defaults to **all**. Click the **Add**
button at the bottom right to specify a rule condition. In the **Attribute filter rule**
dialog, perform the following steps:

1. Enter a message attribute selector in the **Value from**
    text box on the left (for example, `${http.request.verb}`
    or `${my.customer.attribute}`).
2. Select one of the following rule conditions from the list:
    * `contains`
    * `doesn't contain`
    * `doesn't match regular expression`
    * `ends with`
    * `is`
    * `is not`
    * `matches regular expression`
    * `starts with`
3. Enter a value to compare with in the text box on the right (for example, `POST`). Alternatively, you can enter a selector that is expanded at runtime (for example, `${http.request.uri}`).
4. Click **OK**.

Finally, to edit or delete an existing rule condition, select it in the table, and click the appropriate button.

## Extract REST request attributes

This filter extracts the values of query string parameters and HTTP headers from a REST request and stores them in separate message attributes. The request can be an HTTP GET or HTTP POST request.

### HTTP GET requests

The following example shows an incoming HTTP GET request with query string and HTTP headers:

```
GET /services?name=Niall&location=Dublin&location=Pembroke%20St HTTP/1.1
Host:mail.google.com
User-Agent:Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language:en-gb,en;q=0.5
Accept-Encoding:gzip,deflate
Accept-Charset:ISO-8859-1,utf-8;q=0.7,*;q=0.7
```

Using this example, when **Request Querystring** is selected, the **Extract REST Request Attributes**
filter generates the following attributes:

```
http.header.Host = mail.google.com
http.header.User-Agent = Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.2.15) Gecko/20110303 Firefox/3.6.15
http.header.Accept = text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
http.header.Accept-Language = en-gb,en;q=0.5
http.header.Accept-Encoding = gzip,deflate
http.header.Accept-Charset = ISO-8859-1,utf-8;q=0.7,*;q=0.7
params.query.name = Niall
params.query.location.1 = Dublin
params.query.location.2 = Pembroke St
```

This filter extracts all parameters from an incoming REST request, and stores them in separate message attributes so that they can be validated easily.

{{< alert title="Note" color="primary" >}}For multi-valued query string parameters, each value is given an incremental index. For example, the multi-valued `location`
parameter results in the creation of the `params.query.location.1`
and `params.query.location.2`
message attributes.
{{< /alert >}}

### HTTP POST requests

When you POST a form to the API Gateway, the parameters are placed in the message body, and not in the query string. However, the **Extract REST Request Attributes**
filter treats posted parameters the same as normal query parameters, and also adds them to the `params.query`
message attribute in a similar way to the HTTP GET request. For example, an HTTP POST message body contains the following:

```
grant_type=password&username=johndoe&password=A3ddj3w
```

This means that the `${params.query.grant_type}`
message attribute selector contains a value of `password`.

### Configure extract REST request attributes

Configure the following fields on the **Extract REST Request Attributes**
window:

**Name**:
Enter an appropriate name for this filter to display in a policy.

**Request Querystring**:
Select whether to extract the values of query string parameters from an HTTP POST or GET request. These are simple name-value pairs (for example, `Name=Joe Bloggs`). This setting is selected by default.

**HTTP Headers**:
Select whether to extract the HTTP header values from an HTTP POST or GET request (selected by default).

**Decode Extracted Attributes**:
Select whether to decode URI paths that have been percent-encoded (for example, using `%2F`
for `/`). This setting enables compatibility with previous API Gateway versions, which decoded URI paths, and is not selected by default. For example, this means that URI path components such as the following stay in a raw state:

```
/s8koID4%2FAd6AqgADSghC%2Bg%3D%3D/book%20repo/first%20book.pdf
```

This results in:

```
path[0] = ""
path[1] = "s8koID4%2FAd6AqgADSghC%2Bg%3D%3D"
path[2] = "book%20repo"
path[3] = "first%20book.pdf"
```

When this setting is selected, the URI path is decoded. This results in:

```
path[0] = ""
path[1] = "s8koID4%/Ad6AqgADSghC+g=="
path[2] = "book repo"
path[3] = "first book.pdf"
```

## Extract WSS header

The **Extract WSS Header** filter extracts a WS-Security `Header` block from a message. The extracted security header is stored in the `authentication.ws.wsblockinfo`
message attribute.

To process this security header later in the policy, you can specify this message attribute in the configuration window for the specific processing filter. For example, to sign the security header, you can specify the `authentication.ws.wsblockinfo` message attribute in the **What to Sign**
section of the **XML Signature Generation**
filter. Open the **Message Attribute**
tab on the **What to Sign**
window, and specify this attribute to sign the security header.

### Timestamp validity

The **Extract WSS Header**
filter implicitly checks the `wsu:Timestamp`
in the WSS `Header`
block, if present. It checks the `Expires`
and `Created`
time to determine whether the current time is between the following values:

```
[Created time - drift time], [Expires time + drift time]
```

The drift time is taken from the value set in **Environment Configuration** > **Server Settings > General > Token drift time (secs)**, which defaults to 300 seconds. This filter fails if the extracted WSS header block contains an invalid timestamp.

### Configure extract WSS header

Configure the following fields on the **Extract WSS Header**
filter configuration window:

**Name**:
Enter an intuitive name for this filter to display in a policy (for example, `ExtractCurrent Actor WSS Header`).

**Actor or Role**:
Specify the name of the SOAP Actor or Role of the WS-Security header that you want to extract. Remember, the WS-Security header is stored in the `authentication.ws.wsblockinfo`
message attribute.

**Remove enclosing WS-Security element**:
This option removes the enclosing `wsse:Security`
element from the message.

## Extract WSS timestamp

You can use the **Extract WSS Timestamp**
filter to extract a WSS header timestamp from a message. The timestamp is stored in a specified message attribute so that it can be processed later in a policy. This filter requires the WSS header block to have been extracted previously.

Typically, the **Validate Timestamp**
filter is used to retrieve the timestamp from the specified message attribute and validate it. The **Validate Timestamp**
filter is available from the **Content Filtering**
filter category.

Configure the following fields on the **Extract WSS Timestamp**
filter configuration window:

**Name**:
Enter an appropriate name for this filter to display in a policy.

**Message Attribute to Contain the Timestamp**:
When API Gateway extracts the WSS header timestamp from the message at runtime, it stores the timestamp in the specified message attribute. To validate the timestamp later in the policy, you *must*
specify this message attribute in the configuration window for the **Validate Timestamp**
filter.

## Extract WSS UsernameToken element

You can use the **Extract WSS Username Token**
filter to extract a WS-Security `UsernameToken`
from a message if it exists. The extracted `UsernameToken`
token is stored in the `wss.usernameToken`
message attribute.

To process the `UsernameToken`
later in the policy, you can specify this message attribute in the configuration window for the processing filter. For example, to sign the `UsernameToken`, you can simply specify the `wss.usernameToken`
message attribute in the **What to Sign**
section of the **XML Signature Generation**
filter. Open the **Message Attribute**
tab on the **What to Sign**
window, and specify this attribute to sign the user name token.

Configure the following field on the **Extract WSS Username Token**
filter configuration window:

**Name**:
Enter an appropriate name for the filter. Remember that the WS-Security `UsernameToken`
is stored in the `wss.usernameToken`
message attribute.

## Get cookie filter

A HTTP cookie is data sent by a server in an HTTP response to a client. The client can then return an updated cookie value in subsequent requests to the server. For example, this enables the server to store user preferences, manage sessions, track browsing habits, and so on.

The **Get Cookie**
filter is used to read the `Cookie`
and `Set-Cookie`
HTTP headers. The `Cookie`
header is used when a client sends a cookie to a server. The `Set-Cookie`
header is used when the server instructs the client to store a cookie.

For more details, see [*Create cookie* on page 1](conversion_create_cookie.htm).

### Configure get cookie

Configure the following fields on the **Get Cookie** filter configuration
window:

**Filter Name**:
Enter an appropriate name for this filter to display in a policy..

**Cookie Name**:
Enter a regular expression that matches the name of the cookie. This value can use wildcards. Defaults to the`.*`
wildcard.

**Remove all Cookie Headers from Message after retrieval**:
When this setting is selected, all `Cookie`
and `Set-Cookie`
headers are removed from the message after retrieving the target cookie. This setting is not selected by default.

### Attribute storage

When a cookie is retrieved, it is stored in the appropriate API Gateway message attribute. The following message attributes are used to store cookies:

| Cookie Header Type | Message Attribute Name                     |
|--------------------|--------------------------------------------|
| `Cookie`           | `cookie.cookie_name.value` (for example, `cookie.mytest.value`)        |
| `Set-Cookie`       | `cookie.cookie_name.cookie_attribute_name` (for example, `cookie.mytest.header`)       |

### Set-Cookie attribute list

The `Set-Cookie`
HTTP header includes the following cookie attributes (reflected in the `Set-Cookie`
message attribute name):

| Cookie Attribute Name | Description                                                                                                                                                  |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `header`              | The HTTP header name.                                                                                                                                        |
| `value`               | The value of the cookie.                                                                                                                                     |
| `domain`              | The domain name for this cookie.                                                                                                                             |
| `path`                | The path on the server to which the browser returns this cookie.                                                                                             |
| `maxage`              | The maximum age of the cookie in days, hours, minutes, and/or seconds.                                                                                       |
| `secure`              | Whether sending this cookie is restricted to a secure protocol. This setting is not selected by default, which means that it can be sent using any protocol. |
| `HTTPOnly`            | Whether the browser should use cookies over HTTP only. This setting is not selected by default.                                                              |
