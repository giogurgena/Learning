(function () {
    "use strict";
    function createMenuDots() {
        var li = document.createElement("li");
        li.setAttribute("class", "menuDots");
        var text = document.createTextNode(":::");
        li.appendChild(text);
        var menu = document.getElementById("Menu");

        for (var i = 0; i < menu.children.length; i++) {
            if (i !== menu.children.length - 1) {
                var child = menu.children[i];
                child.parentNode.insertBefore(li, child.nextSibling);
            }
        }
    }
    // createMenuDots();


    var menu = document.getElementById("Menu");



    // viewChangeEventListener

    document.getElementById("thumbViewBtn").addEventListener("click", function () {
        // $(document.getElementById("thumbView")).show();
        // $(document.getElementById("listView")).hide();
        $("#thumbView").show(300);
        $("#listView").hide(300);
    });

    document.getElementById("listViewBtn").addEventListener("click", function () {
        // $(document.getElementById("thumbView")).hide();
        // $(document.getElementById("listView")).show();

        jQuery("#thumbView").hide(300);
        $("#listView").show(300);
    });


    // removePost

    // document.getElementById("removeListPostText").addEventListener("click", function () {
    //     document.getElementById("listPostText").style.display = "none";
    // });

    // document.getElementById("showListPostText").addEventListener("click", function () {
    //     document.getElementById("listPostText").style.display = "block";
    // });


    document.querySelectorAll(".remove").forEach(function (item) {
        item.addEventListener("click", function (event) {
            var element = event.target;
            var parent = element.parentElement;
            var text = parent.children[1];
            text.style.display = "none";
        });
    });



    document.querySelectorAll(".show").forEach(function (item) {
        item.addEventListener("click", function (event) {
            var element = event.target;
            var parent = element.parentElement;
            var text = parent.children[1];
            text.style.display = "block";
        });
    });

    document.querySelectorAll(".overlay .btn").forEach(function (item){
        item.addEventListener("click", function (event){
            var photo = event.target;
            var parent = photo.parentElement.parentElement;

        parent.parentNode.removeChild(parent);
        });
    });

})();
