---
title: Configure the Edge agent for usage tracking
linkTitle: Configure the Edge agent for usage tracking
weight: 65
date: 2020-02-05
description: Enable usage tracking for on-premise products on a subscription basis with Axway.
---

Usage tracking is how Axway measures the subscription services you use on a monthly basis. Axway measures your usage to make sure it is within the prescribed thresholds specified in your subscription, and to determine whether overages require billing adjustments. For more information, see [About subscription usage tracking](https://docs.axway.com/bundle/subusage_en/page/about_subscription_usage_tracking.html).

If you have an AMPLIFY account, you can log in to the [AMPLIFY Platform](https://platform.axway.com/) and look up for information about your subscriptions and service entitlements. If you do not have an AMPLIFY account, most likely you are using products under licenses, and you do not have any subscriptions. If you are unsure whether usage tracking applies to you, contact your Axway representative or [Axway support](https://support.axway.com/).

The AMPLIFY Edge Agent allows you to set up, report, and monitor usage data for Axway cloud services and on-premises products that you use under subscription agreements.

<!-- 
Ask the product team:
- what data is the input configuration file consuming from your product
- what aggregated data is the agent generating for the product
- can the user use these files as-is or must edit them
-->

## Configure API Gateway to upload usage data to the AMPLIFY Platform

This section describes how to configure API Gateway (in EMT mode) to send the usage report directly to the Edge Agent.

1. Go to [Axway support](https://support.axway.com/) and download the configuration files for API Gateway:

    * file 1: description
    * file 2: description

2. Extract the zip locally.
3. Upload the `<placeholder>.json` file from the package to the `<Edge_Agent_install_dir>/aggregator/usage_tracking/conf/agent/aggregation` directory.
4. Upload the `<placeholder>.json` file from the package to the `<Edge_Agent_install_dir>/conf/agent/report` directory.
5. Edit the `report configuration` file, and add the environment ID associated with your organization on the AMPLIFY Platform.
6. Restart the Edge Agent.

<!-- is the the Lumberjack content in the generic doc is sufficient for your product? https://docs.axway.com/bundle/subusage_en/page/secure_the_connection_with_the_agent.html
-- >

<!-- If your product uses QLT, You will have to get the specifics from your team about how to set up communication with the agent over QLT -->

## Review subscriptions and usages on the platform

Once you have completed all configuration tasks and have enabled uploads of usage reports, you can log in to the [AMPLIFY Platform](https://platform.axway.com/) and access and review your subscriptions and usage data. For more information, see [Review subscriptions and usages on the platform](https://docs.axway.com/bundle/subusage_en/page/review_subscriptions_and_usages_on_the_platform.html).
