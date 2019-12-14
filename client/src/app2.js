// import React, { useState } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(0),
//       width: 1100,
//       height: 55,
//       color: "grey",
//       background: "white"
//     }
//   },
//   search: {
//     margin: theme.spacing(0),
//     width: 75,
//     height: 55,
//     background: "orange"
//   },
//   delivery: {
//     width: 240
//   },
//   underSearch: {
//     color: "grey"
//   }
// }));

// const App = props => {
//   const classes = useStyles();
//   const inputState = useState({ title: "", anchorEl: null, setAnchorEl: null });

//   const handleClick = event => {
//     inputState[0].setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     inputState[0].setAnchorEl(null);
//   };
//   return (
//     <div>
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="menu"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" /*className={classes.title}*/>
//               <img src="/Users/matthewlucas/frontend-capstone/feature-top-bar/gamazon.png" />
//             </Typography>
//             <Button
//               aria-controls="simple-menu"
//               aria-haspopup="true"
//               onClick={handleClick}
//             >
//               Categories
//             </Button>
//             <Menu
//               id="simple-menu"
//               anchorEl={inputState[0].anchorEl}
//               keepMounted
//               open={Boolean(inputState[0].anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Knives</MenuItem>
//               <MenuItem onClick={handleClose}>Transportation</MenuItem>
//               <MenuItem onClick={handleClose}>Food</MenuItem>
//             </Menu>
//             <form className={classes.root} noValidate autoComplete="off">
//               <TextField
//                 id="outlined"
//                 label="search"
//                 variant="outlined"
//                 color="secondary"
//               />
//               <Button className={classes.search} variant="contained">
//                 <SearchIcon />
//               </Button>
//             </form>
//             <div>
//               <Button
//                 aria-controls="language-menu"
//                 aria-haspopup="true"
//                 onClick={handleClick}
//               >
//                 <span>
//                   En <br />
//                   <LanguageIcon />{" "}
//                 </span>
//               </Button>
//             </div>
//             <div>
//               <Button
//                 aria-controls="Account-Lists-menu"
//                 aria-haspopup="true"
//                 onClick={handleClick}
//               >
//                 <span>
//                   Hello, Chosen One <br />
//                   Account & Lists{" "}
//                 </span>
//               </Button>
//             </div>
//             <div>
//               <Button
//                 aria-controls="Orders-button"
//                 aria-haspopup="false"
//                 onClick={handleClick}
//               >
//                 Orders
//               </Button>
//             </div>
//             <div>
//               <Button
//                 aria-controls="Prime-menu"
//                 aria-haspopup="true"
//                 onClick={handleClick}
//               >
//                 Prime
//               </Button>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <div className={classes.delivery}>
//               Deliver to Chosen one <br /> <RoomOutlinedIcon /> DUUUUUUVAL
//             </div>
//             <div className={classes.underSearch}>
//               <Typography variant="subtitle1">
//                 <Button>12 days of deals</Button>
//                 <Button>Chosen One's Gammazon.com</Button>
//                 <Button>Browsing History</Button>
//                 <Button>Prime Video</Button>
//                 <Button>Help</Button>
//                 <Button>Best Sellers</Button>
//                 <Button>Find a Gift</Button>
//                 <Button>Buy Again</Button>
//                 <Button>Gift Cards</Button>
//                 <Button>New Releases</Button>
//                 <Button>#FoundItOnGammazon</Button>
//                 <Button>Whole Foods</Button>
//               </Typography>
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     </div>
//   );
// };
// export default App;
