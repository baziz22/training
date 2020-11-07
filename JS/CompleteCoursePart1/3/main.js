

/* calcAge(1985);

function calcAge(year){
  console.log(2016 - year);
  console.log(this);
} */

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calcAgefun: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    
  } 
}
john.calcAgefun();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calcAgefun = john.calcAgefun;
mike.calcAgefun();