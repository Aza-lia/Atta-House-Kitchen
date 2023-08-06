function validateName() {
  var casualname = document.forms["name-form"]["casual-name"].value;

  if (casualname == "") {
    alert("input tidak boleh kosong");
  } else {
    document.getElementById("name").innerText= casualname;
    document.forms["name-form"]["casual-name"].value=""
    window.location.href="#shop"
  }

return false;
}