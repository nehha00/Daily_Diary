// Function to save diary entry
function saveEntry() {
    let entryText = document.getElementById("diary-entry").value.trim();
    if (entryText === "") {
        alert("Please write something before saving!");
        return;
    }

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    let newEntry = {
        date: new Date().toLocaleDateString(),
        text: entryText
    };

    entries.push(newEntry);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    
    document.getElementById("diary-entry").value = ""; // Clear textarea
    displayEntries(); // Refresh entry list
}

// Function to display entries
function displayEntries() {
    let entriesContainer = document.getElementById("entries-container");
    entriesContainer.innerHTML = "";

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    entries.forEach((entry, index) => {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.innerHTML = `<strong>${entry.date}</strong><br>${entry.text} 
                              <button onclick="deleteEntry(${index})">🗑 Delete</button>`;
        entriesContainer.appendChild(entryDiv);
    });
}

// Function to delete an entry
function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    entries.splice(index, 1);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    displayEntries();
}

// Display entries on page load
document.addEventListener("DOMContentLoaded", displayEntries);
