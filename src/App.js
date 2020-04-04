import React from "react";
import injectSheet from "react-jss";
import { styles } from "./Style";
import Box from "./Components/Box";

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
