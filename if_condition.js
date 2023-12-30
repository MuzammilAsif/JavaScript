let a = 4
let b = 5
if (a == b){
    console.log('they matched')
}else{
    console.log(`they're different`);
}

let age = 15
if (age < 0){
    console.log("invalid age");
}else if (age > 0 && age < 18) {
    console.log('You cannot drive at this age')
} else{
    console.log('You can drive at this age')
}

// grading using else if statement 
let marks = 800
  if(marks >= 900) {
    console.log(`A+ Grade`)
  }
else if (marks >= 700){
  console.log(`A Grade`)
}
else if (marks >= 500){
  console.log(`B Grade`)
}
else if (marks >= 200){
  console.log(`C Grade`)
}
else {
  console.log(`fail`)
}