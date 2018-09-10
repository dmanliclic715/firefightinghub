import {
  container,
  title,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

const landingPageStyle = {
  container: {
    color: "#FFFFFF",
    ...container,
    zIndex: "2"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  proBadgeSpecial: {
    fontSize: "42px",
    fontWeight: "750",
    padding: "8px 7px",
    top: "-30px",
    background: "#ff9100",
    borderRadius: "3px",
    color: "#000",
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(31,31,31,.4)"
  }
};

export default landingPageStyle;
