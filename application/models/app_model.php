<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class App_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  
	function showapp(){
		$this->load->database();  
			$query = $this->db->get('tbapplist');
			if($query->num_rows() > 0){
				 return $query->result();
			}else{
				return null;
			}
	}
	function getcontentbyuser($id){
		$this->load->database();
		$this->db->where('userid',$id);
		$query = $this->db->get('tbappcontent');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	function appdetail($id){
		$this->load->database();	
		$this->db->where('id',$id);
		$query = $this->db->get('tbapplist');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return null;
		}
	}
	
	
	
	function listcontentapp($userid,$appid){
		$this->load->database();
		$this->db->where(array('appid'=>$appid,'userid'=>$userid));
		$this->db->limit(20);
		$this->db->order_by('id','desc');
		$query = $this->db->get('tbappcontent');
		if($query->num_rows() > 0){
			return $query->result();
		}else{
			return array();
		}
	}
	
	function showapphot(){
		$this->load->database();  
		$this->db->limit(8);
		$this->db->order_by('id','random');
		$query = $this->db->get('tbapplist');
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	function _totalapp($type=null,$id=null){
		$this->load->database();
    	if($id==null && $type==null){
			return $this->db->count_all('tbapplist');
    	}else{ 
    		//$this->db->where('phone',$id);
    		$query =  $this->db->query('select count(*) as total from tbapplist where '.$type.'='.$id);
    		if ($query->num_rows() > 0) {
    			foreach($query->result() as $row){
    				return $row->total;
    			}
    		}else{
    			return 0;
    		}
    		 
    	} 
	}
	function totalcateapp(){
		$this->load->database();
		return $this->db->count_all('tblappcate');
	}
	
	function show_allcategory($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc");
		$query=$this->db->get('tblappcate',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	function add_cateapp(){
		$this->load->database($catename,$cateroot);
		$data = array( 
				'catename'=>$catename,
				'cateroot'=>$cateroot
		);
		$this->db->insert('tbappcontent', $data);
	}
	function add_contentapp($userid,$appid,$title,$des,$image,$link){
		
		$this->load->database();
    	$data = array( 
            'userid'=>$userid,
            'appid'=>$appid,
    		'title'=>$title,
    		'descript'=>$des,
    		'link'=>$link,
    		'image'=>$image
            );
    	$this->db->insert('tbappcontent', $data); 
	}
	function _checktotalcontentapp($userid=null,$appid=null){
		$this->load->database();
    	if($userid==null && $appid==null){
			return $this->db->count_all('tbappcontent');
    	}else{ 
    		//$this->db->where('phone',$id);
    		$query =  $this->db->query('select count(id) as total from tbappcontent where userid='.$userid.' and appid='.$appid);
    		if ($query->num_rows() > 0) {
    			foreach($query->result() as $row){
    				return $row->total;
    			}
    		}else{
    			return 0;
    		}
    		 
    	} 
	}
	function listapp($num,$offset){
		$this->load->database();
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tbapplist',$num,$offset);
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	
	function add_app($name,$des,$type,$icon,$link){
		$this->load->database();
    	$data = array( 
            'name'=>$name,
            'desc'=>$des,
    		'type'=>$type,
    		'appicon'=>$icon,
    		'linkapp'=>$link,
    		'active'=>1 
            );
    	$this->db->insert('tbapplist', $data); 
	}
	
	function delcontentapp($userid,$appid,$id){
		$this->load->database();
		$this->db->where(array(
			'id'=>$id,
			'userid'=>$userid,
			'appid'=>$appid
		));
		$this->db->delete('tbappcontent');
	}
	function delapp($id=null){
		$this->load->database();
		$this->db->where('id', $id);
		$this->db->delete('tbapplist');
	}
}
    ?>