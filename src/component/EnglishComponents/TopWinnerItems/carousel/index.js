import React from "react";
import Slider from "react-slick";
import useStyles from "../styles";
//importing images
import run from "../../../../assets/run.png";
// import sideLogo from "../../../../assets/sideLogo.png";
import tron from "../../../../assets/tron.png";

import Grid from "@material-ui/core/Grid";

//
import { useSelector } from "react-redux";

/**
 * @author
 * @function Carousel
 **/

const Carousel = (props) => {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    topOneReferral,
    topTwoReferral,
    topThreeReferral,
    topFourReferral,
    topFiveReferral,
    topReferralNumber1,
    topReferralNumber2,
    topReferralNumber3,
    topReferralNumber4,
    topReferralNumber5,
  } = useSelector((state) => ({
    topOneReferral: state.UserReducer.topOneReferral,
    topTwoReferral: state.UserReducer.topTwoReferral,
    topThreeReferral: state.UserReducer.topThreeReferral,
    topFourReferral: state.UserReducer.topFourReferral,
    topFiveReferral: state.UserReducer.topFiveReferral,
    topReferralNumber1: state.UserReducer.topReferralNumber1,
    topReferralNumber2: state.UserReducer.topReferralNumber2,
    topReferralNumber3: state.UserReducer.topReferralNumber3,
    topReferralNumber4: state.UserReducer.topReferralNumber4,
    topReferralNumber5: state.UserReducer.topReferralNumber5,
  }));

  return (
    <>
      <Slider {...settings}>
        <div>
          <Grid container spacing={3} className={classes.cardMainContainer}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className={classes.yellowArea}
            >
              1
            </Grid>
            <Grid
              item
              xs={9}
              md={9}
              lg={10}
              sm={9}
              className={`${classes.primaryArea} ${"setBackground"}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <img src={run} style={{ height: 50 }} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.address}>
                    {topOneReferral === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                    topOneReferral === ""
                      ? null
                      : topOneReferral}
                  </span>
                </Grid>
                <Grid item xs={12} style={{ position: "relative", top: -13 }}>
                  <span
                    style={{ fontSize: 21, fontWeight: 500, color: "white" }}
                  >
                    Total For Referrals
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={tron} style={{ height: 35 }} />
                    <span
                      style={{
                        paddingLeft: 5,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {topOneReferral ===
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                      topOneReferral === ""
                        ? null
                        : topReferralNumber1
                        ? topReferralNumber1
                        : null}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3} className={classes.cardMainContainer}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className={classes.yellowArea}
            >
              2
            </Grid>
            <Grid
              item
              xs={9}
              md={9}
              lg={10}
              sm={9}
              className={`${classes.primaryArea} ${"setBackground"}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <img src={run} style={{ height: 50 }} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.address}>
                    {topTwoReferral === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                    topOneReferral === ""
                      ? null
                      : topTwoReferral}
                  </span>
                </Grid>
                <Grid item xs={12} style={{ position: "relative", top: -13 }}>
                  <span
                    style={{ fontSize: 21, fontWeight: 500, color: "white" }}
                  >
                    Total For Referrals
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={tron} style={{ height: 35 }} />
                    <span
                      style={{
                        paddingLeft: 5,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {topTwoReferral ===
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                      topTwoReferral === ""
                        ? null
                        : topReferralNumber2
                        ? topReferralNumber2
                        : null}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3} className={classes.cardMainContainer}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className={classes.yellowArea}
            >
              3
            </Grid>
            <Grid
              item
              xs={9}
              md={9}
              lg={10}
              sm={9}
              className={`${classes.primaryArea} ${"setBackground"}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <img src={run} style={{ height: 50 }} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.address}>
                    {topThreeReferral ===
                      "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                    topOneReferral === ""
                      ? null
                      : topThreeReferral}
                  </span>
                </Grid>
                <Grid item xs={12} style={{ position: "relative", top: -13 }}>
                  <span
                    style={{ fontSize: 21, fontWeight: 500, color: "white" }}
                  >
                    Total For Referrals
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={tron} style={{ height: 35 }} />
                    <span
                      style={{
                        paddingLeft: 5,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {topThreeReferral ===
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                      topThreeReferral === ""
                        ? null
                        : topReferralNumber3
                        ? topReferralNumber3
                        : null}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3} className={classes.cardMainContainer}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className={classes.yellowArea}
            >
              4
            </Grid>
            <Grid
              item
              xs={9}
              md={9}
              lg={10}
              sm={9}
              className={`${classes.primaryArea} ${"setBackground"}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <img src={run} style={{ height: 50 }} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.address}>
                    {topFourReferral === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                    topOneReferral === ""
                      ? null
                      : topFourReferral}
                  </span>
                </Grid>
                <Grid item xs={12} style={{ position: "relative", top: -13 }}>
                  <span
                    style={{ fontSize: 21, fontWeight: 500, color: "white" }}
                  >
                    Total For Referrals
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={tron} style={{ height: 35 }} />
                    <span
                      style={{
                        paddingLeft: 5,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {topFourReferral ===
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                      topFourReferral === ""
                        ? null
                        : topReferralNumber4
                        ? topReferralNumber4
                        : null}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={3} className={classes.cardMainContainer}>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={2}
              className={classes.yellowArea}
            >
              5
            </Grid>
            <Grid
              item
              xs={9}
              md={9}
              lg={10}
              sm={9}
              className={`${classes.primaryArea} ${"setBackground"}`}
            >
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <img src={run} style={{ height: 50 }} />
                </Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className={classes.address}>
                    {topFiveReferral === "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                    topOneReferral === ""
                      ? null
                      : topFiveReferral}
                  </span>
                </Grid>
                <Grid item xs={12} style={{ position: "relative", top: -13 }}>
                  <span
                    style={{ fontSize: 21, fontWeight: 500, color: "white" }}
                  >
                    Total For Referrals
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <img src={tron} style={{ height: 35 }} />
                    <span
                      style={{
                        paddingLeft: 5,
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {topFiveReferral ===
                        "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb" ||
                      topFiveReferral === ""
                        ? null
                        : topReferralNumber5
                        ? topReferralNumber5
                        : null}
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
