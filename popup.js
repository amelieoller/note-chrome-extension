let noteText = document.getElementById("noteText");
noteText.focus();

chrome.storage.sync.get("note", function(data) {
  noteText.value = data.note;
});

noteText.addEventListener(
  "change",
  function(element) {
    let newNote = element.target.value;
    chrome.storage.sync.set({ note: newNote });
  },
  false
);

let copyButton = document.getElementById("copyButton");

copyButton.onclick = function() {
  chrome.storage.sync.get("note", function(data) {
    navigator.clipboard.writeText(data.note);
    copyButton.value = "Copied";
    copyButton.classList.toggle("copiedButton");

    setTimeout(function() {
      copyButton.value = "Copy";
      copyButton.classList.toggle("copiedButton");
    }, 2000);
  });
};
