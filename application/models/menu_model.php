<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Menu_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function showallmenu() {
        $this->load->database();
        $this->db->order_by("menuid", "desc");
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function showallmenu_root() {
        $this->load->database();
        $this->db->order_by("menuid", "desc");
        $query = $this->db->get('tblroot_menu');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function show_menu_1(){
        $this->load->database();
        $this->db->limit(5);
        $this->db->order_by("menuid", "desc");
        $query = $this->db->get('tblroot_menu');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }
    
    function show_menu_2(){
       $this->load->database();
       $this->db->limit(5);
        $this->db->order_by("menuid", "desc");
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function getdetailmenu_foot($id) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function getdetailmenu_top($id) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $query = $this->db->get('tblroot_menu');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function getmenurootbychild($id = null) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function showmenubyorder($order = 0) {
        $this->load->database();
        if ($order == 1) {
            $this->db->order_by("menuorder", "desc");
        } elseif ($order == 2) {
            $this->db->order_by("menuorder", "asc");
        } else {
            
        }
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function showmenubyorderbyroot($order = 0) {
        $this->load->database();
        if ($order == 1) {
            $this->db->order_by("menuorder", "desc");
        } elseif ($order == 2) {
            $this->db->order_by("menuorder", "asc");
        } else {
            
        }
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    /*
     * Typemenu == 1 : là menu hiển thị trên trang chủ
     *  Typemenu = 0: là category;
     */

    function _addmenu($menuroot, $menuname, $menutext, $menuorder, $menuactive, $typemenu) {
        $this->load->database();
        $data = array(
            'menuroot' => $menuroot,
            'menuname' => $menuname,
            'menutext' => $menutext,
            'menuorder' => $menuorder,
            'menuactive' => $menuactive,
            'typemenu' => $typemenu
        );
        $this->db->insert('tblmenus', $data);
    }

    function _edit_menu($menuid, $menuroot, $menuname, $menutext, $menuorder, $menuactive, $typemenu) {
        $data = array(
            'menuroot' => $menuroot,
            'menuname' => $menuname,
            'menutext' => $menutext,
            'menuorder' => $menuorder,
            'menuactive' => $menuactive,
            'typemenu' => $typemenu
        );
        $this->db->where('menuid', $menuid);
        $this->db->update('tblmenus', $data);
    }

    function deletemenu($id) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $this->db->delete('tblmenus');
    }

    /*
     * Xử lý menu chính
     * Typemenu == 1 : là menu hiển thị trên trang chủ
     *  Typemenu = 0: là category;
     */

    function _addmenu_root($menuroot, $menuname, $menutext, $menuorder, $menuactive, $typemenu) {
        $this->load->database();
        $data = array(
            'menuroot' => $menuroot,
            'menuname' => $menuname,
            'menutext' => $menutext,
            'menuorder' => $menuorder,
            'menuactive' => $menuactive,
            'typemenu' => $typemenu
        );
        $this->db->insert('tblroot_menu', $data);
    }

    function _edit_menu_root($menuid, $menuroot, $menuname, $menutext, $menuorder, $menuactive, $typemenu) {
        $data = array(
            'menuroot' => $menuroot,
            'menuname' => $menuname,
            'menutext' => $menutext,
            'menuorder' => $menuorder,
            'menuactive' => $menuactive,
            'typemenu' => $typemenu
        );
        $this->db->where('menuid', $menuid);
        $this->db->update('tblroot_menu', $data);
    }

    function deletemenu_root($id) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $this->db->delete('tblroot_menu');
    }

}
