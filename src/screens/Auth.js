import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utils';
import {authImg} from '../assets';
import OtpInput from '../components/OtpInput';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [isSent, setIsSent] = useState(false);

  const onSend = () => {
    isSent ? navigation.navigate('Tab') : setIsSent(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={authImg} style={styles.img} />
      <View style={styles.txtContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.desc}>You are just one step away</Text>
      </View>
      <View>
        <TextInput
          maxLength={10}
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Mobile Number"
          onChangeText={txt => setNumber(txt)}
        />

        {isSent && <OtpInput />}
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onSend}>
          <Text style={styles.btnTxt}>{!isSent ? 'Send OTP' : 'Continue'}</Text>
        </TouchableOpacity>
        <Text>
          By Clicking on Continue, you are agree to Privacy Policy and Terms &
          Conditions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 22,
  },
  img: {},
  txtContainer: {
    marginBottom: 50,
  },
  welcome: {
    fontSize: 32,
    color: Colors.black,
    textAlign: 'center',
  },
  desc: {
    fontSize: 18,
    color: Colors.desc,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.desc,
    padding: 12,
  },
  btnContainer: {
    marginTop: 40,
    width: '75%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: Colors.btnColor,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 6,
  },
  btnTxt: {
    color: Colors.white,
  },
});
