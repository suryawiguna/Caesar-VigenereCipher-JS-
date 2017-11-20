function doVigenere(vEncrypt) {
	var vKeyText = document.getElementById("vKey").value; //get value dari Key
	var vPlainText = document.getElementById("vPlain"); //select element PlainText
	var vCipherText = document.getElementById("vCipher"); //select element CipherText
	
	//validasi jika Key masih kosong
	if (vKeyText.length == 0) {
		alert("Key masih kosong");
		return;
	}
	//validasi Key berupa huruf
	var vKey = filterKey(vKeyText);
	if (vKey.length == 0) {
		alert("Key harus berupa huruf");
		return;
	}

	//ENCRYPT
	if (vEncrypt) {
		vCipherText.value = doVEncrypt(vPlainText.value, vKey);
	}
	//DECRYPT
	else {
		vPlainText.value = doVDecrypt(vCipherText.value, vKey);
	}
}

//FUNGSI ENKRIPSI
function doVEncrypt(vText, vKey) {
	var vResult = ""; //deklarasi variable hasil
	for (var i = 0, j = 0; i < vText.length; i++) {
		var codeVPlain = vText.charCodeAt(i); //get code di setiap huruf pada Plain Text
		// Uppercase
		if (65 <= codeVPlain && codeVPlain <=  90) {
			vResult += String.fromCharCode((codeVPlain - 65 + vKey[j % vKey.length]) % 26 + 65);
			j++;
		}
		// Lowercase
		else if (97 <= codeVPlain && codeVPlain <= 122) {
			vResult += String.fromCharCode((codeVPlain - 97 + vKey[j % vKey.length]) % 26 + 97);
			j++;
		}
		else
			vResult += vText.charAt(i);
	}
	return vResult;
}

//FUNGSI DEKRIPSI
function doVDecrypt(vText, vKey) {
	var vResult = ""; //deklarasi variable hasil
	for (var i = 0, j = 0; i < vText.length; i++) {
		var codeVCipher = vText.charCodeAt(i); //get code di setiap huruf pada Cipher Text
		// Uppercase
		if (65 <= codeVCipher && codeVCipher <=  90) {
			var x = (codeVCipher - 65 - vKey[j % vKey.length]);
			if (x < 0) {
				x = 26 + x;
			}
			vResult += String.fromCharCode(x % 26 + 65);
			j++;
		}
		// Lowercase
		else if (97 <= codeVCipher && codeVCipher <= 122) {
			var y = (codeVCipher - 97 - vKey[j % vKey.length]);
			if (y < 0) {
				y = 26 + y;
			}
			vResult += String.fromCharCode(y % 26 + 97);
			j++;
		}
		else
			vResult += vText.charAt(i);
	}
	return vResult;
}

//return kode tiap huruf di key
function filterKey(key) {
	var vHasil = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (65 <= c && c <= 90)
			vHasil.push((c - 65) % 32);
		else if (97 <= c && c <= 122)
			vHasil.push((c - 65) % 32);
	}
	return vHasil;
}