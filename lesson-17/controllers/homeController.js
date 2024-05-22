// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.showHome = (req, res) => {
  res.render("index");
};

// 특정 라우트를 위한 콜백 함수 추가
exports.showTransportation = (req, res) => {
  res.render("transportation");
};

// exports.showSignUp = (req, res) => {
//   res.render("contact");
// };

// exports.postedSignUp = (req, res) => {
//   res.render("thanks");
// };

/**
 * Listing 12.9 (p. 182)
 * 콘텐츠의 설정과 렌더링된 뷰에 전달
 *
 * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
 * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
 */
// var courses = [
//   {
//     title: "Event Driven Cakes",
//     cost: 50,
//   },
//   {
//     title: "Asynchronous Artichoke",
//     cost: 25,
//   },
//   {
//     title: "Object Oriented Orange Juice",
//     cost: 10,
//   },
// ]; // 코스를 위한 배열 정의

exports.showRenderedTransportation = (req, res) => {
  res.render("transportation", {
    offeredCourses: courses, // 코스 배열 데이터를 뷰로 전달
  });
};
