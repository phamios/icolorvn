<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database(); 
    }
    
	function show_all_admin($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tbadmin',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	
	function check_admin_user($username){
		$this->load->database();
		$this->db->where(array('user'=>$username));
		$query=$this->db->get('tbadmin');
		if ($query->num_rows() > 0)
		{
		foreach($query->result() as $row){
				return $row->level; 
			}
		}
		return $query->result();
	}
  
	function add_useradmin($username,$pass,$level){ 
		$this->load->database();
    	$data = array( 
            'user'=>$username,
            'pass'=>$pass,
    		'level'=>$level, 
    		'createddate'=>date("d-m-Y h:i:s")
            );
    	$this->db->insert('tbadmin', $data); 
	}
	
	function edit_useradmin($id,$password,$level){
		$this->load->database();
		$data = array(
				'pass'=>$password, 
				'level'=>$level
		);
		$this->db->where('id', $id);
		$this->db->update('tbadmin', $data);
	}
	 
    function checkuser($username,$password){
		
		$this->db->where(array('user'=>$username,'pass'=>$password));
		$query = $this->db->get('tbadmin');
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
				return $row->id; 
			}
		}else{
			return null;
		}
	}
	
	function getDetailsAdmin($id){
		$this->db->where(array('id'=>$id));
		$query = $this->db->get('tbadmin');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	function showaccount($userid){
		$this->load->database(); 
		$this->db->where('id',$userid);
		$query = $this->db->get('tbuser');
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	function searchuseradmin($username){
		$this->load->database(); 
		$this->db->where('user',$username);
		$query = $this->db->get('tbadmin');
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	/* 
	 * -----------------CONFIG SITE------------
	 */
	function show_config(){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tblconfig');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function details_config($id=null){
		$this->load->database();
		$this->db->where('id',$id);
		$query=$this->db->get('tblconfig');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function add_config($name,$value){
		$this->load->database();
    	$data = array(
				'name_config'=>$this->removesign($name), 
				'value_config'=>$value
		);
    	$this->db->insert('tblconfig', $data); 
	}
	
	function update_config($id,$name,$value){
		$this->load->database();
		$data = array(
				'name_config'=>$this->removesign($name), 
				'value_config'=>$value
		);
		$this->db->where('id', $id);
		$this->db->update('tblconfig', $data);
	}
	
	function del_config($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tblconfig'); 
	}
	
	function get_detail_config($id){
		$this->load->database();
		$this->db->where('id',$id);
		$query=$this->db->get('tblconfig',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function get_config($name=null){
		$this->load->database();
		$this->db->where('name_config',$this->removesign($name));
		$query=$this->db->get('tblconfig',$num,$offset);
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row){
				return $row->value_config;
			}
		}else{
			return 0;
		}
		
	}
	/* 
	 * -----------------END CONFIG SITE------------
	 */
	
	function show_user($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tbuser',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function totaluser(){  
    	$this->load->database();
		return $this->db->count_all('tbuser'); 
	}
	
	function total_admin(){  
    	$this->load->database();
		return $this->db->count_all('tbadmin'); 
	}
	
	function deladmin($id){ 
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbadmin'); 
	}

	//xóa dấu - cấu hình text mặc định
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
    ?>