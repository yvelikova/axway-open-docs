---
title: Miscellanea
linkTitle: Miscellanea
weight: 1000
date: 2020-03-05
description: Miscellaneous commonly used formats.
---

### Common Date and Time Format for Responses

All date-time instances in responses share the same format, as per [RFC 3339](https://tools.ietf.org/html/rfc3339#section-5.6).

Format: `date-time`, with `time-offset` utilizing the `time-numoffset` definition.

Example: `2020-03-11T08:38:11.000+0000`.

### Common Date and Time Format for Requests

All date-time instances in requests need to adhere to the following format, as per [RFC 3339](https://tools.ietf.org/html/rfc3339#section-5.6).

Format: `date-time`, with `time-offset` set to `Z`.

Example: `2020-03-01T01:02:03Z`.
