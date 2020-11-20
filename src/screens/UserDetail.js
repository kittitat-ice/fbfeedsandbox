import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/dist/Octicons';

const UserDetail = (props) => {
  const {userDetail} = props.route.params;
  useEffect(() => {
    props.navigation.setOptions({title: userDetail.name});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{backgroundColor: '#ccc'}}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.avatarShadow}>
          <Image
            style={styles.avatar}
            source={
              {
                //uri: 'https://placeimg.com/100/100/any',
              }
            }
          />
        </View>
        <Text style={styles.labelName}>{userDetail.name}</Text>
        <Text style={styles.labelEmail}>{userDetail.email}</Text>
        <View style={styles.address}>
          <Text>{'Address: '}</Text>
          <Text style={styles.labelAddress}>{`${
            userDetail.address.suite ? userDetail.address.suite + ',' : ''
          } ${
            userDetail.address.street ? userDetail.address.street + ',' : ''
          } ${
            userDetail.address.streest ? userDetail.address.streest + ',' : ''
          } ${userDetail.address.city ? userDetail.address.city + ',' : ''} ${
            userDetail.address.zipcode ? userDetail.address.zipcode : ''
          }`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 500,
    backgroundColor: 'skyblue',
  },
  avatarShadow: {
    backgroundColor: '#fff',
    borderRadius: 500,
    padding: 4,
    borderTopWidth: 1,
    borderRightWidth: 5,
    borderBottomWidth: 4,
    borderLeftWidth: 0.5,
    borderColor: '#3b3af3',
  },
  labelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  labelEmail: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#333',
  },
  address: {
    width: '100%',
    paddingLeft: 15,
    marginTop: 10,
  },
  labelAddress: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
});
