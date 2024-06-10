document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');

    function createTaskElement(task) {
        const div= createElement('div', {}, '');
        const li = createElement('li', {'class':'task'}, task);
        addClasses(li, 'flex justify-between items-center p-2 border-b');

        const completeButton = createButton('Complete', 'ml-2 px-2 py-1 bg-green-500 text-white rounded', () => {
            toggleClass(li, 'line-through');
        });

        const deleteButton = createButton('Delete', 'ml-2 px-2 py-1 bg-red-500 text-white rouned', () => {
            todoList.removeChild(div);
        });

        appendChildren(div, [li, completeButton, deleteButton]);
        return div;
    }

    handleFormSubmit(todoForm, (formData) => {
        const taskElement = createTaskElement(formData.task);
        todoList.appendChild(taskElement);
        todoForm.reset();
    });
});