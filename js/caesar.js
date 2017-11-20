function doCaesar(cEncrypt) {
	var cKeyText = document.getElementById("cKey").value; //get value dari Key
	var cPlainText = document.getElementById("cPlain"); //select element PlainText
	var cCipherText = document.getElementById("cCipher"); //select element CipherText
	var cKey = parseInt(cKeyText); //konversi ke integer/angka

	//validasi jika Key masih kosong
	if (cKeyText.length == 0) {
		alert("Key masih kosong");
		return;
	}
	//validasi Key hanya berupa angka (tidak ada simbol dan huruf)
	if (!/^-?\d+$/.test(cKeyText)) {
		alert("Key harus berupa angka");
		return;
	}
	//validasi Key diantara 0 sampai 25
	if (cKey < 0 || cKey >= 26) {
		alert("Key harus antara 0-25");
		return;
	}
	
	//ENCRYPT
	if (cEncrypt) {
		cCipherText.value = doCEncrypt(cPlainText.value, cKey);
	}
	//DECRYPT
	else {
		cPlainText.value = doCDecrypt(cCipherText.value, cKey);
	}
}

//FUNGSI ENKRIPSI
function doCEncrypt(cText, cKey) {
	var cResult = ""; //deklarasi variable hasil
	for (var i = 0; i < cText.length; i++) {
		var codeCPlain = cText.charCodeAt(i); //get code di setiap huruf pada Plain Text
		// Uppercase
		if (65 <= codeCPlain && codeCPlain <=  90)
			cResult += String.fromCharCode((((codeCPlain - 65) + cKey) % 26) + 65);
		// Lowercase
		else if (97 <= codeCPlain && codeCPlain <= 122)
			cResult += String.fromCharCode((((codeCPlain - 97) + cKey) % 26) + 97); 
		else
			cResult += cText.charAt(i);
	}
	return cResult;
}

//FUNGSI DEKRIPSI
function doCDecrypt(cText, cKey) {
	var cResult = ""; //deklarasi variable hasil
	for (var i = 0; i < cText.length; i++) {
		var codeCCipher = cText.charCodeAt(i); //get code di setiap huruf pada Cipher Text
		// Uppercase
		if (65 <= codeCCipher && codeCCipher <=  90) {
			var x = ((codeCCipher - 65) - cKey); //memisahkan perhitungan
			//jika hasilnya minus
			if (x < 0) {
				x = 26 + x;
			}
			cResult += String.fromCharCode((x % 26) + 65);
		}
		// Lowercase
		else if (97 <= codeCCipher && codeCCipher <= 122) {
			var x = ((codeCCipher - 97) - cKey);
			if (x < 0) {
				x = 26 + x;
			}
			cResult += String.fromCharCode((x % 26) + 97);
		}
		else {
			cResult += cText.charAt(i);  // Copy
		}
	}
	return cResult;
}