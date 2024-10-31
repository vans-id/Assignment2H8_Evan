/**
 * Membuka tutup form edit
 * @param {SubmitEvent} e
 */
function onEdit(e) {
  e.preventDefault();
  const form = document.getElementById("formContainer");

  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
}

/**
 * Merealisasikan perubahan pada form ke section profile
 * @param {SubmitEvent} e
 */
function onSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  for (const [name, value] of data) {
    const targetName = name.slice(5).toLowerCase();
    document.getElementById(targetName).innerText = value;
  }
}

/**
 * Melakukan pre-fill pada form dengan data pada section profile
 */
function tampilkanData() {
  const form = document.getElementById("form");
  const data = new FormData(form);
  for (const [name, _] of data) {
    const targetName = name.slice(5).toLowerCase();
    const data = document.getElementById(targetName).innerText;

    document.getElementById(name).value = data;
  }
}

tampilkanData();
document.getElementById("form").addEventListener("submit", (e) => onSubmit(e));
const editButton = document.getElementById("btnEdit");
editButton.addEventListener("click", (e) => onEdit(e));
