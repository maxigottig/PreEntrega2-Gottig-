const notas = [];
let notasIngresadas = "";
let notaInput = "";

const estudiante = {
    nombre: "",
    apellido: "",
};

const agregarNota = () => {
    notaInput = prompt("Ingresa una nota:");

    if (isNaN(notaInput)) {
        alert("Ingresa una nota válida");
        return;
    }

    notas.push(Number(notaInput));
    notasIngresadas += `${notaInput}, `;
};

const calcularPromedio = () => {
    if (notas.length === 0) {
        alert("No ingresaste ninguna nota");
        return;
    }

    const sumaNotas = notas.reduce((suma, nota) => suma + nota);
    const promedio = sumaNotas / notas.length;
    const mensaje = `Tu promedio es: ${promedio.toFixed(2)}`;

    if (promedio < 6) {
        alert(mensaje + "\nNo aprobaste. Seguí intentando");
    } else {
        alert(mensaje + "\n¡Felicitaciones, aprobaste!");
    }
};


estudiante.nombre = prompt("Ingresa tu nombre:");
estudiante.apellido = prompt("Ingresa tu apellido:");

do {
    agregarNota();
} while (confirm("¿Deseas agregar otra nota?"));

calcularPromedio();

const estudianteInfo = `Nombre completo: ${estudiante.nombre} ${estudiante.apellido}
Notas ingresadas: ${notasIngresadas}
Promedio: ${(notas.length > 0) ? (notas.reduce((suma, nota) => suma + nota) / notas.length).toFixed(2) : "N/A"}`;

alert(estudianteInfo);