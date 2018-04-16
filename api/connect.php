<?php
$servername = "localhost";
$username = "id5358009_aritrisna1078";
$password = "mangari97";
$dbname = "id5358009_prestasi";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
	//echo "Koneksi berhasil";
}
?>
