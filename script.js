const SETUP_KEY = "lqc-game-setup";
const LEADERBOARD_KEY = "lqc-leaderboard";
const LAST_ENTRY_KEY = "lqc-last-entry";
const USERS_KEY = "lqc-users";
const CURRENT_USER_KEY = "lqc-current-user";
const PASSWORD_RESET_KEY = "lqc-password-reset";

const BOOKS = [
  { id: "little-prince", title: "The Little Prince", author: "Antoine de Saint-Exupery" },
  { id: "pride-prejudice", title: "Pride and Prejudice", author: "Jane Austen" },
  { id: "hamlet", title: "Hamlet", author: "William Shakespeare" },
  { id: "hobbit", title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: "jane-eyre", title: "Jane Eyre", author: "Charlotte Bronte" },
  { id: "harry-potter", title: "Harry Potter", author: "J.K. Rowling" },
  { id: "great-gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: "wuthering-heights", title: "Wuthering Heights", author: "Emily Bronte" },
  { id: "frankenstein", title: "Frankenstein", author: "Mary Shelley" },
  { id: "little-women", title: "Little Women", author: "Louisa May Alcott" },
  { id: "secret-garden", title: "The Secret Garden", author: "Frances Hodgson Burnett" },
  { id: "anne-green-gables", title: "Anne of Green Gables", author: "L.M. Montgomery" },
  { id: "dorian-gray", title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
  { id: "alice-wonderland", title: "Alice in Wonderland", author: "Lewis Carroll" },
  { id: "dracula", title: "Dracula", author: "Bram Stoker" },
  { id: "crime-punishment", title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  { id: "count-monte-cristo", title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
  { id: "na-drini-cuprija", title: "The Bridge on the Drina", author: "Ivo Andric" },
  { id: "dervis-i-smrt", title: "Death and the Dervish", author: "Mesa Selimovic" },
  { id: "seobe", title: "Migrations", author: "Milos Crnjanski" },
  { id: "prokleta-avlija", title: "The Damned Yard", author: "Ivo Andric" },
  { id: "necista-krv", title: "Impure Blood", author: "Borisav Stankovic" }
];

const QUOTES = [
  { bookId: "little-prince", text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye." },
  { bookId: "little-prince", text: "All grown-ups were once children, but only few of them remember it." },
  { bookId: "pride-prejudice", text: "I could easily forgive his pride, if he had not mortified mine." },
  { bookId: "pride-prejudice", text: "There is no charm equal to tenderness of heart." },
  { bookId: "hamlet", text: "To be, or not to be, that is the question." },
  { bookId: "hamlet", text: "This above all: to thine own self be true." },
  { bookId: "hobbit", text: "So comes snow after fire, and even dragons have their endings." },
  { bookId: "hobbit", text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world." },
  { bookId: "jane-eyre", text: "I am no bird; and no net ensnares me." },
  { bookId: "jane-eyre", text: "Life appears to me too short to be spent in nursing animosity." },
  { bookId: "harry-potter", text: "It is our choices that show what we truly are, far more than our abilities." },
  { bookId: "harry-potter", text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light." },
  { bookId: "great-gatsby", text: "So we beat on, boats against the current, borne back ceaselessly into the past." },
  { bookId: "great-gatsby", text: "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life." },
  { bookId: "wuthering-heights", text: "Whatever our souls are made of, his and mine are the same." },
  { bookId: "wuthering-heights", text: "He is more myself than I am." },
  { bookId: "frankenstein", text: "Beware; for I am fearless, and therefore powerful." },
  { bookId: "frankenstein", text: "Nothing contributes so much to tranquilize the mind as a steady purpose." },
  { bookId: "little-women", text: "I am not afraid of storms, for I am learning how to sail my ship." },
  { bookId: "little-women", text: "I like good strong words that mean something." },
  { bookId: "secret-garden", text: "If you look the right way, you can see that the whole world is a garden." },
  { bookId: "secret-garden", text: "Where you tend a rose, a thistle cannot grow." },
  { bookId: "anne-green-gables", text: "Tomorrow is a new day with no mistakes in it yet." },
  { bookId: "anne-green-gables", text: "Kindred spirits are not so scarce as I used to think." },
  { bookId: "dorian-gray", text: "Nowadays people know the price of everything and the value of nothing." },
  { bookId: "dorian-gray", text: "The only way to get rid of a temptation is to yield to it." },
  { bookId: "alice-wonderland", text: "Curiouser and curiouser!" },
  { bookId: "alice-wonderland", text: "We are all mad here." },
  { bookId: "dracula", text: "Listen to them, the children of the night. What music they make!" },
  { bookId: "dracula", text: "There are darknesses in life and there are lights." },
  { bookId: "crime-punishment", text: "Pain and suffering are always inevitable for a large intelligence and a deep heart." },
  { bookId: "crime-punishment", text: "To go wrong in one's own way is better than to go right in someone else's." },
  { bookId: "count-monte-cristo", text: "All human wisdom is contained in these two words: Wait and Hope." },
  { bookId: "count-monte-cristo", text: "Moral wounds have this peculiarity: they may be hidden, but they never close." },
  { bookId: "na-drini-cuprija", text: "The Bridge on the Drina is a story of a bridge that connects history, people, and destinies." },
  { bookId: "na-drini-cuprija", text: "A bridge is more than a road; it is a witness to every life that touches it." },
  { bookId: "dervis-i-smrt", text: "In silence, the soul speaks its most secret truths." },
  { bookId: "dervis-i-smrt", text: "A man is not what he is in moments of peace, but what he becomes when faced with his own silence." },
  { bookId: "seobe", text: "On the road to exile, a man carries all his loves and sorrow with him." },
  { bookId: "seobe", text: "Sometimes the hardest things are the ones we keep deepest inside ourselves." },
  { bookId: "prokleta-avlija", text: "The whole fate of the world can fit inside one narrow yard." },
  { bookId: "prokleta-avlija", text: "No one knows where the curse begins, but everyone feels its cold breath." },
  { bookId: "necista-krv", text: "Impure blood writes its secrets on every wall it survives." },
  { bookId: "necista-krv", text: "The field was beautiful, but in his heart a darkness was growing that he could not defeat." }
];

const BOOK_LOOKUP = Object.fromEntries(BOOKS.map((book) => [book.id, book]));
const AUTHOR_POOL = [...new Set(BOOKS.map((book) => book.author))];
const TIMER_SECONDS = 20;
const HINT_SHOW_WHEN_SECONDS_LEFT = 10;
const HINT_FETCH_TIMEOUT_MS = 2500;

function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function normalizeWord(word) {
  return String(word).replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
}

function maskQuoteWord(text) {
  const words = text.split(" ");
  const candidates = words
    .map((token, idx) => {
      const clean = normalizeWord(token);
      return { token, idx, clean };
    })
    .filter((item) => item.clean.length > 2);

  const choice = candidates.length
    ? shuffle(candidates)[0]
    : { idx: 0, token: words[0], clean: normalizeWord(words[0]) };
  const token = words[choice.idx];
  const prefixMatch = token.match(/^[^\p{L}\p{N}]*/u);
  const suffixMatch = token.match(/[^\p{L}\p{N}]*$/u);
  const prefix = prefixMatch ? prefixMatch[0] : "";
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const blankToken = `${prefix}____${suffix}`;
  const prompt = words.slice(0, choice.idx).concat(blankToken, words.slice(choice.idx + 1)).join(" ");

  return {
    prompt,
    answer: choice.clean,
    answerLabel: choice.token.replace(/^[^\p{L}\p{N}]*/u, "").replace(/[^\p{L}\p{N}]*$/u, "")
  };
}

function readJsonStorage(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return;
  }
}

function readUsers() {
  return readJsonStorage(USERS_KEY, []);
}

function writeUsers(users) {
  writeJsonStorage(USERS_KEY, users);
}

function getUserByEmail(email) {
  if (!email) {
    return null;
  }

  return readUsers().find(
    (user) => user.email.toLowerCase() === String(email).trim().toLowerCase()
  );
}

function saveUser(user) {
  if (!user || !user.email) {
    return;
  }

  const users = readUsers().filter(
    (existing) => existing.email.toLowerCase() !== user.email.toLowerCase()
  );

  users.push(user);
  writeUsers(users);
}

function setCurrentUser(email) {
  try {
    window.localStorage.setItem(CURRENT_USER_KEY, String(email).trim().toLowerCase());
  } catch (error) {
    return;
  }
}

function clearCurrentUser() {
  try {
    window.localStorage.removeItem(CURRENT_USER_KEY);
  } catch (error) {
    return;
  }
}

function getCurrentUser() {
  try {
    return window.localStorage.getItem(CURRENT_USER_KEY) || "";
  } catch (error) {
    return "";
  }
}

function readPasswordResets() {
  return readJsonStorage(PASSWORD_RESET_KEY, {});
}

function writePasswordResets(payload) {
  writeJsonStorage(PASSWORD_RESET_KEY, payload);
}

function createResetCodeForEmail(email) {
  const resets = readPasswordResets();
  const code = String(Math.floor(100000 + Math.random() * 900000));

  resets[String(email).trim().toLowerCase()] = {
    code,
    expires: Date.now() + 10 * 60 * 1000
  };

  writePasswordResets(resets);
  return code;
}

function verifyResetCode(email, code) {
  const resets = readPasswordResets();
  const record = resets[String(email).trim().toLowerCase()];
  return record && record.code === String(code).trim() && record.expires > Date.now();
}

function clearResetCode(email) {
  const resets = readPasswordResets();
  delete resets[String(email).trim().toLowerCase()];
  writePasswordResets(resets);
}

function showFormMessage(element, message, type = "error") {
  if (!element) {
    return;
  }

  element.textContent = String(message);
  element.className = `form-message ${type}`;
}

function saveSetup(setup) {
  writeJsonStorage(SETUP_KEY, setup);
}

function readSetup() {
  return readJsonStorage(SETUP_KEY, { mode: "random", books: [] });
}

function readLeaderboard() {
  return readJsonStorage(LEADERBOARD_KEY, []);
}

function writeLeaderboard(entries) {
  writeJsonStorage(LEADERBOARD_KEY, entries);
}

function saveLastEntryId(entryId) {
  try {
    window.localStorage.setItem(LAST_ENTRY_KEY, entryId);
  } catch (error) {
    return;
  }
}

function readLastEntryId() {
  try {
    return window.localStorage.getItem(LAST_ENTRY_KEY) || "";
  } catch (error) {
    return "";
  }
}

function createQuestionBank(activeBooks) {
  const titleQuestions = activeBooks.map((book) => ({
    type: "title",
    prompt: book.title,
    answer: book.author,
    answerLabel: book.author,
    bookTitle: book.title
  }));

  const quoteQuestions = QUOTES
    .filter((quote) => BOOK_LOOKUP[quote.bookId] && activeBooks.some((book) => book.id === quote.bookId))
    .map((quote) => ({
      type: "quote",
      prompt: quote.text,
      answer: BOOK_LOOKUP[quote.bookId].author,
      answerLabel: BOOK_LOOKUP[quote.bookId].author,
      bookTitle: BOOK_LOOKUP[quote.bookId].title
    }));

  const fillQuestions = QUOTES
    .filter((quote) => BOOK_LOOKUP[quote.bookId] && activeBooks.some((book) => book.id === quote.bookId))
    .map((quote) => {
      const fillData = maskQuoteWord(quote.text);
      return {
        type: "fill",
        prompt: fillData.prompt,
        answer: fillData.answer,
        answerLabel: fillData.answerLabel,
        bookTitle: BOOK_LOOKUP[quote.bookId].title
      };
    });

  return shuffle([...titleQuestions, ...quoteQuestions, ...fillQuestions]);
}

function buildAnswerOptions(correctAuthor) {
  const decoys = shuffle(AUTHOR_POOL.filter((author) => author !== correctAuthor)).slice(0, 3);
  return shuffle([correctAuthor, ...decoys]);
}

function getAuthorInitials(authorName) {
  return String(authorName)
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join(".");
}

function buildHintRequest(question, answerOptions) {
  return {
    type: question.type,
    prompt: question.prompt,
    bookTitle: question.bookTitle,
    answerLabel: question.answerLabel,
    answerOptions
  };
}

function buildLocalHint(question, answerOptions = []) {
  if (question.type === "fill") {
    const answer = String(question.answerLabel || "");
    const firstLetter = answer.charAt(0).toUpperCase();
    const lastLetter = answer.charAt(answer.length - 1).toUpperCase();
    return `Think of a ${answer.length}-letter word. It starts with "${firstLetter}" and ends with "${lastLetter}".`;
  }

  const initials = getAuthorInitials(question.answerLabel);
  const removableOptions = shuffle(
    answerOptions.filter((option) => option !== question.answerLabel)
  ).slice(0, 2);
  const eliminationText = removableOptions.length
    ? ` You can rule out ${removableOptions.join(" and ")}.`
    : "";

  if (question.type === "title") {
    return `Focus on the author whose initials are ${initials}.${eliminationText}`;
  }

  return `Think about the book "${question.bookTitle}". The author's initials are ${initials}.${eliminationText}`;
}

async function requestConfiguredHint(question, answerOptions) {
  if (typeof window === "undefined") {
    return "";
  }

  const payload = buildHintRequest(question, answerOptions);

  if (typeof window.LQC_AI_HINT_PROVIDER === "function") {
    try {
      const hint = await window.LQC_AI_HINT_PROVIDER(payload);
      return String(hint || "").trim();
    } catch (error) {
      return "";
    }
  }

  if (!window.LQC_AI_HINT_ENDPOINT) {
    return "";
  }

  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timeoutId = controller
    ? window.setTimeout(() => controller.abort(), HINT_FETCH_TIMEOUT_MS)
    : null;

  try {
    const response = await fetch(window.LQC_AI_HINT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    });

    if (!response.ok) {
      return "";
    }

    const data = await response.json();
    return String(data.hint || data.text || "").trim();
  } catch (error) {
    return "";
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

async function resolveHintText(question, answerOptions) {
  const configuredHint = await requestConfiguredHint(question, answerOptions);
  return configuredHint || buildLocalHint(question, answerOptions);
}

function formatDate(isoString) {
  try {
    return new Date(isoString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  } catch (error) {
    return isoString;
  }
}

function recordLeaderboardEntry(result) {
  const entries = readLeaderboard();
  const currentUserEmail = getCurrentUser();
  const currentUser = currentUserEmail ? getUserByEmail(currentUserEmail) : null;
  const playerName = currentUser?.username || currentUserEmail || "Guest";

  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    playerName,
    playerEmail: currentUserEmail || null,
    score: result.score,
    correct: result.correct,
    mistakes: result.mistakes,
    modeLabel: result.modeLabel,
    date: new Date().toISOString()
  };

  const filteredEntries = currentUserEmail
    ? entries.filter((existing) => existing.playerEmail !== currentUserEmail)
    : entries;

  const updatedEntries = [...filteredEntries, entry].sort((left, right) => {
    if (right.score !== left.score) {
      return right.score - left.score;
    }

    if (right.correct !== left.correct) {
      return right.correct - left.correct;
    }

    if (left.mistakes !== right.mistakes) {
      return left.mistakes - right.mistakes;
    }

    return new Date(right.date).getTime() - new Date(left.date).getTime();
  });

  writeLeaderboard(updatedEntries.slice(0, 20));
  saveLastEntryId(entry.id);
}

function initFormRedirects() {
  document.querySelectorAll("form[data-redirect]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
}

function initGuestLinks() {
  document.querySelectorAll(".guest-link").forEach((link) => {
    link.addEventListener("click", () => {
      clearCurrentUser();
    });
  });
}

function initAuthPages() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const forgotForm = document.getElementById("forgotForm");

  if (loginForm) {
    const message = document.getElementById("loginMessage");
    const emailInput = loginForm.querySelector('[name="email"]');
    const passwordInput = loginForm.querySelector('[name="password"]');
    const lastUser = getCurrentUser();

    if (lastUser) {
      emailInput.value = lastUser;
    }

    loginForm.addEventListener("submit", () => {
      const email = String(emailInput.value).trim();
      const password = String(passwordInput.value);

      if (!email || !password) {
        showFormMessage(message, "Enter your email and password.");
        return;
      }

      const user = getUserByEmail(email);
      if (!user) {
        showFormMessage(message, "No account was found with this email.");
        return;
      }

      if (user.password !== password) {
        showFormMessage(message, "Incorrect password.");
        return;
      }

      setCurrentUser(email);
      showFormMessage(message, "Login successful. Redirecting...", "success");
      window.location.href = loginForm.dataset.redirect || "mode.html";
    });
  }

  if (signupForm) {
    const message = document.getElementById("signupMessage");
    const usernameInput = signupForm.querySelector('[name="username"]');
    const emailInput = signupForm.querySelector('[name="email"]');
    const passwordInput = signupForm.querySelector('[name="password"]');
    const confirmInput = signupForm.querySelector('[name="confirmPassword"]');

    signupForm.addEventListener("submit", () => {
      const username = String(usernameInput.value).trim();
      const email = String(emailInput.value).trim();
      const password = String(passwordInput.value);
      const confirmPassword = String(confirmInput.value);

      if (!username || !email || !password || !confirmPassword) {
        showFormMessage(message, "Fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        showFormMessage(message, "Password and confirmation do not match.");
        return;
      }

      if (getUserByEmail(email)) {
        showFormMessage(message, "An account with this email already exists.");
        return;
      }

      saveUser({ username, email: email.toLowerCase(), password });
      setCurrentUser(email);
      showFormMessage(message, "Account created successfully. Redirecting...", "success");
      window.location.href = signupForm.dataset.redirect || "mode.html";
    });
  }

  if (forgotForm) {
    const message = document.getElementById("forgotMessage");
    const emailInput = forgotForm.querySelector('[name="email"]');
    const resetCodeField = document.getElementById("resetCodeField");
    const resetCodeInput = forgotForm.querySelector('[name="resetCode"]');
    const newPasswordField = document.getElementById("newPasswordField");
    const newPasswordInput = forgotForm.querySelector('[name="newPassword"]');
    const confirmPasswordField = document.getElementById("confirmPasswordField");
    const confirmPasswordInput = forgotForm.querySelector('[name="confirmPassword"]');
    const submitButton = forgotForm.querySelector("button[type=submit]");

    forgotForm.dataset.step = "request";
    resetCodeField.style.display = "block";
    newPasswordField.style.display = "none";
    confirmPasswordField.style.display = "none";
    submitButton.textContent = "Send Code";

    forgotForm.addEventListener("submit", () => {
      const email = String(emailInput.value).trim();
      const code = String(resetCodeInput.value).trim();
      const step = forgotForm.dataset.step || "request";

      if (!email) {
        showFormMessage(message, "Enter your email.");
        return;
      }

      const user = getUserByEmail(email);
      if (!user) {
        showFormMessage(message, "No account was found with this email.");
        return;
      }

      if (step === "request") {
        if (!code) {
          const generatedCode = createResetCodeForEmail(email);
          forgotForm.dataset.step = "verify";
          submitButton.textContent = "Verify Code";
          showFormMessage(
            message,
            `A verification code was sent to ${email}. (Demo code: ${generatedCode})`,
            "success"
          );
          return;
        }

        if (!verifyResetCode(email, code)) {
          showFormMessage(message, "The code is invalid or expired.");
          return;
        }

        forgotForm.dataset.step = "reset";
        resetCodeField.style.display = "none";
        newPasswordField.style.display = "block";
        confirmPasswordField.style.display = "block";
        submitButton.textContent = "Reset Password";
        emailInput.disabled = true;
        showFormMessage(message, "Code verified. Enter your new password.", "success");
        return;
      }

      if (step === "verify") {
        if (!code) {
          showFormMessage(message, "Enter the code from your email.");
          return;
        }

        if (!verifyResetCode(email, code)) {
          showFormMessage(message, "The code is invalid or expired.");
          return;
        }

        forgotForm.dataset.step = "reset";
        resetCodeField.style.display = "none";
        newPasswordField.style.display = "block";
        confirmPasswordField.style.display = "block";
        submitButton.textContent = "Reset Password";
        emailInput.disabled = true;
        showFormMessage(message, "Code verified. Enter your new password.", "success");
        return;
      }

      if (step === "reset") {
        const newPassword = String(newPasswordInput.value);
        const confirmPassword = String(confirmPasswordInput.value);

        if (!newPassword || !confirmPassword) {
          showFormMessage(message, "Fill in both password fields.");
          return;
        }

        if (newPassword !== confirmPassword) {
          showFormMessage(message, "Password and confirmation do not match.");
          return;
        }

        user.password = newPassword;
        saveUser(user);
        clearResetCode(email);
        showFormMessage(message, "Password changed successfully. Redirecting...", "success");
        setTimeout(() => {
          window.location.href = forgotForm.dataset.redirect || "login.html";
        }, 1000);
      }
    });
  }
}

function initModePage() {
  const randomChoiceButton = document.getElementById("randomChoiceButton");

  if (!randomChoiceButton) {
    return;
  }

  randomChoiceButton.addEventListener("click", () => {
    saveSetup({ mode: "random", books: [] });
    window.location.href = "game.html";
  });
}

function initLibraryPage() {
  const bookGrid = document.getElementById("bookGrid");
  const selectionNote = document.getElementById("selectionNote");
  const startSelectedButton = document.getElementById("startSelectedButton");

  if (!bookGrid || !selectionNote || !startSelectedButton) {
    return;
  }

  const savedSetup = readSetup();
  const selectedSet = new Set(
    savedSetup.mode === "selected" && Array.isArray(savedSetup.books) ? savedSetup.books : []
  );

  const bookButtons = Array.from(bookGrid.querySelectorAll(".book-card"));

  function updateSelectionState() {
    const selectedBooks = bookButtons
      .filter((button) => button.classList.contains("is-selected"))
      .map((button) => button.dataset.bookId);

    if (selectedBooks.length) {
      selectionNote.textContent = `${selectedBooks.length} book${selectedBooks.length === 1 ? "" : "s"} ready for your round`;
      startSelectedButton.textContent = `Start Challenge (${selectedBooks.length})`;
    } else {
      selectionNote.textContent = "Choose at least one book to begin";
      startSelectedButton.textContent = "Start Challenge";
    }

    startSelectedButton.disabled = selectedBooks.length === 0;
    return selectedBooks;
  }

  bookButtons.forEach((button) => {
    if (selectedSet.has(button.dataset.bookId)) {
      button.classList.add("is-selected");
    }

    button.addEventListener("click", () => {
      button.classList.toggle("is-selected");
      updateSelectionState();
    });
  });

  startSelectedButton.addEventListener("click", () => {
    const selectedBooks = updateSelectionState();
    if (!selectedBooks.length) {
      return;
    }

    saveSetup({ mode: "selected", books: selectedBooks });
    window.location.href = "game.html";
  });

  updateSelectionState();
}

function initGamePage() {
  const quoteText = document.getElementById("quoteText");
  const answers = document.getElementById("answers");
  const gameFeedback = document.getElementById("gameFeedback");
  const hintCard = document.getElementById("hintCard");
  const hintText = document.getElementById("hintText");
  const scoreValue = document.getElementById("scoreValue");
  const roundValue = document.getElementById("roundValue");
  const mistakeValue = document.getElementById("mistakeValue");
  const timerValue = document.getElementById("timerValue");
  const timerBox = document.getElementById("timerBox");
  const setupLabel = document.getElementById("setupLabel");
  const questionTypeLabel = document.getElementById("questionTypeLabel");
  const questionSource = document.getElementById("questionSource");
  const nextButton = document.getElementById("nextButton");
  const endActions = document.getElementById("endActions");
  const roundProgressBar = document.getElementById("roundProgressBar");

  if (
    !quoteText ||
    !answers ||
    !gameFeedback ||
    !hintCard ||
    !hintText ||
    !scoreValue ||
    !roundValue ||
    !mistakeValue ||
    !timerValue ||
    !setupLabel ||
    !questionTypeLabel ||
    !questionSource ||
    !nextButton ||
    !endActions
  ) {
    return;
  }

  const setup = readSetup();
  const activeBooks =
    setup.mode === "selected" && Array.isArray(setup.books) && setup.books.length
      ? BOOKS.filter((book) => setup.books.includes(book.id))
      : BOOKS;

  const questions = createQuestionBank(activeBooks);
  const modeLabel =
    setup.mode === "selected" && activeBooks.length
      ? `Selected Books (${activeBooks.length})`
      : "Random Mode";

  const gameState = {
    questions,
    currentIndex: 0,
    score: 0,
    correct: 0,
    mistakes: 0,
    currentAnswerOptions: [],
    hintMessage: "",
    hintVisible: false,
    answered: false,
    finished: false
  };

  setupLabel.textContent = modeLabel;

  let timeLeft = TIMER_SECONDS;
  let countdownInterval = null;
  let advanceTimeout = null;
  let hintRequestId = 0;

  function clearQuestionTimers() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }

    if (advanceTimeout) {
      clearTimeout(advanceTimeout);
      advanceTimeout = null;
    }

  }

  function setGameFeedback(message, state = "") {
    gameFeedback.textContent = String(message || "");
    gameFeedback.dataset.state = state;
  }

  function resetHintCard() {
    hintCard.hidden = true;
    hintCard.classList.remove("is-loading");
    hintCard.classList.remove("is-visible");
    hintText.textContent = "";
    gameState.hintMessage = "";
    gameState.hintVisible = false;
  }

  function showHintCard(message, loading = false) {
    hintCard.hidden = false;
    hintCard.classList.toggle("is-loading", loading);
    hintCard.classList.add("is-visible");
    hintText.textContent = String(message || "");
  }

  function maybeRevealHint() {
    if (
      gameState.hintVisible ||
      gameState.answered ||
      gameState.finished ||
      timeLeft > HINT_SHOW_WHEN_SECONDS_LEFT
    ) {
      return;
    }

    gameState.hintVisible = true;
    showHintCard(
      gameState.hintMessage || "The AI librarian is preparing a hint...",
      !gameState.hintMessage
    );
  }

  function updateRoundProgress(forceComplete = false) {
    if (!roundProgressBar) {
      return;
    }

    const total = Math.max(gameState.questions.length, 1);
    const current = forceComplete ? total : Math.min(gameState.currentIndex + 1, total);
    roundProgressBar.style.width = `${(current / total) * 100}%`;
  }

  function setTimerDisplay(value) {
    timerValue.textContent = String(value).padStart(2, "0");

    if (timerBox) {
      timerBox.classList.toggle("is-warning", value <= 3);
    }

    maybeRevealHint();
  }

  function startQuestionTimer() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }

    timeLeft = TIMER_SECONDS;
    setTimerDisplay(timeLeft);

    countdownInterval = setInterval(() => {
      timeLeft -= 1;
      setTimerDisplay(timeLeft);

      if (timeLeft <= 0) {
        clearQuestionTimers();
        handleTimeout();
      }
    }, 1000);
  }

  function markCorrectOption(currentQuestion) {
    Array.from(answers.querySelectorAll("button, input")).forEach((element) => {
      element.disabled = true;

      if (
        element.tagName === "BUTTON" &&
        normalizeWord(element.textContent) === normalizeWord(currentQuestion.answerLabel)
      ) {
        element.classList.add("correct");
      }
    });
  }

  function handleTimeout() {
    if (gameState.answered || gameState.finished) {
      return;
    }

    resetHintCard();
    gameState.answered = true;
    const currentQuestion = gameState.questions[gameState.currentIndex];
    gameState.mistakes += 1;
    mistakeValue.textContent = `${gameState.mistakes}/3`;
    setGameFeedback(`Time is up. The correct answer was ${currentQuestion.answerLabel}.`, "warning");
    markCorrectOption(currentQuestion);

    if (gameState.mistakes >= 3) {
      finishGame("mistakes");
      return;
    }

    if (gameState.currentIndex >= gameState.questions.length - 1) {
      finishGame("completed");
      return;
    }

    goToNextQuestion(1800);
  }

  function goToNextQuestion(delay = 1500) {
    clearQuestionTimers();
    advanceTimeout = setTimeout(() => {
      if (gameState.finished) {
        return;
      }

      gameState.currentIndex += 1;
      renderQuestion();
    }, delay);
  }

  function renderQuestion() {
    if (gameState.currentIndex >= gameState.questions.length) {
      finishGame("completed");
      return;
    }

    const currentQuestion = gameState.questions[gameState.currentIndex];
    const currentHintId = ++hintRequestId;

    scoreValue.textContent = String(gameState.score);
    roundValue.textContent = String(gameState.currentIndex + 1);
    mistakeValue.textContent = `${gameState.mistakes}/3`;
    questionTypeLabel.textContent =
      currentQuestion.type === "quote"
        ? "Quote -> Author"
        : currentQuestion.type === "title"
          ? "Title -> Author"
          : "Complete the Quote";
    questionSource.textContent =
      currentQuestion.type === "quote" || currentQuestion.type === "fill"
        ? `From: ${currentQuestion.bookTitle}`
        : "Use the book title to identify the author.";
    quoteText.textContent =
      currentQuestion.type === "title"
        ? currentQuestion.prompt
        : `"${currentQuestion.prompt}"`;

    setGameFeedback("", "");
    answers.innerHTML = "";
    nextButton.hidden = true;
    endActions.hidden = true;
    resetHintCard();
    gameState.answered = false;
    updateRoundProgress();

    if (currentQuestion.type === "fill") {
      gameState.currentAnswerOptions = [];
      const input = document.createElement("input");
      input.type = "text";
      input.className = "answer-input";
      input.placeholder = "Type the missing word";
      input.autocomplete = "off";

      const submit = document.createElement("button");
      submit.type = "button";
      submit.className = "primary-button";
      submit.textContent = "Submit";
      submit.addEventListener("click", () => handleAnswer(null, input.value));

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          submit.click();
        }
      });

      answers.appendChild(input);
      answers.appendChild(submit);
      input.focus();
    } else {
      const answerOptions = buildAnswerOptions(currentQuestion.answer);
      gameState.currentAnswerOptions = answerOptions;

      answerOptions.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(button, option));
        answers.appendChild(button);
      });
    }

    resolveHintText(currentQuestion, gameState.currentAnswerOptions).then((resolvedHint) => {
      if (currentHintId !== hintRequestId || gameState.finished) {
        return;
      }

      gameState.hintMessage = resolvedHint || "No hint is available for this question.";

      if (gameState.hintVisible) {
        showHintCard(gameState.hintMessage, false);
      }
    });

    startQuestionTimer();
  }

  function finishGame(reason) {
    if (gameState.finished) {
      return;
    }

    gameState.finished = true;
    clearQuestionTimers();
    resetHintCard();

    if (timerBox) {
      timerBox.classList.remove("is-warning");
    }

    recordLeaderboardEntry({
      score: gameState.score,
      correct: gameState.correct,
      mistakes: gameState.mistakes,
      modeLabel
    });

    scoreValue.textContent = String(gameState.score);
    roundValue.textContent = String(gameState.currentIndex + (gameState.answered ? 1 : 0));
    mistakeValue.textContent = `${gameState.mistakes}/3`;
    questionTypeLabel.textContent = "Game Over";
    questionSource.textContent = `Correct answers: ${gameState.correct}`;
    quoteText.textContent =
      reason === "mistakes"
        ? "Your run ended because you reached three mistakes."
        : "You completed every prepared question in this round.";
    answers.innerHTML = "";
    nextButton.hidden = true;
    endActions.hidden = false;
    updateRoundProgress(reason === "completed");
    setGameFeedback("Your result has been saved to the leaderboard.", "success");
  }

  function handleAnswer(selectedButton, selectedAuthor) {
    if (gameState.answered || gameState.finished) {
      return;
    }

    clearQuestionTimers();
    resetHintCard();
    gameState.answered = true;

    const currentQuestion = gameState.questions[gameState.currentIndex];
    const normalizedAnswer = normalizeWord(selectedAuthor || "");
    const correctAnswer = normalizeWord(currentQuestion.answer);
    const isCorrect = normalizedAnswer === correctAnswer;

    if (isCorrect) {
      gameState.score += 10;
      gameState.correct += 1;
      setGameFeedback("Correct! +10 points.", "success");

      if (selectedButton) {
        selectedButton.classList.add("correct");
      }
    } else {
      gameState.mistakes += 1;
      setGameFeedback(`Wrong answer. The correct answer was ${currentQuestion.answerLabel}.`, "error");

      if (selectedButton) {
        selectedButton.classList.add("wrong");
      }
    }

    markCorrectOption(currentQuestion);
    scoreValue.textContent = String(gameState.score);
    mistakeValue.textContent = `${gameState.mistakes}/3`;

    if (gameState.mistakes >= 3) {
      finishGame("mistakes");
      return;
    }

    if (gameState.currentIndex >= gameState.questions.length - 1) {
      finishGame("completed");
      return;
    }

    goToNextQuestion(1800);
  }

  nextButton.addEventListener("click", () => {
    if (gameState.finished) {
      return;
    }

    gameState.currentIndex += 1;
    renderQuestion();
  });

  renderQuestion();
}

function initLeaderboardPage() {
  const leaderboardList = document.getElementById("leaderboardList");

  if (!leaderboardList) {
    return;
  }

  const entries = readLeaderboard();
  const lastEntryId = readLastEntryId();

  if (!entries.length) {
    leaderboardList.innerHTML = `
      <article class="leaderboard-item empty-board">
        <div class="leaderboard-main">
          <strong>No scores yet.</strong>
          <span>Play a round and the leaderboard will appear here instantly.</span>
        </div>
      </article>
    `;
    return;
  }

  leaderboardList.innerHTML = "";

  entries.forEach((entry, index) => {
    const item = document.createElement("article");
    item.className = "leaderboard-item";

    if (entry.id === lastEntryId) {
      item.classList.add("is-latest");
    }

    const displayName = entry.playerName || entry.playerEmail || "Guest";

    item.innerHTML = `
      <div class="leaderboard-rank">#${index + 1}</div>
      <div class="leaderboard-main">
        <strong>${displayName}</strong>
        <span>${entry.modeLabel}</span>
      </div>
      <div class="leaderboard-side">
        <span><strong>${entry.score}</strong> points</span>
        <span>${entry.correct} correct</span>
        <span>${entry.mistakes}/3 mistakes</span>
        <span>${formatDate(entry.date)}</span>
      </div>
    `;

    leaderboardList.appendChild(item);
  });
}

initFormRedirects();
initGuestLinks();
initAuthPages();
initModePage();
initLibraryPage();
initGamePage();
initLeaderboardPage();
