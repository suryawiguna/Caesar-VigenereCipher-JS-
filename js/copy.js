function fCCopy() {
   var copyText = document.getElementById("cCipher");
   copyText.select();
   document.execCommand("Copy");
   document.getElementById("copyCAlert").innerHTML = "Copied!";
   setTimeout(function() { document.getElementById("copyCAlert").innerHTML = ""}, 1000);
}
function fVCopy() {
   var copyText = document.getElementById("vCipher");
   copyText.select();
   document.execCommand("Copy");
   document.getElementById("copyVAlert").innerHTML = "Copied!";
   setTimeout(function() { document.getElementById("copyVAlert").innerHTML = ""}, 1000);
}