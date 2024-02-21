var vel = Number(window.prompt('Digite sua velocidade'))
var limite = 60

console.log(`A velocidade do seu carro é ${vel} km/h`)

if(vel > limite ){
    console.log(`Você ultrapassou a velocidade permitida. O limite de velocidade é ${limite} km/h`)
}