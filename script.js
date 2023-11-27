const qrDiv = document.getElementById('qrcode');
let qrCodeInstance = null;

function generateQR() {
  const inputValue = document.getElementById('inputLink').value;
  if (inputValue.trim() !== '') {
    qrDiv.innerHTML = '';
    qrCodeInstance = new QRCode(qrDiv, {
      text: inputValue,
      width: 256,
      height: 256
    });
  }
}

function downloadImage() {
  if (qrCodeInstance) {
    const canvas = qrDiv.querySelector('canvas');
    const image = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
  }
}

function downloadPDF() {
  if (qrCodeInstance) {
    const canvas = qrDiv.querySelector('canvas');
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0, 150, 150);
    pdf.save('qrcode.pdf');
  }
}
