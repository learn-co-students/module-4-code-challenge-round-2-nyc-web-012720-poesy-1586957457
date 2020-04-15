import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map((poem, index) => {
      return <Poem key={index} poem={poem} handleFavorite={this.props.handleFavorite} handleDelete={this.props.handleDelete} />
    })
  }
  render() {
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    );
  }
}

export default PoemsContainer;
