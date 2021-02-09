function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;

      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();

  // Escreva seu código abaixo.
  // 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
    // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    function createDays(){
    let days = document.querySelector('#days');

    for(index = 0; index < dezDaysList.length; index +=1){
        let createLiDays = document.createElement('li');
        createLiDays.innerText = dezDaysList[index];
        createLiDays.classList.add('day');
        days.appendChild(createLiDays);
        if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31 ){
            createLiDays.classList.add('holiday');
        } if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
            createLiDays.classList.add('friday');
        }
    }
  };
  createDays();

  // 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    //Adicione a este botão a ID "btn-holiday" .
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  let buttonsContainer = document.querySelector('.buttons-container');
  function createHolidaysButton(buttonName){
    let createButton = document.createElement('button');
    createButton.innerText = buttonName;
    createButton.id = 'btn-holiday';
    buttonsContainer.appendChild(createButton);
  };
  createHolidaysButton('Feriados');
  // 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

  let clickHolidays = document.querySelector('#btn-holiday');
  let changeHolidays = document.querySelectorAll('.holiday');
  function markHolidays(){
    for(let index1 = 0; index1 < changeHolidays.length; index1+=1){
      if(changeHolidays[index1].style.backgroundColor == 'yellow'){
        changeHolidays[index1].style.backgroundColor = 'rgb(238,238,238)'
        changeHolidays[index1].style.border = 'unset'
      } else {
        changeHolidays[index1].style.backgroundColor = 'yellow';
        changeHolidays[index1].style.border = '1px solid'
      }
    }
  }
  clickHolidays.addEventListener('click', markHolidays)

  // 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira"
    //Adicione a este botão o ID "btn-friday" .
    //Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  function createFridaysButton(buttonName){
    let fridayButton = document.createElement('button');
    fridayButton.innerText = buttonName;
    fridayButton.id = 'btn-friday';
    buttonsContainer.appendChild(fridayButton);
  }
  createFridaysButton('Sexta-Feira');

  // 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
  let clickFridays = document.querySelector('#btn-friday');
  let changeFridays = document.querySelectorAll('.friday');
  let arrayDays = [4, 11, 18, 25];
  let contador = 0;
  function markFridays(){
    for(let index2 = 0; index2 < changeFridays.length; index2+=1){
      if(changeFridays[index2].innerText == 'Sextou!'){
        changeFridays[index2].innerText = arrayDays[contador];
        contador+=1;
      } else {
        changeFridays[index2].innerText = 'Sextou!'
        contador = 0;
      }
    }
  }
  clickFridays.addEventListener('click', markFridays)

/*   Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */

function dayHover() {
  let days = document.querySelectorAll('.day');
  days.forEach((day) => {
    day.addEventListener('mouseover', (event) => {
      event.target.style.transition = '0.3s';
      event.target.style.fontSize = '26px';
      event.target.style.fontWeight = '600';
    })
  });
}
dayHover()

function dayOut() {
  let days = document.querySelectorAll('.day');
  days.forEach((day) => {
    day.addEventListener('mouseout', (event) => {
      event.target.style.transition = '0.3s';
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  });
}
dayOut();

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
  // GABARITO
};

newTaskSpan('Projeto:');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
  // GABARITO
};

newTaskDiv('pink');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
  // GABARITO
};
setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
  // GABARITO
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
  // GABARITO
};

addNewTask();