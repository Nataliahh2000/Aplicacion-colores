const colors = {
    primario: ['rojo', 'azul', 'amarillo'],
    secundario: ['verde', 'naranja', 'morado'],
    terciario: ['rojo-anaranjado', 'amarillo-anaranjado', 'amarillo-verde', 'azul-verde', 'azul-morado', 'rojo-morado']
};

document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const colorName = document.getElementById('colorName').value.trim().toLowerCase();
    let resultText = "Color no encontrado.";

    for (const [type, names] of Object.entries(colors)) {
        if (names.includes(colorName)) {
            resultText = `El color "${colorName}" es un color ${type}.`;
            break;
        }
    }

    document.getElementById('result').textContent = resultText;
});