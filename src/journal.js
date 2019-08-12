export function Journal() {
  this.entries = [],
  this.currentId = 0;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);
};

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.findEntry = function(id) {
  for (var i=0; i< this.entries.length; i++) {
    if (this.entries[i]) {
      if (this.entries[i].id == id) {
        return this.entries[i];
      }
    } 
  }
  return false;
};

export function Entry(entryString, entryTitle) {
  this.entryString = entryString;
  this.entryTitle = entryTitle;
}

Entry.prototype.numWords = function(){
  var stringArray = this.entryString.split(" ");
  var wordNum = stringArray.length;
  return wordNum;
};

Entry.prototype.numVowelCons = function() {
  var letterArray = this.entryString.split("");
  var numVowel;
  var numCons;
  var vowelSearch = /[aiueo]/i;
  var digitSearch = /\d/;
  for (var x=0; x > letterArray.length; x++) {
    if (vowelSearch.test(letterArray[x])) {
      numVowel += 1;
    }
    else if (!digitSearch.test(letterArray[x])) {
      numCons += 1;
    }
  }
  var outputArray = [numVowel, numCons];
  return outputArray;
};