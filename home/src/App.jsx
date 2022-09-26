import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fader from './fader'
import Navbar from './partials/navbar'
import RecipeFader from './recipeFader';

class App extends React.Component{
      state = {
        textInfo:"",
      }
      handleChange = () => {
        this.setState({textInfo: <RecipeFader/>});
        //Set up RecipeFader so that it also outputs the num that corresponds with the recipe. Create a variable that takes a num from RecipeFader. Then use that Num to bring up the corresponding info.
        //You could also just set up another degree of separation in both fader and recipeFader. That is, have the number already generated when the faders make their request
        document.getElementById("homeButton").style.visibility = "hidden";
        document.getElementById("displayArea").style.visibility = "visible"
        document.getElementById("cookingTime").style.visibility = "visible";
        document.getElementById("tryAgain").style.visibility = "visible";
        document.getElementById("goHome").style.visibility = "hidden";
      };
      showMoreInfo = () => {
        this.setState({textInfo: <Fader/>})
        document.getElementById("cookingTime").style.visibility = "hidden";
        document.getElementById("goHome").style.visibility = "visible";
      }
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
      <Navbar/>
      <header className="App-header">
        
        <button id = "homeButton" className="btn btn-lg" onClick ={this.handleChange} style = {{visibility:"visible"}}><span id = "mainBtn">What to eat?</span></button>
        <div id = "displayArea" style = {{visibility: "hidden"}}>
          {this.state.textInfo}
        </div>
        <span>
          <button id="goHome" className="btn btn-md btn-primary" onClick = {this.backHome} style = {{visibility:"hidden"}}>Home</button>
        </span>
        <div>
        <button id = "cookingTime" className="btn btn-md btn-success" onClick ={this.showMoreInfo} style = {{visibility:"hidden"}}>This looks good! Let's cook!</button>
        <button id = "tryAgain" className="btn btn-md btn-danger" onClick ={this.handleChange} style = {{visibility:"hidden"}}>No thanks- pick another recipe.</button>
        </div>
      </header>
    </div>
  );
}
}
ReactDOM.render(<App/>, document.getElementById('root'))
export default App;
/* what needs to happen?
Randomizer:
DONE -Make the button show a new recipe every time it's clicked
DONE-when the recipe info pops up, add a fade-in animation
DONE -Some kind of container for the results. Doesn't have to be complex, but it should be distinct.
DONE-Have a "let's cook!" button pop up after the initial click. This button should bring up the recipe.
DONE-After the "let's cook" button is made, pare down the recipe info.
DONE-After the initial click, change the main button text to "not in the mood for this?"
-When you hit "let's cook", the button should show the recipe itself, not a new one
-Format all the steps and divide the recipe into sections

Database:
-Connect it to a database. 
-Make a schema page.
-Add in nutritional and calorific values

(optional)Extra pages:
-Copy and paste CRUD pages into the app.
-Style those pages to fit the meal randomizer thematically
-Turn the CRUD navbar functions into a dropdown; make the whole app single-page

Wrap-up:
-Colors
DONE-Font family and sizing
DONE-Spacing
-Layout

Optional: 
-Account icon where you can make your account & sign in
-Picture of each recipe as a faded background when it's selected
-Find a way to exclude previously-displayed recipes from the try-again button.
*/