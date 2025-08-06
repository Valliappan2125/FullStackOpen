const History = (props) => {
    if(props.allClicks.length === 0){
        return(
            <div>
                the app is used by pressing the button
            </div>
        )
    }
  return (
    <div>
        button press history: {props.allClicks.join(' ')}
    </div>
  )
}

export default History