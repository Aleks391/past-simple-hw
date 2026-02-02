// tasks.js
// Тут ти редагуєш/додаєш завдання. Нічого в index.html чіпати не треба.

window.HW = {
  title: "English Tenses (A2) — Homework",
  subtitle: "Present / Past / Future: practice with instant feedback.",
  version: "2026-02-15",

  theory: {
    present: {
      title: "Present Simple — правила",
      rules: [
        "Використовуємо для регулярних дій, фактів та розкладів.",
        "Ствердження: I/you/we/they + V1; he/she/it + V1 + -s/-es.",
        "Заперечення: do not (don’t) / does not (doesn’t) + V1.",
        "Питання: Do/Does + підмет + V1?"
      ],
      examples: [
        { en: "I work after school.", uk: "Я працюю після школи." },
        { en: "She watches TV in the evening.", uk: "Вона дивиться телевізор увечері." },
        { en: "They don’t play chess on Mondays.", uk: "Вони не грають у шахи в понеділок." },
        { en: "Does he like coffee?", uk: "Йому подобається кава?" }
      ]
    },
    past: {
      title: "Past Simple — правила",
      rules: [
        "Використовуємо для дій у минулому, які вже закінчилися.",
        "Ствердження: V2 (regular: -ed, irregular: go → went).",
        "Заперечення: did not (didn’t) + V1.",
        "Питання: Did + підмет + V1?"
      ],
      examples: [
        { en: "I visited my grandma yesterday.", uk: "Я відвідав(ла) бабусю вчора." },
        { en: "He didn’t go to school last Friday.", uk: "Він не ходив до школи минулої п’ятниці." },
        { en: "Did you see that movie?", uk: "Ти бачив(ла) той фільм?" },
        { en: "We ate pizza two days ago.", uk: "Ми їли піцу два дні тому." }
      ]
    },
    future: {
      title: "Future Simple / be going to — правила",
      rules: [
        "Future Simple (will) — для рішень, обіцянок, передбачень.",
        "Ствердження: will + V1; заперечення: won’t + V1; питання: Will + підмет + V1?",
        "Be going to — для планів та намірів: am/is/are + going to + V1.",
        "Часові маркери: tomorrow, next week, soon, in two days."
      ],
      examples: [
        { en: "I will call you tomorrow.", uk: "Я зателефоную тобі завтра." },
        { en: "She won’t be late.", uk: "Вона не запізниться." },
        { en: "Are they going to travel in summer?", uk: "Вони збираються подорожувати влітку?" },
        { en: "We are going to study tonight.", uk: "Ми збираємося вчитися сьогодні ввечері." }
      ]
    }
  },

  taskSets: {
    present: [
      {
        id: "pr1",
        type: "fill",
        prompt: "Present 1) I ____ (play) basketball on Saturdays.",
        accept: ["play"],
        feedback: {
          "plays": "З I використовуємо базову форму: **play**.",
          "played": "Це не минулий час. У Present Simple: **play**.",
          "*": "Підказка: I/you/we/they + V1 без -s."
        }
      },
      {
        id: "pr2",
        type: "fill",
        prompt: "Present 2) She ____ (watch) TV every evening.",
        accept: ["watches"],
        feedback: {
          "watch": "Для he/she/it додаємо **-es**: **watches**.",
          "watched": "Це минулий час. Тут потрібно **watches**.",
          "*": "Підказка: he/she/it + V1 + -s/-es."
        }
      },
      {
        id: "pr3",
        type: "fill",
        prompt: "Present 3) They ____ (not / like) loud music.",
        accept: ["do not like", "don't like"],
        normalize: "space",
        feedback: {
          "doesn't like": "З they використовуємо **don’t**.",
          "do not likes": "Після do not — тільки V1: **like**.",
          "*": "Формула: **don’t + V1**."
        }
      },
      {
        id: "pr4",
        type: "fill",
        prompt: "Present 4) ____ you ____ (study) English after school?",
        accept: ["do study"],
        normalize: "space",
        feedback: {
          "does study": "З you використовуємо **Do**, не **Does**.",
          "do studies": "Після Do — V1: **study**.",
          "*": "Питання: **Do + you + V1**."
        }
      },
      {
        id: "pr5",
        type: "fill",
        prompt: "Present 5) My brother ____ (go) to school by bus.",
        accept: ["goes"],
        feedback: {
          "go": "Для he/she/it додаємо **-es**: **goes**.",
          "goed": "Це не Past Simple. Тут **goes**.",
          "*": "Підказка: go → goes (he/she/it)."
        }
      },
      {
        id: "pr6",
        type: "mcq",
        prompt: "Present 6) Choose the correct sentence:",
        options: [
          "He don’t like tea.",
          "He doesn’t like tea.",
          "He isn’t like tea."
        ],
        correctIndex: 1,
        explanations: {
          0: "Для he потрібне **doesn’t**.",
          2: "Зі звичайними дієсловами не використовуємо **is**."
        }
      },
      {
        id: "pr7",
        type: "mcq",
        prompt: "Present 7) What is the correct question?",
        options: [
          "Does they play football?",
          "Do they play football?",
          "Do they plays football?"
        ],
        correctIndex: 1,
        explanations: {
          0: "З they використовуємо **Do**.",
          2: "Після Do — V1: **play**, без -s."
        }
      },
      {
        id: "pr8",
        type: "fill",
        prompt: "Present 8) We ____ (have) lunch at 1 pm.",
        accept: ["have"],
        feedback: {
          "has": "Для we використовуємо **have**, не **has**.",
          "had": "Це минулий час. У Present Simple: **have**.",
          "*": "We + V1."
        }
      },
      {
        id: "pr9",
        type: "fill",
        prompt: "Present 9) It ____ (rain) a lot in spring.",
        accept: ["rains"],
        feedback: {
          "rain": "Для it додаємо **-s**: **rains**.",
          "rained": "Це минулий час. Тут **rains**.",
          "*": "he/she/it + V1 + -s."
        }
      },
      {
        id: "pr10",
        type: "fill",
        prompt: "Present 10) They ____ (not / watch) TV in the morning.",
        accept: ["do not watch", "don't watch"],
        normalize: "space",
        feedback: {
          "doesn't watch": "З they використовуємо **don’t**.",
          "do not watches": "Після don’t — V1: **watch**.",
          "*": "Формула: **don’t + V1**."
        }
      },
      {
        id: "pr11",
        type: "mcq",
        prompt: "Present 11) Choose the correct form:",
        options: ["She study English.", "She studies English.", "She studying English."],
        correctIndex: 1,
        explanations: {
          0: "Для she потрібне **-ies**: studies.",
          2: "Це не Present Simple, а Present Continuous."
        }
      },
      {
        id: "pr12",
        type: "fill",
        prompt: "Present 12) ____ he ____ (finish) school at 3 pm?",
        accept: ["does finish"],
        normalize: "space",
        feedback: {
          "do finish": "Для he потрібно **Does**.",
          "does finishes": "Після Does — V1: **finish**.",
          "*": "Питання: **Does + he + V1**."
        }
      },
      {
        id: "pr13",
        type: "fill",
        prompt: "Present 13) My parents ____ (work) in a hospital.",
        accept: ["work"],
        feedback: {
          "works": "Для they/parents — **work**, без -s.",
          "worked": "Це минулий час. У Present Simple: **work**.",
          "*": "Підказка: they + V1."
        }
      },
      {
        id: "pr14",
        type: "mcq",
        prompt: "Present 14) Choose the correct negative:",
        options: ["He not play tennis.", "He doesn’t play tennis.", "He doesn’t plays tennis."],
        correctIndex: 1,
        explanations: {
          0: "Потрібен допоміжний **doesn’t**.",
          2: "Після doesn’t — V1: **play**."
        }
      },
      {
        id: "pr15",
        type: "fill",
        prompt: "Present 15) I ____ (brush) my teeth twice a day.",
        accept: ["brush"],
        feedback: {
          "brushes": "З I не додаємо -es: **brush**.",
          "brushed": "Це минулий час. Тут **brush**.",
          "*": "I + V1."
        }
      },
      {
        id: "pr16",
        type: "fill",
        prompt: "Present 16) She ____ (not / do) her homework on Sundays.",
        accept: ["does not do", "doesn't do"],
        normalize: "space",
        feedback: {
          "do not do": "Для she потрібно **doesn’t**.",
          "doesn't does": "Після doesn’t — V1: **do**.",
          "*": "Формула: **doesn’t + V1**."
        }
      },
      {
        id: "pr17",
        type: "mcq",
        prompt: "Present 17) Choose the correct question:",
        options: ["Does she likes music?", "Does she like music?", "Do she like music?"],
        correctIndex: 1,
        explanations: {
          0: "Після **Does** — V1: like.",
          2: "З she потрібно **Does**."
        }
      },
      {
        id: "pr18",
        type: "fill",
        prompt: "Present 18) The train ____ (leave) at 8:15.",
        accept: ["leaves"],
        feedback: {
          "leave": "Для it/ train додаємо -s: **leaves**.",
          "left": "Це минулий час. Тут **leaves**.",
          "*": "Розклад: Present Simple + -s."
        }
      },
      {
        id: "pr19",
        type: "mcq",
        prompt: "Present 19) Which sentence is correct?",
        options: ["We goes to the gym.", "We go to the gym.", "We going to the gym."],
        correctIndex: 1,
        explanations: {
          0: "Для we не додаємо -s.",
          2: "Це не Present Simple."
        }
      },
      {
        id: "pr20",
        type: "fill",
        prompt: "Present 20) ____ they ____ (cook) dinner every day?",
        accept: ["do cook"],
        normalize: "space",
        feedback: {
          "does cook": "З they використовуємо **Do**.",
          "do cooks": "Після Do — V1: **cook**.",
          "*": "Питання: **Do + they + V1**."
        }
      },
      {
        id: "pr21",
        type: "fill",
        prompt: "Present 21) He ____ (study) at the university.",
        accept: ["studies"],
        feedback: {
          "study": "Для he потрібно **studies**.",
          "studys": "Правильно: **study → studies**.",
          "*": "he + V1 + -s/-ies."
        }
      },
      {
        id: "pr22",
        type: "mcq",
        prompt: "Present 22) Choose the correct sentence:",
        options: ["She never go late.", "She never goes late.", "She never going late."],
        correctIndex: 1,
        explanations: {
          0: "Для she потрібне **goes**.",
          2: "Це не Present Simple."
        }
      },
      {
        id: "pr23",
        type: "fill",
        prompt: "Present 23) I ____ (not / read) magazines.",
        accept: ["do not read", "don't read"],
        normalize: "space",
        feedback: {
          "doesn't read": "З I використовуємо **don’t**.",
          "do not reads": "Після don’t — V1: **read**.",
          "*": "Формула: **don’t + V1**."
        }
      },
      {
        id: "pr24",
        type: "mcq",
        prompt: "Present 24) Choose the correct form:",
        options: ["My dad fixes the car.", "My dad fix the car.", "My dad fixing the car."],
        correctIndex: 0,
        explanations: {
          1: "Для he/she/it додаємо -s.",
          2: "Це не Present Simple."
        }
      },
      {
        id: "pr25",
        type: "fill",
        prompt: "Present 25) The children ____ (play) in the yard.",
        accept: ["play"],
        feedback: {
          "plays": "Для they/children використовуємо **play**.",
          "played": "Це минулий час. Тут **play**.",
          "*": "they + V1."
        }
      },
      {
        id: "pr26",
        type: "fill",
        prompt: "Present 26) ____ your sister ____ (cook) well?",
        accept: ["does cook"],
        normalize: "space",
        feedback: {
          "do cook": "З she/sister потрібно **Does**.",
          "does cooks": "Після Does — V1: **cook**.",
          "*": "Питання: **Does + she + V1**."
        }
      },
      {
        id: "pr27",
        type: "mcq",
        prompt: "Present 27) Choose the correct negative:",
        options: ["They doesn’t eat meat.", "They don’t eat meat.", "They don’t eats meat."],
        correctIndex: 1,
        explanations: {
          0: "Для they використовуємо **don’t**.",
          2: "Після don’t — V1: **eat**."
        }
      },
      {
        id: "pr28",
        type: "fill",
        prompt: "Present 28) My cat ____ (sleep) on the sofa.",
        accept: ["sleeps"],
        feedback: {
          "sleep": "Для it додаємо -s: **sleeps**.",
          "sleepes": "Правильно: **sleep → sleeps**.",
          "*": "he/she/it + V1 + -s."
        }
      },
      {
        id: "pr29",
        type: "mcq",
        prompt: "Present 29) Which question is correct?",
        options: ["Do your friend play?", "Does your friend play?", "Does your friend plays?"],
        correctIndex: 1,
        explanations: {
          0: "Для he/she/it потрібне **Does**.",
          2: "Після Does — V1: **play**."
        }
      },
      {
        id: "pr30",
        type: "fill",
        prompt: "Present 30) We ____ (not / go) to bed late.",
        accept: ["do not go", "don't go"],
        normalize: "space",
        feedback: {
          "doesn't go": "З we використовуємо **don’t**.",
          "do not goes": "Після don’t — V1: **go**.",
          "*": "Формула: **don’t + V1**."
        }
      }
    ],

    past: [
      {
        id: "pa1",
        type: "fill",
        prompt: "Past 1) I ____ (visit) my aunt yesterday.",
        accept: ["visited"],
        feedback: {
          "visit": "Минуле: **visit → visited**.",
          "visitted": "Подвоєння не потрібне: **visited**.",
          "*": "Regular verb + **-ed**."
        }
      },
      {
        id: "pa2",
        type: "fill",
        prompt: "Past 2) She ____ (go) to the shop last night.",
        accept: ["went"],
        feedback: {
          "goed": "Неправильно: **go → went**.",
          "go": "Потрібен Past Simple: **went**.",
          "*": "go — irregular (went)."
        }
      },
      {
        id: "pa3",
        type: "fill",
        prompt: "Past 3) We ____ (not / play) football yesterday.",
        accept: ["did not play", "didn't play"],
        normalize: "space",
        feedback: {
          "didn't played": "Після didn’t — V1: **play**.",
          "did not played": "Після did not — V1: **play**.",
          "*": "Формула: **didn’t + V1**."
        }
      },
      {
        id: "pa4",
        type: "mcq",
        prompt: "Past 4) Choose the correct sentence:",
        options: [
          "He didn’t went home.",
          "He didn’t go home.",
          "He don’t go home."
        ],
        correctIndex: 1,
        explanations: {
          0: "Після **didn’t** — V1: **go**.",
          2: "У Past Simple не використовуємо **don’t**."
        }
      },
      {
        id: "pa5",
        type: "mcq",
        prompt: "Past 5) Which is Past Simple of 'have'?",
        options: ["haved", "had", "has"],
        correctIndex: 1,
        explanations: {
          0: "**have → had** (irregular).",
          2: "**has** — Present Simple, не Past Simple."
        }
      },
      {
        id: "pa6",
        type: "fill",
        prompt: "Past 6) Did they ____ (watch) a movie yesterday?",
        accept: ["watch"],
        feedback: {
          "watched": "Після **Did** — базова форма: **watch**.",
          "*": "Питання: **Did + subject + V1**."
        }
      },
      {
        id: "pa7",
        type: "fill",
        prompt: "Past 7) We ____ (see) our friends two days ago.",
        accept: ["saw"],
        feedback: {
          "seed": "Неправильно. **see → saw**.",
          "see": "Потрібна форма Past Simple: **saw**.",
          "*": "Irregular: see → saw."
        }
      },
      {
        id: "pa8",
        type: "fill",
        prompt: "Past 8) She ____ (cook) dinner last evening.",
        accept: ["cooked"],
        feedback: {
          "cook": "Минуле: **cook → cooked**.",
          "cooking": "Потрібен Past Simple: **cooked**.",
          "*": "Regular verb + -ed."
        }
      },
      {
        id: "pa9",
        type: "mcq",
        prompt: "Past 9) Choose the correct negative:",
        options: ["They didn’t ate pizza.", "They didn’t eat pizza.", "They don’t eat pizza."],
        correctIndex: 1,
        explanations: {
          0: "Після didn’t — V1: **eat**.",
          2: "Це Present Simple, не Past Simple."
        }
      },
      {
        id: "pa10",
        type: "fill",
        prompt: "Past 10) I ____ (buy) a new book yesterday.",
        accept: ["bought"],
        feedback: {
          "buyed": "Неправильно. **buy → bought**.",
          "buy": "Потрібна форма Past Simple: **bought**.",
          "*": "Irregular: buy → bought."
        }
      },
      {
        id: "pa11",
        type: "mcq",
        prompt: "Past 11) Which question is correct?",
        options: ["Did she went home?", "Did she go home?", "Does she go home?"],
        correctIndex: 1,
        explanations: {
          0: "Після Did — V1: go.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa12",
        type: "fill",
        prompt: "Past 12) He ____ (not / finish) his homework.",
        accept: ["did not finish", "didn't finish"],
        normalize: "space",
        feedback: {
          "didn't finished": "Після didn’t — V1: **finish**.",
          "did not finished": "Після did not — V1: **finish**.",
          "*": "Формула: **didn’t + V1**."
        }
      },
      {
        id: "pa13",
        type: "fill",
        prompt: "Past 13) They ____ (take) the bus last week.",
        accept: ["took"],
        feedback: {
          "taked": "Неправильно. **take → took**.",
          "take": "Потрібен Past Simple: **took**.",
          "*": "Irregular: take → took."
        }
      },
      {
        id: "pa14",
        type: "mcq",
        prompt: "Past 14) Choose the correct sentence:",
        options: ["We was happy.", "We were happy.", "We are happy."],
        correctIndex: 1,
        explanations: {
          0: "Для we у минулому — **were**.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa15",
        type: "fill",
        prompt: "Past 15) I ____ (write) a message last night.",
        accept: ["wrote"],
        feedback: {
          "write": "Потрібна форма Past Simple: **wrote**.",
          "writed": "Неправильно. **write → wrote**.",
          "*": "Irregular: write → wrote."
        }
      },
      {
        id: "pa16",
        type: "fill",
        prompt: "Past 16) ____ you ____ (see) him yesterday?",
        accept: ["did see"],
        normalize: "space",
        feedback: {
          "did saw": "Після Did — V1: **see**.",
          "do see": "Потрібно **Did** у Past Simple.",
          "*": "Питання: **Did + subject + V1?**"
        }
      },
      {
        id: "pa17",
        type: "mcq",
        prompt: "Past 17) Choose the correct negative:",
        options: ["She didn’t come.", "She didn’t came.", "She doesn’t come."],
        correctIndex: 0,
        explanations: {
          1: "Після didn’t — V1: **come**.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa18",
        type: "fill",
        prompt: "Past 18) They ____ (drink) tea in the morning.",
        accept: ["drank"],
        feedback: {
          "drink": "Потрібна форма Past Simple: **drank**.",
          "drinked": "Неправильно. **drink → drank**.",
          "*": "Irregular: drink → drank."
        }
      },
      {
        id: "pa19",
        type: "mcq",
        prompt: "Past 19) Which is correct?",
        options: ["He goed to the park.", "He went to the park.", "He goes to the park."],
        correctIndex: 1,
        explanations: {
          0: "Неправильно: go → went.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa20",
        type: "fill",
        prompt: "Past 20) My friends ____ (arrive) early.",
        accept: ["arrived"],
        feedback: {
          "arrive": "Минуле: **arrive → arrived**.",
          "arriveded": "Подвоєння не потрібне: **arrived**.",
          "*": "Regular verb + -ed."
        }
      },
      {
        id: "pa21",
        type: "fill",
        prompt: "Past 21) We ____ (not / be) at home last night.",
        accept: ["were not", "weren't"],
        normalize: "space",
        feedback: {
          "was not": "Для we у минулому — **were**.",
          "didn't be": "Для be використовуємо **was/were**, не did.",
          "*": "Підказка: we + **were** (Past Simple of be)."
        }
      },
      {
        id: "pa22",
        type: "mcq",
        prompt: "Past 22) Choose the correct question:",
        options: ["Did they saw it?", "Did they see it?", "Do they see it?"],
        correctIndex: 1,
        explanations: {
          0: "Після Did — V1: see.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa23",
        type: "fill",
        prompt: "Past 23) I ____ (lose) my keys last week.",
        accept: ["lost"],
        feedback: {
          "losed": "Неправильно. **lose → lost**.",
          "lose": "Потрібна форма Past Simple: **lost**.",
          "*": "Irregular: lose → lost."
        }
      },
      {
        id: "pa24",
        type: "mcq",
        prompt: "Past 24) Choose the correct sentence:",
        options: ["She didn’t did her homework.", "She didn’t do her homework.", "She don’t do her homework."],
        correctIndex: 1,
        explanations: {
          0: "Після didn’t — V1: **do**.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa25",
        type: "fill",
        prompt: "Past 25) He ____ (sleep) on the bus.",
        accept: ["slept"],
        feedback: {
          "sleeped": "Неправильно. **sleep → slept**.",
          "sleep": "Потрібна форма Past Simple: **slept**.",
          "*": "Irregular: sleep → slept."
        }
      },
      {
        id: "pa26",
        type: "fill",
        prompt: "Past 26) ____ she ____ (call) you yesterday?",
        accept: ["did call"],
        normalize: "space",
        feedback: {
          "did called": "Після Did — V1: **call**.",
          "does call": "Потрібно **Did** у минулому.",
          "*": "Питання: **Did + she + V1?**"
        }
      },
      {
        id: "pa27",
        type: "mcq",
        prompt: "Past 27) Choose the correct negative:",
        options: ["They weren’t late.", "They wasn’t late.", "They aren’t late."],
        correctIndex: 0,
        explanations: {
          1: "Для they у минулому — **weren’t**.",
          2: "Це Present Simple."
        }
      },
      {
        id: "pa28",
        type: "fill",
        prompt: "Past 28) We ____ (meet) our teacher last Monday.",
        accept: ["met"],
        feedback: {
          "meet": "Потрібна форма Past Simple: **met**.",
          "meeted": "Неправильно. **meet → met**.",
          "*": "Irregular: meet → met."
        }
      },
      {
        id: "pa29",
        type: "mcq",
        prompt: "Past 29) Which sentence is correct?",
        options: ["I was tired yesterday.", "I were tired вчера.", "I am tired yesterday."],
        correctIndex: 0,
        explanations: {
          1: "З I у минулому — **was**.",
          2: "Present + yesterday не працює."
        }
      },
      {
        id: "pa30",
        type: "fill",
        prompt: "Past 30) They ____ (not / buy) tickets.",
        accept: ["did not buy", "didn't buy"],
        normalize: "space",
        feedback: {
          "didn't bought": "Після didn’t — V1: **buy**.",
          "did not bought": "Після did not — V1: **buy**.",
          "*": "Формула: **didn’t + V1**."
        }
      }
    ],

    future: [
      {
        id: "fu1",
        type: "fill",
        prompt: "Future 1) I ____ (call) you tomorrow.",
        accept: ["will call"],
        normalize: "space",
        feedback: {
          "call": "У Future Simple потрібно **will call**.",
          "will called": "Після will — V1: **call**.",
          "*": "Формула: **will + V1**."
        }
      },
      {
        id: "fu2",
        type: "fill",
        prompt: "Future 2) She ____ (not / be) late.",
        accept: ["will not be", "won't be"],
        normalize: "space",
        feedback: {
          "is not be": "Для майбутнього потрібне **will**.",
          "will not are": "Після will — **be** для всіх осіб.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu3",
        type: "mcq",
        prompt: "Future 3) Choose the correct sentence:",
        options: ["He will go soon.", "He will goes soon.", "He goes soon."] ,
        correctIndex: 0,
        explanations: {
          1: "Після will — V1: **go**.",
          2: "Це Present Simple, не Future Simple."
        }
      },
      {
        id: "fu4",
        type: "fill",
        prompt: "Future 4) ____ you ____ (help) me later?",
        accept: ["will help"],
        normalize: "space",
        feedback: {
          "do help": "Для майбутнього питання потрібне **Will**.",
          "will helps": "Після will — V1: **help**.",
          "*": "Питання: **Will + subject + V1?**"
        }
      },
      {
        id: "fu5",
        type: "fill",
        prompt: "Future 5) We ____ (not / travel) next week.",
        accept: ["will not travel", "won't travel"],
        normalize: "space",
        feedback: {
          "do not travel": "Це Present Simple. У майбутньому потрібне **will**.",
          "won't travels": "Після won’t — V1: **travel**.",
          "*": "Формула: **won’t + V1**."
        }
      },
      {
        id: "fu6",
        type: "mcq",
        prompt: "Future 6) Choose the correct question:",
        options: ["Will she come?", "Does she come?", "Will she comes?"],
        correctIndex: 0,
        explanations: {
          1: "Це Present Simple, не Future Simple.",
          2: "Після will — V1: **come**."
        }
      },
      {
        id: "fu7",
        type: "fill",
        prompt: "Future 7) They ____ (be) at the party tomorrow.",
        accept: ["will be"],
        normalize: "space",
        feedback: {
          "are": "Це теперішній час. У майбутньому: **will be**.",
          "will are": "Після will — **be**.",
          "*": "will + be для всіх осіб."
        }
      },
      {
        id: "fu8",
        type: "fill",
        prompt: "Future 8) I ____ (not / forget) your birthday.",
        accept: ["will not forget", "won't forget"],
        normalize: "space",
        feedback: {
          "don't forget": "Це Present Simple. Потрібне **won’t**.",
          "won't forgets": "Після won’t — V1: **forget**.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu9",
        type: "mcq",
        prompt: "Future 9) Choose the correct sentence:",
        options: ["We will meet at 6.", "We will meets at 6.", "We meet at 6 tomorrow."],
        correctIndex: 0,
        explanations: {
          1: "Після will — V1: **meet**.",
          2: "Це Present Simple, не Future Simple."
        }
      },
      {
        id: "fu10",
        type: "fill",
        prompt: "Future 10) ____ he ____ (buy) a new phone next month?",
        accept: ["will buy"],
        normalize: "space",
        feedback: {
          "does buy": "Потрібне **Will** у питанні.",
          "will buys": "Після will — V1: **buy**.",
          "*": "Питання: **Will + he + V1?**"
        }
      },
      {
        id: "fu11",
        type: "fill",
        prompt: "Future 11) She ____ (study) tonight. (plan)",
        accept: ["is going to study"],
        normalize: "space",
        feedback: {
          "will study": "Можна, але тут підказка (plan) → **be going to**.",
          "is going study": "Потрібно **going to + V1**.",
          "*": "Для планів: **am/is/are going to + V1**."
        }
      },
      {
        id: "fu12",
        type: "mcq",
        prompt: "Future 12) Choose the correct negative:",
        options: ["I won’t be there.", "I don’t be there.", "I won’t am there."],
        correctIndex: 0,
        explanations: {
          1: "Це Present Simple. Потрібне **won’t**.",
          2: "Після won’t — **be**."
        }
      },
      {
        id: "fu13",
        type: "fill",
        prompt: "Future 13) We ____ (visit) our grandparents soon.",
        accept: ["will visit"],
        normalize: "space",
        feedback: {
          "visit": "Потрібне **will visit** для майбутнього.",
          "will visited": "Після will — V1: **visit**.",
          "*": "will + V1."
        }
      },
      {
        id: "fu14",
        type: "fill",
        prompt: "Future 14) They ____ (not / eat) fast food next week.",
        accept: ["will not eat", "won't eat"],
        normalize: "space",
        feedback: {
          "don't eat": "Це Present Simple. Потрібне **won’t**.",
          "won't eats": "Після won’t — V1: **eat**.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu15",
        type: "mcq",
        prompt: "Future 15) Which question is correct?",
        options: ["Will they go?", "Do they will go?", "Will they goes?"],
        correctIndex: 0,
        explanations: {
          1: "Допоміжне **Will** стоїть на початку питання.",
          2: "Після will — V1: go."
        }
      },
      {
        id: "fu16",
        type: "fill",
        prompt: "Future 16) I ____ (not / be) hungry later.",
        accept: ["will not be", "won't be"],
        normalize: "space",
        feedback: {
          "am not be": "Потрібне **will** для майбутнього.",
          "won't am": "Після won’t — **be**.",
          "*": "Формула: **won’t + be**."
        }
      },
      {
        id: "fu17",
        type: "fill",
        prompt: "Future 17) He ____ (start) a new job in June.",
        accept: ["will start"],
        normalize: "space",
        feedback: {
          "starts": "Це Present Simple. Потрібне **will start**.",
          "will started": "Після will — V1: **start**.",
          "*": "will + V1."
        }
      },
      {
        id: "fu18",
        type: "mcq",
        prompt: "Future 18) Choose the correct form:",
        options: ["She is going to travel.", "She going to travel.", "She is going travel."],
        correctIndex: 0,
        explanations: {
          1: "Потрібне **is** перед going to.",
          2: "Потрібне **going to + V1**."
        }
      },
      {
        id: "fu19",
        type: "fill",
        prompt: "Future 19) ____ they ____ (meet) us at 5?",
        accept: ["will meet"],
        normalize: "space",
        feedback: {
          "do meet": "Для майбутнього потрібне **Will**.",
          "will meets": "Після will — V1: **meet**.",
          "*": "Питання: **Will + they + V1?**"
        }
      },
      {
        id: "fu20",
        type: "fill",
        prompt: "Future 20) I ____ (not / work) on Sunday.",
        accept: ["will not work", "won't work"],
        normalize: "space",
        feedback: {
          "don't work": "Це Present Simple. Потрібне **won’t**.",
          "won't works": "Після won’t — V1: **work**.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu21",
        type: "mcq",
        prompt: "Future 21) Choose the correct sentence:",
        options: ["It will rain tomorrow.", "It will rains tomorrow.", "It raining tomorrow."],
        correctIndex: 0,
        explanations: {
          1: "Після will — V1: **rain**.",
          2: "Це не Future Simple."
        }
      },
      {
        id: "fu22",
        type: "fill",
        prompt: "Future 22) She ____ (not / forget) the keys.",
        accept: ["will not forget", "won't forget"],
        normalize: "space",
        feedback: {
          "doesn't forget": "Це Present Simple. Потрібне **won’t**.",
          "won't forgets": "Після won’t — V1: **forget**.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu23",
        type: "mcq",
        prompt: "Future 23) Which sentence is correct?",
        options: ["We are going to watch a movie.", "We going to watch a movie.", "We are go to watch a movie."],
        correctIndex: 0,
        explanations: {
          1: "Потрібне **are** перед going to.",
          2: "Потрібне **going to + V1**."
        }
      },
      {
        id: "fu24",
        type: "fill",
        prompt: "Future 24) I ____ (bring) my laptop later.",
        accept: ["will bring"],
        normalize: "space",
        feedback: {
          "bring": "Потрібне **will bring**.",
          "will brought": "Після will — V1: **bring**.",
          "*": "will + V1."
        }
      },
      {
        id: "fu25",
        type: "fill",
        prompt: "Future 25) He ____ (not / call) you tonight.",
        accept: ["will not call", "won't call"],
        normalize: "space",
        feedback: {
          "doesn't call": "Це Present Simple. Потрібне **won’t**.",
          "won't calls": "Після won’t — V1: **call**.",
          "*": "Заперечення: **won’t + V1**."
        }
      },
      {
        id: "fu26",
        type: "mcq",
        prompt: "Future 26) Choose the correct question:",
        options: ["Will you help me?", "Do you will help me?", "Will you helps me?"],
        correctIndex: 0,
        explanations: {
          1: "Допоміжне **Will** ставимо на початок.",
          2: "Після will — V1: **help**."
        }
      },
      {
        id: "fu27",
        type: "fill",
        prompt: "Future 27) We ____ (go) to the park on Saturday.",
        accept: ["are going to go"],
        normalize: "space",
        feedback: {
          "will go": "Можливо, але тут підказка про план → **be going to**.",
          "are going go": "Потрібно **going to + V1**.",
          "*": "Плани: **am/is/are going to + V1**."
        }
      },
      {
        id: "fu28",
        type: "fill",
        prompt: "Future 28) ____ it ____ (snow) next week?",
        accept: ["will snow"],
        normalize: "space",
        feedback: {
          "does snow": "Для майбутнього потрібне **Will**.",
          "will snows": "Після will — V1: **snow**.",
          "*": "Питання: **Will + it + V1?**"
        }
      },
      {
        id: "fu29",
        type: "mcq",
        prompt: "Future 29) Choose the correct negative:",
        options: ["They won’t arrive late.", "They don’t arrive late.", "They won’t arrives late."],
        correctIndex: 0,
        explanations: {
          1: "Це Present Simple. Потрібне **won’t**.",
          2: "Після won’t — V1: **arrive**."
        }
      },
      {
        id: "fu30",
        type: "fill",
        prompt: "Future 30) She ____ (not / be) at home tonight.",
        accept: ["will not be", "won't be"],
        normalize: "space",
        feedback: {
          "is not be": "Потрібне **will** для майбутнього.",
          "won't is": "Після won’t — **be**.",
          "*": "Заперечення: **won’t + be**."
        }
      }
    ]
  }
};
