<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Catetype_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function show_allcategory($num, $offset) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcatecontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_cate_not_page() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_type_not_page() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_type_home_show() {
    	$this->load->database();
    	$this->db->where('hot_main',1);
    	$this->db->order_by("hot_order", "asc");
    	$query = $this->db->get('tbtype');
    	if ($query->num_rows() > 0) {
    		return $query->result();
    	}
    	return $query->result();
    }

    function _show_cateogry_by_type($id = null) {
        $this->load->database();
        $this->db->where("typeid", $id);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function set_type_main($id,$value){
    	$this->load->database();
    	$data = array('hot_main' => $value);
    	$this->db->where('id', $id);
    	$this->db->update('tbtype', $data);
    }

    function set_type_hot_main($id,$value){
    	$this->load->database();
    	$data = array('hot_order' => $value);
    	$this->db->where('id', $id);
    	$this->db->update('tbtype', $data);
    }




    function return_type_by_cate_id($id = null) {
        $this->load->database();
        $this->db->where("id", $id);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->typeid;
            }
        }
        return $query->result();
    }

    function show_all_type() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function _show_cateogry_by_cate($id) {
        $this->load->database();
        $this->db->where("typeid", $id);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showllcate() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    //Inner join hai table Cate va Type
    function get_item_by_type_hot() {
        $this->load->database();
        $sql = "SELECT tbcatecontent.typeid,tbcatecontent.id,tbcatecontent.catename,tbtype.id,tbtype.nametype " +
                "FROM tbcateconten t" +
                "INNER JOIN tbtype " +
                "ON tbcatecontent.typeid=tbtype.id " +
                "WHERE tbtype.sethome= 1 order by tbcatecontent.typeid ";

        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    //Hien thi cac type duoc set len trang chu
    function show_atype_hot() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('sethome', '1');
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showallcategoryhome() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('active', 1);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function totalcate() {
        $this->load->database();
        return $this->db->count_all('tbcatecontent');
    }

    function total_type_hot_main(){

    	$this->load->database();
    	$this->db->where('hot_main',1);
    	return $this->db->count_all('tbtype');
    }

    function showdetailscate($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function add_categorytype($typeid, $catename, $cateroot, $active) {
        $this->load->database();
        $data = array(
            'typeid' => $typeid,
            'catename' => $catename,
            'cateroot' => $cateroot,
            'active' => $active,
        );
        $this->db->insert('tbcatecontent', $data);
    }

    function edit_categorytype($id, $typeid, $catename, $cateroot, $active) {
        $this->load->database();
        $data = array(
            'typeid' => $typeid,
            'catename' => $catename,
            'cateroot' => $cateroot,
            'active' => $active,
        );
        $this->db->where('id', $id);
        $this->db->update('tbcatecontent', $data);
    }

    function set_cate_hot($id, $status) {
        $this->load->database();
        $data = array(
            'sethome' => $status
        );
        $this->db->where('id', $id);
        $this->db->update('tbtype', $data);
    }

    function changestatus($id = null, $active = null) {
        $this->load->database();
        $data = array('active' => $active);
        $this->db->where('id', $id);
        $this->db->update('tbcatecontent', $data);
    }

    function changestatustype($id = null, $active = null) {
        $this->load->database();
        $data = array('active' => $active);
        $this->db->where('id', $id);
        $this->db->update('tbtype', $data);
    }

    function del_category($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbcatecontent');
    }

    function _showalltype() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function _show_type_main() {
        $this->load->database();
        $this->db->limit(6);
        $this->db->order_by("sethome", "asc");
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function _detailtype($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function add_type($nametype, $order,$color,$images) {
        $this->load->database();
        $data = array(
            'nametype' => $nametype,
            'sethome' => $order,
            'color'=>$color,
			'thumb'=>$images
        );
        $this->db->insert('tbtype', $data);
    }

    function del_type($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbtype');
    }

    function edit_type($id, $name, $oder,$color) {
        $this->load->database();
        $data = array(
            'nametype' => $name,
            'sethome' => $oder,
            'color'=>$color,
        );
        $this->db->where('id', $id);
        $this->db->update('tbtype', $data);
    }

}
