// inventory.js
const inventory = {};

function createBin() {
    const binNumber = document.getElementById('binInput').value;
    if (binNumber.trim() !== '') {
        if (!inventory[binNumber]) {
            inventory[binNumber] = [];
            alert(`Bin ${binNumber} created.`);
        } else {
            alert(`Bin ${binNumber} already exists.`);
        }
    } else {
        alert('Please enter a bin number.');
    }
}

function deleteBin() {
    const binNumber = document.getElementById('binInput').value;
    if (binNumber.trim() !== '') {
        if (inventory[binNumber]) {
            delete inventory[binNumber];
            alert(`Bin ${binNumber} deleted.`);
        } else {
            alert(`Bin ${binNumber} not found.`);
        }
    } else {
        alert('Please enter a bin number.');
    }
}

function addProductToBin() {
    const binNumber = document.getElementById('binInput2').value;
    const productNumber = document.getElementById('productInput').value;
    if (binNumber.trim() !== '' && productNumber.trim() !== '') {
        if (inventory[binNumber]) {
            if (!inventory[binNumber].includes(productNumber)) {
                inventory[binNumber].push(productNumber);
                alert(`Product ${productNumber} added to bin ${binNumber}.`);
            } else {
                alert(`Product ${productNumber} already exists in bin ${binNumber}.`);
            }
        } else {
            alert(`Bin ${binNumber} not found.`);
        }
    } else {
        alert('Please enter both bin and product numbers.');
    }
}

function deleteProductFromBin() {
    const binNumber = document.getElementById('binInput2').value;
    const productNumber = document.getElementById('productInput').value;
    if (binNumber.trim() !== '' && productNumber.trim() !== '') {
        if (inventory[binNumber]) {
            const productIndex = inventory[binNumber].indexOf(productNumber);
            if (productIndex !== -1) {
                inventory[binNumber].splice(productIndex, 1);
                alert(`Product ${productNumber} deleted from bin ${binNumber}.`);
            } else {
                alert(`Product ${productNumber} not found in bin ${binNumber}.`);
            }
        } else {
            alert(`Bin ${binNumber} not found.`);
        }
    } else {
        alert('Please enter both bin and product numbers for deletion.');
    }
}

function lookupProductBin() {
    const productNumber = document.getElementById('lookupProductInput').value;
    if (productNumber.trim() !== '') {
        for (const bin in inventory) {
            if (inventory[bin].includes(productNumber)) {
                document.getElementById('output').innerHTML = `Product ${productNumber} is in bin ${bin}.`;
                return;
            }
        }
        document.getElementById('output').innerHTML = `Product ${productNumber} not found in any bin.`;
    } else {
        alert('Please enter a product number.');
    }
}

function lookupBinContents() {
    const binNumber = document.getElementById('lookupBinInput').value;
    if (binNumber.trim() !== '') {
        if (inventory[binNumber]) {
            document.getElementById('output2').innerHTML = `Contents of bin ${binNumber}: ${inventory[binNumber].join(', ')}`;
        } else {
            alert(`Bin ${binNumber} not found.`);
        }
    } else {
        alert('Please enter a bin number.');
    }
}
