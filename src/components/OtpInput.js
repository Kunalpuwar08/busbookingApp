import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../utils';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (index, value) => {
    if (/^[0-9]$/.test(value)) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < inputRefs.length - 1 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
    } else if (value === '') {
      // Handle backspace/delete key press
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';
        return newOtp;
      });

      // Move focus to the previous input
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          style={styles.input}
          value={digit}
          onChangeText={value => handleOtpChange(index, value)}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    alignSelf: 'center',
    marginVertical: 24,
  },
  input: {
    width: '20%',
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    borderColor: Colors.desc,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OtpInput;
