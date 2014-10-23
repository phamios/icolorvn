<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class App_content extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    function getall_byusername($username) {
        $this->load->database();
        $this->db->where('user', $username);
        $query = $this->db->get('tbl_appios');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

}
