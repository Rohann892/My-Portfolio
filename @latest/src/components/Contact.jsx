import { useState } from 'react';
import { 
  Mail, Send, Globe, MapPin, 
  CheckCircle2, Copy, ExternalLink, Sparkles, MessageSquare
} from 'lucide-react';

const contactLinks = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'rohanlal@email.com', 
    href: 'mailto:rohanlal@email.com',
    color: 'text-red-600'
  },
  { 
    icon: Globe, 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/rohanlal', 
    href: 'https://linkedin.com',
    color: 'text-blue-600'
  },
  { 
    icon: Globe, 
    label: 'GitHub', 
    value: 'github.com/rohanlal', 
    href: 'https://github.com/rohanlal',
    color: 'text-slate-800'
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6] text-white p-5 border-b border-blue-400/40 relative overflow-hidden shadow-inner">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Mail size={20} className="text-blue-200" />
              <h1 className="text-2xl font-bold tracking-tight text-white">Contact & Connect</h1>
            </div>
            <p className="text-blue-100 text-xs sm:text-sm">
              Send a direct message or connect through professional channels.
            </p>
          </div>
          <div className="text-xs bg-white/20 px-3 py-1 rounded-full border border-white/30 text-white font-medium">
            ⚡ Quick Response Guaranteed
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl border border-[#cbd5e1] bg-[#f8fafc] shadow-sm space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                <Sparkles size={14} className="text-blue-600" /> Let's Collaborate
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you have an exciting job opportunity, a project to collaborate on, or just want to connect — feel free to drop a message!
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-2.5">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <div
                    key={link.label}
                    className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl flex items-center justify-between hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        <IconComponent size={18} className={link.color} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {link.label}
                        </div>
                        <div className="text-xs font-semibold text-slate-800">{link.value}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(link.value, link.label)}
                        className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                        title="Copy to clipboard"
                      >
                        {copiedLabel === link.label ? (
                          <CheckCircle2 size={14} className="text-emerald-600" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded hover:bg-blue-100 text-blue-600 transition-colors"
                        title="Open Link"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Windows Styled Message Form */}
          <div className="lg:col-span-7">
            <div className="p-5 rounded-xl border border-[#cbd5e1] bg-[#f8fafc] shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-200 text-xs font-bold text-slate-800">
                <MessageSquare size={15} className="text-blue-600" />
                <span>Send Direct Message</span>
              </div>

              {sent ? (
                <div className="text-center py-10 px-4 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">Message Dispatched!</h3>
                  <p className="text-slate-600 text-xs max-w-sm">
                    Thank you for reaching out. Your message has been sent successfully and I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-slate-600">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#94a3b8] rounded px-3 py-2 text-slate-800 text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-slate-600">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-[#94a3b8] rounded px-3 py-2 text-slate-800 text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-600">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Project Collaboration / Opportunity"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#94a3b8] rounded px-3 py-2 text-slate-800 text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-slate-600">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white border border-[#94a3b8] rounded px-3 py-2 text-slate-800 text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded font-bold text-xs text-white bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] hover:from-[#2563eb] hover:to-[#1e40af] border border-[#1d4ed8] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:translate-y-[1px] cursor-pointer"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
