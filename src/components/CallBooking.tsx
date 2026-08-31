"use client";

import { useState } from "react";

// Liens publics Cal.com de Tom — les 2 durées proposées aux visiteurs.
const CAL_EVENTS = [
  { id: "30min", label: "30 min", url: "https://cal.com/tom-cottu-fpdgia/30min" },
  { id: "15min", label: "15 min", url: "https://cal.com/tom-cottu-fpdgia/15min" },
];

export function CallBooking() {
  const [activeId, setActiveId] = useState(CAL_EVENTS[0].id);
  const active = CAL_EVENTS.find((e) => e.id === activeId) ?? CAL_EVENTS[0];

  return (
    <div>
      <div className="mb-4 flex gap-2" role="tablist" aria-label="Durée du call">
        {CAL_EVENTS.map((ev) => {
          const isActive = ev.id === activeId;
          return (
            <button
              key={ev.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(ev.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground hover:border-accent/40"
              }`}
            >
              {ev.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          key={active.id}
          src={`${active.url}?embed=true&theme=light`}
          title={`Réserver un call ${active.label}`}
          className="h-[540px] w-full"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
