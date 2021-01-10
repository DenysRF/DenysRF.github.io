function fill(item, index) {
    var col = "images";    
    document.getElementById(col).innerHTML += "<img src=\"" + path + item + ".jpg\" class=\"img-fluid\"><p>" + text[index] + "</p>";
}

// $('img').mousedown(function (e) {
//   if(e.button == 2) { // right click
//     return false; // do nothing!
//   }
// })