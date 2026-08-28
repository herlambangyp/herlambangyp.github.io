import { bahasa, gantiBahasa } from "./bahasa.js"
import { loadHTML } from "./perakit.js"
import { initTheme } from "./tema.js"

// load file (Jika buat komponen baru, masukan disini. Path diambil dari lokasi index.html)
// Template : loadHTML("id dari div", "nama dan lokasi file")
await loadHTML("header", "src/komponen/header.html")
await loadHTML("judul", "src/komponen/judul.html")
await loadHTML("portofolio", "src/komponen/portofolio.html")
await loadHTML("service", "src/komponen/service.html")
await loadHTML("footer", "src/komponen/footer.html")

// Set tema halaman
initTheme()

// Tombol Bahasa
tombolId.onclick=o=>{gantiBahasa('id')}
tombolEn.onclick=o=>{gantiBahasa('en')}
bahasa()

// Setup icon
lucide.createIcons()
