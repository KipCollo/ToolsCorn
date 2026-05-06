# cURL

Client URL Library.

PHP supports libcurl, a library created by Daniel Stenberg, that allows you to connect and communicate to many different types of servers with many different types of protocols. libcurl currently supports the http, https, ftp, gopher, telnet, dict, file, and ldap protocols. libcurl also supports HTTPS certificates, HTTP POST, HTTP PUT, FTP uploading (this can also be done with PHP's ftp extension), HTTP form based upload, proxies, cookies, and user+password authentication. 

In order to use PHP's cURL functions you need to install the » libcurl package. PHP requires libcurl version 7.10.5 or later. 

To use PHP's cURL support you must also compile PHP --with-curl[=DIR] where DIR is the location of the directory containing the lib and include directories. 

## cURL Functions

* curl_close — Close a cURL session
* curl_copy_handle — Copy a cURL handle along with all of its preferences
* curl_errno — Return the last error number
* curl_error — Return a string containing the last error for the current session
* curl_escape — URL encodes the given string
* curl_exec — Perform a cURL session
* curl_getinfo — Get information regarding a specific transfer
* curl_init — Initialize a cURL session
* curl_multi_add_handle — Add a normal cURL handle to a cURL multi handle
* curl_multi_close — Close a set of cURL handles
* curl_multi_errno — Return the last multi curl error number
* curl_multi_exec — Run the sub-connections of the current cURL handle
* curl_multi_getcontent — Return the content of a cURL handle if CURLOPT_RETURNTRANSFER is set
* curl_multi_info_read — Get information about the current transfers
* curl_multi_init — Returns a new cURL multi handle
* curl_multi_remove_handle — Remove a multi handle from a set of cURL handles
* curl_multi_select — Wait for activity on any curl_multi connection
* curl_multi_setopt — Set a cURL multi option
* curl_multi_strerror — Return string describing error code
* curl_pause — Pause and unpause a connection
* curl_reset — Reset all options of a libcurl session handle
* curl_setopt — Set an option for a cURL transfer
* curl_setopt_array — Set multiple options for a cURL transfer
* curl_share_close — Close a cURL share handle
* curl_share_errno — Return the last share curl error number
* curl_share_init — Initialize a cURL share handle
* curl_share_setopt — Set an option for a cURL share handle
* curl_share_strerror — Return string describing the given error code
* curl_strerror — Return string describing the given error code
* curl_unescape — Decodes the given URL encoded string
* curl_upkeep — Performs any connection upkeep checks
* curl_version — Gets cURL version information

```php
<?php
 // create curl resource
  $ch = curl_init();

 // set url
   curl_setopt($ch, CURLOPT_URL, "example.com");

  //return the transfer as a string
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  // $output contains the output string
   $output = curl_exec($ch);

  // close curl resource to free up system resources
    curl_close($ch);      
```
