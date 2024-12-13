
function writeCards(names, event){
    let printMsg = [];
    let i = 0;
    for (i = 0; i < names.length; i++){
        let msg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        printMsg.push(msg);
    }
    return printMsg;
}

writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise');


function countDown(){
    let num = 10;
    while (num >= 0){
        console.log(num);
        num--;
    }
}

countDown();