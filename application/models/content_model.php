<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Content_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
        $this->load->database();
    }

    function showallcontent_catetype($type, $cate) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where(array("cateid" => $cate, "typeid" => $type));
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
	
	

    /*
     *
     *  Hiển thị toàn bộ item
     *  */

    function show_all_item() {
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     *
     *  Hiển thị toàn bộ cate
     *  */

    function show_all_cate_not_page() {
        $this->db->where('active', 1);
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_typename_bycate($cateid) {
        $this->db->where('id', $cateid);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->typeid;
            }
        }
        return $query->result();
    }

    function get_type_name($typeid){
        $this->db->where('id', $typeid);
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->nametype;
            }
        }
        return $query->result();
    }

    /*
     *
     *  Hiển thị toàn bộ cate cha
     *  */

    function show_all_root_cate($root) {
        $this->db->where('cateroot', $root);
        $this->db->where('active', 1);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_cate() {
        $this->db->where('active', 1);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     *
     *  Hiển thị toàn bộ cate theo type
     *  */

    function show_all_cate_by_type_id($typeid) {
        $this->db->where('typeid', $typeid);
        $this->db->where('cateroot', 0);
        $this->db->where('active', 1);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    // Xu ly menu da cap
    function get_list_cate($typeid) {
        $db->this->where('typeid', $typeid);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     * Lấy danh sách cate con
     */

    function get_sub_cate($cateid) {
        $this->load->database();
        $this->db->where('cateroot', $cateid);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    // ket thuc xu ly menu da cap


    /*
     * Tìm kiếm sản phẩm theo tên
     */
    function search_item($title) {
        $this->db->order_by('id', 'DESC');
        $sql = "select * from tbcontent where namecontent like '%" . $title . "%' or description like '%" . $title . "%' or coins like '%" . $title . "%'";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    /*
     * Hiển thị sản phẩm cùng danh mục
     */

    function releate_item_in_cate($typeid) {
        $this->load->database();
        $this->db->limit(4);
        $this->db->order_by("id", "desc");
        $this->db->where('typeid', $typeid);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function releate_item_by_cate($typeid,$itemid) {
        $this->load->database();
        $this->db->limit(5);
        $this->db->where('active',1);
        $this->db->where('id !=', $itemid);
        $this->db->order_by("id", "desc");
        $this->db->where('cateid', $typeid);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    //chọn sản phẩm theo giá
    function select_price_item($valuemax) {

        $this->load->database();
        $sql = "select * from tbcontent where coins <= " . $valuemax;
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     * Lấy danh sách sản phẩm theo cate
     */

    function showcontent_by_cate($cateid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where(array("cateid" => $cateid));
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     * Lấy danh sách sản phẩm theo type
     */

    function showcontent_by_type($typeid) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where(array("typeid" => $typeid));
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    /*
     * Tổng sản phẩm trong cate
     */

    function total_item_in_cate($cateid) {
        $this->load->database();
        $this->db->where(array('typeid' => $cateid));
        return $this->db->count_all('tbcontent');
    }

    function show_content_cate_type_options($type, $limit) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->limit($limit);
        $this->db->where(array("typeid" => $type));
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function return_id_cate($title = null) {
        $this->load->database();
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->catename))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function return_id_cate_by_item($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                return $result->cateid;
            }
        }
    }
	
	 function return_id_type_by_item($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                return $result->typeid;
            }
        }
    }
	

    function return_id_type($title = null) {
        $this->load->database();
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->nametype))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function return_title_type($title = null) {
        $this->load->database();
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->nametype))) == $title) {
                    return $result->nametype;
                }
            }
        }
    }

    function return_name_product($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                return $result->namecontent;
            }
        }
    }

    function return_title_cate($title = null) {
        $this->load->database();
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->catename))) == $title) {
                    return $result->catename;
                }
            }
        }
    }

    function return_cate_name($cateid = null) {
        $this->load->database();
        $this->db->where('id', $cateid);
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {

                return $result->catename;
            }
        }
    }

    function analys_title($title = null) {
        $this->load->database();
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->namecontent))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function get_cate_app($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                return $result->cateid;
            }
        }
    }

    function show_relate_app($cateid, $id) {
        $this->load->database();
        $this->db->where('cateid', $cateid);
        $this->db->where_not_in('id', $id);
        $this->db->limit(4);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function return_item_name($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                return $result->namecontent;
            }
        }
    }

    function return_typeid_content($itemid) {
        $this->load->database();
        $this->db->where('id', $itemid);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                return $row->typeid;
            }
        }
        return $query->result();
    }

    function analys_title_to_id($title = null) {
        $this->load->database();
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                if (mb_strtolower(url_title($this->removesign($row->namecontent))) == $title) {
                    return $row->id;
                }
            }
        }
    }

    function analys_title_to_cateid($title = null) {

        $this->load->database();
        $query = $this->db->get('tbcatecontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->catename))) == $title) {
                    return $result->typeid;
                }
            }
        }
    }

    function return_type_id($title) {
        $this->load->database();
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->nametype))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function analys_title_to_type($title = null) {
        $this->load->database();
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->nametype))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function read_article($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_suggestion_app() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->limit(10);
        $this->db->where(array("needhave" => 1));
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function update_countlog($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $count = 0;
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $rows) {
                $count = $rows->countlog;
            }
        }
        $this->db->query('UPDATE tbcontent SET countlog=' . ($count + 1) . ' WHERE id=' . $id);
    }

    function update_liked($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $likelog = 0;
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $rows) {
                $likelog = $rows->likelog;
            }
        }
        $this->db->query('UPDATE tbcontent SET likelog=' . ($likelog + 1) . ' WHERE id=' . $id);
    }

    function show_allcontent($num, $offset, $page = 0, $needhave = 0) {
        $this->load->database();
        if ($page <> 0) {
            $this->db->limit($page);
        }
        $this->db->order_by("id", "desc");
        if ($needhave == 3) {
            $this->db->where(array('active' => 1));
        }
        if ($needhave == 2) {
            $this->db->where(array('active' => 1, 'needhave' => 0));
        } elseif ($needhave == 1) {
            $this->db->where(array('active' => 1, 'needhave' => $needhave));
        }
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result($num, $offset);
    }

    function show_all_content_active($num,$offset){
         $this->load->database();
         $this->db->where('active',1);
		$this->db->where('needhave', 0);
        $this->db->order_by("id", "desc");
        $query=$this->db->get('tbcontent',$num,$offset);
        if ($query->num_rows() > 0)
        {
            return $query->result();
        }
        return $query->result();
    }

	function show_all_item_list($num,$offset) {
	    $this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tbcontent',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
    }

    function show_all_item_list_by_type($type,$num,$offset) {
    	$this->load->database();
    	$this->db->where('typeid',$type);
    	$this->db->order_by("id", "desc");
    	$query=$this->db->get('tbcontent',$num,$offset);
    	if ($query->num_rows() > 0)
    	{
    		return $query->result();
    	}
    	return $query->result();
    }

    function show_all_item_list_by_type_home($type,$num,$offset) {
    	$this->load->database();
    	$this->db->where('typeid',$type);
    	$this->db->where('active',1);
    	$this->db->order_by("id", "desc");
    	$query=$this->db->get('tbcontent',$num,$offset);
    	if ($query->num_rows() > 0)
    	{
    		return $query->result();
    	}
    	return $query->result();
    }


    function show_all_content_nor($limit = null) {
        $this->load->database();
        $this->db->order_by("needhave", "asc");
        $this->db->where(array('active' => 1, 'needhave' => 1));
        $this->db->limit($limit);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_content_hot_cate_ajax() {
        $this->load->database();
        $this->db->order_by("id", "random");
        $this->db->where(array('active' => 1, 'needhave' => 1));
        $this->db->limit(1);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_downlog($num, $offset) {
        $this->load->database();
        $this->db->order_by("downlog", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_viewlog($num, $offset) {
        $this->load->database();
        $this->db->order_by("countlog", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_allcontentbycate($cateid, $num, $offset) {
        $this->load->database();
        $this->db->where("cateid", $cateid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_allcontentbytype($typeid, $num, $offset) {
        $this->load->database();
        $this->db->where("typeid", $typeid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_detailscontent($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showcontent_bycate($cateid, $num, $offset) {
        $this->load->database();
        $this->db->where('cateid', $cateid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showcontent_bytype($typeid, $num, $offset) {
        $this->load->database();
        $this->db->where('typeid', $typeid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showcontent_bytypecate($typeid, $cateid, $num, $offset) {
        $this->load->database();
        $this->db->where(array('typeid' => $typeid, 'cateid' => $cateid));
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    // ham tinh tong noi dung theo tung hang muc
    function totalcontent() {
        $this->load->database();
        return $this->db->count_all('tbcatecontent');
    }

    function totalcontentbycate($cateid) {
        $this->load->database();
        $this->db->where('cateid', $cateid);
        return $this->db->count_all('tbcatecontent');
    }

    function totalcontentbytype($typeid) {
        $this->load->database();
        $this->db->where('typeid', $typeid);
        return $this->db->count_all('tbtype');
    }

    function totalbycate($cateid) {
        $this->load->database();
        $this->db->where(array('cateid' => $cateid));
        return $this->db->count_all('tbcatecontent');
    }

    function totalappactive() {
        $this->load->database();
        $query = $this->db->get_where('tbcontent', array('active' => 1));
        $count = $query->num_rows();
        return $count;
    }

    function totalappunactive() {
        $this->load->database();
        $query = $this->db->get_where('tbcontent', array('active' => 0));
        $count = $query->num_rows();
        return $count;
    }

    function totalbytype($typeid) {
        $this->load->database();
        $this->db->where(array('typeid' => $typeid));
        return $this->db->count_all('tbcatecontent');
    }

    function totalbycatetype($typeid, $cateid) {
        $this->load->database();
        $this->db->where(array('typeid' => $typeid, 'cateid' => $cateid));
        return $this->db->count_all('tbcatecontent');
    }

    // ---------------KET THUC ham tinh tong noi dung ------------

    function changestatustype($id = null, $active = null) {
        $this->load->database();
        $data = array('active' => $active);
        $this->db->where('id', $id);
        $this->db->update('tbcontent', $data);
    }

    function set_sort_item_hot($id,$value){
    	$this->load->database();
    	$data = array('sort_num' => $value);
    	$this->db->where('id', $id);
    	$this->db->update('tbcontent', $data);
    }

    function copy_item($new_name,$content_id){
    	 $this->load->database();
    	 $this->db->query("
    	 INSERT INTO tbcontent  (cateid, typeid,description,features,images,coins,ifiles,ifiles_2,ifiles_3,active,datecreated,userid)
       SELECT cateid, typeid,description,features,images,coins,ifiles,ifiles_2,ifiles_3,active,datecreated,userid
       FROM tbcontent
       WHERE id= $content_id
    	 ");
    	 $id = mysql_insert_id();
    	 $this->db->query("
    	 UPDATE tbcontent
SET namecontent='$new_name'
WHERE id = $id
    	 ");


    }
    function add_newcontent($cateid, $typeid, $namecontent, $description, $images, $coins, $ifiles, $ifiles2, $ifiles3, $active, $uid, $features,$status_amount) {

        $this->load->database();
        $data = array(
            'cateid' => $cateid,
            'typeid' => $typeid,
            'namecontent' => $namecontent,
            'description' => $description,
            'features' => $features,
            'images' => $images,
            'coins' => $coins,
            'ifiles' => $ifiles,
            'ifiles_2' => $ifiles2,
            'ifiles_3' => $ifiles3,
            'active' => $active,
            'datecreated' => date("d-m-Y H:i:s"),
            'userid' => $uid,
			'status_amount'=>$status_amount,
        );
        $this->db->insert('tbcontent', $data);
    }

	function add_image_for_item($itemid, $item_image) {

        $this->load->database();
        $data = array(
            'itemid' => $itemid,
            'imageslink' => $item_image,
            'datecreated' => date("d-m-Y H:i:s"),
            'active' => 1
        );
        $this->db->insert('tbl_gallery_item', $data);
    }

    function show_gallery_itemid($itemid){
    	$this->load->database();
        $this->db->where('itemid', $itemid);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_gallery_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

	function show_allgallery(){
    	$this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_gallery_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_image_by_itemId($id){
    	$this->load->database();
    	$this->db->where('itemid',$id);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbl_gallery_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
	function del_image_gallery($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbl_gallery_item');
    }

    function changestatusneedhave($id = null, $needhave = null) {
        $this->load->database();
        $data = array('needhave' => $needhave);
        $this->db->where('id', $id);
        $this->db->update('tbcontent', $data);
    }

    function update_content($id, $cateid, $typeid, $namecontent, $description, $images, $coins, $ifiles, $ifiles2, $ifiles3, $active, $features,$status_amount) {
        $this->load->database();

        if ($images <> null) {
            if ($ifiles <> null || $ifiles2 <> null || $ifiles3 <> null)
                $data = array(
                    'cateid' => $cateid,
                    'typeid' => $typeid,
                    'namecontent' => $namecontent,
                    'description' => $description,
                    'features' => $features,
                    'images' => $images,
                    'coins' => $coins,
                    'ifiles' => $ifiles,
                    'ifiles_2' => $ifiles2,
                    'ifiles_3' => $ifiles3,
                    'active' => $active,
                    'datecreated' => date("d-m-Y H:i:s"),
					'status_amount'=>$status_amount,

                );
            else {
                $data = array(
                    'cateid' => $cateid,
                    'typeid' => $typeid,
                    'namecontent' => $namecontent,
                    'description' => $description,
                    'features' => $features,
                    'images' => $images,
                    'coins' => $coins,
                    'active' => $active,
                    'datecreated' => date("d-m-Y H:i:s"),
					'status_amount'=>$status_amount,
                );
            }
        } else {
            if ($ifiles <> null || $ifiles2 <> null || $ifiles3 <> null)
                $data = array(
                    'cateid' => $cateid,
                    'typeid' => $typeid,
                    'namecontent' => $namecontent,
                    'description' => $description,
                    'features' => $features,
                    'coins' => $coins,
                    'ifiles' => $ifiles,
                    'ifiles_2' => $ifiles2,
                    'ifiles_3' => $ifiles3,
                    'active' => $active,
                    'datecreated' => date("d-m-Y H:i:s"),
					'status_amount'=>$status_amount,
                );
            else {
                $data = array(
                    'cateid' => $cateid,
                    'typeid' => $typeid,
                    'namecontent' => $namecontent,
                    'description' => $description,
                    'features' => $features,
                    'coins' => $coins,
                    'active' => $active,
                    'datecreated' => date("d-m-Y H:i:s"),
					'status_amount'=>$status_amount,
                );
            }
        }
        $this->db->where('id', $id);
        $this->db->update('tbcontent', $data);
    }

    function del_content($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbcontent');
    }

    function removesign($str) {
        $coDau = array("à", "á", "ạ", "ả", "ã", "â", "ầ", "ấ", "ậ", "ẩ", "ẫ", "ă", "ằ", "ắ"
            , "ặ", "ẳ", "ẵ", "è", "é", "ẹ", "ẻ", "ẽ", "ê", "ề", "ế", "ệ", "ể", "ễ", "ì", "í", "ị", "ỉ", "ĩ",
            "ò", "ó", "ọ", "ỏ", "õ", "ô", "ồ", "ố", "ộ", "ổ", "ỗ", "ơ"
            , "ờ", "ớ", "ợ", "ở", "ỡ",
            "ù", "ú", "ụ", "ủ", "ũ", "ư", "ừ", "ứ", "ự", "ử", "ữ",
            "ỳ", "ý", "ỵ", "ỷ", "ỹ",
            "đ",
            "À", "Á", "Ạ", "Ả", "Ã", "Â", "Ầ", "Ấ", "Ậ", "Ẩ", "Ẫ", "Ă"
            , "Ằ", "Ắ", "Ặ", "Ẳ", "Ẵ",
            "È", "É", "Ẹ", "Ẻ", "Ẽ", "Ê", "Ề", "Ế", "Ệ", "Ể", "Ễ",
            "Ì", "Í", "Ị", "Ỉ", "Ĩ",
            "Ò", "Ó", "Ọ", "Ỏ", "Õ", "Ô", "Ồ", "Ố", "Ộ", "Ổ", "Ỗ", "Ơ"
            , "Ờ", "Ớ", "Ợ", "Ở", "Ỡ",
            "Ù", "Ú", "Ụ", "Ủ", "Ũ", "Ư", "Ừ", "Ứ", "Ự", "Ử", "Ữ",
            "Ỳ", "Ý", "Ỵ", "Ỷ", "Ỹ",
            "Đ", "ê", "ù", "à");
        $khongDau = array("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"
            , "a", "a", "a", "a", "a", "a",
            "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
            "i", "i", "i", "i", "i",
            "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"
            , "o", "o", "o", "o", "o",
            "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
            "y", "y", "y", "y", "y",
            "d",
            "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"
            , "A", "A", "A", "A", "A",
            "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "I", "I", "I", "I", "I",
            "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"
            , "O", "O", "O", "O", "O",
            "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
            "Y", "Y", "Y", "Y", "Y",
            "D", "e", "u", "a");
        return str_replace($coDau, $khongDau, $str);
    }

    function get_by_user_id($user_id) {
        $this->db->order_by("id", "desc");
        $this->db->where("userid", $user_id);
        $query = $this->db->get('tbcontent');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function add_app($data = null, $id = null) {
        if ($id == null) {
            $this->db->insert('tbcontent', $data);
            $new_id = $this->db->insert_id();
            return $new_id;
        } else {
            $this->db->where("id", $id);
            $this->db->update('tbcontent', $data);
        }
    }

    function update_version($app_id, $app_file, $change_log, $version_name) {
        $data = array('app_id' => $app_id, 'change_log' => $change_log, 'version_name' => $version_name, 'app_file' => $app_file, 'active' => 1, 'date_created' => date("d-m-Y H:i:s"));
        $this->db->insert('tbl_app_version', $data);
    }

}
