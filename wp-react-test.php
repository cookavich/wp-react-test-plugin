<?php

/*
Plugin Name: WP React Test
Plugin URI:
Description:
Author: Paul Cook
Version: 0.1
Author URI: paulrcook.com
Network: True
*/

class WP_React_Boilerplate {

	public $plugin_domain;
	public $views_dir;
	public $version;

	public function __construct() {
		$this->plugin_domain = 'wp-react-boilerplate';
		$this->views_dir     = trailingslashit( dirname( __FILE__ ) ) . 'server/views';
		$this->version       = '1.0';
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
        add_filter('http_origin', function() { return "http://localhost:3000";});

    }

	public function admin_menu() {
		$title = __( 'WP React Boilerplate', $this->plugin_domain );

		$hook_suffix = add_management_page( $title, $title, 'export', $this->plugin_domain, array(
			$this,
			'load_admin_view',
		) );

		add_action( 'load-' . $hook_suffix, array( $this, 'load_bundle' ) );
	}

	public function load_view( $view ) {
		$path = trailingslashit( $this->views_dir ) . $view;

		if ( file_exists( $path ) ) {
			include $path;
		}
	}

	public function load_admin_view() {
		$this->load_view( 'admin.php' );
	}

	public function load_bundle() {
		wp_enqueue_script( $this->plugin_domain . '-bundle', plugin_dir_url( __FILE__ ) . 'dist/bundle.js', array(), $this->version, 'all' );
		wp_localize_script($this->plugin_domain . '-bundle', 'WpSettings', ['nonce' => wp_create_nonce('wp_rest')]);
	}
}

new WP_React_Boilerplate();