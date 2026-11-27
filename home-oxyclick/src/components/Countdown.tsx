"use client";

import { useEffect, useState } from "react";

const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

function remaining(target: number, now: number) {
  const s = Math.max(0, Math.floor((target - now) / 1000));
  return [
    Math.floor(s / 86400),
    Math.floor((s % 86400) / 3600),
    Math.floor((s % 3600) / 60),
    s % 60,
  ];
}

export default function Countdown({ to }: { to: string }) {
  const target = new Date(to).getTime();
  // Rendered as zeros in the static HTML, then filled in by the browser so the
  // server and client markup always agree.
  const [parts, setParts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const tick = () => setParts(remaining(target, Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div
      role="timer"
      className="mx-auto flex max-w-[518px] justify-center gap-4 md:gap-[50px]"
    >
      {units.map((unit, i) => (
        <div key={unit} className="w-[72px] text-center md:w-[91px]">
          <div className="flex h-[72px] items-center justify-center rounded-[10px] bg-white font-poppins text-[28px] font-bold tabular-nums text-brand shadow-[0_4px_12px_rgba(0,0,0,0.25)] md:h-[91px] md:text-[42px]">
            {String(parts[i]).padStart(2, "0")}
          </div>
          <div className="mt-3 font-poppins text-[15px] font-bold leading-8 text-white md:text-base">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
