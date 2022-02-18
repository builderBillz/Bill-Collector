const Buttons = (props) => {
    
    // console.log(props.daddy)
    
    return(
        <>
            <div className = 'buttons'>

                <div id= "row1">
                    <button className= 'button-Space'>AC</button>
                    <button className= 'button-Space'>+/-</button>
                    <button className= 'button-Space'>÷</button>
                </div>

                <div id= "row2">
                    <button onClick={props.daddyButtons} className= 'button-Space'>7</button>
                    <button onClick={props.daddyButtons} className= 'button-Space'>8</button>
                    <button onClick={props.daddyButtons} className= 'button-Space'>9</button>
                    <button className= 'button-Space'>x</button>
                </div>

                <div id= "row3">
                    <button onClick={props.daddyButtons} className= 'button-Space'>4</button>
                    <button onClick={props.daddyButtons} className= 'button-Space'>5</button>
                    <button onClick={props.daddyButtons} className= 'button-Space'>6</button>
                    <button className= 'button-Space'>-</button>
                </div>

                <div id= "row4">
                    <button  onClick={props.daddyButtons} className= 'button-Space'>1</button>
                    <button  onClick={props.daddyButtons} className= 'button-Space'>2</button>
                    <button  onClick={props.daddyButtons} className= 'button-Space'>3</button>
                    <button  className= 'button-Space'>+</button>
                </div>

                <div id= "row5">
                    <button  onClick={props.daddyButtons} id = 'zero' className= 'button-Space'>0</button>
                    <button className= 'button-Space'>.</button>
                    <button className= 'button-Space'>=</button>
                </div>
            </div>
        </>

    )
}

export default Buttons 