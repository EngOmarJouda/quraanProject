const checkbox = document.getElementById("checkbox");
const checkmark = document.querySelector(".checkTheVisa");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    checkmark.style.display = "block";
  } else {
    checkmark.style.display = "none";
  }
});


$('#button').datepicker()
.on('changeDate', function(ev){
    $('#button').datepicker('hide');
    alert(ev.date.valueOf());
});

$('#your-datepicker-id').datepicker({
  dateFormat: "dd/mm/yy", 
  showOn: "button",
  buttonText: '<i class="fa fa-calendar"></i>'
})


