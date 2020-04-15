import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    favPoems: [],
    formToggle: true,
    favToggle: false,
  };

  componentDidMount() {
    fetch("http://localhost:6001/poems")
      .then((resp) => resp.json())
      .then((fetchedPoems) => this.setState({ poems: fetchedPoems }));
  }

  handleFormToggle = () => {
    return this.setState({ formToggle: !this.state.formToggle });
  };

  handleFavsToggle = () => {
    return this.setState({ favToggle: !this.state.formToggle });
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

  handleFavorite = (favId) => {
    let favPoem = this.state.poems.find((poem) => poem.id === favId);
    this.setState({ favPoems: [...this.state.favPoems, favPoem] });
  };

  render() {
    console.log(this.state.favToggle);
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleFormToggle}>
            Show/hide new poem form
          </button>
          {this.state.formToggle && <NewPoemForm addPoem={this.handleAdd} />}
        </div>
        <div>
          <button onClick={this.handleFavsToggle}>Show/hide Favorites</button>
        </div>
        <PoemsContainer
          poems={!this.state.favToggle ? this.state.poems : this.state.favPoems}
          delete={this.handleDelete}
          favorite={this.handleFavorite}
        />
      </div>
    );
  }
}

export default App;
