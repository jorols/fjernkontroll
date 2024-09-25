input.onButtonPressed(Button.A, function () {
    radio.sendNumber(sender_id)
})
input.onButtonPressed(Button.B, function () {
    sender_id += 1
    if (sender_id > 11) {
        sender_id = 6
    }
})
let sender_id = 0
radio.setGroup(42)
sender_id = 11
basic.forever(function () {
    basic.showNumber(sender_id - 6)
})
