
const rows = [
  {
    rowNumber: 0,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 1,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 2,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 3,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 4,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 5,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
  {
    rowNumber: 6,
    seats: [
      { seatNumber: 1, SeatState: "available" },
      { seatNumber: 2, SeatState: "reserved" },
      { seatNumber: 3, SeatState: "available" },
    ],
  },
];

function drawSeats() {
  let result = rows.map((row)=>
 `<tr>
  <td><span ><i id='${
    row.seats[0].seatNumber + row.rowNumber * 3
  }' class="fa-solid fa-square" ></i></span></td>
  <td>
       <span class="list-inline-item"><i id='${
         row.seats[1].seatNumber + row.rowNumber * 3
       }' class="fa-solid fa-square" ></i></span>
       <span class="list-inline-item"><i id='${
         row.seats[2].seatNumber + row.rowNumber * 3
       }' class="fa-solid fa-square"></i></span>
  </td>
</tr>`);

document.querySelector('tbody').innerHTML=result.join('');
}

