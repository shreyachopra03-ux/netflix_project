export const LOGO = "/netflix-logo.png";

export const USER_AVATAR = "/user-icon.png";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"

export const API_OPTIONS = {
       method: 'GET',
       headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
       },
    };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"}
]

