<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Post_model extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    //ARTICLE--------------------------------------
    function add_article($menuid, $userid, $title, $content, $active, $images) {
        $this->load->database();
        $data = array(
            'menuid' => $menuid,
            'userid' => $userid,
            'title' => $title,
            'content' => $content,
            'createdate' => date("d-m-Y h:i:s"),
            'active' => $active,
            'images' => $images,
        );
        $this->db->insert('tbpost', $data);
    }

    function _showappbytupe($type, $num, $offset) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where("typeid", $type);
        $query = $this->db->get('tbcontent', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        } else {
            return null;
        }
    }

    function edit_post($id, $menuid, $userid, $title, $content, $active, $images) {
        $this->load->database();
        if ($images == null) {
            $data = array(
                'menuid' => $menuid,
                'userid' => $userid,
                'title' => $title,
                'content' => $content,
                'createdate' => date("d-m-Y h:i:s"),
                'active' => $active
            );
        } else {
            $data = array(
                'menuid' => $menuid,
                'userid' => $userid,
                'title' => $title,
                'content' => $content,
                'createdate' => date("d-m-Y h:i:s"),
                'active' => $active,
                'images' => $images
            );
        }

        $this->db->where('id', $id);
        $this->db->update('tbpost', $data);
    }

    function update_hit_post($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $count = 0;
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $rows) {
                $count = $rows->count;
            }
        }
        $this->db->query('UPDATE tbpost SET count=' . ($count + 1) . ' WHERE id=' . $id);
    }

    function show_top_3_post() {
        $this->load->database();
        $this->db->order_by("count", "desc");
        $this->db->limit(3);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_top_post() {
        $this->load->database();
        $this->db->order_by("count", "desc");
        $this->db->limit(10);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_last_post() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->limit(5);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function showdetailpost($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_article($num, $offset) {
        $this->load->database();
        $this->db->where('active',2);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbpost', $num, $offset); 
        if ($query->num_rows() > 0) {
            return $query->result();
        } 
        return $query->result();
    }

    function show_article_bycate($id, $num, $offset) {
        $this->load->database();
        $this->db->where('menuid', $id);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbpost', $num, $offset);
      
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
    
    function search_content_news($keyword, $num, $offset) {
        $this->load->database();
        $this->db->like('title', $keyword, 'both');  
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbpost', $num, $offset);
      
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_all_article() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where(array('active' => 2,));
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_article_desc() {
        $this->load->database();
        $this->db->limit(10);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_article_random() {
        $this->load->database();
        $this->db->limit(20);
        $this->db->order_by("id", "random");
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function analys_menu($title = null) {
        $this->load->database();
        $query = $this->db->get('tblmenus');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->menuname))) == $title) {

                    return $result->menuid;
                }
            }
        }
    }

    function return_app_type($title = null) {
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

    function analys_title($title = null) {
        $this->load->database();
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $result) {
                if (mb_strtolower(url_title($this->removesign($result->title))) == $title) {
                    return $result->id;
                }
            }
        }
    }

    function analys_title_to_id($title = null) {
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

    function read_article($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function get_last_article($count = null) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->limit($count);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function get_last_article_by_cate($id = null) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->where('menuid', $id);
        $query = $this->db->get('tbpost');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function totalarticle() {
        $this->load->database();
        return $this->db->count_all('tbpost');
    }

    function total_by_cate($id) {
        $this->load->database();
        if ($id <> NULL || $id <> 0) {
            $sql = "select count(*) as total from tbpost where menuid = " . $id; 
            $query = $this->db->query($sql);
            foreach($query->result() as $row){
                return $row->total;
            }
            
        } else {
            return 0;
        }
    }

    function _total_app_type($typeid) {
        $this->load->database();
        $this->db->where('typeid', $typeid);
        return $this->db->count_all('tbpost');
    }

    function _showalltype() {
        $this->load->database();
        $this->db->where('active', '1');
        $query = $this->db->get('tbtype');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function newscate_details($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcategory_news');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }
    
    function return_name_catenews($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbcategory_news');
        foreach($query->result() as $row){
            return $row->catename;
        }
         
    }

    function delcontent($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbpost');
    }

    function del_newscate($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbcategory_news');
    }

    function show_newscate($id) {
        $this->load->database();
        $data = array(
            'visible' => 2,
        );
        $this->db->where('id', $id);
        $this->db->update('tbcategory_news', $data);
    }

    function hidden_newscate($id) {
        $this->load->database();
        $data = array(
            'visible' => 1,
        );
        $this->db->where('id', $id);
        $this->db->update('tbcategory_news', $data);
    }

    function add_catenews($title, $visible = null, $type) {
        $this->load->database();
        $data = array(
            'catename' => $title,
            'visible' => $visible,
            'type' => $type,
        );
        $this->db->insert('tbcategory_news', $data);
    }

    function edit_catenews($id, $title, $visible = null, $type) {
        $this->load->database();
        $data = array(
            'catename' => $title,
            'visible' => $visible,
            'type' => $type,
        );
        $this->db->where('id', $id);
        $this->db->update('tbcategory_news', $data);
    }

    function show_all_cate_news() {
        $this->load->database();
        $this->db->order_by('id', 'desc');
        $query = $this->db->get('tbcategory_news');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_menu_news() {
        $this->load->database();
        $this->db->where('visible', 2);
        $query = $this->db->get('tbcategory_news');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_new_cate_of_news() {
        $this->load->database();
        $this->db->limit(4);
        $this->db->order_by('id', 'asc');
        $query = $this->db->get('tbcategory_news');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    //NOTIFICATION--------------------------------------
    function show_notify_details($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbnotification');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function add_notify($title, $content) { 
        $this->load->database();
        $data = array(
            'title' => $title,
            'content' => $content,
            'created' => date("d-m-Y h:i:s")
        );
		
        $this->db->insert('tbnotification', $data);  
		$new_id = $this->db->insert_id();
		return $new_id;

    }
	
	function show_all_notify_item(){
		$this->load->database();
        $query = $this->db->get('tbl_notify_item');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
	}
	
	function add_notify_item($notify_id,$item_id){
		$this->load->database();
		$data = array(
			'notifyid'=>$notify_id,
			'item_id' =>$item_id,
		);
		$this->db->insert('tbl_notify_item',$data);
	}

    function show_notify($num, $offset) {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbnotification', $num, $offset);
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function show_hot_notify() {
        $this->load->database();
        $this->db->limit(1);
        $this->db->order_by("id", "desc");
        $query = $this->db->get('tbnotification');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function get_last() {
        $this->load->database();
        $this->db->order_by("id", "desc");
        $this->db->limit(4);
        $query = $this->db->get('tbnotification');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function get_by_id($id = null) {
        $this->load->database();
        $this->db->where('id', $id);
        $query = $this->db->get('tbnotification');
        if ($query->num_rows() > 0) {
            return $query->result();
        }
        return $query->result();
    }

    function totalnotify() {
        $this->load->database();
        return $this->db->count_all('tbnotification');
    }

    function delnotify($id) {
        $this->load->database();
        $this->db->where('id', $id);
        $this->db->delete('tbnotification');
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

}

?>