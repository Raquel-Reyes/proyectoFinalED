<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Usuario</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-firestore.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h2>Editar Usuario</h2>
        <form id="editarForm" onsubmit="actualizarDatosUsuario(); return false;">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required>
            </div>
            <div class="form-group">
                <label for="dpi">DPI:</label>
                <input type="number" class="form-control" id="dpi" placeholder="DPI (13 dígitos)" required maxlength="13">
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" class="form-control" id="telefono" placeholder="Teléfono (8 dígitos)" required maxlength="8">
            </div>
            <div class="form-group">
                <label for="domicilio">Domicilio:</label>
                <input type="text" class="form-control" id="domicilio" placeholder="Dirección" required>
            </div>
            <div class="form-group">
                <label for="genero">Género:</label>
                <select class="form-control" id="genero" required>
                    <option value="">Seleccione género</option>
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                </select>
            </div>
            <div class="form-group">
                <label for="actividad">Actividad:</label>
                <select class="form-control" id="actividad" required>
                    <option value="">Seleccione actividad</option>
                    <option value="actividad1">Clase de yoga</option>
                    <option value="actividad2">Club de lectura</option>
                    <option value="actividad3">Taller de arte</option>
                    <option value="actividad4">Taller de cocina</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </form>
    </div>

    <script src="app.js"></script> <!-- Incluye el archivo de script compartido -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const userId = urlParams.get('id');

            if (userId) {
                cargarDatosUsuario(userId);
            }
        });
    </script>
</body>
</html>
