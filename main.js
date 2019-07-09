const items = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]

function printReceipt(barcodes) {
    var barcodesCount = {};
    var barcodeItemNames = {};
    var barcodeItemPrice = {};
    var totalAmount = 0;
    for(let i = 0; i < barcodes.length; i++) {
        var each = barcodes[i]; 
        barcodesCount[each] = (barcodesCount[each] +1 ) || 1; 
    }
    for(let i = 0; i < items.length; i++) {
        if(barcodes.indexOf(items[i]['id']) > -1) {
            barcodeItemNames[items[i]['id']] = items[i]['name'];
            barcodeItemPrice[items[i]['id']] = items[i]['price'];
        }
    }
    var Receipt = "Receipts\n" + "------------------------------------------------------------\n";
    for(let id in barcodesCount) {
        Receipt += barcodeItemNames[id] + '\t\t\t\t\t' +barcodeItemPrice[id] + '\t\t\t' +barcodesCount[id] + '\n';
        totalAmount += barcodesCount[id] * barcodeItemPrice[id];

    }
    Receipt += "------------------------------------------------------------\n" + "Price: " + totalAmount;
    return Receipt;
}

module.exports = printReceipt;
