import ButtonPrincipal from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Icon from "@/components/ui/Icon";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "@/data/proyectos";
import Line from "@/assets/line.svg?react"

function Projects() {
    const { t } = useTranslation();
    const projectsArray = PROJECTS;
    return (
        <>
            <h2 className="text-xl font-semibold text-content">
                {t('PROYECTOS')}
            </h2>
            {projectsArray.map(proyecto => (
                <div key={proyecto.title}>
                    <section className="md:grid md:grid-cols-3 md:gap-2 py-4">
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <div>
                                <Chip color="gray-dark" colorText="content-gray-light" text={t(proyecto.type)} iconName={proyecto.iconName} />
                            </div>
                            <h3 className="text-lg font-semibold text-content">{t(proyecto.title)}</h3>
                            <h4 className="text-content-gray-dark font-bold">{t(proyecto.name)}</h4>
                            <p className="text-content">{t(proyecto.description)}</p>
                            <h4 className="text-content font-bold">{t('CARACTPRINCIPALES')}:</h4>
                            <div className="flex w-full py-2 pb-2">
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-content list-disc list-inside marker:text-content-gray-dark">
                                    {proyecto.characteristics.map((charac, index) => (
                                        <li key={index}>{t(charac)}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-row text-content font-bold">
                                <Icon name={'code'} className="h-6" />
                                <span className="ms-2">{t('TECNOLOGIASUTILIZADAS')}:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {proyecto.technologies.map((tech, index) => (
                                    <Chip key={index} color="gray-dark" colorText="content-gray-light" text={tech} textSize="text-sm" fontWeight="font-semibold" rounded={false} />
                                ))}
                            </div>
                            <div className="flex justify-end items-end h-full pr-4 gap-2 mt-2">
                                {(
                                    proyecto.links && proyecto.links.map((link, index) => (
                                        <ButtonPrincipal key={index} icon="github" texto={t(link.label)} onClick={() => { window.open(link.url, '_blank', 'noopener,noreferrer'); }} />
                                    )))
                                    || proyecto.link && <ButtonPrincipal icon="github" sinTexto={true} onClick={() => { window.open(proyecto.link, '_blank', 'noopener,noreferrer'); }} />}
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <img
                                className="max-w-full object-contain mt-4 md:mt-0 max-h-96"
                                src={proyecto.image ? `${import.meta.env.BASE_URL}projects/${proyecto.image}` : '/projects/default.png'}
                                alt="Aqualink project"
                                loading="lazy"
                            />
                        </div>
                    </section>
                    {proyecto !== projectsArray[projectsArray.length - 1] && <Line className="w-full" />}
                </div>
            ))}
        </>
    )
}

export default Projects;