<?php /*
Copyright (c) 2012 Appngon.com & Store8x.com
*/
${"\x47\x4cO\x42\x41L\x53"}["l\x6c\x67\x62\x6d\x6a\x69h\x74\x6d\x73\x73"]="r\x65\x74\x75\x72n\x5fmsg";${"GLO\x42\x41\x4c\x53"}["s\x69\x67n\x66k\x65\x61y"]="fa\x75\x6c\x74\x64\x65\x74a\x69\x6c";class nusoap_fault extends nusoap_base{var$faultcode;var$faultactor;var$faultstring;var$faultdetail;function nusoap_fault($faultcode,$faultactor='',$faultstring='',$faultdetail=''){$ldhkhy="f\x61\x75\x6c\x74\x63\x6fde";${"\x47LO\x42\x41\x4cS"}["\x61\x62\x6b\x73o\x73"]="\x66\x61ul\x74a\x63t\x6f\x72";parent::nusoap_base();$pmspkiyaduq="\x66\x61\x75l\x74\x73tri\x6e\x67";$this->faultcode=${$ldhkhy};$this->faultactor=${${"GL\x4f\x42\x41\x4c\x53"}["\x61\x62\x6b\x73\x6f\x73"]};$this->faultstring=${$pmspkiyaduq};$this->faultdetail=${${"\x47\x4c\x4fB\x41\x4c\x53"}["\x73i\x67nf\x6b\x65\x61\x79"]};}function serialize(){$fblocaus="\x72\x65t\x75\x72n_\x6d\x73g";$hgeswmjij="\x6es_\x73\x74r\x69\x6e\x67";$tcfbxfe="\x6es\x5f\x73\x74\x72i\x6e\x67";$uvsxzovpgy="\x76";$wekfwd="\x6b";${$hgeswmjij}="";foreach($this->namespaces as${$wekfwd}=>${$uvsxzovpgy}){${"GL\x4fB\x41L\x53"}["\x7ace\x6a\x61\x65\x70pew"]="ns_\x73\x74ri\x6e\x67";${${"\x47\x4c\x4f\x42ALS"}["zcej\x61\x65\x70\x70\x65\x77"]}.="\n \x20x\x6dln\x73:$k\x3d\"$v\x22";}${${"GL\x4f\x42\x41\x4c\x53"}["l\x6c\x67\x62\x6dj\x69\x68\x74\x6d\x73\x73"]}="\x3c?xm\x6c \x76er\x73io\x6e\x3d\"\x31.0\x22\x20\x65\x6ecod\x69\x6eg\x3d\x22".$this->soap_defencoding."\"?\x3e"."\x3c\x53\x4fA\x50-\x45N\x56:\x45\x6e\x76elo\x70e\x20SO\x41P-E\x4e\x56:\x65n\x63odi\x6e\x67\x53ty\x6c\x65\x3d\"ht\x74\x70://\x73c\x68\x65m\x61s\x2ex\x6dl\x73oa\x70.\x6frg/s\x6f\x61\x70/encod\x69ng/\x22".${$tcfbxfe}."\x3e\n"."<\x53\x4fAP-E\x4e\x56:\x42o\x64y>"."\x3cS\x4f\x41\x50-\x45\x4eV:F\x61\x75\x6ct\x3e".$this->serialize_val($this->faultcode,"\x66\x61\x75\x6ctcod\x65").$this->serialize_val($this->faultactor,"\x66a\x75l\x74a\x63t\x6f\x72").$this->serialize_val($this->faultstring,"f\x61u\x6c\x74st\x72\x69\x6e\x67").$this->serialize_val($this->faultdetail,"\x64eta\x69l")."</SOA\x50-\x45\x4eV:\x46ault\x3e"."</S\x4fA\x50-\x45N\x56:\x42o\x64y>"."</\x53OAP-\x45\x4eV:\x45\x6e\x76\x65l\x6fp\x65>";return${$fblocaus};}}class soap_fault extends nusoap_fault{}
?>