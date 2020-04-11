---
title: Tips, troubleshooting and limitations
description: This section provides troubleshooting, known limitations and
  restrictions that you may encounter while you are working with the connected /
  managed environment for AMPLIFY Central and Axway API Manager. It also
  provides tips you may find useful when working with this environment.
---
{{< alert title="Note" color="primary" >}}The Axway API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Tips

### API summary

In Axway API Manager, you can edit an unpublished API to include an API summary (description) that displays in the API's Catalog Overview once the API is published. If the API summary field is empty when the API is published, then "API From V7 APIManager" is displayed in the Catalog Overview. To update the API summary once the API is published, you must unpublish the API.

## Troubleshooting

<table style="width: 90%; mc-table-style: url('../../../../../Users/lbadenhop/Documents/aws_apigw_agents_docs/en/Content/Resources/TableStyles/SynchTableStyle_noshade.css'); margin-left: auto; margin-right: 0;" class="TableStyle-SynchTableStyle_interop" cellspacing="0">
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" />
            <col class="TableStyle-SynchTableStyle_interop-Column-Column1" />
            <thead>
                <tr class="TableStyle-SynchTableStyle_interop-Head-Header1">
                    <th class="TableStyle-SynchTableStyle_interop-HeadE-Column1-Header1">Question</th>
                    <th class="TableStyle-SynchTableStyle_interop-HeadD-Column1-Header1">Answer</th>
                </tr>
            </thead>
            <tbody>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why can't Discovery Agent connect to Axway API Manager?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Make sure that the Axway API Manager hostname and port are correct. Also Make sure that the connected user has the Axway API Manager Administrator role.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why can't Traceability Agent connect to Axway API Gateway?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Make sure that the Axway API Gateway hostname and port are correct. Also Make sure that the connected user has the Axway API Gateway Operator role.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why can't my agents connect to AMPLIFY Central?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">
                        <p>Go to <em>AMPLIFY&#160;Central UI</em> &gt; <strong>Access</strong> &gt; <strong>Service Accounts</strong> and make sure that the Service Account is correctly named and valid.</p>
                        <p>Make sure that the tenantID and teamID are correct.</p>
                    </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why don't I see traffic in AMPLIFY Central?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Make sure that the Condor URL is accessible from the machine where Traceability Agent is installed.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyB-Column1-Body2">Why isn't my API discovered?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyA-Column1-Body2">Check that the tag set on the frontend API has a correct name and its value is <strong>True</strong>. See <MadCap:xref href="Deploy your environment.htm#APIMANAGER_PROXYTAGSFORPUSH"><span style="color: #0073a5;" class="mcFormatColor"><i>APIMANAGER_DISCOVERYTAGS</i></span></MadCap:xref>.</td>
                </tr>
            </tbody>
        </table>

## Limitations

* Web services or APIs including AWS signing / HTTP Basic / Invoke policy / 2-way SSL security cannot be discovered, as these features are not currently supported in AMPLIFY Central.