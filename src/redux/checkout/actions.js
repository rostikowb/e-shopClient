import bent from "bent";
import { option } from "../../option";
import { CHE_OPT, OPT_STUB } from "../types";

export const optStubOn = () => {
  return (dispatch) => {
    dispatch({
      type: OPT_STUB,
    });
  };
};

const send_API_NP = async (typeOpt, str, ref = "") => {
  let url = `https://api.novaposhta.ua`;
  let obj = {
    apiKey: option.NPkey,
    modelName: typeOpt === "city" ? "Address" : "AddressGeneral",
    calledMethod: typeOpt === "city" ? "searchSettlements" : "getWarehouses",
    methodProperties: {
      CityRef: ref,
      CityName: typeOpt === "city" ? str : "",
      Limit: typeOpt === "city" ? 5 : 500,
      Language: "ru",
    },
  };
  // console.log(obj);
  // if (typeOpt !== "city") {
  //   console.log(obj);
  // }
  return await bent(url, "string", "POST", "json", 200)("/v2.0/json/", obj);
};

export const searchCityNP = (str) => {
  return async (dispatch) => {
    let res = await send_API_NP("city", str);
    res = res?.success ? res?.data[0]["Addresses"] : [];
    let res2 = await send_API_NP("branchN", str, res[0]?.DeliveryCity);
    res2 = res2?.data;

    dispatch({
      type: CHE_OPT,
      arrCity: res,
      arrBranchN: res2,
    });
  };
};
