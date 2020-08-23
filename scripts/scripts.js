function fill(item, index) {
    var col = "images";    
    document.getElementById(col).innerHTML += "<img src=\"" + path + item + ".jpg\" class=\"img-fluid\"><p>" + text[index] + "</p>";
}