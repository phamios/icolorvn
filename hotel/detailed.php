<link rel="stylesheet" type="text/css" href="style.css">
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

function countdays($mline)
{

	
	$totalcount = 0 ; 
	
	$aquery = "SELECT day,month,year FROM bookings WHERE room='" . $mline['room'] . "' AND bookid='" . $mline['bookid'] . "' AND name='" . $mline['name'] . "' ORDER BY year,month,day";
	$aresult = mysql_query($aquery)
		or die('Query failed: ' . mysql_error());
	while ($aline = mysql_fetch_array($aresult, MYSQL_ASSOC)) 
	{
		$totalcount = $totalcount + 1 ;
		$countret[ $totalcount ][0] = $aline['year'];
		$countret[ $totalcount ][1] = $aline['month'];
		$countret[ $totalcount ][2] = $aline['day'];
	}
	
	$countret[0][0] = $totalcount ;
	
	return $countret;
}


	$thetable[0][0] = 1;

	if (!($year = $_GET['y']))
		$year = date(Y) ;

	if (!($month = $_GET['m']))
		$month = date(n) ;
	
	$day = date(j);
	
	
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
	echo '<a href="detailed.php?m=' . $prevmonth . '&y='. $prevyear .'"><strong><< </a> ' ;
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
		
	echo ' ' . $year . '<a href="detailed.php?m=' . $nextmonth . '&y='. $nextyear .'"> >></b></a></td><td style="text-align: right; width: 33%">';
	echo "<a class='pop' href='javascript:newpopup();'>New Booking</a> "; 
	echo "<a class='pop' href='mindex.php?month=". $month . "&year=" . $year ."'>Show Overview</a> ";
	echo "<a class='pop' href='detailed.php?m=". $month . "&y=" . $year ."'>Show Detailed</a></tr></table>";
	// Performing SQL query
	
	
	
	$sql = mysql_connect('127.0.0.1', 'root', '')
		or die('Could not connect: ' . mysql_error());
		
	mysql_select_db('hotel') 
		or die('Could not connect to database');
	$query = "SELECT * from bookings WHERE year='" . $year ."' AND month='" . $month . "' ORDER BY year,month,day";
	$result = mysql_query($query)
	or die('Query failed: ' . mysql_error());

	// Printing results in HTML

	while ($data = mysql_fetch_array($result, MYSQL_ASSOC))
	{
		$dtf = 0;
		for ($dt = 1; $dt <= $thetable[0][0]  ; $dt++)
			if (($thetable[ $dt ][0] == $data['name']) AND ( $thetable[ $dt ][1] == $data['room']))
			{
				$dtf = $dt;
				break;
			}

		if ($dtf > 0)
		{
			$thetable[ $dt ][3] = $data['day'] . '/' . $data['month'] . '/' . $data['year'] ;
		}
		else
		{
			$tempnr = $thetable[0][0] ;
			$thetable[ $tempnr ][0] = $data['name'];
			$thetable[ $tempnr ][1] = $data['room'];
			$daysc = countdays($data);
			$thetable[ $tempnr ][2] = $daysc[1][2] . '/' . $daysc[1][1] . '/' . $daysc[1][0] ;
			$thetable[ $tempnr ][3] = $daysc[ $daysc[0][0]][2] . '/' . $daysc[ $daysc[0][0]][1] . '/' . $daysc[ $daysc[0][0]][0] ;
			$thetable[ $tempnr ][4] = $data['price'];
			$thetable[ $tempnr ][5] = $data['pax'];
			$thetable[ $tempnr ][6] = $data['site'];
			$thetable[ $tempnr ][7] = $data['deposit'];
			$thetable[ $tempnr ][8] = $data['bookid'];
			$thetable[ $tempnr ][9] = $data['comment'];
			$tempforja = $thetable[0][0] ;
			$tempforja = $tempforja + 1 ;
			$thetable[0][0] = $tempforja ;
		}
	
	}
	
	echo '<table class="detailed">';
	echo '<tr><td class="detailed"><b>Name</b></td><td class="detailed"><b>From</b></td><td class="detailed"><b>To</b></td><td class="detailed"><b>Room</b></td><td class="detailed"><b>Price</b></td><td class="detailed"><b>Pax</b></td><td class="detailed"><b>Site</b></td><td class="detailed"><b>Deposit</b></td><td class="detailed"><b>Booking ID</b></td><td class="detailed"><b>Comment</b></td></tr>';
	for ($drti = 1; $drti <= $thetable[0][0]; $drti++)
	{
		echo '<tr><td class="detailed">'. $thetable[ $drti ][0] .'</td><td class="detailed">' . $thetable[ $drti ][2] .'</td><td class="detailed">' . $thetable[ $drti ][3] . '</td><td class="detailed">' . $thetable[ $drti ][1] . '</td><td class="detailed">' . $thetable[ $drti ][4] . '</td><td class="detailed">' . $thetable[ $drti ][5] ;
		echo '</td><td class="detailed">' . $thetable[ $drti ][6]  . '</td><td class="detailed">' . $thetable[ $drti ][7]  . '</td><td class="detailed">' . $thetable[ $drti ][8] .'</td><td class="detailed">' . $thetable[ $drti ][9] .'</td></tr>';
	}
	echo '</table>';
	

?>