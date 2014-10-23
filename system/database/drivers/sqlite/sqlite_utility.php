<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("\x42A\x53E\x50\x41TH"))exit("\x4e\x6f d\x69r\x65\x63\x74 \x73c\x72i\x70\x74\x20\x61\x63cess\x20\x61l\x6c\x6f\x77e\x64");class CI_DB_sqlite_utility extends CI_DB_utility{function _list_databases(){if($this->db_debug){return$this->db->display_error("db_\x75\x6es\x75port\x65\x64\x5ffe\x61\x74\x75\x72e");}return array();}function _optimize_table($table){return FALSE;}function _repair_table($table){return FALSE;}function _backup($params=array()){return$this->db->display_error("\x64b_u\x6es\x75\x70\x6f\x72te\x64_\x66\x65a\x74\x75r\x65");}}
?>