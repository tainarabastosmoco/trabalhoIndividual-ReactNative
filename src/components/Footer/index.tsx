import { Image, View } from "react-native";
import { styles } from "./style";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.home}
        source={require("../../assets/home.jpeg")}
        alt="Home"
      />
      <Image
        style={styles.nave}
        source={require("../../assets/lupa.jpeg")}
        alt="Buscar"
      />
      <Image
        style={styles.nave}
        source={require("../../assets/mais.jpeg")}
        alt="Nova publicação"
      />
      <Image
        style={styles.nave}
        source={require("../../assets/reels.jpeg")}
        alt="Reels"
      />
      <Image
        style={styles.foto}
        source={require("../../assets/perfil.jpeg")}
        alt="Perfil"
      />
    </View>
  );
};
