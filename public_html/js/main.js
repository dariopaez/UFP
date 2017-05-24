var db;
$(document).ready(function () {
    console.log(">>> cargo el documento bien");

    $("#tomarFoto").click(function () {
        navigator.camera.getPicture(exitoFoto, errorFoto, { quality: 50 });
    });


    db = window.openDatabase("CONTACTOS2", "", "DESCRIPCION", 200000);
    console.log(db);
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE   IF NOT EXISTS  CONTACTO(id integer not null primary key autoincrement,nombre,telefono);");
    }, errorDB, exitoDB);

    $("#insertar").click(function () {

        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO CONTACTO(nombre,telefono)VALUES('" + $('#nombre').val() + "','" + $('#telefono').val() + "')");
        }, errorDB, exitoDB);
    });

    $("#leer").click(function () {
        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM CONTACTO;", [], function (tx, rs) {
                for (var i = 0; i < rs.rows.length; i++) {
                    var p = rs.rows.item(i);
                    window.alert("nombre=" + p.nombre + "------telefono" + p.telefono);
                }
            });
        }, errorDB, exitoDB);
    });
    $("#limpiar").click(function () {

        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM CONTACTO");
            window.alert("Limpiar database");

        }, errorDB, exitoDB);
    });
});
function exitoFoto(url) {
    $("#contenedorFoto").attr("src", url);
    $("#contenedorFoto").show();
}
function errorFoto(resp) {
    window.alert("error Foto");
}
function errorDB(resp) {
    window.alert("error bd1");
}
function exitoDB(resp) {
    window.alert("exito bd2");
}
