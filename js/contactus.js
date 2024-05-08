// Countries for autocomplete section
const countries = [
    "Afghanistan","Albania","Algeria","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bangladesh","Belarus","Belgium","Benin","Bolivia","Brazil","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia",
    "Comoros","Congo (Kinshasa)","Congo (Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
    "Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos",
    "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nauru","Nepal",
    "Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia",
    "Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
    "Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
    "Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];
  
// Jquery widget (autocomplete)
$(document).ready(function() {
  $( function() {
      $( "#country" ).autocomplete({
          source: countries });
  });

  // Adding pattern for phone number input
  var phoneInput = document.getElementById("phone");
      
  phoneInput.addEventListener("input", function() {
  var inputValue = phoneInput.value.replace(/\D/g, "");

  // Check if the value matches the expected pattern and add "-" after certain digits
  if (inputValue.length >= 1 && inputValue.length < 4) {
      phoneInput.value = inputValue;
  } else if (inputValue.length >= 4 && inputValue.length < 7) {
      phoneInput.value = inputValue.slice(0, 1) + "-" + inputValue.slice(1);
  } else if (inputValue.length >= 7 && inputValue.length < 10) {
      phoneInput.value = inputValue.slice(0, 1) + "-" + inputValue.slice(1, 4) + "-" + inputValue.slice(4, 7) + "-" + inputValue.slice(7);
  } else if (inputValue.length >= 10 && inputValue.length <= 13) {
      phoneInput.value = inputValue.slice(0, 1) + "-" + inputValue.slice(1, 4) + "-" + inputValue.slice(4, 7) + "-" + inputValue.slice(7, 11);
  }
  });

  
  // Change text color up to clicking different labels
  $('#Male').click(function(){
      $('#maleLabel').css("color","darkblue");
      $('#femaleLabel').css("color","black");
      $('#otherLabel').css("color","black");
  });

  $('#Female').click(function(){
      $('#maleLabel').css("color","black");
      $('#femaleLabel').css("color","red");
      $('#otherLabel').css("color","black");
  });

  $('#Other').click(function(){
      $('#maleLabel').css("color","black");
      $('#femaleLabel').css("color","black");
      $('#otherLabel').css("color","purple");
  });

  document.getElementById('contactForm').addEventListener('submit', function(event) {

     // Display custom success message
      alert('Thanks, you have contacted the developer. You will receive a response as soon as possible.');

  });

});