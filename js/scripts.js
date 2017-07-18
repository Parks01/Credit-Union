
//Business logic
function Account(fn,ln,em,idep){
  this.firstName = fn;
  this.lastName = ln;
  this.email = em;
  this.initialDeposit = idep;
}

Account.prototype.withdraw = function(withdrawlAmount) {
  this.initialDeposit -= withdrawlAmount;
  return this.initialDeposit;
}
Account.prototype.deposit = function(depositAmount) {
  this.initialDeposit += depositAmount;
  return this.initialDeposit;
}
var account1 = new Account("Michel", "Jordan", "michael@nike.com", 2000);

//UI logic
$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    debugger;
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var initialDeposit = $("#initialDeposit").val();

    var accountHolder = new Account(firstName, lastName, email, initialDeposit);
    $("#depositAmount").val(accountHolder.initialDeposit);

    var initialDeposit = $("#initialDeposit").val();
  });





  $("#deposit").submit(function(event){
    event.preventDefault();

    var accountHolder = new Account(firstName, lastName, email, initialDeposit);
    var amountInAccount = $("#depositAmount").val();
    $("#balance").val(amountInAccount)


  });

});
