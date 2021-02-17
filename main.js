//$(window).on("load", () => {
//   const url = "https://api.jsonbin.io/b/602ad51499ac3873a34a098a";
//   let htmlbody = "";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((element) => {
//         htmlbody += `<tr scope="row"><th>${element.id}</th><td>${element.sound}</td></tr>`;
//       });
//       $("#soundTable").html(htmlbody);
//     });
// });
