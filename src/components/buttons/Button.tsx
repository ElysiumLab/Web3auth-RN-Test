import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextStyle,
} from "react-native";

import { COLORS, SIZES } from "../../styles";

export const CircleButton = ({
  imgUrl,
  handlePress,
  styleTouchable,
  styleImage,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.circleButtonTouchable, styleTouchable]}
      accessibilityRole="imagebutton"
      onPress={handlePress}
    >
      <Image
        style={[styles.circleButtonImage, styleImage]}
        source={imgUrl}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  title,
  styleTouchable,
  styleText,
  handlePress,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.rectButtonTouchable, styleTouchable]}
      onPress={handlePress}
    >
      <Text style={[styles.rectButtonText, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButtonTouchable: {
    width: 40,
    height: 40,
    // backgroundColor: COLORS.black,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    justifyContent: "center",
    alignItems: "center",
  },

  circleButtonImage: {
    tintColor: COLORS.white,
  },

  rectButtonTouchable: {
    justifyContent: "center",
  },

  rectButtonText: {
    textAlign: "center",
  },
});
