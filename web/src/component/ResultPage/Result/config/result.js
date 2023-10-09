import data from "./data";

const result = [
  {
    title: "問題一",
    question: "你的工作性質屬於？",
    type: "wordCloud",
    key: "question1",
    basis: "basis-full",
    data: {
      labels: data.answer01.map((item) => item._id),
      datasets: [
        {
          data: data.answer01.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題二",
    question: "DevOps 的經驗",
    type: "bar",
    key: "question2",
    basis: "basis-1/3",
    data: {
      labels: data.answer02.map((item) => item._id),
      datasets: [
        {
          data: data.answer02.map((item) => item.count),
          backgroundColor: "rgb(113 63 18)", // text-900
          borderColor: "rgb(202 138 4)", // text-600
          borderWidth: 2,
          borderRadius: 16,
        },
      ],
    },
  },
  {
    title: "問題三",
    question: "您使用的程式語言？",
    type: "wordCloud",
    key: "question3",
    basis: "basis-1/3",
    chartOptions: {
      basicFontSize: 36,
      maxValue: 639,
      maxFontSize: 150,
    },
    data: {
      labels: data.answer03.map((item) => item._id),
      datasets: [
        {
          data: data.answer03.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題四",
    question: "是否有接觸過網絡協議的相關經驗？",
    type: "pie",
    key: "question4",
    basis: "basis-1/3",
    chartOptions: {
      formatter: (value, context) =>
        context.chart.data.labels[context.dataIndex] + ": " + value + "人",
      tooltip: { enabled: false },
    },
    data: {
      labels: data.answer04.map((item) => item._id),
      datasets: [
        {
          data: data.answer04.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題五",
    question: "目前使用的版本控制服務？",
    type: "bar",
    key: "question5",
    basis: "basis-1/3",
    data: {
      labels: data.answer05.map((item) => item._id),
      datasets: [
        {
          data: data.answer05.map((item) => item.count),
          backgroundColor: "rgb(6 78 59)", // text-900
          borderColor: "rgb(5 150 105)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題六",
    question: "目前使用的專案管理工具？",
    type: "bar",
    key: "question6",
    basis: "basis-full",
    chartOptions: {
      indexAxis: "y",
      maintainAspectRatio: true,
      scales: {
        x: { grid: { display: true } },
        y: { grid: { display: false } },
      },
    },
    data: {
      labels: data.answer06.map((item) => item._id),
      datasets: [
        {
          data: data.answer06.map((item) => item.count),
          backgroundColor: "rgb(12 74 110)", // text-900
          borderColor: "rgb(2 132 199)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題七",
    question: "開發過的專案中，自動化測試有包含什麼項目呢？",
    type: "bar",
    key: "question7",
    basis: "basis-1/3",
    data: {
      labels: data.answer07.map((item) => item._id),
      datasets: [
        {
          data: data.answer07.map((item) => item.count),
          backgroundColor: "rgb(76 29 149)", // text-900
          borderColor: "rgb(124 58 237)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題八",
    question: "使用的雲端服務？",
    type: "wordCloud",
    key: "question8",
    basis: "basis-1/3",
    chartOptions: {
      basicFontSize: 24,
      maxValue: 565,
      maxFontSize: 150,
    },
    data: {
      labels: data.answer08.map((item) => item._id),
      datasets: [
        {
          data: data.answer08.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題九",
    question: "使用中的基礎設施的架構？",
    type: "pie",
    key: "question9",
    basis: "basis-1/3",
    data: {
      labels: data.answer09.map((item) => item._id),
      datasets: [
        {
          data: data.answer09.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題十",
    question: "使用中的基礎設施部署工具？",
    type: "bar",
    key: "question10",
    basis: "basis-1/3",
    chartOptions: {
      indexAxis: "y",
      scales: {
        x: { grid: { display: true } },
        y: { grid: { display: false } },
      },
    },
    data: {
      labels: data.answer10.map((item) => item._id),
      datasets: [
        {
          data: data.answer10.map((item) => item.count),
          backgroundColor: "rgb(124 45 18)", // text-900
          borderColor: "rgb(234 88 12)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題十一",
    question:
      "是否使用過 Secret management 管理密碼、API 密鑰和其他機密資訊的經驗？",
    type: "doughnut",
    key: "question11",
    basis: "basis-1/3",
    data: {
      labels: data.answer11.map((item) => item._id),
      datasets: [
        {
          data: data.answer11.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題十二",
    question: "使用的配置管理工具？",
    type: "bar",
    key: "question12",
    basis: "basis-1/3",
    data: {
      labels: data.answer12.map((item) => item._id),
      datasets: [
        {
          data: data.answer12.map((item) => item.count),
          backgroundColor: "rgb(6 78 59)", // text-900
          borderColor: "rgb(5 150 105)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題十三",
    question: "使用的 CI/CD 工具？",
    type: "pie",
    key: "question13",
    basis: "basis-1/3",
    data: {
      labels: data.answer13.map((item) => item._id),
      datasets: [
        {
          data: data.answer13.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題十四",
    question: "使用的容器化管理工具？",
    type: "bar",
    key: "question14",
    basis: "basis-1/3",
    data: {
      labels: data.answer14.map((item) => item._id),
      datasets: [
        {
          data: data.answer14.map((item) => item.count),
          backgroundColor: "rgb(76 29 149)", // text-900
          borderColor: "rgb(124 58 237)", // text-600
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
  },
  {
    title: "問題十五",
    question: "使用過的系統監控軟體？",
    type: "wordCloud",
    key: "question15",
    basis: "basis-1/3",
    chartOptions: {
      basicFontSize: 36,
      maxValue: 559,
      maxFontSize: 200,
    },
    data: {
      labels: data.answer15.map((item) => item._id),
      datasets: [
        {
          data: data.answer15.map((item) => item.count),
        },
      ],
    },
  },
  {
    title: "問題十六",
    question: "使用過的 Logs 管理工具？",
    type: "pie",
    key: "question16",
    basis: "basis-1/3",
    data: {
      labels: data.answer16.map((item) => item._id),
      datasets: [
        {
          data: data.answer16.map((item) => item.count),
        },
      ],
    },
  },
];

export default result;
