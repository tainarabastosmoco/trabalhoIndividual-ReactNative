import { FlatList, View, Image, Text } from "react-native";
import { styles } from "./style";
import { DataFeed } from "../../Mock/Data";

export const Feed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={DataFeed}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <View style={styles.Perfil}>
              <Image
                style={styles.fotoPerfil}
                source={item.fotoPerfil}
                alt="Foto Perfil"
              />
              <Text style={styles.nomeUsuario}>{item.nome}</Text>
            </View>

            <View style={styles.feedList}>
              <Image
                style={styles.fotoFeed}
                source={item.img}
                alt="Foto do Feed"
              />
              <View style={styles.interacoes}>
                <Image
                  style={styles.fundointeracoes}
                  source={require("../../assets/coracao.jpeg")}
                  alt="Coração"
                />
                <Image
                  style={styles.fundointeracoes}
                  source={require("../../assets/comentario.jpeg")}
                  alt="Comentario"
                />
                <Image
                  style={styles.fundointeracoes}
                  source={require("../../assets/compartilhar.jpeg")}
                  alt="Compartilhar"
                />
                <Image
                  style={styles.salvar}
                  source={require("../../assets/salvar.jpeg")}
                  alt="Salvar"
                />
              </View>

              <View style={styles.descricao}>
                <Text style={styles.nomeUsuario}> {item.nome}</Text>
                <Text style={styles.legendaUsuario}>{item.legenda}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
