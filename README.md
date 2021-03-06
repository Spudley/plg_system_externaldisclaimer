ExternalDisclaimer
==================

A Joomla plugin to add a disclaimer popup when users click on an external link on your site.


Version History
----------------

* 1.0.0     Initial release.


Installation
----------------

This is a standard Joomla plugin. Installation is via Joomla's extension manager. As with all plugins, remember that it must also be activated after being installed.


Configuration
-------------

In the plugin configuration, set the options as follows:

* Internal Domains:

  As a minimum, this should contain your site's domain name. So if your site's URL is `http://www.example.com`, you would enter `www.example.com` into this field.

  You may specify multiple domains, one per line. So you could have `www.example.com` on one line and `example.com` on another line.
  
  You can also specify any other domains here that you want the plugin to consider as 'internal'. This would be useful for sites that have a number of sub-domains.
  
  Once the plugin is activated, any links on your site to any sites not listed in this field will generate a popup alert message. Make sure you include all the sites that you link to that you don't this to happen.

* Redirect patterns

  It is possible that you may have some links internally in your site that actually redirect to external sites. For example, if you use the Joomla Weblinks plugin, the links generated by this plugin work like this.
  
  This field allows you to specify that these links should generate the disclaimer alert. You can use regular expression patterns, one per line, to specify which links it should apply to.

  For the example of the weblinks plugin, a pattern that would match the default URL for these might look like this: `task=weblink\.go`

* Disclaimer Text

  This is the message that you want to appear in the popup alert.


Motivation
----------------

This plugin was written to satisfy a need for a specific website. I appreciate that most sites will not need this kind of functionality, and most users will find it annoying.


Todo List and Known Issues
--------------------------

None known.


License
----------------
As with all Joomla extensions and Joomla itself, this plugin is licensed under the GPLv2. The full license document should have been included with the source code.
