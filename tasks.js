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

  const testQuestions = [
    { id: "t-1", level: "A1", type: "mcq", question: "1. Choose the correct sentence.", options: ["He live in Warsaw.", "He lives in Warsaw.", "He living in Warsaw."], answer: 1 },
    { id: "t-2", level: "A1", type: "fill", question: "2. Fill in one word: I ____ a student.", answerText: "am" },
    { id: "t-3", level: "A1", type: "grammar", question: "3. Use the correct form: She ____ (work) in a bank.", answerText: "works" },
    { id: "t-4", level: "A1", type: "mcq", question: "4. Choose the correct sentence.", options: ["They are play football now.", "They play football now.", "They are playing football now."], answer: 2 },
    { id: "t-5", level: "A1", type: "fill", question: "5. Fill in one word: We ____ not ready.", answerText: "are" },
    { id: "t-6", level: "A1", type: "grammar", question: "6. Use the correct form: My sister ____ (have) a new phone.", answerText: "has" },
    { id: "t-7", level: "A1", type: "mcq", question: "7. Choose the correct sentence.", options: ["Do you like coffee?", "Are you like coffee?", "Does you like coffee?"], answer: 0 },
    { id: "t-8", level: "A1", type: "fill", question: "8. Fill in one word: I have two ____.", answerText: "brothers" },

    { id: "t-9", level: "A2", type: "grammar", question: "9. Use the correct form: They ____ (visit) London last year.", answerText: "visited" },
    { id: "t-10", level: "A2", type: "mcq", question: "10. Choose the correct sentence.", options: ["I didn't saw him yesterday.", "I didn't see him yesterday.", "I don't see him yesterday."], answer: 1 },
    { id: "t-11", level: "A2", type: "fill", question: "11. Fill in one word: She has lived here ____ 2020.", answerText: "since" },
    { id: "t-12", level: "A2", type: "grammar", question: "12. Use the correct form: We ____ (wait) for the bus for twenty minutes.", answerText: "have been waiting" },
    { id: "t-13", level: "A2", type: "mcq", question: "13. Choose the correct sentence.", options: ["What were you doing at 8 pm?", "What did you doing at 8 pm?", "What you were doing at 8 pm?"], answer: 0 },
    { id: "t-14", level: "A2", type: "fill", question: "14. Fill in one word: We ____ already eaten dinner.", answerText: "have" },
    { id: "t-15", level: "A2", type: "grammar", question: "15. Use the correct form: He ____ (not finish) his homework yet.", answerText: "has not finished" },
    { id: "t-16", level: "A2", type: "mcq", question: "16. Choose the correct sentence.", options: ["I will call you tonight.", "I calling you tonight.", "I will called you tonight."], answer: 0 },

    { id: "t-17", level: "B1", type: "fill", question: "17. Fill in one word: If it rains, we ____ stay at home.", answerText: "will" },
    { id: "t-18", level: "B1", type: "grammar", question: "18. Use the correct form: By the time we arrived, the film ____ (start).", answerText: "had started" },
    { id: "t-19", level: "B1", type: "mcq", question: "19. Choose the correct sentence.", options: ["She told me she was tired.", "She told me she is tired.", "She told me she tired."], answer: 0 },
    { id: "t-20", level: "B1", type: "fill", question: "20. Fill in one word: I am interested ____ modern art.", answerText: "in" },
    { id: "t-21", level: "B1", type: "grammar", question: "21. Use the correct form: This time tomorrow, we ____ (fly) to Rome.", answerText: "will be flying" },
    { id: "t-22", level: "B1", type: "mcq", question: "22. Choose the correct sentence.", options: ["He said that he had lost his keys.", "He said that he has lost his keys.", "He said that he lose his keys."], answer: 0 },
    { id: "t-23", level: "B1", type: "fill", question: "23. Fill in one word: She is the girl ____ won the prize.", answerText: "who" },
    { id: "t-24", level: "B1", type: "grammar", question: "24. Use the correct form: I wish I ____ (can) swim better.", answerText: "could" },

    { id: "t-25", level: "B2", type: "mcq", question: "25. Choose the correct sentence.", options: ["Hardly had I sat down when the phone rang.", "Hardly I had sat down when the phone rang.", "Hardly had I sat down than the phone rang."], answer: 0 },
    { id: "t-26", level: "B2", type: "grammar", question: "26. Use the correct form: If she ____ (tell) me earlier, I would have helped.", answerText: "had told" },
    { id: "t-27", level: "B2", type: "fill", question: "27. Fill in one word: Despite ____ tired, he finished the report.", answerText: "being" },
    { id: "t-28", level: "B2", type: "mcq", question: "28. Choose the correct sentence.", options: ["The proposal needs to be revised.", "The proposal needs revise.", "The proposal needs to revised."], answer: 0 },
    { id: "t-29", level: "B2", type: "grammar", question: "29. Use the correct form: No sooner ____ they arrived than it started to snow.", answerText: "had" },
    { id: "t-30", level: "B2", type: "grammar", question: "30. Use the correct form: She speaks English as if she ____ (grow) up in London.", answerText: "had grown" }
  ];

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

  const vocabulary = {
    A1: {
      Family: [
        { en: "mother", uk: "мати", pl: "matka" }, { en: "father", uk: "батько", pl: "ojciec" }, { en: "sister", uk: "сестра", pl: "siostra" }, { en: "brother", uk: "брат", pl: "brat" },
        { en: "daughter", uk: "донька", pl: "córka" }, { en: "son", uk: "син", pl: "syn" }, { en: "grandmother", uk: "бабуся", pl: "babcia" }, { en: "grandfather", uk: "дідусь", pl: "dziadek" },
        { en: "aunt", uk: "тітка", pl: "ciocia" }, { en: "uncle", uk: "дядько", pl: "wujek" }, { en: "cousin", uk: "двоюрідний брат або сестра", pl: "kuzyn" }, { en: "wife", uk: "дружина", pl: "żona" }
      ],
      Home: [
        { en: "kitchen", uk: "кухня", pl: "kuchnia" }, { en: "bedroom", uk: "спальня", pl: "sypialnia" }, { en: "bathroom", uk: "ванна кімната", pl: "łazienka" }, { en: "window", uk: "вікно", pl: "okno" },
        { en: "door", uk: "двері", pl: "drzwi" }, { en: "table", uk: "стіл", pl: "stół" }, { en: "chair", uk: "стілець", pl: "krzesło" }, { en: "sofa", uk: "диван", pl: "sofa" },
        { en: "lamp", uk: "лампа", pl: "lampa" }, { en: "floor", uk: "підлога", pl: "podłoga" }, { en: "roof", uk: "дах", pl: "dach" }, { en: "garden", uk: "сад", pl: "ogród" }
      ],
      Food: [
        { en: "bread", uk: "хліб", pl: "chleb" }, { en: "butter", uk: "масло", pl: "masło" }, { en: "cheese", uk: "сир", pl: "ser" }, { en: "chicken", uk: "курятина", pl: "kurczak" },
        { en: "rice", uk: "рис", pl: "ryż" }, { en: "soup", uk: "суп", pl: "zupa" }, { en: "salad", uk: "салат", pl: "sałatka" }, { en: "apple", uk: "яблуко", pl: "jabłko" },
        { en: "banana", uk: "банан", pl: "banan" }, { en: "sugar", uk: "цукор", pl: "cukier" }, { en: "salt", uk: "сіль", pl: "sól" }, { en: "water", uk: "вода", pl: "woda" }
      ]
    },
    A2: {
      Travel: [
        { en: "airport", uk: "аеропорт", pl: "lotnisko" }, { en: "passport", uk: "паспорт", pl: "paszport" }, { en: "luggage", uk: "багаж", pl: "bagaż" }, { en: "boarding pass", uk: "посадковий талон", pl: "karta pokładowa" },
        { en: "platform", uk: "платформа", pl: "peron" }, { en: "ticket", uk: "квиток", pl: "bilet" }, { en: "journey", uk: "подорож", pl: "podróż" }, { en: "hostel", uk: "хостел", pl: "hostel" },
        { en: "reservation", uk: "бронювання", pl: "rezerwacja" }, { en: "landmark", uk: "визначне місце", pl: "zabytek" }, { en: "guidebook", uk: "путівник", pl: "przewodnik" }, { en: "take off", uk: "злітати", pl: "startować" }
      ],
      Work: [
        { en: "office", uk: "офіс", pl: "biuro" }, { en: "meeting", uk: "зустріч", pl: "spotkanie" }, { en: "deadline", uk: "кінцевий термін", pl: "termin" }, { en: "salary", uk: "зарплата", pl: "pensja" },
        { en: "contract", uk: "контракт", pl: "umowa" }, { en: "manager", uk: "керівник", pl: "kierownik" }, { en: "colleague", uk: "колега", pl: "współpracownik" }, { en: "shift", uk: "зміна", pl: "zmiana" },
        { en: "interview", uk: "співбесіда", pl: "rozmowa kwalifikacyjna" }, { en: "promotion", uk: "підвищення", pl: "awans" }, { en: "overtime", uk: "понаднормово", pl: "nadgodziny" }, { en: "feedback", uk: "відгук", pl: "informacja zwrotna" }
      ],
      Health: [
        { en: "doctor", uk: "лікар", pl: "lekarz" }, { en: "nurse", uk: "медсестра", pl: "pielęgniarka" }, { en: "clinic", uk: "клініка", pl: "klinika" }, { en: "medicine", uk: "ліки", pl: "lek" },
        { en: "fever", uk: "гарячка", pl: "gorączka" }, { en: "cough", uk: "кашель", pl: "kaszel" }, { en: "appointment", uk: "прийом", pl: "wizyta" }, { en: "diet", uk: "дієта", pl: "dieta" },
        { en: "vitamin", uk: "вітамін", pl: "witamina" }, { en: "injury", uk: "травма", pl: "uraz" }, { en: "recovery", uk: "відновлення", pl: "rekonwalescencja" }, { en: "headache", uk: "головний біль", pl: "ból głowy" }
      ]
    },
    B1: {
      Environment: [
        { en: "pollution", uk: "забруднення", pl: "zanieczyszczenie" }, { en: "recycling", uk: "переробка", pl: "recykling" }, { en: "wildlife", uk: "дика природа", pl: "dzika przyroda" }, { en: "drought", uk: "посуха", pl: "susza" },
        { en: "flood", uk: "повінь", pl: "powódź" }, { en: "emission", uk: "викид", pl: "emisja" }, { en: "habitat", uk: "середовище існування", pl: "siedlisko" }, { en: "ecosystem", uk: "екосистема", pl: "ekosystem" },
        { en: "climate", uk: "клімат", pl: "klimat" }, { en: "landfill", uk: "сміттєзвалище", pl: "wysypisko" }, { en: "conservation", uk: "збереження", pl: "ochrona" }, { en: "renewable", uk: "відновлюваний", pl: "odnawialny" }
      ],
      Technology: [
        { en: "software", uk: "програмне забезпечення", pl: "oprogramowanie" }, { en: "hardware", uk: "обладнання", pl: "sprzęt" }, { en: "network", uk: "мережа", pl: "sieć" }, { en: "database", uk: "база даних", pl: "baza danych" },
        { en: "password", uk: "пароль", pl: "hasło" }, { en: "browser", uk: "браузер", pl: "przeglądarka" }, { en: "download", uk: "завантаження", pl: "pobieranie" }, { en: "upload", uk: "надсилання", pl: "przesyłanie" },
        { en: "device", uk: "пристрій", pl: "urządzenie" }, { en: "feature", uk: "функція", pl: "funkcja" }, { en: "update", uk: "оновлення", pl: "aktualizacja" }, { en: "shortcut", uk: "ярлик", pl: "skrót" }
      ],
      Society: [
        { en: "community", uk: "спільнота", pl: "społeczność" }, { en: "volunteer", uk: "волонтер", pl: "wolontariusz" }, { en: "charity", uk: "благодійність", pl: "dobroczynność" }, { en: "equality", uk: "рівність", pl: "równość" },
        { en: "justice", uk: "справедливість", pl: "sprawiedliwość" }, { en: "campaign", uk: "кампанія", pl: "kampania" }, { en: "policy", uk: "політика", pl: "polityka" }, { en: "citizen", uk: "громадянин", pl: "obywatel" },
        { en: "neighborhood", uk: "район", pl: "dzielnica" }, { en: "awareness", uk: "обізнаність", pl: "świadomość" }, { en: "support", uk: "підтримка", pl: "wsparcie" }, { en: "benefit", uk: "користь", pl: "korzyść" }
      ]
    }
  };

  function warnDuplicates() {
    const testTexts = testQuestions.map((q) => q.question.toLowerCase().trim());
    const dupTests = testTexts.filter((q, i) => testTexts.indexOf(q) !== i);
    if (dupTests.length) console.warn("Duplicate test questions found:", [...new Set(dupTests)]);

    Object.entries(taskSets).forEach(([tense, items]) => {
      const prompts = items.map((t) => t.prompt.toLowerCase().trim());
      const dups = prompts.filter((p, i) => prompts.indexOf(p) !== i);
      if (dups.length) console.warn(`Duplicate tasks found in ${tense}:`, [...new Set(dups)]);
    });

    Object.entries(vocabulary).forEach(([level, topics]) => {
      const words = [];
      Object.entries(topics).forEach(([topic, entries]) => {
        const local = entries.map((e) => e.en.toLowerCase().trim());
        const localDup = local.filter((w, i) => local.indexOf(w) !== i);
        if (localDup.length) console.warn(`Duplicate vocabulary in ${level}/${topic}:`, [...new Set(localDup)]);
        words.push(...local);
      });
      const levelDup = words.filter((w, i) => words.indexOf(w) !== i);
      if (levelDup.length) console.warn(`Duplicate vocabulary across ${level}:`, [...new Set(levelDup)]);
    });
  }

  warnDuplicates();

  window.HW = { title: "English Tenses Homework", subtitle: "Practice all 12 tenses on one mobile-friendly page.", version: "2026-02-24", tenses, taskSets, testQuestions, irregularVerbs, vocabulary };
})();
