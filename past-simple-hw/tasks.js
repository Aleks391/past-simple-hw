// tasks.js
// Тут ти редагуєш/додаєш завдання. Нічого в index.html чіпати не треба.

window.HW = {
  title: "Past Simple (A2) — Homework",
  subtitle: "Complete the tasks. You’ll get instant feedback + explanations.",
  version: "2026-01-29",

  tasks: [
    {
      id: "t1",
      type: "fill",
      prompt: "1) I ____ (visit) my grandma yesterday.",
      accept: ["visited"],
      // типові помилки -> пояснення
      feedback: {
        "visit": "Past Simple потрібен: **visit → visited** (вчора = минулий час).",
        "visitted": "Подвоєння тут не потрібне: **visited** (одна 't').",
        "*": "Підказка: regular verb + **-ed** у Past Simple."
      }
    },
    {
      id: "t2",
      type: "fill",
      prompt: "2) She ____ (go) to school last Monday.",
      accept: ["went"],
      feedback: {
        "goed": "Неправильно. **go** — неправильне дієслово: **go → went**.",
        "go": "Потрібен Past Simple: **went** (last Monday).",
        "*": "Підказка: go — irregular (went)."
      }
    },
    {
      id: "t3",
      type: "fill",
      prompt: "3) We ____ not ____ (play) football yesterday. (negative)",
      // для 'fill' можна прийняти кілька варіантів написання:
      accept: [
        "did not play",
        "didn't play"
      ],
      normalize: "space", // прибирає зайві пробіли
      feedback: {
        "weren't play": "У Past Simple заперечення з дієсловом: **didn't + V1** → **didn't play**.",
        "didn't played": "Після **didn't** дієслово БЕЗ -ed: **didn't play**.",
        "did not played": "Після **did not** — V1: **did not play**.",
        "*": "Формула: **didn't + base verb**."
      }
    },
    {
      id: "t4",
      type: "mcq",
      prompt: "4) Choose the correct sentence:",
      options: [
        "He didn’t went home.",
        "He didn’t go home.",
        "He don’t go home."
      ],
      correctIndex: 1,
      explanations: {
        0: "Після **didn’t** — тільки V1: **go**, не **went**.",
        2: "У Past Simple не використовуємо **don’t**: треба **didn’t**."
      }
    },
    {
      id: "t5",
      type: "mcq",
      prompt: "5) Which is Past Simple of 'have'?",
      options: ["haved", "had", "has"],
      correctIndex: 1,
      explanations: {
        0: "**have** — неправильне: **have → had**.",
        2: "**has** — це Present Simple (he/she/it), не Past Simple."
      }
    },
    {
      id: "t6",
      type: "fill",
      prompt: "6) Did they ____ (watch) a movie yesterday? (question)",
      accept: ["watch"],
      feedback: {
        "watched": "Після **Did** — дієслово в базовій формі: **watch** (без -ed).",
        "*": "Формула питання: **Did + subject + V1 ... ?**"
      }
    }
  ]
};
