document.addEventListener("DOMContentLoaded", () => {

    
    const onScanSuccess = (decodeText, decodeResult) => {
       
        const resultString = JSON.stringify(decodeResult, null, 2);
        alert(`You QR code is: ${decodeText} Result: ${resultString}`);
    };

    
    const htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess);

});
