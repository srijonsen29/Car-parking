const PDFDocument = require('pdfkit');
const fs = require('fs');
const qr = require('qrcode');

// Data for the table
const DATA = [
    ["Date","               ", "Name","       ", "Parking Slot Location","        ", "Price (Rs.)"],
    ["17/05/2024","   ","Srijon Sen", "             ","Lake Mall", "                      ", "500/-"],
    ["Sub Total", "                                 ", "                                        ", "500/-"],
    ["Discount", "                                  ", "                                      ", "-0.00/-"], 
    ["Total", "                                     ", "                                            ", "500/-"]
];

// Create a new PDF document
const doc = new PDFDocument();

// Pipe the PDF output to a file
const pdfStream = fs.createWriteStream('e-receipt.pdf');
doc.pipe(pdfStream);

// Set font size and color
doc.fontSize(20).fillColor('blue');

// Add title
doc.text('E-receipt', { align: 'center' });

// Move to next line
doc.moveDown();

// Set font size and color for table header
doc.fontSize(10).fillColor('black').font('Helvetica-Bold');

// Add table header row
const headerRow = DATA[0];
const bodyRows = DATA.slice(1);

headerRow.forEach((header, i) => {
    doc.text(header, {
        continued: i < headerRow.length - 1,
        align: 'left',
    });
});

// Set font size and color for table body
doc.fontSize(10).fillColor('black').font('Helvetica');

// Add table body rows
bodyRows.forEach(row => {
    doc.moveDown();
    row.forEach((cell, i) => {
        doc.text(cell, {
            continued: i < row.length - 1,
            align: 'left',
        });
    });
});

// Generate unique billing ID
const billingId = Math.floor(Math.random() * 1000000).toString();

// Generate QR code with billing ID and add it to the PDF
qr.toDataURL(billingId, (err, url) => {
    if (err) {
        console.error('Error generating QR code:', err);
        // Close the PDF stream in case of error
        doc.end();
        return;
    }

    // Add QR code image to PDF
    doc.moveDown().image(url, { width: 100, align: 'center' });

    // Finalize PDF
    doc.end();
});
