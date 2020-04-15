import React from "react";
class NewPoemForm extends React.Component {
  state = {
    titleInput: "",
    authorInput: "",
    contentInput: "",
  };

  handleChange = (event) => {
    console.log(event.target.name);
    return this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { titleInput, authorInput, contentInput } = this.state;
    const data = {
      title: titleInput,
      author: authorInput,
      content: contentInput,
    };
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }) //FETCH POST
      .then((newPoem) => this.props.addPoem(newPoem));
  };

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          placeholder="Author"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <textarea
          placeholder="Write your masterpiece here..."
          rows={10}
          name="bars"
          value={this.state.bars}
          onChange={this.handleChange}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
