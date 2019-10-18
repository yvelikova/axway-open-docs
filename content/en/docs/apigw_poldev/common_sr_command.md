{
"title": "Stress test with send request (sr)",
"linkTitle": "Stress test with send request (sr)",
"date": "2019-10-17",
"description": "The API Gateway provides a command-line tool for stress testing named send request (`sr`). The sr tool is available in the following directory of your API Gateway installation:"
}
﻿
<div id="p_common_sr_command_overview">

The API Gateway provides a command-line tool for stress testing named send request (`sr`). The sr tool is available in the following directory of your API Gateway installation:

`INSTALL_DIR/posix/lib`
The `sr` tool is also available from the root directory of the API Tester installation.

{{< alert title="Note" color="primary" >}} On Linux, the `LD_LIBRARY_PATH`
environment variable must be set to the directory from which you are running the `sr` tool, and you must use the `vrun sr`
command. For example:{{< /alert >}}
<div class="indentTable">

    vrun sr http://testhost:8080/stockquote

</div>

</div>

<div id="p_common_sr_command_basic_examples">

Basic sr command examples
-------------------------

The following are some basic examples of using the `sr` command:

**HTTP GET**:

    sr http://testhost:8080/stockquote

**POST file contents (content-type inferred from file extension)**:

    sr -f StockQuoteRequest.xml http://testhost:8080/stockquote

**Send XML file with SOAP Action 10 times**:

    sr -c 10 -f StockQuoteRequest.xml http://testhost:8080/stockquote

**Send XML file with SOAP Action 10 times in 3 parallel clients**:

    sr -c 10 -p 3 -f StockQuoteRequest.xml http://testhost:8080/stockquote

**Send the same request quietly**:

    sr -c 10 -p 3 -qq -f StockQuoteRequest.xml http://testhost:8080/stockquote

**Run test for 10 seconds**:

    sr -d 10 -qq -f StockQuoteRequest.xml http://testhost:8080/stockquote

**POST file contents with SOAP Action**:

    sr -f StockQuoteRequest.xml -A SOAPAction:getPrice http://testhost:8080/stockquote

</div>

<div id="p_common_sr_command_advanced_examples">

Advanced sr command examples
----------------------------

The following are some advanced examples of using the `sr` command:

**Send form.xml to http://192.168.0.49:8080/healthcheck split at 171 character size, and trickle 200 millisecond delay between each send with a 200 Content-Length header**:

``` {space="preserve"}
sr -h 192.168.0.49 -s 8080 -u /healthcheck -b 171 -t 200 -f form.xml 
-a "Content-Type:application/x-www-form-urlenprogramlistingd" -a "Content-Length:200"
```

**Send a multipart message to http://192.168.0.19:8080/test, 2 XML docs are attached to message**:

``` {space="preserve"}
sr -h 192.168.0.49 -s 8080 -u /test -{ -a Content-Type:text/xml -f soap.txt 
-a Content-Type:text/xml -f attachment.xml -a Content-Type:text/xml -} -A c-timestamp:1234
```

**Send only headers using a GET over one-way SSL running 10 parallel threads for 86400 seconds (1 day) using super quiet mode**:

``` {space="preserve"}
sr -h 192.168.0.54 -C -s 8443 -u /nextgen -f test_req.xml -a givenName:SHViZXJ0 
-a sn:RmFuc3dvcnRo -v GET -p10 -d86400 -qq
```

**Send query string over mutual SSL presenting client certificate and key doing a GET running 10 parallel threads for 86400 seconds (1 day) using super quiet mode**:

``` {space="preserve"}
sr -h 192.168.0.54 -C -s 8443 -X client.pem -K client.key 
-u "https://localhost:8443/idp?TargetResource=http://axway.test.com" -f test_req.xml 
-v GET -p10 -d86400 -qq
```

**Send zip file in users home directory to testhost on port 8080 with /zip URI, save the resulting response content into the result.zip file, and do this silently**:

``` {space="preserve"}
sr -f ~/test.zip -h testhost -s 8080 -u /zip -a Content-Type:application/zip 
-J result.zip -qq
```

</div>

<div id="p_common_sr_command_arguments">

sr command arguments
--------------------

The main arguments to the `sr` command include the following:

Argument
Description
`--help`
List all arguments
`-a attribute:value`
Set the HTTP request header (for example, `-a Content-Type:text/xml`)
`-c [request-count]`
Number of requests to send per process
`-d [seconds]`
Duration to run test for
`-f [content-filename]`
File to send as the request
`-h [host]`
Name of destination host
`-i [filename]`
Destination of statistics data
`-l [file]`
Destination of diagnostic logging
`-m`
Recycle SSL sessions (use multiple times)
`-n`
Enable nagle algorithm for transmission
`-o [output]`
Output statistics information every \[milliseconds\] (only with `-d`)
`-p [connections]`
Number of parallel client connections (threads) to simulate
`-q , -qq, -qqq`
Quiet modes (quiet, very quiet, very very quiet)
`-r`
Do not send HTTP Request line
`-s [service]`
Port or service name of destination (default is `8080`)
`-t [milliseconds]`
Trickle: delay between sending each character
`-u [uri]`
Target URI to place in request
`-v [verb]`
Set the HTTP verb to use in the request (default is `POST`)
`-w [milliseconds]`
Wait for \[milliseconds\] between each request
`-x [chunksize]`
Chunk-encode output
`-y [cipherlist]`
SSL ciphers to use (see OpenSSL manpage ciphers(1))
`-z`
Randomize chunk sizes up to limit set by `-x`
`-A attribute:value`
Set the HTTP request header (for example, `-a Content-Type:text/xml`) in the outermost attachment
`-B`
Buckets for response-time samples
`-C`
enCrypt (use SSL protocol)
`-I [filename]`
File for Input (received) data (`- = stdout`)
`-K`
RSA Private Key
`-L`
Line-buffer `stdout`
and `stderr`
`-M`
Multiplier for response-time samples
`-N`
origiN for response-time samples
`-O [filename]`
File for Output (sent) data (`- = stdout`)
`-S [part-id]`
Start-part for multipart message
`-U [count]`
reUse each connection for `count`
requests
`-V [version]`
Sets the HTTP version (`1.0`, `1.1`)
`-X`
X.509 client certificate
`-Y [cipherlist]`
Show expanded form of `[cipherlist]`
`[-{/-}`
Create multipart body (nestable: use `-f`
for leaves)
<div>

Further information
-------------------

For a listing of all arguments, enter `sr --help`.

</div>

</div>
