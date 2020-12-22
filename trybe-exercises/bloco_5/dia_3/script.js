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

  function createHolidaysButton(buttonName){    
    let buttonsContainer = document.querySelector('.buttons-container');  
    let createButton = document.createElement('button');
    createButton.innerText = buttonName;
    createButton.id = 'btn-holiday';
    buttonsContainer.appendChild(createButton);
  };
  createHolidaysButton('Feriados');
  // 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
    //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

  let clickHolidays = document.querySelector('#btn-holiday');  
  let colorHolidays = document.querySelectorAll('.holiday');
  function markHolidays(){
    for(let index1 = 0; index1 < colorHolidays.length; index1+=1){      
      if(colorHolidays[index1].style.backgroundColor == 'yellow'){
        colorHolidays[index1].style.backgroundColor = 'rgb(238,238,238)'
        colorHolidays[index1].style.border = 'unset'
      } else {
        colorHolidays[index1].style.backgroundColor = 'yellow';
        colorHolidays[index1].style.border = '1px solid'
      }       
    } 
    
  }
  clickHolidays.addEventListener('click', markHolidays)