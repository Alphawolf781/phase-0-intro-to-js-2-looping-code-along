
let names = ["Charlie", "Samip", "Ali"];
  let event = "birthday";
  let messages = writeCards(names);
  
function writeCards(namesArray, eventName) {
    
    let thankYouMessages = [];
  
    
    for (let i = 0; i < namesArray.length; i++) {
      
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  
  console.log(messages);



  function countDown(num){
while(num>=0){
    console.log(num)
    num--
}
}

countDown(10)
    
  
  