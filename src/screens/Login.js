import React, {useEffect} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {loginSuccess} from '../redux/actions';
import {connect} from 'react-redux';

const Login = (props) => {
  useEffect(() => {
    console.log(props.isLogin);
    if (props.isLogin) {
      props.navigation.navigate('Home');
    }
  }, [props.isLogin]);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#37f',
          paddingHorizontal: 15,
          paddingVertical: 3,
          borderRadius: 5,
        }}
        onPress={() => {
          props.loginSuccess();
        }}>
        <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = {
  loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
