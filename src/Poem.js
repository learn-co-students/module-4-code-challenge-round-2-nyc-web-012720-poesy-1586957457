import React from "react";

class Poem extends React.Component {
  state = {
    read: false,
  };

  handleClick = () => {
    return this.setState({ read: !this.state.read });
  };

  render() {
    console.log(this.props.id);
    const { title, author, content } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick={this.handleClick}>
          {this.state.read ? "✅" : "Mark as read"}
        </button>
        <br />
        <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default Poem;
