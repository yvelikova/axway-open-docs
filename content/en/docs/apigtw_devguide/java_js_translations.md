{
"title": "Java and JavaScript translations",
"linkTitle": "Java and JavaScript translations",
"date": "2019-11-27",
"description": "If you are using JavaScript in a **Scripting Language** filter to add a custom filter to API Gateway (see [*Use JavaScript to call existing Java code* on page 1](%3Ca%20href=) or [*Use JavaScript for custom requirements* on page 1](%3Ca%20href=)), the following table provides some tips on translating from Java or starting with JavaScript."
}
﻿

If you are using JavaScript in a **Scripting Language** filter to add a custom filter to API Gateway (see *Use JavaScript to call existing Java code* on page 1 or *Use JavaScript for custom requirements* on page 1), the following table provides some tips on translating from Java or starting with JavaScript.

We recommend that you select `JavaScript` in the **Language** field of the **Scripting Language** filter, and ensure that the JavaScript syntax in the script conforms with Nashorn engine syntax. For more information about migrating from Rhino to Nashorn, see the [Rhino Migration Guide](https://wiki.openjdk.java.net/display/Nashorn/Rhino+Migration+Guide).

| Java                                                        | Equivalent in JavaScript                                              |
|-------------------------------------------------------------|-----------------------------------------------------------------------|
| ``` {space="preserve"}                                      
 String x = new String(“Hello World”);                        
 ```                                                          | ``` {space="preserve"}                                                
  var x = new java.lang.String(“Hello World”);                           
  ```                                                                    |
| ``` {space="preserve"}                                      
 import java.io.*;                                            
 ```                                                          |                                                                       |
| ``` {space="preserve"}                                      
 try {                                                        
 }                                                            
 catch (Exception exp) {                                      
 }                                                            
 ```                                                          | ``` {space="preserve"}                                                
  try {                                                                  
  }                                                                      
  catch (exp) {                                                          
  }                                                                      
  ```                                                                    |
| ``` {space="preserve"}                                      
 Runnable x = new Runnable(){                                 
     public void run() {                                      
          // do something                                     
     }                                                        
 });                                                          
 ```                                                          | ``` {space="preserve"}                                                
  var v = new java.lang.Runnable() {                                     
      run: function() {                                                  
          // do something                                                
      }                                                                  
  }                                                                      
  ```                                                                    |
| ``` {space="preserve"}                                      
 byte[] x = new byte[10];                                     
 ```                                                          | ``` {space="preserve"}                                                
  var x = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 10);  
  ```                                                                    |
| ``` {space="preserve"}                                      
 for (FilterInvocation filterInvocation : invocation.path) {  
 ```                                                          | ``` {space="preserve"}                                                
  for (i = 0; i <  invocation.path.size(); i++) {                        
  ```                                                                    |


