<?php
include 'connect.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);

 $noInduk = $obj['noInduk'];
 // Creating SQL query and Updating the current record into MySQL database table.
 $Sql_Query = "DELETE FROM siswa WHERE noInduk = '$noInduk'" ;

 if(mysqli_query($con,$Sql_Query)){
$MSG = 'Data Berhasil Dihapus!!!' ;
$json = json_encode($MSG);

// Echo the message.
 echo $json ;
 }
 else{
 echo 'Hapus Data Gagal';
 }
 mysqli_close($conn);
?>
