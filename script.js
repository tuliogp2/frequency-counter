
const button = document.getElementById("countButton");
button.addEventListener("click", function () {

    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    words = typedText.split(/\s/);

    const letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        }
        else {
            letterCounts[currentLetter]++;
        }
    }

    const letters = document.getElementById("lettersDiv");
    letters.innerText = '';

    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}" : ${letterCounts[letter]}, `;
        span.innerText = textContent;
        letters.appendChild(span);
    }
    

    const wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        }
        else {
            wordCounts[currentWord]++;
        }
    }

    const cWords = document.getElementById("wordsDiv");
    cWords.innerText = ''

    for (let word in wordCounts) {
        const span = document.createElement("span");
        const textContent = `"${word}" : ${wordCounts[word]}, `;
        span.innerText = textContent;
        cWords.appendChild(span);
    }
});