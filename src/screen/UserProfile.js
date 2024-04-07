import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../component/CustomHeader';

const UserProfile = () => {
  return (
    <>
    <CustomHeader title={"User Profile"}/>
    <View style={styles.container}>
      <Image
        source={require('../assets/img/person.jpg')}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Pooja Mourya</Text>
        <Text style={styles.userEmail}>poojamourya@gmail.com</Text>
        <Text style={styles.userBio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          velit nulla. Vestibulum mattis justo ac est faucibus, a efficitur
          nisl placerat. Duis auctor metus eget nunc blandit, vel fringilla
          neque viverra. Donec sit amet odio sit amet lectus dignissim
          consectetur.
        </Text>
      </View>
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  userBio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserProfile;
