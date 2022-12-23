import { View, Text, StyleSheet } from "react-native";

import { RectButton } from "../buttons/Button";
import { COLORS, SIZES } from "../../styles";

export const HomeHeader = ({
  ethAddress,
  redirectUrl,
  onLogin,
  onLogout,
}: any) => {
  return (
    <View style={style.container}>
      <View style={style.logButtonContainer}>
        {ethAddress ? (
          <RectButton
            title="Logout"
            styleTouchable={style.logButtonTouchable}
            styleText={style.logButtonText}
            handlePress={onLogout}
          />
        ) : (
          <RectButton
            title="Login"
            styleTouchable={style.logButtonTouchable}
            styleText={style.logButtonText}
            handlePress={onLogin}
          />
        )}
      </View>

      <View style={style.textContainer}>
        <Text style={style.text}>{`Redirect url: ${redirectUrl}`}</Text>
        <Text style={style.text}>
          {ethAddress ? `Eth Address: ${ethAddress}` : `Eth Address:`}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 100,
  },

  textContainer: {
    position: "absolute",
    bottom: 10,
  },

  text: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },

  logButtonContainer: {
    width: 60,
    right: 10,
    top: 10,
    position: "absolute",
  },

  logButtonTouchable: {
    backgroundColor: COLORS.blue,
    minHeight: 30,
  },
  logButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});
