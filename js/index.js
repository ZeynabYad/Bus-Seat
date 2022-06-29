
const rows = [
  {
    rowNumber: 0,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "reserved" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
  {
    rowNumber: 1,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "available" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
  {
    rowNumber: 2,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "available" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
  {
    rowNumber: 3,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "available" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
  {
    rowNumber: 4,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "reserved" },
      { seatNumber: 3, seatState: "reserved" },
    ],
  },
  {
    rowNumber: 5,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "available" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
  {
    rowNumber: 6,
    seats: [
      { seatNumber: 1, seatState: "available" },
      { seatNumber: 2, seatState: "available" },
      { seatNumber: 3, seatState: "available" },
    ],
  },
];

function drawSeats() {
  let result = rows.map((row) =>
    `<tr>
  <td><span ><i id='${row.seats[0].seatNumber + row.rowNumber * 3
    }' class="fa-solid fa-square ${row.seats[0].seatState}" ></i></span></td>
  <td>
       <span class="list-inline-item"><i id='${row.seats[1].seatNumber + row.rowNumber * 3
    }' class="fa-solid fa-square ${row.seats[1].seatState}" ></i></span>
       <span class="list-inline-item"><i id='${row.seats[2].seatNumber + row.rowNumber * 3
    }' class="fa-solid fa-square ${row.seats[2].seatState}"></i></span>
  </td>
</tr>`);

  document.querySelector('tbody').innerHTML = result.join('');
  addListener()
}

function addListener() {
  let icons = document.querySelectorAll('tbody i');
  for (let icon of icons) {
    icon.addEventListener('click', selectSeat)
  }
}
function selectSeat(e) {
  if (e.target.classList.contains('available')) {
    e.target.classList.remove('available');
    e.target.classList.add('selected');
  }
}