---
title: Kafka Publisher
description: Learn how to configure a topic associated to a Kafka Publisher
---
> {{< alert title="Warning" color="warning" >}}Kafka publisher is still experimental and will be enhanced in future releases.{{< /alert >}}

Streams can act as a consumer of your dedicated Apache Kafka cluster.

It consumes records from one configured topic and then publishes those records into Streams platform in order to broadcast data to subscribers if a change is detected between two records.

# Kafka publisher configuration

Configuring an Apache Kafka publisher requires some specific configuration. Configuration is inspired from the official Kafka consumer API.

| Configuration Entry | Mandatory | Possible value             | Default value | Description                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | --------- | -------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bootstrapServers    | yes       | list with comma seperator  | n/a           | A list of brokers host/port pair to establish connection to your Kafka cluster                                                                                                                                                                                                                                                                                                   |
| topic               | yes       | a string value             | n/a           | Name of the Kafka topic where to fetch records from                                                                                                                                                                                                                                                                                                                              |
| keyValue            | no        | a string value             |               | Enable filtering on records key value (simple equality is performed).                                                                                                                                                                                                                                                                                                            |
| keyDeserializer     | no        | string                     | string        | Deserializer used for record key. Currently only *'string'* is supported                                                                                                                                                                                                                                                                                                         |
| valueDeserializers  | no        | json or smile              | json          | Deserializer used for record value. Supported deserializers are '*json*' and '*smile*'. This means your Kafka topic must contains JSON strings or data encoded into data format  "binary JSON". Specification could be found : <https://github.com/FasterXML/smile-format-specification>.                                                                                        |
| readFrom            | no        | earliest or latest or none | latest        | What to do when there is no initial offset in Kafka or if the current offset does not exist any more on the server. <ul><li>earliest: automatically reset the offset to the earliest offset</li><li>latest: automatically reset the offset to the latest offset </li><li>none: throw exception to the consumer if no previous offset is found for the consumer's group</li></ul> |
| consumerProperties  | no        | map                        |               | A map of consumer properties as mentioned in the Kafka consumer API official documentation. <https://kafka.apache.org/documentation/#consumerconfigs>  # Be aware that changing this can alter the way the publisher behaves. Please get in touch with the support team before you do.                                                                                           |

```json
{
    "name": "myStreamsTopic",
    "publisher": {
        "type": "kafka",
        "config": {
            "bootstrapServers": "streams-kafka:9092",
            "topic": "kafka-topic",
            "keyValue": "A",
            "consumerProperties": {
                "max.partition.fetch.bytes": 2048
            }
 
        }
    }
}
```

## AutoCommit and GroupId

Our Kafka publisher acts as a consumer of your Kafka topics. Based on that, you should be aware there are important Kafka consumer properties that are configured for you by default :

* *ENABLE_AUTO_COMMIT* is set to **false**. Records received by the Kafka publisher are not committed before being delivered in the Streams platform.
* *GROUP_ID* is set to the id of the streams topic. It allows to have 1 consumer in the consumer group, to make sure the original order is kept.

Please note that we don't recommend to override these values in the *consumerProperties* configuration of the publisher. It could lead to unexpected behaviors.



## Limitations

A Kafka publisher configuration cannot be (yet) updated once the streams topic is created. If you try to patch the configuration of a Kafka publisher, you will receive the following error:

```json
{
    "errors": [
        {
            "status": 400,
            "title": "Validation error: Publisher config",
            "detail": "Configuration update on Kafka publisher is not yet supported",
            "meta": {},
            "source": {
                "parameter": "config"
            }
        }
    ]
}
```

If you would like to change your Kafka publisher configuration, we suggest to delete the previously created streams topic and create a new streams topic configured with the right configuration for your Kafka publisher.