<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Banner_link_model extends CI_Model {

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
		$this->load->database();
	}
	
	//----- slide
	function show_slide(){  
		$this->db->order_by('id','DESC');
		$query = $this->db->get('tbl_banner_slide');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	function add_slide($images,$link,$position){
		$data = array(
            'imageslink'=>$images,
			'link'=>$link,
			'position'=>$position,
			'active'=>1
		);
		$this->db->insert('tbl_banner_slide', $data);
	}

	 
	
	function del_slide($id){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbl_banner_slide');
	}
	
	//----------------------
}
?>