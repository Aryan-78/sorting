let userInput = document.getElementById("size");
let a = [];

// creates random array for provided array and its length 
function shuffleArray(array,arraylength) {
    for(let i=0;i<arraylength;i++){
        array[i]=i+1;
    }
    array.sort(() => Math.random() - 0.5);
}

// display the array on the screen
function displayGraph(array){
    const workSpace = document.getElementById('display');

    while (workSpace.firstChild) workSpace.removeChild(workSpace.firstChild);

    let arraySize = array.length; 
    let oneBarWidth = 100/array.length;
    
    for ( let i=0;i<arraySize;i++ ){
        const divItems = document.createElement('div');
        divItems.classList.add("bar");
        divItems.setAttribute("id",array[i]);
        divItems.style.cssText = 'height: '+array[i]*oneBarWidth+'%; width: '+oneBarWidth+'%;'
        console.log(divItems)
        workSpace.appendChild(divItems);
    }
}


userInput.addEventListener('input', function() {
    console.log(userInput.value);

    let arraylength = userInput.value;
    if(isNaN(arraylength)){
        alert("Should be an integer... ");
        location.reload();
    }else if(arraylength>50){
        alert("Value crossing the limit");
        location.reload();
    }

    a = [];
    shuffleArray(a,arraylength);
    displayGraph(a)
});

function triggerAlgo() {
    let speedTag = document.getElementById("speed")
    let sortTag = document.getElementById("sort")
    var speed = speedTag.value
    var sort = sortTag.value
    let arraylength = userInput.value;
    sortAlgo(a,arraylength, speed, sort);
}

