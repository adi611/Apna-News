import React from "react";
import NewsList from "./NewsList.js";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    fontWeight: 600,
    color: theme.palette.primary.main,
    textAlign: "center"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h2" className={classes.title}>
          Apna News
        </Typography>
        <Router>
          <Switch>
            <Route exact path="/" component={withRouter(LoginPage)} />
            <Route exact path="/news" component={withRouter(NewsList)} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;