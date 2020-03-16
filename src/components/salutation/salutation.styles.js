import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginBottom: theme.spacing(8),
    outlineColor: theme.palette.secondary.main
  },
  button: {
    margin: "0 auto",
    padding: theme.spacing(1, 5)
  }
}));
