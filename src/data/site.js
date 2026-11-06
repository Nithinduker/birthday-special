const u = (id, w = 1200) =>
    `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const BIRTHDAY = new Date(2026, 10, 17, 0, 0, 0);
export const PASSCODES = ["PAPPUMA2026", "PAPPUMA", "MATHU", "LOVE"];

export const IMAGES = {
    hero: "/photos/hero.webp",
    journey: "/photos/memory-drive.jpg",
    gift: u("photo-1625552186152-668cd2f0b707", 1200),
    letter: u("photo-1579532649051-ed5208863cd9", 1000),
};

export const MARQUEE_ITEMS = [
    "Nithin ♥ Mathu",
    "2½ Years of Us",
    "Happy Birthday, Pappuma",
    "17 · 11 · 2026",
    "Forever to Go",
];

export const JOURNEY = [
    {
        chapter: "Chapter One",
        title: "The First Hello",
        text: "Where our story quietly began — the moment everything changed, and I didn't even know it yet.",
    },
    {
        chapter: "The Early Days",
        title: "Learning You",
        text: "Long talks that ate whole nights, silly jokes only we understand, and every little thing that makes you, you.",
    },
    {
        chapter: "One Year In",
        title: "365 Days of Us",
        text: "A whole year together — and somewhere in it, you stopped being someone I love and became home.",
    },
    {
        chapter: "Year Two",
        title: "Stronger Together",
        text: "Through every high, every low, every ordinary Tuesday — side by side, always.",
    },
    {
        chapter: "Today",
        title: "2½ Years & Counting",
        text: "900+ days of loving my Pappuma, and a whole lifetime still to go. This one's your day.",
    },
];

export const MEMORIES = [
    { src: "/photos/memory-bw.jpg", caption: "my favourite frame of us", alt: "Nithin and Mathu in black and white - Romeo" },
    { src: "/photos/memory-laugh.jpg", caption: "laughter that lasts hours", alt: "Nithin and Mathu laughing together" },
    { src: "/photos/memory-drive.jpg", caption: "sunlit drives, shared hands", alt: "Mathu and Nithin on a car ride" },
    { src: "/photos/memory-reunion.webp", caption: "back among the old walls, together", alt: "Nithin and Mathu at their college alumni reunion" },
    { src: "/photos/memory-road.webp", caption: "the safest place on earth", alt: "Nithin hugging Mathu on a tree-lined road - pillavakkal dam" },
    { src: "/photos/memory-sillies.webp", caption: "the sillies — a club of two", alt: "Mathu and Nithin pulling silly faces, our secret marriage" },
    { src: "/photos/memory-pink.webp", caption: "pretty in pink, just like her", alt: "Mathu and Nithin at a pink floral café" },
    { src: "/photos/memory-cafe.webp", caption: "coffee first, poses later", alt: "Mathu smiling while Nithin sticks his tongue out over hot chocolate" },
];

export const REASONS = [
    "Your smile — it lights up even my darkest days.",
    "The way you say my name when you want a little attention.",
    "How we can talk for hours about absolutely nothing.",
    "Your kind heart that quietly cares for everyone around you.",
    "Your hugs — they feel exactly like coming home.",
    "2½ years of you being my best friend and my soulmate.",
    "The way your eyes sparkle when you laugh out loud.",
    "You turn ordinary days into little adventures.",
    "Your endless patience with me — always, always.",
    "Simply because you are Mathu — my one and only Pappuma.🤍",
];

export const LETTER = [
    "My Dearest Pappuma,",
    "Two and a half years ago, you walked into my life and quietly turned every ordinary day into poetry. Since then, everything soft in my world has had your name on it.",
    "Thank you — for your laughter that fills every silence, for your patience with my moods, for holding my hand a little tighter whenever life feels heavy. Loving you was never a choice; it is simply the truest thing I do.",
];

export const GIFT_VOUCHERS = [
    { icon: "utensils", title: "One Candlelight Dinner", text: "Anywhere you want, Nithin's treat — dress code: stunning." },
    { icon: "icecream", title: "Late-Night Ice Cream", text: "A midnight run, just us and the stars." },
    { icon: "popcorn", title: "Movie Night, Your Pick", text: "Unlimited snacks, unlimited cuddles." },
    { icon: "crown", title: "Queen for a Day", text: "Pappuma decides everything. Yes, everything." },
];

export const REVEAL_MESSAGE = [
    "If you're reading this, the wait is over — it's your day, Mathu.",
    "This whole little page was only the beginning. Every second of the countdown, every memory, every word — it all leads to one simple truth: I choose you, today and every day after.",
    "Happy birthday, my Pappuma. Here's to every wish you make today coming true.",
    "On November 17th, the world celebrates the day its most beautiful soul arrived. I celebrate you every single day — but today, I get to say it a little louder.",
    "Happy birthday, my Pappuma. Forever wouldn't be long enough.",
];
