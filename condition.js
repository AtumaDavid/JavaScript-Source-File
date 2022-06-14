function allStudent() {
  function student1() {
    const studentOne = {
      name: "John",
      age: 28,
      grade: "A",
    };

    document.getElementById("n").innerHTML = studentOne["name"];
    document.getElementById("age").innerHTML = studentOne["age"];
    document.getElementById("grade").innerHTML = studentOne["grade"];
  }

  //   student1();

  function student2() {
    const studentOne = {
      name: "James",
      age: 30,
    };

    function grades() {
      var grade = "A";

      switch (grade) {
        case "A":
          document.write("excellent");
          break;
        case "B":
          document.write("good");
          break;
        case "C":
          document.write("okay");
          break;
        case "D":
          document.write("Poor");
          break;
        case "F":
          document.write("fail");
          break;
        default:
          document.write("no result found");
          break;
      }
    }
    grades();
    document.getElementById("n2").innerHTML = studentOne["name"];
    document.getElementById("age2").innerHTML = studentOne["age"];
    document.getElementById("grade2").innerHTML = grade;
  }

  //   student2();

  student1();
  student2();
}
allStudent();
