{
"title": "Configure package properties",
"linkTitle": "Configure package properties",
"date": "2019-11-19",
"description": "The API Gateway configuration package files include property files that contain name-value pairs describing the package contents, and which are known as *package properties*. This topic describes these properties, and explains how to configure default and custom package properties using the Policy Studio and Configuration Studio tools. "
}
﻿

The API Gateway configuration package files include property files that contain name-value pairs describing the package contents, and which are known as *package properties*. This topic describes these properties, and explains how to configure default and custom package properties using the Policy Studio and Configuration Studio tools.

The API Gateway bundles its configuration in the following package formats:

-   Deployment package (`.fed`)
-   Policy package (`.pol`)
-   Environment package (`.env`)

*configuration packages* on page 1.

<div id="p_promotion_props_manifest">

Configure package properties
----------------------------

All three API Gateway configuration package formats (`.fed`, `.pol`, and `.env`) contain property name-value pairs, which you can use to describe the package contents. These package property values are stored in package property files (`.mf`). A deployment package (`.fed`) has two sets of package properties, one associated with the policy-related configuration, and one associated with the environment-related configuration. Policy packages (`.pol`) and environment packages (`.env`) have a single set of properties each.

### Default properties

The default set of package properties that can be edited includes the following:

| **Property**       | **Description**                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Name**           | Name associated with the configuration (for example, `Payment API Configuration`)                                     |
| **Description**    | Description associated with the configuration (for example, `API Gateway configuration settings for the Payment API`) |
| **Version**        | Configuration version (for example, `v3`)                                                                             |
| **VersionComment** | Comment relating to the configuration version (for example, `Added SSL`)                                              |

These fields are all free format text fields. You can set them to an empty value, or remove them completely, as required. The set of properties is completely customizable. You can add your own custom properties if required.

### Read-only properties

The package also includes the following read-only, system-controlled package properties:

| **Property**  | **Description**                       |
|---------------|---------------------------------------|
| **Id**        | A unique ID for the package           |
| **Timestamp** | The time that the package was written |

### Configure properties in **Policy Studio**

When editing an API Gateway configuration in Policy Studio, you can add, edit, or remove the policy properties and environment properties in the **Environment Configuration** > **Package Properties**
tree node. For example, the following window is displayed when you select **Policies**:

![Policy Studio package properties](/Images/docbook/images/promotion/ps_properties.png)

To add a new package property, click the add icon on the right of the window. Similarly, to delete a package property, click the delete icon to the right of the property.

### Configure properties in **Configuration Studio**

You can edit environment properties in Configuration Studio using a similar window. You can only view policy properties because these are read-only.

Package property values are deployed to an API Gateway along with the entire configuration in the relevant configuration package structure.

</div>

 
