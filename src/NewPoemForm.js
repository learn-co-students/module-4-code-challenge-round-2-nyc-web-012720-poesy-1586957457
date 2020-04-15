import React from "react";

class NewPoemForm extends React.Component {

  constructor(){
     super()
     this.state = {
       title: "",
       author: "",
       content: ""
    }

   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value,

     })
   }


   handleSubmit = (event) => {
     event.preventDefault()
     this.props.postPoem(this.state)
   }
  render() {

    return (
      <form className="new-poem-form" onChange={this.handleChange} onSubmit={this.handleChange}>
        <input placeholder="Title"  name="title"/>
        <input placeholder="Author" name="author"/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
