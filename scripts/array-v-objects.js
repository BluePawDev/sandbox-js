console.log('js/jq sourced!');

var people = [
{name : 'Casey', rate: 70, active: true},
{name : 'Camille', rate: 80, active: true},
{name : 'Gordon', rate: 75, active : false},
{name : 'Nigel', rate : 120, active: true}
];

var people = {
Casey: {rate: 70, active: true},
Camille: {rate : 80, active: true},
Gordon: {rate: 75, active: false} ,
Nigel: {rate: 120, active: true }
};

var time;
function resetTime(){
  time = setInterval(buttonNext(), 10000);
}

function btnNext() { // start of btnNext
  index++;
  arrayCounter();
  carouselText();
  clearInterval(time);
  resetTime();
} // end of btnNext
