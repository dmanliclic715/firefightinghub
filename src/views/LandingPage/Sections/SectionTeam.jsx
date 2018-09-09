import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";

import cardProfile1Square from "assets/img/ollie.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/jet.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Here is our team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile1Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile1Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Oliver "Chief Ollie" Mayapis</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FIREFIGHTER. FOUNDER. FATHER.</h6>
                      </Muted>
                      <p className={classes.description}>
                        Hey! Don't say that...I'll record you on my taperecorder!
                      </p>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google" href="mailto:firefightinghub@gmail.com">
                        <i className="fab fa-google" />
                      </Button>
                      <Button justIcon simple color="instagram" href="https://www.instagram.com/firefightinghub/">
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile4Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Derick "PogiMan" Manliclic</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>Chief Technical Offficer</h6>
                      </Muted>
                      <p className={classes.description}>
                        I know someone that has a taperecorder too.
                      </p>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="instagram" href="https://www.instagram.com/firefightinghub/">
                        <i className="fab fa-instagram"/>
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionTeam);
