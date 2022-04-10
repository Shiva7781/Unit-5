
async function myNote(ele) {
    if (ele.key === "Enter") {

        // creating paragraph element
        let noteData = document.createElement('p');
        noteData.textContent = document.getElementById("writeNote").value;
        document.getElementById("root").append(noteData);

        // clearing data of earlier user
        document.getElementById("writeNote").value = "";
    }
}

export { myNote }