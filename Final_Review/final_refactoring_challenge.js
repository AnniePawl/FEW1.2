// remember BEST PRACTICES
// const > let > var
// single '' > double ""
// Proper Indentation
// Reasonable Line Spaces
// Clarifying Comments
// Consistency!

// Original Code Below

function widget(f) {
  if (f === undefined ) {
    this.folds = 1;
  } else { this.folds = f;
}
this.Id = widget.nextCount();
}

widget.prototype.origami = function() {
    console.log("Preparing to fold unit: "+ this.Id)
        this.foldAction();
    if (this.folds === 2) {
        console.log('makes an envelope');
    }
    if (this.folds == 3) {
    console.log('makes a crane');
    }

    if (this.folds === 4) {
      console.log(`makes a frog`);
    }

    if (this.folds === 5) {
        console.log('makes an elephant')
    }

    if (6 == this.folds) {
        console.log('makes a crumpled wad');
    }
}

widget.prototype.foldAction = function() {
    console.log('???');
    for (i = 0; i < this.folds; i++ ) {
      let step = 1 + i; console.log("fold... " + step);

    }
}

widget.nextCount = () => {
  widget.count = widget.count || 0;
  widget.count += 1;
  return widget.count;
}

widget.getCount = () => {
  return widget.count;
}

let crane = new widget(3);
crane.origami();

let frog = new widget(4);
frog.origami();

let elephant = new widget(5);
elephant.origami();

let oops = new widget(6);
oops.origami()

console.log(widget.getCount());



// ORIGINAL CODE

var elephant

function widget(f) {
  if (f === undefined ) {
    this.folds = 1
  } else { this.folds = f;}

this.Id = widget.nextCount();

}
widget.prototype.origami = function() {
  console.log("Preparing to fold unit: "+ this.Id)
    this.foldAction();
  if (this.folds === 2) {
    console.log('makes an envelope');
  }
 if (this.folds == 3) {
   console.log('makes a crane')
 }

if (this.folds === 4) {
      console.log(`makes a frog`)
  }

  if (this.folds === 5) {
  console.log('makes an elephant')
  }

  if (6 == this.folds) { console.log('makes a crumpled wad')}
}





widget.prototype.foldAction = function() {
  console.log('???')
  for (i = 0; i < this.folds; i++ ) {

    let step = 1 + i; console.log("fold... " + step)

  }
}





widget.nextCount = () => {
  widget.count = widget.count || 0
  widget.count += 1;
  return widget.count
}


widget.getCount = () => {
  return widget.count;
}





let crane = new widget(3)
crane.origami()
var frog = new widget(4);


frog.origami();


elephant = new widget(5);

oops = new widget(6);

console.log(widget.getCount())
elephant.origami();

oops.origami()
