let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

//действие при нажатии (по клику) на кнопку выбора задачи
priority.onclick = function () {

  //добавляет или убирает  класс .is-important 
  priority.classList.toggle('is-important');

  //смотрит есть ли у priority класс is-important
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача'; //если да то на кнопке пишется важная задача
  } else {
    priority.textContent = 'Обычная задача'; //если нет то обычная задача
  }
};


//действи при нажатии на кнопку добавить в список
form.onsubmit = function (evt) {
  evt.preventDefault();

  //обьявление переменной которая создает новый элемент li
  let newTask = document.createElement('li');
  //смотрит есть ли у priority класс is-important
  if (priority.classList.contains('is-important')) {
    //если да то добавляет класс is-important у нового li
     newTask.classList.add('is-important');
  } else {
    //если нет то убирает класс is-important у нового li
    newTask.classList.remove('is-important');
  }
  
  //добавляет задачу снизу
  list.append(newTask)

  //добавляет задачу в список
  newTask.textContent = input.value

  //пустое поле ввода после добавления задачи
  input.value = '' 

};


/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/
