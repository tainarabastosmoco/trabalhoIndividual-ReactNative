import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import BackgroundImage from "../../assets/fundo.jpeg";
import Imagem from "../../assets/logo.png";
import Meta from "../../assets/meta.png";
import { TextInputField } from "../../components/TextInput";
import { styles } from "./style";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log("Pegando informações", email, password);
  };

  const handleEsqueceuSenha = () => {
    Alert.alert("Botão para recuperar a senha");
  };

  const handleCriarNovaConta = () => {
    Alert.alert("Botão para criar nova conta");
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          source={BackgroundImage}
        >
          <Text style={styles.texto}>Português - Brasil</Text>

          <Image style={styles.logoImage} source={Imagem} alt="Logo" />

          <View style={styles.boxForms}>
            <TextInputField
              placeHolder="Nome de usuário, email ou número de celular"
              valueInput={email}
              hadleFunctionInput={handleEmail}
            />

            <TextInputField
              placeHolder="Senha"
              valueInput={password}
              hadleFunctionInput={handlePassword}
              typeInput={true}
            />

            <TouchableOpacity style={styles.BotaoLogin} onPress={handleLogin}>
              <Text style={styles.LoginTexto}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEsqueceuSenha}>
              <Text style={styles.EsqueceuSenhaTexto}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.CriarNovaConta}
              onPress={handleCriarNovaConta}
            >
              <Text style={styles.CriarNovaContaTexto}>Criar nova conta</Text>
            </TouchableOpacity>

            <Image style={styles.metaImage} source={Meta} alt="Meta" />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
