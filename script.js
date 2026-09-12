// ==========================================
// 1. DICTIONARIES & DATASETS (Full 20 Items Each)
// ==========================================
const translationDictionary = {
    en: {
        navCreators: "Models",
        navGroups: "Groups",
        navVideos: "Videos",
        navLive: "Lives",
        langLabel: "Language",
        themeDark: "<i class='fa-solid fa-moon'></i> Dark Mode",
        themeLight: "<i class='fa-solid fa-sun'></i> Light Mode",
        vipLabel: "<i class='fa-solid fa-star'></i> VIP Registration",
        aboutLabel: "<i class='fa-solid fa-circle-info'></i> About Us",
        logoutLabel: "<i class='fa-solid fa-right-from-bracket'></i> Log Out",
        bottomTextLoggedOut: "You need to log in or create an account to unlock more content.",
        bottomBtnLoggedOut: "Log In / Sign Up",
        bottomTextLoggedIn: "You must upgrade to a VIP plan to view more content.",
        bottomBtnLoggedIn: "Join VIP Plan",
        authTitle: "Account Access",
        loginTab: "Login",
        signupTab: "Sign Up",
        loginIdLabel: "Email or Phone Number",
        loginPwdLabel: "Password",
        loginSubmit: "Log In",
        signupNameLabel: "Full Name",
        signupIdLabel: "Email or Phone Number",
        signupPwdLabel: "Password (At least 6 chars, letters & numbers)",
        signupConfirmLabel: "Confirm Password",
        signupSubmit: "Send Verification Code",
        verifyOtpLabel: "Enter 6-Digit Verification Code",
        verifySubmit: "Verify & Complete Account",
        paymentTitle: "VIP Access Required",
        paymentInst: "Pay 1000 ETB using Telebirr or CBE. Copy the account/phone number below, complete the transfer, and upload your payment screenshot to gain instant access.",
        teleLabel: "Telebirr Account",
        cbeLabel: "CBE Bank Account",
        copyBtn: "<i class='fa-solid fa-copy'></i> Copy",
        uploadLabel: "<i class='fa-solid fa-image'></i> Upload Payment Screenshot",
        verifyPayBtn: "<i class='fa-solid fa-shield-halved'></i> Check My Screenshot",
        aboutTitle: "About Us",
        aboutText: "Welcome to ሀበሻ Hub VIP. Your premier hub for exclusive entertainment, models, sex group discussions, and sex live streaming. Upgrade to VIP for unlimited access."
    },
    am: {
        navCreators: "ሞዴሎች",
        navGroups: "ቡድኖች",
        navVideos: "ቪዲዮዎች",
        navLive: "ቀጥታ",
        langLabel: "ቋንቋ",
        themeDark: "<i class='fa-solid fa-moon'></i> ጥቁር ገጽታ",
        themeLight: "<i class='fa-solid fa-sun'></i> ብሩህ ገጽታ",
        vipLabel: "<i class='fa-solid fa-star'></i> VIP ምዝገባ",
        aboutLabel: "<i class='fa-solid fa-circle-info'></i> ስለ እኛ",
        logoutLabel: "<i class='fa-solid fa-right-from-bracket'></i> ውጣ",
        bottomTextLoggedOut: "ተጨማሪ ይዘቶችን ለማየት እባክዎ መለያ ይግቡ ወይም ይመዝገቡ::",
        bottomBtnLoggedOut: "ይግቡ / ይመዝገቡ",
        bottomTextLoggedIn: "ተጨማሪ ይዘት ለማየት VIP አባል መሆን አለብዎት::",
        bottomBtnLoggedIn: "VIP አባል ይሁኑ",
        authTitle: "የመለያ መግቢያ",
        loginTab: "ይግቡ",
        signupTab: "ይምዝገቡ",
        loginIdLabel: "ኢሜይል ወይም ስልክ ቁጥር",
        loginPwdLabel: "የይለፍ ቃል",
        loginSubmit: "ይግቡ",
        signupNameLabel: "ሙሉ ስም",
        signupIdLabel: "ኢሜይል ወይም ስልክ ቁጥር",
        signupPwdLabel: "የይለፍ ቃል (ቢያንስ 6 ቁምፊ፣ ፊደላትና ቁጥሮች)",
        signupConfirmLabel: "የይለፍ ቃል ያረጋግጡ",
        signupSubmit: "የማረጋገጫ ኮድ ላክ",
        verifyOtpLabel: "የ 6-አሃዝ የማረጋገጫ ኮድ ያስገቡ",
        verifySubmit: "አረጋግጥና ጨርስ",
        paymentTitle: "የ VIP መዳረሻ ያስፈልጋል",
        paymentInst: "ለመግባት 1000 ብር በቴሌብር (Telebirr) ወይም በንግድ ባንክ (CBE) ይክፈሉ። ከታች ያለውን ስልክ/አካውንት ኮፒ በማድረግ ይክፈሉ፣ ከዚያ የከፈሉበትን ስክሪንሾት (Screenshot) እዚህ በመጫን ያረጋግጡ።",
        teleLabel: "የቴሌብር አካውንት",
        cbeLabel: "የንግድ ባንክ አካውንት",
        copyBtn: "<i class='fa-solid fa-copy'></i> ኮፒ",
        uploadLabel: "<i class='fa-solid fa-image'></i> የክፍያ ስክሪንሾት ይጫኑ",
        verifyPayBtn: "<i class='fa-solid fa-shield-halved'></i> ስክሪንሾት አረጋግጥ",
        aboutTitle: "ስለ እኛ",
        aboutText: "ወደ ሀበሻ Hub VIP Portal እንኳን በደህና መጡ። ለየት ያሉ መዝናኛዎች፣ የሞዴሎች ገጽ፣ የቡድን ውይይቶች እና የቀጥታ ቪዲዮ ስትሪሚንግ የሚያገኙበት ቀዳሚ መድረክ።"
    }
};

const DEFAULT_AVATAR = "https://i.postimg.cc/mD3m5x3Y/default-avatar.png";

// Resizes Cloudinary images on the fly so the browser isn't downloading/decoding
// full-resolution photos for small grid thumbnails. Non-Cloudinary URLs (postimg, etc.)
// are returned unchanged since they don't support this kind of transform.
function optimizeImg(url, width = 300) {
    if (typeof url === 'string' && url.includes('res.cloudinary.com') && url.includes('/upload/')) {
        return url.replace('/upload/', `/upload/w_${width},q_auto,f_auto,c_fill/`);
    }
    return url;
}

const data = {
    creators: [
        { title: "Melat", sub: "196 Followers", age: 24, city: "Addis Ababa", img: "https://i.postimg.cc/rFpVw4xt/1788171869754.jpg", isOnline: true },
        { title: "Selam", sub: "254 Followers", age: 21, city: "Hawassa", img: "https://i.postimg.cc/m2qsZ5TY/1788171877524.jpg", isOnline: false },
        { title: "Hlina", sub: "388 Followers", age: 27, city: "Adama", img: "https://i.postimg.cc/DyzvwGL4/1788171906232.jpg", isOnline: true },
        { title: "Tnsae", sub: "97 Followers", age: 26, city: "Addis Ababa", img: "https://i.postimg.cc/CLd0ggpC/1788171917150.jpg", isOnline: true },
        { title: "Nardos", sub: "104 Followers", age: 29, city: "Bahir Dar", img: "https://i.postimg.cc/PrNHjjn5/1788171968874.jpg", isOnline: false },
        { title: "Senait", sub: "259 Followers", age: 24, city: "Bishoftu", img: "https://i.postimg.cc/pVsv4d4d/1788171991842.jpg", isOnline: true },
        { title: "Hawi", sub: "1.1k Followers", age: 21, city: "Mekelle", img: "https://i.postimg.cc/T2txFPFd/1788172001049.jpg", isOnline: false },
        { title: "Meklit", sub: "2k Followers", age: 23, city: "Addis Ababa", img: "https://i.postimg.cc/j23r78PH/1788172097789.jpg", isOnline: true },
        { title: "Tigst", sub: "580 Followers", age: 22, city: "Dire Dawa", img: "https://i.postimg.cc/L5QM1yL1/1788172115673.jpg", isOnline: true },
        { title: "Saron", sub: "2.1k Followers", age: 26, city: "Addis Ababa", img: "https://i.postimg.cc/1X7ZqWw8/1788172122212.jpg", isOnline: false },
        { title: "Eden", sub: "93 Followers", age: 24, city: "Hawassa", img: "https://i.postimg.cc/J4hrzXZ7/1788172128809.jpg", isOnline: true },
        { title: "Mahlet", sub: "654 Followers", age: 20, city: "Adama", img: "https://i.postimg.cc/yxpzZfcB/1788172194616.jpg", isOnline: false },
        { title: "Hermela", sub: "159 Followers", age: 29, city: "Gondar", img: "https://i.postimg.cc/1X3Q4xn5/1788172228887.jpg", isOnline: true },
        { title: "Elnatan", sub: "908 Followers", age: 23, city: "Addis Ababa", img: "https://i.postimg.cc/2ySD3pbp/1788172319280.jpg", isOnline: true },
        { title: "Thion", sub: "790 Followers", age: 25, city: "Jimma", img: "https://i.postimg.cc/mkgshxcN/1788172348389.jpg", isOnline: false },
        { title: "Fikr", sub: "1.9k Followers", age: 29, city: "Addis Ababa", img: "https://i.postimg.cc/3R77503Q/1788172355452.jpg", isOnline: true },
        { title: "Sara", sub: "300 Followers", age: 30, city: "Bahir Dar", img: "https://i.postimg.cc/13ksBYTM/1788172366061.jpg", isOnline: false },
        { title: "Nardos", sub: "840 Followers", age: 25, city: "Hawassa", img: "https://i.postimg.cc/CxBwjVvd/1788172373952.jpg", isOnline: true },
        { title: "Mekdes", sub: "2.2k Followers", age: 24, city: "Addis Ababa", img: "https://i.postimg.cc/MpMzy8s8/1788172387659.jpg", isOnline: true },
        { title: "Tsion", sub: "2.6k Followers", age: 27, city: "Adama", img: "https://i.postimg.cc/Y2R27RGk/20c2c1ae906b1aed619cd04af126ce32.jpg", isOnline: false },
        { title: "Beti", sub: "194 Followers", age: 24, city: "Addis Ababa", img: "https://i.postimg.cc/XqsngNSM/36148884-258672284688860-5764975112105230336-n.jpg", isOnline: true },
        { title: "Hellen", sub: "632 Followers", age: 27, city: "Hawassa", img: "https://i.postimg.cc/QCfjqNGd/7584311.jpg", isOnline: false },
        { title: "Rahel", sub: "633 Followers", age: 20, city: "Adama", img: "https://i.postimg.cc/VvKzFsQc/83148274-590365711817756-1251195743274776584-n.jpg", isOnline: true },
        { title: "Bethlehem", sub: "1.4k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/Vsgswgrf/c0925a4a731a3be6d8a120c0e265bb3f.jpg", isOnline: true },
        { title: "Eden", sub: "764 Followers", age: 24, city: "Bahir Dar", img: "https://i.postimg.cc/gcscpsXp/images-(27).jpg", isOnline: false },
        { title: "Meron", sub: "951 Followers", age: 19, city: "Bishoftu", img: "https://i.postimg.cc/QM7xrr5S/images-(27)-(1).jpg", isOnline: true },
        { title: "Makiba", sub: "1.1k Followers", age: 25, city: "Mekelle", img: "https://i.postimg.cc/CxXLtKZp/images-(27)-(2).jpg", isOnline: false },
        { title: "Frehiwot", sub: "5k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/gJPczBHk/images-(27)-(3).jpg", isOnline: true },
        { title: "Martha", sub: "58 Followers", age: 21, city: "Dire Dawa", img: "https://i.postimg.cc/rmCVKCfp/images-(27)-(4).jpg", isOnline: true },
        { title: "Yordanos", sub: "2.1k Followers", age: 23, city: "Addis Ababa", img: "https://i.postimg.cc/V6BfdBKf/images-(27)-(5).jpg", isOnline: false },
        { title: "Feven", sub: "866 Followers", age: 20, city: "Hawassa", img: "https://i.postimg.cc/SspQStfR/images-(27)-(6).jpg", isOnline: true },
        { title: "Ruth", sub: "1k Followers", age: 22, city: "Adama", img: "https://i.postimg.cc/NMwGsP7C/images-(27)-(7).jpg", isOnline: false },
        { title: "Yeabsra", sub: "120 Followers", age: 24, city: "Gondar", img: "https://i.postimg.cc/VsgswgrY/images-(29).jpg", isOnline: true },
        { title: "Kidist", sub: "980 Followers", age: 21, city: "Addis Ababa", img: "https://i.postimg.cc/3r1rh1yt/images-(30).jpg", isOnline: true },
        { title: "Feven", sub: "1.1 Followers", age: 23, city: "Jimma", img: "https://i.postimg.cc/44P4GPKB/images-(31).jpg", isOnline: false },
        { title: "Solyana", sub: "1k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/fWCWsC35/images-(32).jpg", isOnline: true },
        { title: "Eldana", sub: "370 Followers", age: 20, city: "Bahir Dar", img: "https://i.postimg.cc/T202x0y9/images-(33).jpg", isOnline: false },
        { title: "Haimanot", sub: "986 Followers", age: 21, city: "Hawassa", img: "https://i.postimg.cc/Y2R27R4x/images-(34).jpg", isOnline: true },
        { title: "Yordanos", sub: "1.2k Followers", age: 25, city: "Addis Ababa", img: "https://i.postimg.cc/T202x0yJ/images-(35).jpg", isOnline: true },
        { title: "Lidya", sub: "2k Followers", age: 23, city: "Adama", img: "https://i.postimg.cc/j2MRhq07/images-(36).jpg", isOnline: false },
        { title: "Blen", sub: "865 Followers", age: 21, city: "Addis Ababa", img: "https://i.postimg.cc/L5xmV4KZ/images-(37).jpg", isOnline: true },
        { title: "Samrawit", sub: "759 Followers", age: 23, city: "Hawassa", img: "https://i.postimg.cc/BbmJCZ9L/images-(39).jpg", isOnline: false },
        { title: "Rahel", sub: "173 Followers", age: 20, city: "Adama", img: "https://i.postimg.cc/0jV9C5R6/images-(40).jpg", isOnline: true },
        { title: "Rediet", sub: "1.2k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/d35J9QPh/images-(41).jpg", isOnline: true },
        { title: "Kalkidan", sub: "307 Followers", age: 24, city: "Bahir Dar", img: "https://i.postimg.cc/2y0CxjRV/images-(42).jpg", isOnline: false },
        { title: "Zema", sub: "905 Followers", age: 19, city: "Bishoftu", img: "https://i.postimg.cc/RhgvTC50/images-(43).jpg", isOnline: true },
        { title: "Maki", sub: "3.1k Followers", age: 25, city: "Mekelle", img: "https://i.postimg.cc/fy8MvWnT/images-(44).jpg", isOnline: false },
        { title: "Bamlak", sub: "1.6k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/d35J9QPq/images-(45).jpg", isOnline: true },
        { title: "Martha", sub: "643 Followers", age: 21, city: "Dire Dawa", img: "https://i.postimg.cc/fy8MvWnM/images-(46).jpg", isOnline: true },
        { title: "Azeb", sub: "3.1k Followers", age: 23, city: "Addis Ababa", img: "https://i.postimg.cc/VvKzFsQm/images-(47).jpg", isOnline: false },
        { title: "Bisrat", sub: "276 Followers", age: 20, city: "Hawassa", img: "https://i.postimg.cc/mkmTSZf4/images-(48).jpg", isOnline: true },
        { title: "Haset", sub: "982 Followers", age: 22, city: "Adama", img: "https://i.postimg.cc/ZnwJLYtz/images-(49).jpg", isOnline: false },
        { title: "Meaza", sub: "154 Followers", age: 24, city: "Gondar", img: "https://i.postimg.cc/SRgmGQ0H/images-(50).jpg", isOnline: true },
        { title: "Etsegenet", sub: "658 Followers", age: 21, city: "Addis Ababa", img: "https://i.postimg.cc/Y0rpgGVH/images-(51).jpg", isOnline: true },
        { title: "Elsa", sub: "790 Followers", age: 23, city: "Jimma", img: "https://i.postimg.cc/90mWTRkN/images-(54).jpg", isOnline: false },
        { title: "Senait", sub: "1.2k Followers", age: 22, city: "Addis Ababa", img: "https://i.postimg.cc/kGJn86HT/images-(55).jpg", isOnline: true },
        { title: "Rosa", sub: "390 Followers", age: 20, city: "Bahir Dar", img: "https://i.postimg.cc/hvDSxzYp/images-(56).jpg", isOnline: false },
        { title: "Tzta", sub: "445 Followers", age: 21, city: "Hawassa", img: "https://i.postimg.cc/XqjVFGPk/images-(57).jpg", isOnline: true },
        { title: "Naomi", sub: "2k Followers", age: 25, city: "Addis Ababa", img: "https://i.postimg.cc/90mWTRkZ/images-(58).jpg", isOnline: true },
        { title: "Marta", sub: "942 Followers", age: 23, city: "Adama", img: "https://i.postimg.cc/50q46qsQ/images-(63).jpg", isOnline: false }
    
    
    ],
    channels: [
        { title: "ሀበሻ ወሲብ ", sub: "3.7k Members", img: "https://i.postimg.cc/9QZNRfRq/images-(32).jpg" },
        { title: "መበዳጃ ", sub: "1.4k Members", img: "https://i.postimg.cc/wjLbyByL/IMG-20260831-143309-695.jpg" },
        { title: "ወሲብ ብቻ", sub: "1.1k Members", img: "https://i.postimg.cc/hPH5tmjm/20d635a5782a514b7390c0f82424bf89.jpg" },
        { title: "bang bros ሀበሻ", sub: "4.3k Members", img: "https://i.postimg.cc/BQdVnF6Q/channels4-profile.jpg" },
        { title: "xnxx ሀበሻ ", sub: "2.1k Members", img: "https://i.postimg.cc/y8crgNgx/9daa102d9a1f1d3ea38336a388375d0c-fgraphic.png" },
        { title: "anal ፈላጊ", sub: "6.8k Members", img: "https://i.postimg.cc/HkXPcLc9/90841542-009-9700.jpg" },
        { title: "ሴክስ ቻት", sub: "600 Members", img: "https://i.postimg.cc/gkfT2hJ0/attachment-107066830.png" },
        { title: "let's talk about sex", sub: "900 Members", img: "https://i.postimg.cc/y8crgNgd/hot-sexy-woman-female-lady-legs-with-high-heels-for-bar-strip-club-logo-design-vector.jpg" },
        { title: "ራቁት live", sub: "1.2k Members", img: "https://i.postimg.cc/sg70Q2Qg/sexy-high-heels-with-g-string-for-bar-strip-club-logo-design-vector.jpg" },
        { title: "እንባዳ", sub: "5.5k Members", img: "https://i.postimg.cc/rwxY0p0W/black-anal-beauties-skin-diamond-close-up.jpg" },
        { title: "እምስ እና ሙዚቃ", sub: "18.6k Members", img: "https://i.postimg.cc/hPH5tmjt/2251727-4742.png" },
        { title: "ፍቅር ብቻ", sub: "1.1k Members", img: "https://i.postimg.cc/JzZdDhD4/the-Rolling-Stones-Tongue-and-Lips-logo.jpg" },
        { title: "sex talk", sub: "150 Members", img: "https://i.postimg.cc/yYwb8Rdx/logo-square.jpg" },
        { title: "sex dating", sub: "1.7k Members", img: "https://i.postimg.cc/GhZ5mD22/images-(35).jpg" },
        { title: "habesha porn", sub: "4.9k Members", img: "https://i.postimg.cc/MpVrMGMv/images-(34).jpg" },
        { title: "ሴክስ እና ፍቅር", sub: "6.2k Members", img: "https://i.postimg.cc/gkfT2hJz/images-(36).jpg" },
        { title: "መበዳጃ ", sub: "9.1k Members", img: "https://i.postimg.cc/qM95vKR4/images-(2).png" },
        { title: "porn hub", sub: "25.4k Members", img: "https://i.postimg.cc/13wYnzn8/images-(1).png" },
        { title: "pussy ፈላጊ ብቻ", sub: "95 Members", img: "https://i.postimg.cc/4NrSxcdX/images-(3).png" },
        { title: "ጀላ ጠቢወች", sub: "90 Members", img: "https://i.postimg.cc/jdGFSf57/a628b8f187893999fd7903c7a729945a.jpg" }
    ],
    videos: [
        { title: "VIP", sub: "14K Views • 12 mins", img: "https://i.postimg.cc/QCb9F1gC/1.webp" },
        { title: "VIP", sub: "23K Views • 18 mins", img: "https://i.postimg.cc/FzZdY3bv/1-460.jpg" },
        { title: "VIP", sub: "8K Views • 9 mins", img: "https://i.postimg.cc/8CkXn8P1/xv-30-t.jpg" },
        { title: "VIP", sub: "3K Views • 24 mins", img: "https://i.postimg.cc/T1Qp0Wtt/xn-24-t.jpg" },
        { title: "VIP", sub: "9K Views • 7 mins", img: "https://i.postimg.cc/kGc62KNg/6293659-90499e3-320x.jpg" },
        { title: "VIP", sub: "5K Views • 45 mins", img: "https://i.postimg.cc/NF49Km8m/alia-starr-8.jpg" },
        { title: "VIP", sub: "7K Views • 15 mins", img: "https://i.postimg.cc/L5Rg4NPs/images-(38).jpg" },
        { title: "VIP", sub: "19K Views • 32 mins", img: "https://i.postimg.cc/SRqYQD9Q/images-(39).jpg" },
        { title: "VIP", sub: "20K Views • 14 mins", img: "https://i.postimg.cc/Y0kL2bFt/images-(40).jpg" },
        { title: "VIP", sub: "4K Views • 5 mins", img: "https://i.postimg.cc/WzjqpXZj/images-(41).jpg" },
        { title: "VIP", sub: "6K Views • 21 mins", img: "https://i.postimg.cc/NFY2GpXc/images-(42).jpg" },
        { title: "VIP", sub: "15K Views • 11 mins", img: "https://i.postimg.cc/mkR1Z894/images-(43).jpg" },
        { title: "VIP", sub: "3K Views • 16 mins", img: "https://i.postimg.cc/GtQ84GPy/IMG-20260831-151829-206.jpg" },
        { title: "VIP", sub: "12K Views • 50 mins", img: "https://i.postimg.cc/8cHJ7Mdr/IMG-20260831-151841-788.jpg" },
        { title: "VIP", sub: "3K Views • 19 mins", img: "https://i.postimg.cc/WznFdgms/Lily-Starfire-Big-Boobie-Babe-In-Hot-Red-Bikini-All-Black-X8.jpg" },
        { title: "VIP", sub: "4K Views • 10 mins", img: "https://i.postimg.cc/7hVG501b/preview-mp4.jpg" },
        { title: "VIP", sub: "8K Views • 4 mins", img: "https://i.postimg.cc/6q028nV4/xn-30-p.jpg" },
        { title: "VIP", sub: "2K Views • 28 mins", img: "https://i.postimg.cc/BbgLjH5f/xn-30-t.jpg" },
        { title: "VIP", sub: "13K Views • 13 mins", img: "https://i.postimg.cc/6q028nV2/xv-30-p.jpg" },
        { title: "VIP", sub: "18K Views • 22 mins", img: "https://i.postimg.cc/cJD9pD6V/images-(32).jpg" }
    ],
    streams: [
        { title: "live", sub: "94 Watching", isLive: true, img: "https://i.postimg.cc/g2JX0gMz/2560x1440-201.webp" },
        { title: "live", sub: "85 Watching", isLive: true, img: "https://i.postimg.cc/9F1wV6BX/1661009256-8-titis-org-p-ethiopia-nude-girls-chastnaya-erotika-10.jpg" },
        { title: "live", sub: "7 Watching", isLive: true, img: "https://i.postimg.cc/bNLS87Rr/2560x1440-206.webp" },
        { title: "live", sub: "44 Watching", isLive: true, img: "https://i.postimg.cc/ZKjvZGLW/2560x1440-208.webp" },
        { title: "live", sub: "10 Watching", isLive: true, img: "https://i.postimg.cc/7YXJDFNH/2560x1440-222.webp" },
        { title: "live", sub: "3 Watching", isLive: true, img: "https://i.postimg.cc/gk4LdCKw/habesha-barbie-0029.jpg" },
        { title: "live", sub: "42 Watching", isLive: true, img: "https://i.postimg.cc/2S6b50Hz/images-(45).jpg" },
        { title: "live ", sub: "11 Watching", isLive: true, img: "https://i.postimg.cc/BQNPsrCP/images-(46).jpg" },
        { title: "live", sub: "74 Watching", isLive: true, img: "https://i.postimg.cc/SNVYqBGm/images-(47).jpg" },
        { title: "live", sub: "18 Watching", isLive: true, img: "https://i.postimg.cc/Nfb2Y3xg/images-(48).jpg" }
    ]
};

const mockChats = [
    {
        id: "miya2",
        name: "Miya",
        subTextUnread: "New message",
        subTextRead: "ሰላም እንዴት ነክ እኔን መብዳት ትፈልጋለክ? 🥹",
        time: "10:12 AM",
        img: "https://i.postimg.cc/xCgYV8j4/blackteensubmit-model-1.jpg",
        hasUnread: true,
        messages: [
            { type: "received", text: "ሰላም እንዴት ነክ እኔን መብዳት ትፈልጋለክ? 🥹", time: "10:12 AM" }
        ]
    },
    {
        id: "samri_4",
        name: "Samrawit",
        subTextUnread: "New message",
        subTextRead: "Hey bb sex ማድረግ ከፈለክ አናግረኝ ",
        time: "10:45 AM",
        img: "https://i.postimg.cc/9M1VH0Xk/xn-9-t.jpg",
        hasUnread: true,
        messages: [
            { type: "received", text: "Hey bb sex ማድረግ ከፈለክ አናግረኝ ", time: "10:45 AM" }
        ]
    }
];

// ==========================================
// 2. STATE MANAGEMENT & LIFECYCLE
// ==========================================
let currentUser = null;
let currentLang = 'en';
let generatedCode = null;
let pendingUser = null;
let isTriggerActive = false;
let hasTriggeredThisCycle = false;
let selectedChatId = null;

window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';
    }
    recalculateUnreadCount();
    changeLanguage('en');
    renderGrid('videos');

    // Global Click Dismissal for Cards & Overlays
    document.addEventListener('click', (e) => {
        const modelSheet = document.getElementById('modelDetailSheet');
        const groupSheet = document.getElementById('groupDetailSheet');

        if (modelSheet && modelSheet.style.transform === 'translateY(0px)') {
            if (!modelSheet.contains(e.target) && !e.target.closest('.card-creator')) {
                closeModelCard();
            }
        }

        if (groupSheet && groupSheet.style.transform === 'translateY(0px)') {
            if (!groupSheet.contains(e.target) && !e.target.closest('.card-group')) {
                closeGroupCard();
            }
        }
    });
});

function recalculateUnreadCount() {
    if (!currentUser) {
        updateChatBadge(0);
        return;
    }
    const unreadCount = mockChats.filter(c => c.hasUnread).length;
    updateChatBadge(unreadCount);
}

// ==========================================
// 3. NAVIGATION & ACCESS CONTROL
// ==========================================
function navigateTo(pageId, btn) {
    if ((pageId === 'chat' || pageId === 'profile') && !currentUser) {
        openAuthModal();
        return;
    }

    document.querySelectorAll('.app-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));

    if (btn) btn.classList.add('active');

    if (pageId === 'home') document.getElementById('pageHome').classList.add('active');
    if (pageId === 'chat') {
        document.getElementById('pageChat').classList.add('active');
        initCustomChatList();
    }
    if (pageId === 'profile') {
        document.getElementById('pageProfile').classList.add('active');
        updateProfileUI();
    }
}

function updateChatBadge(count) {
    let badge = document.getElementById('chatBadge');
    const chatBtn = document.querySelector('.app-nav-btn[onclick*="chat"]');
    
    if (!badge && chatBtn) {
        badge = document.createElement('span');
        badge.id = 'chatBadge';
        badge.style.cssText = "position:absolute; top:2px; right:12px; background:#9e0b0f; color:#fff; font-size:10px; font-weight:bold; border-radius:10px; padding:2px 6px; display:none;";
        chatBtn.style.position = 'relative';
        chatBtn.appendChild(badge);
    }

    if (badge) {
        if (count > 0) {
            badge.innerText = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// ==========================================
// 4. PASSWORD VISIBILITY TOGGLE
// ==========================================
function togglePasswordVisibility(inputId, iconEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    if (input.type === 'password') {
        input.type = 'text';
        iconEl.classList.remove('fa-eye');
        iconEl.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        iconEl.classList.remove('fa-eye-slash');
        iconEl.classList.add('fa-eye');
    }
}

// ==========================================
// 5. CHAT SYSTEM (ELEVATED CRIMSON UI)
// ==========================================
function initCustomChatList() {
    const chatContainer = document.getElementById('pageChat');
    if (!chatContainer) return;

    chatContainer.innerHTML = `
        <div id="chatWrapper" style="background:#0a0a0a; color:#fff; height:100dvh; min-height:100vh; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width:480px; margin:0 auto; display:flex; flex-direction:column; position:relative; overflow:hidden;">
            
            <div style="display:flex; justify-content:space-between; align-items:center; padding:16px 20px; border-bottom:1px solid #1c1c1c; background:#121212; flex-shrink:0;">
                <span style="font-size:1.3rem; font-weight:800; color:#fff; letter-spacing:-0.5px;">Direct Messages</span>
                <i class="fa-regular fa-pen-to-square" style="font-size:1.2rem; color:#b50d12; cursor:pointer;"></i>
            </div>

            <div id="chatRowsContainer" style="flex:1; overflow-y:auto; -webkit-overflow-scrolling:touch; padding:8px 0;"></div>

            <div id="singleRoomView" style="display:none; flex-direction:column; height:100dvh; background:#0a0a0a; position:fixed; top:0; left:0; right:0; bottom:0; z-index:9999; max-width:480px; margin:0 auto; overflow:hidden;">
                <div id="singleRoomHeader" style="display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid #1c1c1c; background:#121212; flex-shrink:0;"></div>
                <div id="singleRoomMessages" style="flex:1; padding:16px; overflow-y:auto; display:flex; flex-direction:column; gap:12px; -webkit-overflow-scrolling:touch;"></div>
                <form id="chatForm" onsubmit="sendCustomMessage(event)" style="padding:12px 16px; display:flex; align-items:center; gap:10px; border-top:1px solid #1c1c1c; flex-shrink:0; background:#121212; margin:0;">
                    <input type="text" id="customChatInput" placeholder="Write a message..." autocomplete="off" style="flex:1; background:#1a1a1a; border:1px solid #2d2d2d; color:#fff; padding:12px 18px; border-radius:24px; font-size:0.9rem; outline:none;">
                    <button type="submit" style="background:linear-gradient(135deg, #b50d12, #6b070a); border:none; color:#fff; font-weight:bold; font-size:0.9rem; cursor:pointer; padding:10px 18px; border-radius:24px; transition:opacity 0.2s;">Send</button>
                </form>
            </div>
        </div>
    `;

    renderChatRows();
}

function renderChatRows() {
    const listEl = document.getElementById('chatRowsContainer');
    if (!listEl) return;
    listEl.innerHTML = '';

    mockChats.forEach(chat => {
        const row = document.createElement('div');
        row.style.cssText = "display:flex; align-items:center; justify-content:space-between; padding:12px 16px; cursor:pointer; transition:background 0.2s; border-bottom:1px solid #141414;";
        row.onmouseover = () => row.style.background = "#141414";
        row.onmouseout = () => row.style.background = "transparent";
        row.onclick = () => openChatRoom(chat.id);

        const displayText = chat.hasUnread ? "New message received" : chat.subTextRead;
        const fontStyle = chat.hasUnread ? "font-weight:700; color:#b50d12;" : "font-weight:normal; color:#8e8e93;";

        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:14px; flex:1; min-width:0;">
                <div style="position:relative;">
                    <img src="${optimizeImg(chat.img, 150)}" alt="${chat.name}" style="width:52px; height:52px; border-radius:50%; object-fit:cover; display:block; flex-shrink:0;" loading="lazy" decoding="async">
                    <span style="position:absolute; bottom:2px; right:2px; width:12px; height:12px; background:#34c759; border:2px solid #0a0a0a; border-radius:50%;"></span>
                </div>
                <div style="display:flex; flex-direction:column; flex:1; min-width:0;">
                    <span style="font-weight:700; font-size:0.95rem; color:#fff;">${chat.name}</span>
                    <span style="font-size:0.85rem; ${fontStyle} white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-top:2px;">
                        ${displayText}
                    </span>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px; margin-left:12px;">
                ${chat.hasUnread ? `<span style="width:10px; height:10px; background:#b50d12; border-radius:50%; display:inline-block;"></span>` : `<span style="font-size:0.75rem; color:#666;">${chat.time}</span>`}
            </div>
        `;
        listEl.appendChild(row);
    });
}

function openChatRoom(chatId) {
    selectedChatId = chatId;
    const chat = mockChats.find(c => c.id === chatId);
    if (!chat) return;

    if (chat.hasUnread) {
        chat.hasUnread = false;
        recalculateUnreadCount();
    }

    const singleView = document.getElementById('singleRoomView');
    const header = document.getElementById('singleRoomHeader');
    
    singleView.style.display = 'flex';
    header.innerHTML = `
        <i class="fa-solid fa-chevron-left" onclick="closeChatRoom()" style="font-size:1.2rem; cursor:pointer; color:#fff; padding:4px 8px;"></i>
        <img src="${optimizeImg(chat.img, 150)}" style="width:40px; height:40px; border-radius:50%; object-fit:cover;" loading="lazy" decoding="async">
        <div style="display:flex; flex-direction:column; flex:1;">
            <span style="font-weight:700; font-size:0.95rem; color:#fff;">${chat.name}</span>
            <span style="font-size:0.75rem; color:#34c759; font-weight:600;">Active Now</span>
        </div>
    `;

    renderRoomMessages(chat);
}

function closeChatRoom() {
    document.getElementById('singleRoomView').style.display = 'none';
    selectedChatId = null;
    renderChatRows();
}

function renderRoomMessages(chat) {
    const container = document.getElementById('singleRoomMessages');
    if (!container) return;
    container.innerHTML = '';

    chat.messages.forEach(m => {
        const isSent = m.type === 'sent';
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `display:flex; flex-direction:column; align-items:${isSent ? 'flex-end' : 'flex-start'}; width:100%;`;

        const bubble = document.createElement('div');
        bubble.style.cssText = isSent ?
            "background:linear-gradient(135deg, #b50d12, #7a080c); color:#fff; padding:12px 16px; border-radius:18px 18px 2px 18px; max-width:75%; font-size:0.9rem; word-break:break-word; box-shadow: 0 2px 8px rgba(0,0,0,0.4);" :
            "background:#1c1c1e; color:#fff; padding:12px 16px; border-radius:18px 18px 18px 2px; max-width:75%; font-size:0.9rem; word-break:break-word;";

        bubble.innerText = m.text;
        wrapper.appendChild(bubble);

        if (m.vipWarning) {
            const warning = document.createElement('div');
            warning.style.cssText = "margin-top:8px; background:rgba(181, 13, 18, 0.15); border:1px solid #b50d12; color:#ff8083; padding:10px 14px; border-radius:12px; font-size:0.8rem; display:flex; align-items:center; justify-content:space-between; gap:10px; max-width:85%; width:100%; box-sizing:border-box;";
            warning.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fa-solid fa-lock" style="color:#b50d12;"></i>
                    <span>VIP membership required to chat.</span>
                </div>
                <button onclick="triggerVipNotice()" style="background:#b50d12; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:0.75rem; font-weight:bold; cursor:pointer; flex-shrink:0;">Upgrade</button>
            `;
            wrapper.appendChild(warning);
        }

        container.appendChild(wrapper);
    });

    container.scrollTop = container.scrollHeight;
}

function sendCustomMessage(e) {
    if (e) e.preventDefault();
    const input = document.getElementById('customChatInput');
    const text = input ? input.value.trim() : '';
    if (!text || !selectedChatId) return;

    if (!currentUser || !currentUser.isVip) {
        const chat = mockChats.find(c => c.id === selectedChatId);
        if (!chat) return;

        chat.messages.push({
            type: 'sent',
            text: text,
            vipWarning: true
        });

        input.value = '';
        renderRoomMessages(chat);
        return;
    }

    const chat = mockChats.find(c => c.id === selectedChatId);
    if (chat) {
        chat.messages.push({ type: 'sent', text: text });
        input.value = '';
        renderRoomMessages(chat);
    }
}

// ==========================================
// 6. BOTTOM SHEETS & VIP ANNOUNCEMENTS
// ==========================================
function triggerVipNotice() {
    closeModelCard();
    closeGroupCard();
    
    let noticeModal = document.getElementById('vipNoticeModal');
    if (!noticeModal) {
        noticeModal = document.createElement('div');
        noticeModal.id = 'vipNoticeModal';
        noticeModal.style.cssText = "position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.85); z-index:20000; display:flex; align-items:center; justify-content:center; padding:20px; backdrop-filter:blur(4px);";
        noticeModal.onclick = (e) => { if (e.target === noticeModal) closeVipNotice(); };
        document.body.appendChild(noticeModal);
    }

    noticeModal.innerHTML = `
        <div style="background:linear-gradient(180deg, #181818, #0e0e0e); border:1px solid #b50d12; border-radius:20px; padding:28px 24px; max-width:380px; width:100%; text-align:center; box-shadow:0 10px 40px rgba(181,13,18,0.25); position:relative;">
            <i class="fa-solid fa-xmark" onclick="closeVipNotice()" style="position:absolute; top:16px; right:18px; color:#8e8e93; font-size:1.2rem; cursor:pointer;"></i>
            <div style="width:64px; height:64px; background:rgba(181,13,18,0.15); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; border:1px solid #b50d12;">
                <i class="fa-solid fa-crown" style="font-size:1.8rem; color:#b50d12;"></i>
            </div>
            <h3 style="margin:0 0 10px 0; color:#fff; font-size:1.35rem; font-weight:800; letter-spacing:-0.3px;">VIP Membership Required</h3>
            <p style="margin:0 0 24px 0; color:#b0b0b0; font-size:0.9rem; line-height:1.5;">You must be an active VIP member to access private direct messaging and full group privileges.</p>
            <button onclick="closeVipNotice(); openAuthOrPayment();" style="width:100%; background:linear-gradient(135deg, #b50d12, #6b070a); color:#fff; border:none; padding:14px; border-radius:28px; font-weight:bold; font-size:0.95rem; cursor:pointer; box-shadow:0 4px 15px rgba(181,13,18,0.4); transition:transform 0.2s;">
                Join VIP Membership
            </button>
        </div>
    `;

    noticeModal.style.display = 'flex';
}

function closeVipNotice() {
    const noticeModal = document.getElementById('vipNoticeModal');
    if (noticeModal) noticeModal.style.display = 'none';
}

function openAuthOrPayment() {
    if (!currentUser) openAuthModal();
    else openPaymentModal();
}

function openModelCard(model) {
    let sheet = document.getElementById('modelDetailSheet');
    if (!sheet) {
        sheet = document.createElement('div');
        sheet.id = 'modelDetailSheet';
        sheet.style.cssText = "position:fixed; bottom:0; left:0; right:0; height:50vh; background:#121212; border-top-left-radius:24px; border-top-right-radius:24px; border-top:1px solid #282828; z-index:10000; display:flex; flex-direction:column; align-items:center; padding:20px; box-shadow:0 -10px 40px rgba(0,0,0,0.9); transition:transform 0.3s cubic-bezier(0.1, 0.9, 0.2, 1); transform:translateY(100%); max-width:480px; margin:0 auto;";
        document.body.appendChild(sheet);
    }

    sheet.innerHTML = `
        <div style="width:40px; height:4px; background:#333; border-radius:2px; margin-bottom:15px; cursor:pointer;" onclick="closeModelCard()"></div>
        <div style="position:relative; margin-bottom:12px;">
            <img src="${optimizeImg(model.img, 200)}" style="width:90px; height:90px; border-radius:50%; object-fit:cover; border:2px solid #b50d12;" loading="lazy" decoding="async">
            <span style="position:absolute; bottom:4px; right:4px; width:14px; height:14px; background:${model.isOnline ? '#34c759' : '#8e8e93'}; border:2px solid #121212; border-radius:50%;"></span>
        </div>
        <h3 style="margin:0; font-size:1.3rem; color:#fff;">${model.title}</h3>
        <p style="margin:6px 0; color:#a0a0a0; font-size:0.9rem;">
            <i class="fa-solid fa-location-dot" style="color:#b50d12;"></i> ${model.city || "Addis Ababa"} • ${model.age || 22} Y/O
        </p>
        <span style="background:#1e1e1e; color:#ccc; font-size:0.8rem; padding:4px 12px; border-radius:12px; margin-bottom:20px;">${model.sub}</span>
        
        <button onclick="triggerVipNotice()" style="width:100%; background:linear-gradient(135deg, #b50d12, #6b070a); color:#fff; border:none; padding:13px; border-radius:25px; font-weight:bold; font-size:0.95rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 15px rgba(181,13,18,0.3);">
            <i class="fa-solid fa-comments"></i> Chat Now
        </button>
    `;

    setTimeout(() => { sheet.style.transform = 'translateY(0)'; }, 10);
}

function closeModelCard() {
    const sheet = document.getElementById('modelDetailSheet');
    if (sheet) sheet.style.transform = 'translateY(100%)';
}

function openGroupCard(group) {
    let sheet = document.getElementById('groupDetailSheet');
    if (!sheet) {
        sheet = document.createElement('div');
        sheet.id = 'groupDetailSheet';
        sheet.style.cssText = "position:fixed; bottom:0; left:0; right:0; height:45vh; background:#121212; border-top-left-radius:24px; border-top-right-radius:24px; border-top:1px solid #282828; z-index:10000; display:flex; flex-direction:column; align-items:center; padding:20px; box-shadow:0 -10px 40px rgba(0,0,0,0.9); transition:transform 0.3s cubic-bezier(0.1, 0.9, 0.2, 1); transform:translateY(100%); max-width:480px; margin:0 auto;";
        document.body.appendChild(sheet);
    }

    sheet.innerHTML = `
        <div style="width:40px; height:4px; background:#333; border-radius:2px; margin-bottom:15px; cursor:pointer;" onclick="closeGroupCard()"></div>
        <img src="${optimizeImg(group.img, 200)}" style="width:80px; height:80px; border-radius:16px; object-fit:cover; margin-bottom:12px; border:1px solid #282828;" loading="lazy" decoding="async">
        <h3 style="margin:0; font-size:1.2rem; color:#fff;">${group.title}</h3>
        <p style="margin:6px 0 20px 0; color:#8e8e93; font-size:0.85rem;"><i class="fa-solid fa-users"></i> ${group.sub}</p>
        
        <button onclick="triggerVipNotice()" style="width:100%; background:linear-gradient(135deg, #b50d12, #6b070a); color:#fff; border:none; padding:13px; border-radius:25px; font-weight:bold; font-size:0.95rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 15px rgba(181,13,18,0.3);">
            <i class="fa-solid fa-user-plus"></i> Join Group
        </button>
    `;

    setTimeout(() => { sheet.style.transform = 'translateY(0)'; }, 10);
}

function closeGroupCard() {
    const sheet = document.getElementById('groupDetailSheet');
    if (sheet) sheet.style.transform = 'translateY(100%)';
}

// ==========================================
// 7. PROFILE & VIP AVATAR RESTRICTIONS
// ==========================================
function updateProfileUI() {
    const userImg = (currentUser && currentUser.pfp && currentUser.isVip) ? currentUser.pfp : DEFAULT_AVATAR;
    const name = currentUser ? currentUser.name : "Guest User";
    const username = currentUser ? `@${currentUser.identifier.split('@')[0]}` : "@guest";

    const profilePfpEl = document.getElementById('profileAvatarImg');
    if (profilePfpEl) profilePfpEl.src = userImg;

    document.getElementById('profileName').innerText = name;
    document.getElementById('profileUsername').innerText = username;
    document.getElementById('headerAuthBtnText').innerText = currentUser ? name.split(' ')[0] : "Login / Sign Up";
}

function handleProfilePfpUpload(input) {
    if (!currentUser || !currentUser.isVip) {
        triggerVipNotice();
        return;
    }

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.pfp = e.target.result;
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            updateProfileUI();
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function saveProfile(e) {
    e.preventDefault();
    const newName = document.getElementById('editNameInput').value;
    const newBio = document.getElementById('editBioInput').value;
    const pfpUrlInput = document.getElementById('editPfpUrlInput');

    if (currentUser) {
        if (newName) currentUser.name = newName;
        if (pfpUrlInput && pfpUrlInput.value.trim() !== '') {
            if (!currentUser.isVip) {
                triggerVipNotice();
                return;
            }
            currentUser.pfp = pfpUrlInput.value.trim();
        }
        localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    }

    if (newBio) document.getElementById('profileBio').innerText = newBio;
    toggleEditProfile();
    updateProfileUI();
}

function toggleEditProfile() {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    const form = document.getElementById('editProfileForm');
    if (form) {
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    }
}

// ==========================================
// 8. UI SETTINGS & LOCALIZATION
// ==========================================
function toggleMenu() { document.getElementById('dropdownMenu').classList.toggle('show'); }

window.onclick = function(event) {
    if (!event.target.closest('.hamburger-menu')) {
        const menu = document.getElementById('dropdownMenu');
        if (menu && menu.classList.contains('show')) menu.classList.remove('show');
    }
};

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const dict = translationDictionary[currentLang];
    document.getElementById('themeLabel').innerHTML = isLight ? dict.themeLight : dict.themeDark;
}

function changeLanguage(lang) {
    currentLang = lang;
    const dict = translationDictionary[lang];

    document.getElementById('navCreators').innerText = dict.navCreators;
    document.getElementById('navGroups').innerText = dict.navGroups;
    document.getElementById('navVideos').innerText = dict.navVideos;
    document.getElementById('navLive').innerText = dict.navLive;
    document.getElementById('langLabel').innerText = dict.langLabel;
    
    const isLight = document.body.classList.contains('light-theme');
    document.getElementById('themeLabel').innerHTML = isLight ? dict.themeLight : dict.themeDark;

    document.getElementById('vipLabel').innerHTML = dict.vipLabel;
    document.getElementById('aboutLabel').innerHTML = dict.aboutLabel;
    document.getElementById('logoutLabel').innerHTML = dict.logoutLabel;

    document.getElementById('authModalTitle').innerText = dict.authTitle;
    document.getElementById('loginTabBtn').innerText = dict.loginTab;
    document.getElementById('signupTabBtn').innerText = dict.signupTab;
    document.getElementById('loginIdentifierLabel').innerText = dict.loginIdLabel;
    document.getElementById('loginPasswordLabel').innerText = dict.loginPwdLabel;
    document.getElementById('loginSubmitBtn').innerText = dict.loginSubmit;
    
    document.getElementById('signupNameLabel').innerText = dict.signupNameLabel;
    document.getElementById('signupIdentifierLabel').innerText = dict.signupIdLabel;
    document.getElementById('signupPasswordLabel').innerText = dict.signupPwdLabel;
    document.getElementById('signupConfirmPasswordLabel').innerText = dict.signupConfirmLabel;
    document.getElementById('signupSubmitBtn').innerText = dict.signupSubmit;
    
    document.getElementById('otpLabel').innerText = dict.verifyOtpLabel;
    document.getElementById('verifySubmitBtn').innerText = dict.verifySubmit;

    document.getElementById('paymentModalTitle').innerText = dict.paymentTitle;
    document.getElementById('paymentInstructions').innerText = dict.paymentInst;
    document.getElementById('telebirrAccLabel').innerText = dict.teleLabel;
    document.getElementById('cbeAccLabel').innerText = dict.cbeLabel;
    document.getElementById('copyTeleBtn').innerHTML = dict.copyBtn;
    document.getElementById('copyCbeBtn').innerHTML = dict.copyBtn;
    document.getElementById('fileNameDisplay').innerHTML = dict.uploadLabel;
    document.getElementById('verifyBtn').innerHTML = dict.verifyPayBtn;

    document.getElementById('aboutModalTitle').innerText = dict.aboutTitle;
    document.getElementById('aboutText').innerText = dict.aboutText;
}

// ==========================================
// 9. GRID RENDERING & LAYOUT
// ==========================================
function switchCategory(category, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(category);
    resetTriggerUI();
}

function renderGrid(category) {
    const grid = document.getElementById('contentGrid');
    if(!grid) return;
    grid.innerHTML = '';
    
    if (category === 'streams') {
        grid.classList.add('grid-lives');
    } else {
        grid.classList.remove('grid-lives');
    }
    
    data[category].forEach(item => {
        const card = document.createElement('div');

        if (category === 'creators') {
            card.className = 'card-creator';
            card.onclick = () => openModelCard(item);
            card.innerHTML = `
                <div class="creator-pfp-wrapper">
                    <img src="${optimizeImg(item.img, 200)}" class="creator-pfp" alt="${item.title}" loading="lazy" decoding="async" width="80" height="80">
                    <span class="status-badge ${item.isOnline ? 'online' : 'offline'}"></span>
                </div>
                <div class="creator-name">${item.title}</div>
                <div class="creator-location" style="font-size:0.75rem; color:#8e8e93; margin:2px 0;"><i class="fa-solid fa-location-dot"></i> ${item.city}</div>
                <div class="creator-followers">${item.sub}</div>
            `;
        } else if (category === 'channels') {
            card.className = 'card-group';
            card.onclick = () => openGroupCard(item);
            card.innerHTML = `
                <img src="${optimizeImg(item.img, 200)}" class="group-pfp" alt="${item.title}" loading="lazy" decoding="async" width="80" height="80">
                <div class="group-info">
                    <div class="group-title">${item.title}</div>
                    <div class="group-sub">${item.sub}</div>
                </div>
            `;
        } else if (category === 'videos') {
            card.className = 'card-video';
            card.onclick = triggerVipNotice;
            card.innerHTML = `
                <div class="video-thumb-container">
                    <img src="${optimizeImg(item.img, 400)}" class="video-thumb" alt="${item.title}" loading="lazy" decoding="async">
                </div>
                <div class="video-info">
                    <div class="video-title">${item.title}</div>
                    <div class="video-views">${item.sub}</div>
                </div>
            `;
        } else if (category === 'streams') {
            card.className = 'card-stream';
            card.onclick = triggerVipNotice;
            card.style.cssText = "display:flex; flex-direction:column; overflow:hidden; text-align:left; position:relative;";
            card.innerHTML = `
                <span class="live-blinking-tag" style="position:absolute; top:8px; left:8px; z-index:2;"><span class="blinking-dot"></span> LIVE</span>
                <img src="${optimizeImg(item.img, 400)}" class="stream-thumb" alt="${item.title}" style="width:100%; display:block;" loading="lazy" decoding="async">
                <div class="stream-info" style="padding:10px 12px; text-align:left; box-sizing:border-box; width:100%;">
                    <div class="card-title" style="font-weight:700; font-size:0.95rem; margin-bottom:4px; text-align:left; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
                    <div class="card-sub" style="font-size:0.8rem; color:var(--text-muted); text-align:left;">${item.sub}</div>
                </div>
            `;
        }

        grid.appendChild(card);
    });
}

// Scroll Refresh (throttled with requestAnimationFrame to avoid layout thrashing)
let scrollTicking = false;
window.onscroll = function() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 40) {
            if (!hasTriggeredThisCycle && !isTriggerActive) {
                executeBottomRefreshTrigger();
            }
        }
        scrollTicking = false;
    });
};

function executeBottomRefreshTrigger() {
    isTriggerActive = true;
    hasTriggeredThisCycle = true;

    const container = document.getElementById('bottomActionContainer');
    const spinner = document.getElementById('bottomSpinner');
    const alertBox = document.getElementById('vipAlertBox');
    const textEl = document.getElementById('vipAlertText');
    const btnEl = document.getElementById('bottomActionBtn');
    const dict = translationDictionary[currentLang];

    if (!container) return;
    container.style.display = 'flex';
    spinner.style.display = 'block';
    alertBox.style.display = 'none';

    setTimeout(() => {
        spinner.style.display = 'none';
        alertBox.style.display = 'flex';

        if (!currentUser) {
            textEl.innerText = dict.bottomTextLoggedOut;
            btnEl.innerText = dict.bottomBtnLoggedOut;
        } else {
            textEl.innerText = dict.bottomTextLoggedIn;
            btnEl.innerText = dict.bottomBtnLoggedIn;
        }

        isTriggerActive = false;
    }, 1200);
}

function resetTriggerUI() {
    hasTriggeredThisCycle = false;
    isTriggerActive = false;
    const container = document.getElementById('bottomActionContainer');
    if (container) container.style.display = 'none';
}

function handleBottomActionClick() {
    resetTriggerUI();
    if (!currentUser) openAuthModal();
    else openPaymentModal();
}

// ==========================================
// 10. AUTHENTICATION & MODALS
// ==========================================
function openAuthModal() { document.getElementById('authModal').style.display = 'flex'; }
function closeAuthModal() { document.getElementById('authModal').style.display = 'none'; resetAuthForms(); }

function resetAuthForms() {
    document.getElementById('loginError').style.display = 'none';
    document.getElementById('passwordComplexityError').style.display = 'none';
    document.getElementById('passwordMatchError').style.display = 'none';
    document.getElementById('otpError').style.display = 'none';
    document.getElementById('verifyCodeForm').style.display = 'none';
}

function toggleAuthForm(type) {
    resetAuthForms();
    if (type === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginTabBtn').classList.add('active');
        document.getElementById('signupTabBtn').classList.remove('active');
    } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
        document.getElementById('signupTabBtn').classList.add('active');
        document.getElementById('loginTabBtn').classList.remove('active');
    }
}

function validatePassword(pwd) { return pwd.length >= 6 && /[a-zA-Z]/.test(pwd) && /[0-9]/.test(pwd); }

function handleSignupSubmit(e) {
    e.preventDefault();
    resetAuthForms();

    const name = document.getElementById('signupName').value.trim();
    const identifier = document.getElementById('signupIdentifier').value.trim();
    const pwd = document.getElementById('signupPassword').value;
    const confirmPwd = document.getElementById('signupConfirmPassword').value;

    if (!validatePassword(pwd)) {
        document.getElementById('passwordComplexityError').style.display = 'block';
        return;
    }

    if (pwd !== confirmPwd) {
        document.getElementById('passwordMatchError').style.display = 'block';
        return;
    }

    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    pendingUser = { name, identifier, password: pwd, pfp: null, isVip: false };

    document.getElementById('signupForm').style.display = 'none';
    const verifyForm = document.getElementById('verifyCodeForm');
    verifyForm.style.display = 'block';

    document.getElementById('verifyInstructions').innerHTML = `<strong>Verification Code:</strong> <span style="font-size: 1.2rem; color: #b50d12; font-weight: 800;">${generatedCode}</span><br>Enter this code below to activate your account.`;
}

function handleVerifyCodeSubmit(e) {
    e.preventDefault();
    const enteredCode = document.getElementById('otpCode').value.trim();

    if (enteredCode === generatedCode && pendingUser) {
        let users = JSON.parse(localStorage.getItem('registeredUsers') || "[]");
        users.push(pendingUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        currentUser = pendingUser;
        localStorage.setItem('loggedInUser', JSON.stringify(pendingUser));

        recalculateUnreadCount();
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';

        closeAuthModal();
        openPaymentModal();
    } else {
        document.getElementById('otpError').style.display = 'block';
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    resetAuthForms();

    const identifier = document.getElementById('loginIdentifier').value.trim();
    const pwd = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('registeredUsers') || "[]");
    const foundUser = users.find(u => u.identifier === identifier && u.password === pwd);

    if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

        recalculateUnreadCount();
        updateProfileUI();
        document.getElementById('logoutBtn').style.display = 'flex';

        closeAuthModal();
        openPaymentModal();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('loggedInUser');
    updateChatBadge(0);
    updateProfileUI();
    document.getElementById('logoutBtn').style.display = 'none';
    navigateTo('home', document.querySelector('.app-nav-btn[onclick*="home"]'));
    alert("Logged out successfully.");
}

// ==========================================
// 11. PAYMENT & OCR VERIFICATION
// ==========================================
function openPaymentModal() { document.getElementById('paymentModal').style.display = 'flex'; }
function closePaymentModal() { document.getElementById('paymentModal').style.display = 'none'; }
function openAboutUs() { document.getElementById('aboutModal').style.display = 'flex'; }
function closeAboutModal() { document.getElementById('aboutModal').style.display = 'none'; }

function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

function handleFileSelect() {
    const input = document.getElementById('receiptInput');
    if(input.files.length > 0) {
        document.getElementById('fileNameDisplay').innerHTML = "<i class='fa-solid fa-file-image'></i> " + input.files[0].name;
    }
}

// Tesseract is a large OCR library only needed when someone uploads a payment
// screenshot. Loading it upfront in <head> blocked the whole page from rendering
// until it finished downloading. Instead we load it on demand, the first time
// runVerification() actually needs it.
let tesseractLoadPromise = null;
function loadTesseract() {
    if (window.Tesseract) return Promise.resolve();
    if (tesseractLoadPromise) return tesseractLoadPromise;
    tesseractLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load OCR library'));
        document.head.appendChild(script);
    });
    return tesseractLoadPromise;
}

async function runVerification() {
    const input = document.getElementById('receiptInput');
    const status = document.getElementById('verifyStatus');

    if (!input.files.length) {
        alert("Please attach a screenshot of your payment first.");
        return;
    }

    status.innerText = "Loading verification tool...";

    try {
        await loadTesseract();
        status.innerText = "Processing screenshot OCR... Please wait.";

        const file = input.files[0];
        const { data: { text } } = await Tesseract.recognize(file, 'eng');
        const cleanText = text.toLowerCase();

        const hasAmount = cleanText.includes("1000") || cleanText.includes("1,000");
        const hasAcc = cleanText.includes("0950297018") || cleanText.includes("1000783952045");

        if (hasAmount && hasAcc) {
            if (currentUser) {
                currentUser.isVip = true;
                localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            }
            status.innerHTML = "<span style='color: #34c759; font-weight: bold;'>Verification Successful! VIP Granted. Redirecting...</span>";
            setTimeout(() => {
                window.location.href = "https://t.me/+YourPrivateTelegramInviteLink";
            }, 1500);
        } else {
            status.innerHTML = "<span style='color: #b50d12;'>❌ Verification Failed. Amount (1000 ETB) or receiver detail mismatch.</span>";
        }
    } catch (err) {
        console.error(err);
        status.innerText = "Error reading image. Please upload a clear receipt.";
    }
}


