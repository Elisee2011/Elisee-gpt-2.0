import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Send, Sparkles, Plus, Menu, X, Image, Paperclip } from 'lucide-react';
import './styles.css';

const starter = [{ role: 'assistant', content: 'Salut 👋 Je suis Élisée GPT. Que puis-je faire pour toi ?' }];

function App() {
  const [messages, setMessages] = useState(starter);
  const [input, setInput] = useState('');
  const [sidebar, setSidebar] = useState(true);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { role: 'user', content: text }, { role: 'assistant', content: 'Je suis Élisée GPT. Mon moteur IA sera connecté ici pour répondre à ta demande. 🚀' }]);
    setInput('');
  }

  return <div className="app">
    <aside className={sidebar ? 'sidebar' : 'sidebar hidden'}>
      <div className="brand"><div className="logo">É</div><b>Élisée GPT</b></div>
      <button className="new-chat" onClick={() => setMessages(starter)}><Plus size={18}/> Nouvelle discussion</button>
      <div className="side-title">Aujourd'hui</div>
      <div className="history">Nouvelle discussion</div>
      <div className="side-footer">Élisée GPT 2.0<br/><span>Ton assistant IA</span></div>
    </aside>

    <main className="main">
      <header><button className="icon" onClick={() => setSidebar(!sidebar)}>{sidebar ? <X/> : <Menu/>}</button><div className="model"><Sparkles size={17}/> Élisée GPT <span>2.0</span></div><div/></header>
      <section className="chat">
        {messages.length === 1 && <div className="hero"><div className="hero-logo">É</div><h1>Que puis-je faire pour toi ?</h1><p>Écris un message pour commencer avec Élisée GPT.</p></div>}
        <div className="messages">{messages.map((m, i) => <div className={'message '+m.role} key={i}><div className="avatar">{m.role === 'assistant' ? 'É' : 'Toi'}</div><div className="bubble">{m.content}</div></div>)}</div>
      </section>
      <div className="composer-wrap"><div className="composer"><button className="tool"><Paperclip size={19}/></button><button className="tool"><Image size={19}/></button><textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => {if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage()}}} placeholder="Message à Élisée GPT..." rows="1"/><button className="send" onClick={sendMessage}><Send size={18}/></button></div><small>Élisée GPT peut faire des erreurs. Vérifie les informations importantes.</small></div>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
