var textarea = document.getElementById("sendbox"),
    batton = document.getElementById("find");

batton.addEventListener("click", function() {
    var text, words, dictionary = {};
    /* пердпологается, что школьники решат задачу
    серией вызовов replace для лишних символов */
    text = textarea.value.replace(/[~A-Яа-яА-Za-z]/g, " ");
    words = text.split(" ").filter(function(word) {
        return word.length > 4;
    }) .map(function(word) {
        return word.toLowerCase();
    });
    words.forEach(function(word) {
        if(!(word in dictionary)) {
            dictionary[word] = 0;
        }
        dictionary[word] += 1;
    });
    var maxWord, maxCount = 0, word;
    for(word in dictionary) {
        if(dictionary[word] > maxCount) {
            maxCount = dictionary[word];
            maxWord = word;
        }
    }
    alert(maxWord);
});
