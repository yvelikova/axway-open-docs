---
title: About this guide
linkTitle: About this guide
date: 2019-09-26
description: This guide provides information for capacity planning and outlines performance test results for common SOAP and REST use cases for both API Manager and API Gateway. It describes the systems and settings used in performance testing, introduces the various performance scenarios tested, and tabulates the performance results achieved.
weight: "1"
---

## What does this guide cover

The information in this guide is intended to support your capacity planning for the initial implementation, as well as the ongoing monitoring to help you address your changing capacity requirements. Capacity planning will not provide precise sizing details. Any estimates derived from capacity planning activities must be re-evaluated in your implementation and infrastructure setup, and performing load tests with a representative set of data flows.

Based on the detailed results from a number of performance and load tests, which were executed with various infrastructure and product configurations, this document provides results for specific test cases executed in a defined context. In conjunction with your own requirements, you can extrapolate the test results to arrive at a sizing estimation that meets your needs.

## Who should read this guide

The intended audience for this guide is systems engineers and operators who are interested in the performance of API Manager and API Gateway under different use cases.

## How to use this guide

The following is a brief description of the contents of each topic:

* [Performance test configuration](/docs/apimanager_capacityguide/performance_test_configuration) – Describes the configuration of the systems used in performance testing. These include single node with local Cassandra, multi-node high availability with local Cassandra, and multi-node high availability with remote Cassandra.
* [Performance test settings](/docs/apimanager_capacityguide/performance_test_settings) – Describes the settings used for performance testing. For example, this includes the number of API Manager, API Gateway, and Cassandra instances, and the various security protocols and monitoring settings used.
* [Performance test single node scenarios](/docs/apimanager_capacityguide/performance_test_scenarios_singlenode) – Introduces the single node performance scenarios that were tested. For example, these include pass through, HTTP Basic, API key, OAuth, WSDL virtualization, WSS10 user name token encryption, XSLT conversion, and so on.
* [Performance test multi-node HA scenarios](/docs/apimanager_capacityguide/performance_test_scenarios_multinode) – Introduces the multi-node performance scenarios that were tested.
* [Performance test results](/docs/apimanager_capacityguide/performance_test_results) – Tabulates the single node and multi-node performance results achieved.
