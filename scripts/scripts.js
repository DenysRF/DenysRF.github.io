function fill(item, index) {
    document.getElementById(col).innerHTML += "<div class=\"text-center\"><img src=\"" + path + item + ".jpg\" loading=\"lazy\" class=\"" + size[index] + "\"></div><p>" + text[index] + "</p>";
}

function fill_text_center(item, index) {
    document.getElementById(col).innerHTML += "<div class=\"text-center\"><img src=\"" + path + item + ".jpg\" loading=\"lazy\" class=\"" + size[index] + "\"></div><div class=\"text-center\"><p>" + text[index] + "</p></div>";
}
