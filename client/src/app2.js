// import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//       category: "",
//       fullResponse: [],
//       dynamicResponse: [],
//       currKey: "1"
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleUserInput = this.handleUserInput.bind(this);
//   }
//   handleChange(e) {
//     this.setState({ dynamicResponse: [] });
//     this.setState({ value: e.target.value });
//     axios.get(`http://localhost:2424/all`).then(response => {
//       this.setState({ fullResponse: response.data });
//       for (let i = 0; i < response.data.length; i++) {
//         for (let j = 0; j < this.state.value.length; j++) {
//           if (
//             this.state.value[j].toLowerCase() !==
//             response.data[i].name[j].toLowerCase()
//           ) {
//             break;
//           }
//           if (j === this.state.value.length - 1) {
//             let newArr = this.state.dynamicResponse;
//             newArr.push(this.state.fullResponse[i].name);
//             this.setState({ dynamicResponse: newArr });
//             console.log(this.state.dynamicResponse);
//             newArr = [];
//           }
//         }
//       }
//     });
//   }

//   handleSubmit(e) {
//     for (let i = 0; i < this.state.fullResponse.length; i++) {
//       let checkFullResponse = this.state.fullResponse;
//       let checkValue = this.state.value;
//       console.log(checkValue.toLowerCase());
//       if (
//         checkFullResponse[i].name.toLowerCase() === checkValue.toLowerCase()
//       ) {
//         console.log("true!");
//         console.log(this.state.fullResponse[i].key);
//         this.setState({ currKey: this.state.fullResponse[i].key });
//         axios
//           .get(`http://localhost:2424/${this.state.fullResponse[i].key}`)
//           .then(data => {
//             console.log(data.data);
//             console.log(this.state.currKey);
//           });
//       }
//     }

//     this.setState({ value: "" });
//   }

//   handleUserInput(e) {
//     if (e.key === "Enter") {
//       if (this.state.dynamicResponse.length === 0) {
//         this.setState({
//           value:
//             "Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)"
//         });
//       } else {
//         this.setState({ value: this.state.dynamicResponse[0] }, () => {
//           console.log(this.state.value);
//           this.handleSubmit(this.state.dynamicResponse[0]);
//         });
//       }
//     }
//   }
//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <div>
//           <AppBar position="static" bgcolor="#232f3e">
//             <Toolbar>
//               <IconButton edge="start" color="inherit" aria-label="menu">
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6">Gammazon</Typography>
//               <Button
//                 aria-controls="simple-menu"
//                 aria-haspopup="true"
//                 //onClick={handleClick}
//               >
//                 Categories
//               </Button>
//               <Menu
//                 id="simple-menu"
//                 keepMounted
//                 //onClose={handleClose}
//               >
//                 <MenuItem /*onClick={handleClose}*/>Knives</MenuItem>
//                 <MenuItem /*onClick={handleClose}*/>Transportation</MenuItem>
//                 <MenuItem /*</Menu>onClick={handleClose}*/>Food</MenuItem>
//               </Menu>
//               <form noValidate autoComplete="off">
//                 <TextField
//                   id="outlined"
//                   label="search"
//                   variant="outlined"
//                   color="secondary"
//                 />
//                 <Button variant="contained">
//                   <SearchIcon />
//                 </Button>
//               </form>
//               <div>
//                 <Button
//                   aria-controls="language-menu"
//                   aria-haspopup="true"
//                   //onClick={handleClick}
//                 >
//                   <span>
//                     En <br />
//                     <LanguageIcon />{" "}
//                   </span>
//                 </Button>
//               </div>
//               <div>
//                 <Button
//                   aria-controls="Account-Lists-menu"
//                   aria-haspopup="true"
//                   //onClick={handleClick}
//                 >
//                   <span>
//                     Hello, Chosen One <br />
//                     Account & Lists{" "}
//                   </span>
//                 </Button>
//               </div>
//               <div>
//                 <Button
//                   aria-controls="Orders-button"
//                   aria-haspopup="false"
//                   //onClick={handleClick}
//                 >
//                   Orders
//                 </Button>
//               </div>
//               <div>
//                 <Button
//                   aria-controls="Prime-menu"
//                   aria-haspopup="true"
//                   //onClick={handleClick}
//                 >
//                   Prime
//                 </Button>
//               </div>
//             </Toolbar>
//           </AppBar>
//         </div>
//         <div>
//           <AppBar position="static">
//             <Toolbar>
//               <div>
//                 Deliver to Chosen one <br /> <RoomOutlinedIcon /> DUUUUUUVAL
//               </div>
//               <div>
//                 <Typography variant="subtitle1">
//                   <Button>12 days of deals</Button>
//                   <Button>Chosen One's Gammazon.com</Button>
//                   <Button>Browsing History</Button>
//                   <Button>Prime Video</Button>
//                   <Button>Help</Button>
//                   <Button>Best Sellers</Button>
//                   <Button>Find a Gift</Button>
//                   <Button>Buy Again</Button>
//                   <Button>Gift Cards</Button>
//                   <Button>New Releases</Button>
//                   <Button>#FoundItOnGammazon</Button>
//                   <Button>Whole Foods</Button>
//                 </Typography>
//               </div>
//             </Toolbar>
//           </AppBar>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
