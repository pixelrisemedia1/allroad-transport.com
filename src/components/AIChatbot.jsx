import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Paperclip, Image as ImageIcon, Trash2, ExternalLink } from "lucide-react";
import { base44 } from "@/api/base44Client";
import ReactMarkdown from "react-markdown";

const QUICK_REPLIES = [
  "Get a freight quote",
  "Track my shipment",
  "Sea freight info",
  "Contact support",
];

const STORAGE_KEY = "allroad_chat_history";

function loadHistory() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch { return null; }
}

function saveHistory(messages) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-60)));
  } catch {}
}

const INITIAL = [
  { role: "assistant", content: "Hi! I'm the ALLROAD assistant 👋 I can help you with freight quotes, shipment tracking, logistics services, and more. I have access to current information from the web. How can I help you today?" },
];

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => loadHistory() || INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    saveHistory(messages);
  }, [messages]);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const newAttachments = [];
    for (const file of files) {
      const reader = new FileReader();
      const dataUrl = await new Promise((resolve) => {
        reader.onload = (ev) => resolve(ev.target.result);
        reader.readAsDataURL(file);
      });
      // Upload to get a real URL
      const blob = await fetch(dataUrl).then(r => r.blob());
      const formFile = new File([blob], file.name, { type: file.type });
      const { file_url } = await base44.integrations.Core.UploadFile({ file: formFile });
      newAttachments.push({ name: file.name, url: file_url, type: file.type });
    }
    setAttachments((prev) => [...prev, ...newAttachments]);
    e.target.value = "";
  };

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg && attachments.length === 0) return;
    
    const msgAttachments = [...attachments];
    setInput("");
    setAttachments([]);

    const displayContent = userMsg + (msgAttachments.length > 0 ? `\n\n📎 ${msgAttachments.map(a => a.name).join(", ")}` : "");
    setMessages((prev) => [...prev, { role: "user", content: displayContent }]);
    setLoading(true);

    const history = messages.slice(-10)
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    const fileUrls = msgAttachments.map(a => a.url);

    const reply = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an AI assistant for ALLROAD d.o.o., a freight forwarding and logistics company based in Novi Sad, Serbia.
You help customers with: sea freight, road freight, rail freight, multimodal transport, cargo insurance, shipment tracking, getting quotes, and any general questions.
Contact: info@allroad-transport.com | +381 63 1206764 | Pavla Papa 14, Novi Sad, Serbia.
Website pages: /Home, /Services, /services/sea, /services/road, /services/rail, /services/multimodal, /services/insurance, /GetQuote, /TrackOrder, /Contact, /Blog, /About.
You have access to up-to-date web information. Provide accurate, helpful answers. When referencing web sources, include links in markdown format [text](url).
You can analyze uploaded files and images the user sends. Be concise, professional, and genuinely helpful.
If asked about things outside logistics, answer helpfully using your web knowledge.

Conversation so far:
${history}

User: ${userMsg}
Assistant:`,
      add_context_from_internet: true,
      file_urls: fileUrls.length > 0 ? fileUrls : undefined,
    });

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  const clearHistory = () => {
    setMessages(INITIAL);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="fixed right-4 bottom-20 z-50 font-inter flex flex-col items-end">
      {open && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-black/[0.06] flex flex-col overflow-hidden" style={{ height: "520px" }}>
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">ALLROAD Assistant</p>
                <p className="text-white/50 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online · Web access enabled
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={clearHistory} className="text-white/40 hover:text-white/70 transition-colors" title="Clear chat history">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-cyan text-white rounded-br-sm"
                    : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-sm"
                }`}>
                  {m.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-cyan underline inline-flex items-center gap-0.5">
                            {children} <ExternalLink className="w-3 h-3" />
                          </a>
                        ),
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc ml-4 mb-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal ml-4 mb-1">{children}</ol>,
                        code: ({ children }) => <code className="bg-gray-100 px-1 rounded text-xs">{children}</code>,
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  ) : (
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length === 1 && (
            <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-gray-50 border-t border-gray-100">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-white border border-gray-200 text-gray-600 hover:border-cyan hover:text-cyan px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Attachments preview */}
          {attachments.length > 0 && (
            <div className="px-3 py-2 border-t border-gray-100 bg-gray-50 flex flex-wrap gap-2">
              {attachments.map((a, i) => (
                <div key={i} className="flex items-center gap-1 text-xs bg-white border border-gray-200 rounded-lg px-2 py-1 text-gray-600">
                  {a.type.startsWith("image/") ? <ImageIcon className="w-3 h-3 text-cyan" /> : <Paperclip className="w-3 h-3 text-cyan" />}
                  <span className="max-w-[100px] truncate">{a.name}</span>
                  <button onClick={() => setAttachments((prev) => prev.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500 ml-0.5">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white flex items-center gap-2 shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-gray-400 hover:text-cyan transition-colors shrink-0"
              title="Attach file or image"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 text-sm outline-none text-gray-800 placeholder:text-gray-400"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || (!input.trim() && attachments.length === 0)}
              className="w-8 h-8 rounded-full bg-cyan hover:bg-cyan-dark text-white flex items-center justify-center transition-colors disabled:opacity-40 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-cyan hover:bg-cyan-dark text-white flex items-center justify-center shadow-xl shadow-cyan/30 transition-all"
        aria-label="Chat with us"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}