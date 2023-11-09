 let attempt = 3
 let pwd
 while(pwd !== 777){
    pwd = +prompt('What is your password?')
    if(pwd === 777){
         alert('Welcome')
    } else{
        alert('Your password is wrong' + ` You have ${attempt} attempts`) 
    }
    attempt--;
    if(attempt === -1){
        while(attempt === -1){
            alert('Try later')
             }
        }
    }
 
// let times = 3
// let number = prompt('What number do you want to choose?')
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} * ${i} =${number * i}`)
//     }
//