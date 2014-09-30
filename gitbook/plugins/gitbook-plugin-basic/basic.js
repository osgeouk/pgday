require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        document.getElementsByClassName("book")[0].classList.remove("with-summary");
    });
});
