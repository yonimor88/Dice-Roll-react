import React, { useState } from 'react'
import Die from './Die';

export default function RollDiceHooks(props) {
    const sides=['one', 'two', 'three', 'four', 'five', 'six'] 
    const [die1, setDie1]=useState('one')
    const [die2, setDie2]=useState('one')
    const [rolling, setRolling]=useState(false)
    const [score, setScore]=useState(0)
    const roll=()=> {
        const newDie1=sides[
            Math.floor(Math.random()*sides.length)]
        const newDie2=sides[
            Math.floor(Math.random()*sides.length)]
            setDie1(newDie1)
            setDie2(newDie2)
            setRolling(true)
        setTimeout(()=>{
            setRolling(false)
        },1000)
    }

    const increment = (x,y)=>{
       setScore(x =>x + y)
      
        
    }
    return (
        <div className='RollDice'>
            {score}
            <button onClick={()=>increment(score, 5)}>upupup</button>
        <div className='RollDice-container'>
        <Die face={die1} rolling={rolling}/>
        <Die face={die2} rolling={rolling}/>
        </div>
        <button onClick={roll} disabled={rolling}>
            {rolling ? 'Rolling...' : 'Roll Dice!!!'}
        </button>
    </div>
    )
}
