import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
// import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import "./Facebook.css";
class Facebook extends Component {
  state = {
    isLogged: false,
    userId: "",
    Name: "",
  };
  componentClicked = () => {
    console.log("Clicked");
  };
  responseFacebook = (response) => {
    // console.log(response);
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("name", response.name);
    this.setState({
      isLogged: true,
      userId: response.userId,
      Name: response.name,
    });
  };
  // SocialButtonsPage = () => {
  //   return (
  //     <MDBContainer>
  //       <MDBBtn size="lg" tag="a" floating social="fb">
  //         <MDBIcon fab icon="facebook-f" />
  //       </MDBBtn>
  //     </MDBContainer>
  //   );
  // };
  render() {
    let fbContent;
    if (this.state.isLogged) {
      fbContent = null;
      return <Redirect to="/admin" />;
    } else {
      fbContent = (
        <i class="fab fa-facebook-square">
          <FacebookLogin
            appId="2585006561816846"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            textButton="f"
            cssClass="facebook"
          />
        </i>
      );
      return <div>{fbContent}</div>;
    }
  }
}
export default Facebook;
