document.addEventListener('DOMContentLoaded', function() {
    console.log('Hasta aqui funciona bien.')
    const lat = 20.617893; 
    const lng =  -97.818094;
    const map = L.map('map').setView([lat, lng ], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"> openstreetmap</a> contributors'
    }).addTo(map);

    // Añadir marcador inicial al mapa
    const marker = L.marker([20.617893,  -97.818094], { 
        draggable: true,
        autoPan:true
     }).addTo(map);


    const currentDate = new Date();
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    localStorage.setItem('lastVisitDate', currentDate.toString());
    const lastVisitMessageDiv = document.getElementById('lastVisitMessage');
    if (lastVisitDate) {
        lastVisitMessageDiv.innerText = `Última fecha de vista del mapa: ${lastVisitDate}`;
    } else {
        lastVisitMessageDiv.innerText = 'Esta es tu primera visita al mapa.';
    }
   
 


    // Función para actualizar la información de la calle
    function actualizarInformacionCalle(latlng) {
        const geocodeService = L.esri.Geocoding.geocodeService();
        geocodeService.reverse().latlng(latlng).run(function (error, resultado) {
            if (error) {
                console.error(error);
                return;
            }

            // Actualizar el popup del marcador con la dirección
            marker.bindPopup(`<b>Dirección:</b> ${resultado.address.Match_addr}`).openPopup();

            // También puedes actualizar otros elementos del DOM
            const calleElement = document.querySelector('.calle');
            const mapaElement = document.querySelector('#mapa');
            const latElement = document.querySelector('#lat');
            const lngElement = document.querySelector('#lng');

            if (calleElement) calleElement.textContent = resultado.address.Address || '';
            if (mapaElement) mapaElement.value = resultado.address.Address || '';
            if (latElement) latElement.value = resultado.latlng.lat || '';
            if (lngElement) lngElement.value = resultado.latlng.lng || '';
        });
    }

    // Llama a la función para actualizar la información de la calle cuando se carga la página
    const latlng = marker.getLatLng();
    actualizarInformacionCalle(latlng);

    // Actualiza el contenido del popup antes de la primera vez que se muestra
    marker.once('popupopen', function () {
        const latlng = marker.getLatLng();
        actualizarInformacionCalle(latlng);
    });

    // Manejador de eventos para el evento dragend del marcador
    marker.on('dragend', function (event) {
        const marker = event.target;
        const latlng = marker.getLatLng();

        // Llama a la función para actualizar la información de la calle con las nuevas coordenadas
        actualizarInformacionCalle(latlng);
    });
});
