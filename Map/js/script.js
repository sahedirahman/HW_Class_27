// let teams = ["Arumman", "Nipa", "Sahedi", "Irene", "MI", "Tanvir", "Akram", "Barsha", "Jubayer"]


// for (let i = 0; i < teams.length; i++) {
    //     console.log(teams[i]);
    
    
    // }
    
    // teams.map((item)=>{
        //     console.log(item);
        
        // })
        
        // teams.forEach((item)=>{
            //     console.log(item);
            
            // })
            
//  let memberList = ["Arumman", "Nipa", "Sahedi", "Irene", "MI", "Tanvir", "Akram", "Barsha", "Jubayer"]


//  function greetings(members) {
    //  let utterance = new SpeechSynthesisUtterance(`Welcome ${members}`);
    //  speechSynthesis.speak(utterance);
     
     
//     }
    
//     for (let i = 0; i < memberList.length; i++) {
//         greetings(memberList[i]);
//     }

let question = "What is your age?"




function questionAnswer() {
    if (question == "What is your name?") {
        let utterance = new SpeechSynthesisUtterance(`My name is Sahedi`);
        speechSynthesis.speak(utterance);
        
    } 
    else if (question == "What is your age?") {
        let utterance = new SpeechSynthesisUtterance(`My age is 31`);
        speechSynthesis.speak(utterance);
        
    } 
}
questionAnswer()




