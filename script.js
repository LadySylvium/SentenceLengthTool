function highlight() {
    var text = document.getElementById('textarea').innerText;

    var myParagraphs = text.split('\n');
    var html = '';
    myParagraphs.forEach(function(myParagraph) {
        myParagraph = myParagraph.trim();
        var sentences = myParagraph.match(/[^\.!\?]+[\.!\?]+["'”’]?|.+$/g);
        if (sentences != null) {
        sentences.forEach(function(sentence) {
            sentence = sentence.trim();
            if (!sentence) {
                return;
            }
            var className = 'c-';
            var count = sentence.split(" ").length;
            className += count;
            html += '<span class="'+className+'">'+sentence+' </span>';
            });
        }
        html += '<br>';
    });

    document.getElementById('output').innerHTML = html;
    if (document.getElementById('output').textContent == "") {
        document.getElementById('output').style.backgroundColor = "";
    }
    else {
        document.getElementById('output').style.backgroundColor = "white";
    }
}

highlight();
document.getElementById("textarea").addEventListener("keyup", highlight);