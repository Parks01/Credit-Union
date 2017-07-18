
//Business logic
function Account(fn,ln,em,idep){
  this.firstName = fn;
  this.lastName = ln;
  this.email = em;
  this.initialDeposit = idep;
}
Account.prototype.withdrawal = function(withdrawlAmount) {
  
}

//UI logic
$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
  });

  $("#deposit").submit(function(event){
    event.preventDefault();

  });

});
