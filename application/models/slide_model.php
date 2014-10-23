<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Slide_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}
	
	//----- slide
	function show_slide(){  
		$this->db->order_by('id','DESC');
		$query = $this->db->get('tbl_slide');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
        
        function show_slide_random(){  
                $this->db->limit(1);
		$this->db->order_by('id','random');
		$query = $this->db->get('tbl_slide');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	function add_slide($images,$link){
		$data = array(
            'imageslink'=>$images,
			'link'=>$link
		);
		$this->db->insert('tbl_slide', $data);
	}

	function update_slide($id,$images,$link){
		$data = array(
            'imageslink'=>$images,
			'link'=>$link
		);
		$this->db->where('id', $id);
		$this->db->update('tbl_slide', $data);
	}
	
	function del_slide($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbl_slide');
	}
	
	//----------------------
}
?>