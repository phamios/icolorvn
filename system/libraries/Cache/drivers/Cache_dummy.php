<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
if(!defined("BA\x53E\x50\x41\x54\x48"))exit("N\x6f d\x69re\x63\x74 s\x63\x72ipt a\x63\x63es\x73\x20\x61\x6cl\x6fwe\x64");class CI_Cache_dummy extends CI_Driver{public function get($id){return FALSE;}public function save($id,$data,$ttl=60){return TRUE;}public function delete($id){return TRUE;}public function clean(){return TRUE;}public function cache_info($type=NULL){return FALSE;}public function get_metadata($id){return FALSE;}public function is_supported(){return TRUE;}}
?>