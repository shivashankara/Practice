var cars = {
    sedan: ["Swift Desire", "honda City", "Toyota"],
    hatchBack: ["Tata tiago", "Santro", "i20"],
    suv: ["Scorpio", "Mahindra", "toyota innova"]
}

var main = document.getElementById('main');
var sub = document.getElementById('sub');


main.addEventListener('change', function () {
    //  get selected value from main
    var selected_option = cars[this.value];

    //  remove the option from sub dd
    while (sub.options.length > 0) {
        sub.options.remove(0);      
    }

    Array.from(selected_option).forEach(function(el){
        var option = new Option(el,el);
        sub.appendChild(option);
    })
        

})
