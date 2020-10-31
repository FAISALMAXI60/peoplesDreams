import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Typography } from "@material-ui/core";

//import blocked images
import start from "../../../../assets/spanishStationCardDeactive/start.png";
import finish from "../../../../assets/spanishStationCardDeactive/finish.png";
import station1 from "../../../../assets/spanishStationCardDeactive/station 1.png";
import station2 from "../../../../assets/spanishStationCardDeactive/station 2.png";
import station3 from "../../../../assets/spanishStationCardDeactive/station 3.png";
import station4 from "../../../../assets/spanishStationCardDeactive/station 4.png";

//import active images
import startActive from "../../../../assets/spanishStationCardsActive/start.png";
import finishActive from "../../../../assets/spanishStationCardsActive/finish.png";
import stationActive1 from "../../../../assets/spanishStationCardsActive/station 1.png";
import stationActive2 from "../../../../assets/spanishStationCardsActive/station 2.png";
import stationActive3 from "../../../../assets/spanishStationCardsActive/station 3.png";
import stationActive4 from "../../../../assets/spanishStationCardsActive/station 4.png";

//redux
import { useSelector } from "react-redux";

//toaster
import { toast } from "react-toastify";

//
import TronHelper from "../../../../utils/TronHelper";

//import buy station functions
import { buyStartStation, buyAllStations } from "../../../../userDataFunctions";

//import environment
import { environment } from "../../../../environment";

//
import Button from "@material-ui/core/Button";

/**
 * @author
 * @function StationCards
 **/

const StationCards = (props) => {
  const classes = useStyles();
  const [tronWeb, setTronWeb] = React.useState();

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const {
    startStation,
    stationOne,
    stationTwo,
    stationThree,
    stationFour,
    finishStation,
    randomAuth,
  } = useSelector((state) => ({
    startStation: state.UserReducer.startStation,
    stationOne: state.UserReducer.stationOne,
    stationTwo: state.UserReducer.stationTwo,
    stationThree: state.UserReducer.stationThree,
    stationFour: state.UserReducer.stationFour,
    finishStation: state.UserReducer.finishStation,
    randomAuth: state.UserReducer.randomAuth,
  }));

  const buyStationOne = async () => {
    if (tronWeb) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {
        buyStartStation(
          getContract,
          tronWeb.defaultAddress.base58,
          150,
          tronWeb
        );
      }
    }
  };

  const buyStationFunction = async (uint, amount) => {
    if (tronWeb) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {
        buyAllStations(
          getContract,
          tronWeb.defaultAddress.base58,
          uint,
          amount,
          tronWeb
        );
      }
    }
  };

  return (
    <Grid container className={classes.cardMain}>
      {randomAuth ? (
        <>
          <Grid item xs={4} className={classes.imgContainer}>
            {startStation ? (
              <img src={startActive} className={classes.cards} />
            ) : (
              <img src={start} className={classes.cards} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.imgContainer}>
            {stationOne ? (
              <img src={stationActive1} className={classes.cards} />
            ) : (
              <img src={station1} className={classes.cards} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.imgContainer}>
            {stationTwo ? (
              <img src={stationActive2} className={classes.cards} />
            ) : (
              <img src={station2} className={classes.cards} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.imgContainer}>
            {stationThree ? (
              <img src={stationActive3} className={classes.cards} />
            ) : (
              <img src={station3} className={classes.cards} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.imgContainer}>
            {stationFour ? (
              <img src={stationActive4} className={classes.cards} />
            ) : (
              <img src={station4} className={classes.cards} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.imgContainer}>
            {finishStation ? (
              <img src={finishActive} className={classes.cards} />
            ) : (
              <img src={finish} className={classes.cards} />
            )}
          </Grid>
        </>
      ) : (
        <>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {startStation ? (
              <img src={startActive} className={classes.cards} />
            ) : (
              <>
                <img
                  src={start}
                  className={classes.cards}
                  title="haga clic en la imagen para activarla"
                  style={{ cursor: "pointer" }}
                  onClick={buyStationOne}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                  onClick={buyStationOne}
                >
                  Comprar
                </Button>
              </>
            )}
          </Grid>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {stationOne ? (
              <img src={stationActive1} className={classes.cards} />
            ) : (
              <>
                <img
                  onClick={() => {
                    if (startStation === true) {
                      buyStationFunction(1, 140);
                    } else {
                      toast.error("¡Primero compre la estación de inicio!");
                    }
                  }}
                  src={station1}
                  className={classes.cards}
                  style={{ cursor: "pointer" }}
                  title="haga clic en la imagen para activarla"
                />
                <Button
                  onClick={() => buyStationFunction(1, 140)}
                  disabled={startStation === true ? false : true}
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                >
                  comprar
                </Button>
              </>
            )}
          </Grid>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {stationTwo ? (
              <img src={stationActive2} className={classes.cards} />
            ) : (
              <>
                <img
                  onClick={() => {
                    if (startStation === true && stationOne === true) {
                      buyStationFunction(2, 280);
                    } else {
                      toast.error("¡Puedes activar estaciones en flujo!");
                    }
                  }}
                  src={station2}
                  className={classes.cards}
                  style={{ cursor: "pointer" }}
                  title="haga clic en la imagen para activarla"
                />
                <Button
                  onClick={() => buyStationFunction(2, 280)}
                  disabled={
                    startStation === true && stationOne === true ? false : true
                  }
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                >
                  comprar
                </Button>
              </>
            )}
          </Grid>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {stationThree ? (
              <img src={stationActive3} className={classes.cards} />
            ) : (
              <>
                <img
                  onClick={() => {
                    if (
                      startStation === true &&
                      stationOne === true &&
                      stationTwo === true
                    ) {
                      buyStationFunction(3, 560);
                    } else {
                      toast.error("¡Puedes activar estaciones en flujo!");
                    }
                  }}
                  src={station3}
                  className={classes.cards}
                  style={{ cursor: "pointer" }}
                  title="haga clic en la imagen para activarla"
                />
                <Button
                  onClick={() => buyStationFunction(3, 560)}
                  disabled={
                    startStation === true &&
                    stationOne === true &&
                    stationTwo === true
                      ? false
                      : true
                  }
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                >
                  comprar
                </Button>
              </>
            )}
          </Grid>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {stationFour ? (
              <img src={stationActive4} className={classes.cards} />
            ) : (
              <>
                <img
                  onClick={() => {
                    if (
                      startStation === true &&
                      stationOne === true &&
                      stationTwo === true &&
                      stationThree === true
                    ) {
                      buyStationFunction(4, 1120);
                    } else {
                      toast.error("¡Puedes activar estaciones en flujo!");
                    }
                  }}
                  src={station4}
                  className={classes.cards}
                  style={{ cursor: "pointer" }}
                  title="haga clic en la imagen para activarla"
                />
                <Button
                  onClick={() => buyStationFunction(4, 1120)}
                  disabled={
                    startStation === true &&
                    stationOne === true &&
                    stationTwo === true &&
                    stationThree === true
                      ? false
                      : true
                  }
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                >
                  comprar
                </Button>
              </>
            )}
          </Grid>
          <Grid item sm={6} md={6} lg={4} className={classes.imgContainer}>
            {finishStation ? (
              <img src={finishActive} className={classes.cards} />
            ) : (
              <>
                <img
                  onClick={() => {
                    if (
                      startStation === true &&
                      stationOne === true &&
                      stationTwo === true &&
                      stationThree === true &&
                      stationFour === true
                    ) {
                      buyStationFunction(5, 2240);
                    } else {
                      toast.error("¡Puedes activar estaciones en flujo!");
                    }
                  }}
                  src={finish}
                  className={classes.cards}
                  style={{ cursor: "pointer" }}
                  title="haga clic en la imagen para activarla"
                />
                <Button
                  onClick={() => buyStationFunction(5, 2240)}
                  disabled={
                    startStation === true &&
                    stationOne === true &&
                    stationTwo === true &&
                    stationThree === true &&
                    stationFour === true
                      ? false
                      : true
                  }
                  variant="contained"
                  color="primary"
                  className={classes.buyButtonStylingSpanish}
                >
                  Comprar
                </Button>
              </>
            )}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default StationCards;
