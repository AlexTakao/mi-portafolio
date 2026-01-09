type TimelineEntry = {
    date: string;
    title: string;
    description: string;
    link?: string;
};

type TimelineBlock = {
    titulo: string;
    items: TimelineEntry[];
};

export const TRAININGS: TimelineBlock[] = [
    {
        titulo: "ESTUDIOS",
        items: [
            {
                date: "TIMELINE.DATE1",
                title: "TIMELINE.TITLE1",
                description: "TIMELINE.DESC1",
            }
        ]
    },
    {
        titulo: "CERTIFICACIONES",
        items: [
            {
                date: "TIMELINE.DATE2",
                title: "TIMELINE.TITLE2",
                description: "TIMELINE.DESC2",
                link: "https://www.credly.com/badges/791983c7-46d3-4d30-8beb-bf15b44a2ede"
            },
            {
                date: "TIMELINE.DATE3",
                title: "TIMELINE.TITLE3",
                description: "TIMELINE.DESC3",
                link: "https://www.credly.com/badges/7c1b7ecb-1ea9-4f97-9ad4-9d249fc6777e"
            },
            {
                date: "TIMELINE.DATE4",
                title: "TIMELINE.TITLE4",
                description: "TIMELINE.DESC4",
                link: "https://www.credly.com/badges/9c50b3e5-b021-4f3a-afc7-65539b29bc36"
            }
        ]
    }
];