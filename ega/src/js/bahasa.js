let basaDevice =navigator.language.split("-")[0]

export function bahasa() {
    document.querySelectorAll("[data-id]").forEach(e => {
        e.textContent = setBahasa(e.dataset.id,e.dataset.en,)
    })
}

function setBahasa(indo, en){
    switch (cekBahasa()) {
        case 'id':
        return indo
        default:
        return en
    }

}

export function gantiBahasa(lang=basaDevice) {
    let url = new URL(window.location.href)
    url.searchParams.set("lang", lang)
    history.replaceState({}, "", url)
    bahasa()
}

function cekBahasa() {

    let params = new URLSearchParams(window.location.search),
    langURL = params.get("lang")

    // bahasa berdasakran url ?lang=
    if (langURL === "id") return "id"
    if (langURL === "en") return "en"

    // klo di url gada lang, ubah bahasa sesuai device user
    if (basaDevice === "id") {
        return basaDevice
    }

    // Default
    return "en"
}