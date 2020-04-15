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
        <p>
          <button onClick={(event) => this.props.handleFavorite(this.props.poem)}>My Favorite</button>
        </p>
        <p>
          <button onClick={(event) => this.props.handleDelete(this.props.poem)}>Delete</button>
        </p>
      </div >
    );
  }
}

export default Poem;
