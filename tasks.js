(function () {
  const tenses = {
    presentSimple: {
      label: "Present Simple",
      use: { uk: "Регулярні дії, звички та факти.", pl: "Czynności regularne, nawyki i fakty." },
      formula: { affirmative: "S + V1(s/es)", negative: "S + do/does not + V1", question: "Do/Does + S + V1?" },
      markers: ["always", "usually", "often", "every day"],
      examples: [
        { en: "She studies online every evening.", uk: "Вона навчається онлайн щовечора.", pl: "Ona uczy się online każdego wieczoru." },
        { en: "Do they work on Saturdays?", uk: "Вони працюють у суботу?", pl: "Czy oni pracują w soboty?" }
      ]
    },
    presentContinuous: {
      label: "Present Continuous",
      use: { uk: "Дія відбувається зараз або тимчасово.", pl: "Czynność dzieje się teraz albo tymczasowo." },
      formula: { affirmative: "S + am/is/are + V-ing", negative: "S + am/is/are not + V-ing", question: "Am/Is/Are + S + V-ing?" },
      markers: ["now", "right now", "at the moment", "currently"],
      examples: [
        { en: "I am reading a message now.", uk: "Я зараз читаю повідомлення.", pl: "Teraz czytam wiadomość." },
        { en: "Is he waiting outside?", uk: "Він чекає надворі?", pl: "Czy on czeka na zewnątrz?" }
      ]
    },
    presentPerfect: {
      label: "Present Perfect",
      use: { uk: "Результат або досвід до теперішнього моменту.", pl: "Rezultat albo doświadczenie do chwili obecnej." },
      formula: { affirmative: "S + have/has + V3", negative: "S + have/has not + V3", question: "Have/Has + S + V3?" },
      markers: ["already", "yet", "just", "ever", "never", "since", "for"],
      examples: [
        { en: "We have finished the project.", uk: "Ми завершили проєкт.", pl: "Skończyliśmy projekt." },
        { en: "Has she ever visited London?", uk: "Вона коли-небудь була в Лондоні?", pl: "Czy ona kiedykolwiek była w Londynie?" }
      ]
    },
    presentPerfectContinuous: {
      label: "Present Perfect Continuous",
      use: { uk: "Тривалість дії від минулого до тепер.", pl: "Czas trwania czynności od przeszłości do teraz." },
      formula: { affirmative: "S + have/has been + V-ing", negative: "S + have/has not been + V-ing", question: "Have/Has + S + been + V-ing?" },
      markers: ["for", "since", "all day", "recently"],
      examples: [
        { en: "They have been practicing for two hours.", uk: "Вони тренуються вже дві години.", pl: "Ćwiczą już od dwóch godzin." },
        { en: "How long has he been studying here?", uk: "Як довго він тут навчається?", pl: "Jak długo on się tu uczy?" }
      ]
    },
    pastSimple: {
      label: "Past Simple",
      use: { uk: "Завершена дія в конкретний момент у минулому.", pl: "Zakończona czynność w określonym momencie przeszłości." },
      formula: { affirmative: "S + V2", negative: "S + did not + V1", question: "Did + S + V1?" },
      markers: ["yesterday", "last week", "in 2020", "ago"],
      examples: [
        { en: "I watched a film yesterday.", uk: "Я дивився фільм учора.", pl: "Wczoraj oglądałem film." },
        { en: "Did you call your friend?", uk: "Ти телефонував другові?", pl: "Czy dzwoniłeś do przyjaciela?" }
      ]
    },
    pastContinuous: {
      label: "Past Continuous",
      use: { uk: "Дія тривала в певний момент минулого.", pl: "Czynność trwała w danym momencie przeszłości." },
      formula: { affirmative: "S + was/were + V-ing", negative: "S + was/were not + V-ing", question: "Was/Were + S + V-ing?" },
      markers: ["at 7 pm", "while", "when"],
      examples: [
        { en: "She was cooking when I arrived.", uk: "Вона готувала, коли я прийшов.", pl: "Gotowała, kiedy przyszedłem." },
        { en: "Were they sleeping at midnight?", uk: "Вони спали опівночі?", pl: "Czy oni spali o północy?" }
      ]
    },
    pastPerfect: {
      label: "Past Perfect",
      use: { uk: "Дія відбулася раніше за іншу минулу дію.", pl: "Czynność wydarzyła się wcześniej niż inna przeszła czynność." },
      formula: { affirmative: "S + had + V3", negative: "S + had not + V3", question: "Had + S + V3?" },
      markers: ["before", "by the time", "already"],
      examples: [
        { en: "They had left before noon.", uk: "Вони пішли до полудня.", pl: "Wyszli przed południem." },
        { en: "Had he finished before the meeting?", uk: "Він закінчив до зустрічі?", pl: "Czy skończył przed spotkaniem?" }
      ]
    },
    pastPerfectContinuous: {
      label: "Past Perfect Continuous",
      use: { uk: "Тривалість дії до іншого моменту в минулому.", pl: "Czas trwania czynności do innego momentu w przeszłości." },
      formula: { affirmative: "S + had been + V-ing", negative: "S + had not been + V-ing", question: "Had + S + been + V-ing?" },
      markers: ["for", "since", "before"],
      examples: [
        { en: "I had been working for hours before dinner.", uk: "Я працював годинами до вечері.", pl: "Pracowałem godzinami przed kolacją." },
        { en: "Had she been waiting long?", uk: "Вона довго чекала?", pl: "Czy długo czekała?" }
      ]
    },
    futureSimple: {
      label: "Future Simple",
      use: { uk: "Рішення, обіцянки та прогнози щодо майбутнього.", pl: "Decyzje, obietnice i przewidywania dotyczące przyszłości." },
      formula: { affirmative: "S + will + V1", negative: "S + will not + V1", question: "Will + S + V1?" },
      markers: ["tomorrow", "next week", "soon"],
      examples: [
        { en: "I will help you tomorrow.", uk: "Я допоможу тобі завтра.", pl: "Pomogę ci jutro." },
        { en: "Will they join us later?", uk: "Вони приєднаються пізніше?", pl: "Czy dołączą do nas później?" }
      ]
    },
    futureContinuous: {
      label: "Future Continuous",
      use: { uk: "Дія буде тривати в певний момент майбутнього.", pl: "Czynność będzie trwać w określonym momencie przyszłości." },
      formula: { affirmative: "S + will be + V-ing", negative: "S + will not be + V-ing", question: "Will + S + be + V-ing?" },
      markers: ["this time tomorrow", "at 8 pm tomorrow"],
      examples: [
        { en: "She will be traveling this time tomorrow.", uk: "Вона буде подорожувати завтра в цей час.", pl: "Jutro o tej porze będzie podróżować." },
        { en: "Will you be working at 9?", uk: "Ти будеш працювати о 9?", pl: "Czy będziesz pracować o 9?" }
      ]
    },
    futurePerfect: {
      label: "Future Perfect",
      use: { uk: "Дія завершиться до певного моменту в майбутньому.", pl: "Czynność zakończy się przed określonym momentem w przyszłości." },
      formula: { affirmative: "S + will have + V3", negative: "S + will not have + V3", question: "Will + S + have + V3?" },
      markers: ["by", "by the time", "before"],
      examples: [
        { en: "By May, we will have moved.", uk: "До травня ми переїдемо.", pl: "Do maja przeprowadzimy się." },
        { en: "Will she have finished by noon?", uk: "Вона завершить до полудня?", pl: "Czy skończy do południa?" }
      ]
    },
    futurePerfectContinuous: {
      label: "Future Perfect Continuous",
      use: { uk: "Тривалість дії до майбутнього моменту.", pl: "Czas trwania czynności do przyszłego momentu." },
      formula: { affirmative: "S + will have been + V-ing", negative: "S + will not have been + V-ing", question: "Will + S + have been + V-ing?" },
      markers: ["for", "by", "by the time"],
      examples: [
        { en: "Next June, I will have been teaching here for ten years.", uk: "Наступного червня буде десять років, як я тут викладаю.", pl: "W przyszłym czerwcu minie dziesięć lat, odkąd tu uczę." },
        { en: "Will they have been waiting for an hour by then?", uk: "До того часу вони чекатимуть уже годину?", pl: "Czy do tego czasu będą czekać już godzinę?" }
      ]
    }
  };

  const verbBank = [
    ["write", "wrote", "written", "writing"], ["build", "built", "built", "building"], ["drive", "drove", "driven", "driving"],
    ["design", "designed", "designed", "designing"], ["repair", "repaired", "repaired", "repairing"], ["cook", "cooked", "cooked", "cooking"],
    ["plan", "planned", "planned", "planning"], ["review", "reviewed", "reviewed", "reviewing"], ["organize", "organized", "organized", "organizing"],
    ["deliver", "delivered", "delivered", "delivering"], ["prepare", "prepared", "prepared", "preparing"], ["translate", "translated", "translated", "translating"],
    ["teach", "taught", "taught", "teaching"], ["study", "studied", "studied", "studying"], ["paint", "painted", "painted", "painting"],
    ["record", "recorded", "recorded", "recording"], ["analyze", "analyzed", "analyzed", "analyzing"], ["measure", "measured", "measured", "measuring"],
    ["clean", "cleaned", "cleaned", "cleaning"], ["visit", "visited", "visited", "visiting"], ["book", "booked", "booked", "booking"],
    ["install", "installed", "installed", "installing"], ["upgrade", "upgraded", "upgraded", "upgrading"], ["monitor", "monitored", "monitored", "monitoring"],
    ["test", "tested", "tested", "testing"], ["print", "printed", "printed", "printing"], ["pack", "packed", "packed", "packing"],
    ["discuss", "discussed", "discussed", "discussing"], ["confirm", "confirmed", "confirmed", "confirming"], ["publish", "published", "published", "publishing"]
  ];
  const subjects = [["I", "do", "am", "have", "was"], ["You", "do", "are", "have", "were"], ["We", "do", "are", "have", "were"], ["They", "do", "are", "have", "were"], ["He", "does", "is", "has", "was"], ["She", "does", "is", "has", "was"], ["It", "does", "is", "has", "was"]];
  const objects = ["the monthly report", "the kitchen schedule", "the client request", "the support ticket", "the school project", "the booking details", "the weather chart", "the software update", "the museum guide", "the budget draft", "the travel route", "the language note", "the safety checklist", "the team agenda", "the feedback form", "the online lesson", "the market survey", "the science article", "the payment record", "the city map", "the delivery plan", "the photo album", "the customer email", "the health diary", "the exercise plan", "the event poster", "the study summary", "the media script", "the office layout", "the final invoice"];

  const thirdPerson = (v) => (v.endsWith("y") ? `${v.slice(0, -1)}ies` : (/(s|sh|ch|x|z|o)$/.test(v) ? `${v}es` : `${v}s`));
  const tenseMarkers = {
    presentSimple: "every weekday", presentContinuous: "right now", presentPerfect: "already", presentPerfectContinuous: "for several weeks",
    pastSimple: "last Friday", pastContinuous: "at 7 p.m. yesterday", pastPerfect: "before the meeting started", pastPerfectContinuous: "for two hours before noon",
    futureSimple: "tomorrow morning", futureContinuous: "this time next week", futurePerfect: "by next Monday", futurePerfectContinuous: "for six months by July"
  };

  function formFor(key, subjectRow, verbRow) {
    const [subj, doAux, beAux, haveAux, wasAux] = subjectRow;
    const [base, v2, v3, ving] = verbRow;
    const third = subj === "He" || subj === "She" || subj === "It";
    return {
      presentSimple: { target: third ? thirdPerson(base) : base, wrong1: v2, wrong2: `${beAux} ${ving}` },
      presentContinuous: { target: `${beAux} ${ving}`, wrong1: `${haveAux} ${v3}`, wrong2: third ? thirdPerson(base) : base },
      presentPerfect: { target: `${haveAux} ${v3}`, wrong1: `${beAux} ${ving}`, wrong2: v2 },
      presentPerfectContinuous: { target: `${haveAux} been ${ving}`, wrong1: `${haveAux} ${v3}`, wrong2: `${beAux} ${ving}` },
      pastSimple: { target: v2, wrong1: `${wasAux} ${ving}`, wrong2: third ? thirdPerson(base) : base },
      pastContinuous: { target: `${wasAux} ${ving}`, wrong1: v2, wrong2: `had ${v3}` },
      pastPerfect: { target: `had ${v3}`, wrong1: v2, wrong2: `${wasAux} ${ving}` },
      pastPerfectContinuous: { target: `had been ${ving}`, wrong1: `had ${v3}`, wrong2: `${wasAux} ${ving}` },
      futureSimple: { target: `will ${base}`, wrong1: `will be ${ving}`, wrong2: `will have ${v3}` },
      futureContinuous: { target: `will be ${ving}`, wrong1: `will ${base}`, wrong2: `will have been ${ving}` },
      futurePerfect: { target: `will have ${v3}`, wrong1: `will be ${ving}`, wrong2: `will ${base}` },
      futurePerfectContinuous: { target: `will have been ${ving}`, wrong1: `will have ${v3}`, wrong2: `will be ${ving}` }
    }[key];
  }

  function createTenseTasks(key) {
    return Array.from({ length: 30 }, (_, i) => {
      const subjectRow = subjects[(i * 3 + key.length) % subjects.length];
      const verbRow = verbBank[i % verbBank.length];
      const obj = objects[(i * 5 + key.length) % objects.length];
      const marker = `${tenseMarkers[key]} #${i + 1}`;
      const [subj] = subjectRow;
      const [base] = verbRow;
      const forms = formFor(key, subjectRow, verbRow);
      const id = `${key}-${i + 1}`;
      const mcq = i % 4 === 3 || i % 4 === 0;
      if (mcq) {
        return {
          id,
          type: "mcq",
          prompt: `${i + 1}) Choose the correct form: ${subj} ____ ${obj} ${marker}.`,
          options: [forms.wrong1, forms.target, forms.wrong2],
          correctIndex: 1
        };
      }
      return {
        id,
        type: "fill",
        prompt: `${i + 1}) Complete the sentence: ${subj} ____ (${base}) ${obj} ${marker}.`,
        accept: [forms.target]
      };
    });
  }

  const taskSets = Object.fromEntries(Object.keys(tenses).map((k) => [k, createTenseTasks(k)]));

  const testQuestions = Array.from({ length: 30 }, (_, i) => {
    const level = i < 8 ? "A1" : i < 16 ? "A2" : i < 24 ? "B1" : "B2";
    if (i % 3 === 0) return { id: `t-${i + 1}`, level, type: "mcq", question: `${i + 1}. ${level}: Choose the correct sentence.`, options: ["She go to work every day.", "She goes to work every day.", "She going to work every day."], answer: 1 };
    if (i % 3 === 1) return { id: `t-${i + 1}`, level, type: "fill", question: `${i + 1}. ${level}: Fill in one word: They ____ already finished the task.`, answerText: "have" };
    return { id: `t-${i + 1}`, level, type: "fill", question: `${i + 1}. ${level}: Use the correct form: By 2030, I will have ____ (work) here for ten years.`, answerText: "been working" };
  });

  const irregularVerbs = [
    { base: "be", past: "was/were", pp: "been", uk: "бути", pl: "być" }, { base: "become", past: "became", pp: "become", uk: "ставати", pl: "stawać się" },
    { base: "begin", past: "began", pp: "begun", uk: "починати", pl: "zaczynać" }, { base: "break", past: "broke", pp: "broken", uk: "ламати", pl: "łamać" },
    { base: "bring", past: "brought", pp: "brought", uk: "приносити", pl: "przynosić" }, { base: "build", past: "built", pp: "built", uk: "будувати", pl: "budować" },
    { base: "buy", past: "bought", pp: "bought", uk: "купувати", pl: "kupować" }, { base: "choose", past: "chose", pp: "chosen", uk: "обирати", pl: "wybierać" },
    { base: "come", past: "came", pp: "come", uk: "приходити", pl: "przychodzić" }, { base: "do", past: "did", pp: "done", uk: "робити", pl: "robić" },
    { base: "drink", past: "drank", pp: "drunk", uk: "пити", pl: "pić" }, { base: "drive", past: "drove", pp: "driven", uk: "керувати", pl: "prowadzić" },
    { base: "eat", past: "ate", pp: "eaten", uk: "їсти", pl: "jeść" }, { base: "find", past: "found", pp: "found", uk: "знаходити", pl: "znajdować" },
    { base: "get", past: "got", pp: "got/gotten", uk: "отримувати", pl: "dostawać" }, { base: "give", past: "gave", pp: "given", uk: "давати", pl: "dawać" },
    { base: "go", past: "went", pp: "gone", uk: "йти", pl: "iść" }, { base: "have", past: "had", pp: "had", uk: "мати", pl: "mieć" },
    { base: "know", past: "knew", pp: "known", uk: "знати", pl: "znać" }, { base: "leave", past: "left", pp: "left", uk: "залишати", pl: "opuszczać" },
    { base: "make", past: "made", pp: "made", uk: "робити", pl: "tworzyć" }, { base: "read", past: "read", pp: "read", uk: "читати", pl: "czytać" },
    { base: "run", past: "ran", pp: "run", uk: "бігти", pl: "biec" }, { base: "say", past: "said", pp: "said", uk: "казати", pl: "mówić" },
    { base: "see", past: "saw", pp: "seen", uk: "бачити", pl: "widzieć" }, { base: "speak", past: "spoke", pp: "spoken", uk: "говорити", pl: "mówić" },
    { base: "take", past: "took", pp: "taken", uk: "брати", pl: "brać" }, { base: "teach", past: "taught", pp: "taught", uk: "навчати", pl: "uczyć" },
    { base: "think", past: "thought", pp: "thought", uk: "думати", pl: "myśleć" }, { base: "write", past: "wrote", pp: "written", uk: "писати", pl: "pisać" }
  ];

  const vocabTopics = {
    A1: ["Family", "Home", "Food", "School", "Jobs", "Daily life", "Time", "Weather", "Clothes", "Transport"],
    A2: ["Travel", "Health", "Shopping", "Technology", "Nature", "Sports", "Culture", "City life", "Communication", "Plans"],
    B1: ["Workplace", "Education", "Media", "Environment", "Relationships", "Crime", "Economy", "Science", "Psychology", "Global issues"]
  };
  const terms = [
    { en: "schedule", uk: "графік", pl: "harmonogram" }, { en: "routine", uk: "рутина", pl: "rutyna" }, { en: "lesson", uk: "урок", pl: "lekcja" }, { en: "meeting", uk: "зустріч", pl: "spotkanie" },
    { en: "budget", uk: "бюджет", pl: "budżet" }, { en: "project", uk: "проєкт", pl: "projekt" }, { en: "report", uk: "звіт", pl: "raport" }, { en: "guide", uk: "посібник", pl: "przewodnik" },
    { en: "checklist", uk: "контрольний список", pl: "lista kontrolna" }, { en: "strategy", uk: "стратегія", pl: "strategia" }, { en: "discussion", uk: "обговорення", pl: "dyskusja" },
    { en: "agreement", uk: "угода", pl: "umowa" }, { en: "support", uk: "підтримка", pl: "wsparcie" }, { en: "training", uk: "тренування", pl: "trening" },
    { en: "review", uk: "огляд", pl: "przegląd" }, { en: "quality", uk: "якість", pl: "jakość" }, { en: "service", uk: "сервіс", pl: "usługa" }, { en: "practice", uk: "практика", pl: "praktyka" },
    { en: "record", uk: "запис", pl: "zapis" }, { en: "summary", uk: "підсумок", pl: "podsumowanie" }
  ];
  const descriptors = [
    { en: "basic", uk: "базовий", pl: "podstawowy" }, { en: "daily", uk: "щоденний", pl: "codzienny" }, { en: "weekly", uk: "щотижневий", pl: "tygodniowy" },
    { en: "monthly", uk: "щомісячний", pl: "miesięczny" }, { en: "personal", uk: "особистий", pl: "osobisty" }, { en: "public", uk: "публічний", pl: "publiczny" },
    { en: "digital", uk: "цифровий", pl: "cyfrowy" }, { en: "practical", uk: "практичний", pl: "praktyczny" }, { en: "creative", uk: "творчий", pl: "kreatywny" }, { en: "long-term", uk: "довгостроковий", pl: "długoterminowy" }
  ];
  const topicMeta = {
    "Family": ["family", "сімейний", "rodzinny"], "Home": ["home", "домашній", "domowy"], "Food": ["food", "харчовий", "żywieniowy"], "School": ["school", "шкільний", "szkolny"],
    "Jobs": ["job", "робочий", "zawodowy"], "Daily life": ["daily-life", "повсякденний", "codzienny"], "Time": ["time", "часовий", "czasowy"], "Weather": ["weather", "погодні", "pogodowy"],
    "Clothes": ["clothing", "одяговий", "odzieżowy"], "Transport": ["transport", "транспортний", "transportowy"], "Travel": ["travel", "туристичний", "podróżny"],
    "Health": ["health", "медичний", "zdrowotny"], "Shopping": ["shopping", "покупковий", "zakupowy"], "Technology": ["technology", "технологічний", "technologiczny"],
    "Nature": ["nature", "природний", "przyrodniczy"], "Sports": ["sports", "спортивний", "sportowy"], "Culture": ["culture", "культурний", "kulturalny"],
    "City life": ["city-life", "міський", "miejski"], "Communication": ["communication", "комунікаційний", "komunikacyjny"], "Plans": ["planning", "планувальний", "planistyczny"],
    "Workplace": ["workplace", "офісний", "biurowy"], "Education": ["education", "освітній", "edukacyjny"], "Media": ["media", "медійний", "medialny"],
    "Environment": ["environment", "екологічний", "środowiskowy"], "Relationships": ["relationship", "стосунковий", "relacyjny"], "Crime": ["crime", "кримінальний", "kryminalny"],
    "Economy": ["economic", "економічний", "ekonomiczny"], "Science": ["science", "науковий", "naukowy"], "Psychology": ["psychology", "психологічний", "psychologiczny"], "Global issues": ["global", "глобальний", "globalny"]
  };

  const vocabulary = {};
  const globalUniq = new Set();
  Object.entries(vocabTopics).forEach(([level, topics]) => {
    vocabulary[level] = {};
    topics.forEach((topic) => {
      const [topicEn, topicUk, topicPl] = topicMeta[topic];
      const list = [];
      descriptors.forEach((d) => {
        terms.forEach((t) => {
          const en = `${topicEn} ${d.en} ${t.en}`;
          if (globalUniq.has(en)) return;
          globalUniq.add(en);
          list.push({ en, uk: `${topicUk} ${d.uk} ${t.uk}`, pl: `${topicPl} ${d.pl} ${t.pl}` });
        });
      });
      vocabulary[level][topic] = list.slice(0, 100);
    });
  });

  window.HW = { title: "English Tenses Homework", subtitle: "Practice all 12 tenses on one mobile-friendly page.", version: "2026-02-23", tenses, taskSets, testQuestions, irregularVerbs, vocabulary };
})();
