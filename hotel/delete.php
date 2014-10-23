<?php

$id = $_GET['id'];
$limit = $_GET['c'];

	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');

$query = "SELECT pax,name,site,price,room FROM bookings WHERE id='". $id ."'";
$result = mysql_query($query)
	or die('Query failed: ' . mysql_error());
$line = mysql_fetch_array($result, MYSQL_ASSOC);

$query = "DELETE FROM bookings WHERE name='" . $line['name'] . "' AND room='" . $line['room'] . "' AND price='" . $line['price'] . "'" ;

$result = mysql_query($query)
	or die('Query failed: ' . mysql_error());
	
echo '<meta HTTP-EQUIV="REFRESH" content="0; url=mindex.php">';
?>