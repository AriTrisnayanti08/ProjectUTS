<?php
include 'connect.php';

$conn = new mysqli($servername, $username, $password, $dbname);
 if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM siswa";
$result = $conn->query($sql);
if ($result->num_rows >0) {
  while($row[] = $result->fetch_assoc()) {
 $item = $row;
 $json = json_encode($item);
 }
} else {
 echo "No Results Found.";
}
 echo $json;
$conn->close();
?>
