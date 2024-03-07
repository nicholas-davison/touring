//target main container element of HTML and use innerHTML method to interpolate sections with bookings, venues, and tours listed.
import { displayVenues } from "./venues.js"
import { displayBands } from "./bands.js"
import { displayBookings } from "./bookings.js"
// import { displayBookings } from ("./bookings.js")

const pageContent = document.querySelector(".container")

const tourData = `
        <h1>Tour Some Sugar On Me</h1>
            <article class="bookings">
                <section class="bookings_details">
                    <h2>Current Bookings</h2>
                    ${displayBookings()}
                </section>
            </article>
            <article class="clients">
                    <section class="clients-list">
                    <h2>Venues</h2>
                    ${displayVenues()}
                    </section>
                    <section class="clients-list">
                    <h2>Bands</h2>
                    ${displayBands()}
                    </section>
            </article>

`

pageContent.innerHTML = tourData