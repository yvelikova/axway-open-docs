---
title: Performance test results
linkTitle: Performance test results
date: 2019-09-26
description: This section presents the test results for all API Management configurations.
weight: "6"
---

## Test results terminology

This section defines common terms used in the performance test results:

| Metric                          | Definition                                                                             |
|---------------------------------|----------------------------------------------------------------------------------------|
| Average transactions per second (TPS)                            | The average number of transactions completed per second over the duration of the test. |
| Average latency @ 95%           | The average time for each transaction sampled at the 95th percentile.                  |
| Average CPU                  (%)                              | The average CPU usage of the API Gateway host over the duration of the test.           |
| Average memory                (%)                              | The average memory footprint of the API Gateway process over the duration of the test. |
| Network Read/Write (Mb/s)       | The average transfer speed for received (read) and sent (write) data.                  |
| Disk IO (%)                     | The average disk utilization over the duration of the test.                            |
| Threads                         | The number of threads the traffic generator ran for each test.                         |

## Test results for single node configuration

This section presents the performance test results of all single node scenarios both with and without monitoring.

In the following table, the test cases appear in the format `Product_TestScenario_MessageSize_SSL_TrafficMonitoring_RealTimeMonitoring`.

For example, the test case `API_Gateway_Benchmark_HTTPBasic_100KB_SSL_noTrafMon_noRTM` has the following characteristics:

* Product: API Gateway
* Test scenario: HTTP Basic authentication
* Message size: 100KB
* SSL: Enabled
* Traffic monitoring: Disabled
* Real-time monitoring: Disabled

Similarly, the test case `API_Manager_PassThrough_Post_100KB_SSL_TrafMon_RTM` has the following characteristics:

* Product: API Manager
* Test scenario: Pass through POST
* Message size: 100KB
* SSL: Enabled
* Traffic monitoring: Enabled
* Real-time monitoring: Enabled

| Test case                                                                 | Average transactions per second (TPS) | Average latency @ 95% | Average CPU (%) | Average memory (%) | Network read (Mb/s) | Network write (Mb/s) | Disk IO (%) | Threads |
|---------------------------------------------------------------------------|---------------------------------------|-----------------------|-----------------|--------------------|---------------------|----------------------|-------------|---------|
| `API_Gateway_Benchmark_HTTPBasic_100KB_SSL_noTrafMon_noRTM`               | 2427                                  | 67                    | 64              | 31                 | 2418                | 2405                 | 0           | 60      |
| `API_Gateway_Benchmark_HTTPBasic_100KB_SSL_TrafMon_RTM`                   | 756                                   | 612                   | 44              | 38                 | 750                 | 746                  | 93          | 60      |
| `API_Gateway_Benchmark_HTTPBasic_1KB_SSL_noTrafMon_noRTM`                 | 10496                                 | 9                     | 96              | 29                 | 318                 | 323                  | 0           | 60      |
| `API_Gateway_Benchmark_HTTPBasic_1KB_SSL_TrafMon_RTM`                     | 6952                                  | 20                    | 90              | 39                 | 206                 | 204                  | 13          | 60      |
| `API_Gateway_Benchmark_HTTPBasic_50KB_SSL_noTrafMon_noRTM`                | 4687                                  | 32                    | 86              | 30                 | 2438                | 2423                 | 0           | 60      |
| `API_Gateway_Benchmark_HTTPBasic_50KB_SSL_TrafMon_RTM`                    | 1647                                  | 56                    | 53              | 41                 | 829                 | 824                  | 95          | 60      |
| `API_Gateway_Benchmark_PassThrough_100KB_SSL_noTrafMon_noRTM`             | 2380                                  | 68                    | 64              | 31                 | 2421                | 2408                 | 0           | 60      |
| `API_Gateway_Benchmark_PassThrough_100KB_SSL_TrafMon_RTM`                 | 793                                   | 570                   | 43              | 37                 | 750                 | 745                  | 93          | 60      |
| `API_Gateway_Benchmark_PassThrough_1KB_SSL_noTrafMon_noRTM`               | 10917                                 | 8                     | 96              | 28                 | 325                 | 332                  | 0           | 60      |
| `API_Gateway_Benchmark_PassThrough_1KB_SSL_TrafMon_RTM`                   | 7197                                  | 19                    | 89              | 38                 | 209                 | 210                  | 14          | 60      |
| `API_Gateway_Benchmark_PassThrough_50KB_SSL_noTrafMon_noRTM`              | 4710                                  | 33                    | 85              | 29                 | 2446                | 2432                 | 0           | 60      |
| `API_Gateway_Benchmark_PassThrough_50KB_SSL_TrafMon_RTM`                  | 1561                                  | 57                    | 53              | 41                 | 822                 | 818                  | 95          | 60      |
| `API_Gateway_Benchmark_Reflect_100KB_SSL_noTrafMon_noRTM`                 | 1434                                  | 141                   | 48              | 30                 | 1431                | 1442                 | 0           | 60      |
| `API_Gateway_Benchmark_Reflect_100KB_SSL_TrafMon_RTM`                     | 780                                   | 460                   | 48              | 30                 | 768                 | 773                  | 95          | 60      |
| `API_Gateway_Benchmark_Reflect_1KB_SSL_noTrafMon_noRTM`                   | 18151                                 | 5                     | 95              | 27                 | 287                 | 297                  | 0           | 60      |
| `API_Gateway_Benchmark_Reflect_1KB_SSL_TrafMon_RTM`                       | 12009                                 | 15                    | 88              | 39                 | 183                 | 189                  | 11          | 60      |
| `API_Gateway_Benchmark_Reflect_50KB_SSL_noTrafMon_noRTM`                  | 2950                                  | 80                    | 57              | 29                 | 1480                | 1490                 | 0           | 60      |
| `API_Gateway_Benchmark_Reflect_50KB_SSL_TrafMon_RTM`                      | 1601                                  | 89                    | 55              | 37                 | 833                 | 839                  | 95          | 60      |
| `API_Gateway_Benchmark_SchemaValidation_100KB_SSL_noTrafMon_noRTM`        | 585                                   | 299                   | 21              | 33                 | 364                 | 12                   | 0           | 60      |
| `API_Gateway_Benchmark_SchemaValidation_100KB_SSL_TrafMon_RTM`            | 438                                   | 307                   | 28              | 34                 | 357                 | 11                   | 8           | 60      |
| `API_Gateway_Benchmark_SchemaValidation_1KB_SSL_noTrafMon_noRTM`          | 464                                   | 290                   | 19              | 33                 | 11                  | 11                   | 0           | 60      |
| `API_Gateway_Benchmark_SchemaValidation_1KB_SSL_TrafMon_RTM`              | 448                                   | 297                   | 22              | 34                 | 11                  | 10                   | 0           | 60      |
| `API_Gateway_Benchmark_SchemaValidation_50KB_SSL_noTrafMon_noRTM`         | 460                                   | 294                   | 21              | 33                 | 189                 | 11                   | 0           | 60      |
| `API_Gateway_Benchmark_SchemaValidation_50KB_SSL_TrafMon_RTM`             | 439                                   | 305                   | 25              | 34                 | 182                 | 11                   | 1           | 60      |
| `API_Gateway_Benchmark_WSDL_100KB_SSL_noTrafMon_noRTM`                    | 169                                   | 725                   | 96              | 35                 | 130                 | 126                  | 0           | 60      |
| `API_Gateway_Benchmark_WSDL_100KB_SSL_TrafMon_RTM`                        | 161                                   | 747                   | 96              | 37                 | 125                 | 121                  | 3           | 60      |
| `API_Gateway_Benchmark_WSDL_1KB_SSL_noTrafMon_noRTM`                      | 4347                                  | 39                    | 82              | 35                 | 113                 | 116                  | 0           | 60      |
| `API_Gateway_Benchmark_WSDL_1KB_SSL_TrafMon_RTM`                          | 3443                                  | 59                    | 86              | 39                 | 90                  | 92                   | 5           | 60      |
| `API_Gateway_Benchmark_WSDL_50KB_SSL_noTrafMon_noRTM`                     | 327                                   | 437                   | 96              | 35                 | 129                 | 126                  | 0           | 60      |
| `API_Gateway_Benchmark_WSDL_50KB_SSL_TrafMon_RTM`                         | 313                                   | 456                   | 96              | 36                 | 123                 | 121                  | 3           | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_100KB_SSL_noTrafMon_noRTM`  | 512                                   | 202                   | 97              | 31                 | 457                 | 622                  | 0           | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_100KB_SSL_TrafMon_RTM`      | 467                                   | 260                   | 94              | 51                 | 396                 | 538                  | 30          | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_1KB_SSL_noTrafMon_noRTM`    | 4009                                  | 25                    | 96              | 25                 | 126                 | 247                  | 0           | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_1KB_SSL_TrafMon_RTM`        | 3323                                  | 46                    | 94              | 44                 | 104                 | 196                  | 10          | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_50KB_SSL_noTrafMon_noRTM`   | 852                                   | 114                   | 97              | 30                 | 426                 | 588                  | 0           | 60      |
| `API_Gateway_Benchmark_WSS10_Validate_Encrypt_50KB_SSL_TrafMon_RTM`       | 771                                   | 159                   | 95              | 51                 | 368                 | 506                  | 28          | 60      |
| `API_Gateway_Benchmark_XSLT_100KB_SSL_noTrafMon_noRTM`                    | 209                                   | 625                   | 95              | 34                 | 213                 | 171                  | 0           | 60      |
| `API_Gateway_Benchmark_XSLT_100KB_SSL_TrafMon_RTM`                        | 285                                   | 614                   | 95              | 39                 | 205                 | 165                  | 7           | 60      |
| `API_Gateway_Benchmark_XSLT_1KB_SSL_noTrafMon_noRTM`                      | 6570                                  | 14                    | 96              | 33                 | 198                 | 165                  | 0           | 60      |
| `API_Gateway_Benchmark_XSLT_1KB_SSL_TrafMon_RTM`                          | 5033                                  | 30                    | 92              | 38                 | 150                 | 121                  | 9           | 60      |
| `API_Gateway_Benchmark_XSLT_50KB_SSL_noTrafMon_noRTM`                     | 409                                   | 353                   | 95              | 34                 | 212                 | 170                  | 0           | 60      |
| `API_Gateway_Benchmark_XSLT_50KB_SSL_TrafMon_RTM`                         | 471                                   | 365                   | 95              | 38                 | 204                 | 164                  | 7           | 60      |
| `API_Gateway_OAuth_TokenValidation_ClientCredentials_SSL_noTrafMon_noRTM` | 4411                                  | 20                    | 89              | 37                 | 67                  | 72                   | 0           | 60      |
| `API_Gateway_OAuth_TokenValidation_ClientCredentials_SSL_TrafMon_RTM`     | 3475                                  | 25                    | 88              | 41                 | 53                  | 58                   | 1           | 60      |
| `API_Gateway_OAuth_TokenValidation_JWT_SSL_noTrafMon_noRTM`               | 4327                                  | 20                    | 89              | 37                 | 66                  | 71                   | 0           | 60      |
| `API_Gateway_OAuth_TokenValidation_JWT_SSL_TrafMon_RTM`                   | 3411                                  | 25                    | 88              | 41                 | 53                  | 57                   | 1           | 60      |
| `API_Gateway_OAuth_TokenValidation_ResourceOwner_SSL_noTrafMon_noRTM`     | 4214                                  | 21                    | 89              | 38                 | 64                  | 69                   | 0           | 60      |
| `API_Gateway_OAuth_TokenValidation_ResourceOwner_SSL_TrafMon_RTM`         | 3351                                  | 26                    | 88              | 41                 | 51                  | 56                   | 1           | 60      |
| `API_Manager_APIKEY_Bulk_SSL_noTrafMon_noRTM`                             | 32                                    | 669                   | 12              | 35                 | 16                  | 599                  | 0           | 1       |
| `API_Manager_APIKEY_Bulk_SSL_TrafMon_RTM`                                 | 21                                    | 1078                  | 22              | 35                 | 16                  | 453                  | 49          | 1       |
| `API_Manager_APIKEY_Post_100KB_SSL_noTrafMon_noRTM`                       | 2292                                  | 69                    | 71              | 35                 | 2392                | 2380                 | 0           | 60      |
| `API_Manager_APIKEY_Post_100KB_SSL_TrafMon_RTM`                           | 749                                   | 568                   | 47              | 44                 | 760                 | 755                  | 91          | 60      |
| `API_Manager_APIKEY_Post_1KB_SSL_noTrafMon_noRTM`                         | 8218                                  | 10                    | 96              | 31                 | 246                 | 249                  | 0           | 60      |
| `API_Manager_APIKEY_Post_1KB_SSL_TrafMon_RTM`                             | 5016                                  | 30                    | 93              | 42                 | 151                 | 146                  | 11          | 60      |
| `API_Manager_APIKEY_Post_50KB_SSL_noTrafMon_noRTM`                        | 4386                                  | 29                    | 95              | 33                 | 2383                | 2370                 | 0           | 60      |
| `API_Manager_APIKEY_Post_50KB_SSL_TrafMon_RTM`                            | 1491                                  | 64                    | 59              | 49                 | 813                 | 808                  | 95          | 60      |
| `API_Manager_APIKEY_Quota_SSL_noTrafMon_noRTM`                            | 1287                                  | 88                    | 31              | 37                 | 16                  | 19                   | 0           | 60      |
| `API_Manager_APIKEY_Quota_SSL_TrafMon_RTM`                                | 1245                                  | 91                    | 39              | 42                 | 15                  | 18                   | 0           | 60      |
| `API_Manager_APIKEY_SSL_noTrafMon_noRTM`                                  | 9670                                  | 9                     | 96              | 38                 | 157                 | 173                  | 0           | 60      |
| `API_Manager_APIKEY_SSL_TrafMon_RTM`                                      | 5622                                  | 27                    | 94              | 43                 | 86                  | 94                   | 9           | 60      |
| `API_Manager_HTTPBasic_SSL_noTrafMon_noRTM`                               | 1435                                  | 2                     | 15              | 38                 | 24                  | 25                   | 0           | 60      |
| `API_Manager_HTTPBasic_SSL_TrafMon_RTM`                                   | 1436                                  | 4                     | 24              | 42                 | 24                  | 25                   | 0           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_SSL_noTrafMon_noRTM` | 4053                                  | 21                    | 91              | 38                 | 63                  | 67                   | 0           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_SSL_TrafMon_RTM`     | 2967                                  | 31                    | 91              | 42                 | 47                  | 50                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_SSL_noTrafMon_noRTM`               | 4005                                  | 22                    | 90              | 39                 | 62                  | 66                   | 0           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_SSL_TrafMon_RTM`                   | 2961                                  | 30                    | 90              | 42                 | 47                  | 50                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_SSL_noTrafMon_noRTM`     | 4222                                  | 19                    | 91              | 37                 | 66                  | 70                   | 0           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_SSL_TrafMon_RTM`         | 3087                                  | 28                    | 91              | 42                 | 49                  | 52                   | 1           | 60      |
| `API_Manager_PassThrough_Post_100KB_SSL_noTrafMon_noRTM`                  | 2295                                  | 69                    | 71              | 35                 | 2384                | 2372                 | 0           | 60      |
| `API_Manager_PassThrough_Post_100KB_SSL_TrafMon_RTM`                      | 838                                   | 524                   | 49              | 45                 | 794                 | 789                  | 95          | 60      |
| `API_Manager_PassThrough_Post_1KB_SSL_noTrafMon_noRTM`                    | 7984                                  | 11                    | 96              | 31                 | 233                 | 238                  | 0           | 60      |
| `API_Manager_PassThrough_Post_1KB_SSL_TrafMon_RTM`                        | 4866                                  | 32                    | 92              | 43                 | 147                 | 143                  | 10          | 60      |
| `API_Manager_PassThrough_Post_50KB_SSL_noTrafMon_noRTM`                   | 4353                                  | 28                    | 95              | 34                 | 2366                | 2355                 | 0           | 60      |
| `API_Manager_PassThrough_Post_50KB_SSL_TrafMon_RTM`                       | 1478                                  | 64                    | 48              | 47                 | 627                 | 622                  | 78          | 60      |
| `API_Manager_PassThrough_SSL_noTrafMon_noRTM`                             | 9427                                  | 9                     | 96              | 37                 | 149                 | 167                  | 0           | 60      |
| `API_Manager_PassThrough_SSL_TrafMon_RTM`                                 | 5679                                  | 28                    | 94              | 43                 | 86                  | 97                   | 9           | 60      |

## Test results for multi-node HA configurations

This section presents the test results of all multi-node HA scenarios both with local and remote Cassandra.

In the following table, the test cases appear in the format `Product_TestScenario_HighAvailability_NumberOfNodes_SSL_TrafficMonitoring_RealTimeMonitoring`. For multi-node tests, the message size is always 1KB, and it is not specified in the test case.

For example, the test case `API_Manager_APIKEY_HAL_MultiNode_6nodes_SSL_TrafMon_RTM` has the following characteristics:

* Product: API Manager
* Test scenario: API key
* HA: Multi-node HA with local Cassandra
* Number of nodes: 6
* SSL: Enabled
* Traffic monitoring: Enabled
* Real-time monitoring: Enabled

Similarly, the test case `API_Manager_APIKEY_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM` has the following characteristics:

* Product: API Manager
* Test scenario: API key
* HA: Multi-node HA with remote Cassandra
* Number of nodes: 6
* SSL: Enabled
* Traffic monitoring: Enabled
* Real-time monitoring: Enabled

For CPU, memory, network read/write, and disk IO, the results are an average of all nodes for the given number of nodes tested at that time.

| Test case                                                                                        | Average transactions per second (TPS) | Average latency @ 95% | Average CPU (%) | Average memory (%) | Network read (Mb/s) | Network write (Mb/s) | Disk IO (%) | Threads |
|--------------------------------------------------------------------------------------------------|---------------------------------------|-----------------------|-----------------|--------------------|---------------------|----------------------|-------------|---------|
| `API_Manager_APIKEY_HAL_MultiNode_1nodes_SSL_TrafMon_RTM`                                        | 5624                                  | 21                    | 88              | 30                 | 85                  | 94                   | 6           | 60      |
| `API_Manager_APIKEY_HAL_MultiNode_2nodes_SSL_TrafMon_RTM`                                        | 10508                                 | 16                    | 78              | 30                 | 79                  | 88                   | 5           | 60      |
| `API_Manager_APIKEY_HAL_MultiNode_3nodes_SSL_TrafMon_RTM`                                        | 15281                                 | 12                    | 75              | 32                 | 77                  | 85                   | 6           | 60      |
| `API_Manager_APIKEY_HAL_MultiNode_4nodes_SSL_TrafMon_RTM`                                        | 19109                                 | 27                    | 71              | 32                 | 72                  | 80                   | 5           | 120     |
| `API_Manager_APIKEY_HAL_MultiNode_5nodes_SSL_TrafMon_RTM`                                        | 23901                                 | 23                    | 68              | 31                 | 72                  | 80                   | 5           | 120     |
| `API_Manager_APIKEY_HAL_MultiNode_6nodes_SSL_TrafMon_RTM`                                        | 31953                                 | 11                    | 75              | 32                 | 79                  | 88                   | 6           | 120     |
| `API_Manager_APIKEY_MultiNode_RemoteCas_1nodes_SSL_TrafMon_RTM`                                  | 5574                                  | 22                    | 86              | 35                 | 82                  | 92                   | 8           | 60      |
| `API_Manager_APIKEY_MultiNode_RemoteCas_2nodes_SSL_TrafMon_RTM`                                  | 9286                                  | 19                    | 68              | 33                 | 69                  | 77                   | 5           | 60      |
| `API_Manager_APIKEY_MultiNode_RemoteCas_3nodes_SSL_TrafMon_RTM`                                  | 14623                                 | 13                    | 72              | 34                 | 72                  | 81                   | 6           | 60      |
| `API_Manager_APIKEY_MultiNode_RemoteCas_4nodes_SSL_TrafMon_RTM`                                  | 18972                                 | 28                    | 69              | 33                 | 71                  | 79                   | 5           | 120     |
| `API_Manager_APIKEY_MultiNode_RemoteCas_5nodes_SSL_TrafMon_RTM`                                  | 23647                                 | 23                    | 70              | 32                 | 70                  | 78                   | 5           | 120     |
| `API_Manager_APIKEY_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM`                                  | 27861                                 | 19                    | 67              | 35                 | 68                  | 76                   | 5           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_1nodes_SSL_TrafMon_RTM`       | 3028                                  | 32                    | 88              | 36                 | 101                 | 69                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_2nodes_SSL_TrafMon_RTM`       | 5178                                  | 20                    | 82              | 34                 | 100                 | 86                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_3nodes_SSL_TrafMon_RTM`       | 6893                                  | 13                    | 78              | 35                 | 94                  | 97                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_4nodes_SSL_TrafMon_RTM`       | 9271                                  | 24                    | 82              | 35                 | 103                 | 106                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_5nodes_SSL_TrafMon_RTM`       | 11166                                 | 19                    | 82              | 35                 | 110                 | 114                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_HAL_MultiNode_6nodes_SSL_TrafMon_RTM`       | 12218                                 | 15                    | 79              | 34                 | 113                 | 119                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_1nodes_SSL_TrafMon_RTM` | 3291                                  | 30                    | 86              | 36                 | 111                 | 61                   | 2           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_2nodes_SSL_TrafMon_RTM` | 6127                                  | 21                    | 78              | 34                 | 104                 | 58                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_3nodes_SSL_TrafMon_RTM` | 9040                                  | 11                    | 77              | 35                 | 102                 | 57                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_4nodes_SSL_TrafMon_RTM` | 12013                                 | 27                    | 76              | 35                 | 102                 | 56                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_5nodes_SSL_TrafMon_RTM` | 14758                                 | 19                    | 76              | 35                 | 100                 | 55                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ClientCredentials_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM` | 17122                                 | 14                    | 73              | 35                 | 97                  | 54                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_1nodes_SSL_TrafMon_RTM`                     | 3041                                  | 31                    | 89              | 35                 | 122                 | 74                   | 2           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_2nodes_SSL_TrafMon_RTM`                     | 5204                                  | 20                    | 82              | 33                 | 121                 | 98                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_3nodes_SSL_TrafMon_RTM`                     | 6836                                  | 13                    | 78              | 34                 | 112                 | 115                  | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_4nodes_SSL_TrafMon_RTM`                     | 9230                                  | 24                    | 82              | 35                 | 121                 | 126                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_5nodes_SSL_TrafMon_RTM`                     | 11157                                 | 18                    | 82              | 35                 | 130                 | 135                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_HAL_MultiNode_6nodes_SSL_TrafMon_RTM`                     | 12156                                 | 16                    | 78              | 34                 | 135                 | 142                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_1nodes_SSL_TrafMon_RTM`               | 3294                                  | 30                    | 86              | 34                 | 135                 | 61                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_2nodes_SSL_TrafMon_RTM`               | 6204                                  | 20                    | 80              | 33                 | 127                 | 58                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_3nodes_SSL_TrafMon_RTM`               | 8908                                  | 12                    | 77              | 34                 | 122                 | 56                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_4nodes_SSL_TrafMon_RTM`               | 12119                                 | 25                    | 78              | 34                 | 124                 | 57                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_5nodes_SSL_TrafMon_RTM`               | 14688                                 | 19                    | 76              | 33                 | 121                 | 55                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_JWT_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM`               | 17014                                 | 14                    | 73              | 33                 | 117                 | 54                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_1nodes_SSL_TrafMon_RTM`           | 3040                                  | 31                    | 89              | 35                 | 115                 | 71                   | 2           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_2nodes_SSL_TrafMon_RTM`           | 5190                                  | 20                    | 82              | 33                 | 113                 | 93                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_3nodes_SSL_TrafMon_RTM`           | 6756                                  | 14                    | 79              | 35                 | 105                 | 106                  | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_4nodes_SSL_TrafMon_RTM`           | 9229                                  | 24                    | 82              | 35                 | 113                 | 118                  | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_5nodes_SSL_TrafMon_RTM`           | 11097                                 | 19                    | 82              | 35                 | 121                 | 124                  | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_HAL_MultiNode_6nodes_SSL_TrafMon_RTM`           | 12067                                 | 16                    | 79              | 31                 | 125                 | 130                  | 0           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_1nodes_SSL_TrafMon_RTM`     | 3266                                  | 30                    | 86              | 35                 | 125                 | 60                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_2nodes_SSL_TrafMon_RTM`     | 6007                                  | 21                    | 78              | 34                 | 115                 | 56                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_3nodes_SSL_TrafMon_RTM`     | 8867                                  | 12                    | 77              | 34                 | 114                 | 56                   | 1           | 60      |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_4nodes_SSL_TrafMon_RTM`     | 11930                                 | 26                    | 79              | 34                 | 115                 | 56                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_5nodes_SSL_TrafMon_RTM`     | 14663                                 | 18                    | 76              | 34                 | 113                 | 55                   | 1           | 120     |
| `API_Manager_OAuth_TokenValidation_ResourceOwner_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM`     | 16712                                 | 15                    | 72              | 35                 | 107                 | 53                   | 1           | 120     |
| `API_Manager_PassThrough_HAL_MultiNode_1nodes_SSL_TrafMon_RTM`                                   | 6255                                  | 23                    | 89              | 30                 | 94                  | 107                  | 7           | 60      |
| `API_Manager_PassThrough_HAL_MultiNode_2nodes_SSL_TrafMon_RTM`                                   | 11700                                 | 15                    | 83              | 30                 | 88                  | 99                   | 7           | 60      |
| `API_Manager_PassThrough_HAL_MultiNode_3nodes_SSL_TrafMon_RTM`                                   | 17287                                 | 9                     | 82              | 33                 | 86                  | 98                   | 6           | 60      |
| `API_Manager_PassThrough_HAL_MultiNode_4nodes_SSL_TrafMon_RTM`                                   | 22982                                 | 17                    | 82              | 31                 | 86                  | 98                   | 6           | 120     |
| `API_Manager_PassThrough_HAL_MultiNode_5nodes_SSL_TrafMon_RTM`                                   | 28546                                 | 12                    | 81              | 32                 | 86                  | 97                   | 6           | 120     |
| `API_Manager_PassThrough_HAL_MultiNode_6nodes_SSL_TrafMon_RTM`                                   | 32855                                 | 10                    | 77              | 32                 | 82                  | 93                   | 6           | 120     |
| `API_Manager_PassThrough_MultiNode_RemoteCas_1nodes_SSL_TrafMon_RTM`                             | 6090                                  | 24                    | 87              | 34                 | 91                  | 104                  | 10          | 60      |
| `API_Manager_PassThrough_MultiNode_RemoteCas_2nodes_SSL_TrafMon_RTM`                             | 11831                                 | 15                    | 84              | 33                 | 88                  | 100                  | 9           | 60      |
| `API_Manager_PassThrough_MultiNode_RemoteCas_3nodes_SSL_TrafMon_RTM`                             | 17124                                 | 10                    | 82              | 34                 | 85                  | 97                   | 8           | 60      |
| `API_Manager_PassThrough_MultiNode_RemoteCas_4nodes_SSL_TrafMon_RTM`                             | 23058                                 | 17                    | 82              | 33                 | 86                  | 98                   | 8           | 120     |
| `API_Manager_PassThrough_MultiNode_RemoteCas_5nodes_SSL_TrafMon_RTM`                             | 28225                                 | 13                    | 80              | 33                 | 84                  | 96                   | 8           | 120     |
| `API_Manager_PassThrough_MultiNode_RemoteCas_6nodes_SSL_TrafMon_RTM`                             | 33282                                 | 9                     | 78              | 34                 | 83                  | 94                   | 7           | 120     |
