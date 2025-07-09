let map;
let directionsService;
let directionsRenderer;
let geocoder;

// Load booking history when page loads
window.onload = () => {
  loadHistory();
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 12.9716, lng: 77.5946 },  // Bengaluru center
    zoom: 12
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  geocoder = new google.maps.Geocoder();

  const pickupInput = document.getElementById('pickup');
  const dropoffInput = document.getElementById('dropoff');

  if (pickupInput && dropoffInput) {
    new google.maps.places.Autocomplete(pickupInput);
    new google.maps.places.Autocomplete(dropoffInput);
  } else {
    console.warn('Autocomplete inputs not found.');
  }
}

// --- Estimate Price ---
document.getElementById('estimateBtn')?.addEventListener('click', () => {
  const pickup = document.getElementById('pickup')?.value.trim();
  const dropoff = document.getElementById('dropoff')?.value.trim();
  const carType = document.getElementById('carType')?.value;

  const resultDiv = document.getElementById('result');
  const confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.innerHTML = '';

  if (!pickup || !dropoff || !carType) {
    resultDiv.innerHTML = "⚠️ Please fill all fields.";
    document.getElementById('bookBtn').style.display = "none";
    return;
  }

  geocodeAddress(pickup)
    .then(origin => geocodeAddress(dropoff)
      .then(destination => {
        directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === 'OK') {
              const leg = result.routes[0].legs[0];
              const distanceKm = (leg.distance.value / 1000).toFixed(2);
              const ratePerKm = getRate(carType);
              const estimate = (distanceKm * ratePerKm).toFixed(2);

              resultDiv.innerHTML = `
                📏 Estimated Distance: <strong>${distanceKm} km</strong><br>
                💰 Estimated Price: <strong>$${estimate}</strong>
              `;

              document.getElementById('bookBtn').style.display = "block";

              // Show route on map
              directionsRenderer.setDirections(result);
            } else {
              resultDiv.innerHTML = "❌ Couldn't find route: " + status;
            }
          }
        );
      })
    )
    .catch(error => {
      resultDiv.innerHTML = "❌ Invalid address: " + error;
    });
});

// --- Book Ride ---
document.getElementById('bookBtn')?.addEventListener('click', () => {
  const pickup = document.getElementById('pickup')?.value.trim();
  const dropoff = document.getElementById('dropoff')?.value.trim();
  const carType = document.getElementById('carType')?.value;

  if (!pickup || !dropoff || !carType) {
    alert("⚠️ Please fill all fields before booking.");
    return;
  }

  document.getElementById('confirmation').innerHTML = "✅ Your ride has been booked! Driver is on the way.";

  const ride = {
    pickup,
    dropoff,
    carType,
    time: new Date().toLocaleString()
  };
  saveBooking(ride);
  loadHistory();
  showRouteOnMap(pickup, dropoff);
});

// --- Helpers ---
function getRate(carType) {
  switch (carType) {
    case 'Standard': return 1;
    case 'Premium': return 2;
    case 'SUV': return 2.5;
    default: return 0;
  }
}

function showRouteOnMap(pickup, dropoff) {
  Promise.all([geocodeAddress(pickup), geocodeAddress(dropoff)])
    .then(([origin, destination]) => {
      directionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(result);
          } else {
            alert('❌ Directions request failed: ' + status);
          }
        }
      );
    })
    .catch(error => {
      alert('❌ Invalid address: ' + error);
    });
}

function geocodeAddress(address) {
  return new Promise((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        resolve(results[0].geometry.location);
      } else {
        reject(status);
      }
    });
  });
}

function saveBooking(ride) {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(ride);
  localStorage.setItem('bookings', JSON.stringify(bookings));
}

function loadHistory() {
  const historyDiv = document.getElementById('history');
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  if (bookings.length === 0) {
    historyDiv.innerHTML = "<p>No bookings yet.</p>";
    return;
  }

  let html = "<ul>";
  bookings.forEach(b => {
    html += `<li>🕒 ${b.time}: <strong>${b.pickup}</strong> → <strong>${b.dropoff}</strong> (${b.carType})</li>`;
  });
  html += "</ul>";
  historyDiv.innerHTML = html;
}
