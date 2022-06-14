function student1() {
  var studentOne = {
    firstName: "John",
    lastName: "Doe",
    myAge: "24",
    mySchool: "Unilag",
  };
  document.getElementById("fn").innerHTML = studentOne["firstName"];
  document.getElementById("ln").innerHTML = studentOne["lastName"];
  document.getElementById("age").innerHTML = studentOne["myAge"];
  document.getElementById("sch").innerHTML = studentOne["mySchool"];
}

student1();

function student2() {
  var studentOne = {
    firstName: "James",
    lastName: "Doe",
    myAge: "26",
    mySchool: "Unilag",
  };
  document.getElementById("fn2").innerHTML = studentOne["firstName"];
  document.getElementById("ln2").innerHTML = studentOne["lastName"];
  document.getElementById("age2").innerHTML = studentOne["myAge"];
  document.getElementById("sch2").innerHTML = studentOne["mySchool"];
}

student2();

function dateFunction() {
  document.getElementById("date").innerHTML = Date();
  document.getElementById("date").style.display = "block";
}

function endFunction() {
  document.getElementById("date").style.display = "none";
}

str = "please visit microsoft";
document.write(str);
document.write("<br> <br>");

var n = str.replace("please", "kindly");
document.write(n);
document.write("<br> <br>");

var m = str.replace("visit", "go to");
document.write(m);
document.write("<br> <br>");

var strr = "apple, banana, kiwi";
var res = strr.substr(7);
document.write(res);
document.write("<br> <br>");

// search
var strrr = "please locate where 'locate' occurs!";
var pos = strrr.search("where");
document.write(pos);
document.write("<br> <br>");

// var text1 = 'david'
// var text2 = text1.toLocaleUpperCase()
// document.write(text2)

var text1 = "DAVID";
var text2 = text1.toLocaleLowerCase();
document.write(text2);
