(function () {
  const tenses = {
    presentSimple: {
      label: "Present Simple",
      signal: "every day / usually",
      formula: {
        affirmative: "S + V1(s/es)",
        negative: "S + do/does not + V1",
        question: "Do/Does + S + V1?"
      },
      markers: ["always", "usually", "often", "every day"],
      examples: [
        { en: "She studies online every evening.", uk: "Вона навчається онлайн щовечора." },
        { en: "Do they work on Saturdays?", uk: "Вони працюють у суботу?" }
      ]
    },
    presentContinuous: {
      label: "Present Continuous",
      signal: "now / at the moment",
      formula: {
        affirmative: "S + am/is/are + V-ing",
        negative: "S + am/is/are not + V-ing",
        question: "Am/Is/Are + S + V-ing?"
      },
      markers: ["now", "right now", "at the moment", "currently"],
      examples: [
        { en: "I am reading a message now.", uk: "Я зараз читаю повідомлення." },
        { en: "Is he waiting outside?", uk: "Він чекає надворі?" }
      ]
    },
    presentPerfect: {
      label: "Present Perfect",
      signal: "experience / result up to now",
      formula: {
        affirmative: "S + have/has + V3",
        negative: "S + have/has not + V3",
        question: "Have/Has + S + V3?"
      },
      markers: ["already", "yet", "just", "ever", "never", "since", "for"],
      examples: [
        { en: "We have finished the project.", uk: "Ми завершили проєкт." },
        { en: "Has she ever visited London?", uk: "Вона коли-небудь була в Лондоні?" }
      ]
    },
    presentPerfectContinuous: {
      label: "Present Perfect Continuous",
      signal: "activity from past until now",
      formula: {
        affirmative: "S + have/has been + V-ing",
        negative: "S + have/has not been + V-ing",
        question: "Have/Has + S + been + V-ing?"
      },
      markers: ["for", "since", "all day", "recently"],
      examples: [
        { en: "They have been practicing for two hours.", uk: "Вони тренуються вже дві години." },
        { en: "How long has he been studying here?", uk: "Як довго він тут навчається?" }
      ]
    },
    pastSimple: {
      label: "Past Simple",
      signal: "finished time in the past",
      formula: {
        affirmative: "S + V2",
        negative: "S + did not + V1",
        question: "Did + S + V1?"
      },
      markers: ["yesterday", "last week", "in 2020", "ago"],
      examples: [
        { en: "I watched a film yesterday.", uk: "Я дивився фільм учора." },
        { en: "Did you call your friend?", uk: "Ти телефонував другові?" }
      ]
    },
    pastContinuous: {
      label: "Past Continuous",
      signal: "action in progress at a past moment",
      formula: {
        affirmative: "S + was/were + V-ing",
        negative: "S + was/were not + V-ing",
        question: "Was/Were + S + V-ing?"
      },
      markers: ["at 7 pm", "while", "when"],
      examples: [
        { en: "She was cooking when I arrived.", uk: "Вона готувала, коли я прийшов." },
        { en: "Were they sleeping at midnight?", uk: "Вони спали опівночі?" }
      ]
    },
    pastPerfect: {
      label: "Past Perfect",
      signal: "earlier past action",
      formula: {
        affirmative: "S + had + V3",
        negative: "S + had not + V3",
        question: "Had + S + V3?"
      },
      markers: ["before", "by the time", "already"],
      examples: [
        { en: "They had left before noon.", uk: "Вони пішли до полудня." },
        { en: "Had he finished before the meeting?", uk: "Він закінчив до зустрічі?" }
      ]
    },
    pastPerfectContinuous: {
      label: "Past Perfect Continuous",
      signal: "duration before another past action",
      formula: {
        affirmative: "S + had been + V-ing",
        negative: "S + had not been + V-ing",
        question: "Had + S + been + V-ing?"
      },
      markers: ["for", "since", "before"],
      examples: [
        { en: "I had been working for hours before dinner.", uk: "Я працював годинами до вечері." },
        { en: "Had she been waiting long?", uk: "Вона довго чекала?" }
      ]
    },
    futureSimple: {
      label: "Future Simple",
      signal: "decision, prediction, promise",
      formula: {
        affirmative: "S + will + V1",
        negative: "S + will not + V1",
        question: "Will + S + V1?"
      },
      markers: ["tomorrow", "next week", "soon"],
      examples: [
        { en: "I will help you tomorrow.", uk: "Я допоможу тобі завтра." },
        { en: "Will they join us later?", uk: "Вони приєднаються пізніше?" }
      ]
    },
    futureContinuous: {
      label: "Future Continuous",
      signal: "action in progress at a future moment",
      formula: {
        affirmative: "S + will be + V-ing",
        negative: "S + will not be + V-ing",
        question: "Will + S + be + V-ing?"
      },
      markers: ["this time tomorrow", "at 8 pm tomorrow"],
      examples: [
        { en: "She will be traveling this time tomorrow.", uk: "Вона буде подорожувати завтра в цей час." },
        { en: "Will you be working at 9?", uk: "Ти будеш працювати о 9?" }
      ]
    },
    futurePerfect: {
      label: "Future Perfect",
      signal: "completed before a future point",
      formula: {
        affirmative: "S + will have + V3",
        negative: "S + will not have + V3",
        question: "Will + S + have + V3?"
      },
      markers: ["by", "by the time", "before"],
      examples: [
        { en: "We will have finished by Friday.", uk: "Ми завершимо до п’ятниці." },
        { en: "Will he have arrived by noon?", uk: "Він прибуде до полудня?" }
      ]
    },
    futurePerfectContinuous: {
      label: "Future Perfect Continuous",
      signal: "duration up to a future point",
      formula: {
        affirmative: "S + will have been + V-ing",
        negative: "S + will not have been + V-ing",
        question: "Will + S + have been + V-ing?"
      },
      markers: ["for", "by next month", "by 2030"],
      examples: [
        { en: "By June, I will have been teaching for ten years.", uk: "До червня я викладатиму вже десять років." },
        { en: "Will they have been living here for long?", uk: "Вони довго житимуть тут на той момент?" }
      ]
    }
  };

  const verbBank = [
    ["work", "worked", "worked", "working"], ["study", "studied", "studied", "studying"], ["play", "played", "played", "playing"],
    ["watch", "watched", "watched", "watching"], ["clean", "cleaned", "cleaned", "cleaning"], ["visit", "visited", "visited", "visiting"],
    ["travel", "traveled", "traveled", "traveling"], ["finish", "finished", "finished", "finishing"], ["call", "called", "called", "calling"],
    ["build", "built", "built", "building"], ["write", "wrote", "written", "writing"], ["take", "took", "taken", "taking"]
  ];

  const subjects = [
    ["I", "do", "am", "have", "was"], ["You", "do", "are", "have", "were"], ["We", "do", "are", "have", "were"], ["They", "do", "are", "have", "were"],
    ["He", "does", "is", "has", "was"], ["She", "does", "is", "has", "was"], ["It", "does", "is", "has", "was"]
  ];

  const thirdPerson = (v) => (v.endsWith("y") ? `${v.slice(0, -1)}ies` : (/(s|sh|ch|x|z|o)$/.test(v) ? `${v}es` : `${v}s`));

  function createTenseTasks(key, idxStart) {
    const items = [];
    for (let i = 0; i < 30; i++) {
      const [base, v2, v3, ving] = verbBank[i % verbBank.length];
      const [subj, doAux, beAux, haveAux, wasAux] = subjects[i % subjects.length];
      const id = `${key}-${idxStart + i + 1}`;
      const isMcq = i % 3 === 2;

      const forms = {
        presentSimple: { target: subj === "He" || subj === "She" || subj === "It" ? thirdPerson(base) : base, wrong1: v2, wrong2: `${base}ing` },
        presentContinuous: { target: `${beAux} ${ving}`, wrong1: `${haveAux} ${v3}`, wrong2: `${doAux} ${base}` },
        presentPerfect: { target: `${haveAux} ${v3}`, wrong1: `${beAux} ${ving}`, wrong2: `${doAux} ${base}` },
        presentPerfectContinuous: { target: `${haveAux} been ${ving}`, wrong1: `${haveAux} ${v3}`, wrong2: `${beAux} ${ving}` },
        pastSimple: { target: v2, wrong1: `${wasAux} ${ving}`, wrong2: base },
        pastContinuous: { target: `${wasAux} ${ving}`, wrong1: v2, wrong2: `had ${v3}` },
        pastPerfect: { target: `had ${v3}`, wrong1: v2, wrong2: `${wasAux} ${ving}` },
        pastPerfectContinuous: { target: `had been ${ving}`, wrong1: `had ${v3}`, wrong2: `${wasAux} ${ving}` },
        futureSimple: { target: `will ${base}`, wrong1: `will be ${ving}`, wrong2: `will have ${v3}` },
        futureContinuous: { target: `will be ${ving}`, wrong1: `will ${base}`, wrong2: `will have been ${ving}` },
        futurePerfect: { target: `will have ${v3}`, wrong1: `will be ${ving}`, wrong2: `will ${base}` },
        futurePerfectContinuous: { target: `will have been ${ving}`, wrong1: `will have ${v3}`, wrong2: `will be ${ving}` }
      }[key];

      if (isMcq) {
        items.push({
          id,
          type: "mcq",
          prompt: `${i + 1}) Choose the correct form: ${subj} ____ ${i % 2 === 0 ? "by the deadline" : "in context"}.`,
          options: [forms.wrong1, forms.target, forms.wrong2],
          correctIndex: 1,
          explanations: { 0: "Check the tense form carefully.", 2: "This option uses a different tense." }
        });
      } else {
        items.push({
          id,
          type: "fill",
          prompt: `${i + 1}) ${subj} ____ (${base}) ${i % 2 === 0 ? "in this situation" : "as shown by the time marker"}.`,
          accept: [forms.target],
          feedback: { "*": "Check the formula for this tense and try again." }
        });
      }
    }
    return items;
  }

  const taskSets = {};
  Object.keys(tenses).forEach((k, index) => {
    taskSets[k] = createTenseTasks(k, index * 100);
  });

  const testQuestions = [
    ...Array.from({ length: 30 }, (_, i) => {
      const level = i < 8 ? "A1" : i < 16 ? "A2" : i < 24 ? "B1" : "B2";
      if (i % 3 === 0) {
        return { id: `t-${i + 1}`, level, type: "mcq", question: `${i + 1}. ${level}: Choose the correct sentence.`, options: ["She go to work every day.", "She goes to work every day.", "She going to work every day."], answer: 1 };
      }
      if (i % 3 === 1) {
        return { id: `t-${i + 1}`, level, type: "fill", question: `${i + 1}. ${level}: Fill in one word: "They ____ already finished the task."`, answerText: "have" };
      }
      return { id: `t-${i + 1}`, level, type: "fill", question: `${i + 1}. ${level}: Use the correct form: "By 2030, I will have ____ (work) here for ten years."`, answerText: "been working" };
    })
  ];

  const irregularVerbs = [
    ["be", "was/were", "been", "бути"],["become","became","become","ставати"],["begin","began","begun","починати"],["break","broke","broken","ламати"],
    ["bring","brought","brought","приносити"],["build","built","built","будувати"],["buy","bought","bought","купувати"],["catch","caught","caught","ловити"],
    ["choose","chose","chosen","обирати"],["come","came","come","приходити"],["cost","cost","cost","коштувати"],["cut","cut","cut","різати"],
    ["do","did","done","робити"],["draw","drew","drawn","малювати"],["drink","drank","drunk","пити"],["drive","drove","driven","керувати"],
    ["eat","ate","eaten","їсти"],["fall","fell","fallen","падати"],["feel","felt","felt","відчувати"],["find","found","found","знаходити"],
    ["fly","flew","flown","літати"],["forget","forgot","forgotten","забувати"],["get","got","got/gotten","отримувати"],["give","gave","given","давати"],
    ["go","went","gone","йти"],["grow","grew","grown","рости"],["have","had","had","мати"],["hear","heard","heard","чути"],
    ["keep","kept","kept","тримати"],["know","knew","known","знати"],["leave","left","left","залишати"],["lend","lent","lent","позичати"],
    ["lose","lost","lost","втрачати"],["make","made","made","робити"],["meet","met","met","зустрічати"],["pay","paid","paid","платити"],
    ["put","put","put","класти"],["read","read","read","читати"],["ride","rode","ridden","їхати верхи"],["ring","rang","rung","дзвонити"],
    ["run","ran","run","бігти"],["say","said","said","казати"],["see","saw","seen","бачити"],["sell","sold","sold","продавати"],
    ["send","sent","sent","надсилати"],["sit","sat","sat","сидіти"],["sleep","slept","slept","спати"],["speak","spoke","spoken","говорити"],
    ["spend","spent","spent","витрачати"],["stand","stood","stood","стояти"],["swim","swam","swum","плавати"],["take","took","taken","брати"],
    ["teach","taught","taught","навчати"],["tell","told","told","розповідати"],["think","thought","thought","думати"],["understand","understood","understood","розуміти"],
    ["wear","wore","worn","носити"],["win","won","won","перемагати"],["write","wrote","written","писати"]
  ];

  const vocabTopics = {
    A1: ["Family", "Home", "Food", "School", "Jobs", "Daily life", "Time", "Weather", "Clothes", "Transport"],
    A2: ["Travel", "Health", "Shopping", "Technology", "Nature", "Sports", "Culture", "City life", "Communication", "Plans"],
    B1: ["Workplace", "Education", "Media", "Environment", "Relationships", "Crime", "Economy", "Science", "Psychology", "Global issues"]
  };

  const vocabulary = {};
  Object.entries(vocabTopics).forEach(([level, topics]) => {
    vocabulary[level] = {};
    topics.forEach((topic) => {
      vocabulary[level][topic] = Array.from({ length: 100 }, (_, i) => ({
        en: `${topic.toLowerCase()} word ${i + 1}`,
        uk: `переклад ${topic.toLowerCase()} ${i + 1}`
      }));
    });
  });

  window.HW = {
    title: "English Tenses Homework",
    subtitle: "Practice all 12 tenses on one mobile-friendly page.",
    version: "2026-02-22",
    tenses,
    taskSets,
    testQuestions,
    irregularVerbs,
    vocabulary
  };
})();
