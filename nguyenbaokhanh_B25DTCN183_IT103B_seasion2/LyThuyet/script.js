let isActive = "true"; //string

let isActive_v2 = true; //boolean

console.log(typeof isActive);
console.log(typeof isActive_v2);

let check = 5 == "5";
let check_v2 = 5 === "5";
let check_v3 = 5 != 4;

console.log(check);
console.log(check_v2);
console.log(check_v3);

//câu điều kiện if else

let age = 20;
if (age < 25) {
  console.log("Tôi chưa đủ tuổi đi tù");
} else if (age < 45) {
  console.log("Tôi đủ tuổi lấy vợ");
} else {
  console.log("Tôi thích");
}

//toán tử 3 ngôi

let city = age > 25 ? "Hà Nội" : "Hà Nam";
// let city_v2 =  age > 25 ? console.log("Tôi chưa đủ tuổi đi tù") : console.log("Tôi đủ tuổi lấy vợ");

//toán tử logic

let diem = 9;
let tuoi = 20;

if (diem > 9 && tuoi > 18 && true) {
  console.log("Đỗ đại học");
} else {
  console.log("Trượt đại học");
}

if (diem > 9 || tuoi > 18) {
  console.log("Đỗ đại học");
} else {
  console.log("Trượt đại học");
}

let day = 10;

switch (day) {
  case 1:
    console.log("Hôm nay là ngày 1");

    break;
  case 2:
    console.log("Hôm nay là ngày 2");
    break;
  default:
    break;
}

//falsy
// null, 0 , "", unde, false, NaN
let checked = null;
if (checked) {
  console.log("Trả về giá trị là true");
} else {
  console.log("trả về giá trị là false");
}
