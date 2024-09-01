// Get the text from the input field
const text = document.getElementById("input").value;

// Remove all instances of bracketed content
text = text.replace(/\[([A-Z][a-z]+, \d+)\]/g, "");

// Remove all instances of "(ibid)"
text = text.replace(/\(ibid\)/g, "");

// Count the number of words in the remaining text
const wordCount = text.split(" ").length;

// Display the word count and the remaining text
document.getElementById("output").innerHTML = `Word count: ${wordCount}<br>Remaining text: ${text}`;