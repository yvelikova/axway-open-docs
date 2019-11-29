---
title: Run the sample scripts
linkTitle: Run the sample scripts
weight: 10
date: 2019-11-18
description: Run the Jython sample scripts for OAuth flows.
---

API Gateway includes sample Jython scripts for all supported OAuth flows in the following directory of your API Gateway installation:

```
INSTALL_DIR/samples/scripts/oauth
```

To run a sample script:

1. Open a UNIX shell or DOS command prompt in the following directory:

    ```
    INSTALL_DIR/samples/scripts
    ```

2. Use the `run.sh` or `run.bat` utility to execute the appropriate script.

The following example shows how to run the `implicit_grant.py` sample script:

```
sh run.sh oauth/implicit_grant.py
```
