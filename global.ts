import { Platform, LogBox } from "react-native";

export interface Global {
  btoa: any;
  atob: any;
  self: any;
}

if (Platform.OS !== "web") {
  require("react-native-get-random-values");
}

declare var global: Global;
if (typeof global.self === "undefined") {
  global.self = global;
}

//Solved problem Reference error atob
global.btoa = global.btoa || require("base-64").encode;
global.atob = global.atob || require("base-64").decode;

