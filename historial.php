<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Historial de Reservaciones</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Historial de Reservaciones</h1>
        <form id="users" class="my-3">
            <div class="form-group">
                <label for="idUsuario">Ingrese su ID:</label>
                <input type="text" class="form-control" id="idUsuario" name="id" required>
            </div>
            <button type="submit" class="btn btn-primary">Buscar</button>
        </form>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">DPI</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Domicilio</th>
                    <th scope="col">Género</th>
                    <th scope="col">Actividad</th>
                    <th scope="col">Aforo</th>
                    <th scope="col">Asiento</th>


                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody id="tabla">
                <!-- Aquí se insertarán los datos dinámicamente desde JavaScript -->
            </tbody>
        </table>
    </div>

    <!-- Bootstrap y otros scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
    <!-- Firebase SDK y tu archivo de JavaScript -->
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
    <script src="historia.js"></script>
 
</body>
</html>






