'use client'

import { useState } from 'react'
import { Bus, Clock, MapPin, Calendar, Users, IndianRupee, Star, Wifi, Tv, Snowflake, Plug } from 'lucide-react'

interface BusType {
  id: string
  operator: string
  type: string
  departure: string
  arrival: string
  duration: string
  price: number
  seatsAvailable: number
  rating: number
  amenities: string[]
}

const mockBuses: BusType[] = [
  {
    id: '1',
    operator: 'VRL Travels',
    type: 'AC Sleeper',
    departure: '20:00',
    arrival: '05:30',
    duration: '9h 30m',
    price: 950,
    seatsAvailable: 12,
    rating: 4.5,
    amenities: ['wifi', 'ac', 'charging', 'entertainment']
  },
  {
    id: '2',
    operator: 'SRS Travels',
    type: 'AC Semi-Sleeper',
    departure: '20:30',
    arrival: '06:00',
    duration: '9h 30m',
    price: 850,
    seatsAvailable: 18,
    rating: 4.3,
    amenities: ['ac', 'charging']
  },
  {
    id: '3',
    operator: 'Sharma Travels',
    type: 'AC Sleeper',
    departure: '21:00',
    arrival: '06:30',
    duration: '9h 30m',
    price: 900,
    seatsAvailable: 8,
    rating: 4.4,
    amenities: ['wifi', 'ac', 'charging']
  },
  {
    id: '4',
    operator: 'Kallada Travels',
    type: 'AC Sleeper (Premium)',
    departure: '21:30',
    arrival: '07:00',
    duration: '9h 30m',
    price: 1150,
    seatsAvailable: 5,
    rating: 4.7,
    amenities: ['wifi', 'ac', 'charging', 'entertainment']
  },
  {
    id: '5',
    operator: 'Sugama Travels',
    type: 'AC Semi-Sleeper',
    departure: '22:00',
    arrival: '07:30',
    duration: '9h 30m',
    price: 800,
    seatsAvailable: 20,
    rating: 4.2,
    amenities: ['ac', 'charging']
  },
  {
    id: '6',
    operator: 'Canara Pinto',
    type: 'AC Sleeper',
    departure: '22:30',
    arrival: '08:00',
    duration: '9h 30m',
    price: 920,
    seatsAvailable: 10,
    rating: 4.4,
    amenities: ['wifi', 'ac', 'charging']
  },
  {
    id: '7',
    operator: 'Jabbar Travels',
    type: 'AC Sleeper',
    departure: '23:00',
    arrival: '08:30',
    duration: '9h 30m',
    price: 880,
    seatsAvailable: 15,
    rating: 4.3,
    amenities: ['ac', 'charging', 'entertainment']
  },
  {
    id: '8',
    operator: 'Airavat Club Class',
    type: 'AC Sleeper (Volvo)',
    departure: '23:30',
    arrival: '09:00',
    duration: '9h 30m',
    price: 1250,
    seatsAvailable: 6,
    rating: 4.8,
    amenities: ['wifi', 'ac', 'charging', 'entertainment']
  }
]

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [selectedBus, setSelectedBus] = useState<string | null>(null)
  const [bookingStep, setBookingStep] = useState<'search' | 'details' | 'confirmed'>('search')
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    age: '',
    gender: 'male',
    phone: '',
    email: ''
  })

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />
      case 'ac':
        return <Snowflake className="w-4 h-4" />
      case 'charging':
        return <Plug className="w-4 h-4" />
      case 'entertainment':
        return <Tv className="w-4 h-4" />
      default:
        return null
    }
  }

  const handleBookNow = (busId: string) => {
    setSelectedBus(busId)
    setBookingStep('details')
  }

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingStep('confirmed')
  }

  const selectedBusDetails = mockBuses.find(bus => bus.id === selectedBus)

  if (bookingStep === 'confirmed' && selectedBusDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 mt-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed!</h1>
              <p className="text-gray-600">Your bus ticket has been booked successfully</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6 my-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="font-semibold">RB{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Passenger Name:</span>
                <span className="font-semibold">{passengerDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bus Operator:</span>
                <span className="font-semibold">{selectedBusDetails.operator}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date of Journey:</span>
                <span className="font-semibold">{new Date(selectedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Departure:</span>
                <span className="font-semibold">{selectedBusDetails.departure} - Sullia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Arrival:</span>
                <span className="font-semibold">{selectedBusDetails.arrival} - Bangalore</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bus Type:</span>
                <span className="font-semibold">{selectedBusDetails.type}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-red-600">
                <span>Total Amount:</span>
                <span>₹{selectedBusDetails.price}</span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This is a demo booking. A confirmation SMS and email would normally be sent to your registered contact details.
              </p>
            </div>

            <button
              onClick={() => {
                setBookingStep('search')
                setSelectedBus(null)
                setPassengerDetails({
                  name: '',
                  age: '',
                  gender: 'male',
                  phone: '',
                  email: ''
                })
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Book Another Ticket
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (bookingStep === 'details' && selectedBusDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => {
              setBookingStep('search')
              setSelectedBus(null)
            }}
            className="mb-4 text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
          >
            ← Back to Search
          </button>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Journey Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Bus Operator</p>
                <p className="font-semibold text-lg">{selectedBusDetails.operator}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Bus Type</p>
                <p className="font-semibold">{selectedBusDetails.type}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Departure</p>
                <p className="font-semibold">{selectedBusDetails.departure} - Sullia</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Arrival</p>
                <p className="font-semibold">{selectedBusDetails.arrival} - Bangalore</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Journey Date</p>
                <p className="font-semibold">{new Date(selectedDate).toLocaleDateString('en-IN')}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Price</p>
                <p className="font-semibold text-red-600 text-lg">₹{selectedBusDetails.price}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Passenger Details</h2>
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={passengerDetails.name}
                  onChange={(e) => setPassengerDetails({ ...passengerDetails, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={passengerDetails.age}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, age: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    required
                    value={passengerDetails.gender}
                    onChange={(e) => setPassengerDetails({ ...passengerDetails, gender: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={passengerDetails.phone}
                  onChange={(e) => setPassengerDetails({ ...passengerDetails, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={passengerDetails.email}
                  onChange={(e) => setPassengerDetails({ ...passengerDetails, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> This is a demonstration app. No actual booking or payment will be processed.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition mt-6"
              >
                Confirm Booking - ₹{selectedBusDetails.price}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Bus className="w-8 h-8" />
            <h1 className="text-3xl font-bold">RedBus</h1>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                From
              </label>
              <input
                type="text"
                value="Sullia"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                To
              </label>
              <input
                type="text"
                value="Bangalore"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Showing buses departing between 8:00 PM - 12:00 AM</span>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {mockBuses.length} buses found
          </h2>
          <p className="text-gray-600">Sullia to Bangalore • {new Date(selectedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
        </div>

        {/* Bus List */}
        <div className="space-y-4">
          {mockBuses.map((bus) => (
            <div key={bus.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Bus Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{bus.operator}</h3>
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-semibold">{bus.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{bus.type}</p>
                  <div className="flex flex-wrap gap-2">
                    {bus.amenities.map((amenity, idx) => (
                      <span key={idx} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {getAmenityIcon(amenity)}
                        <span className="capitalize">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Time Info */}
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">{bus.departure}</p>
                    <p className="text-sm text-gray-600">Sullia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{bus.duration}</p>
                    <div className="w-24 h-0.5 bg-gray-300 my-1"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">{bus.arrival}</p>
                    <p className="text-sm text-gray-600">Bangalore</p>
                  </div>
                </div>

                {/* Price & Booking */}
                <div className="text-center md:text-right">
                  <div className="mb-2">
                    <p className="text-3xl font-bold text-red-600">₹{bus.price}</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-end gap-1 text-sm text-gray-600 mb-3">
                    <Users className="w-4 h-4" />
                    <span>{bus.seatsAvailable} seats available</span>
                  </div>
                  <button
                    onClick={() => handleBookNow(bus.id)}
                    className="bg-red-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-red-700 transition w-full md:w-auto"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 RedBus Demo - Book buses from Sullia to Bangalore</p>
          <p className="text-xs text-gray-400 mt-2">This is a demonstration application. No actual bookings or payments are processed.</p>
        </div>
      </footer>
    </div>
  )
}
