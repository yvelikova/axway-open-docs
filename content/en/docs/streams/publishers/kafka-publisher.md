---
title: Kafka Publisher
description: Learn how to configure a topic associated to a Kafka Publisher
---
{{< alert title="Warning" color="warning" >}}Kafka publisher is still experimental and will be enhanced in future releases.{{< /alert >}}

Streams can act as a consumer of your dedicated Apache Kafka cluster.

It consumes records from one configured topic and then publishes those records into Streams platform in order to broadcast data to subscribers if a change is detected between two records.



# Kafka publisher configuration

Configuring an Apache Kafka publisher requires some specific configuration. Configuration is inspired from the official Kafka consumer API.