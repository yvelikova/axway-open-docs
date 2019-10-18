{
"title": "Server Configuration",
"linkTitle": "Server Configuration",
"date": "2019-10-17",
"description": "You can manage the server configuration for the API Gateway using the **Server**\\nmenu option in the Policy Studio main menu. You can also use the **Deploy**\\nbutton in the toolbar. The following menu options are available."
}
<div id="p_general_server_over">

Overview
--------

You can manage the server configuration for the API Gateway using the **Server**
menu option in the Policy Studio main menu. You can also use the **Deploy**
button in the toolbar. The following menu options are available.

</div>

<div id="p_general_server_refresh">

Deploy
------

When you make changes to a filter or policy using the Policy Studio, you must deploy to the API Gateway for the changes to take affect. You can use the **Server**
>**Deploy**
menu option, or the **Deploy**
button in the toolbar. Alternatively, you can press F6. If the server is processing a number of messages when the deploy command is issued, all of the messages are processed using the existing policy. New messages are queued until this batch of messages is completely processed. When the new policy data has been stored and loaded by the server, the queued messages are processed using the new policy.

</div>
