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
    },
    eitherNeither: {
      label: "Either / Neither",
      use: { uk: "Either/or показує вибір між двома варіантами. Neither/nor показує, що жоден з двох варіантів не підходить. Either та neither також вживаються як займенники у виразах either of / neither of.", pl: "Either/or pokazuje wybór między dwiema opcjami. Neither/nor pokazuje, że żadna z dwóch opcji nie pasuje. Either i neither działają także jako zaimki w wyrażeniach either of / neither of." },
      formula: { affirmative: "Either + option A + or + option B", negative: "Neither + option A + nor + option B", question: "Either/Neither + of + plural noun + singular verb" },
      markers: ["either ... or", "neither ... nor", "either of", "neither of"],
      examples: [
        { en: "Either Mark or Julia is joining us.", uk: "Або Марк, або Юлія приєднаються до нас.", pl: "Albo Mark, albo Julia dołączą do nas." },
        { en: "Neither the bus nor the train is available tonight.", uk: "Ні автобус, ні потяг сьогодні ввечері недоступні.", pl: "Ani autobus, ani pociąg nie są dziś wieczorem dostępne." },
        { en: "You can choose either of these two seats.", uk: "Ти можеш обрати будь-яке з цих двох місць.", pl: "Możesz wybrać któreś z tych dwóch miejsc." },
        { en: "Neither of my neighbors speaks Spanish.", uk: "Жоден із моїх сусідів не говорить іспанською.", pl: "Żaden z moich sąsiadów nie mówi po hiszpańsku." }
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

  const taskSets = Object.fromEntries(Object.keys(tenseMarkers).map((k) => [k, createTenseTasks(k)]));
  taskSets.eitherNeither = [
    { id: "eitherNeither-1", type: "mcq", prompt: "1) Choose: You can either email me ____ call me.", options: ["or", "nor", "but"], correctIndex: 0 },
    { id: "eitherNeither-2", type: "fill", prompt: "2) Fill in: ____ my brother nor my sister can drive.", accept: ["neither"] },
    { id: "eitherNeither-3", type: "fill", prompt: "3) Complete: We can go either today ____ tomorrow.", accept: ["or"] },
    { id: "eitherNeither-4", type: "mcq", prompt: "4) Choose the correct sentence.", options: ["Either Alex or Sam is here.", "Either Alex nor Sam is here.", "Neither Alex or Sam is here."], correctIndex: 0 },
    { id: "eitherNeither-5", type: "fill", prompt: "5) Fill in: She invited neither John ____ Kate.", accept: ["nor"] },
    { id: "eitherNeither-6", type: "mcq", prompt: "6) Choose: ____ of these two answers is correct.", options: ["Neither", "Either", "All"], correctIndex: 0 },
    { id: "eitherNeither-7", type: "fill", prompt: "7) Complete: Either you study now ____ you fail the test.", accept: ["or"] },
    { id: "eitherNeither-8", type: "fill", prompt: "8) Fill in: ____ of us has seen that film.", accept: ["neither"] },
    { id: "eitherNeither-9", type: "mcq", prompt: "9) Choose: You may choose either tea ____ coffee.", options: ["nor", "or", "yet"], correctIndex: 1 },
    { id: "eitherNeither-10", type: "fill", prompt: "10) Complete: Neither the keys nor the wallet ____ on the table.", accept: ["is"] },
    { id: "eitherNeither-11", type: "fill", prompt: "11) Fill in: I don't want ____ option.", accept: ["either"] },
    { id: "eitherNeither-12", type: "mcq", prompt: "12) Choose the correct sentence.", options: ["Neither of the boys are late.", "Neither of the boys is late.", "Neither of the boy is late."], correctIndex: 1 },
    { id: "eitherNeither-13", type: "fill", prompt: "13) Complete: He likes neither noise ____ crowds.", accept: ["nor"] },
    { id: "eitherNeither-14", type: "mcq", prompt: "14) Choose: ____ Mia or Nora will lead the team.", options: ["Either", "Neither", "Both"], correctIndex: 0 },
    { id: "eitherNeither-15", type: "fill", prompt: "15) Rewrite with one word: Not Tom and not Ben came. ____ Tom nor Ben came.", accept: ["neither"] },
    { id: "eitherNeither-16", type: "fill", prompt: "16) Complete: We will travel either by bus ____ by train.", accept: ["or"] },
    { id: "eitherNeither-17", type: "mcq", prompt: "17) Choose the correct sentence.", options: ["You can either stay or leave.", "You can either stay nor leave.", "You can neither stay or leave."], correctIndex: 0 },
    { id: "eitherNeither-18", type: "fill", prompt: "18) Fill in: ____ of them understands the rule.", accept: ["neither"] },
    { id: "eitherNeither-19", type: "fill", prompt: "19) Complete: Either the manager or the staff ____ responsible.", accept: ["is"] },
    { id: "eitherNeither-20", type: "mcq", prompt: "20) Choose: I don't trust ____ of these two websites.", options: ["either", "neither", "both"], correctIndex: 0 },
    { id: "eitherNeither-21", type: "fill", prompt: "21) Complete: Neither my uncle nor my cousins ____ coming.", accept: ["are"] },
    { id: "eitherNeither-22", type: "mcq", prompt: "22) Choose the correct sentence.", options: ["Either of the plans is fine.", "Either of the plans are fine.", "Neither of the plans are fine."], correctIndex: 0 },
    { id: "eitherNeither-23", type: "fill", prompt: "23) Fill in: We saw neither rain ____ wind during the hike.", accept: ["nor"] },
    { id: "eitherNeither-24", type: "fill", prompt: "24) Complete: ____ of these roads is safe at night.", accept: ["neither"] },
    { id: "eitherNeither-25", type: "mcq", prompt: "25) Choose: She speaks either German ____ Dutch.", options: ["or", "nor", "and"], correctIndex: 0 },
    { id: "eitherNeither-26", type: "fill", prompt: "26) Complete: Neither coffee nor tea ____ available now.", accept: ["is"] },
    { id: "eitherNeither-27", type: "mcq", prompt: "27) Choose the best rewrite: Both options are acceptable.", options: ["You can choose neither option.", "You can choose either option.", "You can choose nor option."], correctIndex: 1 },
    { id: "eitherNeither-28", type: "fill", prompt: "28) Fill in: ____ of my phones is charged.", accept: ["neither"] },
    { id: "eitherNeither-29", type: "fill", prompt: "29) Complete: Either your teacher or your classmates ____ right.", accept: ["are"] },
    { id: "eitherNeither-30", type: "mcq", prompt: "30) Choose the correct sentence.", options: ["Neither of us have finished.", "Neither of us has finished.", "Either of us has finished."], correctIndex: 1 }
  ];

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
  "A1": {
    "Family": [
      {
        "en": "mother",
        "uk": "mother",
        "pl": "mother"
      },
      {
        "en": "father",
        "uk": "father",
        "pl": "father"
      },
      {
        "en": "sister",
        "uk": "sister",
        "pl": "sister"
      },
      {
        "en": "brother",
        "uk": "brother",
        "pl": "brother"
      },
      {
        "en": "daughter",
        "uk": "daughter",
        "pl": "daughter"
      },
      {
        "en": "son",
        "uk": "son",
        "pl": "son"
      },
      {
        "en": "grandmother",
        "uk": "grandmother",
        "pl": "grandmother"
      },
      {
        "en": "grandfather",
        "uk": "grandfather",
        "pl": "grandfather"
      },
      {
        "en": "aunt",
        "uk": "aunt",
        "pl": "aunt"
      },
      {
        "en": "uncle",
        "uk": "uncle",
        "pl": "uncle"
      },
      {
        "en": "cousin",
        "uk": "cousin",
        "pl": "cousin"
      },
      {
        "en": "wife",
        "uk": "wife",
        "pl": "wife"
      },
      {
        "en": "that",
        "uk": "that",
        "pl": "that"
      },
      {
        "en": "with",
        "uk": "with",
        "pl": "with"
      },
      {
        "en": "this",
        "uk": "this",
        "pl": "this"
      },
      {
        "en": "have",
        "uk": "have",
        "pl": "have"
      },
      {
        "en": "from",
        "uk": "from",
        "pl": "from"
      },
      {
        "en": "your",
        "uk": "your",
        "pl": "your"
      },
      {
        "en": "they",
        "uk": "they",
        "pl": "they"
      },
      {
        "en": "will",
        "uk": "will",
        "pl": "will"
      },
      {
        "en": "just",
        "uk": "just",
        "pl": "just"
      },
      {
        "en": "like",
        "uk": "like",
        "pl": "like"
      },
      {
        "en": "about",
        "uk": "about",
        "pl": "about"
      },
      {
        "en": "what",
        "uk": "what",
        "pl": "what"
      },
      {
        "en": "when",
        "uk": "when",
        "pl": "when"
      },
      {
        "en": "more",
        "uk": "more",
        "pl": "more"
      },
      {
        "en": "were",
        "uk": "were",
        "pl": "were"
      },
      {
        "en": "their",
        "uk": "their",
        "pl": "their"
      },
      {
        "en": "there",
        "uk": "there",
        "pl": "there"
      },
      {
        "en": "which",
        "uk": "which",
        "pl": "which"
      },
      {
        "en": "time",
        "uk": "time",
        "pl": "time"
      },
      {
        "en": "been",
        "uk": "been",
        "pl": "been"
      },
      {
        "en": "would",
        "uk": "would",
        "pl": "would"
      },
      {
        "en": "people",
        "uk": "people",
        "pl": "people"
      },
      {
        "en": "some",
        "uk": "some",
        "pl": "some"
      },
      {
        "en": "also",
        "uk": "also",
        "pl": "also"
      },
      {
        "en": "them",
        "uk": "them",
        "pl": "them"
      },
      {
        "en": "other",
        "uk": "other",
        "pl": "other"
      },
      {
        "en": "than",
        "uk": "than",
        "pl": "than"
      },
      {
        "en": "good",
        "uk": "good",
        "pl": "good"
      },
      {
        "en": "only",
        "uk": "only",
        "pl": "only"
      },
      {
        "en": "after",
        "uk": "after",
        "pl": "after"
      },
      {
        "en": "first",
        "uk": "first",
        "pl": "first"
      },
      {
        "en": "into",
        "uk": "into",
        "pl": "into"
      },
      {
        "en": "know",
        "uk": "know",
        "pl": "know"
      },
      {
        "en": "make",
        "uk": "make",
        "pl": "make"
      },
      {
        "en": "over",
        "uk": "over",
        "pl": "over"
      },
      {
        "en": "think",
        "uk": "think",
        "pl": "think"
      },
      {
        "en": "then",
        "uk": "then",
        "pl": "then"
      },
      {
        "en": "could",
        "uk": "could",
        "pl": "could"
      },
      {
        "en": "back",
        "uk": "back",
        "pl": "back"
      },
      {
        "en": "these",
        "uk": "these",
        "pl": "these"
      },
      {
        "en": "want",
        "uk": "want",
        "pl": "want"
      },
      {
        "en": "because",
        "uk": "because",
        "pl": "because"
      },
      {
        "en": "well",
        "uk": "well",
        "pl": "well"
      },
      {
        "en": "said",
        "uk": "said",
        "pl": "said"
      },
      {
        "en": "most",
        "uk": "most",
        "pl": "most"
      },
      {
        "en": "much",
        "uk": "much",
        "pl": "much"
      },
      {
        "en": "very",
        "uk": "very",
        "pl": "very"
      },
      {
        "en": "where",
        "uk": "where",
        "pl": "where"
      },
      {
        "en": "even",
        "uk": "even",
        "pl": "even"
      },
      {
        "en": "should",
        "uk": "should",
        "pl": "should"
      },
      {
        "en": "here",
        "uk": "here",
        "pl": "here"
      },
      {
        "en": "need",
        "uk": "need",
        "pl": "need"
      },
      {
        "en": "really",
        "uk": "really",
        "pl": "really"
      },
      {
        "en": "right",
        "uk": "right",
        "pl": "right"
      },
      {
        "en": "work",
        "uk": "work",
        "pl": "work"
      },
      {
        "en": "year",
        "uk": "year",
        "pl": "year"
      },
      {
        "en": "years",
        "uk": "years",
        "pl": "years"
      },
      {
        "en": "being",
        "uk": "being",
        "pl": "being"
      },
      {
        "en": "going",
        "uk": "going",
        "pl": "going"
      },
      {
        "en": "before",
        "uk": "before",
        "pl": "before"
      },
      {
        "en": "made",
        "uk": "made",
        "pl": "made"
      },
      {
        "en": "still",
        "uk": "still",
        "pl": "still"
      },
      {
        "en": "take",
        "uk": "take",
        "pl": "take"
      },
      {
        "en": "many",
        "uk": "many",
        "pl": "many"
      },
      {
        "en": "never",
        "uk": "never",
        "pl": "never"
      },
      {
        "en": "those",
        "uk": "those",
        "pl": "those"
      },
      {
        "en": "life",
        "uk": "life",
        "pl": "life"
      },
      {
        "en": "world",
        "uk": "world",
        "pl": "world"
      },
      {
        "en": "down",
        "uk": "down",
        "pl": "down"
      },
      {
        "en": "great",
        "uk": "great",
        "pl": "great"
      },
      {
        "en": "through",
        "uk": "through",
        "pl": "through"
      },
      {
        "en": "last",
        "uk": "last",
        "pl": "last"
      },
      {
        "en": "while",
        "uk": "while",
        "pl": "while"
      },
      {
        "en": "best",
        "uk": "best",
        "pl": "best"
      },
      {
        "en": "such",
        "uk": "such",
        "pl": "such"
      },
      {
        "en": "love",
        "uk": "love",
        "pl": "love"
      },
      {
        "en": "home",
        "uk": "home",
        "pl": "home"
      },
      {
        "en": "long",
        "uk": "long",
        "pl": "long"
      },
      {
        "en": "look",
        "uk": "look",
        "pl": "look"
      },
      {
        "en": "something",
        "uk": "something",
        "pl": "something"
      },
      {
        "en": "same",
        "uk": "same",
        "pl": "same"
      },
      {
        "en": "used",
        "uk": "used",
        "pl": "used"
      },
      {
        "en": "both",
        "uk": "both",
        "pl": "both"
      },
      {
        "en": "every",
        "uk": "every",
        "pl": "every"
      },
      {
        "en": "come",
        "uk": "come",
        "pl": "come"
      },
      {
        "en": "part",
        "uk": "part",
        "pl": "part"
      },
      {
        "en": "state",
        "uk": "state",
        "pl": "state"
      },
      {
        "en": "three",
        "uk": "three",
        "pl": "three"
      }
    ],
    "Home": [
      {
        "en": "kitchen",
        "uk": "kitchen",
        "pl": "kitchen"
      },
      {
        "en": "bedroom",
        "uk": "bedroom",
        "pl": "bedroom"
      },
      {
        "en": "bathroom",
        "uk": "bathroom",
        "pl": "bathroom"
      },
      {
        "en": "window",
        "uk": "window",
        "pl": "window"
      },
      {
        "en": "door",
        "uk": "door",
        "pl": "door"
      },
      {
        "en": "table",
        "uk": "table",
        "pl": "table"
      },
      {
        "en": "chair",
        "uk": "chair",
        "pl": "chair"
      },
      {
        "en": "sofa",
        "uk": "sofa",
        "pl": "sofa"
      },
      {
        "en": "lamp",
        "uk": "lamp",
        "pl": "lamp"
      },
      {
        "en": "floor",
        "uk": "floor",
        "pl": "floor"
      },
      {
        "en": "ceiling",
        "uk": "ceiling",
        "pl": "ceiling"
      },
      {
        "en": "mirror",
        "uk": "mirror",
        "pl": "mirror"
      },
      {
        "en": "around",
        "uk": "around",
        "pl": "around"
      },
      {
        "en": "between",
        "uk": "between",
        "pl": "between"
      },
      {
        "en": "always",
        "uk": "always",
        "pl": "always"
      },
      {
        "en": "better",
        "uk": "better",
        "pl": "better"
      },
      {
        "en": "find",
        "uk": "find",
        "pl": "find"
      },
      {
        "en": "help",
        "uk": "help",
        "pl": "help"
      },
      {
        "en": "high",
        "uk": "high",
        "pl": "high"
      },
      {
        "en": "little",
        "uk": "little",
        "pl": "little"
      },
      {
        "en": "since",
        "uk": "since",
        "pl": "since"
      },
      {
        "en": "another",
        "uk": "another",
        "pl": "another"
      },
      {
        "en": "does",
        "uk": "does",
        "pl": "does"
      },
      {
        "en": "things",
        "uk": "things",
        "pl": "things"
      },
      {
        "en": "under",
        "uk": "under",
        "pl": "under"
      },
      {
        "en": "during",
        "uk": "during",
        "pl": "during"
      },
      {
        "en": "game",
        "uk": "game",
        "pl": "game"
      },
      {
        "en": "thing",
        "uk": "thing",
        "pl": "thing"
      },
      {
        "en": "give",
        "uk": "give",
        "pl": "give"
      },
      {
        "en": "house",
        "uk": "house",
        "pl": "house"
      },
      {
        "en": "place",
        "uk": "place",
        "pl": "place"
      },
      {
        "en": "school",
        "uk": "school",
        "pl": "school"
      },
      {
        "en": "again",
        "uk": "again",
        "pl": "again"
      },
      {
        "en": "next",
        "uk": "next",
        "pl": "next"
      },
      {
        "en": "each",
        "uk": "each",
        "pl": "each"
      },
      {
        "en": "without",
        "uk": "without",
        "pl": "without"
      },
      {
        "en": "against",
        "uk": "against",
        "pl": "against"
      },
      {
        "en": "found",
        "uk": "found",
        "pl": "found"
      },
      {
        "en": "must",
        "uk": "must",
        "pl": "must"
      },
      {
        "en": "show",
        "uk": "show",
        "pl": "show"
      },
      {
        "en": "feel",
        "uk": "feel",
        "pl": "feel"
      },
      {
        "en": "sure",
        "uk": "sure",
        "pl": "sure"
      },
      {
        "en": "team",
        "uk": "team",
        "pl": "team"
      },
      {
        "en": "ever",
        "uk": "ever",
        "pl": "ever"
      },
      {
        "en": "family",
        "uk": "family",
        "pl": "family"
      },
      {
        "en": "keep",
        "uk": "keep",
        "pl": "keep"
      },
      {
        "en": "might",
        "uk": "might",
        "pl": "might"
      },
      {
        "en": "please",
        "uk": "please",
        "pl": "please"
      },
      {
        "en": "money",
        "uk": "money",
        "pl": "money"
      },
      {
        "en": "free",
        "uk": "free",
        "pl": "free"
      },
      {
        "en": "second",
        "uk": "second",
        "pl": "second"
      },
      {
        "en": "someone",
        "uk": "someone",
        "pl": "someone"
      },
      {
        "en": "away",
        "uk": "away",
        "pl": "away"
      },
      {
        "en": "left",
        "uk": "left",
        "pl": "left"
      },
      {
        "en": "number",
        "uk": "number",
        "pl": "number"
      },
      {
        "en": "city",
        "uk": "city",
        "pl": "city"
      },
      {
        "en": "days",
        "uk": "days",
        "pl": "days"
      },
      {
        "en": "name",
        "uk": "name",
        "pl": "name"
      },
      {
        "en": "night",
        "uk": "night",
        "pl": "night"
      },
      {
        "en": "play",
        "uk": "play",
        "pl": "play"
      },
      {
        "en": "until",
        "uk": "until",
        "pl": "until"
      },
      {
        "en": "company",
        "uk": "company",
        "pl": "company"
      },
      {
        "en": "doing",
        "uk": "doing",
        "pl": "doing"
      },
      {
        "en": "real",
        "uk": "real",
        "pl": "real"
      },
      {
        "en": "called",
        "uk": "called",
        "pl": "called"
      },
      {
        "en": "different",
        "uk": "different",
        "pl": "different"
      },
      {
        "en": "having",
        "uk": "having",
        "pl": "having"
      },
      {
        "en": "thought",
        "uk": "thought",
        "pl": "thought"
      },
      {
        "en": "done",
        "uk": "done",
        "pl": "done"
      },
      {
        "en": "however",
        "uk": "however",
        "pl": "however"
      },
      {
        "en": "getting",
        "uk": "getting",
        "pl": "getting"
      },
      {
        "en": "government",
        "uk": "government",
        "pl": "government"
      },
      {
        "en": "group",
        "uk": "group",
        "pl": "group"
      },
      {
        "en": "looking",
        "uk": "looking",
        "pl": "looking"
      },
      {
        "en": "public",
        "uk": "public",
        "pl": "public"
      },
      {
        "en": "women",
        "uk": "women",
        "pl": "women"
      },
      {
        "en": "business",
        "uk": "business",
        "pl": "business"
      },
      {
        "en": "care",
        "uk": "care",
        "pl": "care"
      },
      {
        "en": "start",
        "uk": "start",
        "pl": "start"
      },
      {
        "en": "system",
        "uk": "system",
        "pl": "system"
      },
      {
        "en": "times",
        "uk": "times",
        "pl": "times"
      },
      {
        "en": "week",
        "uk": "week",
        "pl": "week"
      },
      {
        "en": "already",
        "uk": "already",
        "pl": "already"
      },
      {
        "en": "anything",
        "uk": "anything",
        "pl": "anything"
      },
      {
        "en": "case",
        "uk": "case",
        "pl": "case"
      },
      {
        "en": "nothing",
        "uk": "nothing",
        "pl": "nothing"
      },
      {
        "en": "person",
        "uk": "person",
        "pl": "person"
      },
      {
        "en": "today",
        "uk": "today",
        "pl": "today"
      },
      {
        "en": "change",
        "uk": "change",
        "pl": "change"
      },
      {
        "en": "enough",
        "uk": "enough",
        "pl": "enough"
      },
      {
        "en": "everything",
        "uk": "everything",
        "pl": "everything"
      },
      {
        "en": "full",
        "uk": "full",
        "pl": "full"
      },
      {
        "en": "live",
        "uk": "live",
        "pl": "live"
      },
      {
        "en": "making",
        "uk": "making",
        "pl": "making"
      },
      {
        "en": "point",
        "uk": "point",
        "pl": "point"
      },
      {
        "en": "read",
        "uk": "read",
        "pl": "read"
      },
      {
        "en": "told",
        "uk": "told",
        "pl": "told"
      },
      {
        "en": "four",
        "uk": "four",
        "pl": "four"
      },
      {
        "en": "hard",
        "uk": "hard",
        "pl": "hard"
      },
      {
        "en": "mean",
        "uk": "mean",
        "pl": "mean"
      }
    ],
    "Food": [
      {
        "en": "bread",
        "uk": "bread",
        "pl": "bread"
      },
      {
        "en": "milk",
        "uk": "milk",
        "pl": "milk"
      },
      {
        "en": "cheese",
        "uk": "cheese",
        "pl": "cheese"
      },
      {
        "en": "meat",
        "uk": "meat",
        "pl": "meat"
      },
      {
        "en": "fish",
        "uk": "fish",
        "pl": "fish"
      },
      {
        "en": "egg",
        "uk": "egg",
        "pl": "egg"
      },
      {
        "en": "rice",
        "uk": "rice",
        "pl": "rice"
      },
      {
        "en": "soup",
        "uk": "soup",
        "pl": "soup"
      },
      {
        "en": "salad",
        "uk": "salad",
        "pl": "salad"
      },
      {
        "en": "apple",
        "uk": "apple",
        "pl": "apple"
      },
      {
        "en": "banana",
        "uk": "banana",
        "pl": "banana"
      },
      {
        "en": "sugar",
        "uk": "sugar",
        "pl": "sugar"
      },
      {
        "en": "once",
        "uk": "once",
        "pl": "once"
      },
      {
        "en": "support",
        "uk": "support",
        "pl": "support"
      },
      {
        "en": "tell",
        "uk": "tell",
        "pl": "tell"
      },
      {
        "en": "including",
        "uk": "including",
        "pl": "including"
      },
      {
        "en": "music",
        "uk": "music",
        "pl": "music"
      },
      {
        "en": "power",
        "uk": "power",
        "pl": "power"
      },
      {
        "en": "seen",
        "uk": "seen",
        "pl": "seen"
      },
      {
        "en": "states",
        "uk": "states",
        "pl": "states"
      },
      {
        "en": "stop",
        "uk": "stop",
        "pl": "stop"
      },
      {
        "en": "water",
        "uk": "water",
        "pl": "water"
      },
      {
        "en": "based",
        "uk": "based",
        "pl": "based"
      },
      {
        "en": "believe",
        "uk": "believe",
        "pl": "believe"
      },
      {
        "en": "call",
        "uk": "call",
        "pl": "call"
      },
      {
        "en": "head",
        "uk": "head",
        "pl": "head"
      },
      {
        "en": "national",
        "uk": "national",
        "pl": "national"
      },
      {
        "en": "small",
        "uk": "small",
        "pl": "small"
      },
      {
        "en": "took",
        "uk": "took",
        "pl": "took"
      },
      {
        "en": "white",
        "uk": "white",
        "pl": "white"
      },
      {
        "en": "came",
        "uk": "came",
        "pl": "came"
      },
      {
        "en": "side",
        "uk": "side",
        "pl": "side"
      },
      {
        "en": "though",
        "uk": "though",
        "pl": "though"
      },
      {
        "en": "went",
        "uk": "went",
        "pl": "went"
      },
      {
        "en": "actually",
        "uk": "actually",
        "pl": "actually"
      },
      {
        "en": "american",
        "uk": "american",
        "pl": "american"
      },
      {
        "en": "later",
        "uk": "later",
        "pl": "later"
      },
      {
        "en": "less",
        "uk": "less",
        "pl": "less"
      },
      {
        "en": "line",
        "uk": "line",
        "pl": "line"
      },
      {
        "en": "order",
        "uk": "order",
        "pl": "order"
      },
      {
        "en": "party",
        "uk": "party",
        "pl": "party"
      },
      {
        "en": "says",
        "uk": "says",
        "pl": "says"
      },
      {
        "en": "service",
        "uk": "service",
        "pl": "service"
      },
      {
        "en": "country",
        "uk": "country",
        "pl": "country"
      },
      {
        "en": "open",
        "uk": "open",
        "pl": "open"
      },
      {
        "en": "season",
        "uk": "season",
        "pl": "season"
      },
      {
        "en": "shit",
        "uk": "shit",
        "pl": "shit"
      },
      {
        "en": "thank",
        "uk": "thank",
        "pl": "thank"
      },
      {
        "en": "children",
        "uk": "children",
        "pl": "children"
      },
      {
        "en": "everyone",
        "uk": "everyone",
        "pl": "everyone"
      },
      {
        "en": "general",
        "uk": "general",
        "pl": "general"
      },
      {
        "en": "trying",
        "uk": "trying",
        "pl": "trying"
      },
      {
        "en": "united",
        "uk": "united",
        "pl": "united"
      },
      {
        "en": "using",
        "uk": "using",
        "pl": "using"
      },
      {
        "en": "area",
        "uk": "area",
        "pl": "area"
      },
      {
        "en": "black",
        "uk": "black",
        "pl": "black"
      },
      {
        "en": "following",
        "uk": "following",
        "pl": "following"
      },
      {
        "en": "makes",
        "uk": "makes",
        "pl": "makes"
      },
      {
        "en": "together",
        "uk": "together",
        "pl": "together"
      },
      {
        "en": "whole",
        "uk": "whole",
        "pl": "whole"
      },
      {
        "en": "face",
        "uk": "face",
        "pl": "face"
      },
      {
        "en": "five",
        "uk": "five",
        "pl": "five"
      },
      {
        "en": "kind",
        "uk": "kind",
        "pl": "kind"
      },
      {
        "en": "maybe",
        "uk": "maybe",
        "pl": "maybe"
      },
      {
        "en": "president",
        "uk": "president",
        "pl": "president"
      },
      {
        "en": "story",
        "uk": "story",
        "pl": "story"
      },
      {
        "en": "working",
        "uk": "working",
        "pl": "working"
      },
      {
        "en": "course",
        "uk": "course",
        "pl": "course"
      },
      {
        "en": "games",
        "uk": "games",
        "pl": "games"
      },
      {
        "en": "health",
        "uk": "health",
        "pl": "health"
      },
      {
        "en": "hope",
        "uk": "hope",
        "pl": "hope"
      },
      {
        "en": "important",
        "uk": "important",
        "pl": "important"
      },
      {
        "en": "least",
        "uk": "least",
        "pl": "least"
      },
      {
        "en": "means",
        "uk": "means",
        "pl": "means"
      },
      {
        "en": "news",
        "uk": "news",
        "pl": "news"
      },
      {
        "en": "within",
        "uk": "within",
        "pl": "within"
      },
      {
        "en": "able",
        "uk": "able",
        "pl": "able"
      },
      {
        "en": "book",
        "uk": "book",
        "pl": "book"
      },
      {
        "en": "early",
        "uk": "early",
        "pl": "early"
      },
      {
        "en": "friends",
        "uk": "friends",
        "pl": "friends"
      },
      {
        "en": "information",
        "uk": "information",
        "pl": "information"
      },
      {
        "en": "local",
        "uk": "local",
        "pl": "local"
      },
      {
        "en": "post",
        "uk": "post",
        "pl": "post"
      },
      {
        "en": "thanks",
        "uk": "thanks",
        "pl": "thanks"
      },
      {
        "en": "video",
        "uk": "video",
        "pl": "video"
      },
      {
        "en": "young",
        "uk": "young",
        "pl": "young"
      },
      {
        "en": "others",
        "uk": "others",
        "pl": "others"
      },
      {
        "en": "social",
        "uk": "social",
        "pl": "social"
      },
      {
        "en": "talk",
        "uk": "talk",
        "pl": "talk"
      },
      {
        "en": "court",
        "uk": "court",
        "pl": "court"
      },
      {
        "en": "fact",
        "uk": "fact",
        "pl": "fact"
      },
      {
        "en": "given",
        "uk": "given",
        "pl": "given"
      },
      {
        "en": "guys",
        "uk": "guys",
        "pl": "guys"
      },
      {
        "en": "half",
        "uk": "half",
        "pl": "half"
      },
      {
        "en": "hand",
        "uk": "hand",
        "pl": "hand"
      },
      {
        "en": "level",
        "uk": "level",
        "pl": "level"
      },
      {
        "en": "mind",
        "uk": "mind",
        "pl": "mind"
      },
      {
        "en": "often",
        "uk": "often",
        "pl": "often"
      },
      {
        "en": "single",
        "uk": "single",
        "pl": "single"
      },
      {
        "en": "become",
        "uk": "become",
        "pl": "become"
      }
    ]
  },
  "A2": {
    "Travel": [
      {
        "en": "airport",
        "uk": "airport",
        "pl": "airport"
      },
      {
        "en": "passport",
        "uk": "passport",
        "pl": "passport"
      },
      {
        "en": "luggage",
        "uk": "luggage",
        "pl": "luggage"
      },
      {
        "en": "boarding pass",
        "uk": "boarding pass",
        "pl": "boarding pass"
      },
      {
        "en": "platform",
        "uk": "platform",
        "pl": "platform"
      },
      {
        "en": "ticket",
        "uk": "ticket",
        "pl": "ticket"
      },
      {
        "en": "journey",
        "uk": "journey",
        "pl": "journey"
      },
      {
        "en": "hostel",
        "uk": "hostel",
        "pl": "hostel"
      },
      {
        "en": "reservation",
        "uk": "reservation",
        "pl": "reservation"
      },
      {
        "en": "landmark",
        "uk": "landmark",
        "pl": "landmark"
      },
      {
        "en": "guidebook",
        "uk": "guidebook",
        "pl": "guidebook"
      },
      {
        "en": "take off",
        "uk": "take off",
        "pl": "take off"
      },
      {
        "en": "body",
        "uk": "body",
        "pl": "body"
      },
      {
        "en": "coming",
        "uk": "coming",
        "pl": "coming"
      },
      {
        "en": "control",
        "uk": "control",
        "pl": "control"
      },
      {
        "en": "death",
        "uk": "death",
        "pl": "death"
      },
      {
        "en": "food",
        "uk": "food",
        "pl": "food"
      },
      {
        "en": "hours",
        "uk": "hours",
        "pl": "hours"
      },
      {
        "en": "office",
        "uk": "office",
        "pl": "office"
      },
      {
        "en": "problem",
        "uk": "problem",
        "pl": "problem"
      },
      {
        "en": "south",
        "uk": "south",
        "pl": "south"
      },
      {
        "en": "true",
        "uk": "true",
        "pl": "true"
      },
      {
        "en": "almost",
        "uk": "almost",
        "pl": "almost"
      },
      {
        "en": "fuck",
        "uk": "fuck",
        "pl": "fuck"
      },
      {
        "en": "history",
        "uk": "history",
        "pl": "history"
      },
      {
        "en": "known",
        "uk": "known",
        "pl": "known"
      },
      {
        "en": "large",
        "uk": "large",
        "pl": "large"
      },
      {
        "en": "lost",
        "uk": "lost",
        "pl": "lost"
      },
      {
        "en": "research",
        "uk": "research",
        "pl": "research"
      },
      {
        "en": "room",
        "uk": "room",
        "pl": "room"
      },
      {
        "en": "several",
        "uk": "several",
        "pl": "several"
      },
      {
        "en": "started",
        "uk": "started",
        "pl": "started"
      },
      {
        "en": "taking",
        "uk": "taking",
        "pl": "taking"
      },
      {
        "en": "university",
        "uk": "university",
        "pl": "university"
      },
      {
        "en": "wrong",
        "uk": "wrong",
        "pl": "wrong"
      },
      {
        "en": "along",
        "uk": "along",
        "pl": "along"
      },
      {
        "en": "anyone",
        "uk": "anyone",
        "pl": "anyone"
      },
      {
        "en": "else",
        "uk": "else",
        "pl": "else"
      },
      {
        "en": "girl",
        "uk": "girl",
        "pl": "girl"
      },
      {
        "en": "john",
        "uk": "john",
        "pl": "john"
      },
      {
        "en": "matter",
        "uk": "matter",
        "pl": "matter"
      },
      {
        "en": "pretty",
        "uk": "pretty",
        "pl": "pretty"
      },
      {
        "en": "remember",
        "uk": "remember",
        "pl": "remember"
      },
      {
        "en": "friend",
        "uk": "friend",
        "pl": "friend"
      },
      {
        "en": "needs",
        "uk": "needs",
        "pl": "needs"
      },
      {
        "en": "nice",
        "uk": "nice",
        "pl": "nice"
      },
      {
        "en": "playing",
        "uk": "playing",
        "pl": "playing"
      },
      {
        "en": "probably",
        "uk": "probably",
        "pl": "probably"
      },
      {
        "en": "saying",
        "uk": "saying",
        "pl": "saying"
      },
      {
        "en": "understand",
        "uk": "understand",
        "pl": "understand"
      },
      {
        "en": "yeah",
        "uk": "yeah",
        "pl": "yeah"
      },
      {
        "en": "york",
        "uk": "york",
        "pl": "york"
      },
      {
        "en": "class",
        "uk": "class",
        "pl": "class"
      },
      {
        "en": "close",
        "uk": "close",
        "pl": "close"
      },
      {
        "en": "comes",
        "uk": "comes",
        "pl": "comes"
      },
      {
        "en": "idea",
        "uk": "idea",
        "pl": "idea"
      },
      {
        "en": "international",
        "uk": "international",
        "pl": "international"
      },
      {
        "en": "looks",
        "uk": "looks",
        "pl": "looks"
      },
      {
        "en": "past",
        "uk": "past",
        "pl": "past"
      },
      {
        "en": "possible",
        "uk": "possible",
        "pl": "possible"
      },
      {
        "en": "wanted",
        "uk": "wanted",
        "pl": "wanted"
      },
      {
        "en": "cause",
        "uk": "cause",
        "pl": "cause"
      },
      {
        "en": "happy",
        "uk": "happy",
        "pl": "happy"
      },
      {
        "en": "human",
        "uk": "human",
        "pl": "human"
      },
      {
        "en": "members",
        "uk": "members",
        "pl": "members"
      },
      {
        "en": "months",
        "uk": "months",
        "pl": "months"
      },
      {
        "en": "move",
        "uk": "move",
        "pl": "move"
      },
      {
        "en": "question",
        "uk": "question",
        "pl": "question"
      },
      {
        "en": "series",
        "uk": "series",
        "pl": "series"
      },
      {
        "en": "wait",
        "uk": "wait",
        "pl": "wait"
      },
      {
        "en": "woman",
        "uk": "woman",
        "pl": "woman"
      },
      {
        "en": "community",
        "uk": "community",
        "pl": "community"
      },
      {
        "en": "data",
        "uk": "data",
        "pl": "data"
      },
      {
        "en": "late",
        "uk": "late",
        "pl": "late"
      },
      {
        "en": "leave",
        "uk": "leave",
        "pl": "leave"
      },
      {
        "en": "north",
        "uk": "north",
        "pl": "north"
      },
      {
        "en": "special",
        "uk": "special",
        "pl": "special"
      },
      {
        "en": "watch",
        "uk": "watch",
        "pl": "watch"
      },
      {
        "en": "either",
        "uk": "either",
        "pl": "either"
      },
      {
        "en": "fucking",
        "uk": "fucking",
        "pl": "fucking"
      },
      {
        "en": "future",
        "uk": "future",
        "pl": "future"
      },
      {
        "en": "light",
        "uk": "light",
        "pl": "light"
      },
      {
        "en": "million",
        "uk": "million",
        "pl": "million"
      },
      {
        "en": "morning",
        "uk": "morning",
        "pl": "morning"
      },
      {
        "en": "police",
        "uk": "police",
        "pl": "police"
      },
      {
        "en": "short",
        "uk": "short",
        "pl": "short"
      },
      {
        "en": "stay",
        "uk": "stay",
        "pl": "stay"
      },
      {
        "en": "taken",
        "uk": "taken",
        "pl": "taken"
      },
      {
        "en": "deal",
        "uk": "deal",
        "pl": "deal"
      },
      {
        "en": "rather",
        "uk": "rather",
        "pl": "rather"
      },
      {
        "en": "reason",
        "uk": "reason",
        "pl": "reason"
      },
      {
        "en": "report",
        "uk": "report",
        "pl": "report"
      },
      {
        "en": "soon",
        "uk": "soon",
        "pl": "soon"
      },
      {
        "en": "third",
        "uk": "third",
        "pl": "third"
      },
      {
        "en": "turn",
        "uk": "turn",
        "pl": "turn"
      },
      {
        "en": "whether",
        "uk": "whether",
        "pl": "whether"
      },
      {
        "en": "among",
        "uk": "among",
        "pl": "among"
      },
      {
        "en": "check",
        "uk": "check",
        "pl": "check"
      },
      {
        "en": "development",
        "uk": "development",
        "pl": "development"
      },
      {
        "en": "form",
        "uk": "form",
        "pl": "form"
      }
    ],
    "Work": [
      {
        "en": "that",
        "uk": "that",
        "pl": "that"
      },
      {
        "en": "meeting",
        "uk": "meeting",
        "pl": "meeting"
      },
      {
        "en": "deadline",
        "uk": "deadline",
        "pl": "deadline"
      },
      {
        "en": "salary",
        "uk": "salary",
        "pl": "salary"
      },
      {
        "en": "contract",
        "uk": "contract",
        "pl": "contract"
      },
      {
        "en": "manager",
        "uk": "manager",
        "pl": "manager"
      },
      {
        "en": "colleague",
        "uk": "colleague",
        "pl": "colleague"
      },
      {
        "en": "shift",
        "uk": "shift",
        "pl": "shift"
      },
      {
        "en": "interview",
        "uk": "interview",
        "pl": "interview"
      },
      {
        "en": "promotion",
        "uk": "promotion",
        "pl": "promotion"
      },
      {
        "en": "overtime",
        "uk": "overtime",
        "pl": "overtime"
      },
      {
        "en": "feedback",
        "uk": "feedback",
        "pl": "feedback"
      },
      {
        "en": "further",
        "uk": "further",
        "pl": "further"
      },
      {
        "en": "heart",
        "uk": "heart",
        "pl": "heart"
      },
      {
        "en": "minutes",
        "uk": "minutes",
        "pl": "minutes"
      },
      {
        "en": "myself",
        "uk": "myself",
        "pl": "myself"
      },
      {
        "en": "services",
        "uk": "services",
        "pl": "services"
      },
      {
        "en": "yourself",
        "uk": "yourself",
        "pl": "yourself"
      },
      {
        "en": "although",
        "uk": "although",
        "pl": "although"
      },
      {
        "en": "asked",
        "uk": "asked",
        "pl": "asked"
      },
      {
        "en": "child",
        "uk": "child",
        "pl": "child"
      },
      {
        "en": "fire",
        "uk": "fire",
        "pl": "fire"
      },
      {
        "en": "living",
        "uk": "living",
        "pl": "living"
      },
      {
        "en": "major",
        "uk": "major",
        "pl": "major"
      },
      {
        "en": "media",
        "uk": "media",
        "pl": "media"
      },
      {
        "en": "phone",
        "uk": "phone",
        "pl": "phone"
      },
      {
        "en": "players",
        "uk": "players",
        "pl": "players"
      },
      {
        "en": "behind",
        "uk": "behind",
        "pl": "behind"
      },
      {
        "en": "building",
        "uk": "building",
        "pl": "building"
      },
      {
        "en": "easy",
        "uk": "easy",
        "pl": "easy"
      },
      {
        "en": "gonna",
        "uk": "gonna",
        "pl": "gonna"
      },
      {
        "en": "market",
        "uk": "market",
        "pl": "market"
      },
      {
        "en": "near",
        "uk": "near",
        "pl": "near"
      },
      {
        "en": "plan",
        "uk": "plan",
        "pl": "plan"
      },
      {
        "en": "political",
        "uk": "political",
        "pl": "political"
      },
      {
        "en": "quite",
        "uk": "quite",
        "pl": "quite"
      },
      {
        "en": "talking",
        "uk": "talking",
        "pl": "talking"
      },
      {
        "en": "west",
        "uk": "west",
        "pl": "west"
      },
      {
        "en": "works",
        "uk": "works",
        "pl": "works"
      },
      {
        "en": "according",
        "uk": "according",
        "pl": "according"
      },
      {
        "en": "available",
        "uk": "available",
        "pl": "available"
      },
      {
        "en": "education",
        "uk": "education",
        "pl": "education"
      },
      {
        "en": "final",
        "uk": "final",
        "pl": "final"
      },
      {
        "en": "former",
        "uk": "former",
        "pl": "former"
      },
      {
        "en": "front",
        "uk": "front",
        "pl": "front"
      },
      {
        "en": "kids",
        "uk": "kids",
        "pl": "kids"
      },
      {
        "en": "list",
        "uk": "list",
        "pl": "list"
      },
      {
        "en": "ready",
        "uk": "ready",
        "pl": "ready"
      },
      {
        "en": "sometimes",
        "uk": "sometimes",
        "pl": "sometimes"
      },
      {
        "en": "street",
        "uk": "street",
        "pl": "street"
      },
      {
        "en": "bring",
        "uk": "bring",
        "pl": "bring"
      },
      {
        "en": "college",
        "uk": "college",
        "pl": "college"
      },
      {
        "en": "current",
        "uk": "current",
        "pl": "current"
      },
      {
        "en": "example",
        "uk": "example",
        "pl": "example"
      },
      {
        "en": "experience",
        "uk": "experience",
        "pl": "experience"
      },
      {
        "en": "heard",
        "uk": "heard",
        "pl": "heard"
      },
      {
        "en": "london",
        "uk": "london",
        "pl": "london"
      },
      {
        "en": "meet",
        "uk": "meet",
        "pl": "meet"
      },
      {
        "en": "program",
        "uk": "program",
        "pl": "program"
      },
      {
        "en": "type",
        "uk": "type",
        "pl": "type"
      },
      {
        "en": "baby",
        "uk": "baby",
        "pl": "baby"
      },
      {
        "en": "chance",
        "uk": "chance",
        "pl": "chance"
      },
      {
        "en": "father",
        "uk": "father",
        "pl": "father"
      },
      {
        "en": "march",
        "uk": "march",
        "pl": "march"
      },
      {
        "en": "process",
        "uk": "process",
        "pl": "process"
      },
      {
        "en": "song",
        "uk": "song",
        "pl": "song"
      },
      {
        "en": "study",
        "uk": "study",
        "pl": "study"
      },
      {
        "en": "word",
        "uk": "word",
        "pl": "word"
      },
      {
        "en": "across",
        "uk": "across",
        "pl": "across"
      },
      {
        "en": "action",
        "uk": "action",
        "pl": "action"
      },
      {
        "en": "clear",
        "uk": "clear",
        "pl": "clear"
      },
      {
        "en": "gave",
        "uk": "gave",
        "pl": "gave"
      },
      {
        "en": "gets",
        "uk": "gets",
        "pl": "gets"
      },
      {
        "en": "himself",
        "uk": "himself",
        "pl": "himself"
      },
      {
        "en": "month",
        "uk": "month",
        "pl": "month"
      },
      {
        "en": "outside",
        "uk": "outside",
        "pl": "outside"
      },
      {
        "en": "self",
        "uk": "self",
        "pl": "self"
      },
      {
        "en": "students",
        "uk": "students",
        "pl": "students"
      },
      {
        "en": "words",
        "uk": "words",
        "pl": "words"
      },
      {
        "en": "board",
        "uk": "board",
        "pl": "board"
      },
      {
        "en": "cost",
        "uk": "cost",
        "pl": "cost"
      },
      {
        "en": "field",
        "uk": "field",
        "pl": "field"
      },
      {
        "en": "held",
        "uk": "held",
        "pl": "held"
      },
      {
        "en": "instead",
        "uk": "instead",
        "pl": "instead"
      },
      {
        "en": "main",
        "uk": "main",
        "pl": "main"
      },
      {
        "en": "moment",
        "uk": "moment",
        "pl": "moment"
      },
      {
        "en": "mother",
        "uk": "mother",
        "pl": "mother"
      },
      {
        "en": "road",
        "uk": "road",
        "pl": "road"
      },
      {
        "en": "seems",
        "uk": "seems",
        "pl": "seems"
      },
      {
        "en": "thinking",
        "uk": "thinking",
        "pl": "thinking"
      },
      {
        "en": "town",
        "uk": "town",
        "pl": "town"
      },
      {
        "en": "wants",
        "uk": "wants",
        "pl": "wants"
      },
      {
        "en": "department",
        "uk": "department",
        "pl": "department"
      },
      {
        "en": "energy",
        "uk": "energy",
        "pl": "energy"
      },
      {
        "en": "fight",
        "uk": "fight",
        "pl": "fight"
      },
      {
        "en": "fine",
        "uk": "fine",
        "pl": "fine"
      },
      {
        "en": "force",
        "uk": "force",
        "pl": "force"
      },
      {
        "en": "hear",
        "uk": "hear",
        "pl": "hear"
      },
      {
        "en": "issue",
        "uk": "issue",
        "pl": "issue"
      },
      {
        "en": "played",
        "uk": "played",
        "pl": "played"
      }
    ],
    "Health": [
      {
        "en": "doctor",
        "uk": "doctor",
        "pl": "doctor"
      },
      {
        "en": "nurse",
        "uk": "nurse",
        "pl": "nurse"
      },
      {
        "en": "clinic",
        "uk": "clinic",
        "pl": "clinic"
      },
      {
        "en": "medicine",
        "uk": "medicine",
        "pl": "medicine"
      },
      {
        "en": "fever",
        "uk": "fever",
        "pl": "fever"
      },
      {
        "en": "cough",
        "uk": "cough",
        "pl": "cough"
      },
      {
        "en": "appointment",
        "uk": "appointment",
        "pl": "appointment"
      },
      {
        "en": "diet",
        "uk": "diet",
        "pl": "diet"
      },
      {
        "en": "vitamin",
        "uk": "vitamin",
        "pl": "vitamin"
      },
      {
        "en": "injury",
        "uk": "injury",
        "pl": "injury"
      },
      {
        "en": "recovery",
        "uk": "recovery",
        "pl": "recovery"
      },
      {
        "en": "headache",
        "uk": "headache",
        "pl": "headache"
      },
      {
        "en": "points",
        "uk": "points",
        "pl": "points"
      },
      {
        "en": "price",
        "uk": "price",
        "pl": "price"
      },
      {
        "en": "rest",
        "uk": "rest",
        "pl": "rest"
      },
      {
        "en": "results",
        "uk": "results",
        "pl": "results"
      },
      {
        "en": "running",
        "uk": "running",
        "pl": "running"
      },
      {
        "en": "shows",
        "uk": "shows",
        "pl": "shows"
      },
      {
        "en": "space",
        "uk": "space",
        "pl": "space"
      },
      {
        "en": "summer",
        "uk": "summer",
        "pl": "summer"
      },
      {
        "en": "term",
        "uk": "term",
        "pl": "term"
      },
      {
        "en": "wife",
        "uk": "wife",
        "pl": "wife"
      },
      {
        "en": "america",
        "uk": "america",
        "pl": "america"
      },
      {
        "en": "beautiful",
        "uk": "beautiful",
        "pl": "beautiful"
      },
      {
        "en": "date",
        "uk": "date",
        "pl": "date"
      },
      {
        "en": "goes",
        "uk": "goes",
        "pl": "goes"
      },
      {
        "en": "killed",
        "uk": "killed",
        "pl": "killed"
      },
      {
        "en": "land",
        "uk": "land",
        "pl": "land"
      },
      {
        "en": "miss",
        "uk": "miss",
        "pl": "miss"
      },
      {
        "en": "project",
        "uk": "project",
        "pl": "project"
      },
      {
        "en": "shot",
        "uk": "shot",
        "pl": "shot"
      },
      {
        "en": "site",
        "uk": "site",
        "pl": "site"
      },
      {
        "en": "strong",
        "uk": "strong",
        "pl": "strong"
      },
      {
        "en": "account",
        "uk": "account",
        "pl": "account"
      },
      {
        "en": "especially",
        "uk": "especially",
        "pl": "especially"
      },
      {
        "en": "eyes",
        "uk": "eyes",
        "pl": "eyes"
      },
      {
        "en": "include",
        "uk": "include",
        "pl": "include"
      },
      {
        "en": "june",
        "uk": "june",
        "pl": "june"
      },
      {
        "en": "parents",
        "uk": "parents",
        "pl": "parents"
      },
      {
        "en": "period",
        "uk": "period",
        "pl": "period"
      },
      {
        "en": "position",
        "uk": "position",
        "pl": "position"
      },
      {
        "en": "record",
        "uk": "record",
        "pl": "record"
      },
      {
        "en": "similar",
        "uk": "similar",
        "pl": "similar"
      },
      {
        "en": "total",
        "uk": "total",
        "pl": "total"
      },
      {
        "en": "above",
        "uk": "above",
        "pl": "above"
      },
      {
        "en": "club",
        "uk": "club",
        "pl": "club"
      },
      {
        "en": "common",
        "uk": "common",
        "pl": "common"
      },
      {
        "en": "died",
        "uk": "died",
        "pl": "died"
      },
      {
        "en": "film",
        "uk": "film",
        "pl": "film"
      },
      {
        "en": "happened",
        "uk": "happened",
        "pl": "happened"
      },
      {
        "en": "knew",
        "uk": "knew",
        "pl": "knew"
      },
      {
        "en": "lead",
        "uk": "lead",
        "pl": "lead"
      },
      {
        "en": "likely",
        "uk": "likely",
        "pl": "likely"
      },
      {
        "en": "military",
        "uk": "military",
        "pl": "military"
      },
      {
        "en": "perfect",
        "uk": "perfect",
        "pl": "perfect"
      },
      {
        "en": "personal",
        "uk": "personal",
        "pl": "personal"
      },
      {
        "en": "security",
        "uk": "security",
        "pl": "security"
      },
      {
        "en": "share",
        "uk": "share",
        "pl": "share"
      },
      {
        "en": "april",
        "uk": "april",
        "pl": "april"
      },
      {
        "en": "center",
        "uk": "center",
        "pl": "center"
      },
      {
        "en": "county",
        "uk": "county",
        "pl": "county"
      },
      {
        "en": "couple",
        "uk": "couple",
        "pl": "couple"
      },
      {
        "en": "dead",
        "uk": "dead",
        "pl": "dead"
      },
      {
        "en": "english",
        "uk": "english",
        "pl": "english"
      },
      {
        "en": "happen",
        "uk": "happen",
        "pl": "happen"
      },
      {
        "en": "hold",
        "uk": "hold",
        "pl": "hold"
      },
      {
        "en": "industry",
        "uk": "industry",
        "pl": "industry"
      },
      {
        "en": "inside",
        "uk": "inside",
        "pl": "inside"
      },
      {
        "en": "issues",
        "uk": "issues",
        "pl": "issues"
      },
      {
        "en": "online",
        "uk": "online",
        "pl": "online"
      },
      {
        "en": "player",
        "uk": "player",
        "pl": "player"
      },
      {
        "en": "private",
        "uk": "private",
        "pl": "private"
      },
      {
        "en": "problems",
        "uk": "problems",
        "pl": "problems"
      },
      {
        "en": "return",
        "uk": "return",
        "pl": "return"
      },
      {
        "en": "rights",
        "uk": "rights",
        "pl": "rights"
      },
      {
        "en": "sense",
        "uk": "sense",
        "pl": "sense"
      },
      {
        "en": "star",
        "uk": "star",
        "pl": "star"
      },
      {
        "en": "test",
        "uk": "test",
        "pl": "test"
      },
      {
        "en": "view",
        "uk": "view",
        "pl": "view"
      },
      {
        "en": "weeks",
        "uk": "weeks",
        "pl": "weeks"
      },
      {
        "en": "break",
        "uk": "break",
        "pl": "break"
      },
      {
        "en": "british",
        "uk": "british",
        "pl": "british"
      },
      {
        "en": "companies",
        "uk": "companies",
        "pl": "companies"
      },
      {
        "en": "event",
        "uk": "event",
        "pl": "event"
      },
      {
        "en": "higher",
        "uk": "higher",
        "pl": "higher"
      },
      {
        "en": "hour",
        "uk": "hour",
        "pl": "hour"
      },
      {
        "en": "member",
        "uk": "member",
        "pl": "member"
      },
      {
        "en": "middle",
        "uk": "middle",
        "pl": "middle"
      },
      {
        "en": "needed",
        "uk": "needed",
        "pl": "needed"
      },
      {
        "en": "present",
        "uk": "present",
        "pl": "present"
      },
      {
        "en": "result",
        "uk": "result",
        "pl": "result"
      },
      {
        "en": "sorry",
        "uk": "sorry",
        "pl": "sorry"
      },
      {
        "en": "takes",
        "uk": "takes",
        "pl": "takes"
      },
      {
        "en": "training",
        "uk": "training",
        "pl": "training"
      },
      {
        "en": "wish",
        "uk": "wish",
        "pl": "wish"
      },
      {
        "en": "answer",
        "uk": "answer",
        "pl": "answer"
      },
      {
        "en": "design",
        "uk": "design",
        "pl": "design"
      },
      {
        "en": "finally",
        "uk": "finally",
        "pl": "finally"
      },
      {
        "en": "girls",
        "uk": "girls",
        "pl": "girls"
      },
      {
        "en": "gold",
        "uk": "gold",
        "pl": "gold"
      }
    ]
  },
  "B1": {
    "Environment": [
      {
        "en": "pollution",
        "uk": "pollution",
        "pl": "pollution"
      },
      {
        "en": "recycling",
        "uk": "recycling",
        "pl": "recycling"
      },
      {
        "en": "wildlife",
        "uk": "wildlife",
        "pl": "wildlife"
      },
      {
        "en": "drought",
        "uk": "drought",
        "pl": "drought"
      },
      {
        "en": "flood",
        "uk": "flood",
        "pl": "flood"
      },
      {
        "en": "emission",
        "uk": "emission",
        "pl": "emission"
      },
      {
        "en": "habitat",
        "uk": "habitat",
        "pl": "habitat"
      },
      {
        "en": "ecosystem",
        "uk": "ecosystem",
        "pl": "ecosystem"
      },
      {
        "en": "climate",
        "uk": "climate",
        "pl": "climate"
      },
      {
        "en": "landfill",
        "uk": "landfill",
        "pl": "landfill"
      },
      {
        "en": "conservation",
        "uk": "conservation",
        "pl": "conservation"
      },
      {
        "en": "renewable",
        "uk": "renewable",
        "pl": "renewable"
      },
      {
        "en": "gone",
        "uk": "gone",
        "pl": "gone"
      },
      {
        "en": "guess",
        "uk": "guess",
        "pl": "guess"
      },
      {
        "en": "interest",
        "uk": "interest",
        "pl": "interest"
      },
      {
        "en": "july",
        "uk": "july",
        "pl": "july"
      },
      {
        "en": "king",
        "uk": "king",
        "pl": "king"
      },
      {
        "en": "learn",
        "uk": "learn",
        "pl": "learn"
      },
      {
        "en": "policy",
        "uk": "policy",
        "pl": "policy"
      },
      {
        "en": "society",
        "uk": "society",
        "pl": "society"
      },
      {
        "en": "added",
        "uk": "added",
        "pl": "added"
      },
      {
        "en": "alone",
        "uk": "alone",
        "pl": "alone"
      },
      {
        "en": "average",
        "uk": "average",
        "pl": "average"
      },
      {
        "en": "bank",
        "uk": "bank",
        "pl": "bank"
      },
      {
        "en": "brought",
        "uk": "brought",
        "pl": "brought"
      },
      {
        "en": "certain",
        "uk": "certain",
        "pl": "certain"
      },
      {
        "en": "church",
        "uk": "church",
        "pl": "church"
      },
      {
        "en": "east",
        "uk": "east",
        "pl": "east"
      },
      {
        "en": "hands",
        "uk": "hands",
        "pl": "hands"
      },
      {
        "en": "longer",
        "uk": "longer",
        "pl": "longer"
      },
      {
        "en": "medical",
        "uk": "medical",
        "pl": "medical"
      },
      {
        "en": "movie",
        "uk": "movie",
        "pl": "movie"
      },
      {
        "en": "original",
        "uk": "original",
        "pl": "original"
      },
      {
        "en": "park",
        "uk": "park",
        "pl": "park"
      },
      {
        "en": "performance",
        "uk": "performance",
        "pl": "performance"
      },
      {
        "en": "press",
        "uk": "press",
        "pl": "press"
      },
      {
        "en": "received",
        "uk": "received",
        "pl": "received"
      },
      {
        "en": "role",
        "uk": "role",
        "pl": "role"
      },
      {
        "en": "sent",
        "uk": "sent",
        "pl": "sent"
      },
      {
        "en": "themselves",
        "uk": "themselves",
        "pl": "themselves"
      },
      {
        "en": "tried",
        "uk": "tried",
        "pl": "tried"
      },
      {
        "en": "worked",
        "uk": "worked",
        "pl": "worked"
      },
      {
        "en": "worth",
        "uk": "worth",
        "pl": "worth"
      },
      {
        "en": "areas",
        "uk": "areas",
        "pl": "areas"
      },
      {
        "en": "became",
        "uk": "became",
        "pl": "became"
      },
      {
        "en": "bill",
        "uk": "bill",
        "pl": "bill"
      },
      {
        "en": "books",
        "uk": "books",
        "pl": "books"
      },
      {
        "en": "cool",
        "uk": "cool",
        "pl": "cool"
      },
      {
        "en": "director",
        "uk": "director",
        "pl": "director"
      },
      {
        "en": "exactly",
        "uk": "exactly",
        "pl": "exactly"
      },
      {
        "en": "giving",
        "uk": "giving",
        "pl": "giving"
      },
      {
        "en": "ground",
        "uk": "ground",
        "pl": "ground"
      },
      {
        "en": "meeting",
        "uk": "meeting",
        "pl": "meeting"
      },
      {
        "en": "provide",
        "uk": "provide",
        "pl": "provide"
      },
      {
        "en": "questions",
        "uk": "questions",
        "pl": "questions"
      },
      {
        "en": "relationship",
        "uk": "relationship",
        "pl": "relationship"
      },
      {
        "en": "september",
        "uk": "september",
        "pl": "september"
      },
      {
        "en": "sound",
        "uk": "sound",
        "pl": "sound"
      },
      {
        "en": "source",
        "uk": "source",
        "pl": "source"
      },
      {
        "en": "usually",
        "uk": "usually",
        "pl": "usually"
      },
      {
        "en": "value",
        "uk": "value",
        "pl": "value"
      },
      {
        "en": "evidence",
        "uk": "evidence",
        "pl": "evidence"
      },
      {
        "en": "follow",
        "uk": "follow",
        "pl": "follow"
      },
      {
        "en": "lives",
        "uk": "lives",
        "pl": "lives"
      },
      {
        "en": "official",
        "uk": "official",
        "pl": "official"
      },
      {
        "en": "production",
        "uk": "production",
        "pl": "production"
      },
      {
        "en": "rate",
        "uk": "rate",
        "pl": "rate"
      },
      {
        "en": "reading",
        "uk": "reading",
        "pl": "reading"
      },
      {
        "en": "round",
        "uk": "round",
        "pl": "round"
      },
      {
        "en": "save",
        "uk": "save",
        "pl": "save"
      },
      {
        "en": "stand",
        "uk": "stand",
        "pl": "stand"
      },
      {
        "en": "stuff",
        "uk": "stuff",
        "pl": "stuff"
      },
      {
        "en": "whatever",
        "uk": "whatever",
        "pl": "whatever"
      },
      {
        "en": "amount",
        "uk": "amount",
        "pl": "amount"
      },
      {
        "en": "blue",
        "uk": "blue",
        "pl": "blue"
      },
      {
        "en": "countries",
        "uk": "countries",
        "pl": "countries"
      },
      {
        "en": "david",
        "uk": "david",
        "pl": "david"
      },
      {
        "en": "drive",
        "uk": "drive",
        "pl": "drive"
      },
      {
        "en": "fall",
        "uk": "fall",
        "pl": "fall"
      },
      {
        "en": "fast",
        "uk": "fast",
        "pl": "fast"
      },
      {
        "en": "federal",
        "uk": "federal",
        "pl": "federal"
      },
      {
        "en": "feeling",
        "uk": "feeling",
        "pl": "feeling"
      },
      {
        "en": "felt",
        "uk": "felt",
        "pl": "felt"
      },
      {
        "en": "green",
        "uk": "green",
        "pl": "green"
      },
      {
        "en": "league",
        "uk": "league",
        "pl": "league"
      },
      {
        "en": "management",
        "uk": "management",
        "pl": "management"
      },
      {
        "en": "match",
        "uk": "match",
        "pl": "match"
      },
      {
        "en": "model",
        "uk": "model",
        "pl": "model"
      },
      {
        "en": "picture",
        "uk": "picture",
        "pl": "picture"
      },
      {
        "en": "size",
        "uk": "size",
        "pl": "size"
      },
      {
        "en": "step",
        "uk": "step",
        "pl": "step"
      },
      {
        "en": "trust",
        "uk": "trust",
        "pl": "trust"
      },
      {
        "en": "central",
        "uk": "central",
        "pl": "central"
      },
      {
        "en": "changes",
        "uk": "changes",
        "pl": "changes"
      },
      {
        "en": "england",
        "uk": "england",
        "pl": "england"
      },
      {
        "en": "forward",
        "uk": "forward",
        "pl": "forward"
      },
      {
        "en": "groups",
        "uk": "groups",
        "pl": "groups"
      },
      {
        "en": "page",
        "uk": "page",
        "pl": "page"
      },
      {
        "en": "paid",
        "uk": "paid",
        "pl": "paid"
      },
      {
        "en": "range",
        "uk": "range",
        "pl": "range"
      }
    ],
    "Technology": [
      {
        "en": "software",
        "uk": "software",
        "pl": "software"
      },
      {
        "en": "hardware",
        "uk": "hardware",
        "pl": "hardware"
      },
      {
        "en": "network",
        "uk": "network",
        "pl": "network"
      },
      {
        "en": "database",
        "uk": "database",
        "pl": "database"
      },
      {
        "en": "password",
        "uk": "password",
        "pl": "password"
      },
      {
        "en": "browser",
        "uk": "browser",
        "pl": "browser"
      },
      {
        "en": "download",
        "uk": "download",
        "pl": "download"
      },
      {
        "en": "upload",
        "uk": "upload",
        "pl": "upload"
      },
      {
        "en": "device",
        "uk": "device",
        "pl": "device"
      },
      {
        "en": "feature",
        "uk": "feature",
        "pl": "feature"
      },
      {
        "en": "update",
        "uk": "update",
        "pl": "update"
      },
      {
        "en": "shortcut",
        "uk": "shortcut",
        "pl": "shortcut"
      },
      {
        "en": "review",
        "uk": "review",
        "pl": "review"
      },
      {
        "en": "science",
        "uk": "science",
        "pl": "science"
      },
      {
        "en": "trade",
        "uk": "trade",
        "pl": "trade"
      },
      {
        "en": "upon",
        "uk": "upon",
        "pl": "upon"
      },
      {
        "en": "various",
        "uk": "various",
        "pl": "various"
      },
      {
        "en": "attention",
        "uk": "attention",
        "pl": "attention"
      },
      {
        "en": "brother",
        "uk": "brother",
        "pl": "brother"
      },
      {
        "en": "cannot",
        "uk": "cannot",
        "pl": "cannot"
      },
      {
        "en": "character",
        "uk": "character",
        "pl": "character"
      },
      {
        "en": "chief",
        "uk": "chief",
        "pl": "chief"
      },
      {
        "en": "football",
        "uk": "football",
        "pl": "football"
      },
      {
        "en": "hate",
        "uk": "hate",
        "pl": "hate"
      },
      {
        "en": "james",
        "uk": "james",
        "pl": "james"
      },
      {
        "en": "looked",
        "uk": "looked",
        "pl": "looked"
      },
      {
        "en": "lower",
        "uk": "lower",
        "pl": "lower"
      },
      {
        "en": "natural",
        "uk": "natural",
        "pl": "natural"
      },
      {
        "en": "october",
        "uk": "october",
        "pl": "october"
      },
      {
        "en": "property",
        "uk": "property",
        "pl": "property"
      },
      {
        "en": "quality",
        "uk": "quality",
        "pl": "quality"
      },
      {
        "en": "send",
        "uk": "send",
        "pl": "send"
      },
      {
        "en": "style",
        "uk": "style",
        "pl": "style"
      },
      {
        "en": "vote",
        "uk": "vote",
        "pl": "vote"
      },
      {
        "en": "amazing",
        "uk": "amazing",
        "pl": "amazing"
      },
      {
        "en": "august",
        "uk": "august",
        "pl": "august"
      },
      {
        "en": "blood",
        "uk": "blood",
        "pl": "blood"
      },
      {
        "en": "china",
        "uk": "china",
        "pl": "china"
      },
      {
        "en": "complete",
        "uk": "complete",
        "pl": "complete"
      },
      {
        "en": "economic",
        "uk": "economic",
        "pl": "economic"
      },
      {
        "en": "hell",
        "uk": "hell",
        "pl": "hell"
      },
      {
        "en": "involved",
        "uk": "involved",
        "pl": "involved"
      },
      {
        "en": "itself",
        "uk": "itself",
        "pl": "itself"
      },
      {
        "en": "language",
        "uk": "language",
        "pl": "language"
      },
      {
        "en": "lord",
        "uk": "lord",
        "pl": "lord"
      },
      {
        "en": "november",
        "uk": "november",
        "pl": "november"
      },
      {
        "en": "related",
        "uk": "related",
        "pl": "related"
      },
      {
        "en": "serious",
        "uk": "serious",
        "pl": "serious"
      },
      {
        "en": "stage",
        "uk": "stage",
        "pl": "stage"
      },
      {
        "en": "terms",
        "uk": "terms",
        "pl": "terms"
      },
      {
        "en": "title",
        "uk": "title",
        "pl": "title"
      },
      {
        "en": "article",
        "uk": "article",
        "pl": "article"
      },
      {
        "en": "attack",
        "uk": "attack",
        "pl": "attack"
      },
      {
        "en": "born",
        "uk": "born",
        "pl": "born"
      },
      {
        "en": "damn",
        "uk": "damn",
        "pl": "damn"
      },
      {
        "en": "decided",
        "uk": "decided",
        "pl": "decided"
      },
      {
        "en": "decision",
        "uk": "decision",
        "pl": "decision"
      },
      {
        "en": "enjoy",
        "uk": "enjoy",
        "pl": "enjoy"
      },
      {
        "en": "entire",
        "uk": "entire",
        "pl": "entire"
      },
      {
        "en": "french",
        "uk": "french",
        "pl": "french"
      },
      {
        "en": "january",
        "uk": "january",
        "pl": "january"
      },
      {
        "en": "kill",
        "uk": "kill",
        "pl": "kill"
      },
      {
        "en": "perhaps",
        "uk": "perhaps",
        "pl": "perhaps"
      },
      {
        "en": "poor",
        "uk": "poor",
        "pl": "poor"
      },
      {
        "en": "release",
        "uk": "release",
        "pl": "release"
      },
      {
        "en": "situation",
        "uk": "situation",
        "pl": "situation"
      },
      {
        "en": "technology",
        "uk": "technology",
        "pl": "technology"
      },
      {
        "en": "turned",
        "uk": "turned",
        "pl": "turned"
      },
      {
        "en": "website",
        "uk": "website",
        "pl": "website"
      },
      {
        "en": "written",
        "uk": "written",
        "pl": "written"
      },
      {
        "en": "choice",
        "uk": "choice",
        "pl": "choice"
      },
      {
        "en": "code",
        "uk": "code",
        "pl": "code"
      },
      {
        "en": "considered",
        "uk": "considered",
        "pl": "considered"
      },
      {
        "en": "continue",
        "uk": "continue",
        "pl": "continue"
      },
      {
        "en": "council",
        "uk": "council",
        "pl": "council"
      },
      {
        "en": "cover",
        "uk": "cover",
        "pl": "cover"
      },
      {
        "en": "currently",
        "uk": "currently",
        "pl": "currently"
      },
      {
        "en": "door",
        "uk": "door",
        "pl": "door"
      },
      {
        "en": "election",
        "uk": "election",
        "pl": "election"
      },
      {
        "en": "european",
        "uk": "european",
        "pl": "european"
      },
      {
        "en": "events",
        "uk": "events",
        "pl": "events"
      },
      {
        "en": "financial",
        "uk": "financial",
        "pl": "financial"
      },
      {
        "en": "foreign",
        "uk": "foreign",
        "pl": "foreign"
      },
      {
        "en": "hair",
        "uk": "hair",
        "pl": "hair"
      },
      {
        "en": "increase",
        "uk": "increase",
        "pl": "increase"
      },
      {
        "en": "legal",
        "uk": "legal",
        "pl": "legal"
      },
      {
        "en": "lose",
        "uk": "lose",
        "pl": "lose"
      },
      {
        "en": "michael",
        "uk": "michael",
        "pl": "michael"
      },
      {
        "en": "pick",
        "uk": "pick",
        "pl": "pick"
      },
      {
        "en": "race",
        "uk": "race",
        "pl": "race"
      },
      {
        "en": "seem",
        "uk": "seem",
        "pl": "seem"
      },
      {
        "en": "seven",
        "uk": "seven",
        "pl": "seven"
      },
      {
        "en": "sign",
        "uk": "sign",
        "pl": "sign"
      },
      {
        "en": "simple",
        "uk": "simple",
        "pl": "simple"
      },
      {
        "en": "simply",
        "uk": "simply",
        "pl": "simply"
      },
      {
        "en": "staff",
        "uk": "staff",
        "pl": "staff"
      },
      {
        "en": "super",
        "uk": "super",
        "pl": "super"
      },
      {
        "en": "union",
        "uk": "union",
        "pl": "union"
      },
      {
        "en": "walk",
        "uk": "walk",
        "pl": "walk"
      },
      {
        "en": "washington",
        "uk": "washington",
        "pl": "washington"
      }
    ],
    "Society": [
      {
        "en": "community",
        "uk": "community",
        "pl": "community"
      },
      {
        "en": "volunteer",
        "uk": "volunteer",
        "pl": "volunteer"
      },
      {
        "en": "charity",
        "uk": "charity",
        "pl": "charity"
      },
      {
        "en": "equality",
        "uk": "equality",
        "pl": "equality"
      },
      {
        "en": "justice",
        "uk": "justice",
        "pl": "justice"
      },
      {
        "en": "campaign",
        "uk": "campaign",
        "pl": "campaign"
      },
      {
        "en": "that",
        "uk": "that",
        "pl": "that"
      },
      {
        "en": "citizen",
        "uk": "citizen",
        "pl": "citizen"
      },
      {
        "en": "neighborhood",
        "uk": "neighborhood",
        "pl": "neighborhood"
      },
      {
        "en": "awareness",
        "uk": "awareness",
        "pl": "awareness"
      },
      {
        "en": "support",
        "uk": "support",
        "pl": "support"
      },
      {
        "en": "benefit",
        "uk": "benefit",
        "pl": "benefit"
      },
      {
        "en": "began",
        "uk": "began",
        "pl": "began"
      },
      {
        "en": "built",
        "uk": "built",
        "pl": "built"
      },
      {
        "en": "career",
        "uk": "career",
        "pl": "career"
      },
      {
        "en": "changed",
        "uk": "changed",
        "pl": "changed"
      },
      {
        "en": "crazy",
        "uk": "crazy",
        "pl": "crazy"
      },
      {
        "en": "daily",
        "uk": "daily",
        "pl": "daily"
      },
      {
        "en": "daughter",
        "uk": "daughter",
        "pl": "daughter"
      },
      {
        "en": "december",
        "uk": "december",
        "pl": "december"
      },
      {
        "en": "difficult",
        "uk": "difficult",
        "pl": "difficult"
      },
      {
        "en": "figure",
        "uk": "figure",
        "pl": "figure"
      },
      {
        "en": "hospital",
        "uk": "hospital",
        "pl": "hospital"
      },
      {
        "en": "knows",
        "uk": "knows",
        "pl": "knows"
      },
      {
        "en": "loss",
        "uk": "loss",
        "pl": "loss"
      },
      {
        "en": "modern",
        "uk": "modern",
        "pl": "modern"
      },
      {
        "en": "ones",
        "uk": "ones",
        "pl": "ones"
      },
      {
        "en": "paper",
        "uk": "paper",
        "pl": "paper"
      },
      {
        "en": "parts",
        "uk": "parts",
        "pl": "parts"
      },
      {
        "en": "popular",
        "uk": "popular",
        "pl": "popular"
      },
      {
        "en": "published",
        "uk": "published",
        "pl": "published"
      },
      {
        "en": "safe",
        "uk": "safe",
        "pl": "safe"
      },
      {
        "en": "starting",
        "uk": "starting",
        "pl": "starting"
      },
      {
        "en": "systems",
        "uk": "systems",
        "pl": "systems"
      },
      {
        "en": "version",
        "uk": "version",
        "pl": "version"
      },
      {
        "en": "voice",
        "uk": "voice",
        "pl": "voice"
      },
      {
        "en": "whose",
        "uk": "whose",
        "pl": "whose"
      },
      {
        "en": "writing",
        "uk": "writing",
        "pl": "writing"
      },
      {
        "en": "army",
        "uk": "army",
        "pl": "army"
      },
      {
        "en": "australia",
        "uk": "australia",
        "pl": "australia"
      },
      {
        "en": "earth",
        "uk": "earth",
        "pl": "earth"
      },
      {
        "en": "forget",
        "uk": "forget",
        "pl": "forget"
      },
      {
        "en": "goal",
        "uk": "goal",
        "pl": "goal"
      },
      {
        "en": "huge",
        "uk": "huge",
        "pl": "huge"
      },
      {
        "en": "internet",
        "uk": "internet",
        "pl": "internet"
      },
      {
        "en": "listen",
        "uk": "listen",
        "pl": "listen"
      },
      {
        "en": "okay",
        "uk": "okay",
        "pl": "okay"
      },
      {
        "en": "practice",
        "uk": "practice",
        "pl": "practice"
      },
      {
        "en": "rules",
        "uk": "rules",
        "pl": "rules"
      },
      {
        "en": "success",
        "uk": "success",
        "pl": "success"
      },
      {
        "en": "towards",
        "uk": "towards",
        "pl": "towards"
      },
      {
        "en": "waiting",
        "uk": "waiting",
        "pl": "waiting"
      },
      {
        "en": "ways",
        "uk": "ways",
        "pl": "ways"
      },
      {
        "en": "access",
        "uk": "access",
        "pl": "access"
      },
      {
        "en": "base",
        "uk": "base",
        "pl": "base"
      },
      {
        "en": "below",
        "uk": "below",
        "pl": "below"
      },
      {
        "en": "created",
        "uk": "created",
        "pl": "created"
      },
      {
        "en": "deep",
        "uk": "deep",
        "pl": "deep"
      },
      {
        "en": "followed",
        "uk": "followed",
        "pl": "followed"
      },
      {
        "en": "mark",
        "uk": "mark",
        "pl": "mark"
      },
      {
        "en": "missing",
        "uk": "missing",
        "pl": "missing"
      },
      {
        "en": "offer",
        "uk": "offer",
        "pl": "offer"
      },
      {
        "en": "pass",
        "uk": "pass",
        "pl": "pass"
      },
      {
        "en": "professional",
        "uk": "professional",
        "pl": "professional"
      },
      {
        "en": "released",
        "uk": "released",
        "pl": "released"
      },
      {
        "en": "risk",
        "uk": "risk",
        "pl": "risk"
      },
      {
        "en": "schools",
        "uk": "schools",
        "pl": "schools"
      },
      {
        "en": "sleep",
        "uk": "sleep",
        "pl": "sleep"
      },
      {
        "en": "table",
        "uk": "table",
        "pl": "table"
      },
      {
        "en": "truth",
        "uk": "truth",
        "pl": "truth"
      },
      {
        "en": "ball",
        "uk": "ball",
        "pl": "ball"
      },
      {
        "en": "build",
        "uk": "build",
        "pl": "build"
      },
      {
        "en": "card",
        "uk": "card",
        "pl": "card"
      },
      {
        "en": "cases",
        "uk": "cases",
        "pl": "cases"
      },
      {
        "en": "dark",
        "uk": "dark",
        "pl": "dark"
      },
      {
        "en": "district",
        "uk": "district",
        "pl": "district"
      },
      {
        "en": "europe",
        "uk": "europe",
        "pl": "europe"
      },
      {
        "en": "george",
        "uk": "george",
        "pl": "george"
      },
      {
        "en": "india",
        "uk": "india",
        "pl": "india"
      },
      {
        "en": "mine",
        "uk": "mine",
        "pl": "mine"
      },
      {
        "en": "minister",
        "uk": "minister",
        "pl": "minister"
      },
      {
        "en": "note",
        "uk": "note",
        "pl": "note"
      },
      {
        "en": "percent",
        "uk": "percent",
        "pl": "percent"
      },
      {
        "en": "piece",
        "uk": "piece",
        "pl": "piece"
      },
      {
        "en": "products",
        "uk": "products",
        "pl": "products"
      },
      {
        "en": "recent",
        "uk": "recent",
        "pl": "recent"
      },
      {
        "en": "seeing",
        "uk": "seeing",
        "pl": "seeing"
      },
      {
        "en": "straight",
        "uk": "straight",
        "pl": "straight"
      },
      {
        "en": "visit",
        "uk": "visit",
        "pl": "visit"
      },
      {
        "en": "wall",
        "uk": "wall",
        "pl": "wall"
      },
      {
        "en": "wanna",
        "uk": "wanna",
        "pl": "wanna"
      },
      {
        "en": "wrote",
        "uk": "wrote",
        "pl": "wrote"
      },
      {
        "en": "allowed",
        "uk": "allowed",
        "pl": "allowed"
      },
      {
        "en": "boys",
        "uk": "boys",
        "pl": "boys"
      },
      {
        "en": "culture",
        "uk": "culture",
        "pl": "culture"
      },
      {
        "en": "fans",
        "uk": "fans",
        "pl": "fans"
      },
      {
        "en": "february",
        "uk": "february",
        "pl": "february"
      },
      {
        "en": "gives",
        "uk": "gives",
        "pl": "gives"
      },
      {
        "en": "growth",
        "uk": "growth",
        "pl": "growth"
      },
      {
        "en": "included",
        "uk": "included",
        "pl": "included"
      }
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
