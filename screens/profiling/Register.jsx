import { StyleSheet, Image, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
const Register = ({ navigation }) => {
  return (
    <LinearGradient
        colors={['yellow', 'white']}
        style={styles.scrollview}
        start={{ x: -3, y: -3 }}
        end={{ x: 0, y: 1 }}
        
      >
      <View style={styles.imgview}>
        <Image
          source={require("../../assets/salvabot_logo.png")}
          style={styles.img}
        ></Image>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 170,
    width: 170,
  },
});

export default Register;
