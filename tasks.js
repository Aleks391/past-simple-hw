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

  const topicLexicon = {
    "Family": {
      nouns: [{ en: "mother", uk: "мати", pl: "matka" }, { en: "father", uk: "батько", pl: "ojciec" }, { en: "sister", uk: "сестра", pl: "siostra" }, { en: "brother", uk: "брат", pl: "brat" }, { en: "grandmother", uk: "бабуся", pl: "babcia" }, { en: "grandfather", uk: "дідусь", pl: "dziadek" }, { en: "cousin", uk: "двоюрідний брат або сестра", pl: "kuzyn lub kuzynka" }, { en: "wedding", uk: "весілля", pl: "ślub" }, { en: "parenting", uk: "батьківство", pl: "rodzicielstwo" }, { en: "household", uk: "домогосподарство", pl: "gospodarstwo domowe" }],
      modifiers: [{ en: "close", uk: "близький", pl: "bliski" }, { en: "supportive", uk: "підтримувальний", pl: "wspierający" }, { en: "young", uk: "молодий", pl: "młody" }, { en: "elder", uk: "старший", pl: "starszy" }, { en: "happy", uk: "щасливий", pl: "szczęśliwy" }, { en: "modern", uk: "сучасний", pl: "nowoczesny" }, { en: "traditional", uk: "традиційний", pl: "tradycyjny" }, { en: "single", uk: "одинокий", pl: "samotny" }, { en: "extended", uk: "розширений", pl: "wielopokoleniowy" }, { en: "loving", uk: "люблячий", pl: "kochający" }]
    },
    "Home": {
      nouns: [{ en: "kitchen", uk: "кухня", pl: "kuchnia" }, { en: "bedroom", uk: "спальня", pl: "sypialnia" }, { en: "bathroom", uk: "ванна кімната", pl: "łazienka" }, { en: "balcony", uk: "балкон", pl: "balkon" }, { en: "sofa", uk: "диван", pl: "sofa" }, { en: "wardrobe", uk: "шафа", pl: "szafa" }, { en: "apartment", uk: "квартира", pl: "mieszkanie" }, { en: "rent", uk: "оренда", pl: "czynsz" }, { en: "neighborhood", uk: "район", pl: "dzielnica" }, { en: "cleaning", uk: "прибирання", pl: "sprzątanie" }],
      modifiers: [{ en: "cozy", uk: "затишний", pl: "przytulny" }, { en: "spacious", uk: "просторий", pl: "przestronny" }, { en: "quiet", uk: "тихий", pl: "cichy" }, { en: "sunny", uk: "сонячний", pl: "słoneczny" }, { en: "new", uk: "новий", pl: "nowy" }, { en: "old", uk: "старий", pl: "stary" }, { en: "clean", uk: "чистий", pl: "czysty" }, { en: "messy", uk: "безладний", pl: "nieuporządkowany" }, { en: "comfortable", uk: "зручний", pl: "wygodny" }, { en: "shared", uk: "спільний", pl: "wspólny" }]
    },
    "Food": {
      nouns: [{ en: "breakfast", uk: "сніданок", pl: "śniadanie" }, { en: "lunch", uk: "обід", pl: "lunch" }, { en: "dinner", uk: "вечеря", pl: "kolacja" }, { en: "bread", uk: "хліб", pl: "chleb" }, { en: "cheese", uk: "сир", pl: "ser" }, { en: "soup", uk: "суп", pl: "zupa" }, { en: "salad", uk: "салат", pl: "sałatka" }, { en: "dessert", uk: "десерт", pl: "deser" }, { en: "recipe", uk: "рецепт", pl: "przepis" }, { en: "restaurant", uk: "ресторан", pl: "restauracja" }],
      modifiers: [{ en: "fresh", uk: "свіжий", pl: "świeży" }, { en: "hot", uk: "гарячий", pl: "gorący" }, { en: "cold", uk: "холодний", pl: "zimny" }, { en: "sweet", uk: "солодкий", pl: "słodki" }, { en: "salty", uk: "солоний", pl: "słony" }, { en: "spicy", uk: "гострий", pl: "pikantny" }, { en: "healthy", uk: "корисний", pl: "zdrowy" }, { en: "homemade", uk: "домашній", pl: "domowy" }, { en: "vegetarian", uk: "вегетаріанський", pl: "wegetariański" }, { en: "traditional", uk: "традиційний", pl: "tradycyjny" }]
    },
    "School": {
      nouns: [{ en: "classroom", uk: "клас", pl: "klasa" }, { en: "teacher", uk: "вчитель", pl: "nauczyciel" }, { en: "student", uk: "учень", pl: "uczeń" }, { en: "homework", uk: "домашнє завдання", pl: "praca domowa" }, { en: "exam", uk: "іспит", pl: "egzamin" }, { en: "notebook", uk: "зошит", pl: "zeszyt" }, { en: "library", uk: "бібліотека", pl: "biblioteka" }, { en: "subject", uk: "предмет", pl: "przedmiot" }, { en: "grade", uk: "оцінка", pl: "ocena" }, { en: "semester", uk: "семестр", pl: "semestr" }],
      modifiers: [{ en: "difficult", uk: "складний", pl: "trudny" }, { en: "easy", uk: "легкий", pl: "łatwy" }, { en: "important", uk: "важливий", pl: "ważny" }, { en: "final", uk: "підсумковий", pl: "końcowy" }, { en: "online", uk: "онлайн", pl: "online" }, { en: "group", uk: "груповий", pl: "grupowy" }, { en: "private", uk: "приватний", pl: "prywatny" }, { en: "public", uk: "публічний", pl: "publiczny" }, { en: "weekly", uk: "щотижневий", pl: "cotygodniowy" }, { en: "written", uk: "письмовий", pl: "pisemny" }]
    },
    "Jobs": {
      nouns: [{ en: "career", uk: "кар'єра", pl: "kariera" }, { en: "salary", uk: "зарплата", pl: "pensja" }, { en: "interview", uk: "співбесіда", pl: "rozmowa kwalifikacyjna" }, { en: "resume", uk: "резюме", pl: "życiorys" }, { en: "manager", uk: "керівник", pl: "kierownik" }, { en: "colleague", uk: "колега", pl: "kolega z pracy" }, { en: "deadline", uk: "дедлайн", pl: "termin" }, { en: "promotion", uk: "підвищення", pl: "awans" }, { en: "contract", uk: "контракт", pl: "umowa" }, { en: "vacancy", uk: "вакансія", pl: "wakat" }],
      modifiers: [{ en: "full-time", uk: "повний", pl: "pełny" }, { en: "part-time", uk: "неповний", pl: "niepełny" }, { en: "remote", uk: "віддалений", pl: "zdalny" }, { en: "office", uk: "офісний", pl: "biurowy" }, { en: "creative", uk: "творчий", pl: "kreatywny" }, { en: "technical", uk: "технічний", pl: "techniczny" }, { en: "stable", uk: "стабільний", pl: "stabilny" }, { en: "temporary", uk: "тимчасовий", pl: "tymczasowy" }, { en: "international", uk: "міжнародний", pl: "międzynarodowy" }, { en: "entry-level", uk: "початковий", pl: "początkowy" }]
    },
    "Daily life": {
      nouns: [{ en: "alarm", uk: "будильник", pl: "budzik" }, { en: "commute", uk: "дорога на роботу", pl: "dojazd" }, { en: "break", uk: "перерва", pl: "przerwa" }, { en: "exercise", uk: "вправи", pl: "ćwiczenia" }, { en: "shower", uk: "душ", pl: "prysznic" }, { en: "breakfast", uk: "сніданок", pl: "śniadanie" }, { en: "laundry", uk: "прання", pl: "pranie" }, { en: "shopping", uk: "покупки", pl: "zakupy" }, { en: "hobby", uk: "хобі", pl: "hobby" }, { en: "sleep", uk: "сон", pl: "sen" }],
      modifiers: [{ en: "morning", uk: "ранковий", pl: "poranny" }, { en: "evening", uk: "вечірній", pl: "wieczorny" }, { en: "daily", uk: "щоденний", pl: "codzienny" }, { en: "regular", uk: "регулярний", pl: "regularny" }, { en: "healthy", uk: "здоровий", pl: "zdrowy" }, { en: "busy", uk: "зайнятий", pl: "zajęty" }, { en: "quick", uk: "швидкий", pl: "szybki" }, { en: "late", uk: "пізній", pl: "późny" }, { en: "weekend", uk: "вихідний", pl: "weekendowy" }, { en: "planned", uk: "запланований", pl: "zaplanowany" }]
    },
    "Time": {
      nouns: [{ en: "minute", uk: "хвилина", pl: "minuta" }, { en: "hour", uk: "година", pl: "godzina" }, { en: "day", uk: "день", pl: "dzień" }, { en: "week", uk: "тиждень", pl: "tydzień" }, { en: "month", uk: "місяць", pl: "miesiąc" }, { en: "year", uk: "рік", pl: "rok" }, { en: "deadline", uk: "кінцевий термін", pl: "termin" }, { en: "calendar", uk: "календар", pl: "kalendarz" }, { en: "clock", uk: "годинник", pl: "zegar" }, { en: "schedule", uk: "розклад", pl: "harmonogram" }],
      modifiers: [{ en: "free", uk: "вільний", pl: "wolny" }, { en: "limited", uk: "обмежений", pl: "ograniczony" }, { en: "exact", uk: "точний", pl: "dokładny" }, { en: "flexible", uk: "гнучкий", pl: "elastyczny" }, { en: "spare", uk: "додатковий", pl: "zapasowy" }, { en: "busy", uk: "зайнятий", pl: "zajęty" }, { en: "future", uk: "майбутній", pl: "przyszły" }, { en: "past", uk: "минулий", pl: "przeszły" }, { en: "present", uk: "теперішній", pl: "teraźniejszy" }, { en: "annual", uk: "річний", pl: "roczny" }]
    },
    "Weather": {
      nouns: [{ en: "rain", uk: "дощ", pl: "deszcz" }, { en: "snow", uk: "сніг", pl: "śnieg" }, { en: "wind", uk: "вітер", pl: "wiatr" }, { en: "storm", uk: "буря", pl: "burza" }, { en: "sunshine", uk: "сонячне світло", pl: "słońce" }, { en: "cloud", uk: "хмара", pl: "chmura" }, { en: "forecast", uk: "прогноз", pl: "prognoza" }, { en: "temperature", uk: "температура", pl: "temperatura" }, { en: "humidity", uk: "вологість", pl: "wilgotność" }, { en: "season", uk: "пора року", pl: "pora roku" }],
      modifiers: [{ en: "heavy", uk: "сильний", pl: "silny" }, { en: "light", uk: "легкий", pl: "lekki" }, { en: "cold", uk: "холодний", pl: "zimny" }, { en: "warm", uk: "теплий", pl: "ciepły" }, { en: "hot", uk: "спекотний", pl: "upalny" }, { en: "dry", uk: "сухий", pl: "suchy" }, { en: "wet", uk: "вологий", pl: "mokry" }, { en: "cloudy", uk: "хмарний", pl: "pochmurny" }, { en: "sunny", uk: "сонячний", pl: "słoneczny" }, { en: "windy", uk: "вітряний", pl: "wietrzny" }]
    },
    "Clothes": {
      nouns: [{ en: "shirt", uk: "сорочка", pl: "koszula" }, { en: "dress", uk: "сукня", pl: "sukienka" }, { en: "jacket", uk: "куртка", pl: "kurtka" }, { en: "trousers", uk: "штани", pl: "spodnie" }, { en: "skirt", uk: "спідниця", pl: "spódnica" }, { en: "shoes", uk: "взуття", pl: "buty" }, { en: "socks", uk: "шкарпетки", pl: "skarpetki" }, { en: "coat", uk: "пальто", pl: "płaszcz" }, { en: "hat", uk: "капелюх", pl: "kapelusz" }, { en: "uniform", uk: "форма", pl: "mundur" }],
      modifiers: [{ en: "casual", uk: "повсякденний", pl: "codzienny" }, { en: "formal", uk: "офіційний", pl: "formalny" }, { en: "warm", uk: "теплий", pl: "ciepły" }, { en: "light", uk: "легкий", pl: "lekki" }, { en: "comfortable", uk: "зручний", pl: "wygodny" }, { en: "fashionable", uk: "модний", pl: "modny" }, { en: "clean", uk: "чистий", pl: "czysty" }, { en: "dirty", uk: "брудний", pl: "brudny" }, { en: "new", uk: "новий", pl: "nowy" }, { en: "second-hand", uk: "секонд-хенд", pl: "używany" }]
    },
    "Transport": {
      nouns: [{ en: "bus", uk: "автобус", pl: "autobus" }, { en: "train", uk: "поїзд", pl: "pociąg" }, { en: "car", uk: "автомобіль", pl: "samochód" }, { en: "bicycle", uk: "велосипед", pl: "rower" }, { en: "ticket", uk: "квиток", pl: "bilet" }, { en: "station", uk: "станція", pl: "stacja" }, { en: "platform", uk: "платформа", pl: "peron" }, { en: "traffic", uk: "рух", pl: "ruch" }, { en: "journey", uk: "подорож", pl: "podróż" }, { en: "driver", uk: "водій", pl: "kierowca" }],
      modifiers: [{ en: "public", uk: "громадський", pl: "publiczny" }, { en: "private", uk: "приватний", pl: "prywatny" }, { en: "fast", uk: "швидкий", pl: "szybki" }, { en: "slow", uk: "повільний", pl: "wolny" }, { en: "cheap", uk: "дешевий", pl: "tani" }, { en: "expensive", uk: "дорогий", pl: "drogi" }, { en: "direct", uk: "прямий", pl: "bezpośredni" }, { en: "crowded", uk: "переповнений", pl: "zatłoczony" }, { en: "safe", uk: "безпечний", pl: "bezpieczny" }, { en: "night", uk: "нічний", pl: "nocny" }]
    },
    "Travel": {
      nouns: [{ en: "passport", uk: "паспорт", pl: "paszport" }, { en: "visa", uk: "віза", pl: "wiza" }, { en: "airport", uk: "аеропорт", pl: "lotnisko" }, { en: "hotel", uk: "готель", pl: "hotel" }, { en: "suitcase", uk: "валіза", pl: "walizka" }, { en: "reservation", uk: "бронювання", pl: "rezerwacja" }, { en: "tour", uk: "екскурсія", pl: "wycieczka" }, { en: "map", uk: "карта", pl: "mapa" }, { en: "guide", uk: "гід", pl: "przewodnik" }, { en: "border", uk: "кордон", pl: "granica" }],
      modifiers: [{ en: "international", uk: "міжнародний", pl: "międzynarodowy" }, { en: "domestic", uk: "внутрішній", pl: "krajowy" }, { en: "cheap", uk: "дешевий", pl: "tani" }, { en: "luxury", uk: "розкішний", pl: "luksusowy" }, { en: "round-trip", uk: "туди й назад", pl: "w obie strony" }, { en: "one-way", uk: "в один бік", pl: "w jedną stronę" }, { en: "guided", uk: "з гідом", pl: "z przewodnikiem" }, { en: "seasonal", uk: "сезонний", pl: "sezonowy" }, { en: "long", uk: "довгий", pl: "długi" }, { en: "short", uk: "короткий", pl: "krótki" }]
    },
    "Health": {
      nouns: [{ en: "doctor", uk: "лікар", pl: "lekarz" }, { en: "nurse", uk: "медсестра", pl: "pielęgniarka" }, { en: "clinic", uk: "клініка", pl: "klinika" }, { en: "medicine", uk: "ліки", pl: "lek" }, { en: "headache", uk: "головний біль", pl: "ból głowy" }, { en: "fever", uk: "гарячка", pl: "gorączka" }, { en: "appointment", uk: "прийом", pl: "wizyta" }, { en: "diet", uk: "дієта", pl: "dieta" }, { en: "exercise", uk: "вправи", pl: "ćwiczenia" }, { en: "recovery", uk: "відновлення", pl: "powrót do zdrowia" }],
      modifiers: [{ en: "healthy", uk: "здоровий", pl: "zdrowy" }, { en: "sick", uk: "хворий", pl: "chory" }, { en: "medical", uk: "медичний", pl: "medyczny" }, { en: "urgent", uk: "терміновий", pl: "pilny" }, { en: "chronic", uk: "хронічний", pl: "przewlekły" }, { en: "mental", uk: "психічний", pl: "psychiczny" }, { en: "physical", uk: "фізичний", pl: "fizyczny" }, { en: "preventive", uk: "профілактичний", pl: "profilaktyczny" }, { en: "balanced", uk: "збалансований", pl: "zrównoważony" }, { en: "daily", uk: "щоденний", pl: "codzienny" }]
    },
    "Shopping": {
      nouns: [{ en: "store", uk: "магазин", pl: "sklep" }, { en: "market", uk: "ринок", pl: "targ" }, { en: "price", uk: "ціна", pl: "cena" }, { en: "discount", uk: "знижка", pl: "zniżka" }, { en: "receipt", uk: "чек", pl: "paragon" }, { en: "customer", uk: "покупець", pl: "klient" }, { en: "cashier", uk: "касир", pl: "kasjer" }, { en: "payment", uk: "оплата", pl: "płatność" }, { en: "cart", uk: "візок", pl: "wózek" }, { en: "refund", uk: "повернення коштів", pl: "zwrot" }],
      modifiers: [{ en: "online", uk: "онлайн", pl: "online" }, { en: "offline", uk: "офлайн", pl: "stacjonarny" }, { en: "cheap", uk: "дешевий", pl: "tani" }, { en: "expensive", uk: "дорогий", pl: "drogi" }, { en: "available", uk: "доступний", pl: "dostępny" }, { en: "sold-out", uk: "розпроданий", pl: "wyprzedany" }, { en: "seasonal", uk: "сезонний", pl: "sezonowy" }, { en: "special", uk: "спеціальний", pl: "specjalny" }, { en: "regular", uk: "звичайний", pl: "zwykły" }, { en: "local", uk: "місцевий", pl: "lokalny" }]
    },
    "Technology": {
      nouns: [{ en: "computer", uk: "комп'ютер", pl: "komputer" }, { en: "smartphone", uk: "смартфон", pl: "smartfon" }, { en: "application", uk: "додаток", pl: "aplikacja" }, { en: "password", uk: "пароль", pl: "hasło" }, { en: "website", uk: "сайт", pl: "strona internetowa" }, { en: "software", uk: "програмне забезпечення", pl: "oprogramowanie" }, { en: "device", uk: "пристрій", pl: "urządzenie" }, { en: "network", uk: "мережа", pl: "sieć" }, { en: "update", uk: "оновлення", pl: "aktualizacja" }, { en: "battery", uk: "батарея", pl: "bateria" }],
      modifiers: [{ en: "digital", uk: "цифровий", pl: "cyfrowy" }, { en: "wireless", uk: "бездротовий", pl: "bezprzewodowy" }, { en: "secure", uk: "безпечний", pl: "bezpieczny" }, { en: "fast", uk: "швидкий", pl: "szybki" }, { en: "slow", uk: "повільний", pl: "wolny" }, { en: "new", uk: "новий", pl: "nowy" }, { en: "old", uk: "старий", pl: "stary" }, { en: "portable", uk: "портативний", pl: "przenośny" }, { en: "smart", uk: "розумний", pl: "inteligentny" }, { en: "virtual", uk: "віртуальний", pl: "wirtualny" }]
    },
    "Nature": {
      nouns: [{ en: "forest", uk: "ліс", pl: "las" }, { en: "river", uk: "річка", pl: "rzeka" }, { en: "mountain", uk: "гора", pl: "góra" }, { en: "lake", uk: "озеро", pl: "jezioro" }, { en: "beach", uk: "пляж", pl: "plaża" }, { en: "tree", uk: "дерево", pl: "drzewo" }, { en: "flower", uk: "квітка", pl: "kwiat" }, { en: "animal", uk: "тварина", pl: "zwierzę" }, { en: "sunset", uk: "захід сонця", pl: "zachód słońca" }, { en: "landscape", uk: "ландшафт", pl: "krajobraz" }],
      modifiers: [{ en: "wild", uk: "дикий", pl: "dziki" }, { en: "beautiful", uk: "красивий", pl: "piękny" }, { en: "green", uk: "зелений", pl: "zielony" }, { en: "blue", uk: "блакитний", pl: "niebieski" }, { en: "protected", uk: "захищений", pl: "chroniony" }, { en: "natural", uk: "природний", pl: "naturalny" }, { en: "clean", uk: "чистий", pl: "czysty" }, { en: "polluted", uk: "забруднений", pl: "zanieczyszczony" }, { en: "rare", uk: "рідкісний", pl: "rzadki" }, { en: "local", uk: "місцевий", pl: "lokalny" }]
    },
    "Sports": {
      nouns: [{ en: "football", uk: "футбол", pl: "piłka nożna" }, { en: "basketball", uk: "баскетбол", pl: "koszykówka" }, { en: "tennis", uk: "теніс", pl: "tenis" }, { en: "swimming", uk: "плавання", pl: "pływanie" }, { en: "running", uk: "біг", pl: "bieganie" }, { en: "competition", uk: "змагання", pl: "zawody" }, { en: "coach", uk: "тренер", pl: "trener" }, { en: "stadium", uk: "стадіон", pl: "stadion" }, { en: "training", uk: "тренування", pl: "trening" }, { en: "team", uk: "команда", pl: "drużyna" }],
      modifiers: [{ en: "professional", uk: "професійний", pl: "profesjonalny" }, { en: "amateur", uk: "аматорський", pl: "amatorski" }, { en: "indoor", uk: "у приміщенні", pl: "halowy" }, { en: "outdoor", uk: "надворі", pl: "plenerowy" }, { en: "competitive", uk: "змагальний", pl: "rywalizacyjny" }, { en: "friendly", uk: "товариський", pl: "towarzyski" }, { en: "daily", uk: "щоденний", pl: "codzienny" }, { en: "weekly", uk: "щотижневий", pl: "cotygodniowy" }, { en: "intense", uk: "інтенсивний", pl: "intensywny" }, { en: "regular", uk: "регулярний", pl: "regularny" }]
    },
    "Culture": {
      nouns: [{ en: "museum", uk: "музей", pl: "muzeum" }, { en: "theater", uk: "театр", pl: "teatr" }, { en: "concert", uk: "концерт", pl: "koncert" }, { en: "festival", uk: "фестиваль", pl: "festiwal" }, { en: "painting", uk: "картина", pl: "obraz" }, { en: "literature", uk: "література", pl: "literatura" }, { en: "tradition", uk: "традиція", pl: "tradycja" }, { en: "dance", uk: "танець", pl: "taniec" }, { en: "cinema", uk: "кіно", pl: "kino" }, { en: "heritage", uk: "спадщина", pl: "dziedzictwo" }],
      modifiers: [{ en: "local", uk: "місцевий", pl: "lokalny" }, { en: "national", uk: "національний", pl: "narodowy" }, { en: "international", uk: "міжнародний", pl: "międzynarodowy" }, { en: "classical", uk: "класичний", pl: "klasyczny" }, { en: "modern", uk: "сучасний", pl: "nowoczesny" }, { en: "popular", uk: "популярний", pl: "popularny" }, { en: "traditional", uk: "традиційний", pl: "tradycyjny" }, { en: "historical", uk: "історичний", pl: "historyczny" }, { en: "creative", uk: "творчий", pl: "kreatywny" }, { en: "public", uk: "публічний", pl: "publiczny" }]
    },
    "City life": {
      nouns: [{ en: "street", uk: "вулиця", pl: "ulica" }, { en: "square", uk: "площа", pl: "plac" }, { en: "subway", uk: "метро", pl: "metro" }, { en: "traffic", uk: "трафік", pl: "ruch uliczny" }, { en: "park", uk: "парк", pl: "park" }, { en: "cafeteria", uk: "кафетерій", pl: "kawiarnia" }, { en: "district", uk: "район", pl: "dzielnica" }, { en: "apartment", uk: "квартира", pl: "mieszkanie" }, { en: "noise", uk: "шум", pl: "hałas" }, { en: "citizen", uk: "мешканець", pl: "mieszkaniec" }],
      modifiers: [{ en: "urban", uk: "міський", pl: "miejski" }, { en: "central", uk: "центральний", pl: "centralny" }, { en: "crowded", uk: "переповнений", pl: "zatłoczony" }, { en: "quiet", uk: "тихий", pl: "cichy" }, { en: "safe", uk: "безпечний", pl: "bezpieczny" }, { en: "busy", uk: "жвавий", pl: "ruchliwy" }, { en: "clean", uk: "чистий", pl: "czysty" }, { en: "modern", uk: "сучасний", pl: "nowoczesny" }, { en: "historic", uk: "історичний", pl: "historyczny" }, { en: "residential", uk: "житловий", pl: "mieszkalny" }]
    },
    "Communication": {
      nouns: [{ en: "message", uk: "повідомлення", pl: "wiadomość" }, { en: "email", uk: "електронний лист", pl: "email" }, { en: "call", uk: "дзвінок", pl: "telefon" }, { en: "conversation", uk: "розмова", pl: "rozmowa" }, { en: "discussion", uk: "обговорення", pl: "dyskusja" }, { en: "announcement", uk: "оголошення", pl: "ogłoszenie" }, { en: "opinion", uk: "думка", pl: "opinia" }, { en: "question", uk: "запитання", pl: "pytanie" }, { en: "answer", uk: "відповідь", pl: "odpowiedź" }, { en: "feedback", uk: "відгук", pl: "opinia zwrotna" }],
      modifiers: [{ en: "clear", uk: "чіткий", pl: "jasny" }, { en: "short", uk: "короткий", pl: "krótki" }, { en: "long", uk: "довгий", pl: "długi" }, { en: "formal", uk: "офіційний", pl: "formalny" }, { en: "informal", uk: "неофіційний", pl: "nieformalny" }, { en: "direct", uk: "прямий", pl: "bezpośredni" }, { en: "polite", uk: "ввічливий", pl: "uprzejmy" }, { en: "friendly", uk: "дружній", pl: "przyjazny" }, { en: "written", uk: "письмовий", pl: "pisemny" }, { en: "spoken", uk: "усний", pl: "mówiony" }]
    },
    "Plans": {
      nouns: [{ en: "goal", uk: "мета", pl: "cel" }, { en: "plan", uk: "план", pl: "plan" }, { en: "dream", uk: "мрія", pl: "marzenie" }, { en: "project", uk: "проєкт", pl: "projekt" }, { en: "deadline", uk: "дедлайн", pl: "termin" }, { en: "priority", uk: "пріоритет", pl: "priorytet" }, { en: "calendar", uk: "календар", pl: "kalendarz" }, { en: "task", uk: "завдання", pl: "zadanie" }, { en: "milestone", uk: "етап", pl: "kamień milowy" }, { en: "strategy", uk: "стратегія", pl: "strategia" }],
      modifiers: [{ en: "future", uk: "майбутній", pl: "przyszły" }, { en: "long-term", uk: "довгостроковий", pl: "długoterminowy" }, { en: "short-term", uk: "короткостроковий", pl: "krótkoterminowy" }, { en: "realistic", uk: "реалістичний", pl: "realistyczny" }, { en: "ambitious", uk: "амбітний", pl: "ambitny" }, { en: "personal", uk: "особистий", pl: "osobisty" }, { en: "professional", uk: "професійний", pl: "zawodowy" }, { en: "monthly", uk: "щомісячний", pl: "miesięczny" }, { en: "weekly", uk: "щотижневий", pl: "cotygodniowy" }, { en: "daily", uk: "щоденний", pl: "codzienny" }]
    },
    "Workplace": {
      nouns: [{ en: "meeting", uk: "зустріч", pl: "spotkanie" }, { en: "deadline", uk: "дедлайн", pl: "termin" }, { en: "manager", uk: "керівник", pl: "kierownik" }, { en: "colleague", uk: "колега", pl: "współpracownik" }, { en: "department", uk: "відділ", pl: "dział" }, { en: "salary", uk: "зарплата", pl: "wynagrodzenie" }, { en: "project", uk: "проєкт", pl: "projekt" }, { en: "report", uk: "звіт", pl: "raport" }, { en: "office", uk: "офіс", pl: "biuro" }, { en: "client", uk: "клієнт", pl: "klient" }],
      modifiers: [{ en: "monthly", uk: "щомісячний", pl: "miesięczny" }, { en: "weekly", uk: "щотижневий", pl: "cotygodniowy" }, { en: "annual", uk: "річний", pl: "roczny" }, { en: "urgent", uk: "терміновий", pl: "pilny" }, { en: "internal", uk: "внутрішній", pl: "wewnętrzny" }, { en: "external", uk: "зовнішній", pl: "zewnętrzny" }, { en: "hybrid", uk: "гібридний", pl: "hybrydowy" }, { en: "remote", uk: "віддалений", pl: "zdalny" }, { en: "team", uk: "командний", pl: "zespołowy" }, { en: "strategic", uk: "стратегічний", pl: "strategiczny" }]
    },
    "Education": {
      nouns: [{ en: "curriculum", uk: "навчальна програма", pl: "program nauczania" }, { en: "lecture", uk: "лекція", pl: "wykład" }, { en: "seminar", uk: "семінар", pl: "seminarium" }, { en: "assignment", uk: "завдання", pl: "zadanie" }, { en: "assessment", uk: "оцінювання", pl: "ocena" }, { en: "research", uk: "дослідження", pl: "badanie" }, { en: "campus", uk: "кампус", pl: "kampus" }, { en: "scholarship", uk: "стипендія", pl: "stypendium" }, { en: "professor", uk: "професор", pl: "profesor" }, { en: "graduate", uk: "випускник", pl: "absolwent" }],
      modifiers: [{ en: "higher", uk: "вищий", pl: "wyższy" }, { en: "primary", uk: "початковий", pl: "podstawowy" }, { en: "secondary", uk: "середній", pl: "średni" }, { en: "academic", uk: "академічний", pl: "akademicki" }, { en: "practical", uk: "практичний", pl: "praktyczny" }, { en: "theoretical", uk: "теоретичний", pl: "teoretyczny" }, { en: "final", uk: "підсумковий", pl: "końcowy" }, { en: "entrance", uk: "вступний", pl: "wstępny" }, { en: "distance", uk: "дистанційний", pl: "zdalny" }, { en: "lifelong", uk: "безперервний", pl: "ustawiczny" }]
    },
    "Media": {
      nouns: [{ en: "news", uk: "новини", pl: "wiadomości" }, { en: "article", uk: "стаття", pl: "artykuł" }, { en: "headline", uk: "заголовок", pl: "nagłówek" }, { en: "podcast", uk: "подкаст", pl: "podcast" }, { en: "broadcast", uk: "трансляція", pl: "transmisja" }, { en: "journalist", uk: "журналіст", pl: "dziennikarz" }, { en: "editor", uk: "редактор", pl: "redaktor" }, { en: "channel", uk: "канал", pl: "kanał" }, { en: "interview", uk: "інтерв'ю", pl: "wywiad" }, { en: "audience", uk: "аудиторія", pl: "odbiorcy" }],
      modifiers: [{ en: "breaking", uk: "терміновий", pl: "pilny" }, { en: "live", uk: "наживо", pl: "na żywo" }, { en: "digital", uk: "цифровий", pl: "cyfrowy" }, { en: "print", uk: "друкований", pl: "drukowany" }, { en: "reliable", uk: "надійний", pl: "wiarygodny" }, { en: "biased", uk: "упереджений", pl: "stronniczy" }, { en: "global", uk: "глобальний", pl: "globalny" }, { en: "local", uk: "місцевий", pl: "lokalny" }, { en: "social", uk: "соціальний", pl: "społecznościowy" }, { en: "independent", uk: "незалежний", pl: "niezależny" }]
    },
    "Environment": {
      nouns: [{ en: "recycling", uk: "переробка", pl: "recykling" }, { en: "pollution", uk: "забруднення", pl: "zanieczyszczenie" }, { en: "climate", uk: "клімат", pl: "klimat" }, { en: "emission", uk: "викид", pl: "emisja" }, { en: "energy", uk: "енергія", pl: "energia" }, { en: "waste", uk: "відходи", pl: "odpady" }, { en: "forest", uk: "ліс", pl: "las" }, { en: "wildlife", uk: "дика природа", pl: "dzika przyroda" }, { en: "drought", uk: "посуха", pl: "susza" }, { en: "flood", uk: "повінь", pl: "powódź" }],
      modifiers: [{ en: "green", uk: "зелений", pl: "zielony" }, { en: "renewable", uk: "відновлюваний", pl: "odnawialny" }, { en: "sustainable", uk: "сталий", pl: "zrównoważony" }, { en: "global", uk: "глобальний", pl: "globalny" }, { en: "local", uk: "місцевий", pl: "lokalny" }, { en: "toxic", uk: "токсичний", pl: "toksyczny" }, { en: "clean", uk: "чистий", pl: "czysty" }, { en: "dirty", uk: "брудний", pl: "brudny" }, { en: "natural", uk: "природний", pl: "naturalny" }, { en: "protected", uk: "захищений", pl: "chroniony" }]
    },
    "Relationships": {
      nouns: [{ en: "friendship", uk: "дружба", pl: "przyjaźń" }, { en: "marriage", uk: "шлюб", pl: "małżeństwo" }, { en: "partner", uk: "партнер", pl: "partner" }, { en: "trust", uk: "довіра", pl: "zaufanie" }, { en: "respect", uk: "повага", pl: "szacunek" }, { en: "support", uk: "підтримка", pl: "wsparcie" }, { en: "conflict", uk: "конфлікт", pl: "konflikt" }, { en: "compromise", uk: "компроміс", pl: "kompromis" }, { en: "communication", uk: "спілкування", pl: "komunikacja" }, { en: "argument", uk: "суперечка", pl: "kłótnia" }],
      modifiers: [{ en: "close", uk: "близький", pl: "bliski" }, { en: "distant", uk: "віддалений", pl: "dystansowy" }, { en: "healthy", uk: "здоровий", pl: "zdrowy" }, { en: "toxic", uk: "токсичний", pl: "toksyczny" }, { en: "romantic", uk: "романтичний", pl: "romantyczny" }, { en: "family", uk: "сімейний", pl: "rodzinny" }, { en: "friendly", uk: "дружній", pl: "przyjacielski" }, { en: "honest", uk: "чесний", pl: "uczciwy" }, { en: "open", uk: "відкритий", pl: "otwarty" }, { en: "strong", uk: "міцний", pl: "silny" }]
    },
    "Crime": {
      nouns: [{ en: "theft", uk: "крадіжка", pl: "kradzież" }, { en: "robbery", uk: "пограбування", pl: "rabunek" }, { en: "fraud", uk: "шахрайство", pl: "oszustwo" }, { en: "evidence", uk: "доказ", pl: "dowód" }, { en: "witness", uk: "свідок", pl: "świadek" }, { en: "suspect", uk: "підозрюваний", pl: "podejrzany" }, { en: "police", uk: "поліція", pl: "policja" }, { en: "court", uk: "суд", pl: "sąd" }, { en: "sentence", uk: "вирок", pl: "wyrok" }, { en: "prison", uk: "в'язниця", pl: "więzienie" }],
      modifiers: [{ en: "violent", uk: "насильницький", pl: "gwałtowny" }, { en: "serious", uk: "серйозний", pl: "poważny" }, { en: "minor", uk: "незначний", pl: "drobny" }, { en: "cyber", uk: "кібер", pl: "cyber" }, { en: "financial", uk: "фінансовий", pl: "finansowy" }, { en: "legal", uk: "законний", pl: "legalny" }, { en: "illegal", uk: "незаконний", pl: "nielegalny" }, { en: "criminal", uk: "кримінальний", pl: "kryminalny" }, { en: "public", uk: "публічний", pl: "publiczny" }, { en: "organized", uk: "організований", pl: "zorganizowany" }]
    },
    "Economy": {
      nouns: [{ en: "market", uk: "ринок", pl: "rynek" }, { en: "inflation", uk: "інфляція", pl: "inflacja" }, { en: "tax", uk: "податок", pl: "podatek" }, { en: "salary", uk: "зарплата", pl: "pensja" }, { en: "investment", uk: "інвестиція", pl: "inwestycja" }, { en: "budget", uk: "бюджет", pl: "budżet" }, { en: "trade", uk: "торгівля", pl: "handel" }, { en: "profit", uk: "прибуток", pl: "zysk" }, { en: "loss", uk: "збиток", pl: "strata" }, { en: "currency", uk: "валюта", pl: "waluta" }],
      modifiers: [{ en: "global", uk: "глобальний", pl: "globalny" }, { en: "local", uk: "місцевий", pl: "lokalny" }, { en: "stable", uk: "стабільний", pl: "stabilny" }, { en: "unstable", uk: "нестабільний", pl: "niestabilny" }, { en: "economic", uk: "економічний", pl: "ekonomiczny" }, { en: "financial", uk: "фінансовий", pl: "finansowy" }, { en: "annual", uk: "річний", pl: "roczny" }, { en: "national", uk: "національний", pl: "narodowy" }, { en: "private", uk: "приватний", pl: "prywatny" }, { en: "public", uk: "державний", pl: "publiczny" }]
    },
    "Science": {
      nouns: [{ en: "experiment", uk: "експеримент", pl: "eksperyment" }, { en: "research", uk: "дослідження", pl: "badanie" }, { en: "hypothesis", uk: "гіпотеза", pl: "hipoteza" }, { en: "laboratory", uk: "лабораторія", pl: "laboratorium" }, { en: "discovery", uk: "відкриття", pl: "odkrycie" }, { en: "theory", uk: "теорія", pl: "teoria" }, { en: "data", uk: "дані", pl: "dane" }, { en: "evidence", uk: "доказ", pl: "dowód" }, { en: "analysis", uk: "аналіз", pl: "analiza" }, { en: "innovation", uk: "інновація", pl: "innowacja" }],
      modifiers: [{ en: "scientific", uk: "науковий", pl: "naukowy" }, { en: "practical", uk: "практичний", pl: "praktyczny" }, { en: "theoretical", uk: "теоретичний", pl: "teoretyczny" }, { en: "modern", uk: "сучасний", pl: "nowoczesny" }, { en: "advanced", uk: "просунутий", pl: "zaawansowany" }, { en: "basic", uk: "базовий", pl: "podstawowy" }, { en: "experimental", uk: "експериментальний", pl: "eksperymentalny" }, { en: "proven", uk: "доведений", pl: "udowodniony" }, { en: "new", uk: "новий", pl: "nowy" }, { en: "critical", uk: "критичний", pl: "krytyczny" }]
    },
    "Psychology": {
      nouns: [{ en: "emotion", uk: "емоція", pl: "emocja" }, { en: "behavior", uk: "поведінка", pl: "zachowanie" }, { en: "motivation", uk: "мотивація", pl: "motywacja" }, { en: "memory", uk: "пам'ять", pl: "pamięć" }, { en: "stress", uk: "стрес", pl: "stres" }, { en: "anxiety", uk: "тривога", pl: "lęk" }, { en: "therapy", uk: "терапія", pl: "terapia" }, { en: "personality", uk: "особистість", pl: "osobowość" }, { en: "habit", uk: "звичка", pl: "nawyk" }, { en: "mindset", uk: "мислення", pl: "nastawienie" }],
      modifiers: [{ en: "positive", uk: "позитивний", pl: "pozytywny" }, { en: "negative", uk: "негативний", pl: "negatywny" }, { en: "mental", uk: "психічний", pl: "psychiczny" }, { en: "emotional", uk: "емоційний", pl: "emocjonalny" }, { en: "social", uk: "соціальний", pl: "społeczny" }, { en: "personal", uk: "особистий", pl: "osobisty" }, { en: "healthy", uk: "здоровий", pl: "zdrowy" }, { en: "daily", uk: "щоденний", pl: "codzienny" }, { en: "long-term", uk: "довгостроковий", pl: "długoterminowy" }, { en: "deep", uk: "глибокий", pl: "głęboki" }]
    },
    "Global issues": {
      nouns: [{ en: "poverty", uk: "бідність", pl: "ubóstwo" }, { en: "migration", uk: "міграція", pl: "migracja" }, { en: "conflict", uk: "конфлікт", pl: "konflikt" }, { en: "peace", uk: "мир", pl: "pokój" }, { en: "hunger", uk: "голод", pl: "głód" }, { en: "disease", uk: "хвороба", pl: "choroba" }, { en: "education", uk: "освіта", pl: "edukacja" }, { en: "equality", uk: "рівність", pl: "równość" }, { en: "rights", uk: "права", pl: "prawa" }, { en: "security", uk: "безпека", pl: "bezpieczeństwo" }],
      modifiers: [{ en: "global", uk: "глобальний", pl: "globalny" }, { en: "regional", uk: "регіональний", pl: "regionalny" }, { en: "humanitarian", uk: "гуманітарний", pl: "humanitarny" }, { en: "political", uk: "політичний", pl: "polityczny" }, { en: "economic", uk: "економічний", pl: "ekonomiczny" }, { en: "social", uk: "соціальний", pl: "społeczny" }, { en: "urgent", uk: "нагальний", pl: "pilny" }, { en: "long-term", uk: "довгостроковий", pl: "długoterminowy" }, { en: "shared", uk: "спільний", pl: "wspólny" }, { en: "international", uk: "міжнародний", pl: "międzynarodowy" }]
    }
  };

  function buildTopicVocabulary(topic) {
    const set = topicLexicon[topic];
    const words = [];
    set.modifiers.forEach((m) => {
      set.nouns.forEach((n) => {
        words.push({ en: `${m.en} ${n.en}`, uk: `${m.uk} ${n.uk}`, pl: `${m.pl} ${n.pl}` });
      });
    });
    return words;
  }

  const vocabulary = {};
  Object.entries(vocabTopics).forEach(([level, topics]) => {
    vocabulary[level] = {};
    topics.forEach((topic) => {
      vocabulary[level][topic] = buildTopicVocabulary(topic);
    });
  });

  window.HW = { title: "English Tenses Homework", subtitle: "Practice all 12 tenses on one mobile-friendly page.", version: "2026-02-24", tenses, taskSets, testQuestions, irregularVerbs, vocabulary };
})();
