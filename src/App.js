import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    toggle: false,
    poems: [],
    myFav: [],
    myFavToggle: false
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
  handleFavorite = (data) => {
    let confirm = this.state.myFav.includes(data)

    if (!confirm) {
      this.setState({ myFav: [...this.state.myFav, data] })
    }
  }
  handleMyFavorite = () => {
    this.setState({ myFavToggle: !this.state.myFavToggle })


  }

  renderMyFav = () => {
    return <PoemsContainer poems={this.state.myFav} handleFavorite={this.handleFavorite} />
  }
  render() {
    console.log(this.state.myFav)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}> Show/hide new poem form</button>
          <p>
            <button onClick={this.handleMyFavorite}>My Favorite</button>
          </p>
          {this.state.toggle ? <NewPoemForm handleSubmit={this.handleSubmit} /> : null}
        </div>
        {!this.state.myFavToggle ? <PoemsContainer poems={this.state.poems} handleFavorite={this.handleFavorite} /> : this.renderMyFav()}
      </div >
    );
  }
}

export default App;
