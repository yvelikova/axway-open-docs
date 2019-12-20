const alert = {
  id: 'alert',
  label: 'Alert',
  widget: 'object',
  fields: [
    { name: 'title', label: 'Title' },
    {
      name: 'color',
      label: 'Color',
      widget: 'select',
      options: ['primary', 'info', 'warning', 'danger'],
      default: 'primary',
    },
    { name: 'content', label: 'Content', widget: 'markdown' },
  ],
  fromBlock: match =>
    match && {
      title: match[1],
      color: match[2],
      content: match[3],
    },
  toBlock: ({ title = '', color = '', content = '' }) => (
    `{{< alert title="${title}" color="${color}" >}}${content}{{< /alert >}}`
  ),
  // eslint-disable-next-line react/display-name
  toPreview: ({ title = '', color = '', content = '' }) => (
    <div className={`alert alert-${color}`} role="alert">
      <h4 className="alert-heading">{title}</h4>
      {content}
    </div>
  ),
  pattern: /^{{< alert title="(.*)" color="(.*)" >}}([\s\S]*){{< \/alert >}}$/,
};

CMS.registerEditorComponent(alert);
