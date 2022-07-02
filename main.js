const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Prático de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Resposive Design");

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito){
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes"
    ]
);

// Prototipos en la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        cursosAprobados
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Curso Analisis de negocios para ciencia de datos",
        "Curso de principios de visualización de datos para BI"
    ]
});


