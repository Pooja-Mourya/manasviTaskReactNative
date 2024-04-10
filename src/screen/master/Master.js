import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../component/Header';

export default function Master({ masterType, highlightedOption, setHighlightedOption }) {
  const handlePress = (optionIndex) => {
    setHighlightedOption(optionIndex);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.id)}>
      <View style={[styles.option, { borderBottomColor: highlightedOption === item.id ? '#EDBE58' : 'transparent' }]}>
        <Text style={[styles.optionText, { color: highlightedOption === item.id ? '#EDBE58' : '#ffffff' }]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        {/* <Header/> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={masterType}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.scrollViewContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141F35',
    // marginHorizontal: 10,
    // marginVertical: 11,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  option: {
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
  },
  optionText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
