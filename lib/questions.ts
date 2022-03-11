export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What is this?",
    image:
      'https://lh3.googleusercontent.com/PnUSplHdOJbXMcGmvnyLSdyGbIgy52jKVo10hzGyoA_a9jyjUrIK-FdHqmI_8AJYOY-dZmtrjnBv-xnFSCDJkhOuAkVsEyM_-ZSTnA=w600',
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "What is this?",
    image:
      'https://lh3.googleusercontent.com/DyLdoaJz0__95mx0lYYqRZ85v3vYjXH_Kb0N7ErsR-G9gpoJhomDwaMQOsQDFejeRwqfNO6mFLXDsLe14xwH02chAu5XdMWDkH4HFIs=w600',
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What is this?",
    image:
      'https://lh3.googleusercontent.com/o1ovSF9zp6gihgGUa3rcYiQEZMZLbDIJ0spZYxfHiokAixqW401-bTM22CfkStqfJF9syDZqRH1k-6WUugC99a_h5FgtoRjoYNSZXw=w600',
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is this?",
    image:
      'https://lh3.googleusercontent.com/iANEEykOeBkwzmvVa5QzDqf7MbahjwwQvk3gDJKZWW3ZspC0RcqAOJjxHspdTTJ1fd4sEMkLGJhju75TjKdecsjjma4iYhdlto1WhTM=w600',
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What is this?",
    image:
      'https://lh3.googleusercontent.com/WXP-ItAKDPyJVIDKikdR7zSi3w0hgNYEqqw-Lymus0EOInFIqVPY-5dFvN8bQGWzKmJ56Q5Moq3eazLzxGeW0xpIK7RfWle_OLPl_g=w600',
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 4,
  },
  {
    questionText: "What is this?",
    image:
      "https://lh3.googleusercontent.com/Q-3MXhiC38Y0jFansnc0HjJk04Mq3RU72FAWyOKxJr2vo0RaGBapGlDCpQTcRYG3iQQmrUVgFDRR2ReuHrKam5WOMOX8zNeBgjZYzw=s0",
    answers: [
      "Fire!",
      "Water",
      "Grass",
      "Earth",
      "Light",
      "Dark",
    ],
    correctAnswerIndex: 5,
  }
];

export default quizQuestions;
