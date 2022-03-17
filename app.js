// // date lar bilan ishlash

// let one = new Date(2022, 03, 04).getTime();
// console.log(one);

// let dateNow = new Date(2025, 1, 14).getTime();
// let kun10 = dateNow + 10 * 24 * 60 * 60 * 1000;
// let date10 = new Date(kun10).toISOString();
// console.log(date10);

// let options = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// };
// let hozirInternational = new Date();
// let davlat = navigator.language;

// let uzb = new Intl.DateTimeFormat(davlat, options).format(hozirInternational);
// console.log(uzb);

// // let sozlanma = {
// //   style: "deciminal",

// // };

// let setimor = setTimeout(
//   function (a, b) {
//     console.log(a * b);
//   },
//   9000,
//   13,
//   20
// );
// if (13 > 20) {
//   clearTimeout(setimor);
// }

// let a = 0;
// let setInt = setInterval(function () {
//   console.log("salom");
//   a++;
//   if (a < 10) {
//     clearInterval(setInt);
//   }
// }, 2000);
