const printReceipt = require('../main');

var expectedResult = "Receipts\n" + "------------------------------------------------------------\n" +     
                    "Coca Cola" + "\t\t\t\t\t3\t\t\t1\n" + 
                    "Pepsi-Cola" + "\t\t\t\t\t5\t\t\t2\n" +
                    "Dr Pepper" + "\t\t\t\t\t7\t\t\t1\n" +
                    "------------------------------------------------------------\n" + "Price: 20";


it ('should return receipt when call print receipt given barcodes array', () => {
    expect(printReceipt(['0001', '0003', '0005', '0003'])).toBe(expectedResult);
});
