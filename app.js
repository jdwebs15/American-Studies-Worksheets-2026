const API_URL =
  "https://script.google.com/macros/s/AKfycby02zbzfCnQZh6y2S5R_Gj79ixmV6QqsrhmNC79zkVbTY0SuoK6KR76yOI8Q0FDnb96Jw/exec";

const state = {
  index: 0,
  questions: [],
  answers: {},
  startedAt: null,
  name: "",
  email: "",
  period: "",
  tabLeaves: 0,
  hiddenSeconds: 0,
  hiddenAt: null,
};

const $ = (id) => document.getElementById(id);

function shuffled(values) {
  const copy = [...values];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function prepareQuestions() {
  return shuffled(
    QUESTIONS.map((question) => ({
      ...question,
      options: shuffled(question.options.map((option) => ({ ...option }))),
    })),
  );
}

function show(id) {
  ["start", "game", "review", "done"].forEach((sectionId) => {
    $(sectionId).classList.toggle("hidden", sectionId !== id);
  });
}

document.addEventListener("visibilitychange", () => {
  if (!state.startedAt) return;
  if (document.hidden) {
    state.tabLeaves += 1;
    state.hiddenAt = Date.now();
  } else if (state.hiddenAt) {
    state.hiddenSeconds += Math.round((Date.now() - state.hiddenAt) / 1000);
    state.hiddenAt = null;
  }
});

$("begin").onclick = () => {
  state.name = $("studentName").value.trim();
  state.email = $("studentEmail").value.trim().toLowerCase();
  state.period = $("classPeriod").value;

  if (!state.name || !state.email || !state.period) {
    $("startError").textContent =
      "Enter your full name, school email, and class period.";
    return;
  }

  if (!/^[^@\s]+@nortonpanthers\.org$/i.test(state.email)) {
    $("startError").textContent =
      "Enter your Norton Panthers school email address.";
    return;
  }

  state.questions = prepareQuestions();
  state.answers = {};
  state.index = 0;
  state.startedAt = new Date().toISOString();
  show("game");
  render();
};

function render() {
  const question = state.questions[state.index];
  const answeredCount = Object.keys(state.answers).length;

  $("counter").textContent =
    `Question ${state.index + 1} of ${state.questions.length}`;
  $("answered").textContent = `${answeredCount} answered`;
  $("bar").style.width =
    `${((state.index + 1) / state.questions.length) * 100}%`;
  $("topic").textContent = question.topic;
  $("question").textContent = question.prompt;

  $("answers").innerHTML = question.options
    .map((option, optionIndex) => {
      const selected = state.answers[question.id] === option.id;
      const letter = String.fromCharCode(65 + optionIndex);
      return `
        <button
          class="answer ${selected ? "selected" : ""}"
          data-choice="${option.id}"
        >
          <span class="letter">${letter}</span>
          <span>${escapeHtml(option.text)}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".answer").forEach((button) => {
    button.onclick = () => {
      state.answers[question.id] = button.dataset.choice;
      $("questionError").textContent = "";
      render();
    };
  });

  $("prev").disabled = state.index === 0;
  $("next").textContent =
    state.index === state.questions.length - 1 ? "Review answers" : "Next";
}

$("prev").onclick = () => {
  if (state.index > 0) {
    state.index -= 1;
    render();
  }
};

$("next").onclick = () => {
  const question = state.questions[state.index];
  if (!state.answers[question.id]) {
    $("questionError").textContent = "Choose an answer before continuing.";
    return;
  }

  if (state.index < state.questions.length - 1) {
    state.index += 1;
    render();
  } else {
    openReview();
  }
};

function openReview() {
  show("review");
  $("reviewGrid").innerHTML = state.questions
    .map((question, questionIndex) => {
      const missing = !state.answers[question.id];
      return `
        <button
          class="${missing ? "missing" : ""}"
          data-index="${questionIndex}"
        >
          ${questionIndex + 1}
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#reviewGrid button").forEach((button) => {
    button.onclick = () => {
      state.index = Number(button.dataset.index);
      show("game");
      render();
    };
  });
}

$("submit").onclick = async () => {
  const missingIndex = state.questions.findIndex(
    (question) => !state.answers[question.id],
  );
  if (missingIndex >= 0) {
    $("submitError").textContent =
      `Question ${missingIndex + 1} still needs an answer.`;
    return;
  }

  const submitButton = $("submit");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  if (state.hiddenAt) {
    state.hiddenSeconds += Math.round((Date.now() - state.hiddenAt) / 1000);
    state.hiddenAt = null;
  }

  const finishedAt = new Date().toISOString();
  const payload = {
    gameId: GAME_ID,
    title: GAME_TITLE,
    name: state.name,
    email: state.email,
    period: state.period,
    startedAt: state.startedAt,
    finishedAt,
    durationSeconds: Math.round(
      (Date.parse(finishedAt) - Date.parse(state.startedAt)) / 1000,
    ),
    tabLeaves: state.tabLeaves,
    hiddenSeconds: state.hiddenSeconds,
    answers: state.questions.map((question) => ({
      id: question.id,
      choice: state.answers[question.id],
    })),
  };

  try {
    await fetch(API_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    show("done");
    $("scoreLine").textContent = "All 55 responses were submitted.";
    $("receipt").textContent =
      `${state.name} | Period ${state.period} | ` +
      new Date(finishedAt).toLocaleString();
  } catch (error) {
    submitButton.disabled = false;
    submitButton.textContent = "Submit pretest";
    $("submitError").textContent =
      "Submission failed. Check the connection and try again.";
  }
};

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };
    return replacements[character];
  });
}
