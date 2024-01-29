import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {leftArrowImg, swImg, swapImg} from '../assets';
import {SvgUri} from 'react-native-svg';
import {Colors} from '../utils';
import {selectSeatData} from '../utils/dummyData';
import moment from 'moment';

const SelectSeat = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const onSeatSelect = seat => {
    !seat.isBooked ? (seat.isSelected = true) : null;
    setSelectedSeat(seat);
  };

  const renderSeat = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onSeatSelect(item)}
        disabled={item.isBooked}
        style={styles.seat(
          item.isBooked ? '#EF9A9A' : item?.isSelected ? '#F5A522' : '#DAD9DB',
        )}></TouchableOpacity>
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
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Choose your seat!</Text>
        <View style={styles.headerBody}>
          <Text style={styles.placeTxt}>Pune</Text>
          <SvgUri source={swapImg} />
          <Text style={styles.placeTxt}>Mumbai</Text>
        </View>
        <Text style={styles.daydateTxt}>12th - Jan - 2023 | Monday</Text>
        <View style={styles.detailCard}>
          <View>
          <Text>
            {moment(selectSeatData.busDetails.departureTime).format('LT')} -{' '}
            {moment(selectSeatData.busDetails.arrivalTime).format('LT')}
          </Text>
          <Text>{selectSeatData.busDetails.busName}</Text>
          </View>
          <Text></Text>
        </View>
      </View>

      <View style={styles.bookCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusBox('#EF9A9A')} />
            <Text>Booked</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusBox('#DAD9DB')} />
            <Text>Available</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statusBox('#F5A522')} />
            <Text>Your Seat</Text>
          </View>
        </View>
        <View style={{alignSelf: 'center', width: '80%', margin: 12}}>
          <Image source={swImg} style={styles.swImg} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            alignSelf: 'center',
          }}>
          <FlatList
            data={selectSeatData.seatAvailability.leftSeats}
            renderItem={renderSeat}
            numColumns={2}
            columnWrapperStyle={{alignSelf: 'flex-start'}}
          />

          <FlatList
            data={selectSeatData.seatAvailability.rightSeats}
            renderItem={renderSeat}
            numColumns={2}
            columnWrapperStyle={{alignSelf: 'flex-end'}}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <FlatList
            data={selectSeatData.seatAvailability.lastRowSeats}
            renderItem={renderSeat}
            horizontal
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectSeat;

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
  bookCard: {
    top: '-2%',
    padding: 9,
    width: '90%',
    height: 'auto',
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: Colors.white,
  },
  statusBox: color => ({
    width: 20,
    height: 20,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: color,
  }),
  seat: color => ({
    width: 30,
    margin: 8,
    height: 30,
    borderRadius: 5,
    backgroundColor: color,
  }),
  detailCard: {
    width: '90%',
    height: 80,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 5,
    padding: 8,
  },
  swImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
});
