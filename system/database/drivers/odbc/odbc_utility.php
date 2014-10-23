<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("B\x41S\x45PA\x54\x48"))exit("\x4eo d\x69r\x65c\x74 scrip\x74 \x61c\x63e\x73s allowed");class CI_DB_odbc_utility extends CI_DB_utility{function _list_databases(){if($this->db->db_debug){return$this->db->display_error("\x64\x62_\x75ns\x75\x70o\x72t\x65\x64\x5ffeat\x75\x72\x65");}return FALSE;}function _optimize_table($table){if($this->db->db_debug){return$this->db->display_error("db_\x75n\x73\x75\x70\x6f\x72t\x65\x64_\x66ea\x74ure");}return FALSE;}function _repair_table($table){if($this->db->db_debug){return$this->db->display_error("d\x62_unsu\x70\x6fr\x74e\x64_\x66eature");}return FALSE;}function _backup($params=array()){return$this->db->display_error("\x64b_\x75\x6e\x73u\x70orte\x64\x5f\x66\x65\x61t\x75\x72\x65");}}
?>