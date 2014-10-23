<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Cart_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}

	function get_item($item_id){
		$this->load->database();
		$this->db->where('active',0);
		$this->db->where('id',$item_id);
		$query = $this->db->get('tbcontent');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}

	function show_customer_details($id){
		$this->load->database();
		$this->db->where('id',$id);
		$query = $this->db->get('tbl_customer');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}

	function show_all_cart(){
		$this->load->database();
		$this->db->where(array('active'=>1));
		$query = $this->db->get('tbl_cart_bak'); 
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	function update_status_cart($id){
		$this->load->database();
		$data = array(
            'status'=>1 
		);
		$this->db->where('id', $id);
		$this->db->update('tbl_cart_bak', $data);
	}

	function show_cart($custid){
		$this->load->database();
		$this->db->where('active',0);
		$this->db->where(array('custid'=>$custid));
		$query = $this->db->get('tbl_cart_bak');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}

	function add_cart($cust_id,$item_id,$amount,$itemname,$coins){
		$this->load->database();
		$data = array(
            'custid'=>$cust_id,
            'itemid'=>$item_id,
    		'amount'=>$amount,
			'itemname'=>$itemname,
			'coins'=>$coins,
                        'active'=>0,
			'createdate'=>date("d-m-Y h:i:s")
		);
		$this->db->insert('tbl_cart_bak', $data);
	}

	function edit_cart($cust_id,$item_id,$amount,$itemname,$coins){
		$this->load->database();
		$data = array(
            'custid'=>$cust_id,
            'itemid'=>$item_id,
    		'amount'=>$amount,
			'itemname'=>$itemname,
			'coins'=>$coins
		);
		$this->db->where('id', $id);
		$this->db->update('tbl_cart_bak', $data);
	}

	function update_status($custid){
		$this->load->database();
		$data = array(
                        'active' =>1
		);
		$this->db->where('custid', $custid);
		$this->db->update('tbl_cart_bak', $data);
	}
	function del_cart($id,$cusid){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->where('custid', $custid);
		$this->db->delete('tbl_cart_bak');
	}

	function del_item_in_cart($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbl_cart_bak');
	}


	function sum_value($custid){
		$this->load->database();
		$sql = "select sum(amount*coins) as total from tbl_cart_bak where active=0 and custid=".$custid;
		$query = $this->db->query($sql);
		if ($query->num_rows() > 0)
		{
			foreach($query->result() as $row){
				return $row->total;
			}
		}else{
			return 0;
		}
			
	}

	function total_cart($customerid){
		$this->load->database();
		$this->db->where(array('custid'=>$customerid));
		$this->db->where(array('active'=>0 )); 
		return $this->db->count_all('tbl_cart_bak');
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