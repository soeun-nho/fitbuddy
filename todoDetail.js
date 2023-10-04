// todoDetail.js

// 'todoboxplus' 요소를 찾습니다.
var todoboxplus = document.getElementById('todoboxplus');

// 'todofirst' 요소를 찾습니다.
var todofirst = document.getElementById('todofirst');

// 'todoboxplus'를 클릭할 때 실행될 함수를 정의합니다.
todoboxplus.addEventListener('click', function() {
    // 새로운 할 일 항목을 생성합니다.
    var newTodoItem = document.createElement('div');
    newTodoItem.className = 'todoItem'; // 새로운 항목의 클래스를 지정할 수 있습니다.
    
    // 새로운 항목의 내용을 설정합니다.
    newTodoItem.innerHTML = `
        <div class="todofirst"></div>
        <div class="todosecond"></div>
        <div class="todocheck">✓</div>
        <div class="todotext">새로운 할 일 항목</div>
    `;
    
    // 'todoList'에 새로운 항목을 추가합니다.
    var todoList = document.getElementById('todoList');
    todoList.appendChild(newTodoItem);
});


// 'todofirst'를 클릭할 때 실행될 함수를 정의합니다.
todofirst.addEventListener('click', function() {
    // 현재 배경색을 가져옵니다.
    var currentColor = window.getComputedStyle(todofirst, null).getPropertyValue('background-color');

    // 현재 배경색이 기본 색상인 경우
    if (currentColor === 'rgb(211, 211, 211)' || currentColor === 'D3D3D3') {
        // 클릭 시 배경색을 변경합니다.
        todofirst.style.backgroundColor = '#C2AC18';
    } else {
        // 다시 기본 색상으로 변경합니다.
        todofirst.style.backgroundColor = '#D3D3D3';
    }
});
