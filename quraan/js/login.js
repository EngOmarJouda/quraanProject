const checkbox = document.getElementById("checkbox");
const checkmark = document.querySelector(".checkTheVisa");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    checkmark.style.display = "block";
  } else {
    checkmark.style.display = "none";
  }
});


