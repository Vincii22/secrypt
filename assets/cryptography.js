const constellationsBase = [
    // Your constellations array...
];

function getCipherArray(key) {
    const keyArray = key.toUpperCase().split('').filter(c => /[A-Z]/.test(c));
    const shift = keyArray.reduce((acc, char) => acc + char.charCodeAt(0) - 65, 0);
    const shiftIndex = shift % constellationsBase.length;
    return [...constellationsBase.slice(shiftIndex), ...constellationsBase.slice(0, shiftIndex)];
}

function autoEncryptDecrypt() {
    const key = document.getElementById('key').value;
    const message = document.getElementById('message').value.toUpperCase();
    const cipherArray = getCipherArray(key);

    let encrypted = '';
    let decrypted = '';

    for (let char of message) {
        if (char >= 'A' && char <= 'Z') {
            encrypted += cipherArray[char.charCodeAt(0) - 65] + ' ';
            decrypted += String.fromCharCode(cipherArray.indexOf(cipherArray[char.charCodeAt(0) - 65]) + 65);
        } else {
            encrypted += char;
            decrypted += char;
        }
    }

    document.getElementById('encrypted-message').innerText = encrypted.trim();
    document.getElementById('decrypted-message').innerText = decrypted;
}

function openModal() {
    document.getElementById('optionsModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('optionsModal').style.display = 'none';
}
