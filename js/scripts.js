// let pdx = {
//   name = "Portland",
//   nickName = "PDX",
//   landmarks = ["Pioneer Square", "Burnside Bridge", "Mt. Hood"],
//   timesVisited = 0
// }

// let sfo = {
//   name = "San Francisco",
//   nickName = "Frisco",
//   landmarks = ["Golden Gate Bridge", "Golden Gate Park", "Mission District"],
//   timesVisited = 0
// }

// let sea = {
//   name = "Seattle",
//   nickName = "SeaTac",
//   landmarks = ["Pike Place", "Fremont Bridge Troll", "Lenin Statue"],
//   timesVisited = 0
// }

// Describe: Place();
// Test: "It should construct new object with paramenters."
// Expect(place = new Place("Seattle", "Rainy City", ["blah, blah, blah"])).toEqual(place = {name: "Seattle", nickName:"Rainy City", landMarks: ["blah, blah, blah"]});

// Describe: LogBook();
// Test: "It should construct parent object of places."
// Expect: (logBook = new LogBook(pdx).toEqual(logBook = {Place: {name: "Portland", nickName: "PDX", landmarks: ["etc, etc, etc"]}}))

// Describe: LogBook.prototype.addPlace()
// Test: "It should add place object to logbook object"
// Expect: (logBook.addplace(pdx).toEqual(logBook = {pdx, etc, etc}))

// Describe: LogBook.prototype.assignId();
// Test: "It should assign an ID to objects added to logBook"
// Expect: (logBook.addPlace(pdx).toEqual(Place: {...id: 1}));

// Describe: LogBook.prototype.findPlace();
// Test: "It should return 'This ID does not exist' if id != undefined."
// Expect: (logBook.prototype.findPlace(5).toEqual('This ID does not exist'));

// Test: "It should return Place object based on its id."
// Expect: (logBook.prototype.findPlace(1).toEqual(Place: {pdx}));

// Describe: LogBook.prototype.visitPlace();
// Test: "It should incement this.timesVisited by 1"
// Expect: (logBook.visitPlace(1)).toEqual(Place {...timesVisited: +1});

// Describe: LogBook.prototype.addLandmark();
// Test: "It should add landmark to landmark array."
// Expect: (logBook.addLandmark(1, ("landmark"))).toEqual(Place {landmarks: ["blah", "blah", "landmark"]})

function LogBook() {
  this.places = {};
  this.currentId = 0;
  this.timesVisited = 1;
}
LogBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}
LogBook.prototype.assignId = function(id) {
  this.currentId++;
  return this.currentId;
}
LogBook.prototype.findPlace = function(id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return "This ID does not exist."
}
LogBook.prototype.visitPlace = function(id) {
  if (this.places[id] != undefined) {
    this.places[id].timesVisited++;
  }
}
LogBook.prototype.addLandmark = function(id, landmark) {
  if (this.places[id] != undefined) {
    this.places[id].landmarks.push(landmark);
  }
}

function Place(name, nickName, landmarks) {
  this.name = name;
  this.nickName = nickName;
  this.landmarks = landmarks;
}