// Modal
function abrirModal() { document.getElementById('meuModal').style.display = 'flex'; }
function fecharModal() { document.getElementById('meuModal').style.display = 'none'; }

// Música
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = true;
music.volume = 0.5;
musicToggle.addEventListener('click', ()=>{
    if(isPlaying){ music.pause(); musicToggle.textContent='🎶 Tocar Música'; }
    else { music.play(); musicToggle.textContent='🎵 Pausar Música'; }
    isPlaying = !isPlaying;
});
