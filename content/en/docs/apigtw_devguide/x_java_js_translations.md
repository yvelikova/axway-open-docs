{
"title": "Java and JavaScript translations",
"linkTitle": "Java and JavaScript translations",
"weight":"90",
"date": "2019-11-27",
"description": "Learn some tips on translating from Java or starting with JavaScript."
}

If you are using JavaScript in a **Scripting Language** filter to add a custom filter to API Gateway, this topic shows some tips on translating from Java or starting with JavaScript.

For more information see [Use JavaScript to call existing Java code](/docs/apigtw/devguide/custom_filter#use-javascript-to-call-existing-java-code) or [Use JavaScript for custom requirements](/docs/apigtw/devguide/custom_filter#use-javascript-for-custom-requirements).

We recommend that you select `JavaScript` in the **Language** field of the **Scripting Language** filter, and ensure that the JavaScript syntax in the script conforms with Nashorn engine syntax. For more information about migrating from Rhino to Nashorn, see the [Rhino Migration Guide](https://wiki.openjdk.java.net/display/Nashorn/Rhino+Migration+Guide).

Java

```
 String x = new String(“Hello World”);
```





| Java                                                        | Equivalent in JavaScript                                              |
|-------------------------------------------------------------|-----------------------------------------------------------------------|
|```
 String x = new String(“Hello World”);
```

 |
 ```var x = new java.lang.String(“Hello World”);
  ```                                                                    |
| ```
 import java.io.*;
 ```                                                          |                                                                       |
| ```
 try {
 }
 catch (Exception exp) {
 }
 ```                                                          | ```
  try {
  }
  catch (exp) {
  }
  ```                                                                    |
| ```
 Runnable x = new Runnable(){
     public void run() {
          // do something
     }
 });
 ```                                                          | ```
  var v = new java.lang.Runnable() {
      run: function() {
          // do something
      }
  }
  ```                                                                    |
| ```
 byte[] x = new byte[10];
 ```                                                          | ```
  var x = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 10);  
  ```                                                                    |
| ```
 for (FilterInvocation filterInvocation : invocation.path) {  
 ```                                                          | ```
  for (i = 0; i <  invocation.path.size(); i++) {
  ```                                                                    |
