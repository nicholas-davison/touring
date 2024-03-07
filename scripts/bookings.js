//import bands and venues data from database
import { getBands, getVenues, getBookings } from "./database.js"
const allBands = getBands()
const allVenues = getVenues()
const allBookings = getBookings()
//define a function that takes bookings array and bandlist as arguments. it must iterate the bookings list and if the band id matches,
//      it returns that band. this is then used as the argument for the function that builds the bookings string.
const currentBand = (bands, booking) => {
    let thisBand = null
    for (const band of bands) {
        if (band.id === booking.bandID) {
            thisBand = band
        }
    } return thisBand
}
//define a function that takes bookings array and venuelist as arguments. it must iterate the bookings list and if the venue id matches,
//      it returns that venue. this is then used as the second argument for the function that builds the bookings string.

const currentVenue = (venues, booking) => {
    let thisVenue = null
    for (const venue of venues) {
        if (venue.id === booking.venueID) {
            thisVenue = venue
        }
    } return thisVenue
}

//define and export a function that builds an HTML string, represented as a list, of what bands are playing what venues on a given date.
//this function must take in a band and a venue as arguments
export const displayBookings = () => {
    let bookingHTML = "<ul>"
    
    for (const date of allBookings) {
        const bandPlaying = currentBand(allBands, date)
        const venue = currentVenue(allVenues, date)
        bookingHTML += `<li data-type="booking" data-bandid="${bandPlaying.id}" >${bandPlaying.bandName} is playing ${venue.name} on ${date.date}</li>`
    }
    bookingHTML += "</ul>"
    return bookingHTML
}



//define an event listener that when a booking is clicked displays the band details in a window alert.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "booking") {
            for (const band of allBands) {
                if (band.id === parseInt(itemClicked.dataset.bandid)) {
                    window.alert(`${band.bandName}\n${band.numberOfMembers} band members\n${band.musicalGenre}\nFormed in ${band.yearFormed}`)
                }
            }
        }
    }
)