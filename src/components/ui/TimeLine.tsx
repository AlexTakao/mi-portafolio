import { useTranslation } from "react-i18next";

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

const items: TimelineBlock[] = [
    {
        titulo: "Estudios",
        items: [
            {
                date: "TIMELINE.DATE1",
                title: "TIMELINE.TITLE1",
                description: "TIMELINE.DESC1",
            },
            {
                date: "TIMELINE.DATE2",
                title: "TIMELINE.TITLE2",
                description: "TIMELINE.DESC2",
            }
        ]
    }
];


function Timeline() {
    const { t } = useTranslation();
    return (
        <div className="space-y-10">
            {items.map((bloque) => (
                <section key={bloque.titulo}>
                    <h2 className="text-lg font-semibold text-content">
                        {t(bloque.titulo)}
                    </h2>

                    <ol className="relative border-s border-neutral-300 ps-6">
                        {bloque.items.map((item) => (
                            <li key={item.title} className="mb-10 last:mb-0">
                                <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-neutral-300 bg-neutral-400" />

                                <time className="text-sm text-neutral-500">
                                    {t(item.date)}
                                </time>

                                <h3 className="my-2 text-lg font-semibold text-neutral-900">
                                    {t(item.title)}
                                </h3>

                                <p className="text-neutral-600">
                                    {t(item.description)}
                                </p>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        className="mt-4 inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                                    >
                                        {t("MASINFO")}
                                        <svg
                                            className="ms-2 h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 12h14m-4 4 4-4-4-4"
                                            />
                                        </svg>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ol>
                </section>
            ))}
        </div>
    );
}

export default Timeline;