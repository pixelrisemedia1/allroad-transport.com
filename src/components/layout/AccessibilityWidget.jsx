import { useState } from "react";
import { Eye, X, ZoomIn, ZoomOut, RotateCcw, Type, Sun, Moon, MousePointer, AlignLeft, AlignCenter, Bold, Underline, Pause, Volume2, Link, Image, Minus, Maximize2, Layout, EyeOff, Focus, Zap, BookOpen, Languages, Keyboard, Filter, Move, ArrowUpDown, Columns, ScanLine } from "lucide-react";

function Toggle({ label, Icon, active, toggle }) {
  return (
    <button
      onClick={toggle}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
        active ? "bg-cyan text-white" : "bg-white/5 hover:bg-white/10 text-white"
      }`}
    >
      <span className="flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 shrink-0" />
        {label}
      </span>
      <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${active ? "bg-white/20" : "bg-white/10"}`}>
        {active ? "ON" : "OFF"}
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [letterSpacing, setLetterSpacing] = useState(0);

  // Display
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [focusHighlight, setFocusHighlight] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [readingMask, setReadingMask] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightButtons, setHighlightButtons] = useState(false);

  // Text
  const [lineHeight, setLineHeight] = useState(false);
  const [boldText, setBoldText] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [textAlign, setTextAlign] = useState(false);
  const [fontReadable, setFontReadable] = useState(false);
  const [wordSpacing, setWordSpacing] = useState(false);
  const [capitalizeText, setCapitalizeText] = useState(false);

  // Behavior
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [muteMedia, setMuteMedia] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [readingGuide, setReadingGuide] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [screenMask, setScreenMask] = useState(false);
  const [columnLayout, setColumnLayout] = useState(false);
  const [leftAlign, setLeftAlign] = useState(false);

  const applyFilter = (filters) => {
    const parts = [];
    if (highContrast) parts.push("contrast(2)");
    if (invertColors) parts.push("invert(1)");
    if (grayscale) parts.push("grayscale(1)");
    if (saturation) parts.push("saturate(2)");
    document.documentElement.style.filter = filters ? parts.join(" ") : parts.join(" ");
  };

  const toggle = (getter, setter, fn) => {
    const next = !getter;
    setter(next);
    fn && fn(next);
    setTimeout(applyFilter, 0);
  };

  const toggleHighContrast = () => toggle(highContrast, setHighContrast, (v) => document.documentElement.classList.toggle("high-contrast", v));
  const toggleDark = () => toggle(darkMode, setDarkMode, (v) => document.documentElement.classList.toggle("dark", v));
  const toggleInvert = () => toggle(invertColors, setInvertColors, () => setTimeout(applyFilter, 0));
  const toggleGrayscale = () => toggle(grayscale, setGrayscale, () => setTimeout(applyFilter, 0));
  const toggleSaturation = () => toggle(saturation, setSaturation, () => setTimeout(applyFilter, 0));
  const toggleReduceMotion = () => toggle(reduceMotion, setReduceMotion, (v) => {
    document.documentElement.style.setProperty("--motion-duration", v ? "0.001ms" : "");
    const style = document.getElementById("reduce-motion-style") || Object.assign(document.createElement("style"), { id: "reduce-motion-style" });
    style.textContent = v ? "*, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }" : "";
    if (!document.getElementById("reduce-motion-style")) document.head.appendChild(style);
  });
  const toggleFocusHighlight = () => toggle(focusHighlight, setFocusHighlight, (v) => {
    const el = document.getElementById("focus-style") || Object.assign(document.createElement("style"), { id: "focus-style" });
    el.textContent = v ? "*:focus { outline: 3px solid #00b4d8 !important; outline-offset: 3px !important; }" : "";
    if (!document.getElementById("focus-style")) document.head.appendChild(el);
  });
  const toggleHideImages = () => toggle(hideImages, setHideImages, (v) => {
    const el = document.getElementById("hide-img-style") || Object.assign(document.createElement("style"), { id: "hide-img-style" });
    el.textContent = v ? "img { opacity: 0 !important; }" : "";
    if (!document.getElementById("hide-img-style")) document.head.appendChild(el);
  });
  const toggleBigCursor = () => toggle(bigCursor, setBigCursor, (v) => {
    document.body.style.cursor = v ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M5 3l25 15-11 2-5 11z' fill='%23000' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E\") 4 4, auto" : "";
  });
  const toggleHighlightLinks = () => toggle(highlightLinks, setHighlightLinks, (v) => {
    const el = document.getElementById("link-style") || Object.assign(document.createElement("style"), { id: "link-style" });
    el.textContent = v ? "a { background: #fef08a !important; color: #1e3a5f !important; padding: 0 2px; border-radius: 2px; }" : "";
    if (!document.getElementById("link-style")) document.head.appendChild(el);
  });
  const toggleHighlightButtons = () => toggle(highlightButtons, setHighlightButtons, (v) => {
    const el = document.getElementById("btn-style") || Object.assign(document.createElement("style"), { id: "btn-style" });
    el.textContent = v ? "button { outline: 2px solid #00b4d8 !important; }" : "";
    if (!document.getElementById("btn-style")) document.head.appendChild(el);
  });
  const toggleLineHeight = () => toggle(lineHeight, setLineHeight, (v) => { document.body.style.lineHeight = v ? "2.2" : ""; });
  const toggleBold = () => toggle(boldText, setBoldText, (v) => {
    const el = document.getElementById("bold-style") || Object.assign(document.createElement("style"), { id: "bold-style" });
    el.textContent = v ? "body, body * { font-weight: bold !important; }" : "";
    if (!document.getElementById("bold-style")) document.head.appendChild(el);
  });
  const toggleUnderlineLinks = () => toggle(underlineLinks, setUnderlineLinks, (v) => {
    const el = document.getElementById("underline-style") || Object.assign(document.createElement("style"), { id: "underline-style" });
    el.textContent = v ? "a { text-decoration: underline !important; text-decoration-thickness: 2px !important; }" : "";
    if (!document.getElementById("underline-style")) document.head.appendChild(el);
  });
  const toggleTextAlign = () => toggle(textAlign, setTextAlign, (v) => { document.body.style.textAlign = v ? "left" : ""; });
  const toggleFontReadable = () => toggle(fontReadable, setFontReadable, (v) => {
    const el = document.getElementById("font-style") || Object.assign(document.createElement("style"), { id: "font-style" });
    el.textContent = v ? "body, body * { font-family: Arial, Helvetica, sans-serif !important; }" : "";
    if (!document.getElementById("font-style")) document.head.appendChild(el);
  });
  const toggleWordSpacing = () => toggle(wordSpacing, setWordSpacing, (v) => {
    const el = document.getElementById("word-style") || Object.assign(document.createElement("style"), { id: "word-style" });
    el.textContent = v ? "body, body * { word-spacing: 0.25em !important; }" : "";
    if (!document.getElementById("word-style")) document.head.appendChild(el);
  });
  const toggleCapitalize = () => toggle(capitalizeText, setCapitalizeText, (v) => {
    const el = document.getElementById("caps-style") || Object.assign(document.createElement("style"), { id: "caps-style" });
    el.textContent = v ? "body, body * { text-transform: uppercase !important; font-size: 0.85em !important; }" : "";
    if (!document.getElementById("caps-style")) document.head.appendChild(el);
  });
  const togglePauseAnimations = () => toggle(pauseAnimations, setPauseAnimations, (v) => {
    const el = document.getElementById("pause-style") || Object.assign(document.createElement("style"), { id: "pause-style" });
    el.textContent = v ? "*, *::before, *::after { animation-play-state: paused !important; }" : "";
    if (!document.getElementById("pause-style")) document.head.appendChild(el);
  });
  const toggleMute = () => toggle(muteMedia, setMuteMedia, (v) => {
    document.querySelectorAll("video, audio").forEach((el) => { el.muted = v; });
  });
  const toggleKeyboard = () => toggle(keyboardNav, setKeyboardNav, (v) => {
    const el = document.getElementById("kbd-style") || Object.assign(document.createElement("style"), { id: "kbd-style" });
    el.textContent = v ? "*:focus-visible { outline: 4px solid #00b4d8 !important; outline-offset: 4px !important; box-shadow: 0 0 0 8px rgba(0,180,216,0.2) !important; }" : "";
    if (!document.getElementById("kbd-style")) document.head.appendChild(el);
  });
  const toggleDyslexia = () => toggle(dyslexiaFont, setDyslexiaFont, (v) => {
    const el = document.getElementById("dyslexia-style") || Object.assign(document.createElement("style"), { id: "dyslexia-style" });
    el.textContent = v ? "body, body * { font-family: 'Comic Sans MS', 'Comic Sans', cursive !important; letter-spacing: 0.05em !important; word-spacing: 0.2em !important; }" : "";
    if (!document.getElementById("dyslexia-style")) document.head.appendChild(el);
  });
  const toggleScreenMask = () => toggle(screenMask, setScreenMask, (v) => {
    const el = document.getElementById("mask-style") || Object.assign(document.createElement("style"), { id: "mask-style" });
    el.textContent = v ? "body::after { content: ''; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); pointer-events: none; z-index: 9998; mix-blend-mode: multiply; }" : "";
    if (!document.getElementById("mask-style")) document.head.appendChild(el);
  });
  const toggleColumnLayout = () => toggle(columnLayout, setColumnLayout, (v) => {
    const el = document.getElementById("col-style") || Object.assign(document.createElement("style"), { id: "col-style" });
    el.textContent = v ? "p { column-count: 2 !important; column-gap: 2em !important; }" : "";
    if (!document.getElementById("col-style")) document.head.appendChild(el);
  });
  const toggleLeftAlign = () => toggle(leftAlign, setLeftAlign, (v) => {
    const el = document.getElementById("align-style") || Object.assign(document.createElement("style"), { id: "align-style" });
    el.textContent = v ? "p, li, td, div { text-align: left !important; }" : "";
    if (!document.getElementById("align-style")) document.head.appendChild(el);
  });
  const toggleReadingGuide = () => toggle(readingGuide, setReadingGuide, (v) => {
    const el = document.getElementById("guide-style") || Object.assign(document.createElement("style"), { id: "guide-style" });
    el.textContent = v ? "body::before { content: ''; position: fixed; top: 45%; left: 0; right: 0; height: 2.5rem; background: rgba(0,180,216,0.12); border-top: 2px solid rgba(0,180,216,0.5); border-bottom: 2px solid rgba(0,180,216,0.5); pointer-events: none; z-index: 9999; }" : "";
    if (!document.getElementById("guide-style")) document.head.appendChild(el);
  });

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 160);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };
  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 70);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };
  const increaseLetterSpacing = () => {
    const next = Math.min(letterSpacing + 1, 5);
    setLetterSpacing(next);
    document.body.style.letterSpacing = `${next}px`;
  };
  const decreaseLetterSpacing = () => {
    const next = Math.max(letterSpacing - 1, 0);
    setLetterSpacing(next);
    document.body.style.letterSpacing = next > 0 ? `${next}px` : "";
  };

  const reset = () => {
    setFontSize(100); setLetterSpacing(0);
    setHighContrast(false); setDarkMode(false); setInvertColors(false); setGrayscale(false);
    setSaturation(false); setReduceMotion(false); setFocusHighlight(false); setHideImages(false);
    setReadingMask(false); setBigCursor(false); setHighlightLinks(false); setHighlightButtons(false);
    setLineHeight(false); setBoldText(false); setUnderlineLinks(false); setTextAlign(false);
    setFontReadable(false); setWordSpacing(false); setCapitalizeText(false); setPauseAnimations(false);
    setMuteMedia(false); setKeyboardNav(false); setReadingGuide(false); setDyslexiaFont(false);
    setScreenMask(false); setColumnLayout(false); setLeftAlign(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.style.filter = "";
    document.documentElement.classList.remove("high-contrast", "dark");
    document.body.style.cursor = ""; document.body.style.lineHeight = ""; document.body.style.textAlign = ""; document.body.style.letterSpacing = "";
    ["reduce-motion-style","focus-style","hide-img-style","link-style","btn-style","bold-style","underline-style","font-style","word-style","caps-style","pause-style","kbd-style","dyslexia-style","mask-style","col-style","align-style","guide-style"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
  };

  const SECTIONS = [
    {
      title: "Display",
      items: [
        { label: "High Contrast", Icon: Sun, active: highContrast, toggle: toggleHighContrast },
        { label: "Dark Mode", Icon: Moon, active: darkMode, toggle: toggleDark },
        { label: "Invert Colors", Icon: EyeOff, active: invertColors, toggle: toggleInvert },
        { label: "Grayscale", Icon: Filter, active: grayscale, toggle: toggleGrayscale },
        { label: "Boost Saturation", Icon: Zap, active: saturation, toggle: toggleSaturation },
        { label: "Reduce Motion", Icon: Pause, active: reduceMotion, toggle: toggleReduceMotion },
        { label: "Focus Highlight", Icon: Focus, active: focusHighlight, toggle: toggleFocusHighlight },
        { label: "Hide Images", Icon: Image, active: hideImages, toggle: toggleHideImages },
        { label: "Reading Guide Line", Icon: ScanLine, active: readingGuide, toggle: toggleReadingGuide },
        { label: "Screen Dim Mask", Icon: Maximize2, active: screenMask, toggle: toggleScreenMask },
        { label: "Large Cursor", Icon: MousePointer, active: bigCursor, toggle: toggleBigCursor },
        { label: "Highlight Links", Icon: Link, active: highlightLinks, toggle: toggleHighlightLinks },
        { label: "Highlight Buttons", Icon: Focus, active: highlightButtons, toggle: toggleHighlightButtons },
      ],
    },
    {
      title: "Text",
      items: [
        { label: "Increase Line Height", Icon: ArrowUpDown, active: lineHeight, toggle: toggleLineHeight },
        { label: "Bold Text", Icon: Bold, active: boldText, toggle: toggleBold },
        { label: "Underline Links", Icon: Underline, active: underlineLinks, toggle: toggleUnderlineLinks },
        { label: "Left-Align Text", Icon: AlignLeft, active: textAlign, toggle: toggleTextAlign },
        { label: "Force Left Align", Icon: AlignLeft, active: leftAlign, toggle: toggleLeftAlign },
        { label: "Readable Font", Icon: BookOpen, active: fontReadable, toggle: toggleFontReadable },
        { label: "Dyslexia-Friendly Font", Icon: Languages, active: dyslexiaFont, toggle: toggleDyslexia },
        { label: "Increase Word Spacing", Icon: Move, active: wordSpacing, toggle: toggleWordSpacing },
        { label: "Capitalize Text", Icon: Type, active: capitalizeText, toggle: toggleCapitalize },
        { label: "Two-Column Layout", Icon: Columns, active: columnLayout, toggle: toggleColumnLayout },
      ],
    },
    {
      title: "Behavior",
      items: [
        { label: "Pause Animations", Icon: Pause, active: pauseAnimations, toggle: togglePauseAnimations },
        { label: "Mute Media", Icon: Volume2, active: muteMedia, toggle: toggleMute },
        { label: "Enhanced Keyboard Nav", Icon: Keyboard, active: keyboardNav, toggle: toggleKeyboard },
      ],
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 font-inter flex flex-col items-end">
      {open && (
        <div className="mb-2 bg-navy border border-white/10 rounded-xl shadow-2xl w-64 flex flex-col" style={{ maxHeight: "80vh" }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white text-sm font-semibold">Accessibility ({SECTIONS.flatMap(s => s.items).filter(i => i.active).length + (fontSize !== 100 ? 1 : 0)} active)</span>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 p-3 space-y-4">
            {/* Font size */}
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1.5">Text Size ({fontSize}%)</p>
              <div className="flex gap-2">
                <button onClick={decreaseFontSize} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <ZoomOut className="w-3 h-3" /> Smaller
                </button>
                <button onClick={increaseFontSize} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <ZoomIn className="w-3 h-3" /> Larger
                </button>
              </div>
            </div>

            {/* Letter spacing */}
            <div>
              <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1.5">Letter Spacing ({letterSpacing}px)</p>
              <div className="flex gap-2">
                <button onClick={decreaseLetterSpacing} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <Minus className="w-3 h-3" /> Less
                </button>
                <button onClick={increaseLetterSpacing} className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <ZoomIn className="w-3 h-3" /> More
                </button>
              </div>
            </div>

            {SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1.5">{section.title}</p>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Toggle key={item.label} {...item} />
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/70 hover:text-white text-xs transition-colors border border-white/5"
            >
              <RotateCcw className="w-3 h-3" /> Reset All
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full bg-navy border border-white/20 text-white/80 hover:text-white hover:border-cyan hover:bg-navy-light flex items-center justify-center shadow-lg transition-all"
        aria-label="Accessibility options"
        title="Accessibility"
      >
        <Eye className="w-5 h-5" />
      </button>
    </div>
  );
}