<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Log_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    function add_count_app(){
    	
    }
    
    function add_log($session_id,$ip_address,$user_agent,$logday,$logtime,$module,$controller,$userid){
    	$this->load->database();
    	$data = array( 
            'session_id'=>$session_id,
            'ip_address'=>$ip_address,
    		'user_agent'=>$user_agent,
    		'logday'=>$logday,	
    		'logtime'=>$logtime,
    		'module'=>$module,
    		'controller'=>$controller,
    		'userid'=>$userid
            );
    	$this->db->insert('tblog', $data); 
    }
    
    function show_log($num,$offset){
    	$this->load->database();
    	$this->db->order_by("id", "desc");
    	$query=$this->db->get('tblog',$num,$offset);
    	if ($query->num_rows() > 0)
    	{
    		return $query->result();
    	}
    	return $query->result();
    }
    
    function total_log(){
    	$this->load->database();
    	return $this->db->count_all("tblog");
    }
    
	function add_ipaddress($ipaddress){
    	$this->load->database();
    	$data = array( 
            'ipaddress'=>$ipaddress
            );
    	$this->db->insert('tblblockip', $data); 
    }
    
	function _totalrows(){
		$this->load->database();
		return $this->db->count_all("tblblockip");
	}
    
	function listpageipaddress($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tblblockip',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	} 
	
	function checkip($ip){
		$this->load->database();
		$this->db->where('ipaddress',$ip);
		$query=$this->db->get('tblblockip');
		if ($query->num_rows() > 0)
		{
			return 1;
		}
		return 0;
	}
	
	function deleteip($id){ 
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tblblockip');
	}
	function totallog(){  
    	$this->load->database();
    	$query= $this->db->query('SELECT COUNT(DISTINCT ip_address) as total FROM tblog'); 
    	if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function todaylog(){  
    	$this->load->database();
    	$datenow = date('d-m-Y'); 
    	$query= $this->db->query("SELECT COUNT(DISTINCT ip_address) as total FROM tblog where logday=$datenow"); 
    	if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
}