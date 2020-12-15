document.querySelectorAll('#header-container')[0].style.backgroundColor = 'rgb(0, 153, 51)';
document.querySelectorAll('#header-container')[0].style.color = 'white';
document.querySelectorAll('.emergency-tasks')[0].style.backgroundColor = 'rgb(255, 153, 153)';
let emergency = document.querySelectorAll('.emergency-tasks h3');
for(let index = 0; index < emergency.length; index +=1){
    emergency[index].style.backgroundColor = 'rgb(179, 0, 179)'
};
document.querySelectorAll('.no-emergency-tasks')[0].style.backgroundColor = 'rgb(255, 224, 102)';
let noEmergency = document.querySelectorAll('.no-emergency-tasks h3')
for(let indexNo = 0; indexNo < noEmergency.length; indexNo +=1){    noEmergency[indexNo].style.backgroundColor = 'black'
}
let nomeH3 = document.getElementsByTagName('h3');
for(indexH3 = 0; indexH3 < nomeH3.length; indexH3 +=1){
    nomeH3[indexH3].style.color = 'white'
};
document.getElementById('footer-container').style.backgroundColor = 'rgb(0, 51, 0)'
