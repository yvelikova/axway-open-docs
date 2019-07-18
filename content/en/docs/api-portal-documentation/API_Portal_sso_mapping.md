{"title":"Mapping syntax","linkTitle":"Mapping syntax","date":"2019-7-16","description":"The IdP sends information about the SSO user to the SP (in the case of API Portal, this is API Manager) using attributes. These attributes contain information about the user, such as the user's name, department, organization, email address, phone number, and so on. "} ﻿

The IdP sends information about the SSO user to the SP (in the case of API Portal, this is API Manager) using attributes. These attributes contain information about the user, such as the user's name, department, organization, email address, phone number, and so on.

This section describes how to define mappings from an IdP to API Portal. An IdP can name attributes associated with the authenticated user in a variety of different ways (for example, `mail`, `email`, or `e-mail`). API Portal expects attributes with specific names, so you might need to transform the IdP attributes to the API Portal attributes using a rename mapping. In addition, an IdP might not provide some attributes that API Portal requires, so you might need to use a filter mapping to assign required attributes based on a filter.

The mappings are defined in the `Mappings` section of the `SAMLIdentityProvider` section in the `service-provider-apiportal.xml` file. If you have configured SSO also for API Manager, note that the mappings for API Portal are independent from the mappings for API Manager.

Two types of mappings are supported:

-   Rename mapping – This mapping enables you to rename an attribute from the IdP, keeping its value.
-   Filter mapping – This mapping creates output attributes when a filter matches the input attributes from the IdP.

The following table describes the mandatory and optional attributes expected by API Portal, and gives examples of mappings that you can use to provide them.

{{&lt; alert title="Note" color="primary" &gt;}}API Portal attribute names are all lowercase. The attribute names are case-sensitive.{{&lt; /alert &gt;}}

| Attribute name               | Description                                                                                                                   | API Portal requirement | Example                                                                                                                                                                     |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                         | The logged in user name.                                                                                                      | Mandatory              | Sample RenameMapping if the IdP provides an attribute which should be renamed:                                                                                              
                                                                                                                                                                                 
        <RenameMapping source="user" target="name"/>                                                                                                                             |
| organization                 | The API Portal organization associated with the logged in user.                                                               
                                                                                                                                 
  The organization must already exist in API Portal. Organizations can be added by an API Manager administrator in API Manager.  | Mandatory              | The IdP does not need to provide this value.                                                                                                                                
                                                                                                                                                                                 
    If it does and the IdP attribute has a different name, you can use a RenameMapping to transform it to an `organization` attribute.                                           
                                                                                                                                                                                 
    If the IdP does not provide the value associated with the organization at all, you can use an OutputAttribute to assign an organization to the logged in user. For example:  
                                                                                                                                                                                 
        <OutputAttribute name="organization">Research</OutputAttribute>                                                                                                          |
| role                         | The API Portal role associated with the logged in user.                                                                       
                                                                                                                                 
  Permitted substring values:                                                                                                    
                                                                                                                                 
      Operator                                                                                                                   
                                                                                                                                 
      User                                                                                                                       | Mandatory              | The IdP does not need to provide this value.                                                                                                                                
                                                                                                                                                                                 
    If it does and the IdP attribute has a different name, you can use a RenameMapping to transform it to a `role` attribute.                                                    
                                                                                                                                                                                 
    If the IDP does not provide the value associated with the role at all, you can use an OutputAttribute to assign a role to the logged in user. For example:                   
                                                                                                                                                                                 
    ``` {space="preserve"}                                                                                                                                                       
    <OutputAttribute name="role">Operator</OutputAttribute>                                                                                                                      
    ```                                                                                                                                                                          |
| mail                         | The email address associated with the logged in user.                                                                         | Optional               | Sample RenameMapping if the IdP provides an attribute which should be renamed:                                                                                              
                                                                                                                                                                                 
        <RenameMapping source="email" target="mail"/>                                                                                                                            |
| description                  | The description text associated with the logged in user.                                                                      | Optional               | Sample RenameMapping if the IdP provides an attribute which should be renamed:                                                                                              
                                                                                                                                                                                 
        <RenameMapping source="userDescription" target="description"/>                                                                                                           |
| department                   | The department that the logged in user belongs to.                                                                            | Optional               | Sample RenameMapping if the IdP provides an attribute which should be renamed:                                                                                              
                                                                                                                                                                                 
        <RenameMapping source="businessUnit" target="department"/>                                                                                                               |
| telephonenumber              | The telephone number associated with the logged in user.                                                                      | Optional               | Sample RenameMapping if the IdP provides an attribute which should be renamed:                                                                                              
                                                                                                                                                                                 
        <RenameMapping source="phone" target="telephonenumber"/>                                                                                                                 |

Examples
--------

### Rename mapping

If the IdP generates a attribute name that is different to the attribute name expected by API Portal (for example, `e-mail` rather than `mail`), you can use a RenameMapping directive to effectively rename the IdP attribute to the API Portal attribute.

For example, to rename the IdP attribute name `e-mail` to the API Portal attribute `mail`, use the following RenameMapping:

    <RenameMapping source="e-mail" target="mail"/>

The `source` attribute refers to the attribute supplied by the IdP that you want to rename.

The `target` attribute refers to the name of the attribute after it has been renamed.

### Multiple rename mappings

You can have multiple RenameMapping directives.

In the following example, two rename mappings are used:

-   The IdP presents an attribute called `email`. Using the RenameMapping, this is transformed to `mail`.
-   The IdP presents an attribute called `phone`. Using the RenameMapping, this is transformed to `telephonenumber`.

In addition, a filter mapping is used to achieve the following:

-   If a user logs in with the transformed `mail` attribute set to `sjones@research.activedirectory2012.lab.chicago.acme.int` the user is assigned a `role` of `User` and an `organization` of `Research`.

``` {space="preserve"}
<Mappings>
    <RenameMapping source="phone" target="telephonenumber"/>
    <RenameMapping source="email" target="mail"/>
    <FilterMapping>
        <Filter>(mail=sjones@research.activedirectory2012.lab.chicago.acme.int)</Filter>
        <OutputAttribute name="role">User</OutputAttribute>
        <OutputAttribute name="organization">Research</OutputAttribute>
    </FilterMapping> 
</Mappings>
```

### Filter mappings

Add the two required attributes when the `department` attribute from the IdP is set to `RD Admin`:

``` {space="preserve"}
<Mappings>
   <FilterMapping>
      <Filter>(department=RD Admin)</Filter>
      <OutputAttribute name="role">operator</OutputAttribute>
      <OutputAttribute name="organization">RD</OutputAttribute>
   </FilterMapping>
</Mappings>
```

Add the two required attributes when the `mail` attribute from the IdP is set to `john.doe@prov.org`:

``` {space="preserve"}
<Mappings>
   <FilterMapping>
      <Filter>(mail=john.doe@prov.org)</Filter>
      <OutputAttribute name="role">operator</OutputAttribute>
      <OutputAttribute name="organization">prov</OutputAttribute>
   </FilterMapping>
</Mappings>
```

Add the two required attributes when the `department` attribute from the IdP is set to `RD User`:

``` {space="preserve"}
<Mappings>
   <FilterMapping>
      <Filter>(department=RD User)</Filter>
      <OutputAttribute name="role">user</OutputAttribute>
      <OutputAttribute name="organization">prov</OutputAttribute>
   </FilterMapping>
</Mappings>
```

Filter by the user’s email, and assign a role and an organization:

``` {space="preserve"}
<Mappings>
   <RenameMapping source="email" target="mail"/>
   <FilterMapping>
       <Filter>(mail=jsmith@activedirectory2012.prod.acme.org)</Filter>
       <OutputAttribute name="role">operator</OutputAttribute>
       <OutputAttribute name="organization">Production</OutputAttribute>
   </FilterMapping>    
</Mappings>
```

Filter syntax
-------------

A filter is specified using the [LDAP Search Filter](https://docs.oracle.com/cd/E19528-01/819-0997/gdxpo/index.html) syntax. For more details, see [Filter syntax](/csh?context=1017&product=prod-api-manager-77) in the [API Manager User Guide](/bundle/APIManager_77_APIMgmtGuide_allOS_en_HTML5/) .
