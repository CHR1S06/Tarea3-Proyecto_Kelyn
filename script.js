document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Función que agrega una tarea (Feature/Agregar Tarea)
    function addTask(taskText) {
        const li = document.createElement('li');

        // Creacion de la estructura de la tarea
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Eliminar</button>
        `;

        // Añadir botón para marcar la tarea como completada (Feature/Completar Tarea)
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Añadir botón para eliminar la tarea (Feature/Eliminar Tarea)
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            li.remove();
        });

        // Añadir la tarea a la lista
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        taskInput.value = '';
    }

    // Evento para el botón de agregar tarea (Feature/Botón agregar)
    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
        }
    });

    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
            }
        }
    });
});