// Variabel CSS
const rootStyles    = getComputedStyle(document.documentElement);
let warnaUtama      = rootStyles.getPropertyValue('--warna-utama').trim();
let warnaBorder     = rootStyles.getPropertyValue('--warna-border').trim();
let warnaText       = rootStyles.getPropertyValue('--warna-text').trim();
let warnaJudulText  = rootStyles.getPropertyValue('--warna-judul-text').trim();
let warnaGaris      = rootStyles.getPropertyValue('--warna-garis').trim();
let warnaGarisVanta = rootStyles.getPropertyValue('--warna-garis-vanta').trim();
let warnaBackground = rootStyles.getPropertyValue('--warna-background').trim();

function updateColors() {
const rootStyles = getComputedStyle(document.documentElement);
  warnaUtama      = rootStyles.getPropertyValue('--warna-utama').trim();
  warnaBorder     = rootStyles.getPropertyValue('--warna-border').trim();
  warnaText       = rootStyles.getPropertyValue('--warna-teks').trim();
  warnaJudulText  = rootStyles.getPropertyValue('--warna-judul-text').trim();
  warnaGaris      = rootStyles.getPropertyValue('--warna-garis').trim();
  warnaGarisVanta = rootStyles.getPropertyValue('--warna-garis-vanta').trim();
  warnaBackground = rootStyles.getPropertyValue('--warna-background').trim();
}

// Variabel Js Global
let isGelap = true;

// Fungsi vendor vanta.js
let vantaEffect = VANTA.NET({
  el: "#backgroundWeb",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: warnaGarisVanta,
  backgroundColor: warnaBackground,
  points: 16.00,
  maxDistance: 20.00,
  spacing: 20.00
});
                
// Fungsi tema
function tema(lihatDataTema) {
  const temaDipilih = lihatDataTema.dataset.tema

  switch (temaDipilih) {
  case "cyber":
  document.documentElement.className = "theme-cyber";
  updateColors();
  break;
  
  case "hacker":
  document.documentElement.className = "theme-hacker";
  updateColors();
  break;
  
  case "sunset":
  document.documentElement.className = "theme-sunset";
  updateColors();
  break;

  case "ocean":
  document.documentElement.className = "theme-ocean";
  updateColors();
  break;

  case "steel":
  document.documentElement.className = "theme-steel";
  updateColors();
  break;
  
  default:
  document.documentElement.className = "";
  updateColors();
  break;
}
  vantaEffect.setOptions({
  color: warnaGarisVanta,
  backgroundColor: warnaBackground
});

    isGelap = !isGelap; // toggle status
};



// Rangka fungsi js observer
// const observer = new IntersectionObserver(callback);
// observer.observe(elementHTML1);
// observer.observe(elementHTML2);
// observer.observe(elementHTML3);
// dst
  
const observer = new IntersectionObserver(selected => {
  selected.forEach(selectedClass => {
    if (selectedClass.isIntersecting) {

      if (selectedClass.target.matches(".glass")){
        selectedClass.target.classList.add("tampil");
      }
      
      else if (selectedClass.target.matches(".progress-bar")){
      selectedClass.target.classList.add("tampil");
      selectedClass.target.classList.add("fillBar");
      }
    }
  });
});

document.querySelectorAll(".glass").forEach(selected => observer.observe(selected));
document.querySelectorAll(".progress-bar").forEach(selected => observer.observe(selected));



// Fungsi IIFE (Immediately Invoked Function Expression). Pengganti DOM content loaded
(() => {

// Terima data chart dari server
const lihatPaket= document.getElementById('radarChart');
    const dataRadar = JSON.parse(lihatPaket.dataset.chart);
    const datalabels = JSON.parse(lihatPaket.dataset.labels);
    console.log("UJI COBA PRINT DATA SERVER:", dataRadar, datalabels);
    
// Buat chart
new Chart(lihatPaket, {                
type: 'radar',
  data: {
    labels: datalabels,
    datasets: [
      {
        label: 'Allocated Budget',
        data: dataRadar,
        borderColor: '#817f7fff',
        backgroundColor: '#ffffff13',
        borderWidth: 1,
        pointRadius: 2
      }
    ]
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 100
        },
        angleLines: {
          display: false, 
          color: '#ffffffff'
        },
        grid: {
          color: '#ffffffff'
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
  }
);

})();