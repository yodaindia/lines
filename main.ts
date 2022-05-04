for (let index = 0; index <= 4; index++) {
    led.plot(4 - index, index)
    led.plot(index, index)
    led.plot(2, index)
    led.plot(index, 2)
}
basic.forever(function () {
	
})
