<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Home extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->library('pagination');
		$this->load->helper(array('form', 'url'));
		$this->load->helper('recaptcha_helper');
		$this->load->helper("text");
		@session_start();
	}
	public function index()
	{
		if($this->checkip() == 0){
			$ua=$this->getBrowser();
			$yourbrowser= "Your browser: " . $ua['name'] . " " . $ua['version'] . " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'];
			//print_r($yourbrowser); die();
			$this->log();
			$this->load->model('post_model');
			$data['types'] = $this->post_model->_showalltype();
			$this->load->model('content_model');
			
			$config['base_url'] = site_url('home/index');
			$config['total_rows'] = $this->content_model->totalcontent();
			$config['per_page'] =24;  
			$data['allitems'] = $this->content_model->show_allcontent($config['per_page'],$this->uri->segment(2));
			$this->load->model('catetype_model');
			$data['types'] = $this->post_model->_showalltype();
			$data['caties'] = $this->catetype_model->showallcategoryhome();
			$config['prev_link'] = 'First';
			$config['next_link'] = 'Next';
			$this->pagination->initialize($config);
			$data['pages'] = $this->pagination->create_links();
			$data['suggestionsapp'] = $this->content_model->show_suggestion_app();
			$this->load->view('appstore/home',$data); 
		}else{
			redirect('home/banned');
		}			
	}


	public function appdetail($title=null){
		if($this->checkip() == 0){
			$ua=$this->getBrowser();
			$yourbrowser= "Your browser: " . $ua['name'] . " " . $ua['version'] . " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'];
			//print_r($yourbrowser); die();
			$this->log();
			$this->load->model('post_model');
			$data['types'] = $this->post_model->_showalltype();
			$this->load->model('content_model');
				
			$data['appdetails'] = $this->content_model->read_article($this->returnURLNews($title)); 
			
			$this->load->model('catetype_model');
			$data['types'] = $this->post_model->_showalltype();
			$data['caties'] = $this->catetype_model->showallcategoryhome();
			$config['prev_link'] = 'First';
			$config['next_link'] = 'Next';
			$this->pagination->initialize($config);
			$data['pages'] = $this->pagination->create_links();
			$data['suggestionsapp'] = $this->content_model->show_suggestion_app();
			$this->load->view('appstore/home',$data);
		}else{
			redirect('home/banned');
		}
	}

	public function banned(){
		if($this->checkip() == 1){
			$this->load->view('banned');
		}else{
			redirect('home/index');
		}
	}
	public function checkCaptCha($string1,$string2){
		$privatekey = $this->config->item('private_recaptcha_key');
		$resp = recaptcha_check_answer ($privatekey,
				$_SERVER["REMOTE_ADDR"],
				$string1,
				$string2);
		if (!$resp->is_valid) {
			return false;
		} else {
			return true;
		}
	}

	 
	public function returnURLMenu($title = null){
		$this->load->model('post_model');
		$id = $this->post_model->analys_menu($this->removesign($title));
		return $id;
	}


 
	public function returnURLNews($title = null){
		$this->load->model('content_model');
		$id = $this->content_model->analys_title($this->removesign($title));
		return $id;
	}

	
	public function news($id=null){
		if($this->checkip() == 0){
			$this->log();
			$this->load->model('app_model');
			$data['apps'] = $this->app_model->showapphot();
			$data['totalapp'] = $this->app_model->_totalapp();
			$this->load->model('chatbox_model');
			$config['base_url'] = site_url('webhome/');
			$config['total_rows'] = $this->chatbox_model->_totalchatbox();
			$config['per_page'] = 8;
			$data['chatbox'] = $this->chatbox_model->_showchatbox($config['per_page'],$this->uri->segment(2));
			if (isset($_REQUEST['submit'])) {
				$message = $this->input->post('message', true);
				$userid = $this->session->userdata('upid');
				$username= $this->session->userdata('upname');
				$this->chatbox_model->_addchat($username,$userid,$message);
				redirect('home');
			}
			if( $this->session->userdata('upid') <> null){
				$data["ses"] = $this->session->userdata('upid');
			}else {
				$data["ses"] = null;
			}
				
			$data['pages'] = $this->pagination->create_links();
				
			$this->load->model('post_model');
			$data['notifications'] = $this->post_model->get_last();
			$data['news'] = $this->post_model->get_last_article(10);
			$data['newsdetail'] = $this->post_model->read_article($this->returnURLNews($id));
			$this->load->model('menu_model');
			$data['listmenu'] = $this->menu_model->showmenubyorder(2);
			$data['listchildmenu'] = $this->menu_model->showmenubyorderbyroot(2);
			//$this->load->view('web2/home',$data);
			//$this->load->view('webhome',$data);
			$data['sitename']=$id;
			$this->load->view('portal/index',$data);
		}else{
			redirect('home/banned');
		}
	}
	 

	 
	public function pushmail($from,$to,$subject,$message){
		$config = Array(
				'protocol' => 'smtp',
				'smtp_host' => 'ssl://smtp.googlemail.com',
				'smtp_port' => 465,
				'smtp_user' => 'sonpx@store8x.com',
				'smtp_pass' => 'Xuanson123!',
				'mailtype'  => 'html',
				'charset'   => 'utf-8'
		);
		$this->load->library('email', $config);
		$this->email->set_newline("\r\n");
		$this->email->from($from, 'M8X-Application Mobile Content-Store8x.com');
		$this->email->to($to);

		$this->email->subject($subject);
		$this->email->message($message);
		// Set to, from, message, etc.

		$result = $this->email->send();
		echo $result;
	}

	 

	 
	public function logout(){
		$this->session->unset_userdata('upid');
		$this->session->unset_userdata('upname');
		$this->session->sess_destroy();
		redirect('home');
	}

	public function account(){

		if($this->session->userdata('upid') == null){
			redirect('home/login');
		}else{

			if (isset($_REQUEST['submit'])) {
				$fullname = $this->input->post('fullname', true);
				$bankname = $this->input->post('bankname', true);
				$accbank = $this->input->post('accbank', true);
				$note = $this->input->post('note', true);
				$userid = $this->session->userdata('upid');
				$this->load->model('user_model');
				$result = $this->user_model->_updateuserinfo($userid,$fullname,$bankname,$accbank,$note);
				redirect('home/account');
			}
			//hien thi chatbox-----------------------------------
			$this->load->model('chatbox_model');
			$config['base_url'] = site_url('home/page');
			$config['total_rows'] = $this->chatbox_model->_totalchatbox();
			$config['per_page'] = 10;
			$config['uri_segment'] = 3;
			$config['first_link'] = "ƒê·∫ßu";
			$config['last_link'] = 'Cu·ªëi';
			$data['chatbox'] = $this->chatbox_model->_showchatbox($config['per_page'],$this->uri->segment(3));
			$this->pagination->initialize($config);
			$data['pages'] = $this->pagination->create_links();
			//--------------------------------------------------
			$this->load->model('user_model');
			$userid = $this->session->userdata('upid');
			$data['userid'] = $this->session->userdata('upid');
			$data['userdetails'] = $this->user_model->showaccount($userid);

			if( $this->session->userdata('upid') <> null){
				$data["ses"] = $this->session->userdata('upid');
			}else {
				$data["ses"] = null;
			}
			$this->load->model('post_model');
			$data['notifications'] = $this->post_model->get_last();
			$data['news'] = $this->post_model->get_last_article(10);
			$this->load->view('webhome',$data);

		}
	}


	function detect_mobile()
	{
		$useragent=$_SERVER['HTTP_USER_AGENT'];
		if(preg_match('/android.+mobile|avantgo|bada\/|iphone|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){
			return true;
		}else{
			return FALSE;
		}
	}

	function get_client_ip() {
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {   //check ip from share internet
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {   //to check ip is pass from proxy
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}

	function getBrowser()
	{
		$u_agent = $_SERVER['HTTP_USER_AGENT'];
		$bname = 'Unknown';
		$platform = 'Unknown';
		$version= "";

		//First get the platform?
		if (preg_match('/linux/i', $u_agent)) {
			$platform = 'linux';
		}
		elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
			$platform = 'mac';
		}
		elseif (preg_match('/windows|win32/i', $u_agent)) {
			$platform = 'windows';
		}
			
		// Next get the name of the useragent yes seperately and for good reason
		if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent))
		{
			$bname = 'Internet Explorer';
			$ub = "MSIE";
		}
		elseif(preg_match('/Firefox/i',$u_agent))
		{
			$bname = 'Mozilla Firefox';
			$ub = "Firefox";
		}
		elseif(preg_match('/Chrome/i',$u_agent))
		{
			$bname = 'Google Chrome';
			$ub = "Chrome";
		}
		elseif(preg_match('/Safari/i',$u_agent))
		{
			$bname = 'Apple Safari';
			$ub = "Safari";
		}
		elseif(preg_match('/Opera/i',$u_agent))
		{
			$bname = 'Opera';
			$ub = "Opera";
		}
		elseif(preg_match('/Netscape/i',$u_agent))
		{
			$bname = 'Netscape';
			$ub = "Netscape";
		}
			
		// finally get the correct version number
		$known = array('Version', $ub, 'other');
		$pattern = '#(?<browser>' . join('|', $known) .
		')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
		if (!preg_match_all($pattern, $u_agent, $matches)) {
			// we have no matching number just continue
		}
			
		// see how many we have
		$i = count($matches['browser']);
		if ($i != 1) {
			//we will have two since we are not using 'other' argument yet
			//see if version is before or after the name
			if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
				$version= $matches['version'][0];
			}
			else {
				$version= $matches['version'][1];
			}
		}
		else {
			$version= $matches['version'][0];
		}
			
		// check if we have a number
		if ($version==null || $version=="") {
			$version="?";
		}
			
		return array(
				'userAgent' => $u_agent,
				'name'      => $bname,
				'version'   => $version,
				'platform'  => $platform,
				'pattern'    => $pattern
		);
	}


	public function log(){
		$session_id = $this->session->userdata('session_id');
		$ip_address=$this->input->ip_address();
		$user_agent = $this->session->userdata('user_agent');
		date_default_timezone_set('Asia/Bangkok');
		$logday = date("d-m-Y");
		$logtime= date("h:i:s");
		$module = $this->router->method;
		$class = $this->router->class;
		$this->load->model('log_model');
		$this->log_model->add_log($session_id,$ip_address,$user_agent,$logday,$logtime,$module,$class);
	}

	public function checkip(){
		$ip_address=$this->input->ip_address();
		$this->load->model('log_model');
		return $this->log_model->checkip($ip_address);
	}


	function removesign($str)
	{
		$coDau=array("à","á","ạ","ả","ã","â","ầ","ấ","ậ","ẩ","ẫ","ă","ằ","ắ"
				,"ặ","ẳ","ẵ","è","é","ẹ","ẻ","ẽ","ê","ề","ế","ệ","ể","ễ","ì","í","ị","ỉ","ĩ",
				"ò","ó","ọ","ỏ","õ","ô","ồ","ố","ộ","ổ","ỗ","ơ"
				,"ờ","ớ","ợ","ở","ỡ",
				"ù","ú","ụ","ủ","ũ","ư","ừ","ứ","ự","ử","ữ",
				"ỳ","ý","ỵ","ỷ","ỹ",
				"đ",
				"À","Á","Ạ","Ả","Ã","Â","Ầ","Ấ","Ậ","Ẩ","Ẫ","Ă"
				,"Ằ","Ắ","Ặ","Ẳ","Ẵ",
				"È","É","Ẹ","Ẻ","Ẽ","Ê","Ề","Ế","Ệ","Ể","Ễ",
				"Ì","Í","Ị","Ỉ","Ĩ",
				"Ò","Ó","Ọ","Ỏ","Õ","Ô","Ồ","Ố","Ộ","Ổ","Ỗ","Ơ"
				,"Ờ","Ớ","Ợ","Ở","Ỡ",
				"Ù","Ú","Ụ","Ủ","Ũ","Ư","Ừ","Ứ","Ự","Ử","Ữ",
				"Ỳ","Ý","Ỵ","Ỷ","Ỹ",
				"Đ","ê","ù","à");
		$khongDau=array("a","a","a","a","a","a","a","a","a","a","a"
				,"a","a","a","a","a","a",
				"e","e","e","e","e","e","e","e","e","e","e",
				"i","i","i","i","i",
				"o","o","o","o","o","o","o","o","o","o","o","o"
				,"o","o","o","o","o",
				"u","u","u","u","u","u","u","u","u","u","u",
				"y","y","y","y","y",
				"d",
				"A","A","A","A","A","A","A","A","A","A","A","A"
				,"A","A","A","A","A",
				"E","E","E","E","E","E","E","E","E","E","E",
				"I","I","I","I","I",
				"O","O","O","O","O","O","O","O","O","O","O","O"
				,"O","O","O","O","O",
				"U","U","U","U","U","U","U","U","U","U","U",
				"Y","Y","Y","Y","Y",
				"D","e","u","a");
		return str_replace($coDau,$khongDau,$str);
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */