var myFoods = ['Pizza', 'Steak', 'Bacon', 'Eggs', 'Sushi'];

var restFoods = ['Ham', 'Avocados', 'Pizza', 'Macaroni and Cheese', 'Steak', 'Bacon', 'Meatloaf'];

function checkMenu(myFavs, theMenu){
  for(var i = 0; i < theMenu.length; i++){
    if(theMenu.includes(myFavs[i])){
      console.log("This restaurant has", myFavs[i] + "!");
    }
  }
}
checkMenu(myFoods, restFoods);
