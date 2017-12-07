## WP React Test

Plugin based on [this blog post](https://deliciousbrains.com/develop-wordpress-plugin-webpack-3-react/).

### Technologies

**WP Rest API**, obviously. I'm authenticating with the API by localizing a nonce in wp-react-test.php.

**Axios** is the library I chose to do HTTP requests to the API because it is awesome. I really like that you don't have to transform the response in order to get JSON data.

**React** is the UI. I pulled in **Radium** because I wanted to do inline styles, and without a helper library doing things like hover states on buttons seems needlessly complicated.
  
**Webpack** handles combining it all together.

### Current functionality

The current functionality is limited to editing post titles and deleting posts, and it only displays 5 posts at a time.

In the future I'd love to rethink the current UI for editing posts, but the above will have to suffice for now.

### Getting started

In order to run the plugin:

1. Clone repo to your `wp-content/plugins` folder
1. In `config.json` change the `proxyURL` to point to your WordPress admin page or plugin page.
1. Activate the plugin in wp-admin
1. `cd` into your checked out folder and run `npm i`
1. Run `npm start` to get Webpack and BrowserSync running

To build for production run:

`npm build`

To run tests: 

`npm test`

A production-ready WordPress plugin will be built in the `wp-react-test-built` folder.

### Accessing the plugin

The plugin is accessible from the Tools submenu in the WP Admin.