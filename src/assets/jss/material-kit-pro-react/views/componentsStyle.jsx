import {
  container,
  main,
  mainRaised,
  title,
  section
} from "assets/jss/material-kit-pro-react.jsx";

const componentsStyle = {
  main,
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    "& h3": {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    }
  },
  title: {
    ...title,
    color: "#FFFFFF !important"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  lan: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: "#ff9100",
    borderRadius: "3px",
    color: "#000",
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(31,31,31,.4)"
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  sectionGray: {
    background: "#e5e5e5"
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
  }
};

export default componentsStyle;
