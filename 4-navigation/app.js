const adressLong = 1345
const adressLat = 4567

const positionLong = 24
const positionLat = 12

const lenPath = Math.sqrt(Math.pow(adressLong - positionLong, 2 ) + Math.pow(adressLat - positionLat,2) )

console.log(`Расстояние от текущего местоположения 
${positionLong}:${positionLat} 
до ${adressLong}:${adressLat}
составляет
${lenPath}
`)
