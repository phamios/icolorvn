<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
session_start();

class admincp extends CI_Controller {

	function __construct() {
        parent::__construct();
        $this->load->library('session');
        $this->load->helper('url');
        $this->load->library('upload');
        $this->load->library('pagination');
        $this->load->library('parser');
        $this->load->helper('cookie');
        //$this->load->library('sonclass');
        $this->load->helper(array('form', 'url'));
        @session_start();
    }

    public function index() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            if ($this->checkrole($this->session->userdata('adminnam')) == null || $this->checkrole($this->session->userdata('adminnam')) == "3" || $this->checkrole($this->session->userdata('adminnam')) == "4") {
                $this->load->view("user/pending");
            } else {
                /*  ---- - - -- --REPORT - - - - - -   */
                $this->load->model('user_model');
                $this->load->model('store_model');
                $data['totaluser'] = $this->user_model->totaluser();
                $data['total_member'] = $this->user_model->total_member();
                $data["total_user_list"] = $this->user_model->showalluser();
                $this->load->model('log_model');
                $config['base_url'] = site_url('admincp/index');
                $config['total_rows'] = $this->log_model->total_log();
                $config['per_page'] = 15;
                $config['prev_link'] = 'First';
                $config['next_link'] = 'Next';
                $this->pagination->initialize($config);
                $data["total_log"] = $this->log_model->show_log($config['per_page'], $this->uri->segment(3));
                $data['pages_logs'] = $this->pagination->create_links();
                $data["pageviews"] = $this->log_model->total_log();
                $data['user_active'] = $this->user_model->totaluseractive();
                $data['user_unactive'] = $this->user_model->totaluserunactive();
                $this->load->model("content_model");
                $data["totalapp"] = $this->content_model->totalappactive();
                $data['total_rows'] = $this->log_model->total_log();
                //$this->sonclass->switch_theme("huyxom");
                $data['total_amount'] = $this->store_model->total_amount_order();
                $data['total_items_ped'] = $this->store_model->total_amount_ped();
                $this->load->view('admin/dashboard', $data);
            }
        }
    }

    public function add_cate_hot() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $data['alltype'] = $this->catetype_model->_showalltype();

            if (isset($_REQUEST['submit'])) {
                $nametype = $this->input->post('nametype', true);

                $this->catetype_model->add_type($nametype);

                redirect('admincp/type');
            }
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function set_type_hot($id = null, $status) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('catetype_model');
            $this->catetype_model->set_cate_hot($id, $status);
            redirect('admincp/add_cate_hot');
        }
    }

    public function member() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('user_model');
            $config['base_url'] = site_url('admincp/member');
            $config['total_rows'] = $this->user_model->total_member();
            $config['per_page'] = 50;
            $config['prev_link'] = 'Last';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data['members'] = $this->user_model->_listmember($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['shoutbox'] = 0;
            $data['total_member'] = $this->user_model->total_member();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function searchadmin($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            if (isset($_REQUEST['bttSearch'])) {
                $username = $this->input->post('username', true);
                $data['alladmin'] = $this->admin_model->searchuseradmin($username);
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function gallery() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
        	 $this->load->model('content_model');
	        if (isset($_FILES['upload']['name'])) {
	            // total files //
	            $count = count($_FILES['upload']['name']);
	            // all uploads //
	            $uploads = $_FILES['upload'];
	             $itemid= $this->input->post('itemid', true);

	            for ($i = 0; $i < $count; $i++) {
	                if ($uploads['error'][$i] == 0) {
	                    move_uploaded_file($uploads['tmp_name'][$i], './src/items/' . $uploads['name'][$i]);
	                    //echo $uploads['name'][$i] . "\n";
	                    $this->content_model->add_image_for_item($itemid,$uploads['name'][$i]);
	                }
	            }
	        }
	       	$data['allgallery'] = $this->content_model->show_allgallery();
	        $data['allcontents'] = $this->content_model->show_all_item();
            $this->load->view('admin/dashboard',$data);
        }
    }

    public function del_image_gallery($id){
    	 if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
        	$this->load->model('content_model');
        	$this->content_model->del_image_gallery($id);
        	redirect('admincp/gallery');
        }
    }


    /*
     * ---------------------------
     */

    public function adminuser() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            $config['base_url'] = site_url('admincp/adminuser');
            $config['total_rows'] = $this->admin_model->total_admin();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['alladmin'] = $this->admin_model->show_all_admin($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function checkrole($username) {
        $this->load->model('admin_model');
        return $this->admin_model->check_admin_user($username);
    }

    public function add_useradmin() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('admin_model');
            if (isset($_REQUEST['submit'])) {
                $level = $this->input->post('adminpage', true);
                $pass = $this->input->post('adminpass', true);
                $username = $this->input->post('adminname', true);
                $this->admin_model->add_useradmin($username, md5($pass), $level);
                redirect('admincp/adminuser');
            }
            $this->load->view('admin/dashboard');
        }
    }

    public function menufoot($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('menu_model');
            $this->load->model('post_model');
            $data['all_post'] = $this->post_model->show_all_article();
            $data['allmenu_foot'] = $this->menu_model->showallmenu();
            if ($id <> null) {
                $this->load->model('menu_model');
                $data['menudetails'] = $this->menu_model->getdetailmenu_foot($id);
            }
            if (isset($_REQUEST['edit_submit'])) {
                $menuname = $this->input->post('menuname', true);
                $menulink1 = $this->input->post('menutext_by_news', true);
                $menulink2 = $this->input->post('menutext_by_link', true);
                $menuorder = $this->input->post('menuorder', true);
                $active = $this->input->post('active', true);
                $typemenu = $this->input->post('menutype', true);

                if ($typemenu == 1) {
                    $this->menu_model->_edit_menu($id, $menuroot, $menuname, $menulink1, $menuorder, $active, $typemenu);
                } elseif ($typemenu == 2) {
                    $this->menu_model->_edit_menu($id, $menuroot, $menuname, $menulink2, $menuorder, $active, $typemenu);
                } else {
                    redirect('admincp/menufoot/error');
                }
                redirect('admincp/menufoot');
            }
            if (isset($_REQUEST['submit'])) {
                $menuname = $this->input->post('menuname', true);
                $menulink1 = $this->input->post('menutext_by_news', true);
                $menulink2 = $this->input->post('menutext_by_link', true);
                $menuorder = $this->input->post('menuorder', true);

                $active = $this->input->post('active', true);
                $typemenu = $this->input->post('menutype', true);
                if ($typemenu == 1) {
                    $this->menu_model->_addmenu(null, $menuname, $menulink1, $menuorder, $active, $typemenu);
                } elseif ($typemenu == 2) {
                    $this->menu_model->_addmenu(null, $menuname, $menulink2, $menuorder, $active, $typemenu);
                } else {
                    redirect('admincp/menufoot/error');
                }
                redirect('admincp/menufoot');
            }
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_menufoot($id = null) {
        $this->load->model('menu_model');
        $this->menu_model->deletemenu($id);
        redirect('admincp/menufoot');
    }

    public function del_menutop($id = null) {
        $this->load->model('menu_model');
        $this->menu_model->deletemenu_root($id);
        redirect('admincp/menutop');
    }

    public function menutop($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('menu_model');
            $this->load->model('post_model');
            $data['all_post'] = $this->post_model->show_all_article();
            $data['allmenu_foot'] = $this->menu_model->showallmenu_root();
            if ($id <> null) {
                $this->load->model('menu_model');
                $data['menudetails'] = $this->menu_model->getdetailmenu_top($id);
            }
            if (isset($_REQUEST['edit_submit'])) {
                $menuname = $this->input->post('menuname', true);
                $menulink1 = $this->input->post('menutext_by_news', true);
                $menulink2 = $this->input->post('menutext_by_link', true);
                $menuorder = $this->input->post('menuorder', true);
                $active = $this->input->post('active', true);
                $typemenu = $this->input->post('menutype', true);

                if ($typemenu == 1) {
                    $this->menu_model->_edit_menu_root($id, $menuroot, $menuname, $menulink1, $menuorder, $active, $typemenu);
                } elseif ($typemenu == 2) {
                    $this->menu_model->_edit_menu_root($id, $menuroot, $menuname, $menulink2, $menuorder, $active, $typemenu);
                } else {
                    redirect('admincp/menutop/error');
                }
                redirect('admincp/menutop');
            }
            if (isset($_REQUEST['submit'])) {
                $menuname = $this->input->post('menuname', true);
                $menulink1 = $this->input->post('menutext_by_news', true);
                $menulink2 = $this->input->post('menutext_by_link', true);
                $menuorder = $this->input->post('menuorder', true);

                $active = $this->input->post('active', true);
                $typemenu = $this->input->post('menutype', true);
                if ($typemenu == 1) {
                    $this->menu_model->_addmenu_root(null, $menuname, $menulink1, $menuorder, $active, $typemenu);
                } elseif ($typemenu == 2) {
                    $this->menu_model->_addmenu_root(null, $menuname, $menulink2, $menuorder, $active, $typemenu);
                } else {
                    redirect('admincp/menutop/error');
                }
                redirect('admincp/menutop');
            }
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_useradmin($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('admin_model');
            $this->load->model('menu_model');

            if (isset($_REQUEST['submit'])) {
                $level = $this->input->post('adminpage', true);
                $pass = $this->input->post('adminpass', true);
                $username = $this->input->post('adminname', true);
                $this->admin_model->edit_useradmin($id, md5($pass), $level);
                redirect('admincp/adminuser');
            }

            $data['listmenu'] = $this->menu_model->showmenubyorder(2);
            $data['adminuser'] = $this->admin_model->getDetailsAdmin($id);

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_useradmin($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            $this->admin_model->deladmin($id);
            redirect('admincp/adminuser');
        }
    }

    public function statuschange($id = null, $active = null) {
        $this->load->model('catetype_model');
        $this->catetype_model->changestatustype($id, $active);
        redirect('admincp/type');
    }

    public function type() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('catetype_model');
            $data['alltype'] = $this->catetype_model->_showalltype();

            if (isset($_REQUEST['submit'])) {
                $nametype = $this->input->post('nametype', true);
                $this->catetype_model->add_type($nametype);
                redirect('admincp/type');
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_type() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            //--------------BEGIN Function ----------------------------------
            $this->load->model('report_model');
            $this->load->model('user_model');
            //--------------END Function ----------------------------------
            $this->load->model('catetype_model');
            $data['alltype'] = $this->catetype_model->_showalltype();
            if (isset($_REQUEST['submit'])) {
                $nametype = $this->input->post('nametype', true);
                $typeorder = $this->input->post('typeorder', true);
                $color = $this->input->post('colorpicker', true);
				$mypath = "./src/images_cate";
				$images = $this->do_upload_image($mypath, 'thumbs');
                $this->catetype_model->add_type($nametype, $typeorder, $color,$images);
                redirect('admincp/type');
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_type($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            if (isset($_REQUEST['submit'])) {
                $typeid = $id;
                $nametype = $this->input->post('nametype', true);
                $typeorder = $this->input->post('typeorder', true);
                $color = $this->input->post('colorpicker', true);
                $this->catetype_model->edit_type($typeid, $nametype, $typeorder, $color);
                redirect('admincp/type');
            }

            $data['type'] = $this->catetype_model->_detailtype($id);

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_type($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $this->catetype_model->del_type($id);
            redirect('admincp/type');
        }
    }

    // slide image
    public function slide() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('slide_model');
            $data['slide_list'] = $this->slide_model->show_slide();
            if (isset($_REQUEST['bttsubmit'])) {
                $mypath = "./src/slidejs";
                $images = $this->do_upload_image_slide($mypath, 'images');
                $link = $this->input->post('link_slide', true);
                $this->slide_model->add_slide($images, $link);
                redirect('admincp/slide');
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_slide($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('slide_model');
            $this->slide_model->del_slide($id);
            redirect('admincp/slide');
        }
    }

    //----end slide image
    //banner images
    public function advertis() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('banner_link_model');
            $data['slide_list'] = $this->banner_link_model->show_slide();
            if (isset($_REQUEST['bttsubmit'])) {
                $mypath = "./src/slidejs";
                $images = $this->do_upload_image($mypath, 'images');
                $link = $this->input->post('link_slide', true);
                $position = $this->input->post('position', true);
                $this->banner_link_model->add_slide($images, $link, $position);
                redirect('admincp/advertis');
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_banner($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('banner_link_model');
            $this->banner_link_model->del_slide($id);
            redirect('admincp/advertis');
        }
    }

    //-----end banner images
    public function activecatetype($id = null, $active = null) {

        $this->load->model('catetype_model');
        $this->catetype_model->changestatus($id, $active);
        redirect('admincp/categorytype');
    }

    public function site_config() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('config_model');
            $data['listconfig'] = $this->config_model->show_config_all();
            if (isset($_REQUEST['bttEditConfig'])) {
                $contact_1 = $this->input->post('contact_1', true);
                $contact_2 = $this->input->post('contact_2', true);
                $contact_3 = $this->input->post('contact_3', true);
                $contact_4 = $this->input->post('contact_4', true);
                $contact_5 = $this->input->post('contact_5', true);
                $tax = $this->input->post('tax', true);
                $facebook = $this->input->post('facebook', true);
                $twitter = $this->input->post('twitter', true);
                $youtube = $this->input->post('youtube', true);
                $hotline_1 = $this->input->post('hotline_1', true);
                $hotline_2 = $this->input->post('hotline_2', true);
                $hotline_3 = $this->input->post('hotline_3', true);
                $hotline_4 = $this->input->post('hotline_4', true);
                $hotline_5 = $this->input->post('hotline_5', true);
                $siteconfig = $this->input->post('sitename', true);
                $meta1 = $this->input->post('meta1', true);
                $meta2 = $this->input->post('meta2', true);

                $mypath = "./src/logo";
                $logo = $this->do_upload_image($mypath, 'logo_file');
                $this->config_model->edit_setting($meta1, $meta2, $siteconfig, 1, $contact_1, $contact_2, $contact_3, $contact_4, $contact_5, $tax, $facebook, $twitter, $youtube, $hotline_1, $hotline_2, $hotline_3, $hotline_4, $hotline_5, $logo);
                redirect('admincp/site_config');
            }

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function report() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cart_model');
            $this->load->model('user_model');
            $this->load->model('content_model');
            $data['allorder'] = $this->cart_model->show_all_cart();
            $data['customers'] = $this->user_model->show_customer();
            $data['listitems'] = $this->content_model->show_all_item();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function update_status_cart($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('cart_model');
            $this->cart_model->update_status_cart($id);
            redirect("admincp/report");
        }
    }

    public function add_config() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('site_config');
            redirect('admincp/site_config');
        }
    }

    public function del_config($id) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            $this->admin_model->del_config($id);
            redirect('admincp/site_config');
        }
    }

    public function edit_config($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('admin_model');
            if (isset($_REQUEST['bttsubmit'])) {
                $name = $this->input->post('config_name', true);
                $value = $this->input->post('noidung', true);
                $this->admin_model->update_config($id, $name, $value);
                redirect('admincp/site_config');
            }
            $data['configs'] = $this->admin_model->details_config($id);

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function categorytype() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            if (isset($_REQUEST['submit'])) {
                $catename = $this->input->post('namecategory', true);
                $typeid = $this->input->post('typecate', true);
                $cateroot = $this->input->post('cateroot', true);
                $active = $this->input->post('active', true);
                $this->catetype_model->add_categorytype($typeid, $catename, $cateroot, $active);
                redirect('admincp/categorytype');
            }

            $data['alltype'] = $this->catetype_model->_showalltype();
            //---------------------------------Paging
            $config['base_url'] = site_url('admincp/categorytype');
            $config['total_rows'] = $this->catetype_model->totalcate();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['allcate'] = $this->catetype_model->show_allcategory($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            //------------------------------End Paging
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_cate() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            if (isset($_REQUEST['submit'])) {
                $catename = $this->input->post('namecategory', true);
                $typeid = $this->input->post('typecate', true);
                $cateroot = $this->input->post('cateroot', true);
                $active = $this->input->post('active', true);
                $this->catetype_model->add_categorytype($typeid, $catename, $cateroot, $active);
                redirect('admincp/categorytype');
            }

            $data['alltype'] = $this->catetype_model->_showalltype();
            //---------------------------------Paging
            $config['base_url'] = site_url('admincp/categorytype');
            $config['total_rows'] = $this->catetype_model->totalcate();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['allcate'] = $this->catetype_model->show_allcategory($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            //------------------------------End Paging
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_catecontent($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $this->catetype_model->del_category($id);
            redirect('admincp/categorytype');
        }
    }

    public function edit_catecontent($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            if (isset($_REQUEST['submit'])) {
                $catename = $this->input->post('namecategory', true);
                $typeid = $this->input->post('typecate', true);
                $cateroot = $this->input->post('cateroot', true);
                $active = $this->input->post('active', true);
                $this->catetype_model->edit_categorytype($id, $typeid, $catename, $cateroot, $active);
                redirect('admincp/categorytype');
            }

            $data['alltype'] = $this->catetype_model->_showalltype();
            $data['catedetails'] = $this->catetype_model->showdetailscate($id);

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function status_member($id = null, $active = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('user_model');
            $this->user_model->changestatustype($id, $active);
            redirect('admincp/usercp');
        }
    }

    public function active_app($id = null, $active = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('content_model');
            $this->content_model->changestatustype($id, $active);
            redirect('admincp/sitecontent');
        }
    }

    public function copy_item(){
    	if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
        	$this->load->model('content_model');

        	$data['allcontents'] = $this->content_model->show_all_item();
        	if (isset($_REQUEST['submit'])) {
                $content_id = $this->input->post('content_id', true);
                $new_name = $this->input->post('new_name',true);
                $this->content_model->copy_item($new_name,$content_id);
                redirect('admincp/sitecontent');
        	}
        	 $this->load->view('admin/dashboard', $data);
        }

    }
    public function sitecontent() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {


            $this->load->model('catetype_model');
            $this->load->model('content_model');
            $data['alltype'] = $this->catetype_model->_showalltype();
            $data['allcate'] = $this->catetype_model->showllcate();
            //---------------------------------Paging
            $config['base_url'] = site_url('admincp/sitecontent');
            $config['total_rows'] = $this->content_model->totalcontent();
            $config['per_page'] = 30;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            if (isset($_REQUEST['submit'])) {
            	$typeid = $this->input->post('select_type',true);
            	$data['allcontents'] = $this->content_model->show_all_item_list_by_type($typeid,$config['per_page'], $this->uri->segment(3));

            }else{
            	$data['allcontents'] = $this->content_model->show_all_item_list($config['per_page'], $this->uri->segment(3));
            }

            $data['pages'] = $this->pagination->create_links();
            //------------------------------End Paging
            $data['content_hot'] = $this->content_model->show_all_content_nor(10);

            $this->load->view('admin/dashboard', $data);
        }
    }



    public function del_sitecontent($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('content_model');
            if ($id == null) {

            } else {
                $this->content_model->del_content($id);
            }
            redirect('admincp/sitecontent');
        }
    }



    public function edit_sitecontent($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $this->load->model('content_model');
            $data['alltype'] = $this->catetype_model->_showalltype();
            //---------------------------------POST
            if (isset($_REQUEST['submit'])) {
                $typeid = $this->input->post('typeid', true);
				$status_amount = $this->input->post('status_amount',true);
                $cateid = $this->input->post('cateid', true);
                $coins = $this->input->post('coins', true);
                $namecontent = $this->input->post('namecontent', true);
                $description = $this->input->post('description', true);
                $features = $this->input->post('features', true);
                $active = $this->input->post('active', true);
                $mypath = "./src/imagescontent";
                $image = $this->do_upload_image($mypath, 'images');
                $ifiles2 = $this->do_upload_image($mypath, 'ifiles_2');
                $ifiles3 = $this->do_upload_image($mypath, 'ifiles_3');
                $mypathfile = "./apps";
                $ifiles = $this->do_upload_file($mypathfile, 'ifiles');
                $this->content_model->update_content($id, $cateid, $typeid, $namecontent, $description, $image, $coins, $ifiles, $ifiles2, $ifiles3, $active, $features,$status_amount);
                redirect('admincp/sitecontent');
            }
            //------------------------------End POST
            $data['contents'] = $this->content_model->show_detailscontent($id);

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_sitecontent() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('catetype_model');
            $this->load->model('content_model');
            $data['alltype'] = $this->catetype_model->_showalltype();
            //$data['allcate'] = $this->catetype_model->showllcate();
            //---------------------------------POST
            if (isset($_REQUEST['submit'])) {
                $typeid = $this->input->post('typeid', true);
				$status_amount = $this->input->post('status_amount',true);
                $cateid = $this->input->post('cateid', true);
                $coins = $this->input->post('coins', true);
                $namecontent = $this->input->post('namecontent', true);
                $description = $this->input->post('description', true);
                $features = $this->input->post('features', true);
                $active = $this->input->post('active', true);
                $mypath = "./src/imagescontent";
                if (!$image = $this->do_upload_image($mypath, 'images')) {
                    $error = array('error' => $this->upload->display_errors());
                    //var_dump($error);die();
                }

                $ifiles2 = $this->do_upload_image($mypath, 'ifiles_2');
                $ifiles3 = $this->do_upload_image($mypath, 'ifiles_3');
                $mypathfile = "./apps";

                if (!$ifiles = $this->do_upload_file($mypathfile, 'ifiles')) {
                    $error = array('error' => $this->upload->display_errors());
                    // exit();
                    // $this->load->view( 'upload_form', $error );
                    //var_dump($error);exit();
                }

                $this->content_model->add_newcontent($cateid, $typeid, $namecontent, $description, $image, $coins, $ifiles, $ifiles2, $ifiles3, $active, $this->session->userdata('adminid'), $features,$status_amount);
                redirect('admincp/sitecontent');
            }
            //------------------------------End POST
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function ajaxtypetocate($id) {

        $this->load->model('catetype_model');
        $catebytype = $this->catetype_model->_show_cateogry_by_type($id);

        echo "<select name='cateid'>";
        if ($catebytype <> null) {
            foreach ($catebytype as $row) {
                echo '<option value=' . $row->id . '>' . $row->catename . '</option>';
            }
        } else {
            echo '<option value=0 >-----------------</option>';
        }
        echo '</select>';
    }

    public function show_type_main($value=null,$id=null) {

    	$this->load->model('catetype_model');
    	$this->catetype_model->set_type_main($id,$value);
    }

    public function set_sorthot_type($value=null,$id=null) {

    	$this->load->model('catetype_model');
    	$this->catetype_model->set_type_hot_main($id,$value);
    }



    public function itemhot_sort($value=null,$id=null){
    	$this->load->model('content_model');
    	$this->content_model->set_sort_item_hot($id,$value);
    }

    public function ajaximagegallery($id){
    	$this->load->model('content_model');
    	$result = $this->content_model->show_image_by_itemId($id);
    	if(!$result){
    		echo "Hiện tại sản phẩm này chưa có ảnh đính kèm.";
    	}else{
	    	echo '<ul class="ace-thumbnails">';
	    	foreach($result as $img){
	    		echo '<li>';
	    			echo '<a href="'. base_url('src/items/'.$img->imageslink). '" > ';
	    				echo '<img alt="150x150" width="150" height="150" src="'.base_url('src/items/'.$img->imageslink).'" />';
	    			echo '</a>';
	    			echo '<div class="tools tools-bottom">';
	    				echo '<a href="'.site_url('admincp/del_image_gallery/'.$img->id).'"> <i class="icon-remove red"></i> Xóa </a>';
	    			echo '</div>';
	    		echo '</li>';

	    	}
	    	echo '</ul>';
    	}
    }

    public function notification() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_REQUEST['notifysubmit'])) {
                $title = $this->input->post('tieude', true);
                $content = $this->input->post('noidung', true);
				foreach($_POST['items_id'] as $item_id){

					if (strlen($title) <= 0 && strlen($content) <= 0) {
						redirect('admincp/notification');
					} else {
						$this->load->model('post_model');
						$id = $this->post_model->add_notify($title, $content);
						$this->post_model->add_notify_item($id,$item_id);
						redirect('admincp/notification');
					}
				}


            }
            $this->load->model('post_model');
			$this->load->model('content_model');
            $config['base_url'] = site_url('admincp/notification');
            $config['total_rows'] = $this->post_model->totalnotify();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['receivesmo'] = $this->post_model->show_notify($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();

			$data['all_notify_item'] = $this->post_model->show_all_notify_item();
			$data['products'] = $this->content_model->show_all_item();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_notification() {
		if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
			$this->load->model('content_model');
			$data['products'] = $this->content_model->show_all_item();
			if (isset($_REQUEST['notifysubmit'])) {
                $title = $this->input->post('tieude', true);
                $content = $this->input->post('noidung', true);
				foreach($_POST['items_id'] as $item_id){

					if (strlen($title) <= 0 && strlen($content) <= 0) {
						redirect('admincp/notification');
					} else {
						$this->load->model('post_model');
						$id = $this->post_model->add_notify($title, $content);
						$this->post_model->add_notify_item($id,$item_id);
						redirect('admincp/notification');
					}
				}


            }
			$this->load->view('admin/dashboard', $data);
		}

    }

    public function delnotify($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            if ($id == null) {

            } else {
                $this->post_model->delnotify($id);
            }
            redirect('admincp/notification');
        }
    }

    public function blockip() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_REQUEST['ipsubmit'])) {
                $ipaddress = $this->input->post('ipaddress', true);
                $this->load->model('log_model');
                $this->log_model->add_ipaddress($ipaddress);
                redirect('admincp/blockip');
            }
            $data['shoutbox'] = 0;
            $data['adminname'] = $this->session->userdata('adminnam');
            $data['adminid'] = $this->session->userdata('adminid');
            $this->load->model('log_model');
            $config['base_url'] = site_url('admincp/blockip');
            $config['total_rows'] = $this->log_model->_totalrows();
            $config['per_page'] = 30;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['ipblocks'] = $this->log_model->listpageipaddress($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function add_ip() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            if (isset($_REQUEST['ipsubmit'])) {
                $ipaddress = $this->input->post('ipaddress', true);
                $this->load->model('log_model');
                $this->log_model->add_ipaddress($ipaddress);
                redirect('admincp/blockip');
            }
            $data['shoutbox'] = 0;
            $data['adminname'] = $this->session->userdata('adminnam');
            $data['adminid'] = $this->session->userdata('adminid');
            $this->load->model('log_model');
            $config['base_url'] = site_url('admincp/blockip');
            $config['total_rows'] = $this->log_model->_totalrows();
            $config['per_page'] = 30;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['ipblocks'] = $this->log_model->listpageipaddress($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();


            $this->load->view('admin/dashboard', $data);
        }
    }

    public function deleteip($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('log_model');
            if (is_numeric($id)) {
                $this->log_model->deleteip($id);
                redirect('admincp/blockip');
            } else {
                redirect('admincp/blockip');
            }
        }
    }

    public function login() {

        if (isset($_REQUEST['submit'])) {
            $username = $this->input->post('uname', true);
            $pass1 = $this->input->post('pass1', true);
            $this->load->model('admin_model');
            $result = $this->admin_model->checkuser($username, md5($pass1));

            if ($result == null) {
                redirect('admincp/login/' . rand(1, 10)); //lÃƒÂ¡Ã‚Â»Ã¢â‚¬â€�i sai username hoÃƒÂ¡Ã‚ÂºÃ‚Â·c pass
            } else {
                $newdata = array(
                    'adminid' => $result,
                    'adminnam' => $username
                );
                $this->session->set_userdata($newdata);
                redirect('admincp/index');
            }
        }

        $this->load->view('admin/login');
    }

    public function usercp() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('user_model');
            $this->load->model('usertype_model');

            $data['adminname'] = $this->session->userdata('adminnam');
            $data['adminid'] = $this->session->userdata('adminid');
            $data['shoutbox'] = 0;
            $config['base_url'] = site_url('admincp/usercp');
            $config['total_rows'] = $this->user_model->totaluser();
            $config['per_page'] = 10;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['listusers'] = $this->user_model->_listuser($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['totaluser'] = $this->user_model->totaluser();
            $data['listusertype'] = $this->usertype_model->get_all();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function pushmail($from, $to, $subject, $message) {
        $config = Array(
            'protocol' => 'smtp',
            'smtp_host' => 'ssl://smtp.googlemail.com',
            'smtp_port' => 465,
            'smtp_user' => 'sonpx@store8x.com',
            'smtp_pass' => 'Xuanson123!',
            'mailtype' => 'html',
            'charset' => 'utf-8'
        );
        $this->load->library('email', $config);
        $this->email->set_newline("\r\n");
        $this->email->from($from, 'M8X-Application Mobile Content-Store8x.com');
        $this->email->to($to);

        $this->email->subject($subject);
        $this->email->message($message);
        // Set to, from, message, etc.

        $result = $this->email->send();
        echo $result;
    }

    public function needhave($id = null, $needhave) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model("content_model");
            $this->content_model->changestatusneedhave($id, $needhave);
            redirect("admincp/sitecontent");
        }
    }

    public function newcate($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            if ($id <> null) {
                $this->load->model('post_model');
                $data['details'] = $this->post_model->newscate_details($id);
            }
            $this->load->model('post_model');
            if (isset($_REQUEST['submit'])) {
                $tieude = $this->input->post('namecategory', true);
                $visible = $this->input->post('active', true);
                $type = $this->input->post('type', true);
                $this->post_model->add_catenews($tieude, $visible, $type);
                redirect('admincp/newcate');
            }
            if (isset($_REQUEST['updatesubmit'])) {
                $tieude = $this->input->post('namecategory', true);
                $visible = $this->input->post('active', true);
                $type = $this->input->post('type', true);
                $this->post_model->edit_catenews($id, $tieude, $visible, $type);
                redirect('admincp/newcate');
            }
            $data['allcatenews'] = $this->post_model->show_all_cate_news();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function active_newscate($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->show_newscate($id);
            redirect('admincp/newcate');
        }
    }

    public function unactive_newscate($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->hidden_newscate($id);
            redirect('admincp/newcate');
        }
    }

    public function del_newscate($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->del_newscate($id);
            redirect('admincp/newcate');
        }
    }

    public function content() {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {


            $this->load->model('post_model');
            $config['base_url'] = site_url('admincp/content');
            $config['total_rows'] = $this->post_model->totalarticle();
            $config['per_page'] = 5;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['listcontent'] = $this->post_model->show_article($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['totalcontent'] = $this->post_model->totalarticle();
            if (isset($_REQUEST['submit'])) {
                $tieude = $this->input->post('tieude', true);
                $noidung = $this->input->post('noidung', true);
                $active = $this->input->post('active', true);
                $menuid = $this->input->post('categorycontent', true);
                $mypath = "./src/news";
                $images = $this->do_upload_image($mypath, 'images');
                $this->post_model->add_article($menuid, $this->session->userdata('adminid'), $tieude, $noidung, $active, $images);
                redirect('admincp/content');
            }
            $this->load->model('menu_model');
            $data['rootmenu'] = $this->menu_model->showmenubyorder(2);
            $data['allcatenews'] = $this->post_model->show_all_cate_news();


            $this->load->view('admin/dashboard', $data);
        }
    }

    public function warranty() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('warranty_model');
            if (isset($_REQUEST['submit'])) {
                $name = $this->input->post('namewarra', true);
                $link = $this->input->post('linkwarra', true);
                $this->warranty_model->add_warranty($name, $link);
                redirect('admincp/warranty');
            }
            $data['warran'] = $this->warranty_model->show_all_link();

            $this->load->view('admin/dashboard', $data);
        }
    }

    public function del_warranty($id = null) {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('warranty_model');
            $this->warranty_model->del_warranty($id);
            redirect('admincp/warranty');
        }
    }

    public function add_news() {
        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('post_model');
            $config['base_url'] = site_url('admincp/content');
            $config['total_rows'] = $this->post_model->totalarticle();
            $config['per_page'] = 5;
            $config['prev_link'] = 'Đầu';
            $config['next_link'] = 'Tiếp';
            $this->pagination->initialize($config);
            $data['listcontent'] = $this->post_model->show_article($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['totalcontent'] = $this->post_model->totalarticle();
            if (isset($_REQUEST['submit'])) {
                $tieude = $this->input->post('tieude', true);
                $noidung = $this->input->post('noidung', true);
                $active = $this->input->post('active', true);
                $menuid = $this->input->post('categorycontent', true);
                $mypath = "./src/news";
                $images = $this->do_upload_image($mypath, 'images');
                $this->post_model->add_article($menuid, $this->session->userdata('adminid'), $tieude, $noidung, $active, $images);
                redirect('admincp/content');
            }
            $this->load->model('menu_model');
            $data['allcatenews'] = $this->post_model->show_all_cate_news();
            $data['rootmenu'] = $this->menu_model->showmenubyorder(2);


            $this->load->view('admin/dashboard', $data);
        }
    }

    public function edit_news($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {

            $this->load->model('post_model');
            $data['content_detail'] = $this->post_model->showdetailpost($id);
            if (isset($_REQUEST['submit'])) {
                $tieude = $this->input->post('tieude', true);
                $noidung = $this->input->post('noidung', true);
                $active = $this->input->post('active', true);
                $menuid = $this->input->post('categorycontent', true);
                $mypath = "./src/news";
                $images = $this->do_upload_image($mypath, 'images');
                $this->post_model->edit_post($id, $menuid, $this->session->userdata('adminid'), $tieude, $noidung, $active, $images);
                redirect('admincp/content');
            }
            $this->load->model('menu_model');
            $data['rootmenu'] = $this->menu_model->showmenubyorder(2);
            $data['allcatenews'] = $this->post_model->show_all_cate_news();
            $data['details'] = $this->post_model->showdetailpost($id);
            $this->load->view('admin/dashboard', $data);
        }
    }

    public function delcontent($id = null) {

        if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('post_model');
            $this->post_model->delcontent($id);
            redirect('admincp/content');
        }
    }

    function do_upload_image($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function resize_image($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 300;
        $img_cfg_thumb['height'] = 200;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

    function do_upload_image_slide($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image_slide($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function resize_image_slide($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 540;
        $img_cfg_thumb['height'] = 210;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }

    function do_upload_file($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'jar|jad|apk|ipa';
        $config['max_size'] = '500000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            //echo $filename; die();

            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                //print_r($error);
                return null;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }

    public function store(){
         if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('store_model');
            $this->load->model('content_model');
            $this->load->model('catetype_model');

            $config['base_url'] = site_url('admincp/store');
            $config['total_rows'] = $this->store_model->total_store();
            $config['per_page'] = 20;
            $config['prev_link'] = 'First';
            $config['next_link'] = 'Next';
            $this->pagination->initialize($config);
            $data["total_store"] = $this->store_model->show_all_store($config['per_page'], $this->uri->segment(3));
            $data['pages'] = $this->pagination->create_links();
            $data['items'] = $this->content_model->show_all_item();
            $data['alltype'] = $this->catetype_model->_showalltype();
            $data['total_amount'] = $this->store_model->total_amount_order();
            $data['total_items_ped'] = $this->store_model->total_amount_ped();
            $this->load->view('admin/dashboard',$data);
        }
    }

    public function del_store($id){
    	 if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
        	$this->load->model('store_model');
        	$this->store_model->del_store($id);
        	redirect('admincp/store');
        }
    }

    public function ad_store(){
         if ($this->session->userdata('adminnam') == null) {
            redirect('admincp/login');
        } else {
            $this->load->model('store_model');
            $this->load->model('content_model');
            $this->load->model('catetype_model');
             if (isset($_REQUEST['submit'])) {
                $typeid = $this->input->post('type_id', true);
                $item_id = $this->input->post('item_id', true);
                $customer_name = $this->input->post('customer_name', true);
                $price = $this->input->post('price',true);
                $amount = $this->input->post('amount',true);
                $status = $this->input->post('status',true);
                $specs = $this->input->post('specs',true);

                $this->store_model->add_store($typeid,$item_id,$price,$amount,$customer_name,$status,$specs);
                redirect('admincp/store');
            }
            $data['pages'] = $this->pagination->create_links();
            $data['items'] = $this->content_model->show_all_item();
            $data['alltype'] = $this->catetype_model->_showalltype();
            $this->load->view('admin/dashboard',$data);
        }
    }

    public function logout() {
        $this->session->unset_userdata('adminid');
        $this->session->unset_userdata('adminnam');
        redirect('admincp');
    }

}
