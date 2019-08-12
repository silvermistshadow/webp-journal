import { Journal, Entry } from './../src/journal.js';

function displayJournalEntries(journalToDisplay) {
  var entryList = $("ul#entries");
  var htmlForEntryInfo = "";
  journalToDisplay.entries.forEach(function(entry) {
    htmlForEntryInfo += "<li id=" + entry.id + ">" + entry.entryTitle + "</li>";
  });
  entryList.html(htmlForEntryInfo);
};

function showEntry() {
  var entry = journal.findEntry(entryId);
  $("#show-entry").show();
  $(".entry-title").html(entry.entryTitle);
  $(".entry-para").html(entry.entryString);
};

function attachEntryListners() {
  $("ul#entries").on("click", "li", function() {
    showEntry(this.id);
  });
}

$(document).ready(function(){


});