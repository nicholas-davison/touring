//import band data from database
import { getBands } from "./database.js"
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
