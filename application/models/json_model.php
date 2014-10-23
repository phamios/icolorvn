<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class json_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
        $this->load->database(); 
    }
    
	function getContentbyUser($username){ 
		$this->db->where(array('userid'=>$username));
		$query = $this->db->get('tbappcontent');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return false;
		}
	}
    
}
?>