//import band data from database
import { getBands, getBookings, getVenues } from "./database.js"
const allBands = getBands()
//build html string for each band, represented as list items, and export as function. include data attributes.
export const displayBands = () => {
    let bandHTML = "<ul>"
    for (const band of allBands) {
        bandHTML += `<li data-type="band" data-name="${band.bandName}" data-id="${band.id}">${band.bandName}</li>`
    }
    bandHTML += "</ul>"
    return bandHTML
}
//add event listener that when band is clicked window alerts the venues that band is playing at 

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "band") {
            const allBookings = getBookings()
            const allVenues = getVenues()
            let venueIDs = []
            for (const booking of allBookings) {
                if (parseInt(itemClicked.dataset.id) === booking.bandID) {
                    venueIDs.push(booking.venueID)
                }
            }
            let venueNames = []
            for (const venueID of venueIDs) {
                for (const venue of allVenues) {
                    if (venueID === venue.id) {
                        venueNames.push(venue.name)
                    }
                }
            } if (venueNames.length === 0) {
                window.alert(`${itemClicked.dataset.name} doesn't have any gigs!`)
            } else {
                window.alert(`${itemClicked.dataset.name} is playing at ${venueNames.join(', ')}`)
            }
        }
    }
)