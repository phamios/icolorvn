<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Api extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->model('app_content');
        $this->load->helper(array('form', 'url'));
    }

    public function index() {
        redirect('admincp');
    }

    public function cate() { 
        $response = array();
        $response["store8x"] = array();
        $lists = $this->app_content->get_cate();
        foreach ($lists as $value) {
            $item = array();
            $item['id'] = $value->id;
            $item['catename'] = $value->catename;
            $item['cateroot'] = $value->cateroot;
            $item['cateimages'] = $value->cateimages;
            $item['active'] = $value->active;
            array_push($response["store8x"], $item);
        }

        echo json_encode($response);
    }
    
    public function product($cateid=null){
         $response = array();
        $response["store8x"] = array();
        $lists = $this->app_content->get_cate();
        foreach ($lists as $value) {
            $item = array();
            $item['id'] = $value->id;
            $item['catename'] = $value->catename;
            $item['cateroot'] = $value->cateroot;
            $item['cateimages'] = $value->cateimages;
            $item['active'] = $value->active;
            array_push($response["store8x"], $item);
        } 
        echo json_encode($response);
    }

}

?>