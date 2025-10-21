import { StyleSheet, Text, View } from "react-native";
import ProductList from "../components/ProductList/ProductList";
import { useDeviceListController } from "../hooks/useDeviceListController";

export default function DeviceListScreen({ navigation, route }) {
  const { loading, deviceProducts } = useDeviceListController();
  
  return (
    <View style={styles.container}>
      <ProductList data={deviceProducts} />
      {loading ? <Text>加载中</Text> : <Text>加载完成</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});