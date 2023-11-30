let answer = 0
input.onButtonPressed(Button.A, function () {
    answer = randint(0, 2)
    if (answer == 0) {
        basic.showString("yes")
    }
    if (answer == 1) {
        basic.showString("try again")
    }
    if (answer == 2) {
        basic.showString("no")
    }
})
