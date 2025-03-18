document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    const dataDoEvento = new Date('2025-04-12 23:59:59')
    const timeStampDoEvento = dataDoEvento.getTime()

    const intervalo = setInterval(() => atualizaContador(dataDoEvento, timeStampDoEvento, intervalo), 1000);
})

function atualizaContador(dataDoEvento, timeStampDoEvento, intervalo) {
    const dataAtual = new Date()
    const timeStampAtual = dataAtual.getTime()

    if (distanciaAteOEvento < 0) {
        clearInterval(intervalo)
        document.getElementById('contador').innerHTML = 'Expirado'
    }
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual 

    const diasMs = 1000 * 60 * 60 * 24
    const horaMs = 1000 * 60 * 60
    const minutosMs = 1000 * 60

    const dias = Math.floor(distanciaAteOEvento / diasMs)
    const horas = Math.floor((distanciaAteOEvento % diasMs) / horaMs)
    const minutos = Math.floor((distanciaAteOEvento % horaMs) / minutosMs)
    const segundos = Math.floor((distanciaAteOEvento % minutosMs) / 1000)

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`
}