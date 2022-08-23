// =============player cost calculator
let playerCost = document.getElementById(`player-cost`).addEventListener(`click`,function(){

    perPlayerCost = parseInt(document.getElementById(`cost`).value);
    let totalCost = perPlayerCost *5;
    playerTotalCost = document.getElementById(`total-player-cost`);
    playerTotalCost.innerText= totalCost;
})

let totalCost = document.getElementById(`other-cost`).addEventListener(`click`, function(){
    let ManagerCost = parseInt(document.getElementById(`mcost`).value);
    let CoachCost = parseInt(document.getElementById(`ccost`).value);

    let otherTotal = ManagerCost + CoachCost;

    playerTotalCost = parseInt(document.getElementById(`total-player-cost`).innerText);

    let total = otherTotal + playerTotalCost;

    let totalDisplay = document.getElementById(`total`);
    totalDisplay.innerText = total;
})

// ================= player select 

function playerName(id1,id2){
    let playerName = document.getElementById(id1).innerText;
    let showPlayer = document.getElementById(id2);
    showPlayer.innerText = playerName;
}

let player1 = document.getElementById(`s1`).addEventListener(`click`,function(){
        
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p1');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-1`,`p1`)
    countAndDisabled(`s1`,`p1`);
})
let player2 = document.getElementById(`s2`).addEventListener(`click`,function(){
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p2');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-2`,`p2`)
    countAndDisabled(`s2`,`p2`); 
})
let player3 = document.getElementById(`s3`).addEventListener(`click`,function(){
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p3');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-3`,`p3`,)
    countAndDisabled(`s3`,`p3`);
})
let player4 = document.getElementById(`s4`).addEventListener(`click`,function(){
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p4');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-4`,`p4`)
    countAndDisabled(`s4`,`p4`);
})
let player5 = document.getElementById(`s5`).addEventListener(`click`,function(){
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p5');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-5`,`p5`)
    countAndDisabled(`s5`,`p5`);
})
let player6 = document.getElementById(`s6`).addEventListener(`click`,function(){
    var newLi = document.createElement('li');    
    newLi.setAttribute('id', 'p6');   
    var position = document.getElementById('select');
    position.appendChild(newLi);
    playerName(`player-6`,`p6`)
    
    countAndDisabled(`s6`,`p6`);
    
})


function countAndDisabled(btnId,reid){
    let c= document.getElementById(`select`).querySelectorAll("li").length
    if(c == 6){
        alert(`V player has been selected. 
        Further calculation will be wrong.`);
        let display = document.getElementById(reid);
        display.remove();
    }
    else if(c<=5)
    {
            let button = document.getElementById(btnId);
            button.disabled = 'true';
            button.style.background = 'gray';
    }
}