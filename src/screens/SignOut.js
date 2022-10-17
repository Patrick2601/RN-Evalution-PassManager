import React, {useContext} from 'react';
import {View} from 'react-native';
import Buttons from '../components/Buttons';
import {AuthContext} from '../Context/AuthContext';

const SignOut = () => {
  const {logout} = useContext(AuthContext);
  return <Buttons onPress={logout} name="SignOut" />;
};

export default SignOut;
