<link rel="stylesheet" type="text/css" href="style.css">
<?php

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
				
				$query = 'INSERT INTO `bookings` (`day` ,`month` ,`year` ,`pax` ,`name` ,`price` ,`site` ,`deposit` ,`room` ,`bookid` ,`comment`) VALUES ( ';
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
			echo '<meta HTTP-EQUIV="REFRESH" target="main_hotel" content="0; url=mindex.php?">';
			echo '<SCRIPT language="JavaScript"><!-- window.location="mindex.php?" //-->;</SCRIPT>';
	
	}

}

function showform()
{
		
	if (!($year = $_GET['year']))
		$year = date(Y) ;

	if (!($month = $_GET['month']))
		$month = date(n) ;
	
	$day = date(j);
	
	$days = cal_days_in_month(CAL_GREGORIAN, $month, $year);

	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');
		
		
	echo '<b>New reservation:</b><br><form name="input" action="new.php" method="post" target="main_hotel"><table><tr><td>From:</td>';
	echo '<td><select name="fromday">';
	for ($i = 1; $i <= 31; $i++)
		if ($i == $day)
			echo "\t".'<option value="'. $i .'" selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
			
	echo '</select>';
	
	echo '<select name="frommonth">';
	for ($i = 1; $i <= 12; $i++)
		if ($i == $month)
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	echo '<select name="fromyear">';
	for ($i = $year; $i <= $year + 2; $i++)
		echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	
	
		echo '</td></tr><tr><td>To:</td><td><select name="today">';
	for ($i = 1; $i <= 31; $i++)
		if ($i == $day)
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
			
	echo '</select>';
	
	echo '<select name="tomonth">';
	for ($i = 1; $i <= 12; $i++)
		if ($i == $month)
			echo "\t".'<option value="'. $i .'"  selected>' . $i . "</option>\n";
		else
			echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select>';
	
	echo '<select name="toyear">';
	for ($i = $year; $i <= $year + 2; $i++)
		echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select></td></tr><tr><td>Pax:</td><td>';
	
	echo '<select name="pax">';
	for ($i = 1; $i <=3; $i++)
		echo "\t".'<option value="'. $i .'" >' . $i . "</option>\n";
	echo '</select> ';	
	
	
		echo ' Room:  <select name="room">';
	for ($i = $year; $i <= $year + 2; $i++)

	$query = "SELECT room from bookings WHERE year='0' ORDER BY room";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) 
		foreach ($line as $col_value) 
						if ($col_value != '0')
			{
			echo "\t".'<option value="'. $col_value .'" >' . $col_value ."</option>\n";
				}
	echo '</select></td><td>';
	
	
	
	
	
	

	echo '<tr><td>Name:</td><td><input type="text" name="name">';
	echo '</td></tr><tr><td>Price:';

	echo '</td><td><select name="price">';
	for ($i = 0; $i <= 99; $i++)
		echo "\t".'<option value="' . $i . '">' . $i . "</option>\n";
	echo '</select></td></tr><tr><td>Site:</td><td><input type="text" name="site"></td></tr><tr>';
	echo '<tr><td>Deposit:</td><td><input type="text" name="deposit"></td></tr>';
	echo '<tr><td>Book.id.:</td><td><input type="text" name="bookid"></td></tr>';
	echo '<tr><td>Comment:</td><td><input type="text" name="comment"></td></tr>';
	echo '<tr><td><input type="submit" name="submit" value="Submit"></td></tr></form></table>';
}

if (isset($_POST['submit']))
{
	$day = $_POST['fromday'];
	$month = $_POST['frommonth'];
	$year = $_POST['fromyear'];
	$pax = $_POST['pax'];
	$name = $_POST['name'];
	$price = $_POST['price'];
	$site = $_POST['site'];
	$deposit = $_POST['deposit'];
	$room = $_POST['room'];
	$bookid = $_POST['bookid'];
	$comment = $_POST['comment'];

//	$query = 'INSERT INTO `bookings` (`day` ,`month` ,`year` ,`pax` ,`name` ,`price` ,`site` ,`deposit` ,`room` ,`bookid`) VALUES ( ';
//	$query .= "'" . $day . "','". $month . "','". $year . "','". $pax . "','".  $name . "','". $price . "','".  $site . "','". $deposit . "','".  $room . "','". $bookid.  "');";

	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');	
	echo $query ;
	insertBooking();

	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	
	echo $result ;
}
else
{
	showform();
}
	
	?>
	