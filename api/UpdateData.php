<?php
include 'connect.php';
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);
 $noInduk = $obj['noInduk'];
 $nama = $obj['nama'];
 $telp = $obj['telp'];
 $alamat= $obj['alamat'];
 $namaPrestasi = $obj['namaPrestasi'];
 $tingkat = $obj['tingkat'];
 $tahun = $obj['tahun'];
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE siswa SET nama= '$nama', telp = '$telp', alamat = '$alamat', namaPrestasi = '$namaPrestasi',
 tingkat = '$tingkat', tahun = '$tahun' WHERE noInduk = $noInduk";

 if(mysqli_query($con,$Sql_Query)){
$MSG = 'Update Data Berhasil' ;
$json = json_encode($MSG);
// Echo the message.
 echo $json ;

 }
 else{

 echo 'Update Data Gagal';

 }
 mysqli_close($con);
?>
