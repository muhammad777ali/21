let array = [1];

while (true) {
  let input = prompt("Buyruqni kiriting:");

  if (input.toLowerCase() === "stop") {
    console.log("Yakuniy massiv:");
    console.log(array);
    break;
  } else if (input.toLowerCase().startsWith("qoshish,")) {
    let name = input.split(",")[1].trim();
    array.push(name);
    console.log("Qo'shilgan element: " + name);
  } else if (input.toLowerCase().startsWith("del,")) {
    let name = input.split(",")[1].trim();
    let index = array.indexOf(name);
    if (index !== -1) {
      array.splice(index, 1);
      console.log("Element olib tashlandi: " + name);
    } else {
      console.log("Element topilmadi: " + name);
    }
  } else {
    console.log("Noma'lum buyruq");
  }
}