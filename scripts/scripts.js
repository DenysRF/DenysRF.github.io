function fill(item, index) {
    var col;
    if (index < left) {
        col = "images_left";
    } else {
        col = "images_right";
    }
    
    document.getElementById(col).innerHTML += "<img src=\"" + path + item + ".jpg\" class=\"img-fluid\"><p>" + text[index] + "</p>";
}