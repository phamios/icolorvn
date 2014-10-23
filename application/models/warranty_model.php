<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Warranty_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}
	function show_all_link(){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbl_warranty');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function get_detail_warranty($id){
		$this->load->database(); 
		$this->db->where('id',$id);
		$query=$this->db->get('tbl_warranty');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}

	function edit_warranty_link($id,$name,$link){
		$this->load->database();
		$data = array(
    			'name'=>$name,
    			'link'=>$link 
		);
		$this->db->where('id', $id);
		$this->db->update('tbl_warranty', $data);
	}

	function add_warranty($name,$link){
		$this->load->database();
		$data = array(
    			'name'=>$name,
    			'link'=>$link, 
		);
		$this->db->insert('tbl_warranty', $data);
	}

	function del_warranty($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbl_warranty');
	}
}