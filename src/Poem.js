import React from "react";

class Poem extends React.Component {
  state = {
    toggle: true
  }
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    const { title, content, author } = this.props.poem
    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Content: {content}</p>
        <p>
          <strong>- By Author: {author}</strong>
        </p>
        <button onClick={this.handleClick}>{this.state.toggle ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
