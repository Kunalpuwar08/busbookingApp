import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../utils';
import {busImg} from '../assets';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const findBus = () => {
    navigation.navigate('FindBus')
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Hey John!</Text>
        <Text style={styles.desc}>Where you want go.</Text>
        <Image source={busImg} />
      </View>
      <View style={styles.floatContainer}>
        <TextInput placeholder="Boarding From" style={styles.input} />
        <TextInput placeholder="Where are you going?" style={styles.input} />
        <View style={styles.timePick}>
          <TouchableOpacity style={styles.timePickBtn}>
            <Text style={{color: Colors.white}}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePickBtn}>
            <Text style={{color: Colors.white}}>Tomorrow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.timePickBtn}>
            <Text style={{color: Colors.white}}>Other</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.findBtn} onPress={findBus}>
          <Text style={styles.findBtnTxt}>Find Buses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.upcomingContainer}>
        <Text style={styles.heading}>Upcoming Journey</Text>

        <View style={styles.upcomingCard}>
          <Text>PNR/Ticket No:13392789</Text>
          <View style={{borderBottomWidth: 1, borderColor: '#eeeeee'}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg,
  },
  name: {
    fontSize: 24,
    color: Colors.white,
  },
  desc: {
    fontSize: 18,
    color: Colors.white,
  },
  floatContainer: {
    top: '-5%',
    height: 280,
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.btnColor,
  },
  input: {
    padding: 8,
    width: '90%',
    fontSize: 20,
    borderRadius: 5,
    marginVertical: 7,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.txtColor,
    backgroundColor: Colors.white,
  },
  timePick: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  timePickBtn: {
    margin: 8,
    padding: 6,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.white,
  },
  findBtn: {
    height: 40,
    width: '90%',
    marginTop: 12,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bg,
  },
  findBtnTxt: {
    fontSize: 18,
    color: Colors.white,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginVertical: 8,
  },
  upcomingContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  upcomingCard: {
    padding: 12,
    height: 'auto',
    width: '100%',
    backgroundColor: Colors.white,
  },
});
