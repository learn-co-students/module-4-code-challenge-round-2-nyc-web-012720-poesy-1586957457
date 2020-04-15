import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    // console.log("container", this.props)
    return (
      <div className="poems-container">
        {
         this.props.poemsList.map((poem) => {
           return (
             <Poem 
             poem={poem}
             key={poem.id}
             />
           )
         })
        }
      </div>
    );
  }
}

export default PoemsContainer;
