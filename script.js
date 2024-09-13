// esto actualiza los colores NO BORRAR
function updateBgColorPreview() {
    const bgColor = document.getElementById('bgColor').value;
    document.getElementById('bgColorPreview').style.backgroundColor = bgColor;
}

function updateBodyColorPreview() {
    const bodyColor = document.getElementById('bodyColor').value;
    document.getElementById('bodyColorPreview').style.backgroundColor = bodyColor;
}

// genera el codigo QR
function generateQRCode() {
    const qrText = document.getElementById('qrText').value;
    const bgColor = document.getElementById('bgColor').value.replace("#", "");
    const bodyColor = document.getElementById('bodyColor').value.replace("#", "");
    const design = document.getElementById('design').value;

    if (!qrText) {
        alert('Por favor, ingresa un link válido.');
        return;
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=300x300&bgcolor=${bgColor}&color=${bodyColor}&style=${design}`;
    document.getElementById('qrCode').src = url;
}

//para el QR
function downloadQRCode() {
    const qrImage = document.getElementById('qrCode').src;

    // mensaje de error 1
    if (!qrImage || qrImage === window.location.href) {
        alert('Primero debes generar el código QR antes de descargarlo.');
        return;
    }

    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'qr-code.png';
    link.click();
}

// para ver los colores
updateBgColorPreview();
updateBodyColorPreview();
