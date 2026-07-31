/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Memastikan Tailwind membaca semua file React kamu
    ],
    theme: {
        extend: {
            colors: {
                // Palet Warna Warm & Cozy
                cozy: {
                    bg: '#1C1917',        // Background utama (Dark Espresso / Stone-900)
                    card: '#292524',      // Background kartu/box (Stone-800)
                    border: '#44403C',    // Warna garis/border (Stone-700)
                    text: '#FAFAF9',      // Teks utama / Putih hangat (Stone-50)
                    muted: '#A8A29E',     // Teks sekunder / abu-abu hangat (Stone-400)
                },
                brand: {
                    amber: '#F59E0B',     // Warna aksen emas/amber
                    terracotta: '#C2410C',// Warna aksen oranye hangat
                    cinnamon: '#9A3412',  // Warna aksen cokelat kemerahan
                }
            },
        },
    },
    plugins: [],
}