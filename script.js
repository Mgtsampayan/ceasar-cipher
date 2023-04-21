function caesarEncrypt(message, key) {
    var encrypted = "";

    for (var i = 0; i < message.length; i++) {
        var ch = message[i];

        if (ch.match(/[a-z]/i)) {
            var code = message.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                ch = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                ch = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }

        encrypted += ch;
    }

    return encrypted;
}

function caesarDecrypt(message, key) {
    var decrypted = "";

    for (var i = 0; i < message.length; i++) {
        var ch = message[i];

        if (ch.match(/[a-z]/i)) {
            var code = message.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                ch = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                ch = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
            }
        }

        decrypted += ch;
    }

    return decrypted;
}

var encryptButton = document.getElementById("encrypt-button");
var decryptButton = document.getElementById("decrypt-button");
var messageField = document.getElementById("message");
var keyField = document.getElementById("key");
var resultDiv = document.getElementById("result");

encryptButton.addEventListener("click", function () {
    var message = messageField.value;
    var key = parseInt(keyField.value);
    var encrypted = caesarEncrypt(message, key);
    resultDiv.innerHTML =
        "<p>Encrypted message:</p><p>" + encrypted + "</p>";
});

decryptButton.addEventListener("click", function () {
    var message = messageField.value;
    var key = parseInt(keyField.value);
    var decrypted = caesarDecrypt(message, key);
    resultDiv.innerHTML =
        "<p>Decrypted message:</p><p>" + decrypted + "</p>";
});