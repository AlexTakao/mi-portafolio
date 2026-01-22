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

type TimelineProps = {
    items: TimelineBlock[];
};

function Timeline({ items }: TimelineProps) {
    const { t } = useTranslation();
    return (
        <div className="space-y-10">
            {items.map((bloque) => (
                <section key={bloque.titulo}>
                    <h2 className="text-lg font-semibold text-content">
                        {t(bloque.titulo)}
                    </h2>

                    <ol className="relative border-s border-content-gray ps-6">
                        {bloque.items.map((item) => (
                            <li key={item.title} className="mb-10 last:mb-0">
                                <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-content-gray bg-content-gray-dark" />

                                <time className="text-sm text-content-gray-dark">
                                    {t(item.date)}
                                </time>

                                <h3 className="my-2 text-lg font-semibold text-content">
                                    {t(item.title)}
                                </h3>

                                <p className="text-content-gray-dark">
                                    {t(item.description)}
                                </p>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center rounded-md border border-content-gray px-4 py-2 text-sm font-medium text-content hover:bg-surface-inverse hover:text-content-inverse"
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