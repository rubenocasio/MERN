import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)

//In formatDate.js, create and export function that takes an ISO take and returns a readable string as an output.
export function ISOTake (dateString) {
    return dayjs(dateString).format('MMMM D, YYYY')
}

//Have a function for converting date formats to appear like "4 months ago"
export function fromNow(dateString) {
    return dayjs(dateString).fromNow()
}

//Have a function for converting date formats to appear like "Thursday, January 21, 2023"
export function fullDateWithDay(dateString) {
    return dayjs(dateString).format('dddd, MMMM D, YYYY')
}

//Have a function for converting date formats to appear like "01/21/2023"
export function mmddyyyy(dateString) {
    return dayjs(dateString).format('MM/DD/YYYY')
}

export default ISOTake;