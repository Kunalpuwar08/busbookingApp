import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import {Colors} from '../utils';
import {data} from '../utils/dummyData';
import SvgUri from 'react-native-svg-uri';
import {busFindImg, filterImg, leftArrowImg, swapImg} from '../assets';

const FindBus = () => {
  const renderCard = ({item, index}) => {
    return (
      <View style={styles.card} key={index}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text>
              {moment(item.departureTime).format('LT')} -{' '}
              {moment(item.arrivalTime).format('LT')}
            </Text>
          </View>
          <Text>{item.duration}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <SvgUri source={leftArrowImg} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgUri source={filterImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Select your bus!</Text>
        <View style={styles.headerBody}>
          <Text style={styles.placeTxt}>Pune</Text>
          <SvgUri source={swapImg} />
          <Text style={styles.placeTxt}>Mumbai</Text>
        </View>
        <Text style={styles.daydateTxt}>12th - Jan - 2023 | Monday</Text>
        <View style={styles.headerImg}>
          <Image source={busFindImg} />
        </View>
      </View>

      <View style={{top: '-6%'}}>
        <FlatList data={data} renderItem={renderCard} />
      </View>
    </SafeAreaView>
  );
};

export default FindBus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    height: '35%',
    backgroundColor: Colors.bg,
  },
  headerContainer: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBody: {
    width: '60%',
    marginVertical: 12,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: 8,
    height: 100,
    elevation: 6,
    width: '90%',
    borderRadius: 5,
    marginVertical: 12,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  price: {
    fontSize: 22,
    color: '#F5A522',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: '#585656',
  },
  heading: {
    fontSize: 18,
    color: '#EEEEEE',
    textAlign: 'center',
  },
  placeTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  daydateTxt: {
    fontSize: 18,
    color: '#eee',
    textAlign: 'center',
  },
  headerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
});
