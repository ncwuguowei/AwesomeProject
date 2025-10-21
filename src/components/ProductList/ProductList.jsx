import React from 'react';
import { FlatList, StyleSheet, Text } from "react-native";

/**
 * ProductList 参数约定
 * @param {Array} data - 列表数据，每项是一个对象 { id, name, product }
 * @param {Function} onItemPress - 点击某项的回调 (item) => void
 * @param {Number} itemHeight - 每项高度，默认 50
 */
export default function ProductList({ data = [], onItemPress, itemHeight = 50 }) {
  const keyExtractor = (item) => item.id.toString();

  const renderItem = ({ item }) => (
    <Text
      style={[styles.item, { height: itemHeight }]}
      onPress={() => onItemPress && onItemPress(item)}
    >
      {item.name} : {item.product?.name}
    </Text>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});