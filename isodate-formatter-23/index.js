import { ISOTake, fromNow, fullDateWithDay, mmddyyyy } from './utils/formatDate.js'

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m"
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};
console.log(colors.bg.blue, colors.fg.white, "I am a Ruben Ocasio and I am Awesome!", colors.reset)
const date = ISOTake('2021-03-09T12:00:00Z')
console.log(date)

console.log('\n')

console.log(colors.bg.blue, colors.fg.white,'Long Dates:', colors.reset)
console.log(fullDateWithDay('2022-01-01'))
console.log(fullDateWithDay('2021-06-15'))
console.log(fullDateWithDay('2020-12-31'))
console.log(fullDateWithDay('2019-07-20'))
console.log(fullDateWithDay('2018-03-05'))
console.log('\n')

console.log(colors.bg.black, colors.fg.yellow,'Short Dates:', colors.reset)
console.log(mmddyyyy('2022-01-01'))
console.log(mmddyyyy('2021-06-15'))
console.log(mmddyyyy('2020-12-31'))
console.log(mmddyyyy('2019-07-20'))
console.log(mmddyyyy('2018-03-05'))
console.log('\n')

console.log(colors.bg.black, colors.fg.red,'Relative Dates', colors.reset)
console.log(fromNow('2022-01-01'))
console.log(fromNow('2021-06-15'))
console.log(fromNow('2020-12-31'))
console.log(fromNow('2019-07-20'))
console.log(fromNow('2018-03-05'))
console.log('\n')