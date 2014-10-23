<link rel="stylesheet" type="text/css" href="style.css">
<script language="javascript" src="overlib.js"></script>
<script language="javascript">
 function newpopup()
 {
   mywindow = window.open ("new.php", "_new", "location=0,status=0,scrollbars=0, width=250,height=300");
   mywindow.moveTo(430,250);
}

function editpopup(id)
{
   mywindow = window.open ("edit.php?id=" + id, "_new", "location=0,status=0,scrollbars=0, width=250,height=300");
   mywindow.moveTo(430,250);
}
 </script>
<?php
function countdays($checkid)
{
	$totalcount = 0 ; 
	$query = "SELECT day,month,year FROM bookings WHERE room='" . $checkid[7] . "' AND bookid='" . $checkid[6] . "' AND name='" . $checkid[0] . "'";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) 
	{
		$totalcount = $totalcount + 1 ;
	}
	
	$countret[0] = $totalcount ;
	
	return $countret;
}

if (isset($_GET['err']))
		echo "<div style='color: red; text-align:left; font-size:15px;'><b>Error: Room is booked already on the selected dates!</b></div>";

if (isset($_GET['errdate']))
		echo "<div style='color: red; text-align:left; font-size:15px;'><b>Error: The dates selected is wrong!</b></div>";


	function fixname($name,$length)
	{
		if (strlen($name) > (8 * $length ))
			return substr( $name , 0 , 8 * $length );
		else
			return $name;
	}
	

	if (!($year = $_GET['year']))
		$year = date(Y) ;

	if (!($month = $_GET['month']))
		$month = date(n) ;
	
	$day = date(j);
	
	$days = cal_days_in_month(CAL_GREGORIAN, $month, $year);
	
	$sql = mysql_connect('127.0.0.1', 'icolorvn_hotel', 'Ozsn5iKg')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('icolorvn_hotel') 
		or die('Could not connect to database');

	$nextyear = $year ;
	$prevyear = $year ;
	$nextmonth = $month + 1;
	$prevmonth = $month - 1;
	
	if ($nextmonth > 12)
	{
		$nextmonth = 1;
		$nextyear = $nextyear + 1;
	}
	

	if ($prevmonth < 1)
	{
		$prevmonth = 12;
		$prevyear = $prevyear - 1;
	}
	
	echo '<table style="width: 100% ; text-align:center"><tr><td style="width: 33%; font-family: Verdana; font-size: 20px;">Golden Wings Hotel</td><td style="width: 33% text-align: center">';
	echo '<a href="?month=' . $prevmonth . '&year='. $prevyear .'"><strong><< </a> ' ;
	if ($month == 1)
		echo "January";
	if ($month == 2)
		echo "February";
	if ($month == 3)
		echo "March";
	if ($month == 4)
		echo "April";
	if ($month == 5)
		echo "May";
	if ($month == 6)
		echo "June";
	if ($month == 7)
		echo "July";
	if ($month == 8)
		echo "August";
	if ($month == 9)
		echo "September";
	if ($month == 10)
		echo "October";
	if ($month == 11)
		echo "November";
	if ($month == 12)
		echo "December";
		
	echo ' ' . $year . '<a href="?month=' . $nextmonth . '&year='. $nextyear .'"> >></b></a></td><td style="text-align: right; width: 33%">';
	echo "<a class='pop' href='javascript:newpopup();'>New Booking</a> "; 
	echo "<a class='pop' href='mindex.php?month=". $month . "&year=" . $year ."'>Show Overview</a> ";
	echo "<a class='pop' href='detailed.php?m=". $month . "&y=" . $year ."'>Show Detailed</a></tr></table>";
	// Performing SQL query
	$query = "SELECT room from bookings WHERE year='0' ORDER BY room";
	$result = mysql_query($query)
		or die('Query failed: ' . mysql_error());

	// Printing results in HTML
	echo "<table>\n";
	$roomcount = 0;
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
		foreach ($line as $col_value) 
		{
			if ($col_value != '0')
			{
				$roomcount = $roomcount + 1;
				$booking[0][ $col_value ][0] = $roomcount ;
				$booking[ $roomcount ][0][0] = $col_value ;
			}

		}
	}
	



	$query = "SELECT id,day,name,room,pax,price,deposit,site,bookid,comment FROM bookings WHERE month='" . $month . "' AND year='". $year ."' ORDER BY day";
	$result = mysql_query($query) 
		or die('Query failed: ' . mysql_error());

	// Printing results in HTML
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
		$roomid = $booking[0][ $line['room']][0];
		$booking[ $roomid ][0][0] = $line['room'];
		$booking[ $roomid ][ $line['day'] ][0] = $line['name'];
		$booking[ $roomid ][ $line['day'] ][1] = $line['id'];
		$booking[ $roomid ][ $line['day'] ][2] = $line['pax'];
		$booking[ $roomid ][ $line['day'] ][3] = $line['price'];
		$booking[ $roomid ][ $line['day'] ][4] = $line['deposit'];
		$booking[ $roomid ][ $line['day'] ][5] = $line['site'];
		$booking[ $roomid ][ $line['day'] ][6] = $line['bookid'];
		$booking[ $roomid ][ $line['day'] ][7] = $line['room'];
		$booking[ $roomid ][ $line['day'] ][8] = $line['comment'];
		
		if ($booking[ $roomid ][ $line['day'] - 1 ][0] == $line['name'])
			$booking[$roomid ][ $line['day'] -1][0] = chr(1);
	}

	echo "<table class=booking><tr>\n<td></td>";
	for ($i = 1; $i <= $days; $i++)
		echo '<td class="ar">' . $i . '</td>';
		
	for ($i = 1; $i <= $roomcount; $i++)
	{
		echo '<tr><td class="ar">' . $booking[ $i ][0][0] . "</td>";
		$colspan = 1;
		for ($ii = 1; $ii <= $days; $ii++)
		{
			if ($booking[ $i ][ $ii ][0] == chr(1))
				$colspan = $colspan + 1;
			else
			{
				if (strlen( $booking[ $i ][ $ii ][0]) < 1)
					echo '<td class="e">&nbsp;</td>';
				else
				{
					$fc = 3;
					if ( $booking[ $i ][0][0] == 101)
						$fc = 0 ;
					if ( $booking[ $i ][0][0] == 202)
						$fc = 0 ;
					if ( $booking[ $i ][0][0] == 302)
						$fc = 0 ;
					if ( $booking[ $i ][0][0] == 402)
						$fc = 0 ;
					if ( $booking[ $i ][0][0] == 201)
						$fc = 1 ;
					if ( $booking[ $i ][0][0] == 301)
						$fc = 1 ;
					if ( $booking[ $i ][0][0] == 401)
						$fc = 1 ;
					if ( $booking[ $i ][0][0] == 501)
						$fc = 1 ;
					if ( $booking[ $i ][0][0] == 601)
						$fc = 1 ;
					if ( $booking[ $i ][0][0] == 701)
						$fc = 1 ;

					if ( $fc == 0 )
						echo '<td class="f0" colspan="' . $colspan . '"><a href="javascript:void(0);" ';
					else if ( $fc == 1 )
						echo '<td class="f1" colspan="' . $colspan . '"><a href="javascript:void(0);" ';
					else
						echo '<td class="f" colspan="' . $colspan . '"><a href="javascript:void(0);" ';
						
					echo 'onmouseover="return overlib(';
					echo "'";
					echo '<table class=pop><tr>';
					echo '<td><b>People:</b></td><td>';
					echo $booking[ $i ][ $ii ][2] . '</td></tr><tr><td>';
					$tempja = countdays($booking[ $i ][ $ii ]);
					echo '<b>Days:</b></td><td>' . $tempja[0] . '</td></tr><tr><td>';
					echo '<b>Price:</b></td><td>';
					echo $booking[ $i ][ $ii ][3] . ' USD</td></tr><tr><td><b>Deposit:</b></td><td>';
					echo $booking[ $i ][ $ii ][4] . '</td></tr><tr><td><b>Site:</b></td><td>';
					echo $booking[ $i ][ $ii ][5] . '</td></tr><tr><td><b>Booking ID:</b></td><td>';
					echo $booking[ $i ][ $ii ][6] . '</td></tr><tr><td></td><td></td></tr><tr><td><b>Comment:</b></td><td>';
					echo $booking[ $i ][ $ii ][8] . '</td></tr><tr><td>&nbsp;</td></tr><tr><td>';
					echo "<a class=pop href=javascript:editpopup(". $booking[ $i ][ $ii ][1] .");>Edit</a>";
					echo '</a></td><td><a class=pop href=delete.php?id=' . $booking[ $i ][ $ii ][1] .'>Delete</td></tr>';
					echo '</table>';
					echo "'";
					echo ",CAPTION,'" . $booking[ $i ][ $ii ][0] . "'";
					echo ', MOUSEOFF)" onmouseout="return nd();">';
					echo  fixname($booking[ $i ][ $ii ][0] , $colspan)  ;
					echo '</a></td>';
				}
				
				$colspan = 1;
			}
		}
		echo "</tr>\n";
	}

	echo '</tr></table>';

	// Free resultset



	mysql_free_result($result);

	// Closing connection
	mysql_close($sql);
	echo '<div style="font-family: Verdana; font-size: 10px; text-align: right">Last updated: ' . date('l dS F Y H:i:s');
?>


</form>