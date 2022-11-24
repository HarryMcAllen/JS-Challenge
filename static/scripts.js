// const { response } = require("express")

const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')

function drawLine (start, end, style) {
  ctx.beginPath()
  ctx.strokeStyle = style || 'black'
  ctx.moveTo(...start)
  ctx.lineTo(...end)
  ctx.stroke()
}

function drawTriangle (apex1, apex2, apex3) {
  ctx.beginPath()
  ctx.moveTo(...apex1)
  ctx.lineTo(...apex2)
  ctx.lineTo(...apex3)
  ctx.fill()
}

drawLine([50, 50], [50, 550])
drawTriangle([35, 50], [65, 50], [50, 35])

drawLine([50, 550], [950, 550])
drawTriangle([950, 535], [950, 565], [965, 550])

//wasnt able to take data out of array
// let array = await
// fetch('http://localhost:3000/stocks')
//   .then(response => response.json())

//fetching data from stocks page
fetch('http://localhost:3000/stocks')
  .then(response => response.json())
  .then(data => console.log(data))
  .then(console.log("Stock List:"))


//fectching data about individual stock, also include some error handling
let stockData = await fetch('http://localhost:3000/stocks/MSFT')
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw Error('Problem!');
  })
  .catch(err => {
    console.log(err.message);
  })
  console.log("Data for Stock:")
  console.log(stockData)

  //make spinner hide after above statements are executed and data is loaded
  const hideSpinner = document.getElementById("spinner").style.display = "none";
