
const alertSave = document.querySelector('#alertSave');
function save(){
    alert("Book has been saved.")
}
alertSave.addEventListener('click', save);

const alertCancel = document.querySelector('#alertCancel');
function cancel(){
    alert("Book does not saved.")
}
alertCancel.addEventListener('click', cancel);