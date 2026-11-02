import { useState, useEffect } from "react";

export default function LiveGreenClock() {
  const [totalSeconds, setTotalSeconds] = useState(
    7 * 86400 + 5 * 3600 + 35 * 60 + 54,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-1.5 text-md font-sans">
      <div className="inline-flex items-center gap-1 bg-[#008042] text-white font-bold text-lg px-1.5 py-0.5 rounded-md">
        <span>Lowest Price Live</span>
        <span className="font-bold">•</span>

        <span>Ends in</span>
        <span className="tabular-nums">
          {pad(days)}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
        </span>
      </div>
    </div>
  );
}
