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
        "ua": "мати",
        "uk": "мати",
        "pl": "matka"
      },
      {
        "en": "father",
        "ua": "батько",
        "uk": "батько",
        "pl": "ojciec"
      },
      {
        "en": "sister",
        "ua": "сестра",
        "uk": "сестра",
        "pl": "siostra"
      },
      {
        "en": "brother",
        "ua": "брат",
        "uk": "брат",
        "pl": "brat"
      },
      {
        "en": "daughter",
        "ua": "дочка",
        "uk": "дочка",
        "pl": "córka"
      },
      {
        "en": "son",
        "ua": "син",
        "uk": "син",
        "pl": "syn"
      },
      {
        "en": "grandmother",
        "ua": "бабуся",
        "uk": "бабуся",
        "pl": "babcia"
      },
      {
        "en": "grandfather",
        "ua": "дідусь",
        "uk": "дідусь",
        "pl": "dziadek"
      },
      {
        "en": "aunt",
        "ua": "тітка",
        "uk": "тітка",
        "pl": "ciotka"
      },
      {
        "en": "uncle",
        "ua": "дядько",
        "uk": "дядько",
        "pl": "wujek"
      },
      {
        "en": "cousin",
        "ua": "двоюрідний брат",
        "uk": "двоюрідний брат",
        "pl": "kuzyn"
      },
      {
        "en": "wife",
        "ua": "дружина",
        "uk": "дружина",
        "pl": "żona"
      },
      {
        "en": "that",
        "ua": "що",
        "uk": "що",
        "pl": "To"
      },
      {
        "en": "with",
        "ua": "з",
        "uk": "з",
        "pl": "z"
      },
      {
        "en": "this",
        "ua": "це",
        "uk": "це",
        "pl": "Ten"
      },
      {
        "en": "have",
        "ua": "мати",
        "uk": "мати",
        "pl": "Posiadać"
      },
      {
        "en": "from",
        "ua": "від",
        "uk": "від",
        "pl": "z"
      },
      {
        "en": "your",
        "ua": "ваш",
        "uk": "ваш",
        "pl": "twój"
      },
      {
        "en": "they",
        "ua": "вони",
        "uk": "вони",
        "pl": "Oni"
      },
      {
        "en": "will",
        "ua": "буде",
        "uk": "буде",
        "pl": "będzie"
      },
      {
        "en": "just",
        "ua": "просто",
        "uk": "просто",
        "pl": "Tylko"
      },
      {
        "en": "like",
        "ua": "як",
        "uk": "як",
        "pl": "tak jak"
      },
      {
        "en": "about",
        "ua": "приблизно",
        "uk": "приблизно",
        "pl": "o"
      },
      {
        "en": "what",
        "ua": "що",
        "uk": "що",
        "pl": "Co"
      },
      {
        "en": "when",
        "ua": "коли",
        "uk": "коли",
        "pl": "Kiedy"
      },
      {
        "en": "more",
        "ua": "більше",
        "uk": "більше",
        "pl": "więcej"
      },
      {
        "en": "were",
        "ua": "були",
        "uk": "були",
        "pl": "był"
      },
      {
        "en": "their",
        "ua": "їх",
        "uk": "їх",
        "pl": "ich"
      },
      {
        "en": "there",
        "ua": "там",
        "uk": "там",
        "pl": "Tam"
      },
      {
        "en": "which",
        "ua": "який",
        "uk": "який",
        "pl": "Który"
      },
      {
        "en": "time",
        "ua": "час",
        "uk": "час",
        "pl": "czas"
      },
      {
        "en": "been",
        "ua": "був",
        "uk": "був",
        "pl": "został"
      },
      {
        "en": "would",
        "ua": "би",
        "uk": "би",
        "pl": "zrobiłbym"
      },
      {
        "en": "people",
        "ua": "людей",
        "uk": "людей",
        "pl": "ludzie"
      },
      {
        "en": "some",
        "ua": "деякі",
        "uk": "деякі",
        "pl": "Niektóre"
      },
      {
        "en": "also",
        "ua": "також",
        "uk": "також",
        "pl": "Również"
      },
      {
        "en": "them",
        "ua": "їх",
        "uk": "їх",
        "pl": "ich"
      },
      {
        "en": "other",
        "ua": "інші",
        "uk": "інші",
        "pl": "Inny"
      },
      {
        "en": "than",
        "ua": "ніж",
        "uk": "ніж",
        "pl": "niż"
      },
      {
        "en": "good",
        "ua": "добре",
        "uk": "добре",
        "pl": "Dobry"
      },
      {
        "en": "only",
        "ua": "тільки",
        "uk": "тільки",
        "pl": "tylko"
      },
      {
        "en": "after",
        "ua": "після",
        "uk": "після",
        "pl": "Po"
      },
      {
        "en": "first",
        "ua": "перший",
        "uk": "перший",
        "pl": "Pierwszy"
      },
      {
        "en": "into",
        "ua": "в",
        "uk": "в",
        "pl": "do"
      },
      {
        "en": "know",
        "ua": "знати",
        "uk": "знати",
        "pl": "wiedzieć"
      },
      {
        "en": "make",
        "ua": "зробити",
        "uk": "зробити",
        "pl": "robić"
      },
      {
        "en": "over",
        "ua": "закінчено",
        "uk": "закінчено",
        "pl": "nad"
      },
      {
        "en": "think",
        "ua": "думаю",
        "uk": "думаю",
        "pl": "myśleć"
      },
      {
        "en": "then",
        "ua": "потім",
        "uk": "потім",
        "pl": "Następnie"
      },
      {
        "en": "could",
        "ua": "міг би",
        "uk": "міг би",
        "pl": "mógł"
      },
      {
        "en": "back",
        "ua": "назад",
        "uk": "назад",
        "pl": "z powrotem"
      },
      {
        "en": "these",
        "ua": "ці",
        "uk": "ці",
        "pl": "te"
      },
      {
        "en": "want",
        "ua": "хочуть",
        "uk": "хочуть",
        "pl": "chcieć"
      },
      {
        "en": "because",
        "ua": "тому що",
        "uk": "тому що",
        "pl": "ponieważ"
      },
      {
        "en": "well",
        "ua": "добре",
        "uk": "добре",
        "pl": "Dobrze"
      },
      {
        "en": "said",
        "ua": "сказав",
        "uk": "сказав",
        "pl": "powiedział"
      },
      {
        "en": "most",
        "ua": "більшість",
        "uk": "більшість",
        "pl": "bardzo"
      },
      {
        "en": "much",
        "ua": "багато",
        "uk": "багато",
        "pl": "dużo"
      },
      {
        "en": "very",
        "ua": "дуже",
        "uk": "дуже",
        "pl": "bardzo"
      },
      {
        "en": "where",
        "ua": "де",
        "uk": "де",
        "pl": "Gdzie"
      },
      {
        "en": "even",
        "ua": "навіть",
        "uk": "навіть",
        "pl": "nawet"
      },
      {
        "en": "should",
        "ua": "повинен",
        "uk": "повинен",
        "pl": "powinien"
      },
      {
        "en": "here",
        "ua": "тут",
        "uk": "тут",
        "pl": "Tutaj"
      },
      {
        "en": "need",
        "ua": "потреба",
        "uk": "потреба",
        "pl": "potrzebować"
      },
      {
        "en": "really",
        "ua": "насправді",
        "uk": "насправді",
        "pl": "Naprawdę"
      },
      {
        "en": "right",
        "ua": "правильно",
        "uk": "правильно",
        "pl": "Prawidłowy"
      },
      {
        "en": "work",
        "ua": "працювати",
        "uk": "працювати",
        "pl": "praca"
      },
      {
        "en": "year",
        "ua": "рік",
        "uk": "рік",
        "pl": "rok"
      },
      {
        "en": "years",
        "ua": "років",
        "uk": "років",
        "pl": "lata"
      },
      {
        "en": "being",
        "ua": "буття",
        "uk": "буття",
        "pl": "istnienie"
      },
      {
        "en": "going",
        "ua": "йде",
        "uk": "йде",
        "pl": "pójście"
      },
      {
        "en": "before",
        "ua": "раніше",
        "uk": "раніше",
        "pl": "zanim"
      },
      {
        "en": "made",
        "ua": "зробив",
        "uk": "зробив",
        "pl": "zrobiony"
      },
      {
        "en": "still",
        "ua": "досі",
        "uk": "досі",
        "pl": "Nadal"
      },
      {
        "en": "take",
        "ua": "взяти",
        "uk": "взяти",
        "pl": "Brać"
      },
      {
        "en": "many",
        "ua": "багато",
        "uk": "багато",
        "pl": "wiele"
      },
      {
        "en": "never",
        "ua": "ніколи",
        "uk": "ніколи",
        "pl": "nigdy"
      },
      {
        "en": "those",
        "ua": "ті",
        "uk": "ті",
        "pl": "te"
      },
      {
        "en": "life",
        "ua": "життя",
        "uk": "життя",
        "pl": "życie"
      },
      {
        "en": "world",
        "ua": "світ",
        "uk": "світ",
        "pl": "świat"
      },
      {
        "en": "down",
        "ua": "вниз",
        "uk": "вниз",
        "pl": "w dół"
      },
      {
        "en": "great",
        "ua": "чудово",
        "uk": "чудово",
        "pl": "Świetnie"
      },
      {
        "en": "through",
        "ua": "через",
        "uk": "через",
        "pl": "Poprzez"
      },
      {
        "en": "last",
        "ua": "останній",
        "uk": "останній",
        "pl": "ostatni"
      },
      {
        "en": "while",
        "ua": "поки",
        "uk": "поки",
        "pl": "chwila"
      },
      {
        "en": "best",
        "ua": "найкращий",
        "uk": "найкращий",
        "pl": "to, co najlepsze"
      },
      {
        "en": "such",
        "ua": "такий",
        "uk": "такий",
        "pl": "taki"
      },
      {
        "en": "love",
        "ua": "любов",
        "uk": "любов",
        "pl": "Miłość"
      },
      {
        "en": "home",
        "ua": "додому",
        "uk": "додому",
        "pl": "dom"
      },
      {
        "en": "long",
        "ua": "довго",
        "uk": "довго",
        "pl": "długi"
      },
      {
        "en": "look",
        "ua": "подивіться",
        "uk": "подивіться",
        "pl": "Patrzeć"
      },
      {
        "en": "something",
        "ua": "щось",
        "uk": "щось",
        "pl": "coś"
      },
      {
        "en": "same",
        "ua": "те саме",
        "uk": "те саме",
        "pl": "To samo"
      },
      {
        "en": "used",
        "ua": "використовується",
        "uk": "використовується",
        "pl": "używany"
      },
      {
        "en": "both",
        "ua": "обидва",
        "uk": "обидва",
        "pl": "Zarówno"
      },
      {
        "en": "every",
        "ua": "кожен",
        "uk": "кожен",
        "pl": "każdy"
      },
      {
        "en": "come",
        "ua": "прийти",
        "uk": "прийти",
        "pl": "przychodzić"
      },
      {
        "en": "part",
        "ua": "частина",
        "uk": "частина",
        "pl": "część"
      },
      {
        "en": "state",
        "ua": "стан",
        "uk": "стан",
        "pl": "państwo"
      },
      {
        "en": "three",
        "ua": "три",
        "uk": "три",
        "pl": "trzy"
      }
    ],
    "Home": [
      {
        "en": "kitchen",
        "ua": "кухня",
        "uk": "кухня",
        "pl": "kuchnia"
      },
      {
        "en": "bedroom",
        "ua": "спальня",
        "uk": "спальня",
        "pl": "sypialnia"
      },
      {
        "en": "bathroom",
        "ua": "ванна кімната",
        "uk": "ванна кімната",
        "pl": "łazienka"
      },
      {
        "en": "window",
        "ua": "вікно",
        "uk": "вікно",
        "pl": "okno"
      },
      {
        "en": "door",
        "ua": "двері",
        "uk": "двері",
        "pl": "drzwi"
      },
      {
        "en": "table",
        "ua": "стіл",
        "uk": "стіл",
        "pl": "tabela"
      },
      {
        "en": "chair",
        "ua": "стілець",
        "uk": "стілець",
        "pl": "krzesło"
      },
      {
        "en": "sofa",
        "ua": "диван",
        "uk": "диван",
        "pl": "kanapa"
      },
      {
        "en": "lamp",
        "ua": "лампа",
        "uk": "лампа",
        "pl": "lampa"
      },
      {
        "en": "floor",
        "ua": "поверх",
        "uk": "поверх",
        "pl": "podłoga"
      },
      {
        "en": "ceiling",
        "ua": "стеля",
        "uk": "стеля",
        "pl": "sufit"
      },
      {
        "en": "mirror",
        "ua": "дзеркало",
        "uk": "дзеркало",
        "pl": "lustro"
      },
      {
        "en": "around",
        "ua": "навколо",
        "uk": "навколо",
        "pl": "wokół"
      },
      {
        "en": "between",
        "ua": "між",
        "uk": "між",
        "pl": "między"
      },
      {
        "en": "always",
        "ua": "завжди",
        "uk": "завжди",
        "pl": "zawsze"
      },
      {
        "en": "better",
        "ua": "краще",
        "uk": "краще",
        "pl": "lepsza"
      },
      {
        "en": "find",
        "ua": "знайти",
        "uk": "знайти",
        "pl": "znajdować"
      },
      {
        "en": "help",
        "ua": "допомогти",
        "uk": "допомогти",
        "pl": "pomoc"
      },
      {
        "en": "high",
        "ua": "висока",
        "uk": "висока",
        "pl": "wysoki"
      },
      {
        "en": "little",
        "ua": "мало",
        "uk": "мало",
        "pl": "mały"
      },
      {
        "en": "since",
        "ua": "оскільки",
        "uk": "оскільки",
        "pl": "od"
      },
      {
        "en": "another",
        "ua": "інший",
        "uk": "інший",
        "pl": "inny"
      },
      {
        "en": "does",
        "ua": "робить",
        "uk": "робить",
        "pl": "robi"
      },
      {
        "en": "things",
        "ua": "речі",
        "uk": "речі",
        "pl": "rzeczy"
      },
      {
        "en": "under",
        "ua": "під",
        "uk": "під",
        "pl": "pod"
      },
      {
        "en": "during",
        "ua": "протягом",
        "uk": "протягом",
        "pl": "podczas"
      },
      {
        "en": "game",
        "ua": "гра",
        "uk": "гра",
        "pl": "gra"
      },
      {
        "en": "thing",
        "ua": "річ",
        "uk": "річ",
        "pl": "rzecz"
      },
      {
        "en": "give",
        "ua": "дати",
        "uk": "дати",
        "pl": "dawać"
      },
      {
        "en": "house",
        "ua": "будинок",
        "uk": "будинок",
        "pl": "dom"
      },
      {
        "en": "place",
        "ua": "місце",
        "uk": "місце",
        "pl": "miejsce"
      },
      {
        "en": "school",
        "ua": "школа",
        "uk": "школа",
        "pl": "szkoła"
      },
      {
        "en": "again",
        "ua": "знову",
        "uk": "знову",
        "pl": "Ponownie"
      },
      {
        "en": "next",
        "ua": "наступний",
        "uk": "наступний",
        "pl": "Następny"
      },
      {
        "en": "each",
        "ua": "кожен",
        "uk": "кожен",
        "pl": "każdy"
      },
      {
        "en": "without",
        "ua": "без",
        "uk": "без",
        "pl": "bez"
      },
      {
        "en": "against",
        "ua": "проти",
        "uk": "проти",
        "pl": "przeciwko"
      },
      {
        "en": "found",
        "ua": "знайдено",
        "uk": "знайдено",
        "pl": "znaleziony"
      },
      {
        "en": "must",
        "ua": "повинен",
        "uk": "повинен",
        "pl": "musieć"
      },
      {
        "en": "show",
        "ua": "шоу",
        "uk": "шоу",
        "pl": "pokazywać"
      },
      {
        "en": "feel",
        "ua": "відчувати",
        "uk": "відчувати",
        "pl": "czuć"
      },
      {
        "en": "sure",
        "ua": "впевнений",
        "uk": "впевнений",
        "pl": "Jasne"
      },
      {
        "en": "team",
        "ua": "команда",
        "uk": "команда",
        "pl": "zespół"
      },
      {
        "en": "ever",
        "ua": "будь-коли",
        "uk": "будь-коли",
        "pl": "kiedykolwiek"
      },
      {
        "en": "family",
        "ua": "родина",
        "uk": "родина",
        "pl": "rodzina"
      },
      {
        "en": "keep",
        "ua": "зберегти",
        "uk": "зберегти",
        "pl": "trzymać"
      },
      {
        "en": "might",
        "ua": "могутність",
        "uk": "могутність",
        "pl": "móc"
      },
      {
        "en": "please",
        "ua": "будь ласка",
        "uk": "будь ласка",
        "pl": "Proszę"
      },
      {
        "en": "money",
        "ua": "гроші",
        "uk": "гроші",
        "pl": "pieniądze"
      },
      {
        "en": "free",
        "ua": "безкоштовно",
        "uk": "безкоштовно",
        "pl": "bezpłatny"
      },
      {
        "en": "second",
        "ua": "другий",
        "uk": "другий",
        "pl": "drugi"
      },
      {
        "en": "someone",
        "ua": "хтось",
        "uk": "хтось",
        "pl": "ktoś"
      },
      {
        "en": "away",
        "ua": "геть",
        "uk": "геть",
        "pl": "z dala"
      },
      {
        "en": "left",
        "ua": "зліва",
        "uk": "зліва",
        "pl": "lewy"
      },
      {
        "en": "number",
        "ua": "номер",
        "uk": "номер",
        "pl": "numer"
      },
      {
        "en": "city",
        "ua": "місто",
        "uk": "місто",
        "pl": "miasto"
      },
      {
        "en": "days",
        "ua": "днів",
        "uk": "днів",
        "pl": "dni"
      },
      {
        "en": "name",
        "ua": "назва",
        "uk": "назва",
        "pl": "nazwa"
      },
      {
        "en": "night",
        "ua": "ніч",
        "uk": "ніч",
        "pl": "noc"
      },
      {
        "en": "play",
        "ua": "грати",
        "uk": "грати",
        "pl": "grać"
      },
      {
        "en": "until",
        "ua": "поки",
        "uk": "поки",
        "pl": "dopóki"
      },
      {
        "en": "company",
        "ua": "компанії",
        "uk": "компанії",
        "pl": "firma"
      },
      {
        "en": "doing",
        "ua": "робити",
        "uk": "робити",
        "pl": "czyn"
      },
      {
        "en": "real",
        "ua": "справжній",
        "uk": "справжній",
        "pl": "prawdziwy"
      },
      {
        "en": "called",
        "ua": "дзвонив",
        "uk": "дзвонив",
        "pl": "zwany"
      },
      {
        "en": "different",
        "ua": "різні",
        "uk": "різні",
        "pl": "różny"
      },
      {
        "en": "having",
        "ua": "мати",
        "uk": "мати",
        "pl": "mający"
      },
      {
        "en": "thought",
        "ua": "думав",
        "uk": "думав",
        "pl": "myśl"
      },
      {
        "en": "done",
        "ua": "зроблено",
        "uk": "зроблено",
        "pl": "zrobione"
      },
      {
        "en": "however",
        "ua": "проте",
        "uk": "проте",
        "pl": "Jednakże"
      },
      {
        "en": "getting",
        "ua": "отримання",
        "uk": "отримання",
        "pl": "dostawanie"
      },
      {
        "en": "government",
        "ua": "уряд",
        "uk": "уряд",
        "pl": "rząd"
      },
      {
        "en": "group",
        "ua": "група",
        "uk": "група",
        "pl": "grupa"
      },
      {
        "en": "looking",
        "ua": "дивлячись",
        "uk": "дивлячись",
        "pl": "patrzeć"
      },
      {
        "en": "public",
        "ua": "громадськість",
        "uk": "громадськість",
        "pl": "publiczny"
      },
      {
        "en": "women",
        "ua": "жінки",
        "uk": "жінки",
        "pl": "kobiety"
      },
      {
        "en": "business",
        "ua": "бізнес",
        "uk": "бізнес",
        "pl": "biznes"
      },
      {
        "en": "care",
        "ua": "догляд",
        "uk": "догляд",
        "pl": "pielęgnacja"
      },
      {
        "en": "start",
        "ua": "почати",
        "uk": "почати",
        "pl": "początek"
      },
      {
        "en": "system",
        "ua": "система",
        "uk": "система",
        "pl": "układ"
      },
      {
        "en": "times",
        "ua": "разів",
        "uk": "разів",
        "pl": "czasy"
      },
      {
        "en": "week",
        "ua": "тиждень",
        "uk": "тиждень",
        "pl": "tydzień"
      },
      {
        "en": "already",
        "ua": "вже",
        "uk": "вже",
        "pl": "już"
      },
      {
        "en": "anything",
        "ua": "що завгодно",
        "uk": "що завгодно",
        "pl": "wszystko"
      },
      {
        "en": "case",
        "ua": "справа",
        "uk": "справа",
        "pl": "sprawa"
      },
      {
        "en": "nothing",
        "ua": "нічого",
        "uk": "нічого",
        "pl": "Nic"
      },
      {
        "en": "person",
        "ua": "людина",
        "uk": "людина",
        "pl": "osoba"
      },
      {
        "en": "today",
        "ua": "сьогодні",
        "uk": "сьогодні",
        "pl": "Dzisiaj"
      },
      {
        "en": "change",
        "ua": "змінити",
        "uk": "змінити",
        "pl": "zmiana"
      },
      {
        "en": "enough",
        "ua": "досить",
        "uk": "досить",
        "pl": "wystarczająco"
      },
      {
        "en": "everything",
        "ua": "все",
        "uk": "все",
        "pl": "wszystko"
      },
      {
        "en": "full",
        "ua": "повний",
        "uk": "повний",
        "pl": "pełny"
      },
      {
        "en": "live",
        "ua": "жити",
        "uk": "жити",
        "pl": "na żywo"
      },
      {
        "en": "making",
        "ua": "виготовлення",
        "uk": "виготовлення",
        "pl": "zrobienie"
      },
      {
        "en": "point",
        "ua": "точка",
        "uk": "точка",
        "pl": "punkt"
      },
      {
        "en": "read",
        "ua": "читати",
        "uk": "читати",
        "pl": "Czytać"
      },
      {
        "en": "told",
        "ua": "розповів",
        "uk": "розповів",
        "pl": "powiedział"
      },
      {
        "en": "four",
        "ua": "чотири",
        "uk": "чотири",
        "pl": "cztery"
      },
      {
        "en": "hard",
        "ua": "важко",
        "uk": "важко",
        "pl": "twardy"
      },
      {
        "en": "mean",
        "ua": "означає",
        "uk": "означає",
        "pl": "mieć na myśli"
      }
    ],
    "Food": [
      {
        "en": "bread",
        "ua": "хліб",
        "uk": "хліб",
        "pl": "chleb"
      },
      {
        "en": "milk",
        "ua": "молоко",
        "uk": "молоко",
        "pl": "mleko"
      },
      {
        "en": "cheese",
        "ua": "сир",
        "uk": "сир",
        "pl": "ser"
      },
      {
        "en": "meat",
        "ua": "м'ясо",
        "uk": "м'ясо",
        "pl": "mięso"
      },
      {
        "en": "fish",
        "ua": "риба",
        "uk": "риба",
        "pl": "ryba"
      },
      {
        "en": "egg",
        "ua": "яйце",
        "uk": "яйце",
        "pl": "jajko"
      },
      {
        "en": "rice",
        "ua": "рис",
        "uk": "рис",
        "pl": "ryż"
      },
      {
        "en": "soup",
        "ua": "суп",
        "uk": "суп",
        "pl": "zupa"
      },
      {
        "en": "salad",
        "ua": "салат",
        "uk": "салат",
        "pl": "sałatka"
      },
      {
        "en": "apple",
        "ua": "яблуко",
        "uk": "яблуко",
        "pl": "jabłko"
      },
      {
        "en": "banana",
        "ua": "банан",
        "uk": "банан",
        "pl": "banan"
      },
      {
        "en": "sugar",
        "ua": "цукор",
        "uk": "цукор",
        "pl": "cukier"
      },
      {
        "en": "once",
        "ua": "один раз",
        "uk": "один раз",
        "pl": "raz"
      },
      {
        "en": "support",
        "ua": "підтримка",
        "uk": "підтримка",
        "pl": "wsparcie"
      },
      {
        "en": "tell",
        "ua": "розповідати",
        "uk": "розповідати",
        "pl": "powiedzieć"
      },
      {
        "en": "including",
        "ua": "в тому числі",
        "uk": "в тому числі",
        "pl": "w tym"
      },
      {
        "en": "music",
        "ua": "музика",
        "uk": "музика",
        "pl": "muzyka"
      },
      {
        "en": "power",
        "ua": "потужність",
        "uk": "потужність",
        "pl": "moc"
      },
      {
        "en": "seen",
        "ua": "бачив",
        "uk": "бачив",
        "pl": "widziany"
      },
      {
        "en": "states",
        "ua": "держави",
        "uk": "держави",
        "pl": "stwierdza"
      },
      {
        "en": "stop",
        "ua": "СТІЙ",
        "uk": "СТІЙ",
        "pl": "zatrzymywać się"
      },
      {
        "en": "water",
        "ua": "води",
        "uk": "води",
        "pl": "woda"
      },
      {
        "en": "based",
        "ua": "на основі",
        "uk": "на основі",
        "pl": "na podstawie"
      },
      {
        "en": "believe",
        "ua": "вірити",
        "uk": "вірити",
        "pl": "uważać"
      },
      {
        "en": "call",
        "ua": "дзвінок",
        "uk": "дзвінок",
        "pl": "dzwonić"
      },
      {
        "en": "head",
        "ua": "голова",
        "uk": "голова",
        "pl": "głowa"
      },
      {
        "en": "national",
        "ua": "національний",
        "uk": "національний",
        "pl": "krajowy"
      },
      {
        "en": "small",
        "ua": "маленький",
        "uk": "маленький",
        "pl": "mały"
      },
      {
        "en": "took",
        "ua": "взяв",
        "uk": "взяв",
        "pl": "wziął"
      },
      {
        "en": "white",
        "ua": "білий",
        "uk": "білий",
        "pl": "biały"
      },
      {
        "en": "came",
        "ua": "прийшов",
        "uk": "прийшов",
        "pl": "wszedł"
      },
      {
        "en": "side",
        "ua": "бік",
        "uk": "бік",
        "pl": "strona"
      },
      {
        "en": "though",
        "ua": "хоча",
        "uk": "хоча",
        "pl": "chociaż"
      },
      {
        "en": "went",
        "ua": "пішов",
        "uk": "пішов",
        "pl": "wszedł"
      },
      {
        "en": "actually",
        "ua": "насправді",
        "uk": "насправді",
        "pl": "Właściwie"
      },
      {
        "en": "american",
        "ua": "американський",
        "uk": "американський",
        "pl": "amerykański"
      },
      {
        "en": "later",
        "ua": "пізніше",
        "uk": "пізніше",
        "pl": "później"
      },
      {
        "en": "less",
        "ua": "менше",
        "uk": "менше",
        "pl": "mniej"
      },
      {
        "en": "line",
        "ua": "лінія",
        "uk": "лінія",
        "pl": "linia"
      },
      {
        "en": "order",
        "ua": "порядок",
        "uk": "порядок",
        "pl": "zamówienie"
      },
      {
        "en": "party",
        "ua": "вечірка",
        "uk": "вечірка",
        "pl": "impreza"
      },
      {
        "en": "says",
        "ua": "каже",
        "uk": "каже",
        "pl": "mówi"
      },
      {
        "en": "service",
        "ua": "обслуговування",
        "uk": "обслуговування",
        "pl": "praca"
      },
      {
        "en": "country",
        "ua": "країна",
        "uk": "країна",
        "pl": "kraj"
      },
      {
        "en": "open",
        "ua": "ВІДЧИНЕНО",
        "uk": "ВІДЧИНЕНО",
        "pl": "Otwarte"
      },
      {
        "en": "season",
        "ua": "сезон",
        "uk": "сезон",
        "pl": "sezon"
      },
      {
        "en": "shit",
        "ua": "лайно",
        "uk": "лайно",
        "pl": "gówno"
      },
      {
        "en": "thank",
        "ua": "дякую",
        "uk": "дякую",
        "pl": "dziękować"
      },
      {
        "en": "children",
        "ua": "дітей",
        "uk": "дітей",
        "pl": "dzieci"
      },
      {
        "en": "everyone",
        "ua": "кожен",
        "uk": "кожен",
        "pl": "wszyscy"
      },
      {
        "en": "general",
        "ua": "загальний",
        "uk": "загальний",
        "pl": "ogólny"
      },
      {
        "en": "trying",
        "ua": "намагаючись",
        "uk": "намагаючись",
        "pl": "męczący"
      },
      {
        "en": "united",
        "ua": "об'єднані",
        "uk": "об'єднані",
        "pl": "zjednoczony"
      },
      {
        "en": "using",
        "ua": "використовуючи",
        "uk": "використовуючи",
        "pl": "używając"
      },
      {
        "en": "area",
        "ua": "область",
        "uk": "область",
        "pl": "obszar"
      },
      {
        "en": "black",
        "ua": "чорний",
        "uk": "чорний",
        "pl": "czarny"
      },
      {
        "en": "following",
        "ua": "наступні",
        "uk": "наступні",
        "pl": "następny"
      },
      {
        "en": "makes",
        "ua": "робить",
        "uk": "робить",
        "pl": "sprawia"
      },
      {
        "en": "together",
        "ua": "разом",
        "uk": "разом",
        "pl": "razem"
      },
      {
        "en": "whole",
        "ua": "ціле",
        "uk": "ціле",
        "pl": "cały"
      },
      {
        "en": "face",
        "ua": "обличчя",
        "uk": "обличчя",
        "pl": "twarz"
      },
      {
        "en": "five",
        "ua": "п'ять",
        "uk": "п'ять",
        "pl": "pięć"
      },
      {
        "en": "kind",
        "ua": "вид",
        "uk": "вид",
        "pl": "Uprzejmy"
      },
      {
        "en": "maybe",
        "ua": "можливо",
        "uk": "можливо",
        "pl": "Może"
      },
      {
        "en": "president",
        "ua": "президент",
        "uk": "президент",
        "pl": "prezydent"
      },
      {
        "en": "story",
        "ua": "історія",
        "uk": "історія",
        "pl": "historia"
      },
      {
        "en": "working",
        "ua": "працює",
        "uk": "працює",
        "pl": "pracujący"
      },
      {
        "en": "course",
        "ua": "курс",
        "uk": "курс",
        "pl": "kurs"
      },
      {
        "en": "games",
        "ua": "ігри",
        "uk": "ігри",
        "pl": "zawody sportowe"
      },
      {
        "en": "health",
        "ua": "здоров'я",
        "uk": "здоров'я",
        "pl": "zdrowie"
      },
      {
        "en": "hope",
        "ua": "надія",
        "uk": "надія",
        "pl": "mieć nadzieję"
      },
      {
        "en": "important",
        "ua": "важливо",
        "uk": "важливо",
        "pl": "ważny"
      },
      {
        "en": "least",
        "ua": "найменше",
        "uk": "найменше",
        "pl": "najmniej"
      },
      {
        "en": "means",
        "ua": "засоби",
        "uk": "засоби",
        "pl": "oznacza"
      },
      {
        "en": "news",
        "ua": "новини",
        "uk": "новини",
        "pl": "aktualności"
      },
      {
        "en": "within",
        "ua": "в межах",
        "uk": "в межах",
        "pl": "w"
      },
      {
        "en": "able",
        "ua": "здатний",
        "uk": "здатний",
        "pl": "zdolny"
      },
      {
        "en": "book",
        "ua": "книга",
        "uk": "книга",
        "pl": "książka"
      },
      {
        "en": "early",
        "ua": "рано",
        "uk": "рано",
        "pl": "wczesny"
      },
      {
        "en": "friends",
        "ua": "друзі",
        "uk": "друзі",
        "pl": "przyjaciele"
      },
      {
        "en": "information",
        "ua": "інформації",
        "uk": "інформації",
        "pl": "informacja"
      },
      {
        "en": "local",
        "ua": "місцевий",
        "uk": "місцевий",
        "pl": "lokalny"
      },
      {
        "en": "post",
        "ua": "пост",
        "uk": "пост",
        "pl": "wpis"
      },
      {
        "en": "thanks",
        "ua": "дякую",
        "uk": "дякую",
        "pl": "Dzięki"
      },
      {
        "en": "video",
        "ua": "відео",
        "uk": "відео",
        "pl": "wideo"
      },
      {
        "en": "young",
        "ua": "молодий",
        "uk": "молодий",
        "pl": "młody"
      },
      {
        "en": "others",
        "ua": "інші",
        "uk": "інші",
        "pl": "inni"
      },
      {
        "en": "social",
        "ua": "соціальні",
        "uk": "соціальні",
        "pl": "społeczny"
      },
      {
        "en": "talk",
        "ua": "говорити",
        "uk": "говорити",
        "pl": "rozmawiać"
      },
      {
        "en": "court",
        "ua": "суд",
        "uk": "суд",
        "pl": "sąd"
      },
      {
        "en": "fact",
        "ua": "факт",
        "uk": "факт",
        "pl": "fakt"
      },
      {
        "en": "given",
        "ua": "дано",
        "uk": "дано",
        "pl": "dany"
      },
      {
        "en": "guys",
        "ua": "хлопці",
        "uk": "хлопці",
        "pl": "Chłopaki"
      },
      {
        "en": "half",
        "ua": "половина",
        "uk": "половина",
        "pl": "połowa"
      },
      {
        "en": "hand",
        "ua": "руку",
        "uk": "руку",
        "pl": "ręka"
      },
      {
        "en": "level",
        "ua": "рівень",
        "uk": "рівень",
        "pl": "poziom"
      },
      {
        "en": "mind",
        "ua": "розум",
        "uk": "розум",
        "pl": "umysł"
      },
      {
        "en": "often",
        "ua": "часто",
        "uk": "часто",
        "pl": "często"
      },
      {
        "en": "single",
        "ua": "неодружений",
        "uk": "неодружений",
        "pl": "pojedynczy"
      },
      {
        "en": "become",
        "ua": "стати",
        "uk": "стати",
        "pl": "stać się"
      }
    ]
  },
  "A2": {
    "Travel": [
      {
        "en": "airport",
        "ua": "аеропорт",
        "uk": "аеропорт",
        "pl": "lotnisko"
      },
      {
        "en": "passport",
        "ua": "паспорт",
        "uk": "паспорт",
        "pl": "paszport"
      },
      {
        "en": "luggage",
        "ua": "багаж",
        "uk": "багаж",
        "pl": "bagaż"
      },
      {
        "en": "boarding pass",
        "ua": "посадковий талон",
        "uk": "посадковий талон",
        "pl": "karta pokładowa"
      },
      {
        "en": "platform",
        "ua": "платформа",
        "uk": "платформа",
        "pl": "platforma"
      },
      {
        "en": "ticket",
        "ua": "квиток",
        "uk": "квиток",
        "pl": "bilet"
      },
      {
        "en": "journey",
        "ua": "подорож",
        "uk": "подорож",
        "pl": "podróż"
      },
      {
        "en": "hostel",
        "ua": "гуртожиток",
        "uk": "гуртожиток",
        "pl": "schronisko"
      },
      {
        "en": "reservation",
        "ua": "бронювання",
        "uk": "бронювання",
        "pl": "rezerwacja"
      },
      {
        "en": "landmark",
        "ua": "орієнтир",
        "uk": "орієнтир",
        "pl": "punkt orientacyjny"
      },
      {
        "en": "guidebook",
        "ua": "путівник",
        "uk": "путівник",
        "pl": "przewodnik"
      },
      {
        "en": "take off",
        "ua": "злітати",
        "uk": "злітати",
        "pl": "startować"
      },
      {
        "en": "body",
        "ua": "тіло",
        "uk": "тіло",
        "pl": "ciało"
      },
      {
        "en": "coming",
        "ua": "приходить",
        "uk": "приходить",
        "pl": "nadchodzący"
      },
      {
        "en": "control",
        "ua": "КОНТРОЛЬ",
        "uk": "КОНТРОЛЬ",
        "pl": "kontrola"
      },
      {
        "en": "death",
        "ua": "смерть",
        "uk": "смерть",
        "pl": "śmierć"
      },
      {
        "en": "food",
        "ua": "харчування",
        "uk": "харчування",
        "pl": "żywność"
      },
      {
        "en": "hours",
        "ua": "години",
        "uk": "години",
        "pl": "godziny"
      },
      {
        "en": "office",
        "ua": "офіс",
        "uk": "офіс",
        "pl": "biuro"
      },
      {
        "en": "problem",
        "ua": "проблема",
        "uk": "проблема",
        "pl": "kłopot"
      },
      {
        "en": "south",
        "ua": "південь",
        "uk": "південь",
        "pl": "południe"
      },
      {
        "en": "true",
        "ua": "правда",
        "uk": "правда",
        "pl": "PRAWDA"
      },
      {
        "en": "almost",
        "ua": "майже",
        "uk": "майже",
        "pl": "prawie"
      },
      {
        "en": "fuck",
        "ua": "ебать",
        "uk": "ебать",
        "pl": "pierdolić"
      },
      {
        "en": "history",
        "ua": "історії",
        "uk": "історії",
        "pl": "historia"
      },
      {
        "en": "known",
        "ua": "відомий",
        "uk": "відомий",
        "pl": "znany"
      },
      {
        "en": "large",
        "ua": "великий",
        "uk": "великий",
        "pl": "duży"
      },
      {
        "en": "lost",
        "ua": "втрачено",
        "uk": "втрачено",
        "pl": "zaginiony"
      },
      {
        "en": "research",
        "ua": "дослідження",
        "uk": "дослідження",
        "pl": "badania"
      },
      {
        "en": "room",
        "ua": "кімната",
        "uk": "кімната",
        "pl": "pokój"
      },
      {
        "en": "several",
        "ua": "декілька",
        "uk": "декілька",
        "pl": "kilka"
      },
      {
        "en": "started",
        "ua": "почався",
        "uk": "почався",
        "pl": "zaczął"
      },
      {
        "en": "taking",
        "ua": "беручи",
        "uk": "беручи",
        "pl": "nabierający"
      },
      {
        "en": "university",
        "ua": "університет",
        "uk": "університет",
        "pl": "uniwersytet"
      },
      {
        "en": "wrong",
        "ua": "неправильно",
        "uk": "неправильно",
        "pl": "zło"
      },
      {
        "en": "along",
        "ua": "уздовж",
        "uk": "уздовж",
        "pl": "przed siebie"
      },
      {
        "en": "anyone",
        "ua": "хто завгодно",
        "uk": "хто завгодно",
        "pl": "ktokolwiek"
      },
      {
        "en": "else",
        "ua": "інше",
        "uk": "інше",
        "pl": "w przeciwnym razie"
      },
      {
        "en": "girl",
        "ua": "дівчина",
        "uk": "дівчина",
        "pl": "dziewczyna"
      },
      {
        "en": "john",
        "ua": "Джон",
        "uk": "Джон",
        "pl": "Jan"
      },
      {
        "en": "matter",
        "ua": "справа",
        "uk": "справа",
        "pl": "materiał"
      },
      {
        "en": "pretty",
        "ua": "гарна",
        "uk": "гарна",
        "pl": "ładny"
      },
      {
        "en": "remember",
        "ua": "запам'ятати",
        "uk": "запам'ятати",
        "pl": "Pamiętać"
      },
      {
        "en": "friend",
        "ua": "друг",
        "uk": "друг",
        "pl": "przyjaciel"
      },
      {
        "en": "needs",
        "ua": "потреби",
        "uk": "потреби",
        "pl": "wymagania"
      },
      {
        "en": "nice",
        "ua": "приємно",
        "uk": "приємно",
        "pl": "Ładny"
      },
      {
        "en": "playing",
        "ua": "граючи",
        "uk": "граючи",
        "pl": "gra"
      },
      {
        "en": "probably",
        "ua": "ймовірно",
        "uk": "ймовірно",
        "pl": "prawdopodobnie"
      },
      {
        "en": "saying",
        "ua": "кажучи",
        "uk": "кажучи",
        "pl": "powiedzenie"
      },
      {
        "en": "understand",
        "ua": "зрозуміти",
        "uk": "зрозуміти",
        "pl": "zrozumieć"
      },
      {
        "en": "yeah",
        "ua": "так",
        "uk": "так",
        "pl": "Tak"
      },
      {
        "en": "york",
        "ua": "йорк",
        "uk": "йорк",
        "pl": "miasto York"
      },
      {
        "en": "class",
        "ua": "клас",
        "uk": "клас",
        "pl": "klasa"
      },
      {
        "en": "close",
        "ua": "закрити",
        "uk": "закрити",
        "pl": "zamknąć"
      },
      {
        "en": "comes",
        "ua": "приходить",
        "uk": "приходить",
        "pl": "komes"
      },
      {
        "en": "idea",
        "ua": "ідея",
        "uk": "ідея",
        "pl": "pomysł"
      },
      {
        "en": "international",
        "ua": "міжнародний",
        "uk": "міжнародний",
        "pl": "międzynarodowy"
      },
      {
        "en": "looks",
        "ua": "виглядає",
        "uk": "виглядає",
        "pl": "wygląda"
      },
      {
        "en": "past",
        "ua": "минуле",
        "uk": "минуле",
        "pl": "przeszłość"
      },
      {
        "en": "possible",
        "ua": "можливо",
        "uk": "можливо",
        "pl": "możliwy"
      },
      {
        "en": "wanted",
        "ua": "хотів",
        "uk": "хотів",
        "pl": "poszukiwany"
      },
      {
        "en": "cause",
        "ua": "причина",
        "uk": "причина",
        "pl": "przyczyna"
      },
      {
        "en": "happy",
        "ua": "щасливий",
        "uk": "щасливий",
        "pl": "szczęśliwy"
      },
      {
        "en": "human",
        "ua": "людини",
        "uk": "людини",
        "pl": "człowiek"
      },
      {
        "en": "members",
        "ua": "членів",
        "uk": "членів",
        "pl": "członkowie"
      },
      {
        "en": "months",
        "ua": "місяців",
        "uk": "місяців",
        "pl": "miesiące"
      },
      {
        "en": "move",
        "ua": "рухатися",
        "uk": "рухатися",
        "pl": "przenosić"
      },
      {
        "en": "question",
        "ua": "запитання",
        "uk": "запитання",
        "pl": "pytanie"
      },
      {
        "en": "series",
        "ua": "серії",
        "uk": "серії",
        "pl": "szereg"
      },
      {
        "en": "wait",
        "ua": "чекати",
        "uk": "чекати",
        "pl": "Czekać"
      },
      {
        "en": "woman",
        "ua": "жінка",
        "uk": "жінка",
        "pl": "kobieta"
      },
      {
        "en": "community",
        "ua": "громада",
        "uk": "громада",
        "pl": "wspólnota"
      },
      {
        "en": "data",
        "ua": "даних",
        "uk": "даних",
        "pl": "dane"
      },
      {
        "en": "late",
        "ua": "пізно",
        "uk": "пізно",
        "pl": "późno"
      },
      {
        "en": "leave",
        "ua": "залишити",
        "uk": "залишити",
        "pl": "Zostawić"
      },
      {
        "en": "north",
        "ua": "північ",
        "uk": "північ",
        "pl": "północ"
      },
      {
        "en": "special",
        "ua": "спеціальні",
        "uk": "спеціальні",
        "pl": "specjalny"
      },
      {
        "en": "watch",
        "ua": "дивитися",
        "uk": "дивитися",
        "pl": "oglądać"
      },
      {
        "en": "either",
        "ua": "або",
        "uk": "або",
        "pl": "albo"
      },
      {
        "en": "fucking",
        "ua": "блядь",
        "uk": "блядь",
        "pl": "pierdolony"
      },
      {
        "en": "future",
        "ua": "майбутнє",
        "uk": "майбутнє",
        "pl": "przyszły"
      },
      {
        "en": "light",
        "ua": "світло",
        "uk": "світло",
        "pl": "światło"
      },
      {
        "en": "million",
        "ua": "мільйон",
        "uk": "мільйон",
        "pl": "milion"
      },
      {
        "en": "morning",
        "ua": "ранок",
        "uk": "ранок",
        "pl": "Poranek"
      },
      {
        "en": "police",
        "ua": "поліція",
        "uk": "поліція",
        "pl": "Policja"
      },
      {
        "en": "short",
        "ua": "короткий",
        "uk": "короткий",
        "pl": "krótki"
      },
      {
        "en": "stay",
        "ua": "залишитися",
        "uk": "залишитися",
        "pl": "zostawać"
      },
      {
        "en": "taken",
        "ua": "взято",
        "uk": "взято",
        "pl": "zajęty"
      },
      {
        "en": "deal",
        "ua": "справа",
        "uk": "справа",
        "pl": "umowa"
      },
      {
        "en": "rather",
        "ua": "швидше",
        "uk": "швидше",
        "pl": "raczej"
      },
      {
        "en": "reason",
        "ua": "причина",
        "uk": "причина",
        "pl": "powód"
      },
      {
        "en": "report",
        "ua": "звіт",
        "uk": "звіт",
        "pl": "raport"
      },
      {
        "en": "soon",
        "ua": "скоро",
        "uk": "скоро",
        "pl": "Wkrótce"
      },
      {
        "en": "third",
        "ua": "третій",
        "uk": "третій",
        "pl": "trzeci"
      },
      {
        "en": "turn",
        "ua": "поворот",
        "uk": "поворот",
        "pl": "zakręt"
      },
      {
        "en": "whether",
        "ua": "чи",
        "uk": "чи",
        "pl": "czy"
      },
      {
        "en": "among",
        "ua": "серед",
        "uk": "серед",
        "pl": "wśród"
      },
      {
        "en": "check",
        "ua": "перевірка",
        "uk": "перевірка",
        "pl": "sprawdzać"
      },
      {
        "en": "development",
        "ua": "розвитку",
        "uk": "розвитку",
        "pl": "rozwój"
      },
      {
        "en": "form",
        "ua": "форму",
        "uk": "форму",
        "pl": "formularz"
      }
    ],
    "Work": [
      {
        "en": "meeting",
        "ua": "засідання",
        "uk": "засідання",
        "pl": "spotkanie"
      },
      {
        "en": "deadline",
        "ua": "крайній термін",
        "uk": "крайній термін",
        "pl": "termin ostateczny"
      },
      {
        "en": "salary",
        "ua": "зарплата",
        "uk": "зарплата",
        "pl": "wynagrodzenie"
      },
      {
        "en": "contract",
        "ua": "договір",
        "uk": "договір",
        "pl": "umowa"
      },
      {
        "en": "manager",
        "ua": "менеджер",
        "uk": "менеджер",
        "pl": "menedżer"
      },
      {
        "en": "colleague",
        "ua": "колега",
        "uk": "колега",
        "pl": "kolega z pracy"
      },
      {
        "en": "shift",
        "ua": "зміна",
        "uk": "зміна",
        "pl": "zmiana"
      },
      {
        "en": "interview",
        "ua": "інтерв'ю",
        "uk": "інтерв'ю",
        "pl": "wywiad"
      },
      {
        "en": "promotion",
        "ua": "просування по службі",
        "uk": "просування по службі",
        "pl": "promocja"
      },
      {
        "en": "overtime",
        "ua": "понаднормова робота",
        "uk": "понаднормова робота",
        "pl": "nadgodziny"
      },
      {
        "en": "feedback",
        "ua": "зворотній зв'язок",
        "uk": "зворотній зв'язок",
        "pl": "informacja zwrotna"
      },
      {
        "en": "further",
        "ua": "далі",
        "uk": "далі",
        "pl": "dalej"
      },
      {
        "en": "heart",
        "ua": "серце",
        "uk": "серце",
        "pl": "serce"
      },
      {
        "en": "minutes",
        "ua": "хвилин",
        "uk": "хвилин",
        "pl": "protokół"
      },
      {
        "en": "myself",
        "ua": "себе",
        "uk": "себе",
        "pl": "ja"
      },
      {
        "en": "services",
        "ua": "послуги",
        "uk": "послуги",
        "pl": "usługi"
      },
      {
        "en": "yourself",
        "ua": "себе",
        "uk": "себе",
        "pl": "się"
      },
      {
        "en": "although",
        "ua": "хоча",
        "uk": "хоча",
        "pl": "Chociaż"
      },
      {
        "en": "asked",
        "ua": "запитав",
        "uk": "запитав",
        "pl": "zapytał"
      },
      {
        "en": "child",
        "ua": "дитина",
        "uk": "дитина",
        "pl": "dziecko"
      },
      {
        "en": "fire",
        "ua": "вогонь",
        "uk": "вогонь",
        "pl": "ogień"
      },
      {
        "en": "living",
        "ua": "життя",
        "uk": "життя",
        "pl": "żyjący"
      },
      {
        "en": "major",
        "ua": "майор",
        "uk": "майор",
        "pl": "główny"
      },
      {
        "en": "media",
        "ua": "ЗМІ",
        "uk": "ЗМІ",
        "pl": "głoska bezdźwięczna"
      },
      {
        "en": "phone",
        "ua": "телефон",
        "uk": "телефон",
        "pl": "telefon"
      },
      {
        "en": "players",
        "ua": "гравців",
        "uk": "гравців",
        "pl": "gracze"
      },
      {
        "en": "behind",
        "ua": "ззаду",
        "uk": "ззаду",
        "pl": "za"
      },
      {
        "en": "building",
        "ua": "будівля",
        "uk": "будівля",
        "pl": "budynek"
      },
      {
        "en": "easy",
        "ua": "легко",
        "uk": "легко",
        "pl": "łatwy"
      },
      {
        "en": "gonna",
        "ua": "збираюся",
        "uk": "збираюся",
        "pl": "zamierzać"
      },
      {
        "en": "market",
        "ua": "ринку",
        "uk": "ринку",
        "pl": "rynek"
      },
      {
        "en": "near",
        "ua": "поблизу",
        "uk": "поблизу",
        "pl": "w pobliżu"
      },
      {
        "en": "plan",
        "ua": "планувати",
        "uk": "планувати",
        "pl": "zamysł"
      },
      {
        "en": "political",
        "ua": "політичні",
        "uk": "політичні",
        "pl": "polityczny"
      },
      {
        "en": "quite",
        "ua": "цілком",
        "uk": "цілком",
        "pl": "całkiem"
      },
      {
        "en": "talking",
        "ua": "говорити",
        "uk": "говорити",
        "pl": "rozmawiając"
      },
      {
        "en": "west",
        "ua": "захід",
        "uk": "захід",
        "pl": "Zachód"
      },
      {
        "en": "works",
        "ua": "працює",
        "uk": "працює",
        "pl": "fabryka"
      },
      {
        "en": "according",
        "ua": "відповідно",
        "uk": "відповідно",
        "pl": "według"
      },
      {
        "en": "available",
        "ua": "доступний",
        "uk": "доступний",
        "pl": "dostępny"
      },
      {
        "en": "education",
        "ua": "освіти",
        "uk": "освіти",
        "pl": "edukacja"
      },
      {
        "en": "final",
        "ua": "остаточний",
        "uk": "остаточний",
        "pl": "finał"
      },
      {
        "en": "former",
        "ua": "колишній",
        "uk": "колишній",
        "pl": "dawny"
      },
      {
        "en": "front",
        "ua": "спереду",
        "uk": "спереду",
        "pl": "przód"
      },
      {
        "en": "kids",
        "ua": "діти",
        "uk": "діти",
        "pl": "dzieci"
      },
      {
        "en": "list",
        "ua": "список",
        "uk": "список",
        "pl": "lista"
      },
      {
        "en": "ready",
        "ua": "готовий",
        "uk": "готовий",
        "pl": "gotowy"
      },
      {
        "en": "sometimes",
        "ua": "іноді",
        "uk": "іноді",
        "pl": "Czasami"
      },
      {
        "en": "street",
        "ua": "вулиця",
        "uk": "вулиця",
        "pl": "ulica"
      },
      {
        "en": "bring",
        "ua": "принести",
        "uk": "принести",
        "pl": "przynieść"
      },
      {
        "en": "college",
        "ua": "коледж",
        "uk": "коледж",
        "pl": "kolegium"
      },
      {
        "en": "current",
        "ua": "поточний",
        "uk": "поточний",
        "pl": "aktualny"
      },
      {
        "en": "example",
        "ua": "приклад",
        "uk": "приклад",
        "pl": "przykład"
      },
      {
        "en": "experience",
        "ua": "досвід",
        "uk": "досвід",
        "pl": "doświadczenie"
      },
      {
        "en": "heard",
        "ua": "чув",
        "uk": "чув",
        "pl": "usłyszał"
      },
      {
        "en": "london",
        "ua": "лондон",
        "uk": "лондон",
        "pl": "Londyn"
      },
      {
        "en": "meet",
        "ua": "зустріти",
        "uk": "зустріти",
        "pl": "poznać"
      },
      {
        "en": "program",
        "ua": "програма",
        "uk": "програма",
        "pl": "aplikacja"
      },
      {
        "en": "type",
        "ua": "типу",
        "uk": "типу",
        "pl": "typ"
      },
      {
        "en": "baby",
        "ua": "дитина",
        "uk": "дитина",
        "pl": "Dziecko"
      },
      {
        "en": "chance",
        "ua": "шанс",
        "uk": "шанс",
        "pl": "szansa"
      },
      {
        "en": "march",
        "ua": "марш",
        "uk": "марш",
        "pl": "marzec"
      },
      {
        "en": "process",
        "ua": "процес",
        "uk": "процес",
        "pl": "proces"
      },
      {
        "en": "song",
        "ua": "пісня",
        "uk": "пісня",
        "pl": "piosenka"
      },
      {
        "en": "study",
        "ua": "вивчення",
        "uk": "вивчення",
        "pl": "badanie"
      },
      {
        "en": "word",
        "ua": "слово",
        "uk": "слово",
        "pl": "słowo"
      },
      {
        "en": "across",
        "ua": "поперек",
        "uk": "поперек",
        "pl": "przez"
      },
      {
        "en": "action",
        "ua": "дію",
        "uk": "дію",
        "pl": "działanie"
      },
      {
        "en": "clear",
        "ua": "ясно",
        "uk": "ясно",
        "pl": "jasne"
      },
      {
        "en": "gave",
        "ua": "дав",
        "uk": "дав",
        "pl": "dał"
      },
      {
        "en": "gets",
        "ua": "отримує",
        "uk": "отримує",
        "pl": "dostaje"
      },
      {
        "en": "himself",
        "ua": "себе",
        "uk": "себе",
        "pl": "się"
      },
      {
        "en": "month",
        "ua": "місяць",
        "uk": "місяць",
        "pl": "miesiąc"
      },
      {
        "en": "outside",
        "ua": "назовні",
        "uk": "назовні",
        "pl": "poza"
      },
      {
        "en": "self",
        "ua": "себе",
        "uk": "себе",
        "pl": "ja"
      },
      {
        "en": "students",
        "ua": "студентів",
        "uk": "студентів",
        "pl": "studenci"
      },
      {
        "en": "words",
        "ua": "слова",
        "uk": "слова",
        "pl": "słowa"
      },
      {
        "en": "board",
        "ua": "дошка",
        "uk": "дошка",
        "pl": "tablica"
      },
      {
        "en": "cost",
        "ua": "вартість",
        "uk": "вартість",
        "pl": "koszt"
      },
      {
        "en": "field",
        "ua": "поле",
        "uk": "поле",
        "pl": "pole"
      },
      {
        "en": "held",
        "ua": "проведено",
        "uk": "проведено",
        "pl": "trzymany"
      },
      {
        "en": "instead",
        "ua": "замість цього",
        "uk": "замість цього",
        "pl": "Zamiast"
      },
      {
        "en": "main",
        "ua": "основний",
        "uk": "основний",
        "pl": "główny"
      },
      {
        "en": "moment",
        "ua": "момент",
        "uk": "момент",
        "pl": "chwila"
      },
      {
        "en": "road",
        "ua": "дорога",
        "uk": "дорога",
        "pl": "droga"
      },
      {
        "en": "seems",
        "ua": "здається",
        "uk": "здається",
        "pl": "wydaje się"
      },
      {
        "en": "thinking",
        "ua": "мислення",
        "uk": "мислення",
        "pl": "myślący"
      },
      {
        "en": "town",
        "ua": "місто",
        "uk": "місто",
        "pl": "miasto"
      },
      {
        "en": "wants",
        "ua": "хоче",
        "uk": "хоче",
        "pl": "chce"
      },
      {
        "en": "department",
        "ua": "відділ",
        "uk": "відділ",
        "pl": "dział"
      },
      {
        "en": "energy",
        "ua": "енергії",
        "uk": "енергії",
        "pl": "energia"
      },
      {
        "en": "fight",
        "ua": "боротися",
        "uk": "боротися",
        "pl": "walka"
      },
      {
        "en": "fine",
        "ua": "добре",
        "uk": "добре",
        "pl": "Cienki"
      },
      {
        "en": "force",
        "ua": "сила",
        "uk": "сила",
        "pl": "siła"
      },
      {
        "en": "hear",
        "ua": "чути",
        "uk": "чути",
        "pl": "słyszeć"
      },
      {
        "en": "issue",
        "ua": "питання",
        "uk": "питання",
        "pl": "wydanie"
      },
      {
        "en": "played",
        "ua": "грав",
        "uk": "грав",
        "pl": "grał"
      }
    ],
    "Health": [
      {
        "en": "doctor",
        "ua": "лікар",
        "uk": "лікар",
        "pl": "lekarz"
      },
      {
        "en": "nurse",
        "ua": "медсестра",
        "uk": "медсестра",
        "pl": "pielęgniarka"
      },
      {
        "en": "clinic",
        "ua": "клініка",
        "uk": "клініка",
        "pl": "klinika"
      },
      {
        "en": "medicine",
        "ua": "ліки",
        "uk": "ліки",
        "pl": "medycyna"
      },
      {
        "en": "fever",
        "ua": "лихоманка",
        "uk": "лихоманка",
        "pl": "gorączka"
      },
      {
        "en": "cough",
        "ua": "кашель",
        "uk": "кашель",
        "pl": "kaszel"
      },
      {
        "en": "appointment",
        "ua": "призначення",
        "uk": "призначення",
        "pl": "spotkanie"
      },
      {
        "en": "diet",
        "ua": "дієта",
        "uk": "дієта",
        "pl": "dieta"
      },
      {
        "en": "vitamin",
        "ua": "вітамін",
        "uk": "вітамін",
        "pl": "witamina"
      },
      {
        "en": "injury",
        "ua": "травма",
        "uk": "травма",
        "pl": "obrażenia"
      },
      {
        "en": "recovery",
        "ua": "відновлення",
        "uk": "відновлення",
        "pl": "powrót do zdrowia"
      },
      {
        "en": "headache",
        "ua": "головний біль",
        "uk": "головний біль",
        "pl": "ból głowy"
      },
      {
        "en": "points",
        "ua": "балів",
        "uk": "балів",
        "pl": "zwrotnica"
      },
      {
        "en": "price",
        "ua": "ціна",
        "uk": "ціна",
        "pl": "cena"
      },
      {
        "en": "rest",
        "ua": "відпочинок",
        "uk": "відпочинок",
        "pl": "odpoczynek"
      },
      {
        "en": "results",
        "ua": "результати",
        "uk": "результати",
        "pl": "wyniki"
      },
      {
        "en": "running",
        "ua": "біг",
        "uk": "біг",
        "pl": "działanie"
      },
      {
        "en": "shows",
        "ua": "шоу",
        "uk": "шоу",
        "pl": "widać"
      },
      {
        "en": "space",
        "ua": "простір",
        "uk": "простір",
        "pl": "przestrzeń"
      },
      {
        "en": "summer",
        "ua": "літо",
        "uk": "літо",
        "pl": "lato"
      },
      {
        "en": "term",
        "ua": "термін",
        "uk": "термін",
        "pl": "termin"
      },
      {
        "en": "america",
        "ua": "америка",
        "uk": "америка",
        "pl": "Ameryka"
      },
      {
        "en": "beautiful",
        "ua": "красива",
        "uk": "красива",
        "pl": "Piękny"
      },
      {
        "en": "date",
        "ua": "дата",
        "uk": "дата",
        "pl": "data"
      },
      {
        "en": "goes",
        "ua": "йде",
        "uk": "йде",
        "pl": "wchodzi"
      },
      {
        "en": "killed",
        "ua": "убитий",
        "uk": "убитий",
        "pl": "zabity"
      },
      {
        "en": "land",
        "ua": "землі",
        "uk": "землі",
        "pl": "grunt"
      },
      {
        "en": "miss",
        "ua": "міс",
        "uk": "міс",
        "pl": "chybić"
      },
      {
        "en": "project",
        "ua": "демонструвати",
        "uk": "демонструвати",
        "pl": "projekt"
      },
      {
        "en": "shot",
        "ua": "постріл",
        "uk": "постріл",
        "pl": "strzał"
      },
      {
        "en": "site",
        "ua": "сайт",
        "uk": "сайт",
        "pl": "strona"
      },
      {
        "en": "strong",
        "ua": "сильний",
        "uk": "сильний",
        "pl": "mocny"
      },
      {
        "en": "account",
        "ua": "рахунок",
        "uk": "рахунок",
        "pl": "konto"
      },
      {
        "en": "especially",
        "ua": "особливо",
        "uk": "особливо",
        "pl": "zwłaszcza"
      },
      {
        "en": "eyes",
        "ua": "очі",
        "uk": "очі",
        "pl": "oczy"
      },
      {
        "en": "include",
        "ua": "включити",
        "uk": "включити",
        "pl": "włączać"
      },
      {
        "en": "june",
        "ua": "червень",
        "uk": "червень",
        "pl": "czerwiec"
      },
      {
        "en": "parents",
        "ua": "батьки",
        "uk": "батьки",
        "pl": "rodzice"
      },
      {
        "en": "period",
        "ua": "період",
        "uk": "період",
        "pl": "okres"
      },
      {
        "en": "position",
        "ua": "положення",
        "uk": "положення",
        "pl": "pozycja"
      },
      {
        "en": "record",
        "ua": "запис",
        "uk": "запис",
        "pl": "nagrywać"
      },
      {
        "en": "similar",
        "ua": "подібні",
        "uk": "подібні",
        "pl": "podobny"
      },
      {
        "en": "total",
        "ua": "всього",
        "uk": "всього",
        "pl": "całkowity"
      },
      {
        "en": "above",
        "ua": "вище",
        "uk": "вище",
        "pl": "powyżej"
      },
      {
        "en": "club",
        "ua": "клуб",
        "uk": "клуб",
        "pl": "klub"
      },
      {
        "en": "common",
        "ua": "поширений",
        "uk": "поширений",
        "pl": "wspólny"
      },
      {
        "en": "died",
        "ua": "померла",
        "uk": "померла",
        "pl": "zmarł"
      },
      {
        "en": "film",
        "ua": "фільм",
        "uk": "фільм",
        "pl": "obraz filmowy"
      },
      {
        "en": "happened",
        "ua": "сталося",
        "uk": "сталося",
        "pl": "się stało"
      },
      {
        "en": "knew",
        "ua": "знав",
        "uk": "знав",
        "pl": "wiedział"
      },
      {
        "en": "lead",
        "ua": "привести",
        "uk": "привести",
        "pl": "Ołów"
      },
      {
        "en": "likely",
        "ua": "ймовірно",
        "uk": "ймовірно",
        "pl": "prawdopodobnie"
      },
      {
        "en": "military",
        "ua": "військовий",
        "uk": "військовий",
        "pl": "wojskowy"
      },
      {
        "en": "perfect",
        "ua": "ідеальний",
        "uk": "ідеальний",
        "pl": "doskonały"
      },
      {
        "en": "personal",
        "ua": "особистий",
        "uk": "особистий",
        "pl": "osobisty"
      },
      {
        "en": "security",
        "ua": "безпеки",
        "uk": "безпеки",
        "pl": "bezpieczeństwo"
      },
      {
        "en": "share",
        "ua": "частка",
        "uk": "частка",
        "pl": "udział"
      },
      {
        "en": "april",
        "ua": "квітень",
        "uk": "квітень",
        "pl": "kwiecień"
      },
      {
        "en": "center",
        "ua": "центр",
        "uk": "центр",
        "pl": "centrum"
      },
      {
        "en": "county",
        "ua": "повіт",
        "uk": "повіт",
        "pl": "hrabstwo"
      },
      {
        "en": "couple",
        "ua": "пара",
        "uk": "пара",
        "pl": "para"
      },
      {
        "en": "dead",
        "ua": "мертвий",
        "uk": "мертвий",
        "pl": "martwy"
      },
      {
        "en": "english",
        "ua": "англійська",
        "uk": "англійська",
        "pl": "angielski"
      },
      {
        "en": "happen",
        "ua": "статися",
        "uk": "статися",
        "pl": "stać się"
      },
      {
        "en": "hold",
        "ua": "утримувати",
        "uk": "утримувати",
        "pl": "trzymać"
      },
      {
        "en": "industry",
        "ua": "промисловість",
        "uk": "промисловість",
        "pl": "przemysł"
      },
      {
        "en": "inside",
        "ua": "всередині",
        "uk": "всередині",
        "pl": "wewnątrz"
      },
      {
        "en": "issues",
        "ua": "питань",
        "uk": "питань",
        "pl": "kwestie"
      },
      {
        "en": "online",
        "ua": "онлайн",
        "uk": "онлайн",
        "pl": "w Internecie"
      },
      {
        "en": "player",
        "ua": "гравець",
        "uk": "гравець",
        "pl": "odtwarzacz"
      },
      {
        "en": "private",
        "ua": "приватний",
        "uk": "приватний",
        "pl": "prywatny"
      },
      {
        "en": "problems",
        "ua": "проблеми",
        "uk": "проблеми",
        "pl": "problemy"
      },
      {
        "en": "return",
        "ua": "повернення",
        "uk": "повернення",
        "pl": "powrót"
      },
      {
        "en": "rights",
        "ua": "прав",
        "uk": "прав",
        "pl": "prawa"
      },
      {
        "en": "sense",
        "ua": "сенс",
        "uk": "сенс",
        "pl": "sens"
      },
      {
        "en": "star",
        "ua": "зірка",
        "uk": "зірка",
        "pl": "gwiazda"
      },
      {
        "en": "test",
        "ua": "тест",
        "uk": "тест",
        "pl": "sprawdzian"
      },
      {
        "en": "view",
        "ua": "переглянути",
        "uk": "переглянути",
        "pl": "pogląd"
      },
      {
        "en": "weeks",
        "ua": "тижнів",
        "uk": "тижнів",
        "pl": "tygodnie"
      },
      {
        "en": "break",
        "ua": "перерва",
        "uk": "перерва",
        "pl": "przerwa"
      },
      {
        "en": "british",
        "ua": "британський",
        "uk": "британський",
        "pl": "brytyjski"
      },
      {
        "en": "companies",
        "ua": "компаній",
        "uk": "компаній",
        "pl": "firmy"
      },
      {
        "en": "event",
        "ua": "подія",
        "uk": "подія",
        "pl": "wydarzenie"
      },
      {
        "en": "higher",
        "ua": "вище",
        "uk": "вище",
        "pl": "wyższy"
      },
      {
        "en": "hour",
        "ua": "година",
        "uk": "година",
        "pl": "godzina"
      },
      {
        "en": "member",
        "ua": "член",
        "uk": "член",
        "pl": "członek"
      },
      {
        "en": "middle",
        "ua": "середина",
        "uk": "середина",
        "pl": "środek"
      },
      {
        "en": "needed",
        "ua": "необхідний",
        "uk": "необхідний",
        "pl": "wymagany"
      },
      {
        "en": "present",
        "ua": "присутній",
        "uk": "присутній",
        "pl": "obecny"
      },
      {
        "en": "result",
        "ua": "результат",
        "uk": "результат",
        "pl": "wynik"
      },
      {
        "en": "sorry",
        "ua": "вибачте",
        "uk": "вибачте",
        "pl": "Przepraszam"
      },
      {
        "en": "takes",
        "ua": "приймає",
        "uk": "приймає",
        "pl": "bierze"
      },
      {
        "en": "training",
        "ua": "навчання",
        "uk": "навчання",
        "pl": "szkolenie"
      },
      {
        "en": "wish",
        "ua": "бажання",
        "uk": "бажання",
        "pl": "życzenie"
      },
      {
        "en": "answer",
        "ua": "відповідь",
        "uk": "відповідь",
        "pl": "odpowiedź"
      },
      {
        "en": "design",
        "ua": "дизайн",
        "uk": "дизайн",
        "pl": "projekt"
      },
      {
        "en": "finally",
        "ua": "нарешті",
        "uk": "нарешті",
        "pl": "Wreszcie"
      },
      {
        "en": "girls",
        "ua": "дівчата",
        "uk": "дівчата",
        "pl": "dziewczyny"
      },
      {
        "en": "gold",
        "ua": "золото",
        "uk": "золото",
        "pl": "złoto"
      }
    ]
  },
  "B1": {
    "Environment": [
      {
        "en": "pollution",
        "ua": "забруднення",
        "uk": "забруднення",
        "pl": "zanieczyszczenie"
      },
      {
        "en": "recycling",
        "ua": "переробка",
        "uk": "переробка",
        "pl": "recykling"
      },
      {
        "en": "wildlife",
        "ua": "дика природа",
        "uk": "дика природа",
        "pl": "dzika przyroda"
      },
      {
        "en": "drought",
        "ua": "посуха",
        "uk": "посуха",
        "pl": "susza"
      },
      {
        "en": "flood",
        "ua": "повінь",
        "uk": "повінь",
        "pl": "powódź"
      },
      {
        "en": "emission",
        "ua": "емісія",
        "uk": "емісія",
        "pl": "emisja"
      },
      {
        "en": "habitat",
        "ua": "середовище проживання",
        "uk": "середовище проживання",
        "pl": "siedlisko"
      },
      {
        "en": "ecosystem",
        "ua": "екосистема",
        "uk": "екосистема",
        "pl": "ekosystem"
      },
      {
        "en": "climate",
        "ua": "клімат",
        "uk": "клімат",
        "pl": "klimat"
      },
      {
        "en": "landfill",
        "ua": "звалище",
        "uk": "звалище",
        "pl": "wysypisko śmieci"
      },
      {
        "en": "conservation",
        "ua": "збереження",
        "uk": "збереження",
        "pl": "ochrona"
      },
      {
        "en": "renewable",
        "ua": "поновлюваний",
        "uk": "поновлюваний",
        "pl": "odnawialne"
      },
      {
        "en": "gone",
        "ua": "пішов",
        "uk": "пішов",
        "pl": "stracony"
      },
      {
        "en": "guess",
        "ua": "вгадати",
        "uk": "вгадати",
        "pl": "zgadywać"
      },
      {
        "en": "interest",
        "ua": "інтерес",
        "uk": "інтерес",
        "pl": "odsetki"
      },
      {
        "en": "july",
        "ua": "липень",
        "uk": "липень",
        "pl": "lipiec"
      },
      {
        "en": "king",
        "ua": "король",
        "uk": "король",
        "pl": "król"
      },
      {
        "en": "learn",
        "ua": "навчитися",
        "uk": "навчитися",
        "pl": "uczyć się"
      },
      {
        "en": "policy",
        "ua": "політики",
        "uk": "політики",
        "pl": "polityka"
      },
      {
        "en": "society",
        "ua": "суспільства",
        "uk": "суспільства",
        "pl": "społeczeństwo"
      },
      {
        "en": "added",
        "ua": "додано",
        "uk": "додано",
        "pl": "w dodatku"
      },
      {
        "en": "alone",
        "ua": "поодинці",
        "uk": "поодинці",
        "pl": "sam"
      },
      {
        "en": "average",
        "ua": "середній",
        "uk": "середній",
        "pl": "przeciętny"
      },
      {
        "en": "bank",
        "ua": "банку",
        "uk": "банку",
        "pl": "instytucja bankowa"
      },
      {
        "en": "brought",
        "ua": "приніс",
        "uk": "приніс",
        "pl": "przyniósł"
      },
      {
        "en": "certain",
        "ua": "певний",
        "uk": "певний",
        "pl": "niektórzy"
      },
      {
        "en": "church",
        "ua": "церква",
        "uk": "церква",
        "pl": "kościół"
      },
      {
        "en": "east",
        "ua": "схід",
        "uk": "схід",
        "pl": "wschód"
      },
      {
        "en": "hands",
        "ua": "руками",
        "uk": "руками",
        "pl": "siła robocza"
      },
      {
        "en": "longer",
        "ua": "довше",
        "uk": "довше",
        "pl": "dłużej"
      },
      {
        "en": "medical",
        "ua": "медичний",
        "uk": "медичний",
        "pl": "medyczny"
      },
      {
        "en": "movie",
        "ua": "фільм",
        "uk": "фільм",
        "pl": "film"
      },
      {
        "en": "original",
        "ua": "оригінальний",
        "uk": "оригінальний",
        "pl": "oryginalny"
      },
      {
        "en": "park",
        "ua": "парк",
        "uk": "парк",
        "pl": "teren zielony"
      },
      {
        "en": "performance",
        "ua": "продуктивність",
        "uk": "продуктивність",
        "pl": "wydajność"
      },
      {
        "en": "press",
        "ua": "преса",
        "uk": "преса",
        "pl": "naciskać"
      },
      {
        "en": "received",
        "ua": "отримано",
        "uk": "отримано",
        "pl": "otrzymane"
      },
      {
        "en": "role",
        "ua": "роль",
        "uk": "роль",
        "pl": "rola"
      },
      {
        "en": "sent",
        "ua": "надіслано",
        "uk": "надіслано",
        "pl": "wysłano"
      },
      {
        "en": "themselves",
        "ua": "себе",
        "uk": "себе",
        "pl": "sobie"
      },
      {
        "en": "tried",
        "ua": "пробував",
        "uk": "пробував",
        "pl": "wypróbowany"
      },
      {
        "en": "worked",
        "ua": "працював",
        "uk": "працював",
        "pl": "pracował"
      },
      {
        "en": "worth",
        "ua": "варто",
        "uk": "варто",
        "pl": "wartość"
      },
      {
        "en": "areas",
        "ua": "області",
        "uk": "області",
        "pl": "obszary"
      },
      {
        "en": "became",
        "ua": "став",
        "uk": "став",
        "pl": "stał się"
      },
      {
        "en": "bill",
        "ua": "рахунок",
        "uk": "рахунок",
        "pl": "rachunek"
      },
      {
        "en": "books",
        "ua": "книги",
        "uk": "книги",
        "pl": "książki"
      },
      {
        "en": "cool",
        "ua": "круто",
        "uk": "круто",
        "pl": "Fajny"
      },
      {
        "en": "director",
        "ua": "директор",
        "uk": "директор",
        "pl": "dyrektor"
      },
      {
        "en": "exactly",
        "ua": "точно",
        "uk": "точно",
        "pl": "Dokładnie"
      },
      {
        "en": "giving",
        "ua": "надання",
        "uk": "надання",
        "pl": "dający"
      },
      {
        "en": "ground",
        "ua": "землю",
        "uk": "землю",
        "pl": "grunt"
      },
      {
        "en": "provide",
        "ua": "забезпечити",
        "uk": "забезпечити",
        "pl": "dostarczać"
      },
      {
        "en": "questions",
        "ua": "запитання",
        "uk": "запитання",
        "pl": "pytania"
      },
      {
        "en": "relationship",
        "ua": "відносини",
        "uk": "відносини",
        "pl": "relacja"
      },
      {
        "en": "september",
        "ua": "вересень",
        "uk": "вересень",
        "pl": "wrzesień"
      },
      {
        "en": "sound",
        "ua": "звук",
        "uk": "звук",
        "pl": "dźwięk"
      },
      {
        "en": "source",
        "ua": "джерело",
        "uk": "джерело",
        "pl": "źródło"
      },
      {
        "en": "usually",
        "ua": "зазвичай",
        "uk": "зазвичай",
        "pl": "zazwyczaj"
      },
      {
        "en": "value",
        "ua": "значення",
        "uk": "значення",
        "pl": "wartość"
      },
      {
        "en": "evidence",
        "ua": "докази",
        "uk": "докази",
        "pl": "dowód"
      },
      {
        "en": "follow",
        "ua": "слідувати",
        "uk": "слідувати",
        "pl": "podążać"
      },
      {
        "en": "lives",
        "ua": "життя",
        "uk": "життя",
        "pl": "żyje"
      },
      {
        "en": "official",
        "ua": "офіційний",
        "uk": "офіційний",
        "pl": "urzędnik"
      },
      {
        "en": "production",
        "ua": "виробництва",
        "uk": "виробництва",
        "pl": "produkcja"
      },
      {
        "en": "rate",
        "ua": "швидкість",
        "uk": "швидкість",
        "pl": "wskaźnik"
      },
      {
        "en": "reading",
        "ua": "читання",
        "uk": "читання",
        "pl": "czytanie"
      },
      {
        "en": "round",
        "ua": "круглий",
        "uk": "круглий",
        "pl": "okrągły"
      },
      {
        "en": "save",
        "ua": "зберегти",
        "uk": "зберегти",
        "pl": "ratować"
      },
      {
        "en": "stand",
        "ua": "стояти",
        "uk": "стояти",
        "pl": "podstawka"
      },
      {
        "en": "stuff",
        "ua": "речі",
        "uk": "речі",
        "pl": "rzeczy"
      },
      {
        "en": "whatever",
        "ua": "що завгодно",
        "uk": "що завгодно",
        "pl": "cokolwiek"
      },
      {
        "en": "amount",
        "ua": "сума",
        "uk": "сума",
        "pl": "kwota"
      },
      {
        "en": "blue",
        "ua": "блакитний",
        "uk": "блакитний",
        "pl": "niebieski"
      },
      {
        "en": "countries",
        "ua": "країни",
        "uk": "країни",
        "pl": "kraje"
      },
      {
        "en": "david",
        "ua": "Девід",
        "uk": "Девід",
        "pl": "Dawid"
      },
      {
        "en": "drive",
        "ua": "диск",
        "uk": "диск",
        "pl": "prowadzić"
      },
      {
        "en": "fall",
        "ua": "падіння",
        "uk": "падіння",
        "pl": "jesień"
      },
      {
        "en": "fast",
        "ua": "швидко",
        "uk": "швидко",
        "pl": "szybko"
      },
      {
        "en": "federal",
        "ua": "федеральний",
        "uk": "федеральний",
        "pl": "federalny"
      },
      {
        "en": "feeling",
        "ua": "почуття",
        "uk": "почуття",
        "pl": "uczucie"
      },
      {
        "en": "felt",
        "ua": "фетр",
        "uk": "фетр",
        "pl": "filc"
      },
      {
        "en": "green",
        "ua": "зелений",
        "uk": "зелений",
        "pl": "zielony"
      },
      {
        "en": "league",
        "ua": "ліга",
        "uk": "ліга",
        "pl": "liga"
      },
      {
        "en": "management",
        "ua": "управління",
        "uk": "управління",
        "pl": "kierownictwo"
      },
      {
        "en": "match",
        "ua": "матч",
        "uk": "матч",
        "pl": "mecz"
      },
      {
        "en": "model",
        "ua": "модель",
        "uk": "модель",
        "pl": "wzorzec"
      },
      {
        "en": "picture",
        "ua": "малюнок",
        "uk": "малюнок",
        "pl": "zdjęcie"
      },
      {
        "en": "size",
        "ua": "розмір",
        "uk": "розмір",
        "pl": "rozmiar"
      },
      {
        "en": "step",
        "ua": "крок",
        "uk": "крок",
        "pl": "krok"
      },
      {
        "en": "trust",
        "ua": "довіра",
        "uk": "довіра",
        "pl": "zaufanie"
      },
      {
        "en": "central",
        "ua": "центральний",
        "uk": "центральний",
        "pl": "centralny"
      },
      {
        "en": "changes",
        "ua": "зміни",
        "uk": "зміни",
        "pl": "zmiany"
      },
      {
        "en": "england",
        "ua": "Англія",
        "uk": "Англія",
        "pl": "anglia"
      },
      {
        "en": "forward",
        "ua": "вперед",
        "uk": "вперед",
        "pl": "do przodu"
      },
      {
        "en": "groups",
        "ua": "групи",
        "uk": "групи",
        "pl": "grupy"
      },
      {
        "en": "page",
        "ua": "сторінки",
        "uk": "сторінки",
        "pl": "strona"
      },
      {
        "en": "paid",
        "ua": "платний",
        "uk": "платний",
        "pl": "płatny"
      },
      {
        "en": "range",
        "ua": "діапазон",
        "uk": "діапазон",
        "pl": "zakres"
      }
    ],
    "Technology": [
      {
        "en": "software",
        "ua": "програмне забезпечення",
        "uk": "програмне забезпечення",
        "pl": "oprogramowanie"
      },
      {
        "en": "hardware",
        "ua": "обладнання",
        "uk": "обладнання",
        "pl": "sprzęt komputerowy"
      },
      {
        "en": "network",
        "ua": "мережі",
        "uk": "мережі",
        "pl": "sieć"
      },
      {
        "en": "database",
        "ua": "бази даних",
        "uk": "бази даних",
        "pl": "baza danych"
      },
      {
        "en": "password",
        "ua": "пароль",
        "uk": "пароль",
        "pl": "hasło"
      },
      {
        "en": "browser",
        "ua": "браузер",
        "uk": "браузер",
        "pl": "przeglądarka"
      },
      {
        "en": "download",
        "ua": "завантажити",
        "uk": "завантажити",
        "pl": "pobierać"
      },
      {
        "en": "upload",
        "ua": "завантажити",
        "uk": "завантажити",
        "pl": "wgrywać"
      },
      {
        "en": "device",
        "ua": "пристрій",
        "uk": "пристрій",
        "pl": "urządzenie"
      },
      {
        "en": "feature",
        "ua": "функція",
        "uk": "функція",
        "pl": "funkcja"
      },
      {
        "en": "update",
        "ua": "оновлення",
        "uk": "оновлення",
        "pl": "aktualizacja"
      },
      {
        "en": "shortcut",
        "ua": "ярлик",
        "uk": "ярлик",
        "pl": "skrót"
      },
      {
        "en": "review",
        "ua": "огляд",
        "uk": "огляд",
        "pl": "recenzja"
      },
      {
        "en": "science",
        "ua": "наука",
        "uk": "наука",
        "pl": "nauka"
      },
      {
        "en": "trade",
        "ua": "торгівля",
        "uk": "торгівля",
        "pl": "handel"
      },
      {
        "en": "upon",
        "ua": "на",
        "uk": "на",
        "pl": "od"
      },
      {
        "en": "various",
        "ua": "різні",
        "uk": "різні",
        "pl": "różny"
      },
      {
        "en": "attention",
        "ua": "уваги",
        "uk": "уваги",
        "pl": "uwaga"
      },
      {
        "en": "cannot",
        "ua": "не можна",
        "uk": "не можна",
        "pl": "nie mogę"
      },
      {
        "en": "character",
        "ua": "характер",
        "uk": "характер",
        "pl": "charakter"
      },
      {
        "en": "chief",
        "ua": "головний",
        "uk": "головний",
        "pl": "szef"
      },
      {
        "en": "football",
        "ua": "футбол",
        "uk": "футбол",
        "pl": "piłkarski"
      },
      {
        "en": "hate",
        "ua": "ненависть",
        "uk": "ненависть",
        "pl": "nienawidzić"
      },
      {
        "en": "james",
        "ua": "Джеймс",
        "uk": "Джеймс",
        "pl": "imię James"
      },
      {
        "en": "looked",
        "ua": "подивився",
        "uk": "подивився",
        "pl": "wyglądał"
      },
      {
        "en": "lower",
        "ua": "нижче",
        "uk": "нижче",
        "pl": "niżej"
      },
      {
        "en": "natural",
        "ua": "природний",
        "uk": "природний",
        "pl": "naturalny"
      },
      {
        "en": "october",
        "ua": "жовтень",
        "uk": "жовтень",
        "pl": "październik"
      },
      {
        "en": "property",
        "ua": "власність",
        "uk": "власність",
        "pl": "nieruchomość"
      },
      {
        "en": "quality",
        "ua": "якість",
        "uk": "якість",
        "pl": "jakość"
      },
      {
        "en": "send",
        "ua": "відправити",
        "uk": "відправити",
        "pl": "wysłać"
      },
      {
        "en": "style",
        "ua": "стиль",
        "uk": "стиль",
        "pl": "styl"
      },
      {
        "en": "vote",
        "ua": "голосувати",
        "uk": "голосувати",
        "pl": "głosować"
      },
      {
        "en": "amazing",
        "ua": "дивовижний",
        "uk": "дивовижний",
        "pl": "niesamowity"
      },
      {
        "en": "august",
        "ua": "серпень",
        "uk": "серпень",
        "pl": "sierpień"
      },
      {
        "en": "blood",
        "ua": "кров",
        "uk": "кров",
        "pl": "krew"
      },
      {
        "en": "china",
        "ua": "Китай",
        "uk": "Китай",
        "pl": "Chiny"
      },
      {
        "en": "complete",
        "ua": "повний",
        "uk": "повний",
        "pl": "kompletny"
      },
      {
        "en": "economic",
        "ua": "економічні",
        "uk": "економічні",
        "pl": "gospodarczy"
      },
      {
        "en": "hell",
        "ua": "пекло",
        "uk": "пекло",
        "pl": "piekło"
      },
      {
        "en": "involved",
        "ua": "залучений",
        "uk": "залучений",
        "pl": "zaangażowany"
      },
      {
        "en": "itself",
        "ua": "себе",
        "uk": "себе",
        "pl": "się"
      },
      {
        "en": "language",
        "ua": "мова",
        "uk": "мова",
        "pl": "język"
      },
      {
        "en": "lord",
        "ua": "лорд",
        "uk": "лорд",
        "pl": "szlachcic"
      },
      {
        "en": "november",
        "ua": "листопад",
        "uk": "листопад",
        "pl": "Listopad"
      },
      {
        "en": "related",
        "ua": "пов'язані",
        "uk": "пов'язані",
        "pl": "powiązany"
      },
      {
        "en": "serious",
        "ua": "серйозний",
        "uk": "серйозний",
        "pl": "poważny"
      },
      {
        "en": "stage",
        "ua": "етап",
        "uk": "етап",
        "pl": "scena"
      },
      {
        "en": "terms",
        "ua": "умови",
        "uk": "умови",
        "pl": "warunki"
      },
      {
        "en": "title",
        "ua": "назва",
        "uk": "назва",
        "pl": "tytuł"
      },
      {
        "en": "article",
        "ua": "стаття",
        "uk": "стаття",
        "pl": "artykuł"
      },
      {
        "en": "attack",
        "ua": "напад",
        "uk": "напад",
        "pl": "atak"
      },
      {
        "en": "born",
        "ua": "народився",
        "uk": "народився",
        "pl": "urodzić się"
      },
      {
        "en": "damn",
        "ua": "блін",
        "uk": "блін",
        "pl": "Cholera"
      },
      {
        "en": "decided",
        "ua": "вирішив",
        "uk": "вирішив",
        "pl": "zdecydowany"
      },
      {
        "en": "decision",
        "ua": "рішення",
        "uk": "рішення",
        "pl": "decyzja"
      },
      {
        "en": "enjoy",
        "ua": "насолоджуйтесь",
        "uk": "насолоджуйтесь",
        "pl": "Cieszyć się"
      },
      {
        "en": "entire",
        "ua": "цілий",
        "uk": "цілий",
        "pl": "cały"
      },
      {
        "en": "french",
        "ua": "французька",
        "uk": "французька",
        "pl": "francuski"
      },
      {
        "en": "january",
        "ua": "січень",
        "uk": "січень",
        "pl": "Styczeń"
      },
      {
        "en": "kill",
        "ua": "вбити",
        "uk": "вбити",
        "pl": "zabić"
      },
      {
        "en": "perhaps",
        "ua": "можливо",
        "uk": "можливо",
        "pl": "być może"
      },
      {
        "en": "poor",
        "ua": "бідний",
        "uk": "бідний",
        "pl": "słaby"
      },
      {
        "en": "release",
        "ua": "реліз",
        "uk": "реліз",
        "pl": "uwolnienie"
      },
      {
        "en": "situation",
        "ua": "ситуації",
        "uk": "ситуації",
        "pl": "sytuacja"
      },
      {
        "en": "technology",
        "ua": "технології",
        "uk": "технології",
        "pl": "technologia"
      },
      {
        "en": "turned",
        "ua": "повернувся",
        "uk": "повернувся",
        "pl": "obrócony"
      },
      {
        "en": "website",
        "ua": "веб-сайт",
        "uk": "веб-сайт",
        "pl": "strona internetowa"
      },
      {
        "en": "written",
        "ua": "написаний",
        "uk": "написаний",
        "pl": "pisemny"
      },
      {
        "en": "choice",
        "ua": "вибір",
        "uk": "вибір",
        "pl": "wybór"
      },
      {
        "en": "code",
        "ua": "код",
        "uk": "код",
        "pl": "kod"
      },
      {
        "en": "considered",
        "ua": "розглядається",
        "uk": "розглядається",
        "pl": "uważany za"
      },
      {
        "en": "continue",
        "ua": "продовжувати",
        "uk": "продовжувати",
        "pl": "Kontynuować"
      },
      {
        "en": "council",
        "ua": "ради",
        "uk": "ради",
        "pl": "rada"
      },
      {
        "en": "cover",
        "ua": "кришка",
        "uk": "кришка",
        "pl": "okładka"
      },
      {
        "en": "currently",
        "ua": "в даний час",
        "uk": "в даний час",
        "pl": "obecnie"
      },
      {
        "en": "election",
        "ua": "вибори",
        "uk": "вибори",
        "pl": "wybór"
      },
      {
        "en": "european",
        "ua": "європейський",
        "uk": "європейський",
        "pl": "europejski"
      },
      {
        "en": "events",
        "ua": "події",
        "uk": "події",
        "pl": "wydarzenia"
      },
      {
        "en": "financial",
        "ua": "фінансовий",
        "uk": "фінансовий",
        "pl": "budżetowy"
      },
      {
        "en": "foreign",
        "ua": "іноземні",
        "uk": "іноземні",
        "pl": "zagraniczny"
      },
      {
        "en": "hair",
        "ua": "волосся",
        "uk": "волосся",
        "pl": "włosy"
      },
      {
        "en": "increase",
        "ua": "збільшення",
        "uk": "збільшення",
        "pl": "zwiększyć"
      },
      {
        "en": "legal",
        "ua": "правовий",
        "uk": "правовий",
        "pl": "prawny"
      },
      {
        "en": "lose",
        "ua": "втратити",
        "uk": "втратити",
        "pl": "stracić"
      },
      {
        "en": "michael",
        "ua": "Майкл",
        "uk": "Майкл",
        "pl": "Michał"
      },
      {
        "en": "pick",
        "ua": "вибрати",
        "uk": "вибрати",
        "pl": "wybierać"
      },
      {
        "en": "race",
        "ua": "гонка",
        "uk": "гонка",
        "pl": "wyścig"
      },
      {
        "en": "seem",
        "ua": "здається",
        "uk": "здається",
        "pl": "wydaje się"
      },
      {
        "en": "seven",
        "ua": "сім",
        "uk": "сім",
        "pl": "siedem"
      },
      {
        "en": "sign",
        "ua": "знак",
        "uk": "знак",
        "pl": "podpisać"
      },
      {
        "en": "simple",
        "ua": "простий",
        "uk": "простий",
        "pl": "prosty"
      },
      {
        "en": "simply",
        "ua": "просто",
        "uk": "просто",
        "pl": "po prostu"
      },
      {
        "en": "staff",
        "ua": "персонал",
        "uk": "персонал",
        "pl": "personel"
      },
      {
        "en": "super",
        "ua": "супер",
        "uk": "супер",
        "pl": "świetnie"
      },
      {
        "en": "union",
        "ua": "спілка",
        "uk": "спілка",
        "pl": "unia"
      },
      {
        "en": "walk",
        "ua": "ходити",
        "uk": "ходити",
        "pl": "chodzić"
      },
      {
        "en": "washington",
        "ua": "Вашингтон",
        "uk": "Вашингтон",
        "pl": "Waszyngton"
      }
    ],
    "Society": [
      {
        "en": "volunteer",
        "ua": "волонтер",
        "uk": "волонтер",
        "pl": "wolontariusz"
      },
      {
        "en": "charity",
        "ua": "благодійність",
        "uk": "благодійність",
        "pl": "organizacja pożytku publicznego"
      },
      {
        "en": "equality",
        "ua": "рівність",
        "uk": "рівність",
        "pl": "równość"
      },
      {
        "en": "justice",
        "ua": "справедливість",
        "uk": "справедливість",
        "pl": "sprawiedliwość"
      },
      {
        "en": "campaign",
        "ua": "кампанія",
        "uk": "кампанія",
        "pl": "kampania"
      },
      {
        "en": "citizen",
        "ua": "громадянин",
        "uk": "громадянин",
        "pl": "obywatel"
      },
      {
        "en": "neighborhood",
        "ua": "околиці",
        "uk": "околиці",
        "pl": "sąsiedztwo"
      },
      {
        "en": "awareness",
        "ua": "обізнаність",
        "uk": "обізнаність",
        "pl": "świadomość"
      },
      {
        "en": "benefit",
        "ua": "користь",
        "uk": "користь",
        "pl": "korzyść"
      },
      {
        "en": "began",
        "ua": "почався",
        "uk": "почався",
        "pl": "zaczął"
      },
      {
        "en": "built",
        "ua": "побудований",
        "uk": "побудований",
        "pl": "wybudowany"
      },
      {
        "en": "career",
        "ua": "кар'єра",
        "uk": "кар'єра",
        "pl": "kariera"
      },
      {
        "en": "changed",
        "ua": "змінено",
        "uk": "змінено",
        "pl": "zmieniony"
      },
      {
        "en": "crazy",
        "ua": "божевільний",
        "uk": "божевільний",
        "pl": "zwariowany"
      },
      {
        "en": "daily",
        "ua": "щодня",
        "uk": "щодня",
        "pl": "codziennie"
      },
      {
        "en": "december",
        "ua": "грудень",
        "uk": "грудень",
        "pl": "grudzień"
      },
      {
        "en": "difficult",
        "ua": "важко",
        "uk": "важко",
        "pl": "trudny"
      },
      {
        "en": "figure",
        "ua": "фігура",
        "uk": "фігура",
        "pl": "postać"
      },
      {
        "en": "hospital",
        "ua": "лікарня",
        "uk": "лікарня",
        "pl": "szpital"
      },
      {
        "en": "knows",
        "ua": "знає",
        "uk": "знає",
        "pl": "wie"
      },
      {
        "en": "loss",
        "ua": "втрата",
        "uk": "втрата",
        "pl": "strata"
      },
      {
        "en": "modern",
        "ua": "сучасний",
        "uk": "сучасний",
        "pl": "nowoczesny"
      },
      {
        "en": "ones",
        "ua": "одні",
        "uk": "одні",
        "pl": "te"
      },
      {
        "en": "paper",
        "ua": "папір",
        "uk": "папір",
        "pl": "papier"
      },
      {
        "en": "parts",
        "ua": "частин",
        "uk": "частин",
        "pl": "strony"
      },
      {
        "en": "popular",
        "ua": "популярний",
        "uk": "популярний",
        "pl": "popularny"
      },
      {
        "en": "published",
        "ua": "опубліковано",
        "uk": "опубліковано",
        "pl": "opublikowany"
      },
      {
        "en": "safe",
        "ua": "безпечний",
        "uk": "безпечний",
        "pl": "bezpieczna"
      },
      {
        "en": "starting",
        "ua": "починаючи",
        "uk": "починаючи",
        "pl": "startowy"
      },
      {
        "en": "systems",
        "ua": "системи",
        "uk": "системи",
        "pl": "systemy"
      },
      {
        "en": "version",
        "ua": "версія",
        "uk": "версія",
        "pl": "wersja"
      },
      {
        "en": "voice",
        "ua": "голос",
        "uk": "голос",
        "pl": "głos"
      },
      {
        "en": "whose",
        "ua": "чий",
        "uk": "чий",
        "pl": "którego"
      },
      {
        "en": "writing",
        "ua": "написання",
        "uk": "написання",
        "pl": "pismo"
      },
      {
        "en": "army",
        "ua": "армії",
        "uk": "армії",
        "pl": "armia"
      },
      {
        "en": "australia",
        "ua": "австралія",
        "uk": "австралія",
        "pl": "kraj Australia"
      },
      {
        "en": "earth",
        "ua": "землі",
        "uk": "землі",
        "pl": "ziemia"
      },
      {
        "en": "forget",
        "ua": "забути",
        "uk": "забути",
        "pl": "zapominać"
      },
      {
        "en": "goal",
        "ua": "мета",
        "uk": "мета",
        "pl": "bramka"
      },
      {
        "en": "huge",
        "ua": "величезний",
        "uk": "величезний",
        "pl": "ogromny"
      },
      {
        "en": "internet",
        "ua": "Інтернет",
        "uk": "Інтернет",
        "pl": "sieć internetowa"
      },
      {
        "en": "listen",
        "ua": "слухати",
        "uk": "слухати",
        "pl": "Słuchać"
      },
      {
        "en": "okay",
        "ua": "гаразд",
        "uk": "гаразд",
        "pl": "Dobra"
      },
      {
        "en": "practice",
        "ua": "практика",
        "uk": "практика",
        "pl": "praktyka"
      },
      {
        "en": "rules",
        "ua": "правил",
        "uk": "правил",
        "pl": "zasady"
      },
      {
        "en": "success",
        "ua": "успіх",
        "uk": "успіх",
        "pl": "sukces"
      },
      {
        "en": "towards",
        "ua": "назустріч",
        "uk": "назустріч",
        "pl": "w kierunku"
      },
      {
        "en": "waiting",
        "ua": "очікування",
        "uk": "очікування",
        "pl": "czekanie"
      },
      {
        "en": "ways",
        "ua": "шляхи",
        "uk": "шляхи",
        "pl": "sposoby"
      },
      {
        "en": "access",
        "ua": "доступу",
        "uk": "доступу",
        "pl": "dostęp"
      },
      {
        "en": "base",
        "ua": "база",
        "uk": "база",
        "pl": "opierać"
      },
      {
        "en": "below",
        "ua": "нижче",
        "uk": "нижче",
        "pl": "poniżej"
      },
      {
        "en": "created",
        "ua": "створений",
        "uk": "створений",
        "pl": "stworzony"
      },
      {
        "en": "deep",
        "ua": "глибокий",
        "uk": "глибокий",
        "pl": "głęboko"
      },
      {
        "en": "followed",
        "ua": "слідував",
        "uk": "слідував",
        "pl": "podążał"
      },
      {
        "en": "mark",
        "ua": "знак",
        "uk": "знак",
        "pl": "ocena"
      },
      {
        "en": "missing",
        "ua": "відсутній",
        "uk": "відсутній",
        "pl": "zaginiony"
      },
      {
        "en": "offer",
        "ua": "пропозиція",
        "uk": "пропозиція",
        "pl": "oferta"
      },
      {
        "en": "pass",
        "ua": "пропуск",
        "uk": "пропуск",
        "pl": "przechodzić"
      },
      {
        "en": "professional",
        "ua": "професійний",
        "uk": "професійний",
        "pl": "profesjonalny"
      },
      {
        "en": "released",
        "ua": "звільнений",
        "uk": "звільнений",
        "pl": "wydany"
      },
      {
        "en": "risk",
        "ua": "ризик",
        "uk": "ризик",
        "pl": "ryzyko"
      },
      {
        "en": "schools",
        "ua": "школи",
        "uk": "школи",
        "pl": "szkoły"
      },
      {
        "en": "sleep",
        "ua": "сон",
        "uk": "сон",
        "pl": "spać"
      },
      {
        "en": "truth",
        "ua": "правда",
        "uk": "правда",
        "pl": "prawda"
      },
      {
        "en": "ball",
        "ua": "м'яч",
        "uk": "м'яч",
        "pl": "piłka"
      },
      {
        "en": "build",
        "ua": "будувати",
        "uk": "будувати",
        "pl": "zbudować"
      },
      {
        "en": "card",
        "ua": "картку",
        "uk": "картку",
        "pl": "karta"
      },
      {
        "en": "cases",
        "ua": "випадків",
        "uk": "випадків",
        "pl": "sprawy"
      },
      {
        "en": "dark",
        "ua": "темний",
        "uk": "темний",
        "pl": "ciemny"
      },
      {
        "en": "district",
        "ua": "район",
        "uk": "район",
        "pl": "dzielnica"
      },
      {
        "en": "europe",
        "ua": "Європа",
        "uk": "Європа",
        "pl": "Europa"
      },
      {
        "en": "george",
        "ua": "Джордж",
        "uk": "Джордж",
        "pl": "imię George"
      },
      {
        "en": "india",
        "ua": "Індія",
        "uk": "Індія",
        "pl": "Indie"
      },
      {
        "en": "mine",
        "ua": "моя",
        "uk": "моя",
        "pl": "kopalnia"
      },
      {
        "en": "minister",
        "ua": "міністр",
        "uk": "міністр",
        "pl": "członek rządu"
      },
      {
        "en": "note",
        "ua": "примітка",
        "uk": "примітка",
        "pl": "notatka"
      },
      {
        "en": "percent",
        "ua": "відсотків",
        "uk": "відсотків",
        "pl": "procent"
      },
      {
        "en": "piece",
        "ua": "шматок",
        "uk": "шматок",
        "pl": "sztuka"
      },
      {
        "en": "products",
        "ua": "продуктів",
        "uk": "продуктів",
        "pl": "produkty"
      },
      {
        "en": "recent",
        "ua": "останній",
        "uk": "останній",
        "pl": "ostatni"
      },
      {
        "en": "seeing",
        "ua": "бачачи",
        "uk": "бачачи",
        "pl": "widzenie"
      },
      {
        "en": "straight",
        "ua": "прямо",
        "uk": "прямо",
        "pl": "prosty"
      },
      {
        "en": "visit",
        "ua": "відвідати",
        "uk": "відвідати",
        "pl": "odwiedzać"
      },
      {
        "en": "wall",
        "ua": "стіна",
        "uk": "стіна",
        "pl": "ściana"
      },
      {
        "en": "wanna",
        "ua": "хочу",
        "uk": "хочу",
        "pl": "chcieć"
      },
      {
        "en": "wrote",
        "ua": "написав",
        "uk": "написав",
        "pl": "napisał"
      },
      {
        "en": "allowed",
        "ua": "дозволено",
        "uk": "дозволено",
        "pl": "dozwolony"
      },
      {
        "en": "boys",
        "ua": "хлопці",
        "uk": "хлопці",
        "pl": "chłopcy"
      },
      {
        "en": "culture",
        "ua": "культури",
        "uk": "культури",
        "pl": "kultura"
      },
      {
        "en": "fans",
        "ua": "вболівальники",
        "uk": "вболівальники",
        "pl": "fani"
      },
      {
        "en": "february",
        "ua": "лютий",
        "uk": "лютий",
        "pl": "Luty"
      },
      {
        "en": "gives",
        "ua": "дає",
        "uk": "дає",
        "pl": "daje"
      },
      {
        "en": "growth",
        "ua": "зростання",
        "uk": "зростання",
        "pl": "wzrost"
      },
      {
        "en": "included",
        "ua": "включені",
        "uk": "включені",
        "pl": "dołączony"
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

      Object.entries(topics).forEach(([topic, entries]) => {
        entries.forEach((entry) => {
          const en = String(entry.en || "").trim().toLowerCase();
          const ua = String(entry.ua || entry.uk || "").trim().toLowerCase();
          const pl = String(entry.pl || "").trim().toLowerCase();
          if (en && (en === ua || en === pl)) {
            console.warn(`Vocabulary translation matches English in ${level}/${topic}:`, entry.en, entry);
          }
        });
      });
    });
  }

  warnDuplicates();

  window.HW = { title: "English Tenses Homework", subtitle: "Practice all 12 tenses on one mobile-friendly page.", version: "2026-02-24", tenses, taskSets, testQuestions, irregularVerbs, vocabulary };
})();
