import { ScrollView, View } from "react-native";
import { styles } from "./style";
import { Story } from "../../components/Story";
import { Feed } from "../../components/Feed";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <Story />
        <Feed />
      </ScrollView>

      <Footer />
    </>
  );
};
