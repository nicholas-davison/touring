//import venues data from database
import { getVenues, getBookings, getBands } from "./database.js"
const allVenues = getVenues()
const allBookings = getBookings()
const allBands = getBands()
//build an html string for each entry, represented as list items, and export as a function. include data attributes for event listener function.

export const displayVenues = () => {
    let venueHTML = "<ul>"
    for (const venue of allVenues) {
        venueHTML += `<li data-type="venue" data-name="${venue.name}" data-id="${venue.id}">${venue.name}</li>`
    }
    venueHTML += "</ul>"
    return venueHTML
}
//define event listener function: when a venue is clicked, window alert which bands are booked at the venue.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            let bandIDs = []
            for (const booking of allBookings) {
                if (parseInt(itemClicked.dataset.id) === booking.venueID) {
                    bandIDs.push(booking.bandID)
                }
            } 
            let bandNames = []
            for (const band of bandIDs) {
                for (const bandObj of allBands) {
                    if (band === bandObj.id) {
                        bandNames.push(bandObj.bandName)
                    }
                }
            } window.alert(`${bandNames} are playing at ${itemClicked.dataset.name}`)
        }
    }
    
)