---
title: Tips and Troubleshooting
description: This section provides troubleshooting, known limitations and
  restrictions that you may encounter while you are working with the connected /
  managed environment for AWS API Gateway within AMPLIFY Central. It also
  provides tips you may find useful when working with this environment.
---
{{< alert title="Note" color="primary" >}}The AWS API Gateway connectivity to AMPLIFY Central is currently available in an alpha review mode; current functionality and configuration may change before release.   Therefore, this connectivity is available for trial use only and is not supported for production API management or connectivity.{{< /alert >}}

## Troubleshooting


<table style="width: 90%; mc-table-style: url('../Resources/TableStyles/SynchTableStyle_noshade.css'); margin-left: auto; margin-right: 0;" class="TableStyle-SynchTableStyle_interop" cellspacing="0">
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
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why isn't my API discovered?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2"> Check that the tag set on the stage has a correct name and value based on the AWS_FILTER variable. See <MadCap:xref href="Deploy your environment.htm#AWS_FILTER"><span style="color: #0073a5;" class="mcFormatColor"><i>AWS_FILTER</i>.</td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2"> Why can't my agents connect to AWS API Gateway?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">Go to <em>AWS console / IAM service</em> and make sure that AWS_REGION, AWS_AUTH_ACCESSKEY and AWS_AUTH_SECRETKEY are valid and not inactivated. </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyE-Column1-Body2">Why can't my agents connect to AMPLIFY Central?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyD-Column1-Body2">
                        <p>Go to <em>AMPLIFY&#160;Central UI</em> &gt; <strong>Access</strong> &gt; <strong>Service Accounts</strong> and make sure that the Service Account is correctly named and valid.</p>
                        <p>Make sure that the tenantID and teamID are correct.</p>
                    </td>
                </tr>
                <tr class="TableStyle-SynchTableStyle_interop-Body-Body2">
                    <td class="TableStyle-SynchTableStyle_interop-BodyB-Column1-Body2">Why don't I see traffic in AMPLIFY Central?</td>
                    <td class="TableStyle-SynchTableStyle_interop-BodyA-Column1-Body2">Make sure that the Condor URL is accessible from the machine where Traceability Agent is installed.</td>
                </tr>
            </tbody>
        </table>