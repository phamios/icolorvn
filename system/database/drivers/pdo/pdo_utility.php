<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("\x42\x41\x53E\x50ATH"))exit("No\x20\x64irect sc\x72ip\x74 ac\x63\x65\x73s al\x6co\x77e\x64");class CI_DB_pdo_utility extends CI_DB_utility{function _list_databases(){if($this->db->db_debug){return$this->db->display_error("d\x62\x5fu\x6esu\x70o\x72ted\x5ff\x65\x61\x74ur\x65");}return FALSE;}function _optimize_table($table){if($this->db->db_debug){return$this->db->display_error("\x64\x62\x5f\x75\x6e\x73\x75\x70o\x72\x74\x65\x64_fe\x61\x74\x75r\x65");}return FALSE;}function _repair_table($table){if($this->db->db_debug){return$this->db->display_error("\x64\x62_\x75ns\x75\x70o\x72\x74\x65\x64\x5f\x66\x65\x61\x74\x75\x72\x65");}return FALSE;}function _backup($params=array()){return$this->db->display_error("d\x62_u\x6e\x73upo\x72\x74e\x64_f\x65\x61tur\x65");}}
?>