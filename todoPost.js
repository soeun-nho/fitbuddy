document.addEventListener("DOMContentLoaded", function() {
    var datebox = document.getElementById("datebox");
    var uploadButton = document.getElementById("upload");

    // datebox를 클릭하면 편집 가능한 input 요소를 생성하여 추가합니다.
    datebox.addEventListener("click", function() {
        // (이전 코드와 동일)

        // input 요소에서 포커스가 빠져나가면 값을 저장하고 화면에 표시합니다.
        inputElement.addEventListener("blur", function() {
            var newDate = inputElement.value;
            dateElement.textContent = newDate;
        });
    });

    // 올리기 버튼을 클릭하면 todomain.html 페이지로 이동합니다.
    uploadButton.addEventListener("click", function() {
        // todomain.html 페이지로 이동
        window.location.href = "todomain.html";
    });
});
