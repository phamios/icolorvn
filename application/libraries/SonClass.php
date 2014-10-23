<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class SonClass {
	 
	public function switch_theme($theme)
	{
		//set the cookie with the theme
		set_cookie('theme', $theme, 60*60*24*365);
		
		//set the message cookie
		set_cookie('message', 'Theme switched to: '.$theme , 60*60*24*365);
		
		 
		//and redirect to the controller
		//redirect('home');
	}
	
	public function template($method,$theme,$template){
		if($this->router->fetch_method() == 'add_type'){
			$this->load->view('appstore/admin/add_type');
		}  
	}
}

/* End of file Sonclass.php */