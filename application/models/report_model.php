<?php if ( ! defined("BASEPATH")) exit("No direct script access allowed");
class Report_model extends CI_Model {
    
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  
	function user_report($uid){
		$this->load->database();  
		$query = $this->db->query("SELECT COUNT(*) as download,app.* FROM tbusersms as us INNER JOIN tbapplist as app on us.appid = app.id WHERE userid = ".$uid." AND DATE(us.created) = CURDATE() GROUP BY us.appid");
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	function report_for_week($date){ 
			$this->load->database(); 
    		$query =  $this->db->query("select count(*) as total from tbmos where today='".$date."'"); 
    		if ($query->num_rows() > 0) {
    			foreach($query->result() as $row){
    				return $row->total;
    			}
    		}else{
    			return 0;
    		}  
	}
	function insert_report_day($value,$day){ 
		$this->load->database();
    	$data = array( 
            'value'=>$value,
    		'day'=>$day
            );
    	$this->db->insert('tblreportday', $data); 
	}
	function removeallreportday(){
		$this->load->database();
		$this->db->query('delete from tblreportday');
	}
	function get_report_day(){
		$this->load->database(); 
		$this->db->order_by("id", "desc"); 
		$query=$this->db->get('tblreportday');
		if ($query->num_rows() > 0)
		{
			return $query->result();
		}
		return $query->result();
	}
	function report_bylastday($uid){
		$this->load->database();  
		$today =  date("Y-m-d 00:00:00"); 
		$yday= strtotime("-1 day") ; 
		$yesterday =date("Y-m-d", $yday); 
		$query = $this->db->query(
		"
		SELECT COUNT(*) as download,created,app.* FROM tbusersms as us INNER JOIN tbapplist as app on us.appid = app.id WHERE userid = ".$uid." AND DATE(us.created) = '".$yesterday."' GROUP BY us.appid
		"
		);

		if($query->num_rows() > 0){
			
			 return $query->result();
		}else{
			return null;
		}
	}
	
	function report_bytime($uid,$start,$end){
		$this->load->database();
		$sWhere = "userid = ".$uid." AND DATE(us.created) >= '".$start."' AND DATE(us.created) <= '".$end."'";

		$query = $this->db->query("SELECT COUNT(*) as download,app.* FROM tbusersms as us INNER JOIN tbapplist as app on us.appid = app.id WHERE ".$sWhere." GROUP BY us.appid");
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
	
	function report_byapp($uid,$start,$end,$appid){
		$this->load->database();
		$sWhere = "userid = ".$uid." AND DATE(us.created) >= '".$start."' AND DATE(us.created) <= '".$end."'";
		$sWhere .= " AND us.appid = $appid";

		$query = $this->db->query("SELECT * FROM tbusersms AS us WHERE ".$sWhere);
		if($query->num_rows() > 0){
			 return $query->result();
		}else{
			return null;
		}
	}
}
    ?>