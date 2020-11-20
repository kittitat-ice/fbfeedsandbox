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
import {getPost, likePost, unlikePost} from '../redux/actions';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import ScrollPercentBar from '../components/ScrollPercentBar';

const Post = (props) => {
  const [scrollPercent, setScrollPercent] = useState('0%');

  const {_user} = props.route.params;
  useEffect(() => {
    props.navigation.setOptions({title: _user.name});
    props.getPost(_user.id);
  }, []);

  const renderUser = ({item, index}) => {
    const hasLike =
      props.like.findIndex((val) => val === item.id) === -1 ? false : true;
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('UserDetail', {userDetail: _user})
          }
          style={styles.postHeader}>
          <Image
            style={styles.avatar}
            source={
              {
                //uri: 'https://placeimg.com/100/100/any',
              }
            }
          />
          <View>
            <Text style={styles.postHeaderLabel}>{_user.name}</Text>
            <Text style={{fontSize: 12}}>{item.time}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.postBody}>
          <Text style={styles.postBodyTitle}>{item.title}</Text>
          <Text style={styles.postBodyDes}>{item.body}</Text>
        </View>
        <View style={styles.postFooter}>
          <TouchableOpacity
            style={styles.postFooterButton}
            onPress={() =>
              hasLike ? props.unlikePost(item.id) : props.likePost(item.id)
            }>
            <AntDesign
              name={hasLike ? 'like1' : 'like2'}
              color={hasLike ? '#3b3af3' : '#333'}
              size={20}
              style={{marginRight: 10}}
            />
            <Text style={{color: hasLike ? '#3b3af3' : '#333'}}>{'Like'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postFooterButton}>
            <Octicons
              name="comment"
              color="#333"
              size={20}
              style={{marginRight: 10}}
            />
            <Text>{'Comment'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollPercentBar scrollPercent={scrollPercent} />
      <FlatList
        keyExtractor={(item, index) => `post-list-${index}`}
        style={{backgroundColor: '#eee'}}
        data={props.post}
        renderItem={(data) => renderUser(data)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        scrollEventThrottle={16}
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
  post: state.user.post,
  like: state.user.like,
});

const mapDispatchToProps = {
  getPost,
  likePost,
  unlikePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: 'skyblue',
    marginRight: 10,
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  postHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
  postHeaderLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postBody: {
    marginBottom: 15,
  },
  postBodyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postBodyDes: {
    fontSize: 14,
  },
  postFooter: {
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  postFooterButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
