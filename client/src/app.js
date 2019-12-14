import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/search";
import LanguageIcon from "@material-ui/icons/Language";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Container from "@material-ui/core/Container";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      category: "",
      fullResponse: [],
      dynamicResponse: [],
      currKey: "1"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleChange(e) {
    this.setState({ dynamicResponse: [] });
    this.setState({ value: e.target.value });
    axios.get(`http://localhost:2424/all`).then(response => {
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
            console.log(this.state.dynamicResponse);
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
      console.log(checkValue.toLowerCase());
      if (
        checkFullResponse[i].name.toLowerCase() === checkValue.toLowerCase()
      ) {
        console.log("true!");
        console.log(this.state.fullResponse[i].key);
        this.setState({ currKey: this.state.fullResponse[i].key });
        axios
          .get(`http://localhost:2424/${this.state.fullResponse[i].key}`)
          .then(data => {
            console.log(data.data);
            console.log(this.state.currKey);
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
          console.log(this.state.value);
          this.handleSubmit(this.state.dynamicResponse[0]);
        });
      }
    }
  }

  render() {
    return (
      <div className="main">
        <div className="firstBar">
          <button id="menuButton">
            <MenuIcon style={{ color: "white", padding: "3px 5px 3px 3px" }} />
          </button>
          <span id="Gammazon">Gammazon</span>
          <span className="searchbar">
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
          </span>
          <button id="language">
            En <br />
            <LanguageIcon />{" "}
          </button>
          <button id="account">
            <span id="tiny">Hello, Chosen One</span>
            <br />
            Account & Lists
          </button>
          <button id="orders">Orders</button>
          <button id="Prime">Prime</button>
          <button id="kart">kart</button>
        </div>
        <button id="address">
          <RoomOutlinedIcon />
          <span id="deliver">
            <span id="deliverTiny">Deliver to Chosen One</span>
            <br />
            Austin 78701
          </span>
        </button>
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
        <span id="hireUs">We are available for hire!</span>
      </div>
    );
  }
}
export default App;
