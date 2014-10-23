<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class User_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
                $this->load->database();
	}

        function check_login_customer($username,$password){
            $this->db->where(array('email'=>$username,'password'=>md5($password)));
            $query=$this->db->get('tbl_customer');
				if ($query->num_rows() > 0)
				{
					return 1;
				}else{
		                    return 0;
                } 
        }
        
        function add_customer($email,$password,$full_name,$province,$address,$mobile,$sex) {
          	if($this->checkcustomerexit($username) == 0){
				$data = array(
						'username'=>strtolower($email),
						'password'=>md5(strtolower($userpass)),
						'email'=>$email,
						'createdate'=>date("Y-m-d h:s:m"),
						'fullname'=>$full_name,
						'city'=>$province,
						'address'=>$address,
	                                        'phone'=>$mobile,
	                                        'sex'=>$sex
				);
				$this->db->insert('tbl_customer', $data);
				return 1;
			} else {
				return 0;
			} 
        }
        
        function show_customer(){ 
            $query=$this->db->get('tbl_customer');
				if ($query->num_rows() > 0)
				{
					 return $query->result();
				}else{
		          	return null;
                } 
        }
        
        function checkcustomerexit($username){
		$this->load->database();
		$this->db->where(array('username'=>$username));
		$query = $this->db->get('tbl_customer');
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
				return $row->id;
			}
		}else{
			return 0;
		}
	}
        
        
	function _listuser(){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbuser');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function user_rank(){
		$this->load->database();
		$this->db->order_by("balance", "desc");
		$this->db->limit(5);
		$query=$this->db->get('tbuser');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	function showalluser(){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbuser');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	function _listmember($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbmember',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
 
	function changestatustype($id=null,$active=null){
		$this->load->database();
		$data = array('active'=>$active);
		$this->db->where('id',$id);
		$this->db->update('tbuser',$data);
	}


	function checkuserexit($username){
		$this->load->database();
		$this->db->where(array('username'=>$username));
		$query = $this->db->get('tbuser');
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
				return $row->id;
			}
		}else{
			return 0;
		}
	}

	function _adduser($username,$userpass,$phone,$email,$ip,$usertype){
		$this->load->database();
		if($this->checkuserexit($username) == 0){
			$data = array(
					'username'=>strtolower($username),
					'password'=>md5(strtolower($userpass)),
					'phone'=>$phone,
					'createdate'=>date("Y-m-d h:s:m"),
					'active'=>1,
					'email'=>$email,
					'registerIP'=>$ip
			);
			$this->db->insert('tbuser', $data);
			return 1;
		} else {
			return 0;
		}
	}

	function _updateuserinfo($userid,$fullname,$bankname,$bankaccount,$note){
		$this->load->database();
		$data = array(
				'fullname'=>$fullname,
				'bankname'=>$bankname,
				'accbank'=>$bankaccount,
				'note'=>$note
		);
		$this->db->where('id', $userid);
		$this->db->update('tbuser', $data);
	}

	function checkuser($username,$password){
		$this->load->database();
		$this->db->where(array('username'=>$username,'password'=>$password,"active"=>1));
		$query = $this->db->get('tbuser');
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
				return $row->id;
			}
		}else{
			return null;
		}
	}

	function listalluser($num,$offset){
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
	function total_member(){
		$this->load->database();
		return $this->db->count_all('tbmember');
	}

	function totaluseractive(){
		$this->load->database();
		$query = $this->db->get_where('tbuser', array('active'=>1));
		$count = $query->num_rows();
		return $count;
	}

	function totaluserunactive(){
		$this->load->database();
		$query = $this->db->get_where('tbuser', array('active'=>0));
		$count = $query->num_rows();
		return $count;
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
}