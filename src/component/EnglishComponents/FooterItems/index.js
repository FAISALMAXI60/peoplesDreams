import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
// import { Link } from "react-router-dom";

import button1 from "../../../assets/buttons/button1.png";
import button2 from "../../../assets/buttons/button2.png";
import button3 from "../../../assets/buttons/button3.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import footerIcon from "../../../assets/ICONS.png";

/**
 * @author
 * @function FooterItems
 **/

const FooterItems = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:492px)");

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12}>
        {matches ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={button1}
              className={classes.imgs}
              onClick={() =>
                window.open(
                  "https://tronscan.org/#/contract/TKnBacw11w3YCqJwPDUGKXHpvPapPTVGAo/code",
                  "_blank"
                )
              }
            />
            <img src={button2} className={classes.imgs} />
            <img src={button3} className={classes.imgs} />
          </div>
        ) : (
          <>
            <img
              src={button1}
              className={classes.imgs}
              onClick={() =>
                window.open(
                  "https://tronscan.org/#/contract/TKnBacw11w3YCqJwPDUGKXHpvPapPTVGAo/code",
                  "_blank"
                )
              }
            />
            <img
              src={button2}
              className={classes.imgs}
              onClick={() =>
                window.open("https://peoplesdreams.epizy.com", "_blank")
              }
            />

            <img src={button3} className={classes.imgs} />
          </>
        )}
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <img src={footerIcon} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default FooterItems;
