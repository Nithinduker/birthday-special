import { useEffect, useState } from "react";

export function useNow(interval = 1000) {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), interval);
        return () => clearInterval(t);
    }, [interval]);
    return now;
}

export const pad2 = (n) => String(n).padStart(2, "0");
