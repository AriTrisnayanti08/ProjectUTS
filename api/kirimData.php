<?php
	// Importing DBConfig.php file.
	include 'connect.php';

	 // Getting the received JSON into $json variable.
	 $json = file_get_contents('php://input');

	 // decoding the received JSON and store into $obj variable.
	$obj = json_decode($json,true);
	$noInduk = $obj['noInduk'];
	$nama = $obj['nama'];
	$telp = $obj['telp'];
	$alamat = $obj['alamat'];
	$tahun = $obj['tahun'];
  $namaPrestasi = $obj['namaPrestasi'];
  $tingkat = $obj['tingkat'];
	 // Creating SQL query and insert the record into MySQL database table.
	$Sql_Query = "INSERT INTO siswa (noInduk,nama,telp,alamat,namaPrestasi,tingkat,tahun)
	values ('$noInduk','$nama','$telp','$alamat','$namaPrestasi','$tingkat','$tahun')";


	 if(mysqli_query($conn,$Sql_Query)){
			$MSG = 'Data Berhasil di Input!' ;
			$json = json_encode($MSG);
			 echo $json ;
	 }
	 else{
			$MSG = 'Input Data Gagal!' ;
			$json = json_encode($MSG);

			 echo $json ;


	 }
	mysqli_close($conn);

?>
