<?php
	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');

	$query = "SELECT id,day,month,year,pax,name,price,site,deposit,room,bookid,comment FROM bookings ORDER BY id ";

	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());

	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) 
	{
		$bck .= '(' . $line['id'] . ', ' . $line['day'] . ', ' . $line['month'] . ', ' . $line['year'] ;
		$bck .= ", " .$line['pax'] . ", '" . $line['name'] . "', " . $line['price'] ;
		$bck .= ", '" . $line['site'] . "', '" . $line['deposit'] . "', ". $line['room'];
		$bck .= ", '" . $line['bookid'] . "', '". $line['comment'] . "'), \n";
		$lineout = $line['id'];
	}

$bck = "SET SQL_MODE=\"NO_AUTO_VALUE_ON_ZERO\";

CREATE DATABASE `hotel` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `hotel`;

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL auto_increment,
  `day` tinyint(4) NOT NULL,
  `month` tinyint(4) NOT NULL,
  `year` smallint(6) NOT NULL,
  `pax` tinyint(4) NOT NULL,
  `name` varchar(30) character set utf8 collate utf8_unicode_ci NOT NULL,
  `price` smallint(6) NOT NULL,
  `site` varchar(20) character set utf8 collate utf8_unicode_ci NOT NULL,
  `deposit` varchar(10) character set utf8 collate utf8_unicode_ci NOT NULL,
  `room` smallint(6) NOT NULL,
  `bookid` varchar(20) character set utf8 collate utf8_unicode_ci NOT NULL,
  `comment` varchar(80) character set utf8 collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `site` (`site`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=". ($lineout + 1) . " ;\n\n
INSERT INTO `bookings` (`id`, `day`, `month`, `year`, `pax`, `name`, `price`, `site`, `deposit`, `room`, `bookid`, `comment`) VALUES\n" . $bck ;
$bck = substr($bck,0,strlen($bck)-3) . ';';
		$year = date(Y) ;
		$month = date(n) ;


	$prevyear = $year ;
	$prevmonth = $month - 1;
	
	if ($prevmonth < 1)
	{
		$prevmonth = 12;
		$prevyear = $prevyear - 1;
	}
	
	$prevmonth = $prevmonth - 1;
	
	if ($prevmonth < 1)
	{
		$prevmonth = 12;
		$prevyear = $prevyear - 1;
	}
	


$query = "DELETE FROM bookings WHERE year='". $prevyear . "' AND month='" . $prevmonth . "'";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());



echo $bck ; 

?>