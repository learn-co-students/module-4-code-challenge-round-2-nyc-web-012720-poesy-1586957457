import React from "react";

class Poem extends React.Component {
  render() {
    // console.log("props", this.props.poem)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>Content</p>
        <p>
          <strong>-{this.props.poem.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
