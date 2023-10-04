document.addEventListener("DOMContentLoaded", function() {
    var writingButton = document.getElementById("writing");

    writingButton.addEventListener("click", function() {
        // TO DO 작성+를 클릭하면 todoPost.html로 이동
        window.location.href = "todoPost.html";
    });
});
