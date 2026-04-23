import { useEffect, useState } from 'react';
import { useTest } from '../context/TestContext';
import { formatTime, getTimeWarningColor, getTimeWarningMessage } from '../utils/time';

export function Timer() {
  const { timeRemaining } = useTest();
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const msg = getTimeWarningMessage(timeRemaining);
    if (msg) {
      setWarning(msg);
      const timer = setTimeout(() => setWarning(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const color = getTimeWarningColor(timeRemaining);

  return (
    <div className="flex flex-col items-center">
      <div className={`text-4xl font-bold font-mono ${color} transition-colors`}>
        {formatTime(timeRemaining)}
      </div>
      {warning && (
        <div className="mt-2 text-sm font-semibold text-red-600 animate-pulse">
          {warning}
        </div>
      )}
    </div>
  );
}
