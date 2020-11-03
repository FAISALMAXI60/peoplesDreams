import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

/**
 * @author
 * @function StationIndicatorItems
 **/

const StationIndicatorItems = (props) => {
  const classes = useStyles();
  const {
    startIndicator,
    indicatorOne,
    indicatorTwo,
    indicatorThree,
    indicatorFour,
    finishIndicator,
  } = useSelector((state) => ({
    startIndicator: state.UserReducer.startIndicator,
    indicatorOne: state.UserReducer.indicatorOne,
    indicatorTwo: state.UserReducer.indicatorTwo,
    indicatorThree: state.UserReducer.indicatorThree,
    indicatorFour: state.UserReducer.indicatorFour,
    finishIndicator: state.UserReducer.finishIndicator,
  }));

  const indicators = [
    { title: "Arranque", value: startIndicator },
    { title: "estación 1", value: indicatorOne },
    { title: "estación 2", value: indicatorTwo },
    { title: "estación 3", value: indicatorThree },
    { title: "estación 4", value: indicatorFour },
    { title: "Finish", value: finishIndicator },
  ];

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} className={classes.topHeadContainer}>
        <Typography variant="h4" className={classes.title}>
          CORREDOR POR ESTACIÓN
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.indicatorsContainer}>
        {indicators.map((i) => {
          return (
            <div className={classes.contain}>
              <div className={classes.indicator}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontWeight: "bold",
                    fontSize: 22,
                    color: "white",
                  }}
                >
                  {i.value ? i.value : 0}
                </span>
              </div>
              <Typography variant="span" className={classes.subHead}>
                {i.title}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default StationIndicatorItems;
