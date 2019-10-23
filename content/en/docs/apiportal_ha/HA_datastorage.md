{
    "title":"Data storage for high availability",
    "linkTitle":"Data storage for HA",
    "weight":"3",
    "date":"2019-08-09",
    "description":"Understand where API Portal stores API Management data."
} 

## Data storage

API Portal stores API Management data both in relational database management system (RDBMS) and as files on disk. The stored data includes, for example, configuration data and logs, all API Portal customizations, as well as articles and their related data posted in Joomla!, blog, or discussion forum.

The following table describes where API Portal stores data. In RDBMS, `#_` stands for the table prefix of the DB schema. The default `INSTALL_DIR` is `/opt/axway/apiportal/htdoc`.

|Data type|Storage location|
|---------|----------------|
|**System**|   |
|API Manager settings (for example, IP address, certificates)|<ul><li>RDBMS: `#_apiportal_configuration`</li><li>Files on disk: `INSTALL_DIR/administrator/components/com_apiportal/assets/cert`</li></ul>|
|Logs|Files on disk:<ul><li>Software installation: `/var/log/httpd/error_log`</li><li>`INSTALL_DIR/logs`</li></ul>|
|Public API mode key file|Files on disk: The custom path you specified for the encryption key at install time|
|**Customization**|   |
|Theme Magic customizations|Files on disk: `INSTALL_DIR/templates/purity_iii`|
|Stylesheets (CSS and LESS)|Files on disk: `INSTALL_DIR/templates/purity_iii/`|
|Company logo|RDBMS: `#_menu`<br>Files on disk: `INSTALL_DIR/components/com_apiportal/assets/img/menu/`|
|Menu entries and order|RDBMS:<ul><li>`#_menu`</li><li>`#_menu_types`</li></ul>|
|Changes in the PHP code|Files on disk: `INSTALL_DIR/components/com_apiportal/views/`|
|ReCaptcha plug-in|RDBMS: `#_extensions`|
|**Localization**|   |
|Installed languages|RDBMS: `#_extensions`<br>Files on disk:<ul><li>`INSTALL_DIR/language`</li><li>`INSTALL_DIR/administrator/language`</li><li>`INSTALL_DIR/administrator/manifests/packages`</li></ul>|
|Language content|RDBMS:<ul><li>`#_menu`</li><li>`#_content`</li><li>`#_categories`</li></ul>|
|**Articles and posts**|   |
|Joomla! articles|RDBMS:<ul><li>`#_content`</li><li>`#_content_frontpage`</li><li>`#_content_rating`</li>`#_content_types`<li>`#_content_item_tag_map`</li></ul>|
|Attachments uploaded to Joomla! content|Files on disk: `INSTALL_DIR/images`|
|Joomla! categories|RDBMS: `#_categories`|
|EasyBlog and EasyDiscuss settings and posts|RDBMS:<br>Settings and Posts<ul><li>`#_easyblog_configs`</li><li>`#_discuss_configs`</li></ul>|
|EasyBlog and EasyDiscuss attachments|RDBMS:<br><ul><li>`#_easyblog_configs`</li><li>`#_discuss_configs`</li></ul><br>Files on disk:<ul><li>`INSTALL_DIR/images/easyblog_*`</li><li>`INSTALL_DIR/media/com_easydiscuss`|

### Recommended API Portal data replication

API Portal data between API Portal instances or datacenters is replicated either automatically or manually.

Data can be replicated automatically using the following:

- **RDBMS cluster**: The configured database cluster replicates data between all database nodes in the cluster. For a technical example, see this article about [database cluster setup](https://support.axway.com/en/articles/article-details/id/180417) on Axway Support.
- **Shared file system solution**: A shared storage solution, like a cluster or shared network file system, synchronizes data across all instances. For a technical example, see this article about [shared file system](https://support.axway.com/en/articles/article-details/id/180405) on Axway Support.

In the manual, or static data replication, you must use a promotion tool to promote data from one API Portal instance to another. For details, see this article about the [promotion tool](https://support.axway.com/en/articles/article-details/id/180277) on Axway Support.

It is recommended to use automatic data replication whenever possible, and to configure RDBMS cluster for the databases and shared file system.

The replication options depend on the data type and where it is stored, as shown in the following table:

|Data type|Replication between datacenters|
|---------|----------------|
|**System**|   |
|API Manager settings (IP, cert)|Automatic, RDBMS cluster.|
|Logs|Not applicable (local file-based data only).|
|**Customization**|   |
|Theme Magic changes, stylesheets, company logo, changes in the PHP code.|Automatic (shared file system and RDBMS cluster) or static process (deployment process).|
|Menu entries and order, reCaptcha plug-in.|Automatic (RDBMS cluster) or static process (deployment process).|
|**Localization**|   |
|Languages Installed|Automatic (shared file system and RDBMS cluster) or static process (deployment process).|
|Languages Content|Automatic (RDBMS cluster) or static process (deployment process).|
|**Articles and posts**|   |
|Joomla! articles and categories, EasyBlog and EasyDiscussions settings and posts.|Automatic, RDBMS cluster.|
|Attachments uploaded to articles, blog posts, or discussion forum.|Automatic, shared file system.|
