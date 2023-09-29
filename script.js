'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🥳 Correct Answer..!')
// document.querySelector('.number').textContent = '50';
// document.querySelector('.score').textContent = '13';
// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);


//  ******************* Geting Random number
let  serateNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
// console.log(number);
// document.querySelector('.number').textContent = serateNumber;
document.querySelector('.check').addEventListener('click' , function(){
    // we have to make this value from string to number using number() function
    const guess = Number  (document.querySelector('.guess').value);
    // console.log(typeof guess , guess);
    if(!guess){
        // ******************  when no number ****************
        // document.querySelector('.message').textContent = ('⛔ No Number!');
        displayMessage('⛔ No Number!');
    } else if(guess === serateNumber){
        //  when player win *************************************
        // document.querySelector('.message').textContent = ('🥳 Correct Answer..!');
        displayMessage('🥳 Correct Answer..!');
        document.querySelector('body').style.backgroundColor = '#6BCB77';
        document.querySelector('.number').style.width = '30rem ';
        document.querySelector('.number').textContent = serateNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore ;
        }
    }
    else if(guess !== serateNumber){
        if (score > 1){
            // ******************** player enter max number************************
        // document.querySelector('.message').textContent = guess > serateNumber  ? '📈 Very High...! ' : '📈 Very low...! ' ;
        displayMessage(guess > serateNumber  ? '📈 Very High...! ' : '📈 Very low...! ' );
        score--;
        document.querySelector('.score').textContent = score;
        //*********************************when Player lost the game  */
        } else /**{document.querySelector('.message').textContent = (' 💥You lost the Game ');*/
        {
            displayMessage (' 💥You lost the Game');
        document.querySelector('.score').textContent = 0 ;
        document.querySelector('body').style.backgroundColor = '#F31559';
    }
}
    // } else if(guess > serateNumber){
    //     if (score > 1){
    //         // ******************** player enter max number************************
    //     document.querySelector('.message').textContent = ('📈 Very High...! ');
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     //*********************************when Player lost the game  */
    //     } else {document.querySelector('.message').textContent = (' 💥You lost the Game ');
    //     document.querySelector('.score').textContent = 0 ;
    //     document.querySelector('body').style.backgroundColor = '#F31559';
    // }
    // } else if (guess < serateNumber) {
    //     if (score > 1){
    //         document.querySelector('.message').textContent = ('📈 Very low...! ');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         } else {document.querySelector('.message').textContent = (' 💥You lost the Game ');
    //         document.querySelector('.score').textContent = 0 ;
    //         document.querySelector('body').style.backgroundColor = '#FF8989';
    //     }
    // }
});
document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    serateNumber = Math.trunc(Math.random()*20+1); 
    document.querySelector('body').style.backgroundColor = ('#222');
    // document.querySelector('.message').textContent = (' Start guessing... ');
    displayMessage(' Start guessing... ');
    document.querySelector('.score').textContent = score;
    document.querySelector('.label-score').value = ('20')
    document.querySelector('.number').style.width = ('15rem');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
})