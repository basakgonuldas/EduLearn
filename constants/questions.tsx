const questions = [
  {
    id: 1,
    category: "Matematik",
    question: "2 + 2 kaç eder?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
    image: require("../assets/images/mat1.png"), // Görsel ekledik
  },
  {
    id: 2,
    category: "Tarih",
    question: "Atatürk kaç yılında doğdu?",
    options: ["1881", "1905", "1876", "1919"],
    correctAnswer: "1881",
    image: require("../assets/images/atatürk.png"),
  },
  {
    id: 3,
    category: "İngilizce",
    question: "What is the plural of 'child'?",
    options: ["childs", "childes", "children", "childer"],
    correctAnswer: "children",
    image: null, // Görsel olmayabilir
  },
  // ...
  // Diğer kategorilerden en az 10 soru ekle!
];

export default questions;
