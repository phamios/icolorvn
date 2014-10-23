<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("BAS\x45\x50ATH"))exit("\x4e\x6f \x64i\x72\x65ct \x73cr\x69pt\x20acc\x65\x73\x73 \x61\x6clowe\x64");class CI_DB_oci8_utility extends CI_DB_utility{function _list_databases(){return FALSE;}function _optimize_table($table){return FALSE;}function _repair_table($table){return FALSE;}function _backup($params=array()){return$this->db->display_error("db\x5fun\x73up\x6fr\x74\x65\x64\x5f\x66e\x61t\x75\x72\x65");}}
?>