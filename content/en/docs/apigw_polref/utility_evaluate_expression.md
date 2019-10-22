{
"title": "Evaluate selector",
"linkTitle": "Evaluate selector",
"date": "2019-10-17",
"description": "The **Evaluate Selector**\\nfilter enables you to evaluate the contents of a specified selector expression, and return a boolean result. A selector is a special syntax that enables API Gateway configuration settings to be evaluated and expanded at runtime. "
}
﻿
<div id="p_utility_evaluate_expression_overview">

Overview
--------

The **Evaluate Selector**
filter enables you to evaluate the contents of a specified selector expression, and return a boolean result. A selector is a special syntax that enables API Gateway configuration settings to be evaluated and expanded at runtime.

This filter enables you to evaluate a specified selector expression and make a decision in a policy based on whether the expression value fails or passes. For example, you could use the following expression to check if the user belongs to a particular group that allows the user to access a particular resource:

``` {space="preserve"}
${user[0].memberOf.contains("CN=Group Policy Creator Owners,CN=Users,DC=acmeqa,DC=com")}
```

This expression checks if the `memberOf`
attribute retrieved for the first `user`
contains the specified value (in this case, membership of a particular group). If the expression matches, the filter passes.

Alternatively, you could use the following selector expression to check if the user email address is valid:

``` {space="preserve"}
${user[0].mail.contains("admin@qa.acme.com")}
```

This expression checks if the `mail`
attribute retrieved for the first `user`
contains the specified value (in this case, a particular email address). If the expression matches, the filter passes.

For more details on selectors, see
[Select configuration values at runtime](/csh?context=630&product=prod-api-gateway-77)
in the
[API Gateway Policy Developer Guide](/bundle/APIGateway_77_PolicyDevGuide_allOS_en_HTML5/)
.

</div>

<div id="p_utility_evaluate_expression_conf">

Configuration
-------------

Configure the following settings:

**Name**:\
Enter a descriptive name for this filter to display in a policy.

**Expression**:\
Enter the selector expression to be evaluated. Defaults to the following selector expression:

    ${1 + 1 == 2}

</div>
