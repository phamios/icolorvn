<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
${"\x47\x4cO\x42\x41L\x53"}["\x62l\x77\x62\x65t\x67\x63\x77e\x6f"]="\x63\x6fnn\x5fi\x64";${"\x47\x4c\x4fB\x41\x4c\x53"}["q\x65\x78\x77r\x76"]="l\x69k\x65";${"GL\x4fB\x41LS"}["\x6b\x6cc\x74\x6c\x74\x68n"]="c\x6f\x6e\x64i\x74\x69\x6f\x6e\x73";${"G\x4c\x4fBAL\x53"}["otl\x73\x77f\x73\x75"]="\x6frd\x65r\x62\x79";${"\x47L\x4fBAL\x53"}["\x62d\x77\x6e\x6e\x69v\x62x"]="\x77\x68e\x72\x65";${"GL\x4fB\x41\x4c\x53"}["njwf\x6frb\x72\x70\x76"]="\x6c\x69m\x69t";${"GLO\x42\x41\x4c\x53"}["\x68\x73\x79\x74\x6e\x75ow\x6a"]="va\x6cs\x74\x72";${"G\x4cOBAL\x53"}["\x7a\x6cp\x6c\x6dg\x76"]="v\x61l";${"G\x4cO\x42\x41L\x53"}["ox\x70o\x61\x6d\x69cd"]="va\x6c\x75\x65\x73";${"G\x4c\x4f\x42AL\x53"}["\x63wmo\x69\x65\x62\x70\x6ey"]="\x6b\x65\x79\x73";${"G\x4c\x4f\x42\x41L\x53"}["\x79\x69d\x6a\x72\x6ex\x62\x77"]="ta\x62le";${"\x47\x4cOBAL\x53"}["\x69bd\x6exvj\x6bc"]="\x74a\x62\x6c\x65\x73";${"\x47LO\x42\x41\x4c\x53"}["\x70\x79f\x6f\x7a\x6eykzp\x77"]="it\x65\x6d";${"G\x4cOB\x41\x4c\x53"}["\x77j\x67b\x72im"]="\x69\x64";${"\x47\x4c\x4f\x42A\x4c\x53"}["\x6e\x7a\x77\x6b\x6a\x78\x68\x66d\x6e"]="\x70\x72\x65f\x69\x78_\x6cim\x69\x74";${"\x47\x4c\x4f\x42A\x4cS"}["j\x6d\x63\x75\x79\x71\x6di\x6b\x6f"]="\x71uer\x79";${"GL\x4fBAL\x53"}["ku\x6d\x72hc\x67d"]="\x6b\x65y";${"\x47\x4c\x4f\x42A\x4cS"}["\x73e\x6dl\x70\x66"]="\x73\x74r";${"\x47LOB\x41\x4cS"}["cgf\x75ww\x63\x66\x63"]="\x72et";${"GL\x4fB\x41L\x53"}["kgjb\x68g\x6c\x76"]="sql";${"\x47\x4cOBAL\x53"}["k\x65\x6c\x75u\x6c\x6c"]="\x70a\x72\x61ms";if(!defined("B\x41\x53\x45\x50A\x54H"))exit("No \x64\x69\x72ect \x73\x63r\x69\x70t \x61c\x63\x65\x73s\x20\x61\x6c\x6c\x6f\x77\x65d");class CI_DB_odbc_driver extends CI_DB{var$dbdriver='odbc';var$_escape_char='';var$_like_escape_str=" {escape '%s'} ";var$_like_escape_chr='!';var$_count_string="SELECT COUNT(*) AS ";var$_random_keyword;function __construct($params){parent::__construct(${${"\x47\x4c\x4f\x42\x41LS"}["k\x65\x6cu\x75\x6c\x6c"]});$this->_random_keyword="\x20\x52\x4eD(".time().")";}function db_connect(){return@odbc_connect($this->hostname,$this->username,$this->password);}function db_pconnect(){return@odbc_pconnect($this->hostname,$this->username,$this->password);}function reconnect(){}function db_select(){return TRUE;}function db_set_charset($charset,$collation){return TRUE;}function _version(){return"\x53EL\x45CT\x20v\x65r\x73\x69on()\x20A\x53 v\x65r";}function _execute($sql){$cexqovnbiqv="s\x71\x6c";$yhnddbunr="s\x71\x6c";${$cexqovnbiqv}=$this->_prep_query(${$yhnddbunr});return@odbc_exec($this->conn_id,${${"\x47\x4cOB\x41\x4c\x53"}["\x6b\x67j\x62\x68\x67\x6c\x76"]});}function _prep_query($sql){${"G\x4c\x4f\x42\x41LS"}["\x65b\x6c\x6e\x76a\x61\x65\x62\x68"]="\x73\x71\x6c";return${${"\x47\x4c\x4fB\x41\x4c\x53"}["\x65b\x6c\x6e\x76\x61\x61\x65\x62\x68"]};}function trans_begin($test_mode=FALSE){if(!$this->trans_enabled){return TRUE;}${"\x47\x4c\x4f\x42AL\x53"}["\x79lnsn\x61\x74"]="te\x73\x74_\x6d\x6f\x64\x65";if($this->_trans_depth>0){return TRUE;}$this->_trans_failure=(${${"\x47\x4c\x4fB\x41LS"}["\x79l\x6e\x73\x6e\x61\x74"]}===TRUE)?TRUE:FALSE;return odbc_autocommit($this->conn_id,FALSE);}function trans_commit(){if(!$this->trans_enabled){return TRUE;}if($this->_trans_depth>0){return TRUE;}$urmmvumgo="\x72\x65\x74";${${"GLO\x42A\x4c\x53"}["\x63\x67f\x75\x77\x77c\x66\x63"]}=odbc_commit($this->conn_id);odbc_autocommit($this->conn_id,TRUE);return${$urmmvumgo};}function trans_rollback(){if(!$this->trans_enabled){return TRUE;}if($this->_trans_depth>0){return TRUE;}${${"\x47\x4c\x4fBA\x4cS"}["\x63\x67\x66u\x77w\x63\x66\x63"]}=odbc_rollback($this->conn_id);odbc_autocommit($this->conn_id,TRUE);return${${"G\x4c\x4fB\x41L\x53"}["\x63g\x66\x75w\x77cfc"]};}function escape_str($str,$like=FALSE){${"\x47\x4c\x4fB\x41L\x53"}["\x77\x77h\x6e\x6adk\x66ho"]="st\x72";$tizvjrixr="s\x74\x72";$picmao="\x6cik\x65";${"G\x4c\x4fB\x41L\x53"}["\x6a\x63\x6a\x71ta\x75\x73w\x6f\x65"]="\x73\x74\x72";if(is_array(${${"G\x4cOBAL\x53"}["\x6ac\x6a\x71\x74a\x75s\x77oe"]})){${"\x47\x4c\x4f\x42A\x4c\x53"}["\x6dllc\x77v\x6f\x66e\x76"]="\x76\x61\x6c";foreach(${${"G\x4cOB\x41\x4c\x53"}["sem\x6cpf"]} as${${"\x47L\x4f\x42\x41\x4c\x53"}["\x6b\x75m\x72\x68\x63\x67\x64"]}=>${${"\x47\x4c\x4f\x42ALS"}["\x6d\x6cl\x63\x77\x76\x6f\x66\x65\x76"]}){${"G\x4c\x4f\x42A\x4c\x53"}["lr\x71ikg\x6a\x70\x6e"]="l\x69\x6b\x65";${"\x47\x4cOB\x41\x4cS"}["\x6ex\x68ov\x68\x63"]="v\x61l";${"GLO\x42\x41\x4c\x53"}["bj\x78qk\x6f\x74\x6e\x67\x67"]="\x6bey";${${"\x47\x4cOB\x41LS"}["\x73\x65\x6d\x6cp\x66"]}[${${"\x47\x4c\x4f\x42\x41\x4c\x53"}["\x62jxq\x6bo\x74n\x67g"]}]=$this->escape_str(${${"\x47\x4c\x4f\x42\x41L\x53"}["n\x78h\x6f\x76\x68\x63"]},${${"\x47\x4c\x4f\x42A\x4cS"}["l\x72\x71\x69kgjp\x6e"]});}return${${"\x47\x4c\x4f\x42\x41\x4c\x53"}["\x73\x65\x6dl\x70f"]};}${${"\x47\x4cO\x42\x41\x4c\x53"}["\x77\x77\x68\x6e\x6ad\x6b\x66\x68\x6f"]}=remove_invisible_characters(${$tizvjrixr});if(${$picmao}===TRUE){${${"\x47L\x4fBAL\x53"}["\x73\x65\x6dl\x70\x66"]}=str_replace(array("%","\x5f",$this->_like_escape_chr),array($this->_like_escape_chr."\x25",$this->_like_escape_chr."\x5f",$this->_like_escape_chr.$this->_like_escape_chr),${${"\x47\x4c\x4fB\x41L\x53"}["\x73\x65\x6d\x6cpf"]});}return${${"GLO\x42\x41\x4cS"}["s\x65m\x6cp\x66"]};}function affected_rows(){return@odbc_num_rows($this->conn_id);}function insert_id(){return@odbc_insert_id($this->conn_id);}function count_all($table=''){${"\x47LO\x42\x41L\x53"}["\x78d\x63xz\x65t\x67\x67\x6a"]="tab\x6c\x65";${"GLO\x42ALS"}["\x79\x72\x66\x70\x66\x76"]="\x74\x61\x62\x6c\x65";${"\x47\x4c\x4f\x42\x41\x4cS"}["\x65j\x75ko\x71p\x66\x64\x73\x64"]="\x72o\x77";if(${${"G\x4c\x4f\x42AL\x53"}["\x78\x64\x63\x78\x7a\x65\x74g\x67\x6a"]}==""){return 0;}${${"\x47LOB\x41\x4cS"}["\x6am\x63\x75yq\x6di\x6b\x6f"]}=$this->query($this->_count_string.$this->_protect_identifiers("numro\x77s")."\x20FR\x4fM\x20".$this->_protect_identifiers(${${"G\x4c\x4f\x42\x41\x4cS"}["\x79\x72\x66\x70\x66\x76"]},TRUE,NULL,FALSE));if($query->num_rows()==0){return 0;}${${"G\x4c\x4fBA\x4c\x53"}["\x65\x6a\x75ko\x71\x70fds\x64"]}=$query->row();$this->_reset_select();return(int)$row->numrows;}function _list_tables($prefix_limit=FALSE){${"\x47\x4c\x4fB\x41\x4cS"}["\x67c\x68\x77\x74\x79"]="\x73\x71\x6c";${${"G\x4cOB\x41\x4c\x53"}["\x67\x63\x68\x77t\x79"]}="SHO\x57 T\x41\x42\x4c\x45S\x20\x46\x52OM \x60".$this->database."\x60";if(${${"\x47L\x4f\x42\x41LS"}["\x6e\x7a\x77\x6bj\x78h\x66\x64\x6e"]}!==FALSE AND$this->dbprefix!=""){return FALSE;}return${${"G\x4c\x4f\x42\x41\x4cS"}["\x6b\x67\x6abh\x67\x6c\x76"]};}function _list_columns($table=''){$olwvjlz="t\x61b\x6c\x65";return"S\x48\x4fW COLU\x4d\x4eS F\x52OM\x20".${$olwvjlz};}function _field_data($table){${"\x47LO\x42\x41\x4c\x53"}["sy\x6c\x6ep\x79\x68\x69\x64x"]="ta\x62\x6ce";return"SE\x4c\x45\x43T TO\x50 1\x20FRO\x4d\x20".${${"\x47L\x4f\x42AL\x53"}["s\x79\x6cnpyhi\x64x"]};}function _error_message(){return odbc_errormsg($this->conn_id);}function _error_number(){return odbc_error($this->conn_id);}function _escape_identifiers($item){$fnwoken="id";if($this->_escape_char==""){${"G\x4cO\x42\x41\x4c\x53"}["o\x76\x6f\x72y\x76"]="i\x74e\x6d";return${${"\x47\x4c\x4f\x42A\x4cS"}["\x6f\x76\x6fr\x79v"]};}$zctbtpdk="i\x74e\x6d";foreach($this->_reserved_identifiers as${$fnwoken}){$whwhktfskrt="\x69\x74\x65\x6d";if(strpos(${$whwhktfskrt},".".${${"\x47LOB\x41LS"}["\x77\x6ag\x62r\x69m"]})!==FALSE){${${"GL\x4fB\x41\x4c\x53"}["\x73\x65m\x6c\x70\x66"]}=$this->_escape_char.str_replace("\x2e",$this->_escape_char.".",${${"G\x4c\x4f\x42\x41L\x53"}["\x70y\x66o\x7a\x6eyk\x7a\x70w"]});return preg_replace("/[".$this->_escape_char."]+/",$this->_escape_char,${${"\x47\x4c\x4fB\x41\x4cS"}["\x73\x65ml\x70f"]});}}$skleuhr="\x73\x74\x72";if(strpos(${$zctbtpdk},".")!==FALSE){$hbtwwdbyng="\x73\x74\x72";$czgbzxxwgl="\x69te\x6d";${$hbtwwdbyng}=$this->_escape_char.str_replace(".",$this->_escape_char.".".$this->_escape_char,${$czgbzxxwgl}).$this->_escape_char;}else{${"\x47\x4c\x4f\x42A\x4cS"}["\x6c\x65\x70k\x65\x6e\x77\x64\x6a\x62"]="\x73\x74\x72";${${"G\x4c\x4fB\x41\x4c\x53"}["\x6ce\x70\x6be\x6ew\x64\x6ab"]}=$this->_escape_char.${${"\x47\x4c\x4f\x42A\x4c\x53"}["p\x79foz\x6eyk\x7a\x70\x77"]}.$this->_escape_char;}return preg_replace("/[".$this->_escape_char."]+/",$this->_escape_char,${$skleuhr});}function _from_tables($tables){if(!is_array(${${"\x47\x4c\x4fB\x41\x4cS"}["\x69\x62\x64nx\x76jk\x63"]})){${"G\x4cO\x42\x41\x4cS"}["\x63xody\x73\x6brzt\x6e\x75"]="t\x61\x62l\x65\x73";${${"\x47L\x4f\x42\x41\x4cS"}["\x69\x62d\x6e\x78vj\x6bc"]}=array(${${"\x47\x4c\x4f\x42\x41\x4c\x53"}["c\x78\x6fd\x79\x73\x6b\x72z\x74nu"]});}return"(".implode(", ",${${"\x47\x4c\x4fBAL\x53"}["\x69b\x64\x6e\x78\x76j\x6bc"]}).")";}function _insert($table,$keys,$values){return"\x49N\x53ER\x54\x20\x49NTO\x20".${${"\x47\x4c\x4fBALS"}["\x79\x69\x64\x6arn\x78\x62w"]}."\x20(".implode(",\x20",${${"GLOBALS"}["\x63\x77\x6d\x6fie\x62p\x6e\x79"]}).") VA\x4c\x55\x45S\x20(".implode(",\x20",${${"GLO\x42\x41\x4c\x53"}["\x6f\x78\x70\x6f\x61\x6di\x63d"]}).")";}function _update($table,$values,$where,$orderby=array(),$limit=FALSE){${"\x47\x4cO\x42A\x4c\x53"}["\x73\x76\x66\x72hzs\x78\x69y\x62\x77"]="l\x69mit";${"G\x4c\x4f\x42AL\x53"}["x\x77\x72l\x68\x77\x77\x72\x74j\x68"]="w\x68\x65\x72e";${"GL\x4fBAL\x53"}["\x79\x64\x69\x64\x68\x61\x6d\x65"]="\x6fr\x64e\x72\x62y";${"G\x4c\x4fB\x41L\x53"}["\x64\x6d\x66\x70\x71v\x68\x75\x68o"]="\x6frd\x65\x72\x62\x79";$tsashirjdrym="sql";${"G\x4c\x4f\x42\x41\x4c\x53"}["\x69\x6e\x65\x62\x64\x6a\x71\x64"]="or\x64\x65\x72\x62\x79";$hlnqqtteh="\x6be\x79";foreach(${${"GL\x4f\x42\x41\x4c\x53"}["\x6f\x78\x70oa\x6d\x69c\x64"]} as${$hlnqqtteh}=>${${"GL\x4f\x42A\x4c\x53"}["\x7a\x6cp\x6cm\x67\x76"]}){$jpozsxfl="v\x61\x6c";${${"G\x4c\x4f\x42\x41\x4c\x53"}["\x68\x73\x79\x74n\x75\x6f\x77\x6a"]}[]=${${"G\x4c\x4f\x42AL\x53"}["\x6b\x75m\x72\x68c\x67\x64"]}." \x3d ".${$jpozsxfl};}${${"\x47\x4cO\x42\x41\x4c\x53"}["\x6e\x6aw\x66\x6frbr\x70\x76"]}=(!${${"\x47\x4c\x4f\x42A\x4cS"}["n\x6a\x77\x66\x6f\x72b\x72\x70\x76"]})?"":"\x20\x4c\x49M\x49\x54\x20".${${"\x47\x4cO\x42\x41LS"}["\x73vfr\x68zs\x78\x69y\x62\x77"]};$pupsshksm="\x6cim\x69\x74";${${"\x47\x4cO\x42A\x4c\x53"}["\x79d\x69\x64\x68am\x65"]}=(count(${${"\x47\x4c\x4f\x42\x41\x4cS"}["i\x6e\x65\x62\x64\x6aqd"]})>=1)?"\x20\x4f\x52DE\x52 \x42\x59\x20".implode(",\x20",${${"\x47\x4c\x4f\x42\x41\x4cS"}["\x64\x6d\x66p\x71\x76\x68\x75\x68\x6f"]}):"";${$tsashirjdrym}="\x55\x50DAT\x45 ".${${"\x47\x4c\x4f\x42A\x4c\x53"}["\x79\x69\x64\x6a\x72\x6e\x78b\x77"]}."\x20SE\x54\x20".implode(", ",${${"\x47L\x4fB\x41\x4cS"}["h\x73\x79tnuo\x77\x6a"]});${${"G\x4cOB\x41\x4cS"}["\x6b\x67\x6a\x62\x68g\x6c\x76"]}.=(${${"\x47LO\x42\x41LS"}["\x62\x64\x77nn\x69v\x62\x78"]}!=""AND count(${${"\x47LOB\x41\x4cS"}["\x78w\x72l\x68ww\x72t\x6ah"]})>=1)?"\x20W\x48ER\x45 ".implode(" ",${${"G\x4cO\x42A\x4c\x53"}["b\x64\x77n\x6e\x69v\x62\x78"]}):"";${${"\x47L\x4f\x42\x41\x4c\x53"}["\x6b\x67\x6abh\x67\x6c\x76"]}.=${${"G\x4c\x4f\x42\x41\x4c\x53"}["\x6f\x74l\x73wfsu"]}.${$pupsshksm};return${${"\x47\x4cO\x42\x41L\x53"}["\x6b\x67\x6a\x62\x68\x67\x6cv"]};}function _truncate($table){return$this->_delete(${${"\x47\x4cO\x42\x41\x4c\x53"}["y\x69d\x6a\x72n\x78\x62w"]});}function _delete($table,$where=array(),$like=array(),$limit=FALSE){${"\x47\x4c\x4f\x42A\x4c\x53"}["w\x78\x78u\x74\x62d"]="lik\x65";$vlnotdmfuku="\x77\x68e\x72\x65";${"G\x4c\x4f\x42ALS"}["\x67\x62\x70\x63\x71\x6d\x78v"]="\x6c\x69mi\x74";$fbsghiqijy="\x63\x6f\x6ed\x69\x74\x69\x6f\x6e\x73";$aeyhtivqh="l\x69mi\x74";$uxsmppxctli="\x63\x6f\x6e\x64\x69t\x69o\x6e\x73";${$uxsmppxctli}="";if(count(${$vlnotdmfuku})>0 OR count(${${"\x47\x4cO\x42\x41\x4c\x53"}["\x77\x78\x78\x75t\x62\x64"]})>0){${"GLO\x42\x41\x4c\x53"}["ru\x71m\x78\x6drt"]="\x63o\x6edi\x74\x69\x6fn\x73";${${"GL\x4f\x42\x41\x4cS"}["ru\x71\x6dxmr\x74"]}="\nWH\x45R\x45 ";${${"\x47L\x4f\x42\x41\x4c\x53"}["\x6b\x6c\x63\x74\x6c\x74h\x6e"]}.=implode("\n",$this->ar_where);if(count(${${"\x47LO\x42A\x4c\x53"}["\x62\x64\x77\x6en\x69\x76\x62x"]})>0&&count(${${"\x47L\x4f\x42\x41L\x53"}["qex\x77rv"]})>0){$yttpsopweo="\x63\x6f\x6editi\x6f\x6es";${$yttpsopweo}.="\x20AND ";}${${"GL\x4f\x42\x41\x4c\x53"}["\x6b\x6cct\x6c\x74\x68\x6e"]}.=implode("\n",${${"\x47L\x4f\x42AL\x53"}["\x71\x65\x78\x77\x72\x76"]});}${${"\x47L\x4f\x42A\x4cS"}["\x6e\x6aw\x66orb\x72\x70\x76"]}=(!${${"G\x4c\x4f\x42A\x4c\x53"}["g\x62p\x63\x71\x6d\x78\x76"]})?"":" L\x49\x4dI\x54 ".${${"G\x4c\x4f\x42A\x4cS"}["\x6e\x6a\x77\x66o\x72\x62r\x70v"]};return"D\x45LET\x45 \x46\x52\x4fM ".${${"\x47\x4cOB\x41\x4cS"}["\x79\x69\x64j\x72\x6e\x78b\x77"]}.${$fbsghiqijy}.${$aeyhtivqh};}function _limit($sql,$limit,$offset){${"\x47LOB\x41\x4c\x53"}["\x74q\x6cb\x6f\x6f\x79\x74\x61\x66\x78\x65"]="\x73\x71l";return${${"\x47\x4c\x4f\x42\x41L\x53"}["\x74\x71\x6c\x62\x6f\x6fy\x74\x61f\x78\x65"]};}function _close($conn_id){@odbc_close(${${"\x47L\x4f\x42A\x4c\x53"}["\x62\x6c\x77\x62\x65\x74\x67\x63\x77\x65\x6f"]});}}
?>