<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Usertype_model extends CI_Model {
	private static $db_name = 'tbl_user_type';
	
    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
	function get_all() {
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get(Usertype_model::$db_name);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	function get_by_id($id) {
		$this->load->database();
		$this->db->where("id", $id);
		$query=$this->db->get(Usertype_model::$db_name);
		if ($query->num_rows() > 0)
		{
			$result = $query->result();
			return $result[0];
		}
		else {
			
		}
		return $query->result();
	}
}
 