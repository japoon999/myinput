var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click ', function () {
    var ad = document.getElementById('ad').value;
    var soyad = document.getElementById('soyad').value;
    var yas = document.getElementById('yas').value;
    var genderElements = document.getElementsByName('gender');
    var cins;
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            cins = genderElements[i].value;
            break;
        }
    }

    var infoText = "Ad: " + ad + "<br>Soyad: " + soyad + "<br>Yaş: " + yas + "<br>Cins: " + cins;
    console.log(infoText);
    document.getElementById('info').innerHTML = infoText;
});