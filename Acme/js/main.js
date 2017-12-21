var toggleExpandable = document.getElementsByClassName("toggle");
for (var i = 0; i<toggleExpandable.length; i++) {
    toggleExpandable[i].onclick = function() {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}