// build database of venues, bands, and bookings
//export each as functions

const database = {
        venues: [
            {
                id: 1,
                name: "Grand Ballroom at Plaza Hotel",
                address: "Fifth Avenue at Central Park South, New York, NY 10019",
                squareFootage: 10000,
                cap: 500
            },
            {
                id: 2,
                name: "Central Park Conservatory Garden",
                address: "5th Ave, New York, NY 10029",
                squareFootage: 6400,
                cap: 200
            },
            {
                id: 3,
                name: "The Bowery Hotel",
                address: "335 Bowery, New York, NY 10003",
                squareFootage: 6000,
                cap: 250
            },
            {
                id: 4,
                name: "The Foundry",
                address: "42-38 9th St, Long Island City, NY 11101",
                squareFootage: 3000,
                cap: 150
            },
            {
                id: 5,
                name: "Brooklyn Botanic Garden",
                address: "990 Washington Ave, Brooklyn, NY 11225",
                squareFootage: "52 acres (indoor space available)",
                cap: "Varies by event space"
            },
            {
                id: 6,
                name: "The Liberty Warehouse",
                address: "260 Conover St, Brooklyn, NY 11231",
                squareFootage: 15000,
                cap: 600
            },
            {
                id: 7,
                name: "Tribeca Rooftop",
                address: "2 Desbrosses St, New York, NY 10013",
                squareFootage: 15000,
                cap: 400
            },
            {
                id: 8,
                name: "The Glasshouses",
                address: "545 W 25th St, New York, NY 10001",
                squareFootage: 13000,
                cap: 300
            },
            {
                id: 9,
                name: "Brooklyn Winery",
                address: "213 N 8th St, Brooklyn, NY 11211",
                squareFootage: 8000,
                cap: 200
            },
            {
                id: 10,
                name: "Manhattan Penthouse on Fifth Avenue",
                address: "80 Fifth Ave, New York, NY 10011",
                squareFootage: 6000,
                cap: 250
            },
            {
                id: 11,
                name: "The Green Building",
                address: "452 Union St, Brooklyn, NY 11231",
                squareFootage: 6000,
                cap: 250
            },
            {
                id: 12,
                name: "Cats Cradle",
                address: "300 E Main St, Carrboro, NC 27510",
                squareFootage: 5000,
                cap: 750
            }
        ],
        
        bands: [
            {
                id: 1,
                bandName: "U2",
                numberOfMembers: 4,
                musicalGenre: "Rock",
                yearFormed: 1976
            },
            {
                id: 2,
                bandName: "Foo Fighters",
                numberOfMembers: 6,
                musicalGenre: "Rock",
                yearFormed: 1994
            },
            {
                id: 3,
                bandName: "Red Hot Chili Peppers",
                numberOfMembers: 4,
                musicalGenre: "Rock",
                yearFormed: 1983
            },
            {
                id: 4,
                bandName: "Pearl Jam",
                numberOfMembers: 5,
                musicalGenre: "Grunge",
                yearFormed: 1990
            },
            {
                id: 5,
                bandName: "Radiohead",
                numberOfMembers: 5,
                musicalGenre: "Alternative Rock",
                yearFormed: 1985
            },
            {
                id: 6,
                bandName: "Green Day",
                numberOfMembers: 3,
                musicalGenre: "Punk Rock",
                yearFormed: 1986
            },
            {
                id: 7,
                bandName: "Coldplay",
                numberOfMembers: 4,
                musicalGenre: "Alternative Rock",
                yearFormed: 1996
            },
            {
                id: 8,
                bandName: "Arctic Monkeys",
                numberOfMembers: 4,
                musicalGenre: "Indie Rock",
                yearFormed: 2002
            },
            {
                id: 9,
                bandName: "Muse",
                numberOfMembers: 3,
                musicalGenre: "Alternative Rock",
                yearFormed: 1994
            },
            {
                id: 10,
                bandName: "The Killers",
                numberOfMembers: 4,
                musicalGenre: "Indie Rock",
                yearFormed: 2001
            },
            {
                id: 11,
                bandName: "Electric Nebula",
                numberOfMembers: 5,
                musicalGenre: "Psychedelic Rock",
                yearFormed: 2010
            },
            {
                id: 12,
                bandName: "Midnight Mirage",
                numberOfMembers: 4,
                musicalGenre: "Synthwave",
                yearFormed: 2012
            },
            {
                id: 13,
                bandName: "Lunar Echoes",
                numberOfMembers: 3,
                musicalGenre: "Space Rock",
                yearFormed: 2015
            },
            {
                id: 14,
                bandName: "Eternal Eclipse",
                numberOfMembers: 6,
                musicalGenre: "Gothic Metal",
                yearFormed: 2008
            },
            {
                id: 15,
                bandName: "Crystal Cavern",
                numberOfMembers: 4,
                musicalGenre: "Fantasy Folk",
                yearFormed: 2019
            },
            {
                id: 16,
                bandName: "Sonic Stardust",
                numberOfMembers: 3,
                musicalGenre: "Electronic Pop",
                yearFormed: 2020
            },
            {
                id: 17,
                bandName: "Neon Dreamers",
                numberOfMembers: 5,
                musicalGenre: "Synthpop",
                yearFormed: 2017
            },
            {
                id: 18,
                bandName: "Galactic Groove",
                numberOfMembers: 4,
                musicalGenre: "Funk",
                yearFormed: 2013
            },
            {
                id: 19,
                bandName: "Phantom Pharaohs",
                numberOfMembers: 4,
                musicalGenre: "Alternative Metal",
                yearFormed: 2011
            },
            {
                id: 20,
                bandName: "Aurora Abyss",
                numberOfMembers: 3,
                musicalGenre: "Experimental Rock",
                yearFormed: 2016
            }
        ], 
        
        bookings: [
                {
                    id: 1,
                    bandID: 1,
                    venueID: 1,
                    date: randomDate
                }
        ]
}