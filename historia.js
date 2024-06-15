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

// Función para cargar los datos del usuario por ID
function cargarDatosUsuario(id) {
    var tabla = document.getElementById('tabla');
    var query = db.collection("users").doc(id);

    query.get().then(function (doc) {
        if (doc.exists) {
            // Mostrar los datos en la tabla
            var data = doc.data();
            var html = `
                <tr>
                    <td>${doc.id}</td>
                    <td>${data.nombre}</td>
                    <td>${data.dpi}</td>
                    <td>${data.telefono}</td>
                    <td>${data.domicilio}</td>
                    <td>${data.genero}</td>
                    <td>${data.actividad}</td>
                    <td>${data.aforo}</td>
                    <td>${data.lugarAsignado}</td>

                    <td>
                        <button class="btn btn-info" id="boton" type="submit" onclick="window.location.href='editar.php?id=${doc.id}'">Editar</button>
                        <button class="btn btn-eliminar btn-danger" onclick="eliminarUsuario('${doc.id}')">Eliminar</button>
                    </td>
                </tr>
            `;
            tabla.innerHTML = html;
        } else {
            // Manejar el caso donde no se encuentra el documento
            console.log("No existe ningún documento con el ID especificado.");
            alert("No existe ningún documento con el ID especificado.");
        }
    }).catch(function (error) {
        console.log("Error al obtener el documento:", error);
        alert("Error al obtener el documento: " + error);
    });
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    if (confirm("¿Estás seguro que deseas eliminar este registro?")) {
        db.collection("users").doc(id).delete().then(function () {
            console.log("Documento eliminado correctamente.");
            document.getElementById('tabla').innerHTML = ''; // Limpiar la tabla después de eliminar
            alert("Documento eliminado correctamente.");
        }).catch(function (error) {
            console.error("Error al eliminar el documento: ", error);
            alert("Error al eliminar el documento: " + error);
        });
    }
}

// Obtener el formulario y añadir el evento de envío
document.getElementById('users').addEventListener('submit', function (e) {
    e.preventDefault();
    var idUsuario = document.getElementById('idUsuario').value;
    if (idUsuario) {
        cargarDatosUsuario(idUsuario);
    } else {
        alert('Por favor, ingrese un ID válido.');
    }
});
