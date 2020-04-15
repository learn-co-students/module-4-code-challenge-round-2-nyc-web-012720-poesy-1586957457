import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    toggle: false,
    poems: []
  }

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then(response => response.json())
      .then(poems => this.setState({ poems }))
  }
  handleSubmit = (event, data) => {
    event.preventDefault()

    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
      .then(response => response.json())
      .then(() => this.setState({ poems: [...this.state.poems, data] }))
  }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}> Show/hide new poem form</button>
          {this.state.toggle ? <NewPoemForm handleSubmit={this.handleSubmit} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
