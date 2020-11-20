import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import PostScreen from '../screens/Post';
import SetCountScreen from '../screens/SetCount';
import UserDetailScreen from '../screens/UserDetail';

const Routes = ({isLogin, dispatch}) => {
  const LoginStack = createStackNavigator();

  const Login = () => (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );

  const MainStack = createStackNavigator();

  const Main = () => (
    <MainStack.Navigator screenOptions={{headerBackTitle: 'Back'}}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="SetCount" component={SetCountScreen} />
      <MainStack.Screen name="Post" component={PostScreen} />
      <MainStack.Screen name="UserDetail" component={UserDetailScreen} />
    </MainStack.Navigator>
  );

  return (
    <NavigationContainer>{isLogin ? <Main /> : <Login />}</NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps)(Routes);
