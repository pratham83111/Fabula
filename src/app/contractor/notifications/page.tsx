import type { Metadata } from "next";
import DbForm from "@/components/dashboard/DbForm";
import { messages } from "@/lib/data";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsPage() {
  return (
    <>
      <h1 className="db-h1">Notifications</h1>
      <div className="db-card">
        <DbForm successMessage="Preferences saved.">
          {messages.notifications.map((n) => (
            <div key={n.id} className="db-row">
              <span>{n.label}</span>
              <span className="db-sw">
                <label>
                  <input type="checkbox" name={`email-${n.id}`} defaultChecked={n.email} /> Email
                </label>
                <label>
                  <input type="checkbox" name={`push-${n.id}`} defaultChecked={n.push} /> Push
                </label>
              </span>
            </div>
          ))}
          <div className="db-actions">
            <button type="submit" className="db-btn">Save</button>
          </div>
        </DbForm>
      </div>
    </>
  );
}
