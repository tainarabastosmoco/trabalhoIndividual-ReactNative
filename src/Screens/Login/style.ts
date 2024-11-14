import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  boxForms: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
    borderRadius: 10,
  },

  logoImage: {
    width: "20%",
    height: 80,
    borderRadius: 10,
    marginBottom: 60,
    marginTop: 60,
  },

  metaImage: {
    width: 70,
    height: 55,
    borderRadius: 10,
    marginTop: 10,
  },

  BotaoLogin: {
    backgroundColor: "#0095F6",
    width: 300,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginVertical: 10,
  },

  LoginTexto: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },

  EsqueceuSenhaTexto: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },

  CriarNovaConta: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#0095F6",
    marginVertical: 10,
    marginTop: 80,
  },

  CriarNovaContaTexto: {
    color: "#0095F6",
    fontSize: 16,
    textAlign: "center",
  },

  input: {
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginVertical: 10,
  },

  texto: {
    color: "#000",
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingTop: 100,
  },
});
