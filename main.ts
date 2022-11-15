let y = 0
let x = 5
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let index = 0; index < 5; index++) {
            x += -1
            led.plot(x, y)
            led.unplot(x + 1, y)
            basic.pause(100)
        }
        led.unplot(x, y)
        x = 5
    }
})
