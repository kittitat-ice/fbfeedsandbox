import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {setCount} from '../redux/actions';
import {connect} from 'react-redux';

const SetCount = (props) => {
  const [newCount, setNewCount] = useState('');
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 20}}>Count: {props.count}</Text>
        </View>
      </View>
      <TextInput
        value={newCount}
        onChangeText={(val) => {
          let regEx = /^[0-9]+$/;
          if (regEx.test(val) || val === '') {
            setNewCount(val);
          } else {
            alert('Number only');
          }
        }}
        keyboardType="number-pad"
        style={{
          borderWidth: 1,
          borderColor: '#aaa',
          borderRadius: 8,
          width: '50%',
          maxWidth: 300,
          padding: 5,
          marginTop: 10,
          fontSize: 18,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#37f',
          paddingHorizontal: 15,
          paddingVertical: 3,
          borderRadius: 5,
          marginTop: 10,
        }}
        onPress={() => {
          if (newCount !== '') {
            props.setCount(newCount);
          }
        }}>
        <Text style={{fontSize: 20, color: '#fff'}}>SET</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  count: state.common.count,
});

const mapDispatchToProps = {
  setCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetCount);
