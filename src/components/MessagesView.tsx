"use client";

import { useState } from "react";
import { messages } from "@/lib/data";
import DbForm from "./dashboard/DbForm";
import {
  ArrowLeft, ArrowRight, ChevL, ChevR, ClipIcon, DotsH, DotsV, FileIcon, ImageIcon,
  PayoneerMark, PlusIcon, ReplyIcon, SearchIcon, SmileIcon, TrashIcon,
} from "./dashboard/Icons";
import "@/styles/dashboard.css";

const FILTERS = [
  { label: "All", color: "" },
  { label: "Read", color: "#f0342c" },
  { label: "Unread", color: "#00b85c" },
  { label: "Primary", color: "#4aa8ff" },
] as const;
const DOT: Record<string, string> = { read: "#f0342c", unread: "#00b85c", primary: "#4aa8ff" };
const PER_PAGE = 5;

export default function MessagesView() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(2);
  const [page, setPage] = useState(1);
  const pages = Math.ceil(messages.total / PER_PAGE);

  const list = messages.inbox.filter((m) => {
    const matchFilter = filter === "All" || m.status === filter.toLowerCase();
    const q = search.trim().toLowerCase();
    return matchFilter && (!q || m.from.toLowerCase().includes(q) || m.subject.toLowerCase().includes(q));
  });
  const open = messages.threads.find((t) => t.id === selected) ?? messages.threads[0];
  const go = (p: number) => setPage(Math.min(pages, Math.max(1, p)));

  return (
    <>
      <div className="db-msg-head">
        <h1 className="db-h1" style={{ margin: 0 }}>Messages</h1>
        <button type="button" className="db-plus" aria-label="New message">
          <PlusIcon size={26} />
        </button>
      </div>

      <div className="db-pager" style={{ margin: "30px 0 22px" }}>
        <button type="button" aria-label="First page" onClick={() => go(1)} disabled={page === 1}><ArrowLeft /></button>
        <span>
          <button type="button" aria-label="Previous page" onClick={() => go(page - 1)} disabled={page === 1}><ChevL /></button>
          {(page - 1) * PER_PAGE + 1}-{Math.min(page * PER_PAGE, messages.total)} of {messages.total}
          <button type="button" aria-label="Next page" onClick={() => go(page + 1)} disabled={page === pages}><ChevR /></button>
        </span>
        <button type="button" aria-label="Last page" onClick={() => go(pages)} disabled={page === pages}><ArrowRight /></button>
      </div>

      <div className="db-split">
        <section className="db-inbox" aria-label="Inbox">
          <div className="db-inbox-top">
            <h2>
              Inbox <span style={{ color: "var(--db-muted)" }} aria-hidden="true"><DotsH /></span>
            </h2>
            <label className="db-search">
              <input type="search" placeholder="Search contacts" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search contacts" />
              <SearchIcon />
            </label>
            <div className="db-chips" role="group" aria-label="Filter messages">
              {FILTERS.map((f) => (
                <button key={f.label} type="button" className={`db-chip ${f.label === filter ? "on" : ""}`} aria-pressed={f.label === filter} onClick={() => setFilter(f.label)}>
                  {f.color && <i style={{ background: f.color }} />}
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {list.map((m) => (
            <button key={m.id} type="button" className={`db-item ${selected === m.id ? "sel" : ""}`} aria-current={selected === m.id} onClick={() => setSelected(m.id)}>
              <span className="db-item-top">
                <span>
                  <i style={{ background: DOT[m.status] }} />
                  {m.from}
                </span>
                <span className="d">{m.date}</span>
              </span>
              <span className="s">{m.subject}</span>
              <span className="pv">{m.preview}</span>
              {m.attachment && (
                <span className="db-file">
                  <FileIcon /> {m.attachment}
                </span>
              )}
            </button>
          ))}
          {list.length === 0 && <p className="db-empty">No messages found.</p>}
        </section>

        <article key={open.id} className="db-read" aria-label="Opened message">
          <div className="db-read-head">
            <span className="db-sender" style={{ color: "#fff" }}><PayoneerMark /></span>
            <div className="who">
              <b>{open.from}</b>
              <span>{open.email}</span>
            </div>
            <div>
              <div className="tm">{open.time}</div>
              <div className="db-read-icons">
                <button type="button" aria-label="Delete"><TrashIcon /></button>
                <button type="button" aria-label="Reply"><ReplyIcon /></button>
                <button type="button" aria-label="More"><DotsV /></button>
              </div>
            </div>
          </div>
          <h3>{open.subject}</h3>
          {open.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="db-att-head">
            <strong>{open.attachments.length} Attachment</strong>
            <button type="button">Download All</button>
          </div>
          <div className="db-tiles">
            {open.attachments.map((a) => (
              <div key={a.name} className="db-tile">
                <FileIcon />
                <div>
                  <b>{a.name}</b>
                  <small>{a.size}</small>
                </div>
              </div>
            ))}
          </div>

          <DbForm successMessage="Reply sent.">
            <div className="db-reply">
              <div className="db-reply-to">
                <span>To</span>
                <span className="em">{open.email}</span>
                <button type="button">Cc</button>
                <button type="button">Bcc</button>
              </div>
              <textarea name="reply" aria-label="Reply message" required defaultValue={"Hi, Mary Cooper!\n Thanks for your invitation for the account manager position for you company. I Will back to you soon with all the require documents."} />
              <div className="db-reply-bar">
                <button type="button" aria-label="Attach file"><ClipIcon /></button>
                <button type="button" aria-label="Emoji"><SmileIcon /></button>
                <button type="button" aria-label="Insert image"><ImageIcon /></button>
                <button type="reset" aria-label="Discard"><TrashIcon /></button>
                <button type="submit" className="db-btn">Reply</button>
              </div>
            </div>
          </DbForm>
        </article>
      </div>
    </>
  );
}
