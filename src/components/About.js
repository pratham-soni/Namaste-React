import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Did Mount");
  }

  render() {
    // console.log("Parent Rander");
    return (
      <div>
        <h1>About US Page</h1>
        <h2>About us context is showing here</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold text-xl">{loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <UserClass name={"First"} location={"Robertsganj"} />
      </div>
    );
  }
}

export default About;
