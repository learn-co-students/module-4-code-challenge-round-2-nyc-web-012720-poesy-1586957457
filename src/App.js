import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
    constructor(){
    super()
    this.state = {

      poems: [],
      poemsList: [],
      newPoem: false,
      
      
    }
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(poemsResp => {
      this.setState({
        poems: poemsResp,
        poemList: poemsResp
      })
    })
  } 

  handleClick = () => {
    this.setState({
      newPoem: !this.state.newPoem 
    })
  }
  postPoem = (poem) => {
    console.log(poem)
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: poem.title,
        author: poem.author,
        content: poem.content

      })
    })
    .then(resp => resp.json())
    .then(createdPoem => {
      this.SetState({
        poems: [...this.state.poems, createdPoem]
      });
    });
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.newPoem ?  <NewPoemForm /> : null }
        </div>
        <PoemsContainer poemsList={this.state.poems}/>
      </div>
    );
  }
}

export default App;









