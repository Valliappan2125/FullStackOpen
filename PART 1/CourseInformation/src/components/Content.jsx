import React from 'react'

const Part = (props) => {
    console.log(props);
    return(
        <div>
            <p>{props.parts.name}: {props.parts.exercises}</p>
        </div>
    )
}

const Content = (props) => {
  return (
    <div>
        <Part parts={props.parts[0]}/>
        <Part parts={props.parts[1]}/>
        <Part parts={props.parts[2]}/>
    </div>
  )
}

export default Content