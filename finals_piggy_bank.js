// ------------------------------------------------
// Consider the PiggyBank a black box. You are not
// allowed to edit this
class PiggyBank {
  constructor() {
    this.account = 0
  }

  update() {
    this.account += 0.1
    console.log(this.account)
  }
}
// ------------------------------------------------

const bank = new PiggyBank()

// setInterval(bank.update.bind(bank), 1000)

setInterval(function(){
  bank.update();
}, 1000)
