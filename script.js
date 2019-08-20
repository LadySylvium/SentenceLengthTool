function highlight() {
    // var text = $('textarea').val();
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

    // $('#output').html(html);
    document.getElementById('output').innerHTML = html;
}

highlight();
// $('textarea').on('keyup', highlight);
document.getElementById("textarea").addEventListener("keyup", highlight);

// switch(count) {
//     case 1:
//         className = 'one';
//         break;
//     case 2:
//         className = 'two';
//         break;
//     case 3:
//         className = 'three';
//         break;
//     case 4:
//         className = 'four';
//         break;
//     case 5:
//         className = 'five';
//         break;
//     case 6:
//         className = 'six';
//         break;
//     case 7:
//         className = 'seven';
//         break;
//     case 8:
//         className = 'eight';
//         break;
//     case 9:
//         className = 'nine';
//         break;
//     case 10:
//         className = 'ten';
//         break;
//     case 11:
//         className = 'eleven';
//         break;
//     case 12:
//         className = 'twelve';
//         break;
//     case 13:
//         className = 'thirteen';
//         break;
//     case 14:
//         className = 'fourteen';
//         break;  
//     case 15:
//         className = 'fifteen';
//         break;
//     case 16:
//         className = 'sixteen';
//         break;
//     case 17:
//         className = 'seventeen';
//         break;
//     case 18:
//         className = 'eighteen';
//         break;
//     case 19:
//         className = 'nineteen';
//         break;
//     case 20:
//         className = 'twenty';
//         break;
//     case 21:
//         className = 'twentyone';
//         break;  
//     case 22:
//         className = 'twentytwo';
//         break;
//     case 23:
//         className = 'twentythree';
//         break;
//     case 24:
//         className = 'twentyfour';
//         break;
//     case 25:
//         className = 'twentyfive';
//         break;
//     case 26:
//         className = 'twentysix';
//         break;
//     case 27:
//         className = 'twentyseven';
//         break;
//     case 28:
//         className = 'twentyeight';
//         break;
//     case 29:
//         className = 'twentynine';
//         break;
//     case 30:
//         className = 'thirty';
//         break;
//     default:
//         className = 'longest';
// }


// if (count < 10) {
//     className = 'shortest';
// } else if (count < 20) {
//     className = 'short';
// } else if (count < 30) {
//     className = 'medium';           
// } else if (count < 45) {
//     className = 'long';
// }