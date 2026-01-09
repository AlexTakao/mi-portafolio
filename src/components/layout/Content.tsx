import { useTranslation } from "react-i18next";
import { useState } from "react";
import ButtonPrincipal from "@/components/ui/Button";
import CornerRightDown from "@/assets/corner-right-down.svg?react"
import SkillsSection from "../content/SkillsSection";
import TrainingSection from "../content/TrainingSection";
function Content() {
    const { t } = useTranslation();

    type CardOption = 1 | 2 | 3;
    const [opcionCard, setOpcionCard] = useState<CardOption>(1);

    const cardMapContent: Record<CardOption, React.ReactNode> = {
        1: <SkillsSection />,
        2: <TrainingSection />,
        3: <div className="font-bold text-content">Proyectos, próximamente...</div>
    }

    const opciones = [
        { id: 1, texto: 'Habilidades', icon: 'tool' },
        { id: 2, texto: 'Formación', icon: 'academic' },
        { id: 3, texto: 'Proyectos', icon: 'notebook' }
    ] as const;

    return (
        <div className="flex flex-col gap-4 md:gap-10 md:grid md:grid-cols-3">
            <div className="md:sticky md:top-24 md:self-start">
                <div className="flex flex-col text-content">
                    <div className="hidden md:flex flex-row gap-2.5 py-2.5 items-center">
                        <h1 className="text-[1.75rem] font-medium italic">{t('ACERCAMI')}</h1>
                        <CornerRightDown />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        {opciones.map((opcion) => (
                            <ButtonPrincipal
                                key={opcion.texto}
                                texto={opcion.texto}
                                icon={opcion.icon}
                                onClick={() => {
                                    setOpcionCard(opcion.id)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:col-span-2">
                <div className="w-full border border-content p-2 md:py-4 md:px-6 shadow-offset-sm md:shadow-offset">
                    {cardMapContent[opcionCard]}
                </div>
            </div>
        </div>
    );
}

export default Content;