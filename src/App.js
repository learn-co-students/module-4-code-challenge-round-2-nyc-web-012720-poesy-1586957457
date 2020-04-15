import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    formToggle: true,
  };

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then((resp) => resp.json())
      .then((fetchedPoems) => this.setState({ poems: fetchedPoems }));
  }

  handleFormToggle = () => {
    return this.setState({ formToggle: !this.state.formToggle });
  };

  handleAdd = (newPoem) => {
    this.setState({ poems: [...this.state.poems, newPoem] });
    this.componentDidMount();
  };

  handleDelete = (id) => {
    fetch(`http://localhost:6001/poems/${id}`, {
      method: "DELETE",
    });
    this.componentDidMount();
  };

  render() {
    // console.log(this.state.poems);
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleFormToggle}>
            Show/hide new poem form
          </button>
          {this.state.formToggle && <NewPoemForm addPoem={this.handleAdd} />}
        </div>
        <PoemsContainer poems={this.state.poems} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
