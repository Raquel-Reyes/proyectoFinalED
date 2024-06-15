// Configuración de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBq4veitAhOehthB7K3pk_gwgmanSiFfJA",
    authDomain: "proyecto-final---ed.firebaseapp.com",
    projectId: "proyecto-final---ed",
    storageBucket: "proyecto-final---ed.appspot.com",
    messagingSenderId: "936639407006",
    appId: "1:936639407006:web:e63ae85f8f19dc5f402c8f",
    measurementId: "G-J5H4C52MNQ"
};
// Inicializar Firebase

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Validar la longitud de los campos de entrada
function validarLongitud(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
// Función para actualizar los datos del usuario
function actualizarDatosUsuario() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    var nombre = document.getElementById('nombre').value;
    var dpi = document.getElementById('dpi').value;
    var telefono = document.getElementById('telefono').value;
    var domicilio = document.getElementById('domicilio').value;
    var genero = document.getElementById('genero').value;
    var actividad = document.getElementById('actividad').value;

    db.collection("users").doc(userId).update({
        nombre: nombre,
        dpi: dpi,
        telefono: telefono,
        domicilio: domicilio,
        genero: genero,

        actividad: actividad,
        
    }).then(function() {
        alert("Datos actualizados correctamente.");
        window.location.href = 'historial.php';
    }).catch(function(error) {
        console.error("Error al actualizar el documento: ", error);
        alert("Error al actualizar el documento: " + error);
    });
}

// Función para guardar datos
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var dpi = document.getElementById('dpi').value;
    var domicilio = document.getElementById('domicilio').value;
    var telefono = document.getElementById('telefono').value;
    var genero = document.getElementById('genero').value;
    var actividad = document.getElementById('actividad').value;

    // Validar que los campos requeridos no estén vacíos
    if (!nombre || !dpi || dpi.length !== 13 || telefono.length !== 8 || !actividad) {
        alert('Por favor, completa correctamente todos los campos.');
        return;
    }

    // Verificar si hay lugares disponibles para la actividad seleccionada
    var actividadRef = db.collection('actividades').doc(actividad);
    db.runTransaction(function(transaction) {
        return transaction.get(actividadRef).then(function(actividadDoc) {
            if (!actividadDoc.exists) {
                throw "La actividad seleccionada no existe.";
            }

            var actividadData = actividadDoc.data();
            var lugaresDisponibles = actividadData.lugares_disponibles;
            if (lugaresDisponibles.length === 0) {
                throw "No hay lugares disponibles para esta actividad.";
            }

            // Tomar el primer lugar disponible y guardarlo para el usuario
            var lugarAsignado = lugaresDisponibles.shift();

            // Guardar los datos del usuario
            return db.collection("users").add({
                nombre: nombre,
                dpi: dpi,
                domicilio: domicilio,
                telefono: telefono,
                genero: genero,
                actividad: actividadData.nombre,
                aforo: actividadData.aforo, // Usar la dirección de la actividad

                lugarAsignado: lugarAsignado
            }).then(function(docRef) {
                // Actualizar los lugares disponibles en Firestore
                transaction.update(actividadRef, { lugares_disponibles: lugaresDisponibles });
                console.log("Document written with ID: ", docRef.id);
                // Limpiar los campos del formulario
                document.getElementById('nombre').value = '';
                document.getElementById('dpi').value = '';
                document.getElementById('domicilio').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('genero').value = '';
                document.getElementById('actividad').value = '';
                alert('Usuario registrado correctamente. Actividad: ' + actividadData.nombre + ', Dirección: ' + actividadData.aforo + ', Lugares restante: ' + lugaresDisponibles.length);
            });
        });
    }).catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Error adding document: " + error);
    });
}
