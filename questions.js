let questions = [
    {
      id: 1,
      question: "NEWS means",
      answer: "none of them",
      options: [
        "to convay message",
        "to know how about cricket",
        "to know how about weather",
        "none of them"
      ]
    },
    {
      id: 2,
      question: "Artifical  Intelligence is used in which generation??",
      answer: "5",
      options: [
        "2",
        "3",
        "4",
        "5"
      ]
    },
    {
      id: 3,
      question: " what is the full form of MVC",
      answer: "Model View Controller",
      options: [
        "Model Virtual Controller",
        "Model View Control",
        "Models Views Controllers",
        "Model View Controller"
      ]
    },
    {
        id: 4,
        question: " what is the full form of pkr",
        answer: "pakistan currency",
        options: [
          "pakistan currency",
          "pakistan ",
          "pakistani code",
          "pakistan code"
        ]
      },
      {
        id: 5,
        question: " In which year pakistan cricket team win a worldcup",
        answer: "2011",
        options: [
          "2007",
          "2011",
          "1992",
          "1996"
        ]
      },
      {
        id: 6,
        question: "Choose inncorrect one? ",
        answer: "Model Virtual Controller",
        options: [
          "Model Virtual Controller",
          "Model View controller",
          "Models Views Controllers",
          "Model View Controller"
        ]
      },
      {
        id: 7,
        question: " what is the full form of RAM",
        answer: "Randam Access Memory",
        options: [
          "Randam Access Memory",
          "Randam Aeccess Memory",
          "Randem Access Memory",
          "Read Access Memory"
        ]
      }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function () {
    show(question_count);
  
  };
  
  function next() {
  
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "result.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
      <h2>Q${count + 1}. ${questions[count].question}</h2>
       <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
    </ul> 
      `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  } 