type ProjectsEntry = {
    type: string;
    iconName: string;
    title: string;
    name: string;
    description: string;
    image?: string;
    characteristics: string[];
    technologies: string[];
    link?: string;
    links?: { label: string; url: string }[];
}

export const PROJECTS: ProjectsEntry[] = [
    {
        type: "PROJECTS.PROYESCOLARPERSONAL",
        iconName: "phone",
        title: "PROJECTS.APPMOVILCONSUMOAGUA",
        name: "Aqualink",
        image: "aqualink.avif",
        description: "PROJECTS.DESCRIPCIONAPPMOVILCONSUMOAGUA",
        characteristics: [
            "PROJECTS.CARACTERISTICAAPPMOVILCONSUMOAGUA1",
            "PROJECTS.CARACTERISTICAAPPMOVILCONSUMOAGUA2",
            "PROJECTS.CARACTERISTICAAPPMOVILCONSUMOAGUA3",
            "PROJECTS.CARACTERISTICAAPPMOVILCONSUMOAGUA4"
        ],
        technologies: ["React Native", "Expo", "MariaDB", "Node.js"],
        links: [
            { label: "API", url: "https://github.com/AlexTakao/apiAqualink" },
            { label: "APPMOVIL", url: "https://github.com/AlexTakao/aquaLink" }
        ]
    },
    {
        type: "PROJECTS.PROYESCOLARPERSONAL",
        title: "PROJECTS.PUNTODEVENTA",
        name: "PROJECTS.NOMBREPUNTODEVENTA",
        iconName: "code",
        image: "puntodeventa.avif",
        description: "PROJECTS.DESCRIPCIONPUNTODEVENTA",
        characteristics: [
            "PROJECTS.CARACTERISTICAPUNTODEVENTA1",
            "PROJECTS.CARACTERISTICAPUNTODEVENTA2",
            "PROJECTS.CARACTERISTICAPUNTODEVENTA3",
            "PROJECTS.CARACTERISTICAPUNTODEVENTA4"
        ],
        technologies: ["Laravel", "MySQL", "Bootstrap"],
        link: "https://github.com/AlexTakao/tiendaAbarrotes"
    }
]