var selectRow = null;
// showalerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = ` alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const contaniner = document.querySelector(".container");
    const main = document.querySelector(".main");
    contaniner.insertBefore(div, main);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);

}
function clearField() {

    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}
// add
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // get form value
    const firstname = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNO = document.querySelector("#rollNo").value;
    // validate  
    if (firstname == "" || lastName == "" || rollNO == "") {

        // alert();
        showAlert("please fill in all fieled", "danger");
    } else if (selectRow == null) {
        const list = document.querySelector("#student-list");
        const Row = document.createElement("tr");
        Row.innerHTML = `
        <td>${firstname}</td>
        <td>${lastName}</td>
        <td>${rollNO}</td>
        <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">delete</a>
        </td>
        `;

        list.appendChild(Row);
        selectRow = null;
        showAlert("student added", "success");

    } else {
        selectRow.children[0].textContent = firstname;
        selectRow.children[1].textContent = lastName;
        selectRow.children[2].textContent = rollNO;
        selectRow = null;
        showAlert("student info edited", "info")
    }
    clearField();


});
// edit student info
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    // alert();
    if (target.classList.contains("edit")) {

        selectRow = target.parentElement.parentElement;

        document.querySelector("#firstName").value = selectRow.children[0].textContent;
        document.querySelector("#lastName").value = selectRow.children[1].textContent;
        document.querySelector("#rollNo").value = selectRow.children[2].textContent;

    }

});

// alert()
document.querySelector("#student-list").addEventListener("click", (e) => {
    // alert()
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student data Deleted", "danger")
    }



});
