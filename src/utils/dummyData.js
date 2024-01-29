export const data = [
  {
    id: 1,
    source: 'City A',
    destination: 'City B',
    price: 20.99,
    name: 'Express Bus 1',
    departureTime: '2024-01-28T12:00:00Z',
    arrivalTime: '2024-01-28T15:00:00Z',
    seatType: 'Sleeper',
    duration: '3 hours',
    availableSeats: 30,
  },
  {
    id: 2,
    source: 'City B',
    destination: 'City C',
    price: 25.99,
    name: 'Luxury Bus 1',
    departureTime: '2024-01-28T14:00:00Z',
    arrivalTime: '2024-01-28T18:00:00Z',
    seatType: 'Semi-Sleeper',
    duration: '4 hours',
    availableSeats: 20,
  },
];

export const selectSeatData = {
  busDetails: {
    busName: 'Comfort Express',
    busType: '2+2',
    departureCity: 'City A',
    arrivalCity: 'City B',
    departureTime: '2024-01-28T14:00:00Z',
    arrivalTime: '2024-01-28T18:00:00Z',
    duration: '4 hours',
    hasUpperSection: true,
  },
  seatAvailability: {
    totalSeats: 40,
    upperSectionSeats: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    leftSeats: [
      {number: 1, isBooked: false, isSelected: false},
      {number: 2, isBooked: false, isSelected: false},
      {number: 3, isBooked: true, isSelected: false},
      {number: 4, isBooked: false, isSelected: false},
      {number: 5, isBooked: false, isSelected: false},
      {number: 6, isBooked: false, isSelected: false},
      {number: 7, isBooked: false, isSelected: false},
      {number: 8, isBooked: false, isSelected: false},
      {number: 9, isBooked: false, isSelected: false},
      {number: 10, isBooked: false, isSelected: false},
      {number: 11, isBooked: false, isSelected: false},
      {number: 12, isBooked: false, isSelected: false},
      {number: 13, isBooked: false, isSelected: false},
      {number: 14, isBooked: false, isSelected: false},
    ],
    rightSeats: [
      {number: 15, isBooked: false, isSelected: false},
      {number: 16, isBooked: false, isSelected: false},
      {number: 17, isBooked: false, isSelected: false},
      {number: 18, isBooked: false, isSelected: false},
      {number: 19, isBooked: false, isSelected: false},
      {number: 20, isBooked: true, isSelected: false},
      {number: 21, isBooked: true, isSelected: false},
      {number: 22, isBooked: false, isSelected: false},
      {number: 23, isBooked: false, isSelected: false},
      {number: 24, isBooked: false, isSelected: false},
      {number: 25, isBooked: false, isSelected: false},
      {number: 26, isBooked: false, isSelected: false},
      {number: 27, isBooked: false, isSelected: false},
      {number: 28, isBooked: false, isSelected: false},
    ],
    lastRowSeats: [
      {number: 29, isBooked: false, isSelected: false},
      {number: 30, isBooked: false, isSelected: false},
      {number: 31, isBooked: false, isSelected: false},
      {number: 32, isBooked: true, isSelected: false},
      {number: 33, isBooked: false, isSelected: false},
      {number: 34, isBooked: true, isSelected: false},
    ],
    seatPrice: 25.0,
  },
};