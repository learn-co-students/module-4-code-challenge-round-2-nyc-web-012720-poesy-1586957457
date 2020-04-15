import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    return this.props.poems.map((poem) => (
      <Poem
        key={poem.id}
        {...poem}
        delete={this.props.delete}
        favorite={this.props.favorite}
      />
    ));
  };

  render() {
    console.log(this.props.poems);
    return <div className="poems-container">{this.renderPoems()}</div>;
  }
}

export default PoemsContainer;
