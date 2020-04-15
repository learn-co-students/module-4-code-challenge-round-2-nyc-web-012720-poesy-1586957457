import React from "react";

class Poem extends React.Component {
  render() {
    const { title, content, author } = this.props.poem
    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Content: {content}</p>
        <p>
          <strong>- By Author: {author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
