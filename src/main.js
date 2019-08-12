import { Journal, Entry } from './../src/journal.js';

var journal = new Journal();

function displayJournalEntries(journalToDisplay) {
  var entryList = $("ul#entries");
  var htmlForEntryInfo = "";
  journalToDisplay.entries.forEach(function(entry) {
    htmlForEntryInfo += "<li id=" + entry.id + ">" + entry.entryTitle + "</li>";
  });
  entryList.html(htmlForEntryInfo);
}

function showEntry() {
  var entry = journal.findEntry(entryId);
  $("#show-entry").show();
  $(".entry-title").html(entry.entryTitle);
  $(".entry-para").html(entry.entryString);
}

function attachEntryListners() {
  $("ul#entries").on("click", "li", function() {
    showEntry(this.id);
  });
}


$(document).ready(function(){
  attachEntryListners();
  $("form#entry-form").submit(function(event) {
    event.preventDefault();
    var inputTitle = $("input#entry-title").val();
    var inputText = $("input#entry-text").val();
    $("input#entry-title").val("");
    $("input#entry-text").val("");
    var newEntry = new Entry(inputText, inputTitle);
    journal.addEntry(newEntry);
    displayJournalEntries(journal);
  });

});