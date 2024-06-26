const fs = require('fs');

// Function to remove extra spaces
function removeExtraSpaces(text) {
    return text.replace(/\s+/g, ' ').trim();
}

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    // Remove extra spaces
    const cleanedData = removeExtraSpaces(data);
    
    // Write the cleaned data back to the same file
    fs.writeFile('input.txt', cleanedData, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File has been cleaned and saved.');
    });
});
