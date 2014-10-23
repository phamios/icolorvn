<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Store_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    function show_all_store($num,$offset) {
        $this->load->database();
        $this->db->order_by('id', 'desc');
        $query=$this->db->get('tbl_store',$num,$offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function store_details($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbl_store');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function total_store() {
        $this->load->database();
        return $this->db->count_all('tbl_store');
    }

    function add_store($cateid,$nameitem,$price,$amount,$customer_name,$status,$specs) {
        $this->load->database();
        $data = array(
            'cateid' => $cateid,
            'nameitem' => $nameitem,
            'price' => $price,
            'amount' => $amount,
            'customer_name' => $customer_name,
            'status' => $status,
            'datecreated' => date("d-m-Y H:i:s"),
            'specs'=>$specs,
        );
        $this->db->insert('tbl_store', $data);
    }
    
    function total_store_paid() {
        $this->load->database();
        $this->db->where('status',1);
        return $this->db->count_all('tbl_store');
    }
     function total_store_pending() {
        $this->load->database();
        $this->db->where(array('status !=' => 2,'status !='=>1)); 
        return $this->db->count_all('tbl_store');
    }
    
    function total_amount_order(){
        $total = 0;
        $this->load->database();
        $query = $this->db->query("select *  from tbl_store where status = 1");
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + ($row->price * $row->amount);
            }
            return $total;
        } else {
            return null;
        }
    }
    
    function total_amount_ped(){
        $total = 0;
        $this->load->database();
        $query = $this->db->query("select *  from tbl_store where status = 1");
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $total = $total + $row->amount;
            }
            return $total;
        } else {
            return null;
        }
    }

	function del_store($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbl_store');
    }
    
}
