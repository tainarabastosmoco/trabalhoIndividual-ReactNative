import { Image, View } from "react-native";
import { styles } from "./style";
import LogoInsta from "../../assets/logoInsta.webp";

export const Header = () => {
  return (
    <View style={styles.fundoLogo}>
      <Image style={styles.logoInsta} source={LogoInsta} alt="Logo" />
      <View style={styles.fundoBotoes}>
        <Image
          style={styles.botoes}
          source={require("../../assets/coracao.jpeg")}
          alt="Coração"
        />
        <Image
          style={styles.botoes}
          source={require("../../assets/mensagem.jpeg")}
          alt="Mensagem"
        />
      </View>
    </View>
  );
};
