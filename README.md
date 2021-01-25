# Places You've Been

#### Simple page to collect and show places the user has been

#### By **Jeroen van Seeters, Scott O'Neil**

## Description

_It will take input from user of places visited, add and save them to be visible on page_


### Specs

| Describe | Test | Expect |
| :-------------     | :------------- | :------------- |
| **Place();** | "It should construct new object with paramenters." | (place = new Place("Seattle", "Rainy City", ["blah, blah, blah"])).toEqual(place = {name: "Seattle", nickName:"Rainy City", landMarks: ["blah, blah, blah"]}); |
| **LogBook();** | "It should construct parent object of places." | (logBook = new LogBook(pdx).toEqual(logBook = {Place: {name: "Portland", nickName: "PDX", landmarks: ["etc, etc, etc"]}})) |
| **LogBook.prototype.addPlace()** | "It should add place object to logbook object" | (logBook.addplace(pdx).toEqual(logBook = {pdx, etc, etc})) |
| **LogBook.prototype.assignId();** | "It should assign an ID to objects added to logBook" | (logBook.addPlace(pdx).toEqual(Place: {...id: 1})); |
| **LogBook.prototype.findPlace();** | "It should return 'This ID does not exist' if id != undefined." | (logBook.prototype.findPlace(5).toEqual('This ID does not exist'));
 |
 | **LogBook.prototype.findPlace()** | "It should return Place object based on its id." | (logBook.prototype.findPlace(1).toEqual(Place: {pdx})); |
 | **LogBook.prototype.visitPlace();** | "It should incement this.timesVisited by 1" | (logBook.visitPlace(1)).toEqual(Place {...timesVisited: +1}); |
 | **LogBook.prototype.addLandmark();** | "It should add landmark to landmark array." | (logBook.addLandmark(1, ("landmark"))).toEqual(Place {landmarks: ["blah", "blah", "landmark"]}) |

## Setup/Installation Requirements

1. Clone/Download from GitHub
2. Unzip, if necessary
3. Run index.html in browser of choice
4. Alternatively, view on [GitHub Pages]()

## Known Bugs

* No known bugs.

## Technologies Used

* HTML
* CSS/Bootstrap
* JavaScript/jQuery

## Support and contact details

_Contact us on GitHub with any questions, comments, concerns... though, given that this is a school practice, think hard on whether or not that is necessary_

### License

*{GPL}*

Copyright (c) 2021 **_{Jeroen van Seeters, Scott O'Neil}_**