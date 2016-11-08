(function() {

    function createButton() {

        var button = document.createElement("button");
        button.textContent = "Back to top";
        button.classList.add("backToTop", "hidden");
        document.body.appendChild(button);
        return button;
    }

    function animateScroll() {
        if (document.body.scrollTop > 0) {
            window.scrollBy(0, -15);
            setTimeout(animateScroll, 10);
        }
    }

    var button = createButton();

    button.addEventListener("click", function(e){

        e.stopPropagation();
        animateScroll();
    }, false);

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop >= 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    },false);
})();