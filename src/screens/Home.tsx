import { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";
import { Wallet } from "ethers";

// Usefull for login with Web3Auth
import * as WebBrowser from "expo-web-browser";
import Web3Auth, {OPENLOGIN_NETWORK, TypeOfLogin} from "@web3auth/react-native-sdk";
// Get and create link
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import { Buffer } from "buffer";

import { FocusedStatusBar, HomeHeader } from "../components";
import { styles, COLORS } from "../styles";
import { CLIENT_ID, LOGIN_NAME, LOGIN_VERIFIER, LOGIN_TYPE, LOGIN_CLIENT_ID, LOGIN_PROVIDER, LOGIN_DOMAIN } from "@env";

global.Buffer = global.Buffer || Buffer;

// Create specific link for each platforms
const scheme = "web3authexposample";

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo ||
  Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });

export const Home = () => {
  const [wallet, setWallet] = useState(null);

  const web3auth = new Web3Auth(WebBrowser, {
    clientId: CLIENT_ID,
    network: OPENLOGIN_NETWORK.TESTNET,
    loginConfig: {
      jwt: {
        verifier: LOGIN_VERIFIER, // get it from web3auth dashboard for auth0 configuration
        typeOfLogin: LOGIN_TYPE,
        name: LOGIN_NAME,
        clientId: LOGIN_CLIENT_ID, // get it from auth0 dashboard
      }
    },
  });

  const login = async () => {
    try {
      const state = await web3auth.login({
        loginProvider: LOGIN_PROVIDER,
        redirectUrl: resolvedRedirectUrl,
        extraLoginOptions: {
          domain: LOGIN_DOMAIN, // domain of your auth0 app
          verifierIdField: "sub", // The field in jwt token which maps to verifier id.
        },
      });

      const wallet = new Wallet(state.privKey);

      setWallet(wallet);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout({ redirectUrl: resolvedRedirectUrl });

      setWallet(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FocusedStatusBar />

      <HomeHeader
        ethAddress={wallet?.address}
        redirectUrl={resolvedRedirectUrl}
        onLogin={login}
        onLogout={logout}
      />
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});
