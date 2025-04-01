import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        avatar_url: "dummy photo",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component did Mount");
    const data = await fetch("https://api.github.com/users/pratham-soni");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // console.log(this.props.name + "Child rander ");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>

        <h3>Location: {location}</h3>
        <h4>Contact: @Pratham</h4>
        <img alt="avatar.jpg" src={avatar_url} className="avatar_img"></img>
      </div>
    );
  }
}

export default UserClass;
