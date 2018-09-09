import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Hot from "@material-ui/icons/Whatshot.js";
import EMS from "@material-ui/icons/LocalHospital";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>We're A Work In Progress</h2>
            <h5 className={classes.description}>
              This platform is currently under development. Please be patient with us, while we strive to
              to provide you with the best possible tool for getting you to where you're needed most. Saving lives!
               Check back frequently to see when we're live.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="FireFighter Opportunities"
                description="We source available firefighting positions statewide"
                icon={Hot}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Emergency Medical Service Opportunities"
                description="We source availabe EMS opportunities statewide"
                icon={EMS}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Advertise your agency's opportunites"
                description="Find qualified applicants for positions you post"
                icon={Face}
                iconColor="gray"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
