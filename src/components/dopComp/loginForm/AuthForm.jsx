import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import s from "./login.module.css";
import { connect } from "react-redux";
import { changeIsLogin } from "../../../redux/auth/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typo: {
    color: "black",
  },
}));

const AuthFor = (props) => {
  const classes = useStyles();
  const isLogin = () => props.changeIsLogin();
  const logForm = props.isLogin;
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: "0px" }} className={classes.paper}>
        <form className={classes.form} noValidate>
          {!logForm ? (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Имя"
              autoComplete="firstname"
              name="name"
              autoFocus
            />
          ) : null}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Емейл Адрес"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {logForm ? "Авторизоваться" : "Зарегистрироватся"}
          </Button>

          <div className={s.secLoginMenu}>
            <span>Пароль утерян...</span>
            <span onClick={() => isLogin()}>
              {logForm ? "Создать аккаунт" : "Уже есть аккаунт"}
            </span>
          </div>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isLogin: state.auth.isLogin,
  };
};

export const AuthForm = connect(mapStateToProps, {
  changeIsLogin,
})(AuthFor);
