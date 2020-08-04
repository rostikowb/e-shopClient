import React, { useState, useEffect } from "react";
import {
  FormControlLabel,
  CircularProgress,
  Checkbox,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { connect } from "react-redux";
import { changeStateAuthModal } from "../../../../redux/modal/actions";
import { optStubOn, searchCityNP } from "../../../../redux/checkout/actions";
import s from "./form.module.css";

const validateEmail = (email) => {
  let pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

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

const CheckoutFor = (props) => {
  const auMo = props.changeStateAuthModal;
  const classes = useStyles();
  const stub = props.stub;
  const errMsg = props.invalid;
  const UD = props.userData;
  const token = props.token;
  const optCity = props.optCity;
  const optBranchN = props.optBranchN;
  const [done, setDone] = useState(false);
  const [isReg, setIsReg] = useState(!token);
  const [data, setData] = useState({
    email: UD.email || "",
    tel: UD.tel || Number("+380"),
    pass: "",
    FN: UD.name.first || UD.nick || "",
    LN: UD.name.last || "",
    SN: UD.name.surname || "",
    optCity: UD.city || "",
    optBranchN: UD.branchN || "",
  });
  const [dataV, setDataV] = useState({
    email: !!data.email,
    tel: data.tel.length > 3,
    pass: !!token || !isReg || !!data.pass,
    FN: !!data.FN,
    LN: !!data.LN,
    SN: !!data.SN,
    city: !!data.city,
    branchN: !!data.branchN,
    iAgree: false,
  });

  const sendData = (type) => {
    // props.authStubOn();
    // props.authSendApi(type, data);
  };

  const chngInpLn = (type, value, lng) => {
    let isValid;
    if (type === "email") {
      isValid = validateEmail(value);
    } else {
      isValid = value.length > lng;
    }
    dataV[type] = isValid;
    data[type] = value;
    setData({ ...data });
    setDataV({ ...dataV });
  };

  const sityChange = (value) => {
    if (value) {
      props.optStubOn();
      props.searchCityNP(value);
      data.optCity = value;
      setData({ ...data });
    }
    // console.log("sityChange", value);
  };

  const branchNChange = (value) => {
    if (value.length > 3) {
      data.optBranchN = value;
      setData({ ...data });
    }
    // console.log("branchNChange", value);
  };

  const checkboxChange = (value = false) => {
    if (value === "reg") {
      setIsReg(!isReg);
    } else {
      dataV.iAgree = !dataV.iAgree;
      setDataV({ ...dataV });
      setData({ ...data });
    }
  };

  useEffect(() => {
    setDone(
      dataV.city &&
        dataV.branchN &&
        dataV.FN &&
        dataV.email &&
        (!isReg || dataV.pass) &&
        dataV.LN &&
        dataV.SN &&
        dataV.tel &&
        dataV.iAgree
    );

    if (data.optCity && data.optBranchN) {
      dataV.city = true;
      dataV.branchN = true;
      setDataV({ ...dataV });
    }
  }, [data, isReg]);
  useEffect(() => {
    // if (!data.pass) {
    //   data.pass = "";
    //   setData({ ...data });
    // }
  }, [isReg]);
  useEffect(() => {
    if (UD.email) data.email = UD.email;
    if (UD.tel) data.tel = UD.tel;
    if (UD.name.first || UD.nick) data.FN = UD.name.first;
    if (UD.name.last) data.LN = UD.name.last;
    if (UD.name.surname) data.SN = UD.name.surname;
    if (UD.city) data.optCity = UD.city;
    if (UD.branchN) data.optBranchN = UD.branchN;
    setData({ ...data });
  }, [UD]);

  return (
    <div className={s.formBox}>
      <div className={s.form}>
        {/*{!props.token ? (*/}
        {/*<>*/}
        {/*<ModalAuth />*/}
        {/*<span className={s.isAuthMsg} onClick={() => auMo()}>*/}
        {/*У меня есть аккаунт и я хочу авторизироватся что бы не вводить все*/}
        {/*эти поля!*/}
        {/*</span>*/}
        {/*</>*/}
        {/*) : null}*/}
        <div className={s.namesGroup}>
          <h2>Контактные данные</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Емейл Адрес"
            name="email"
            autoComplete="email"
            error={!dataV.email}
            type="email"
            value={data.email}
            helperText={
              !dataV.email ? "Пример email'a - example@gmail.com" : null
            }
            onChange={(event) => chngInpLn("email", event.target.value)}
            // autoFocus
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="number"
            label="Номер телефона"
            name="number"
            autoComplete="number"
            type="number"
            value={data.tel}
            error={!dataV.tel}
            onChange={(event) => chngInpLn("tel", event.target.value, 10)}
            helperText={!dataV.tel ? "Минимум 10 цифр" : null}
          />
        </div>
        <div className={s.namesGroup}>
          <h2>ФИО получателя</h2>
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Фамилия"
            autoComplete="given-name"
            name="name"
            type="text"
            // autoFocus
            value={data.LN}
            error={!dataV.LN}
            onChange={(event) => chngInpLn("LN", event.target.value, 1)}
            helperText={
              !dataV.LN ? "Фамилия должна содержать минимум две буквы" : null
            }
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Имя"
            autoComplete="additional-name"
            name="name"
            type="text"
            // autoFocus
            value={data.FN}
            error={!dataV.FN}
            onChange={(event) => chngInpLn("FN", event.target.value, 1)}
            helperText={
              !dataV.FN ? "Имя должно содержать минимум две буквы" : null
            }
          />
          <TextField
            variant="outlined"
            // color={"secondary"}
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Отчество"
            autoComplete="family-name"
            name="name"
            type="text"
            // autoFocus
            value={data.SN}
            error={!dataV.SN}
            onChange={(event) => chngInpLn("SN", event.target.value, 1)}
            helperText={
              !dataV.SN ? "Отчество должно содержать минимум две буквы" : null
            }
          />
        </div>
        <div className={s.namesGroup}>
          <h2 className={s.title}>Адресс доставки</h2>
          <div className={s.select}>
            <Autocomplete
              id="asynchronous-demo"
              style={{ width: "100%" }}
              loading={optCity.stub}
              loadingText={"Ищем..."}
              noOptionsText={"Нет совпадений"}
              freeSolo
              value={data.optCity}
              getOptionSelected={(option, value) => {
                return (
                  (typeof option === "string" ? option : option.Present) ===
                  value
                );
              }}
              onInputChange={(event, value) => sityChange(value)}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.Present
              }
              options={optCity.arr || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Населенный пункт..."
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {optCity.stub ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </div>
          <div className={s.select}>
            <Autocomplete
              id="asynchronous-dmo"
              style={{ width: "100%" }}
              loading={optCity.stub}
              loadingText={"Ищем..."}
              freeSolo
              noOptionsText={"Нет совпадений"}
              value={data.optBranchN}
              getOptionSelected={(option, value) =>
                (typeof option === "string" ? option : option.Description) ===
                value?.Description
              }
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.Description
              }
              onInputChange={(event, value) => branchNChange(value)}
              options={optCity.arr.length > 0 ? optBranchN.arr || [] : []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="№ Отделения"
                  variant="outlined"
                  // onChange={(e) => selectChange("city", e.target.value)}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {optBranchN.stub ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className={s.namesGroup}>
          {!token ? (
            <div className={s.checkBox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isReg}
                    onChange={() => checkboxChange("reg")}
                    name="checkedisReg"
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                }
                label="Требую создать собственный аккаунт для хранения купонов!!"
              />
            </div>
          ) : null}
          {isReg ? (
            <div className={s.select}>
              <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth
                name="password"
                label="Придумайте пароль"
                type="password"
                id="password"
                autoComplete={"new-password"}
                onChange={(event) => chngInpLn("pass", event.target.value, 7)}
                error={!dataV.pass}
                helperText={!dataV.pass ? "Минимум 8 знаков" : null}
              />
            </div>
          ) : null}
          <div className={s.checkBox}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dataV.iAgree}
                  onChange={() => checkboxChange()}
                  name="checkediAgree"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Я согласен продать свою душу в рабство на 666 лет!"
            />
            {/*<Checkbox*/}
            {/*onChange={() => checkboxChange()}*/}
            {/*color="primary"*/}
            {/*inputProps={{ "aria-label": "secondary checkbox" }}*/}
            {/*/>*/}
            {/*<span> Я согласен продать свою душу в рабство на 666 лет!</span>*/}
          </div>
        </div>
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!done}
        onClick={() => sendData()}
      >
        {stub ? "Отправляю!" : "Отправить заказ!"}
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    token: state.auth.token,
    stub: state.auth.stub,
    optCity: state.checkout.city,
    optBranchN: state.checkout.branchN,
  };
};

export const CheckoutForm = connect(mapStateToProps, {
  changeStateAuthModal,
  optStubOn,
  searchCityNP,
})(CheckoutFor);
