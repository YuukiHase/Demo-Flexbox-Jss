import React from "react";
import injectSheet from "react-jss";
import { styles } from "./BoxStyles";

class Box extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.myBox}>Box</div>;
  }
}

export default injectSheet(styles)(Box);
