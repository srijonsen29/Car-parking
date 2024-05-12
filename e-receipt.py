from fpdf import FPDF

# Create instance of FPDF class
pdf = FPDF()
pdf.add_page()

# Set font for the receipt
pdf.set_font("Arial", size=12)

# Add a cell
pdf.cell(200, 10, txt="E-Receipt", ln=1, align='C')

# Add receipt information
receipt_info = {
    "Date": "2022-10-10",
    "Customer Name": "John Doe",
    "Items": [
        {"Item": "Product 1", "Price": "$10"},
        {"Item": "Product 2", "Price": "$20"},
    ],
    "Total Price": "$30"
}

for key, value in receipt_info.items():
    if key == "Items":
        pdf.cell(200, 10, txt=key, ln=1)
        for item in value:
            pdf.cell(80, 10, txt=item["Item"], border=1)
            pdf.cell(80, 10, txt=item["Price"], border=1, ln=1)
    else:
        pdf.cell(80, 10, txt=f"{key}: {value}", ln=1)

# Save the pdf with name .pdf
pdf.output("e_receipt.pdf")