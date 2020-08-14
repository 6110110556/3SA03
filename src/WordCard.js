import React, { useState } from 'react';
import _, { attempt, isInteger, toInteger } from 'lodash';

import CharacterCard from './CharacterCard';
var correct = 0;
const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                correct++;
                console.log('WOW ! You Correct' + 'Your point is '+ correct)
                alert('WOW ! You Correct' + 'Your point is '+ correct)
                setState({...state, completed: true})
                if(correct == 3) {
                    console("You win!")
                    alertWin()
                    window.location.reload(false)
                }
                
                
            }else{
                console.log('reset, next attempt')
                alert("Try again")
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
        
    }
    
    
    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            }
        </div>
    )
}

function alertWin() {
    var ale = Math.floor(Math.random() * 3);
    if(ale == 0) {
        alert("You Win!");
    }
    if(ale == 1) {
        alert("Congratulation!");
    }
    if(ale == 2) {
        alert("You So Wise!");
    }
}
