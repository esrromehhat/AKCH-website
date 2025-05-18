
(() => {
  // Algebra questions data sets with all unique questions including linear gradient ones especially in Algebra 2
  const quizData = {
    algebra1: [
      { q: "Was ist 7 + 8?", a: "15", explanation: "7 plus 8 ergibt 15." },
      { q: "Berechne 12 - 5.", a: "7", explanation: "12 minus 5 ist 7." },
      { q: "Was ist 3 * 4?", a: "12", explanation: "3 mal 4 ergibt 12." },
      { q: "Teile 20 durch 4.", a: "5", explanation: "20 geteilt durch 4 ist 5." },
      { q: "Was ist die Lösung von x + 5 = 10?", a: "5", explanation: "x+5=10, also x=10-5=5." },
      { q: "Berechne 9 + 6 - 4.", a: "11", explanation: "9+6=15 minus 4 ist 11." },
      { q: "Wie viel ist 2²?", a: "4", explanation: "2 hoch 2 ist 4." },
      { q: "Was ist die Wurzel aus 81?", a: "9", explanation: "Wurzel aus 81 ist 9." },
      { q: "Füge zusammen: 10 + 4 * 2", a: "18", explanation: "4*2=8, plus 10 ergibt 18." },
      { q: "Berechne (5 + 3) * 2.", a: "16", explanation: "5+3=8 mal 2 ergibt 16." },
      { q: "Was ist 100 - 45?", a: "55", explanation: "100 minus 45 ist 55." },
      { q: "Löse für x: x - 4 = 12.", a: "16", explanation: "x=12+4=16." },
      { q: "Was ist das Ergebnis von 6 * 7?", a: "42", explanation: "6 mal 7 ist 42." },
      { q: "Teile 36 durch 9.", a: "4", explanation: "36 geteilt durch 9 ist 4." },
      { q: "Berechne den Wert von 10 + 2 * 5.", a: "20", explanation: "2*5=10 plus 10 = 20." },
      { q: "Löse: 15 / 3 + 4.", a: "9", explanation: "15 durch 3 ist 5 plus 4 ergibt 9." },
      { q: "Wie viel ist 3³?", a: "27", explanation: "3 hoch 3 ist 27." },
      { q: "Berechne 7 * 5 - 10.", a: "25", explanation: "7*5=35 minus 10 ist 25." },
      { q: "Was ist 144 geteilt durch 12?", a: "12", explanation: "144 geteilt durch 12 ist 12." },
      { q: "Löse für x: 3x = 18.", a: "6", explanation: "3x=18, also x=6." },
      { q: "Was ist 14 + 6?", a: "20", explanation: "14 plus 6 ergibt 20." },
      { q: "Berechne 2 * (4 + 3).", a: "14", explanation: "4+3=7 mal 2 ergibt 14." },
      { q: "Was ist 100 - 25 * 3?", a: "25", explanation: "25*3=75, 100 minus 75 ist 25." },
      { q: "Berechne 8 + 2 * 6 - 4.", a: "16", explanation: "2*6=12 plus 8 =20 minus 4 =16." },
      { q: "Löse für x: x/2 = 7.", a: "14", explanation: "x=7*2=14." },
    ],
    algebra2: [
      { q: "Löse für x: 2x + 3 = 7.", a: "2", explanation: "2x+3=7 → 2x=4 → x=2." },
      { q: "Berechne die Steigung m der Geraden durch Punkte (1,2) und (3,6).", a: "2", explanation: "m=(6-2)/(3-1)=4/2=2." },
      { q: "Löse die Gleichung: 5x - 4 = 11.", a: "3", explanation: "5x=15 → x=3." },
      { q: "Bestimme m, wenn y = 4x + 1.", a: "4", explanation: "Steigung ist der Koeffizient von x, also 4." },
      { q: "Berechne den y-Achsenabschnitt bei y = 3x - 5.", a: "-5", explanation: "y-Achsenabschnitt ist der konstante Term, hier -5." },
      { q: "Löse für x: 3(x - 2) = 9.", a: "5", explanation: "3x-6=9 → 3x=15 → x=5." },
      { q: "Finde die Steigung zwischen (4,1) und (4,5).", a: "undefined", explanation: "Division durch Null, vertikale Gerade hat keine definierte Steigung." },
      { q: "Löse: y - 2 = 3(x + 1).", a: "y=3x+5", explanation: "y-2=3x+3 → y=3x+5." },
      { q: "Bestimme x, so dass y = 0 bei y=2x-6.", a: "3", explanation: "0=2x-6 → 2x=6 → x=3." },
      { q: "Berechne Steigung m der Gerade y = -x + 7.", a: "-1", explanation: "Steigung ist -1." },
      { q: "Löse für y: 4y - 8 = 12.", a: "5", explanation: "4y=20 → y=5." },
      { q: "Finde m und b bei y=mx+b mit y=5x-2.", a: "m=5,b=-2", explanation: "m ist 5, b ist -2." },
      { q: "Löse: 2(x+3) = x + 9.", a: "3", explanation: "2x+6=x+9 → x=3." },
      { q: "Was ist die Steigung m der Gerade durch (0,1) und (2,5)?", a: "2", explanation: "m=(5-1)/(2-0)=4/2=2." },
      { q: "Löse: 3y + 6 = 0.", a: "-2", explanation: "3y=-6 → y=-2." },
      { q: "Bestimme y für x=4 bei y=7x+3.", a: "31", explanation: "y=7*4+3=31." },
      { q: "Berechne Steigung m von Gerade zwischen (2,3) und (6,11).", a: "2", explanation: "m=(11-3)/(6-2)=8/4=2." },
      { q: "Löse für x: 4x - 7 = 5x + 1.", a: "-8", explanation: "4x-5x=1+7 → -x=8 → x=-8." },
      { q: "Finde y-Achsenabschnitt bei y = -3x + 9.", a: "9", explanation: "b=9." },
      { q: "Löse 2(y+1) = 4x + 6 für y, wenn x=1.", a: "5", explanation: "2(y+1)=4*1+6 → 2y+2=10 → 2y=8 → y=4." },
    ],
    algebra3: [
      { q: "Schreibe die quadratische Formel auf.", a: "(-b±√(b²-4ac))/(2a)", explanation: "Lösung von ax²+bx+c=0." },
      { q: "Was ist die Ableitung von f(x)=x²?", a: "2x", explanation: "Ableitung von x² ist 2x." },
      { q: "Integriere f(x)=3x².", a: "x³+C", explanation: "Integral von 3x² ist x³ + C." },
      { q: "Fasse zusammen: (2x + 3)(x - 5).", a: "2x²-7x-15", explanation: "2x*x=2x²; 2x*(-5)=-10x;3*x=3x;3*(-5)=-15, zusammen: 2x²-7x-15." },
      { q: "Vereinfach den Ausdruck: x² + 2x + 1.", a: "(x+1)²", explanation: "x² + 2x +1 ist das Quadrat der Summe (x+1)²." },
      { q: "Löse die Gleichung: x² - 9 = 0.", a: "x=±3", explanation: "x²=9, also x=3 oder x=-3." },
      { q: "Finde die erste Ableitung von f(x)=5x³.", a: "15x²", explanation: "3*5x²=15x²." },
      { q: "Integriere f(x)=4x³.", a: "x⁴+C", explanation: "Integral von 4x³ ist x⁴ + C." },
      { q: "Vereinfach: (x² - 4)/(x - 2).", a: "x+2", explanation: "Zähler ist (x-2)(x+2), kürzt sich weg." },
      { q: "Löse für x: 2x² - 8x + 6 = 0.", a: "1.5,2", explanation: "Lösungen mit Mitternachtsformel: x=1.5 und x=2." },
      { q: "Was ist der Gradient der Funktion f(x)=3x + 7?", a: "3", explanation: "Gradient ist die Steigung, hier 3." },
      { q: "Erkläre die Bedeutung von ∫f(x)dx.", a: "Integral", explanation: "Integral ist die Fläche unter der Kurve f(x)." },
      { q: "Gib die Nullstellen von f(x) = x² - x - 6 an.", a: "3,-2", explanation: "Löse x² - x -6=0 → (x-3)(x+2)=0." },
      { q: "Löse das Gleichungssystem:\n2x + y = 5\nx - y = 1", a: "x=2,y=1", explanation: "Addiere und löse: x=2, y=1." },
    ],
  };

  let currentLevel = "algebra1";
  let currentIndex = 0;
  let quizStarted = false;

  // UI references
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const startBtn = document.getElementById("start-btn");
  const questionNumber = document.getElementById("question-number");
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer-input");
  const feedback = document.getElementById("feedback");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  // Whiteboard refs and variables
  const wbCanvas = document.getElementById("whiteboard");
  const wbCtx = wbCanvas.getContext("2d");
  const wbPenBtn = document.getElementById("wb-pen");
  const wbEraserBtn = document.getElementById("wb-eraser");
  const wbTextBtn = document.getElementById("wb-text");
  const colorPicker = document.getElementById("color-picker");
  const wbUndoBtn = document.getElementById("wb-undo");
  const wbRedoBtn = document.getElementById("wb-redo");
  const wbClearBtn = document.getElementById("wb-clear");
  const wbInfoBtn = document.getElementById("wb-info");

  let drawing = false;
  let currentTool = "pen";
  let penColor = "#000000";
  let penWidth = 2;
  let eraserWidth = 12;

  let undoStack = [];
  let redoStack = [];

  function resizeCanvas() {
    wbCanvas.width = wbCanvas.clientWidth * window.devicePixelRatio;
    wbCanvas.height = wbCanvas.clientHeight * window.devicePixelRatio;
    wbCanvas.style.width = wbCanvas.clientWidth + "px";
    wbCanvas.style.height = wbCanvas.clientHeight + "px";
    wbCtx.setTransform(1,0,0,1,0,0);
    wbCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    redrawAll();
  }

  function saveState() {
    let imageData = wbCtx.getImageData(0, 0, wbCanvas.width, wbCanvas.height);
    undoStack.push(imageData);
    if (undoStack.length > 50) undoStack.shift();
    redoStack.length = 0;
    updateUndoRedoBtns();
  }
  function updateUndoRedoBtns() {
    wbUndoBtn.disabled = undoStack.length === 0;
    wbRedoBtn.disabled = redoStack.length === 0;
  }
  function redrawAll() {
    if (undoStack.length > 0) {
      wbCtx.putImageData(undoStack[undoStack.length -1], 0, 0);
    } else {
      wbCtx.clearRect(0,0,wbCanvas.width,wbCanvas.height);
    }
  }
  function undo() {
    if (undoStack.length > 0) {
      let last = undoStack.pop();
      redoStack.push(last);
      if (undoStack.length > 0) {
        wbCtx.putImageData(undoStack[undoStack.length -1], 0, 0);
      } else {
        wbCtx.clearRect(0,0,wbCanvas.width,wbCanvas.height);
      }
      updateUndoRedoBtns();
    }
  }
  function redo() {
    if (redoStack.length > 0) {
      let image = redoStack.pop();
      undoStack.push(image);
      wbCtx.putImageData(image, 0, 0);
      updateUndoRedoBtns();
    }
  }

  function startDrawing(x, y) {
    drawing = true;
    wbCtx.beginPath();
    wbCtx.lineCap = "round";
    wbCtx.lineJoin = "round";
    if(currentTool === "pen") {
      wbCtx.strokeStyle = penColor;
      wbCtx.lineWidth = penWidth;
    } else if (currentTool === "eraser") {
      wbCtx.strokeStyle = "#fff";
      wbCtx.lineWidth = eraserWidth;
    }
    wbCtx.moveTo(x, y);
  }
  function drawLine(x, y) {
    if (!drawing) return;
    wbCtx.lineTo(x, y);
    wbCtx.stroke();
  }
  function stopDrawing() {
    if (drawing) {
      drawing = false;
      saveState();
    }
  }

  function addTextInput(x, y) {
    const input = document.createElement('input');
    input.type = "text";
    input.style.position = "absolute";
    input.style.left = (wbCanvas.getBoundingClientRect().left + x) + "px";
    input.style.top = (wbCanvas.getBoundingClientRect().top + y) + "px";
    input.style.color = penColor;
    input.style.fontSize = "20px";
    input.style.border = "1px solid #2979ff";
    input.style.background = "transparent";
    input.style.outline = "none";
    input.style.zIndex = 1000;
    input.autofocus = true;
    input.spellcheck = false;

    document.body.appendChild(input);
    input.focus();

    function finish() {
      const text = input.value.trim();
      if (text.length > 0) {
        wbCtx.fillStyle = penColor;
        wbCtx.font = "20px Arial";
        wbCtx.fillText(text, x, y+18);
        saveState();
      }
      document.body.removeChild(input);
      wbCanvas.focus();
    }
    input.addEventListener('keydown', e => {
      if(e.key === "Enter") {
        finish();
      } else if(e.key === "Escape") {
        document.body.removeChild(input);
        wbCanvas.focus();
      }
    });
    input.addEventListener('blur', finish);
  }

  let lastX = 0, lastY = 0;
  function getCanvasCoordinates(event) {
    const rect = wbCanvas.getBoundingClientRect();
    let x, y;
    if(event.touches) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }
    return {x, y};
  }

  function onPointerDown(e) {
    if(currentTool === "text") return;
    const {x, y} = getCanvasCoordinates(e);
    startDrawing(x, y);
    lastX = x;
    lastY = y;
    e.preventDefault();
  }
  function onPointerMove(e) {
    if(!drawing) return;
    const {x, y} = getCanvasCoordinates(e);
    drawLine(x, y);
    lastX = x;
    lastY = y;
    e.preventDefault();
  }
  function onPointerUp(e) {
    stopDrawing();
    e.preventDefault();
  }
  function onCanvasClick(e) {
    if(currentTool === "text") {
      const {x, y} = getCanvasCoordinates(e);
      addTextInput(x, y);
    }
  }

  function initWhiteboard() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    wbCanvas.addEventListener("mousedown", onPointerDown);
    wbCanvas.addEventListener("mousemove", onPointerMove);
    wbCanvas.addEventListener("mouseup", onPointerUp);
    wbCanvas.addEventListener("mouseout", onPointerUp);
    wbCanvas.addEventListener("touchstart", onPointerDown, {passive:false});
    wbCanvas.addEventListener("touchmove", onPointerMove, {passive:false});
    wbCanvas.addEventListener("touchend", onPointerUp);
    wbCanvas.addEventListener("click", onCanvasClick);
    updateUndoRedoBtns();
  }

  function switchTool(tool) {
    currentTool = tool;
    wbPenBtn.setAttribute("aria-pressed", tool === "pen");
    wbEraserBtn.setAttribute("aria-pressed", tool === "eraser");
    wbTextBtn.setAttribute("aria-pressed", tool === "text");
    if (tool === "eraser") {
      wbCanvas.style.cursor = "crosshair";
    } else if (tool === "pen") {
      wbCanvas.style.cursor = "crosshair";
    } else if (tool === "text") {
      wbCanvas.style.cursor = "text";
    }
  }

  function showQuestion() {
    let qList = quizData[currentLevel];
    let qObj = qList[currentIndex];
    questionNumber.textContent = `Level: ${currentLevel.toUpperCase()} - Frage ${currentIndex + 1} von ${qList.length}`;
    questionText.textContent = qObj.q;
    answerInput.value = "";
    answerInput.focus();
    feedback.textContent = "";
    checkBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
  }

  // Normalize answers: remove spaces + lowercase + replace some chars for easier matching
  function normalize(str) {
    if (!str) return "";
    return str.toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[\u00B1±]/g, "+-")    // ± to +-
      .replace(/[√]/g, "sqrt")        // √ to sqrt
      .replace(/[²]/g, "^2")          // squared char to ^2
      .replace(/[³]/g, "^3")          // cubed char to ^3
      .replace(/[÷]/g, "/")           // division symbol
      .replace(/,/g, ".")             // comma to dot (for decimal)
      .replace(/\(|\)/g, "");         // remove parentheses for leniency
  }

  function checkAnswer() {
    const qObj = quizData[currentLevel][currentIndex];
    const userAnswerRaw = answerInput.value.trim();
    if(userAnswerRaw === "") {
      feedback.style.color = "#ffa500";
      feedback.textContent = "Bitte gib eine Antwort ein.";
      answerInput.focus();
      return false;
    }
    const userAnswer = normalize(userAnswerRaw);
    const correctAnswer = normalize(qObj.a);

    // Accept multiple answers separated by comma (for Algebra3 solutions)
    if(correctAnswer.includes(",")) {
      const correctParts = correctAnswer.split(",").map(s => s.trim()).sort();
      const userParts = userAnswer.split(",").map(s => s.trim()).sort();
      if(correctParts.length !== userParts.length) {
        feedback.style.color = "#f44336";
        feedback.textContent = "Leider falsch. Erklärung: " + qObj.explanation;
        return false;
      }
      for(let i=0; i<correctParts.length; i++) {
        if(correctParts[i] !== userParts[i]) {
          feedback.style.color = "#f44336";
          feedback.textContent = "Leider falsch. Erklärung: " + qObj.explanation;
          return false;
        }
      }
      feedback.style.color = "#4caf50";
      feedback.textContent = "Richtig! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    }

    // If answer is "undefined", accept also "unbekannt" (German)
    if(correctAnswer === "undefined" && (userAnswer === "undefined" || userAnswer === "unbekannt")) {
      feedback.style.color = "#4caf50";
      feedback.textContent = "Richtig! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    }

    // Normal exact match
    if(userAnswer === correctAnswer) {
      feedback.style.color = "#4caf50";
      feedback.textContent = "Richtig! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    } else {
      feedback.style.color = "#f44336";
      feedback.textContent = "Leider falsch. Erklärung: " + qObj.explanation;
      return false;
    }
  }

  function nextQuestion() {
    const qList = quizData[currentLevel];
    currentIndex++;
    if(currentIndex >= qList.length) {
      if(currentLevel === "algebra1") {
        currentLevel = "algebra2";
      } else if(currentLevel === "algebra2") {
        currentLevel = "algebra3";
      } else {
        alert("Glückwunsch! Du hast alle Fragen in Algebra 1, 2 und 3 abgeschlossen!");
        restartBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
        checkBtn.style.display = "none";
        return;
      }
      currentIndex = 0;
      alert(`Du hast Level ${currentLevel === 'algebra2' ? 'Algebra 1' : 'Algebra 2'} abgeschlossen!\nWeiter zu ${currentLevel === 'algebra2' ? 'Algebra 2' : 'Algebra 3'}!`);
    }
    showQuestion();
  }

  function restartQuiz() {
    currentLevel = "algebra1";
    currentIndex = 0;
    startScreen.style.display = "none";
    questionScreen.style.display = "flex";
    showQuestion();
    checkBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
  }

  startBtn.addEventListener("click", () => {
    quizStarted = true;
    startScreen.style.display = "none";
    questionScreen.style.display = "flex";
    showQuestion();
  });
  checkBtn.addEventListener("click", () => {
    checkAnswer();
  });
  nextBtn.addEventListener("click", () => {
    nextQuestion();
  });
  restartBtn.addEventListener("click", () => {
    restartQuiz();
  });

  wbPenBtn.addEventListener("click", () => switchTool("pen"));
  wbEraserBtn.addEventListener("click", () => switchTool("eraser"));
  wbTextBtn.addEventListener("click", () => switchTool("text"));
  colorPicker.addEventListener("input", e => penColor = e.target.value);
  wbUndoBtn.addEventListener("click", undo);
  wbRedoBtn.addEventListener("click", redo);
  wbClearBtn.addEventListener("click", () => {
    wbCtx.clearRect(0, 0, wbCanvas.width, wbCanvas.height);
    saveState();
  });
  wbInfoBtn.addEventListener("click", () => {
    alert("Whiteboard Erklärung:\n\n- Benutze Stift zum Zeichnen.\n- Radierer zum Löschen.\n- Text Werkzeug für Formeln oder Notizen.\n- Wähle verschiedene Farben.\n- Mit Rückgängig/Wiederherstellen kannst du Änderungen steuern.\n\nNutze das Whiteboard besonders in Algebra 3 zum Aufschreiben komplexer Formeln oder Skizzen.");
  });

  // Initialize
  function initialize() {
    initWhiteboard();
  }
  initialize();
})();