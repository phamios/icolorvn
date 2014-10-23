<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Banner_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database(); 
    }
    
	function show_all_banner($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tbl_banner',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	
	function check_exit_banner($banner_name){
		$this->load->database();
		$this->db->where(array('banner_name'=>$banner_name));
		$query=$this->db->get('tbl_banner');
		if ($query->num_rows() > 0)
		{
		 	return 1;
		}else{
			return 0;
		}
		
	}
  
	function add_banner($banner_name,$banner_code,$banner_link,$banner_type,$content_id = 0,$status){ 
		$this->load->database();
    	$data = array( 
            'banner_name'=>$banner_name,
            'banner_code'=>$banner_code,
    		'banner_link'=>$banner_link, 
    		'banner_type'=>$banner_type,
    		'status' =>$status,
    		'content_id'=>$content_id,
    		'datecreate'=>date("d-m-Y h:i:s")
            );
    	$this->db->insert('tbl_banner', $data); 
	}
	
	function edit_useradmin($id,$banner_name,$banner_code,$banner_link,$banner_type,$content_id = 0,$status){
		$this->load->database();
    	$data = array( 
            'banner_name'=>$banner_name,
            'banner_code'=>$banner_code,
    		'banner_link'=>$banner_link, 
    		'banner_type'=>$banner_type,
    		'status' =>$status,
    		'content_id'=>$content_id,
    		'datecreate'=>date("d-m-Y h:i:s")
            );
		$this->db->where('id', $id);
		$this->db->update('tbl_banner', $data);
	}
	 
    function return_bannerid($banner_name){
		
		$this->db->where(array('banner_name'=>$banner_name));
		$query = $this->db->get('tbl_banner');
		if($query->num_rows() > 0){
			foreach($query->result() as $row){
				return $row->id; 
			}
		}else{
			return null;
		}
	}
	
	function getDetailsBanner($id){
		$this->db->where(array('id'=>$id));
		$query = $this->db->get('tbl_banner');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	 
	
	function search_banner($banner_name){
		$this->load->database(); 
		$this->db->where('banner_name',$banner_name);
		$query = $this->db->get('tbl_banner');
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	
	 
	
	function totalbanner(){  
    	$this->load->database();
		return $this->db->count_all('tbl_banner'); 
	}
	
	 
	
	function delbanner($id){ 
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbl_banner'); 
	}
}
    ?>