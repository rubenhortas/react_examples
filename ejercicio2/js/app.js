var
    // TEMPLATE | DOM ELEMENTS
    DOM_TODOLIST_CONTAINER = '#todo-list-container',
    DOM_TODOLIST = '#todo-list',
    DOM_NEWTODO_INPUT = '#new-todo-input',
    DOM_SAVETODO_BT = '#save-todo-bt',

    // STORE RELATED
    DOM_ALERT_FIRST_TIME = '#alert-first-time',
    PERSISTENT_OBJECT_KEY = 'todoList',
    PERSISTENT_OBJECT_DATA_PATH = 'data/defaultdata.json',
    PERSISTENT_OBJECT_TODO_ID = 'id',
    PERSISTENT_OBJECT_TODO_TXT = 'todoTxt',

    // JQUERY SELECTORS
    $todoList,
    $saveTodoBt,
    $newTodoInput,

    // APP PRIVATE VARS
    _todoList = [],  // List of todos
    _idCounter = 0;             // For the next todo to save






function render() {

    console.log("//RENDER");

    // Reference to the DOM element that will contain the todo list
    var $todoListContainer = $(DOM_TODOLIST_CONTAINER);

    // Empty old todo list
    $todoList.detach();
    $todoList.empty();

    // Add to DOM
    $todoListContainer.append($todoList);
    // Create new todo list
    /*
   for( i=0;i<_todoList.length;i++){
         var item = getTodoItem(_todoList[i]);
         $todoList.append(item);
    }

    $todoListContainer.append( $todoList ).get(0);
    */

    ReactDOM.render(
        TodoList({ lista: _todoList }),
        document.getElementById('todo-list'),
    );
}

const TodoList = (props) => {
    const listItems = props.lista.map((item) => {

        return React.createElement(
            'li',
            {
                className: 'list-item'
            },
            `${item.todoTxt}`
        )
    });

    return (
        listItems
    )
}


function getTodoItem(item) {
    var itemHTML = '<li class="list_item">';
    itemHTML += '<div href="#" class="list_item-todo">' + item.todoTxt + '</div>';
    itemHTML += '<button data-id="' + item.id + '"  class="btn bt_ list_item-removeBt bt_grey">';
    itemHTML += '<span class="glyphicon glyphicon-trash"></span> Remove</button>';
    itemHTML += '</li>';
    return itemHTML;
}

// Add new todo
function saveNewTodo() {

    console.log("//SAVE NEW TODO");

    // Recover todo data
    var todoTxt = $newTodoInput.val();

    // Update list if new todo introduced
    if (todoTxt != "") {

        // Update todo list
        var newTodo = {
            id: _idCounter,
            todoTxt: todoTxt
        };
        addTodo(newTodo, true);

        // Empty input field
        $newTodoInput.val("");

    }

}

// STORE DATA
function checkTodoListData() {
    var storedData;
    var $alertFirstTime;

    storedData = store.get(PERSISTENT_OBJECT_KEY);
    $alertFirstTime = $(DOM_ALERT_FIRST_TIME);

    if (storedData) {
        $alertFirstTime.remove();
        onLoadTodosDataSuccess(storedData);
    }
    else {
        console.log("//NO DATA");
        onLoadTodosDataSuccess(JSON.parse('[{"id":0, "todoTxt":"Tarea1"},{"id":1,"todoTxt":"Tarea2"},{"id":2,"todoTxt":"Tarea3"}]'));
    }
};

function loadFirstTimeData() {
    $.ajax({
        dataType: "json",
        url: PERSISTENT_OBJECT_DATA_PATH,
        success: onLoadTodosDataSuccess,
        error: onLoadTodosDataError
    });
}

function onLoadTodosDataSuccess(data) {
    var i,
        nTodos,
        currentTodoData;

    nTodos = data.length;
    for (i = 0; i < nTodos; i++) {
        currentTodoData = data[i];
        addTodo(currentTodoData, false);
    }

    render();
};

function onLoadTodosDataError() {
    console.log('Error loading data.');
};

function savePersistentData() {
    var i,
        nTodos,
        currentTodo,
        savedTodo,
        todoListJSON,

        todoListJSON = [];
    nTodos = _todoList.length;
    for (i = 0; i < nTodos; i++) {
        currentTodo = _todoList[i];

        savedTodo = {};
        savedTodo[PERSISTENT_OBJECT_TODO_ID] = currentTodo.id;
        savedTodo[PERSISTENT_OBJECT_TODO_TXT] = currentTodo.todoTxt;
        todoListJSON.push(savedTodo);
    }

    store.clear();
    store.set(PERSISTENT_OBJECT_KEY, todoListJSON);
};

function addTodo(newTodoData, forceRender) {

    _todoList.push(newTodoData);
    _idCounter++;

    savePersistentData();
    if (forceRender) { render(); }
};

function deleteTodo(e) {

    console.log("//DELETE ITEM");

    var $target = $(e.currentTarget);

    console.log("CLICK:" + parseInt($target.data('id')));

    deleteTodoById(parseInt($target.data('id')));
}

function deleteTodoById(id) {

    console.log("TODO DELETED");

    var i = 0,
        nTodos = _todoList.length;

    for (i = 0; i < nTodos; i++) {
        if (_todoList[i].id == id) {
            _todoList.splice(i, 1);
            break;
        }
    }

    savePersistentData();
    render();
}

function createHeader() {
    const $header = document.getElementById('main_header');

    function Header({ title }) {
        return React.createElement(
            'p',
            {
                className: 'Tittle',
            },
            `${title}`
        )
    }

    const header = React.createElement(
        Header,
        {
            title: 'ReactTODOs',
        }
    )

    ReactDOM.render(
        header,
        $header
    );
}

window.onload = function () {

    console.log("/// APP INIT");

    // DOM ELEMENTS
    $todoList = $(DOM_TODOLIST);
    $saveTodoBt = $(DOM_SAVETODO_BT);
    $newTodoInput = $(DOM_NEWTODO_INPUT);

    // CLICK EVENTS
    $todoList.on('click', '.list_item-removeBt', deleteTodo);
    $saveTodoBt.on('click', saveNewTodo);
    // Disable form submit
    $('form').submit(function () {
        return false;
    });

    // DEFAULTS
    checkTodoListData();
    createHeader();
};
