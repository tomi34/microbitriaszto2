bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)).includes("11")) {
        Szirena()
    } else if (bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)).includes("55")) {
        control.reset()
    } else {
        basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    }
})
function Szirena () {
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    Szirena()
}
input.onPinPressed(TouchPin.P2, function () {
    bluetooth.uartWriteLine("1010")
    while (input.pinIsPressed(TouchPin.P2)) {
        basic.pause(8)
    }
    bluetooth.uartWriteLine("1110")
})
input.onPinPressed(TouchPin.P1, function () {
    bluetooth.uartWriteLine("1001")
    while (input.pinIsPressed(TouchPin.P1)) {
        basic.pause(8)
    }
    bluetooth.uartWriteLine("1011")
})
