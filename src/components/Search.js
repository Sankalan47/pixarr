import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import "./style.css";
import { Hidden } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontWeight: 900,
  },
  input: {
    color: "black",
    background: "rgb(255,255,255)",
    fontWeight: "bolder",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  return (
    <div className="header" style={{ height: "70vh", overflow: "hidden" }}>
      <Container maxWidth="sm">
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            marginTop: "10%",
          }}
          className="heading"
        >
          Pixarr
        </h1>
        <h3
          style={{
            color: "white",

            marginTop: "10%",
          }}
          className="heading"
        >
          Find and download the pictures you love...
        </h3>

        <form style={{ margin: "0 0" }} onSubmit={props.submit}>
          <TextField
            id="outlined-secondary"
            fullWidth
            variant="outlined"
            className={classes.textField}
            labelProps={{ style: { color: "white" } }}
            label="Search"
            InputProps={{
              className: classes.input,
            }}
            style={{ marginTop: "20%" }}
            onChange={props.search}
          />
        </form>
      </Container>
    </div>
  );
};

export default Search;
