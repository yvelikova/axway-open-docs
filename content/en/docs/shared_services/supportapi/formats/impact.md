---
title: Impact
linkTitle: Impact
weight: 15
date: 2020-03-05
description: Classification of impact levels, as an open-ended enumeration.
---

* **Data Type**: string
* **Enumeration Elements**:
    * 1 - Critical
    * 2 - High
    * 3 - Mediums
    * 4 - Low

#### 1 - Critical

Faults that seriously impair or halt performance in production for the end user.

* Production System:
    * System, server or critical application down.
    * The user cannot make use of a "must-have" business-essential function in the production system.
    * The problem cannot be solved by a restart or a bypass or a workaround.

#### 2 - High

Serious faults that affect productivity or development:

* Production System:
    * Problem where production is proceeding, but in a significantly impaired fashion.
    * The production system is running, but with repeated interruptions.
* Development System:
    * The problem cannot be solved by a restart or a bypass.
    * Halts further development and workaround has not been found.
    * Cannot move product into production and workaround has not been found.

#### 3 - Medium

Medium faults:

* Production System:
    * Problems which do not have a significant impact on current productivity.
    * The production system is running, but with limitations.
    * A function in the production system is failing, but there is a bypass available.
* Development System:
    * A function in the development system is failing, but there is a bypass available.
    * Development project can proceed, but in a significantly impaired fashion.
    * A workaround has been found but it is not acceptable.

#### 4 - Low

Minor faults which do not affect the use of the system or have no impact.
