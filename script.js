/**
 * Chooch — Vision in Motion | Interactive Controller
 */

// Questions & chapters metadata
const filmData = {
  duration: 149,
  questions: [
    {
      code: "01A",
      label: "How it works",
      question: "What if your shelves could tell you what they need?",
      title: "From shelf to signal.",
      beats: [
        {
          title: "See what is actually there",
          text: "Existing shelves. Approximate counts. No barcode scans or RFID tags.",
          narration: "Chooch AI turns shelf images into approximate inventory counts—using the shelves you already have, without barcode scans or RFID tags.",
          visual: "shelf"
        },
        {
          title: "Turn visibility into action",
          text: "Low-stock signals support replenishment, informed by real consumption.",
          narration: "When stock runs low, replenishment signals follow. Real-time visibility replaces yesterday’s guesswork.",
          visual: "shelf"
        }
      ],
      takeaway: "Observe. Understand. Replenish.",
      start: 4.83,
      end: 25.624,
      beatStarts: [7.5, 18.344],
      beatEnds: [18.344, 25.624],
      full: "Chooch AI turns shelf images into approximate inventory counts—using the shelves you already have, without barcode scans or RFID tags.\n\nWhen stock runs low, replenishment signals follow. Real-time visibility replaces yesterday’s guesswork."
    },
    {
      code: "01B",
      label: "Made for healthcare",
      question: "Can visibility scale without compromising privacy?",
      title: "Confidence, built in.",
      beats: [
        {
          title: "Privacy comes first",
          text: "No patient data captured. Identifying features are blurred on-device. HIPAA compliant; ISO and SOC 2 certified.",
          narration: "No patient data is captured; identifying features are blurred on-device. Chooch is HIPAA compliant, ISO and SOC 2 certified.",
          visual: "privacy"
        },
        {
          title: "Built for health-system scale",
          text: "Gartner · May 2026: a reported rollout across 1,700 inventory rooms in 41 hospitals.",
          narration: "Gartner’s May 2026 report describes a rollout across seventeen hundred inventory rooms in forty-one hospitals.",
          visual: "scale"
        }
      ],
      takeaway: "Supplies in view. Privacy built in.",
      start: 25.624,
      end: 47.925,
      beatStarts: [29.414, 38.894],
      beatEnds: [38.894, 47.925],
      full: "No patient data is captured; identifying features are blurred on-device. Chooch is HIPAA compliant, ISO and SOC 2 certified.\n\nGartner’s May 2026 report describes a rollout across seventeen hundred inventory rooms in forty-one hospitals."
    },
    {
      code: "02",
      label: "Service transformation",
      question: "What if service meant availability—not just delivery?",
      title: "Put the point of care first.",
      beats: [
        {
          title: "Plan around actual use",
          text: "Consumption signals help consolidate orders and reduce emergency deliveries.",
          narration: "Picture demand based on actual use. Distributors can consolidate orders and plan fewer emergency deliveries.",
          visual: "service"
        },
        {
          title: "Scale the service, not the counting",
          text: "Managed inventory can extend to hundreds of rooms without expanding manual counting teams.",
          narration: "Managed inventory can then reach hundreds of rooms without expanding manual counting teams.",
          visual: "network"
        }
      ],
      takeaway: "Better signals. Better service.",
      start: 47.925,
      end: 66.024,
      beatStarts: [51.645, 59.704],
      beatEnds: [59.704, 66.024],
      full: "Picture demand based on actual use. Distributors can consolidate orders and plan fewer emergency deliveries.\n\nManaged inventory can then reach hundreds of rooms without expanding manual counting teams."
    },
    {
      code: "03",
      label: "Provider efficiencies",
      question: "What could your teams do with time back?",
      title: "Less friction. More value.",
      beats: [
        {
          title: "Give time and capital back",
          text: "Reported: up to 50% higher staff productivity and up to 40–50% less inventory.",
          narration: "Reported deployments show up to fifty percent higher supply-chain productivity and up to forty-to-fifty percent less inventory.",
          visual: "metrics"
        },
        {
          title: "Reduce the cost of disruption",
          text: "Reported: up to 95% fewer critical stockouts and around 15% less expiration waste. Results vary.",
          narration: "Critical stockouts fall by up to ninety-five percent; expiration waste by around fifteen percent. Results vary by facility.",
          visual: "metrics"
        }
      ],
      takeaway: "Time, capital and clinical space—used better.",
      start: 66.024,
      end: 85.514,
      beatStarts: [68.314, 76.794],
      beatEnds: [76.794, 85.514],
      full: "Reported deployments show up to fifty percent higher supply-chain productivity and up to forty-to-fifty percent less inventory.\n\nCritical stockouts fall by up to ninety-five percent; expiration waste by around fifteen percent. Results vary by facility."
    },
    {
      code: "04",
      label: "Supply resilience",
      question: "Why wait for an empty shelf to sound the alarm?",
      title: "See the signal sooner.",
      beats: [
        {
          title: "Act on trends, not empty shelves",
          text: "Live consumption trends warn of shortages before shelves empty—even overnight.",
          narration: "Resilience starts with knowing what you have. Live consumption trends warn of shortages before shelves empty—even overnight.",
          visual: "resilience"
        },
        {
          title: "Make the response traceable",
          text: "Redistribute supplies, source alternatives, and locate recalled products with a recorded audit trail.",
          narration: "Teams can redistribute supplies, source alternatives and locate recalled products with a recorded audit trail.",
          visual: "recall"
        }
      ],
      takeaway: "Know what you have. Prepare for what comes next.",
      start: 85.514,
      end: 104.424,
      beatStarts: [88.554, 96.884],
      beatEnds: [96.884, 104.424],
      full: "Resilience starts with knowing what you have. Live consumption trends warn of shortages before shelves empty—even overnight.\n\nTeams can redistribute supplies, source alternatives and locate recalled products with a recorded audit trail."
    },
    {
      code: "05",
      label: "Shared planning",
      question: "What changes when both sides see the same reality?",
      title: "A better conversation.",
      beats: [
        {
          title: "Plan together, before the pressure",
          text: "Anticipate seasonal demand, agree on substitutes, and measure availability at the point of care.",
          narration: "Now the conversation changes: anticipate seasonal demand, agree on substitutes, and measure success by availability at the point of care.",
          visual: "partner"
        },
        {
          title: "Build trust on shared facts",
          text: "A stronger basis for pricing and contract discussions.",
          narration: "Shared facts build trust—and a stronger basis for pricing and contract discussions.",
          visual: "partner"
        }
      ],
      takeaway: "One shared view. A stronger partnership.",
      start: 104.424,
      end: 123.114,
      beatStarts: [107.944, 117.664],
      beatEnds: [117.664, 123.114],
      full: "Now the conversation changes: anticipate seasonal demand, agree on substitutes, and measure success by availability at the point of care.\n\nShared facts build trust—and a stronger basis for pricing and contract discussions."
    },
    {
      code: "06",
      label: "What stays in place",
      question: "If inventory gets smarter, what stays in your hands?",
      title: "People. Care. Control.",
      beats: [
        {
          title: "Your systems. Your decisions.",
          text: "Clinical routines, care decisions, ERP, purchasing contracts and approvals stay yours.",
          narration: "Your clinical routines, care decisions, ERP, purchasing contracts and approvals stay yours. Chooch feeds existing systems.",
          visual: "people"
        },
        {
          title: "Put expertise where it matters",
          text: "Less repetitive counting; more attention to exceptions, planning and people.",
          narration: "Supply-chain expertise shifts toward exceptions and planning. Less repetitive counting. More time for people.",
          visual: "care"
        }
      ],
      takeaway: "The same care mission. A more reliable foundation.",
      start: 123.114,
      end: 143.391,
      beatStarts: [126.692, 135.861],
      beatEnds: [135.861, 143.391],
      full: "Your clinical routines, care decisions, ERP, purchasing contracts and approvals stay yours. Chooch feeds existing systems.\n\nSupply-chain expertise shifts toward exceptions and planning. Less repetitive counting. More time for people."
    }
  ]
};

// DOM Elements
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const video = $('#film');
const bigPlayBtn = $('#big-play');
const playBtn = $('#play');
const restartBtn = $('#restart');
const timeDisplay = $('#time');
const modeBadge = $('#mode');
const voiceToggleBtn = $('#voice');
const speedSelect = $('#speed');
const ccToggleBtn = $('#cc');
const fullscreenBtn = $('#fullscreen');
const seekSlider = $('#seek');

const exploreLabel = $('#explore-label');
const stepButtonsContainer = $('#step-buttons');
const prevAnswerBtn = $('#previous-answer');
const nextAnswerBtn = $('#next-answer');
const voiceSettingsToggle = $('#voice-settings-toggle');
const voiceSettingsPanel = $('#voice-settings');
const volumeSlider = $('#volume');

const questionsGrid = $('#question-grid');
const answerDetail = $('#answer-detail');
const detailCode = $('#detail-code');
const detailTitle = $('#detail-title');
const detailRhetoric = $('#detail-rhetoric');
const answerPointsContainer = $('#answer-points');
const originalAnswer = $('#original-answer');
const closeDetailBtn = $('#close-detail');

const finishedOverlay = $('#finished');
const finishTitle = $('#finish-title');
const replayBtn = $('#replay');
const continueBtn = $('#continue');
const watchFullFilmBtn = $('#full-film');
const homeLink = $('#home');

const shareLinkedInBtn = $('#share-linkedin');
const copyPageLinkBtn = $('#copy-page-link');
const shareStatus = $('#share-status');
const screenReaderStatus = $('#status');

// State variables
let activeQuestionIndex = -1;
let isSeeking = false;
let lastActiveIdx = -2;

// Utility functions
const escapeHtml = (str) =>
  str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

function announceStatus(message) {
  if (screenReaderStatus) screenReaderStatus.textContent = message;
}

function getActiveQuestionByTime(time) {
  return filmData.questions.findIndex((q) => time >= q.start && time < q.end);
}

function hideOverlays() {
  if (bigPlayBtn) bigPlayBtn.hidden = true;
  if (finishedOverlay) finishedOverlay.hidden = true;
}

// Playback logic
async function playFilm() {
  hideOverlays();
  try {
    await video.play();
  } catch (err) {
    if (bigPlayBtn) bigPlayBtn.hidden = false;
    announceStatus('Press play to start the film.');
  }
}

function playFullFilm() {
  activeQuestionIndex = -1;
  video.currentTime = 0;
  modeBadge.textContent = 'FULL FILM';
  playFilm();
}

function syncVoiceState() {
  const hasVoice = !video.muted && video.volume > 0;
  voiceToggleBtn.setAttribute('aria-pressed', hasVoice);
  voiceToggleBtn.setAttribute('aria-label', hasVoice ? 'Disable voice narration' : 'Enable voice narration');
  voiceToggleBtn.textContent = hasVoice ? '◖ Voice on' : '◖ Voice off';
  voiceToggleBtn.classList.toggle('speaking', hasVoice && !video.paused);
}

function toggleVoice() {
  video.muted = !video.muted;
  if (!video.muted && video.volume === 0) {
    video.volume = 0.8;
    volumeSlider.value = 80;
  }
  syncVoiceState();
  announceStatus(video.muted ? 'Voice narration disabled.' : 'Voice narration enabled.');
}

// Explore bar and answer detail panels
function renderQuestionGrid() {
  questionsGrid.innerHTML = filmData.questions
    .map(
      (q, idx) => `
      <button class="question-card" data-idx="${idx}" aria-label="Watch answer: ${escapeHtml(q.question)}">
        <span class="q-category-tag">${escapeHtml(q.label)}</span>
        <div class="q-title-text">${escapeHtml(q.question)}</div>
        <span class="q-corner-arrow" aria-hidden="true">↗</span>
      </button>
    `
    )
    .join('');
}

function updateExploreBar(idx) {
  if (idx < 0) {
    exploreLabel.textContent = 'Explore an answer';
    stepButtonsContainer.innerHTML = '';
    prevAnswerBtn.disabled = true;
    nextAnswerBtn.disabled = false;
    return;
  }

  const q = filmData.questions[idx];
  exploreLabel.textContent = 'Jump to a moment';
  stepButtonsContainer.innerHTML = q.beats
    .map(
      (beat, bIdx) => `
      <button class="step-chip" data-question="${idx}" data-beat="${bIdx}">
        ${escapeHtml(beat.title)}
      </button>
    `
    )
    .join('');

  prevAnswerBtn.disabled = idx === 0;
  nextAnswerBtn.disabled = idx === filmData.questions.length - 1;
}

function showAnswerDetails(idx) {
  const q = filmData.questions[idx];
  detailCode.textContent = q.label.toUpperCase();
  detailTitle.textContent = q.question;
  detailRhetoric.textContent = q.title;

  answerPointsContainer.innerHTML = q.beats
    .map(
      (beat, bIdx) => `
      <div class="beat-card" data-question="${idx}" data-beat="${bIdx}" role="button" tabindex="0">
        <div>
          <div class="beat-title">${escapeHtml(beat.title)}</div>
          <div class="beat-desc">${escapeHtml(beat.text)}</div>
        </div>
        <span class="beat-cta">WATCH THIS MOMENT ↗</span>
      </div>
    `
    )
    .join('');

  originalAnswer.innerHTML = q.full
    .split('\n\n')
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');

  answerDetail.hidden = false;
}

function selectQuestion(idx, beatIdx = -1, shouldScroll = true) {
  if (idx < 0 || idx >= filmData.questions.length) return;
  activeQuestionIndex = idx;
  const q = filmData.questions[idx];

  video.currentTime = beatIdx < 0 ? q.start : q.beatStarts[beatIdx] + 0.02;
  modeBadge.textContent = q.label.toUpperCase();

  showAnswerDetails(idx);
  updateExploreBar(idx);
  playFilm();

  announceStatus(`Playing: ${q.question}`);

  if (shouldScroll) {
    $('.cinema-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handleFilmEnd(isSingleChapter = false) {
  video.pause();
  if (isSingleChapter && activeQuestionIndex >= 0) {
    video.currentTime = Math.max(
      filmData.questions[activeQuestionIndex].start,
      filmData.questions[activeQuestionIndex].end - 0.05
    );
  }
  if (finishedOverlay) {
    finishedOverlay.hidden = false;
  }
  if (finishTitle) {
    finishTitle.textContent = isSingleChapter
      ? 'A clearer answer. Another question?'
      : 'The right supplies. The right place. The right time.';
  }
  if (continueBtn) {
    continueBtn.hidden = !isSingleChapter;
  }
  if (replayBtn) {
    replayBtn.textContent = isSingleChapter ? 'Replay answer ↺' : 'Replay film ↺';
  }
}

function updateProgress() {
  const currentTime = video.currentTime;
  timeDisplay.innerHTML = `${formatTime(currentTime)} <span class="time-total">/ ${formatTime(filmData.duration)}</span>`;

  if (!isSeeking) {
    seekSlider.value = currentTime;
  }

  const currentQIndex = getActiveQuestionByTime(currentTime);

  if (currentQIndex !== lastActiveIdx) {
    lastActiveIdx = currentQIndex;

    // Highlight question card
    $$('.question-card').forEach((card, i) => {
      const isActive = i === currentQIndex;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    updateExploreBar(currentQIndex);
  }

  // Highlight active beat
  if (currentQIndex >= 0) {
    const q = filmData.questions[currentQIndex];
    const beatIndex = q.beatStarts.findIndex(
      (start, i) => currentTime >= start && currentTime < q.beatEnds[i]
    );

    $$('[data-beat]').forEach((el) => {
      const match =
        +el.dataset.question === currentQIndex && +el.dataset.beat === beatIndex;
      el.classList.toggle('active', match);
    });
  }

  // Stop if single chapter mode finished
  if (
    activeQuestionIndex >= 0 &&
    currentTime >= filmData.questions[activeQuestionIndex].end - 0.05 &&
    !video.paused
  ) {
    handleFilmEnd(true);
  }
}

// Event Listeners setup
function initEvents() {
  renderQuestionGrid();

  seekSlider.max = filmData.duration;
  timeDisplay.innerHTML = `00:00 <span class="time-total">/ ${formatTime(filmData.duration)}</span>`;

  // Big Play
  bigPlayBtn.addEventListener('click', () => playFilm());

  // Controls toolbar
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      if (!finishedOverlay || finishedOverlay.hidden) {
        playFilm();
      } else if (activeQuestionIndex >= 0) {
        selectQuestion(activeQuestionIndex, -1, false);
      } else {
        playFullFilm();
      }
    } else {
      video.pause();
    }
  });

  restartBtn.addEventListener('click', playFullFilm);
  watchFullFilmBtn.addEventListener('click', () => {
    playFullFilm();
    $('.cinema-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    video.pause();
    activeQuestionIndex = -1;
    video.currentTime = 0;
    modeBadge.textContent = 'FULL FILM';
    if (finishedOverlay) finishedOverlay.hidden = true;
    bigPlayBtn.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Voice & volume
  voiceToggleBtn.addEventListener('click', toggleVoice);
  volumeSlider.addEventListener('input', (e) => {
    video.volume = +e.target.value / 100;
    video.muted = video.volume === 0;
    syncVoiceState();
  });

  voiceSettingsToggle.addEventListener('click', () => {
    const isHidden = !voiceSettingsPanel.hidden;
    voiceSettingsPanel.hidden = isHidden;
    voiceSettingsToggle.setAttribute('aria-expanded', String(!isHidden));
  });

  // Playback rate
  speedSelect.addEventListener('change', (e) => {
    video.playbackRate = +e.target.value;
  });

  // Seek slider
  seekSlider.addEventListener('input', (e) => {
    isSeeking = true;
    activeQuestionIndex = -1;
    modeBadge.textContent = 'FULL FILM';
    video.currentTime = +e.target.value;
    hideOverlays();
  });

  seekSlider.addEventListener('change', () => {
    isSeeking = false;
  });

  // CC Captions
  ccToggleBtn.addEventListener('click', () => {
    const isPressed = ccToggleBtn.getAttribute('aria-pressed') === 'true';
    const newState = !isPressed;
    ccToggleBtn.setAttribute('aria-pressed', String(newState));

    if (video.textTracks && video.textTracks.length > 0) {
      video.textTracks[0].mode = newState ? 'showing' : 'hidden';
    }
  });

  // Fullscreen
  fullscreenBtn.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await $('.cinema-card').requestFullscreen();
      }
    } catch {
      video.setAttribute('controls', '');
    }
  });

  // Previous & Next navigation
  prevAnswerBtn.addEventListener('click', () => {
    const curr = getActiveQuestionByTime(video.currentTime);
    selectQuestion(Math.max(0, curr - 1));
  });

  nextAnswerBtn.addEventListener('click', () => {
    const curr = getActiveQuestionByTime(video.currentTime);
    selectQuestion(Math.min(filmData.questions.length - 1, curr + 1));
  });

  // Question selection clicks
  questionsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-idx]');
    if (card) {
      selectQuestion(+card.dataset.idx);
    }
  });

  // Step buttons and beat cards
  const handleBeatSelection = (e) => {
    const target = e.target.closest('[data-beat]');
    if (target) {
      selectQuestion(+target.dataset.question, +target.dataset.beat);
    }
  };

  stepButtonsContainer.addEventListener('click', handleBeatSelection);
  answerPointsContainer.addEventListener('click', handleBeatSelection);
  answerPointsContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBeatSelection(e);
    }
  });

  // Overlays (if present)
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (activeQuestionIndex >= 0) {
        selectQuestion(activeQuestionIndex, -1, false);
      } else {
        playFullFilm();
      }
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      activeQuestionIndex = -1;
      modeBadge.textContent = 'FULL FILM';
      playFilm();
    });
  }

  closeDetailBtn.addEventListener('click', () => {
    answerDetail.hidden = true;
  });

  // Video element events
  video.addEventListener('play', () => {
    playBtn.textContent = '❚❚';
    playBtn.setAttribute('aria-label', 'Pause film');
    syncVoiceState();
  });

  video.addEventListener('pause', () => {
    playBtn.textContent = '▶';
    playBtn.setAttribute('aria-label', 'Play film');
    syncVoiceState();
  });

  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('seeked', updateProgress);
  video.addEventListener('ended', () => handleFilmEnd(false));
  video.addEventListener('volumechange', syncVoiceState);

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'SELECT', 'BUTTON', 'SUMMARY', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }
    if (e.code === 'Space') {
      e.preventDefault();
      video.paused ? playFilm() : video.pause();
    } else if (e.code === 'ArrowRight') {
      video.currentTime = Math.min(filmData.duration, video.currentTime + 5);
      hideOverlays();
    } else if (e.code === 'ArrowLeft') {
      video.currentTime = Math.max(0, video.currentTime - 5);
      hideOverlays();
    }
  });

  // Share features
  const currentUrl = window.location.href.split('#')[0].split('?')[0];
  shareLinkedInBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  copyPageLinkBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      shareStatus.textContent = 'Page link copied to clipboard!';
      setTimeout(() => {
        shareStatus.textContent = '';
      }, 4000);
    } catch {
      shareStatus.textContent = currentUrl;
    }
  });

  // Initialize explore bar in default state
  updateExploreBar(-1);

  // Initialize subtle professional scroll effects
  initScrollReveal();
  initSubtleParallax();
}

/**
 * Subtle Parallax for the ambient backdrop
 * Moves very gently on scroll (factor 0.04-0.05) to add depth without distraction
 */
function initSubtleParallax() {
  const glow1 = document.querySelector('.ambient-glow-1');
  const glow2 = document.querySelector('.ambient-glow-2');
  if (!glow1 && !glow2) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (glow1) glow1.style.transform = `translate3d(0, ${scrolled * -0.05}px, 0)`;
        if (glow2) glow2.style.transform = `translate3d(0, ${scrolled * 0.04}px, 0)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Subtle Scroll-Reveal for Question Cards
 * Staggers in cleanly once when the grid enters view
 */
function initScrollReveal() {
  const grid = document.querySelector('#question-grid');
  if (!grid) return;

  // If user prefers reduced motion, reveal immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    grid.querySelectorAll('.question-card').forEach((card) => card.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.question-card');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('revealed');
            }, i * 45); // 45ms subtle stagger
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  observer.observe(grid);
}

// Start application
document.addEventListener('DOMContentLoaded', initEvents);
