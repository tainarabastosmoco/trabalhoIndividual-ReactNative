import { FlatList, View, Image, Text } from "react-native";
import { styles } from "./style";
import { DataStories } from "../../Mock/Data";

export const Story = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={DataStories}
        keyExtractor={(dados) => dados.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.storiesList}>
            <Image
              style={styles.foto}
              source={item.img}
              alt="Foto do usuário"
            />
            <Text style={styles.nomeUsuario}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};
