import { validate } from 'uuid';
import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const ElementIDs = {
  ClearCompleted: '.clear-completed',
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  TodoFilters: '.filtro',
  Counter: '#pending-count',
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const CounterText = document.querySelector(ElementIDs.Counter);
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);

    let lista = todoStore.getTodos();
    let datos = [];

    // for (let i = 0; i < lista.length; i++) {
    //   const element = lista[i].done;
    //   if (!element) datos.push(element);
    // }

    lista.forEach((el) => {
      if (!el.done) {
        datos.push(el.done);
      }
    });
    console.log(datos);
    CounterText.textContent = datos.length;
  };

  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const clearComplete = document.querySelector(ElementIDs.ClearCompleted);
  const FiltroSelected = document.querySelectorAll(ElementIDs.TodoFilters);

  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUL.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });
  todoListUL.addEventListener('click', (event) => {
    const element = event.target.type;
    let id = event.target.closest('[data-id]');
    if (element === 'submit') {
      todoStore.deleteTodo(id.getAttribute('data-id'));
      displayTodos();
    }
  });

  clearComplete.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  FiltroSelected.forEach((e) => {
    e.addEventListener('click', (e) => {
      FiltroSelected.forEach((e) => e.classList.remove('selected'));
      e.target.classList.add('selected');
      switch (e.target.textContent) {
        case 'Todos':
          todoStore.setFilter(Filters.All);
          break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pending);
          break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
