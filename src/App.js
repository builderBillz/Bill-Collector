import './App.css';
import Buttons from './Components/buttons';
import Display from './Components/display';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      displayedNumber: "0",
      operation: ""
    } 
  }


  daddyButtons = (event) =>{
    if(this.state.displayedNumber === '0'){

      this.setState({
        displayedNumber:event.target.innerText
      })
    
    }else{

      let updateDisplay = this.state.displayedNumber ;
      updateDisplay += event.target.innerText;
      this.setState({
        displayedNumber:updateDisplay
      })

    }
    
    
    console.log(event.target.innerText)
  }

  render(){

    return (
      <div className="App">
        <Display displayedNumber= {this.state.displayedNumber} />
        <Buttons daddyButtons= {this.daddyButtons}/>
      </div>
    );
  }
}

export default App;
