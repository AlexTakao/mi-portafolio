type Item = {
    icon: string;
    nombre: string;
};

type Datos = {
    titulo?: string;
    items: Item[];
};

type ExperienceEntry = {
    title: string;
    company: string;
    endDate: string;
    date: string;
    description: string;
    technologies: Datos[];
    skills: string[];
};

export const EXPERIENCES: ExperienceEntry[] = [
    {
        title: "DESARROLLADORFULLSTACKJR",
        company: "Xpertys S.A. de C.V.",
        endDate: "06/2024",
        date: "Junio 2024 - Julio 2025",
        description: "DESCEXPRXPERTYS",
        technologies: [
            {
                titulo: "TECNOLOGIASUTILIZADAS",
                items: [
                    { icon: "simple-icons:ionic", nombre: "Ionic" },
                    { icon: "simple-icons:capacitor", nombre: "Capacitor" },
                    { icon: "mdi:cordova", nombre: "Cordova" },
                    { icon: "simple-icons:angular", nombre: "Angular" },
                    { icon: "simple-icons:angularjs", nombre: "AngularJS" },
                    { icon: "simple-icons:oracle", nombre: "Oracle" },
                    { icon: "simple-icons:spring", nombre: "Spring" },
                    { icon: "simple-icons:firebase", nombre: "Firebase" },
                    { icon: "simple-icons:git", nombre: "Git" },
                    { icon: "simple-icons:mysql", nombre: "MySQL"},
                    { icon: "simple-icons:windows", nombre: "Windows Server"}
                ]
            }
        ],
        skills: [
            "SKILLDESARROLLOAPIREST",
            "SKILLDESARROLLOWEB",
            "SKILLBASESDATOSSQL",
            "SKILLCONTROLVERSIONGIT",
            "SKILLMETODOLOGIASAGILES",
            "SKILLDESARROLLOAPPMOVIL"
        ],
    }
];