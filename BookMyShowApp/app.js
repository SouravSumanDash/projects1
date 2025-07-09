const seatsContainer = document.getElementById('seats-container');
const selectedSeats = new Set();
const bookBtn = document.getElementById('bookBtn');
const summaryDiv = document.getElementById('summary');
const bookingsDiv = document.getElementById('bookings');

let bookedSeats = new Set();

// Load booked seats from localStorage
function loadBookedSeats() {
  const data = JSON.parse(localStorage.getItem('bookings')) || [];
  bookedSeats.clear();
  data.forEach(item => {
    item.seats.forEach(seatNum => bookedSeats.add(seatNum));
  });
  return data;
}

// Render seats
function renderSeats() {
  seatsContainer.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = i;

    if (bookedSeats.has(i)) {
      seat.style.backgroundColor = '#999';
      seat.style.cursor = 'not-allowed';
      seat.title = 'Already booked';
    } else {
      seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
          seat.classList.remove('selected');
          selectedSeats.delete(i);
        } else {
          seat.classList.add('selected');
          selectedSeats.add(i);
        }
      });
    }

    seatsContainer.appendChild(seat);
  }
}

// Save new booking to localStorage
function saveBooking(booking) {
  const data = JSON.parse(localStorage.getItem('bookings')) || [];
  data.push(booking);
  localStorage.setItem('bookings', JSON.stringify(data));
}

// Display all previous bookings
function displayBookings(data) {
  bookingsDiv.innerHTML = '';
  if (data.length === 0) {
    bookingsDiv.textContent = 'No previous bookings yet.';
    return;
  }
  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('booking-item');
    div.innerHTML = `
      <strong>Booking #${index + 1}</strong><br>
      Movie: ${item.movie}<br>
      Theater: ${item.theater}<br>
      Date: ${item.date}<br>
      Time: ${item.time}<br>
      Seats: ${item.seats.join(', ')}<br>
      Price: ₹${item.seats.length * 200}
    `;
    bookingsDiv.appendChild(div);
  });
}

// Handle booking button click
bookBtn.addEventListener('click', () => {
  const movie = document.getElementById('movie').value;
  const theater = document.getElementById('theater').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!movie || !theater || !date || !time || selectedSeats.size === 0) {
    alert('Please fill all fields and select at least one seat!');
    return;
  }

  const seatsArray = Array.from(selectedSeats).sort((a,b) => a-b);

  // Create booking object
  const booking = {
    movie,
    theater,
    date,
    time,
    seats: seatsArray
  };

  // Save to localStorage
  saveBooking(booking);

  // Update UI
  summaryDiv.innerHTML = `
    <h3>Booking Summary</h3>
    <p><strong>Movie:</strong> ${movie}</p>
    <p><strong>Theater:</strong> ${theater}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Seats:</strong> ${seatsArray.join(', ')}</p>
    <p><strong>Total Price:</strong> ₹${seatsArray.length * 200}</p>
  `;

  // Reset selected seats
  selectedSeats.clear();

  // Reload booked seats and UI
  const allBookings = loadBookedSeats();
  renderSeats();
  displayBookings(allBookings);
});

// On page load
document.addEventListener('DOMContentLoaded', () => {
  const allBookings = loadBookedSeats();
  renderSeats();
  displayBookings(allBookings);
});
