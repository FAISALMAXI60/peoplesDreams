import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  imgContainer: {
    textAlign: "center",
    // marginTop:20,
    position:"relative",
    marginBottom: 30,
  },
  cardMain: {
    paddingTop: 40,
    margin: "auto",
    width: "85%",
  },
  cards: {
    width: "90%",
    height: "auto",
    margin: "auto",
  },
  buttonStyling: {
   
  },
  buyButtonStyling:{
    position: "absolute",
    top: "69%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    color: "white",
    // borderRadius: 10,
    // marginTop:10
  }
}));
