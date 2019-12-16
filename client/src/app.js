import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/search";
import LanguageIcon from "@material-ui/icons/Language";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CartVal from "./cartVal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      category: "",
      fullResponse: [],
      dynamicResponse: [],
      currKey: "1",
      left: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  handleChange(e) {
    this.setState({ dynamicResponse: [] });
    this.setState({ value: e.target.value });
    axios
      // uncomment for production

      .get(
        `http://GammazonTopbar-env.h333hkd8ur.us-east-2.elasticbeanstalk.com/all`
      )
      // uncomment for production
      //
      // //uncomment for testing
      // //
      // .get(`http://localhost:2424/all`)
      // //
      // //uncomment for testing

      .then(response => {
        this.setState({ fullResponse: response.data });
        for (let i = 0; i < response.data.length; i++) {
          for (let j = 0; j < this.state.value.length; j++) {
            if (
              this.state.value[j].toLowerCase() !==
              response.data[i].name[j].toLowerCase()
            ) {
              break;
            }
            if (j === this.state.value.length - 1) {
              let newArr = this.state.dynamicResponse;
              newArr.push(this.state.fullResponse[i].name);
              this.setState({ dynamicResponse: newArr });
              newArr = [];
            }
          }
        }
      });
  }

  handleSubmit(e) {
    for (let i = 0; i < this.state.fullResponse.length; i++) {
      let checkFullResponse = this.state.fullResponse;
      let checkValue = this.state.value;
      if (
        checkFullResponse[i].name.toLowerCase() === checkValue.toLowerCase()
      ) {
        this.setState({ currKey: this.state.fullResponse[i].key });
        axios
          //uncomment for production

          .get(
            `http://GammazonTopbar-env.h333hkd8ur.us-east-2.elasticbeanstalk.com/${this.state.fullResponse[i].key}`
          )
          //uncomment for production
          //
          // //uncomment for testing
          // //
          // .get(`http://localhost:2424/${this.state.fullResponse[i].key}`)
          // //uncomment for testing
          .then(data => {
            this.setState({ currKey: data.data[0].key });
            window.location.replace(
              `http://gammazon-env.edv8rtj88x.us-west-2.elasticbeanstalk.com/?id=${data.data[0].key}`
            );
          });
      }
    }

    this.setState({ value: "" });
  }

  handleUserInput(e) {
    if (e.key === "Enter") {
      if (this.state.dynamicResponse.length === 0) {
        this.setState({
          value:
            "Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)"
        });
      } else {
        this.setState({ value: this.state.dynamicResponse[0] }, () => {
          this.handleSubmit(this.state.dynamicResponse[0]);
        });
      }
    }
  }
  toggleDrawer(e) {
    this.state.left === false
      ? this.setState({ left: true })
      : this.setState({ left: false });
  }

  render() {
    return (
      <div className="main">
        <div className="firstBar">
          <a name="firstBar"></a>
          <button id="menuButton" onClick={this.toggleDrawer}>
            <Drawer open={this.state.left} onClose={this.toggleDrawer}>
              <List>
                <ListItem style={{ bgcolor: "inherit" }}>
                  Hello, Chosen One
                </ListItem>
                <ListItem>Prime Video</ListItem>
                <ListItem>Amazon Music</ListItem>
                <ListItem>Echo & Alexa</ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://bumble.com/bizz")
                  }
                >
                  Bumble Business
                </ListItem>
              </List>
            </Drawer>
            <MenuIcon style={{ color: "white", padding: "3px 5px 3px 3px" }} />
          </button>
          <span id="Gzon">Gammazon</span>
          <div className="searchbar">
            <button id="category">All</button>
            <input
              type="text"
              className="search"
              value={this.state.value}
              onChange={this.handleChange}
              onKeyPress={this.handleUserInput}
            />
            <button id="submit" onClick={this.handleSubmit}>
              <SearchIcon />
            </button>
          </div>
          <span id="finalButtons">
            <button className="language">
              En <br />
              <LanguageIcon />{" "}
            </button>
            <button id="account" className="language">
              <span id="tiny">Hello, Chosen One</span>
              <br />
              Account & Lists
            </button>
            <button className="language">Orders</button>
            <button className="language">Prime</button>
            <button className="language" id="cart-ml">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </button>
            <CartVal />
          </span>
        </div>
        <button className="address">
          <RoomOutlinedIcon />
          <span id="deliver">
            <span id="deliverTiny">Deliver to Chosen One</span>
            <br />
            Austin 78701
          </span>
        </button>
        <span id="undersearch">
          <button className="underSearch">12 days of deals</button>
          <button className="underSearch">Chosen One's Gammazon.com</button>
          <button className="underSearch">Browsing History</button>
          <button className="underSearch">Prime Video</button>
          <button className="underSearch">Help</button>
          <button className="underSearch">Best Sellers</button>
          <button className="underSearch">Find a Gift</button>
          <button className="underSearch">Buy Again</button>
          <button className="underSearch">Gift Cards</button>
          <button className="underSearch">New Releases</button>
          <button className="underSearch">#FoundItOnGammazon</button>
          <button className="underSearch">Whole Foods</button>
        </span>
        <span id="hireUs">We are available for hire!</span>
      </div>
    );
  }
}
export default App;
