class Comment {
    constructor({
        content,
        studentName,
        studentRole
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like + " likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }

class PlatziClass {
    constructor({
        name,
        videoID,
        time,
        comments = []
    }){
        this.name = name;
        this.videoID = videoID;
        this.time = time;
        this.comments =comments;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}

const primeraClasePBasica = new PlatziClass({
    name: "Primera clase de programación basica",
    videoID: 423424,
    time: 8.15
});

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso malito de programación basica") {
            console.error("Web... no");
        }else{
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programación basica",
    classes: [
        primeraClasePBasica
    ],
    isFree: true
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de html y css",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de html y css",
    lang: "english"

});

class LearningPaths {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        "Curso de Responsive Design"
    ]
});

const escuelaVgs = new LearningPaths({
    name: "Escuela de video juegos",
    courses: [
        cursoProgBasica,
        "Curso Introduccion a la produccion de videojuegos",
        "Curso de unity 3d"
    ]
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso de tableu"
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario (commetContent) {
        const comment = new Comment({
            content: commetContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        }else {
            console.warn("Lo sentimos, " + this.name + " no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario (commetContent) {
        const comment = new Comment({
            content: commetContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar();
    }
}

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});

const miguelito = new BasicStudent({
    name: "miguelito2DC",
    username: "miguelito2dc",
    email: "miguelito2@miguelito2.com",
    instagram: "fmiguelito2dc",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
});

const freddy = new TeacherStudent({
    name: "FreddyDC",
    username: "freddydc",
    email: "freddy@juanito.com",
    twitter: "freddydc"
});







// const juan1 = {
//     name: "JuanDC",
//     username: "juandc",
//     points: 100,
//     socialMedia: {
//         twitter: "galvez51",
//         instagram: "galvez51",
//         facebook: "galvez51",
//     },
//     approvedCourses: [
//         "Curso definitivo de HTML y CSS",
//         "Curso Prático de HTML y CSS"
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso definitivo de HTML y CSS",
//                 "Curso Prático de HTML y CSS",
//                 "Curso de Responsive Design"
//             ]
//         },
//         {
//             name: "Escuela de video juegos",
//             courses: [
//                 "Curso Introduccion a la produccion de videojuegos",
//                 "Curso de unity 3d"
//             ]
//         }
//     ]
// };

// const miguelito1 = {
//     name: "MiguelitoDC",
//     username: "miguelitodc",
//     points: 100,
//     socialMedia: {
//         twitter: "miguelito1",
//         instagram: "miguelito1",
//         facebook: "miguelito1",
//     },
//     approvedCourses: [
//         "Curso de dataBusiness",
//         "Curso Dataviz"
//     ],
//     learningPaths: [
//         {
//             name: "Escuela de desarrollo web",
//             courses: [
//                 "Curso definitivo de HTML y CSS",
//                 "Curso Prático de HTML y CSS",
//                 "Curso de Responsive Design"
//             ]
//         },
//         {
//             name: "Escuela de Data Science",
//             courses: [
//                 "Curso DataBusiness",
//                 "Curso DataViz",
//                 "Curso de tableu"
//             ]
//         }
//     ]
// };