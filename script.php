<?php
//[insert_php]
$filename ='commentaire.json';
$pseudo=$_POST['name'];
$com=$_POST['comment'];



		//ouverture du file
			 
		//enlevage du premier caractere
			$filename ='commentaire.json';
			$fp = fopen ($filename, "r+");
			fseek($fp,0);
			fputs($fp,' '."\n");
			fclose($fp);
		//ajout de la ligne au dessu du fichier
		   $lines = file('/home/walid/Bureau/lamp/Product-hunt-like/js/'.$filename);
	  	   $fopen = fopen('/home/walid/Bureau/lamp/Product-hunt-like/js/'.$filename, "w+");
	  	   fwrite( $fopen, '['."");
		   fwrite( $fopen, ' {"pseudo": "'.$pseudo.'", "com": "'.$com.'"},'."");
		   foreach ($lines as $line) { fwrite( $fopen, "$line"); }	  
		   fclose($fopen);
	  	

		echo "\n"."ok";
?>