# SentenceLengthTool
Accepts input into a contenteditable div, outputs the input with colored backgrounds based on sentence length.

Credit to Jonathan Williamson for the code snippet that would inspire this project (https://codepen.io/jon-w1/full/YpNPQr).

Differences between the above and this SentenceLengthTool are as follows:
* SentenceLengthTool differentiates more completely between sentences of different word lengths (going from 1-3 words in red, and then changing color with each additional word until sentences with 30+ words, which are in light blue). 
* SentenceLengthTool uses a contenteditable div rather than a textarea for inputting data.
* SentenceLengthTool accounts for paragraph breaks and forms of punctuation besides periods when outputting data.
* SentenceLengthTool has a UI which is perhaps a little easier on the eyes.
