import React from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Loading() {
  const waveAnimation = {
    0: { translateY: 0 },
    0.5: { translateY: 10 },
    1: { translateY: 0 },
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} // Make sure to set the visibility of the modal
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Animatable.View
            animation={waveAnimation}
            iterationCount={-1} // Infinite loop
            style={{ margin: 10 }}
          >
            <Image
              source={{ uri: 'https://i.gifer.com/YmvJ.gif' }}
              style={{ width: 300, height: 100}} 
              // loading from https://gifer.com/en/gifs/loading
            />
            <Text style={{color:"white", textAlign:"center"}}>Loading wait...</Text>
          </Animatable.View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##ffffff47',
  },
  modalView: {
    backgroundColor: '#0a142ccf',
    borderRadius: 2,
    paddingVertical: 30,
    alignItems: 'center',
    minHeight: 200,
    width: '80%',
  },
});