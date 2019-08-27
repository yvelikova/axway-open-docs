{
  "title":"Troubleshooting API Portal in Docker",
  "linkTitle":"Troubleshooting",
  "weight":"4",
  "date":"2019-08-09",
  "description":"Troubleshoot problems you might encounter when running API Portal in Docker containers."
}

This section describes problems you might encounter when running API Portal in Docker containers, and provides possible solutions.

## API Portal UI does not load

When you try to access API Portal from a browser you get the following message: `Error displaying the error page.`

Perform the following checks to try and identify the cause of the problem:

- Check whether the database is running and the API Portal schema is available.
- Connect to the API Portal container and check whether it can access the database schema from the database container.
- Connect to the API Portal container and open `/opt/axway/apiportal/htdoc/configuration.php` and verify that the database settings are correct (host, port, user, password, db, and so on).
- If you cannot identify the cause of the problem, contact Axway Support at [https://support.axway.com](https://support.axway.com/).

## Restart Apache on API Portal container

If you need to restart Apache on the API Portal container, perform the following:

1. Connect to the API Portal container.
2. Run the following command to restart the Apache daemon:

    `/usr/sbin/httpd -k restart`

## Apache does not start

After the API Portal container is started, the Apache daemon is not started and you cannot access your API Portal.

1. Verify that you have waited sufficient time for the container to start. When running the container for the first time it takes time to import the whole database schema. 

    To check if this is the case, perform the following:

    - Connect to the database container and check the database schema.
    - Check the Docker logs for the API Portal container.

2. Verify whether the following files exist on the API Portal Docker container. Those files are the certificates used by API Portal when you connect over HTTPS. Apache will not start if these files are missing.

    `/etc/httpd/server.key`

    `/etc/httpd/server.crt`

3. If the files do not exist, either generate them using `/tmp/genssl.sh` script, or provide your own certificates.

4. Restart the Apache daemon using the command:

    `/usr/sbin/httpd -k restart`
