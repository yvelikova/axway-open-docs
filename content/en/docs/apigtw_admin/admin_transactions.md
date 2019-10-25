{
"title": "Introduction to transactions and legs",
"linkTitle": "Introduction to transactions and legs",
"weight":"8",
"date": "2019-10-14",
"description": "Learn more about inbound and outbound transactions and legs when a message transaction flows from a client to a back-end via an API Gateway. "
}

This topic explains inbound and outbound transactions and legs in the context of how a typical message transaction flows from a client to a back-end via an API Gateway.

The following diagram shows a typical transaction flow through an API Gateway.

![API Gateway transaction logging](/Images/APIGateway/transaction_arch_1.png)

* An inbound transaction is one coming from a client or a back-end that is incoming to the API Gateway (received by the API Gateway).
* An outbound transaction is one that is outgoing from the API Gateway to a back-end or a client (sent by the API Gateway).
* Leg 0 is always the interaction between the client and the API Gateway.
* Leg 1 (and subsequent legs) are the interactions between API Gateway and the back-ends.
* The duration of leg 0 is the overall duration of the entire transaction (as seen by the client).
* The duration of each subsequent leg is the back-end transaction duration.
*The duration value for leg 0 minus the sum of the duration of all subsequent legs gives you the total time spent in the API Gateway for that transaction.

The following diagram shows a typical transaction flow when multiple back-ends are involved.

![API Gateway transaction logging with multiple back-ends](/Images/APIGateway/transaction_arch_2.png)
