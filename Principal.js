const conceptos = [
    { nombre: "Concepto 1", enlace: "concepto1.html" },
    { nombre: "Concepto 2", enlace: "concepto2.html" },
    { nombre: "Concepto 3", enlace: "concepto3.html" },
];

const desarrolladores = [
    { nombre: "Avendaño Garibay Rubén Omar", enlace: "D1.html" },
    { nombre: "Diaz Santos Leonardo Daniel", enlace: "D2.html" },
    { nombre: "Hernández Guerra Daniela", enlace: "D3.html" },
    { nombre: "Jiménez García Oscar Efren", enlace: "D4.html" },
    { nombre: "Rangel Suarez Diego", enlace: "D5.html" },
    { nombre: "Reyes Palacios Mariana", enlace: "D6.html" },
];

const tabla = document.getElementById("contenido");

const fila = document.createElement("tr");

const celdaConceptos = document.createElement("td");
const ulConceptos = document.createElement("ul");
conceptos.forEach(c => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = c.enlace;
    a.textContent = c.nombre;
    li.appendChild(a);
    ulConceptos.appendChild(li);
});
celdaConceptos.appendChild(ulConceptos);

const celdaDesarrolladores = document.createElement("td");
const ulDesarrolladores = document.createElement("ul");
desarrolladores.forEach(d => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = d.enlace;
    a.innerHTML = `<strong>Desarrollador</strong> ${d.nombre}`;
    li.appendChild(a);
    ulDesarrolladores.appendChild(li);
});
celdaDesarrolladores.appendChild(ulDesarrolladores);

fila.appendChild(celdaConceptos);
fila.appendChild(celdaDesarrolladores);
tabla.appendChild(fila);
