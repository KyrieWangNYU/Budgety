
//BUDGET Controller

var budgetController = (function () {
    //
})();



//UI Controller

var UIController = (function () {

})();


//GLOBAL APP Controller
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        //1. Get the field input data

        //2. Add the item to the budget controller

        //3. Add the item to to UI

        //4. Calculate the budget

        //5. Display the budget on the UI

        console.log('MSG');

    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

