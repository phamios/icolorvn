<link rel="stylesheet" type="text/css" href="style.css">
<?php

	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');
		
$query = "SELECT day,month,year,pax,name,price,site,deposit,room,bookid,comment FROM bookings WHERE id='" . $_GET['id'] . "'";
$result = mysql_query($query)
	or die('Query failed: ' . mysql_error());
$aline = mysql_fetch_array($result, MYSQL_ASSOC);

function fixSize($numbah)
{
	if (strlen($numbah) < 2)
		return '0' . $numbah ;
	else
		return $numbah ; 
}


function insertBooking()
{
	$error = '';
	$temptodate = $_POST['today'] - 1 ;
	$fulltodate = $_POST['toyear'] . fixSize( $_POST['tomonth'] ) . fixSize( $temptodate );
	$fullfromdate = $_POST['fromyear'] . fixSize( $_POST['frommonth']) . fixSize( $_POST['fromday']);
	$cday = fixSize( $_POST['fromday'] );
	$cmonth = fixSize( $_POST['frommonth'] );
	$cyear = $_POST['fromyear'];
	$room = $_POST['room'];
	
	if ($fulltodate < $fullfromdate)
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=mindex.php?errdate">';
	
	while ($fullfromdate <= $fulltodate)
	{
		$query = 'SELECT name FROM bookings WHERE year="'. $cyear . '" AND month="' . $cmonth . '" AND day="' . $cday . '" AND room="' . $room . '"';
		$result = mysql_query($query)
			or die('Query failed: ' . mysql_error());
		$temp = mysql_fetch_array($result, MYSQL_ASSOC);
		
		if ($temp)
			$err = '<font color="red" >Room ' . $room .' is already booked on the selected the dates<br></font>\n"';
		
		$cday = $cday + 1 ;
		if ($cday > 31)
		{
			$cday = 1;
			$cmonth = $cmonth + 1;
		}
		
		if ($cmonth > 12)
		{
			$cmonth = 1;
			$cyear = $cyear + 1;
		}
		
		$fullfromdate = $cyear . fixSize( $cmonth ). fixSize( $cday );



	}

	if ($err)
	{
	$temptodate = $_POST['_today'] ; // - 1;
	$fulltodate = $_POST['_toyear'] . fixSize( $_POST['_tomonth'] ) . fixSize( $temptodate );
		$fullfromdate = $_POST['_fromyear'] . fixSize( $_POST['_frommonth'] ) . fixSize( $_POST['_fromday'] );
		$cday = fixsize( $_POST['_fromday'] );
		$cmonth = fixsize( $_POST['_frommonth'] );
		$cyear = $_POST['_fromyear'];
		$room = $_POST['_room'];
		$pax = $_POST['_pax'];
		$name = $_POST['_name'];
		$comment = $_POST['_comment'];
		if (strlen($name) < 1)
			$name = 'Guest';
		$price = $_POST['_price'];
		$site = $_POST['_site'];
		$deposit = $_POST['_deposit'];
		$bookid = $_POST['_bookid'];

		while ($fullfromdate <= $fulltodate)
		{
			if (checkdate($cmonth , $cday , $cyear))
			{
				
				$query = 'INSERT INTO `hotel`.`bookings` (`day` ,`month` ,`year` ,`pax` ,`name` ,`price` ,`site` ,`deposit` ,`room` ,`bookid` ,`comment`) VALUES ( ';
				$query .= "'" . fixSize( $cday ). "','". fixSize( $cmonth ). "','". $cyear . "','". $pax . "','".  $name . "','". $price . "','".  $site . "','". $deposit . "','".  $room . "','". $bookid. "','".  $comment . "');";
				$result = mysql_query ($query);
			}
			
			$cday = $cday + 1 ;
			if ($cday > 31)
			{
				$cday = 1;
				$cmonth = $cmonth + 1;
			}
		
			if ($cmonth > 12)
			{
				$cmonth = 1;
				$cyear = $cyear + 1;
			}
		
			$fullfromdate = $cyear . fixSize( $cmonth ). fixSize( $cday );			
		
		}
		echo '<meta HTTP-EQUIV="REFRESH" content="0; url=mindex.php?err"><SCRIPT language="javascript">windows.close();</SCRIPT>';
	}
	else
	{
	$temptodate = $_POST['today'] - 1 ;
	$fulltodate = $_POST['toyear'] . fixSize( $_POST['tomonth'] ) . fixSize( $temptodate );
		$fullfromdate = $_POST['fromyear'] . fixSize( $_POST['frommonth'] ) . fixSize( $_POST['fromday'] );
		$cday = fixsize( $_POST['fromday'] );
		$cmonth = fixsize( $_POST['frommonth'] );
		$cyear = $_POST['fromyear'];
		$room = $_POST['room'];
		$pax = $_POST['pax'];
		$name = $_POST['name'];
		$comment = $_POST['comment'];
		if (strlen($name) < 1)
			$name = 'Guest';
		$price = $_POST['price'];
		$site = $_POST['site'];
		$deposit = $_POST['deposit'];
		$bookid = $_POST['bookid'];
		echo $fullfromdate . '/'. $fulltodate;
		while ($fullfromdate <= $fulltodate)
		{
			if (checkdate($cmonth , $cday , $cyear))
			{
				
				$query = 'INSERT INTO `hotel`.`bookings` (`day` ,`month` ,`year` ,`pax` ,`name` ,`price` ,`site` ,`deposit` ,`room` ,`bookid`,`comment`) VALUES ( ';
				$query .= "'" . fixSize( $cday ). "','". fixSize( $cmonth ). "','". $cyear . "','". $pax . "','".  $name . "','". $price . "','".  $site . "','". $deposit . "','".  $room . "','". $bookid. "','".  $comment  ."');";
				$result = mysql_query ($query);
			}
			
			$cday = $cday + 1 ;
			if ($cday > 31)
			{
				$cday = 1;
				$cmonth = $cmonth + 1;
			}
		
			if ($cmonth > 12)
			{
				$cmonth = 1;
				$cyear = $cyear + 1;
			}
		
			$fullfromdate = $cyear . fixSize( $cmonth ). fixSize( $cday );			
		
		}
			echo '<meta HTTP-EQUIV="REFRESH" target="main_hotel" content="0; url=mindex.php?">';
			echo '<SCRIPT language="JavaScript"><!-- window.location="mindex.php?" //-->;</SCRIPT>';
	
	}

}

function countdays($mline)
{

	
	$totalcount = 0 ; 
	
	$query = "SELECT day,month,year FROM bookings WHERE room='" . $mline['room'] . "' AND bookid='" . $mline['bookid'] . "' AND name='" . $mline['name'] . "' ORDER BY year,month,day";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) 
	{
		$totalcount = $totalcount + 1 ;
		$countret[ $totalcount ][0] = $line['year'];
		$countret[ $totalcount ][1] = $line['month'];
		$countret[ $totalcount ][2] = $line['day'];
	}
	
	$countret[0][0] = $totalcount ;
	
	return $countret;
}


function showform($mline)
{
		
	$countret = countdays($mline);
	$year = date(Y) ;
	$month = date(n) ;
	$day = date(j);
	
	$days = cal_days_in_month(CAL_GREGORIAN, $month, $year);

	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');
		
		
	echo '<b>Edit reservation:</b><br><form name="input" action="edit.php" method="post" target="main_hotel" onsubmit="javascript:window.close();"><table><tr><td>From:</td>';
	echo '<input type="hidden" name="_fromday" value="'. $countret[1][2] . '">' . "\n";
	echo '<input type="hidden" name="_frommonth" value="'. $countret[1][1] . '">' . "\n";
	echo '<input type="hidden" name="_fromyear" value="'. $countret[1][0] . '">' . "\n";
	echo '<input type="hidden" name="_today" value="'. $countret[ $countret[0][0] ][2] . '">' . "\n";
	echo '<input type="hidden" name="_tomonth" value="'. $countret[ $countret[0][0] ][1] . '">' . "\n";
	echo '<input type="hidden" name="_toyear" value="'. $countret[ $countret[0][0] ][0] . '">' . "\n";
	echo '<input type="hidden" name="_pax" value="'. $mline['pax'] . '">' . "\n";
	echo '<input type="hidden" name="_room" value="'. $mline['room'] . '">' . "\n";
	echo '<input type="hidden" name="_name" value="'. $mline['name'] . '">' . "\n";
	echo '<input type="hidden" name="_price" value="'. $mline['price'] . '">' . "\n";
	echo '<input type="hidden" name="_site" value="'. $mline['site'] . '">' . "\n";
	echo '<input type="hidden" name="_deposit" value="'. $mline['deposit'] . '">' . "\n";
	echo '<input type="hidden" name="_bookid" value="'. $mline['bookid'] . '">' . "\n";
	echo '<input type="hidden" name="_comment" value="'. $mline['comment'] . '">' . "\n";

	echo '<td><select name="fromday">';
	for ($i = 1; $i <= 31; $i++)
		if ($i == $countret[1][2])
			echo "\t".'<option value="'. $i .'" selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
			
	echo '</select>';
	
	echo '<select name="frommonth">';
	for ($i = 1; $i <= 12; $i++)
		if ($i == $countret[1][1])
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	echo '<select name="fromyear">';
	for ($i = $year; $i <= $year + 2; $i++)
		if ($i == $countret[1][0])
			echo "\t".'<option value="'. $i .'" selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	
	
		echo '</td></tr><tr><td>To:</td><td><select name="today">';
	for ($i = 1; $i <= 31; $i++)
		if ($i == $countret[ $countret[0][0] ][2] + 1)
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
			
	echo '</select>';
	
	echo '<select name="tomonth">';
	for ($i = 1; $i <= 12; $i++)
		if ($i == $countret[ $countret[0][0] ][1])
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	echo '<select name="toyear">';
	for ($i = $year; $i <= $year + 2; $i++)
		if ($i == $countret[ $countret[0][0] ][0])
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select></td></tr><tr><td>Pax:</td><td>';
	
	echo '<select name="pax">';
	for ($i = 1; $i <=3; $i++)
		if ($i == $mline['pax'])
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	
		echo ' Room:  <select name="room">';

	$query = "SELECT room from bookings WHERE year='0' ORDER BY room";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) 
		foreach ($line as $col_value) 
		if ($col_value != '0')
		{
		if ($col_value == $mline['room'])
			echo "\t".'<option value="'. $col_value .'"  selected>' . $col_value . "</option>\n";
		else
			echo "\t".'<option value="'. $col_value .'" >' . $col_value . "</option>\n";
		}
	echo '</select></td><td>';
	
	
	
	
	
	

	echo '<tr><td>Name:</td><td><input type="text" name="name" value="' . $mline['name'] . '">';
	echo '</td></tr><tr><td>Price:';

	echo '</td><td><select name="price">';
	for ($i = 0; $i <= 99; $i++)
		if ($i == $mline['price'])
			echo "\t".'<option value="'. $i .'" selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
		
		
	echo '</select></td></tr><tr><td>Site:</td><td><input type="text" name="site" value="' . $mline['site'] . '"></td></tr><tr>';
	echo '<tr><td>Deposit:</td><td><input type="text" name="deposit" value="' . $mline['deposit'] . '"></td></tr>';
	echo '<tr><td>Book.id.:</td><td><input type="text" name="bookid" value="' . $mline['bookid'] . '"></td></tr>';
	echo '<tr><td>Comment:</td><td><input type="text" name="comment" value="' . $mline['comment'] . '"></td></tr>';
	echo '<tr><td><input type="submit" name="submit" value="Submit" onsubmit="javascript:windows.close();"></td></tr></form></table>';
}


if (isset($_POST['submit']))
{
	$query = "DELETE FROM bookings WHERE name='" . $_POST['_name'] . "' AND room='" . $_POST['_room'] . "' AND price='" . $_POST['_price'] . "'" ;
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	InsertBooking();

}
else
{
		showForm($aline);
}

?>