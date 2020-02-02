import React, { Component } from 'react';

function Person(props){
    console.log(props.name)
    console.log(props.key)
   
    const nameChange = (event)=>{
        console.log(props.name)
        props.changed(event, props.index)
    }

    const clickP = ()=>{
        console.log(props.name);
        console.log(props.index)
    }

    return(
        <div onClick = {clickP}>My name is {props.name} and I am {props.age} years old.
            <input type = "text" onChange = {nameChange} value = {props.name}/>
        </div>
    )
}

export default Person;