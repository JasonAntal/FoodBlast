import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fader from './fader'
import RecipeFader from './recipeFader';

class App extends React.Component{
      state = {
        textInfo:"",
      }
      handleChange = () => {
        this.setState({textInfo: <Fader/>});
        //Set up RecipeFader so that it also outputs the num that corresponds with the recipe. Create a variable that takes a num from RecipeFader. Then use that Num to bring up the corresponding info.
        //You could also just set up another degree of separation in both fader and recipeFader. That is, have the number already generated when the faders make their request
        document.getElementById("homeButton").style.visibility = "hidden";
        document.getElementById("displayArea").style.visibility = "visible"

        document.getElementById("tryAgain").style.visibility = "visible";

      };

      backHome = () => {
        document.getElementById("homeButton").innerText = "What to eat?"
        document.getElementById("homeButton").style.visibility = "visible";
        document.getElementById("displayArea").style.visibility = "hidden"
        this.setState({textInfo: ""})
        document.getElementById("cookingTime").style.visibility = "hidden";
        document.getElementById("tryAgain").style.visibility = "hidden";
        document.getElementById("goHome").style.visibility = "hidden";
      }
  render(){
        return (
          
    <div className="App">
      
      <header className="App-header">
        <div>
        </div>
        <button id = "homeButton" className="btn btn-lg" onClick ={this.handleChange} style = {{visibility:"visible"}}><span id = "mainBtn">What to eat?</span></button>
        <div id = "displayArea" style = {{visibility: "hidden"}}>
          {this.state.textInfo}
        </div>
        <div>

        <button id = "tryAgain" className="btn btn-md btn-danger" onClick ={this.handleChange} style = {{visibility:"hidden"}}>No thanks- pick another recipe.</button>
        </div>
      </header>
    </div>
  );
}
}
ReactDOM.render(<App/>, document.getElementById('root'))
export default App;