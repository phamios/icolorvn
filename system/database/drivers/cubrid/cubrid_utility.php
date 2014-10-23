<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("B\x41\x53\x45\x50\x41\x54\x48"))exit("\x4eo d\x69\x72\x65\x63\x74 s\x63r\x69pt ac\x63\x65\x73s\x20\x61llo\x77e\x64");class CI_DB_cubrid_utility extends CI_DB_utility{function _list_databases(){if($this->conn_id){return"SE\x4c\x45\x43\x54 '".$this->database."'";}else{return FALSE;}}function _optimize_table($table){return FALSE;}function _repair_table($table){return FALSE;}function _backup($params=array()){return$this->db->display_error("d\x62_un\x73\x75por\x74e\x64\x5ffe\x61tu\x72e");}}
?>