document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const filterInput = document.getElementById('filter-input');
    const sortSelect = document.getElementById('sort-select');

    let todos = [];

    function createTaskElement(task) {
        const div= createElement('div', {}, '');
        const li = createElement('li', {'class':'task'}, task.text);
        addClasses(li, 'flex justify-between items-center p-2 border-b');

        const completeButton = createButton('Complete', 'ml-2 px-2 py-1 bg-green-500 text-white rounded', () => {
            toggleClass(li, 'line-through');
        });

        const deleteButton = createButton('Delete', 'ml-2 px-2 py-1 bg-red-500 text-white rouned', () => {
            todoList.removeChild(div);
            todos = todos.filter(t => t !== task);
            filterAndSortTodos();
        });

        appendChildren(div, [li, completeButton, deleteButton]);
        return div;
    }

    function renderTodos(todos) {
        removeAllChildren(todoList);
        const todoElements = todos.map(createTaskElement);
        appendChildren(todoList, todoElements);
    }

    function filterAndSortTodos() {
        let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filterInput.value.toLowerCase()));

        if (sortSelect.value === 'asc') {
            filteredTodos.sort((a, b) => a.text.localeCompare(b.text));
        } else if (sortSelect.value === 'desc') {
            filteredTodos.sort((a, b) => b.text.localeCompare(a.text));
        }

        renderTodos(filteredTodos);
    }

    // handleFormSubmit(todoForm, (formData) => {
    //     const taskElement = createTaskElement(formData.task);
    //     todoList.appendChild(taskElement);
    //     todoForm.reset();
    // });

    handleFormSubmit(todoForm, (formData) => {
        const newTask = { text: formData.task };
        todos.push(newTask);
        todoForm.reset();
        filterAndSortTodos();
    });

    filterInput.addEventListener('input', filterAndSortTodos);
    sortSelect.addEventListener('change', filterAndSortTodos);
});