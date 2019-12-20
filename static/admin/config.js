/**
 * Docs page collections require the following minimal dataset:
 *   name: [string] used in routes, ie.: /admin/collections/:slug/edit
 *   label: [string] used in CMS UI left nav
 *   label_singular: [string] used in CMS UI, ie.: 'New Post'
 *   description: [string] used in CMS UI
 *   folder: [string] path to folder where documents are stored
 */
const docsPageDefaults = {
  create: true, // Allow users to create new documents in this collection
  delete: false, // Allow users to delete documents in this collection
  format: 'json-frontmatter', // Specify frontmatter for YAML or json-frontmatter for JSON
  fields: [
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'linkTitle', widget: 'hidden', required: false },
    { name: 'no_list', widget: 'hidden', required: false },
    { name: 'weight', widget: 'hidden', required: false },
    { name: 'date', widget: 'hidden', required: false },
    { name: 'description', label: 'Summary', widget: 'text' },
    { name: 'body', label: 'Body', widget: 'markdown' },
  ],
}

/**
 * Post collections require the same minimal dataset as docs pages.
 */
const postDefaults = {
  create: true,
  delete: false,
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Author', name: 'author', widget: 'string' },
    { label: 'Publish Date', name: 'date', widget: 'datetime' },
    { label: 'Summary', name: 'description', widget: 'text' },
    { label: 'Image', name: 'image', widget: 'image', required: false },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
}

/**
 * Add new collections here.
 */
const collections = [{
  ...docsPageDefaults,
  name: 'apimgr_concepts',
  label: 'API management concepts',
  label_singular: 'page in APIM concepts section',
  description: 'All pages relating to API management concepts',
  folder: 'content/en/docs/apimgr_concepts',
}, {
  ...docsPageDefaults,
  name: 'apigtw_install',
  label: 'Install API Gateway',
  label_singular: 'page in APIG install section',
  description: 'All pages relating to installing API Gateway and API Manager.',
  folder: 'content/en/docs/apim_installation/apigtw_install',
}, {
  ...docsPageDefaults,
  name: 'apiportal_install',
  label: 'Install or upgrade API Portal',
  label_singular: 'page in APIP install section',
  description: 'All pages relating to installing or upgrading API Portal.',
  folder: 'content/en/docs/apim_installation/apiportal_install',
}, {
  ...docsPageDefaults,
  name: 'apigw_containers',
  label: 'Deploy API Gateway in containers',
  label_singular: 'page in APIG containers section',
  description: 'All pages relating to deploying API Gateway and API Manager in Docker containers.',
  folder: 'content/en/docs/apim_installation/apigw_containers',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apiportal_docker',
  label: 'Deploy API Portal in containers',
  label_singular: 'page in APIP containers section',
  description: 'All pages relating to deploying API Portal in containers.',
  folder: 'content/en/docs/apim_installation/apiportal_docker',
}, {
  ...docsPageDefaults,
  name: 'apigw_upgrade',
  label: 'Upgrade API Gateway',
  label_singular: 'page in APIG upgrade section',
  description: 'All pages relating to upgrading API Gateway.',
  folder: 'content/en/docs/apim_installation/apigw_upgrade',
}, {
  ...docsPageDefaults,
  name: 'apimgmt_multi_dc',
  label: 'Configure API Manager in multi-DC',
  label_singular: 'page in APIM multi-DC section',
  description: 'All pages relating to configuring API Manager in multi-DC.',
  folder: 'content/en/docs/apimgmt_multi_dc',
}, {
  ...docsPageDefaults,
  name: 'apiportal_ha',
  label: 'Configure API Portal for HA',
  label_singular: 'page in APIP HA section',
  description: 'All pages relating to configuring API Portal for HA.',
  folder: 'content/en/docs/apiportal_ha',
}, {
  ...docsPageDefaults,
  name: 'apigtw_devops',
  label: 'Deploy to production',
  label_singular: 'page in APIG deploy section',
  description: 'All pages relating to deploying API Gateway configuration.',
  folder: 'content/en/docs/apigtw_devops',
}, {
  ...docsPageDefaults,
  name: 'apimanager_capacityguide',
  label: 'Capacity planning and performance',
  label_singular: 'page in APIM CPG section',
  description: 'All pages relating to capacity planning and performance tests.',
  folder: 'content/en/docs/apimanager_capacityguide',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apimgmt_security',
  label: 'Security guidance',
  label_singular: 'page in APIM security section',
  description: 'All pages relating to security guidance for API Gateway, API Manager, and API Portal.',
  folder: 'content/en/docs/apimgmt_security',
}, {
  ...docsPageDefaults,
  name: 'apigtw_admin',
  label: 'Administer API Gateway',
  label_singular: 'page in APIG admin section',
  description: 'All pages relating to administering API Gateway.',
  folder: 'content/en/docs/apim_administration/apigtw_admin',
}, {
  ...docsPageDefaults,
  name: 'apimgr_admin',
  label: 'Administer API Manager',
  label_singular: 'page in APIM admin section',
  description: 'All pages relating to administering API Manager.',
  folder: 'content/en/docs/apim_administration/apimgr_admin',
}, {
  ...docsPageDefaults,
  name: 'apimgr_admin_sso',
  label: 'Administer API Manager (SSO)',
  label_singular: 'page in APIM SSO section',
  description: 'All pages relating to administering API Manager SSO.',
  folder: 'content/en/docs/apim_administration/apimgr_admin/sso',
}, {
  ...docsPageDefaults,
  name: 'apiportal_admin',
  label: 'Administer API Portal',
  label_singular: 'page in APIP admin section',
  description: 'All pages relating to administering API Portal.',
  folder: 'content/en/docs/apim_administration/apiportal_admin',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apiportal_admin_sso',
  label: 'Administer API Portal (SSO)',
  label_singular: 'page in APIP SSO section',
  description: 'All pages relating to administering API Portal SSO.',
  folder: 'content/en/docs/apim_administration/apiportal_admin/sso',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'cass_admin',
  label: 'Administer Apache Cassandra',
  label_singular: 'page in Cassadra admin section',
  description: 'All pages relating to administering Apache Cassandra for API Gateway and API Manager.',
  folder: 'content/en/docs/cass_admin',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apigw_poldev',
  label: 'Develop policies',
  label_singular: 'page in policy dev section',
  description: 'All pages relating to developing policies in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_poldev',
}, {
  ...docsPageDefaults,
  name: 'apigw_poldev_external_connections',
  label: 'Develop policies (external connections)',
  label_singular: 'page in policy dev (ext conn) section',
  description: 'All pages relating to configuring external connections in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_poldev/external_connections',
}, {
  ...docsPageDefaults,
  name: 'apigw_poldev_gw_instances',
  label: 'Develop policies (instances and listeners)',
  label_singular: 'page in policy dev (inst and listeners) section',
  description: 'All pages relating to configuring API Gateway instances and listeners in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_poldev/gw_instances',
}, {
  ...docsPageDefaults,
  name: 'apigw_poldev_web_services',
  label: 'Develop policies (web services)',
  label_singular: 'page in policy dev (web svcs) section',
  description: 'All pages relating to registering and securing web services in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_poldev/web_services',
}, {
  ...docsPageDefaults,
  name: 'apigw_oauth',
  label: 'Configure OAuth',
  label_singular: 'page in OAuth config section',
  description: 'All pages relating to configuring OAuth in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_oauth',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apigw_oauth_oauth_flows',
  label: 'Configure OAuth (flows)',
  label_singular: 'page in OAuth config (flows) section',
  description: 'All pages relating to OAuth authentication flows.',
  folder: 'content/en/docs/apim_policydev/apigw_oauth/oauth_flows',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apigw_polref',
  label: 'Policy filter reference',
  label_singular: 'page in pol filter ref section',
  description: 'All pages relating to filters in Policy Studio.',
  folder: 'content/en/docs/apim_policydev/apigw_polref',
}, {
  ...docsPageDefaults,
  name: 'apigtw_kerberos',
  label: 'Integrate with Kerberos',
  label_singular: 'page in Kerberos section',
  description: 'All pages relating to integrating with Kerberos.',
  folder: 'content/en/docs/apigtw_kerberos',
}, {
  ...docsPageDefaults,
  name: 'apimanager_analytics',
  label: 'Configure API Gateway Analytics',
  label_singular: 'page in APIG analytics section',
  description: 'All pages relating to configuring and using API Gateway Analytics.',
  folder: 'content/en/docs/apimanager_analytics',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'apigtw_devguide',
  label: 'Extend API Gateway',
  label_singular: 'page in APIG extend section',
  description: 'All pages relating to extending and customizing API Gateway.',
  folder: 'content/en/docs/apigtw_devguide',
}, {
  ...docsPageDefaults,
  name: 'apim_reference',
  label: 'Reference',
  label_singular: 'page in APIM ref section',
  description: 'All reference pages for API Gateway and API Manager.',
  folder: 'content/en/docs/apim_reference',
}, {
  ...docsPageDefaults,
  name: 'glossary',
  label: 'Glossary',
  label_singular: 'page in glossary section',
  description: 'Glossary for API Management and AMPLIFY Central.',
  folder: 'content/en/docs/glossary',
}, {
  ...docsPageDefaults,
  name: '20200130_apimgr_relnotes',
  label: 'API Gateway and API Manager release notes',
  label_singular: 'page in API Gateway/Manager RN section',
  description: 'All pages relating to API Gateway and API Manager release.',
  folder: 'content/en/docs/apim_relnotes/20200130_apimgr_relnotes',
}, {
  ...docsPageDefaults,
  name: '20200130_apip_relnotes',
  label: 'API Portal release notes',
  label_singular: 'page in API Portal RN section',
  description: 'All pages relating to API Portal release.',
  folder: 'content/en/docs/apim_relnotes/20200130_apip_relnotes',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'central',
  label: 'AMPLIFY Central documentation',
  label_singular: 'page in AMPLIFY Central section',
  description: 'All pages relating to AMPLIFY Central.',
  folder: 'content/en/docs/central',
  format: 'frontmatter',
}, {
  ...docsPageDefaults,
  name: 'contribution_guidelines',
  label: 'Contribution guidelines',
  description: 'All pages relating to contributing to the documentation.',
  folder: 'content/en/docs/contribution_guidelines',
  create: false,
  format: 'frontmatter',
}, {
  ...postDefaults,
  name: 'news',
  label: 'News posts',
  label_singular: 'News post',
  description: 'All news posts.',
  folder: 'content/en/blog/news',
}, {
  ...postDefaults,
  name: 'releases',
  label: 'Release posts',
  label_singular: 'Release post',
  description: 'All product release posts.',
  folder: 'content/en/blog/releases',
}, {
  ...postDefaults,
  name: 'friends',
  label: 'Friends posts',
  label_singular: 'Friends post',
  description: 'All friends of the doc posts.',
  folder: 'content/en/blog/friends',
}];

const config = {
  backend: {
    name: 'github',
    repo: 'Axway/axway-open-docs', //Path to your GitHub repository. For fork testing use alexearnshaw/axway-open-docs.
    open_authoring: true,
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'static/Images/uploads', // Media files will be stored in the repo under static/Images/uploads
  public_folder: '/Images/uploads', // The src attribute for uploaded media will begin with /Images/uploads
  site_url: 'https://axway-open-docs.netlify.com/', // for fork testing use https://fork-axway-open-docs.netlify.com/
  collections,
};

// Make the config object available on the global scope for processing by
// subsequent scripts.Don't rename this to `CMS_CONFIG` - it will cause the
// config to be loaded without proper processing.
window.CMS_CONFIGURATION = config;

CMS.init({ config })
