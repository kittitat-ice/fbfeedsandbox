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
import {increment, decrement, getUser} from '../redux/actions';
import {connect} from 'react-redux';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import ScrollPercentBar from '../components/ScrollPercentBar';

const Home = (props) => {
  const [scrollPercent, setScrollPercent] = useState('0%');

  useEffect(() => {
    props.getUser();
  }, []);

  const renderUser = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => props.navigation.navigate('Post', {_user: item})}>
        <Image
          style={styles.avatar}
          source={
            {
              //uri: 'https://placeimg.com/100/100/any',
            }
          }
        />
        <View style={styles.content}>
          <Text style={styles.h}>{item.name}</Text>
          <Text style={styles.p}>{item.email}</Text>
          <Text style={styles.p}>{item.phone}</Text>
          <View style={styles.labelWebsite}>
            <Text style={styles.p2}>{item.website}</Text>
          </View>
        </View>
        <Octicons
          name="chevron-right"
          size={24}
          color="#3b3af3"
          style={{alignSelf: 'center', margin: 10}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollPercentBar scrollPercent={scrollPercent} />
      <FlatList
        keyExtractor={(item, index) => `home-user-list-${index}`}
        style={{backgroundColor: '#eee'}}
        data={props.user}
        renderItem={(data) => renderUser(data)}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => (
          <View style={{height: 10}} />
        )}
        onScroll={({nativeEvent}) =>
          setScrollPercent(
            `${Math.max(
              0,
              Math.min(
                100,
                Math.floor(
                  (nativeEvent.contentOffset.y /
                    (nativeEvent.contentSize.height -
                      nativeEvent.layoutMeasurement.height)) *
                    100,
                ),
              ),
            )}%`,
          )
        }
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  count: state.common.count,
  user: state.user.user,
});

const mapDispatchToProps = {
  increment,
  decrement,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'skyblue',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  h: {
    fontSize: 14,
  },
  p: {
    fontSize: 12,
    marginTop: 3,
    marginLeft: 5,
  },
  labelWebsite: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  p2: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});
