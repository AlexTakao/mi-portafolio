import ButtonPrincipal from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Icon from "@/components/ui/Icon";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/proyectos";
import Line from "@/assets/line.svg?react"

function Projects() {
    const { t } = useTranslation();
    const projectsArray = PROJECTS;
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    return (
        <>
            <motion.h2 
                className="text-xl font-semibold text-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {t('PROYECTOS')}
            </motion.h2>
            {projectsArray.map((proyecto, projectIndex) => (
                <motion.div 
                    key={proyecto.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: projectIndex * 0.15,
                        ease: "easeOut" 
                    }}
                >
                    <section className="md:grid md:grid-cols-3 md:gap-2 py-4">
                        <motion.div 
                            className="flex flex-col gap-1.5 md:col-span-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: projectIndex * 0.15 + 0.1,
                                ease: "easeOut" 
                            }}
                        >
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
                            <motion.div 
                                className="flex flex-wrap gap-2"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {proyecto.technologies.map((tech, index) => (
                                    <motion.div key={index}>
                                        <Chip color="gray-dark" colorText="content-gray-light" text={tech} textSize="text-sm" fontWeight="font-semibold" rounded={false} />
                                    </motion.div>
                                ))}
                            </motion.div>
                            <div className="flex justify-end items-end h-full pr-4 gap-2 mt-2">
                                {(
                                    proyecto.links && proyecto.links.map((link, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ButtonPrincipal icon="github" texto={t(link.label)} onClick={() => { window.open(link.url, '_blank', 'noopener,noreferrer'); }} />
                                        </motion.div>
                                    )))
                                    || proyecto.link && (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ButtonPrincipal icon="github" sinTexto={true} onClick={() => { window.open(proyecto.link, '_blank', 'noopener,noreferrer'); }} />
                                        </motion.div>
                                    )}
                            </div>
                        </motion.div>
                        <motion.div 
                            className="flex justify-center items-center w-full"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: projectIndex * 0.15 + 0.2,
                                ease: "easeOut" 
                            }}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        >
                            <img
                                className="max-w-full object-contain mt-4 md:mt-0 max-h-96"
                                src={proyecto.image ? `${import.meta.env.BASE_URL}projects/${proyecto.image}` : '/projects/default.png'}
                                alt="Aqualink project"
                                loading="lazy"
                            />
                        </motion.div>
                    </section>
                    {proyecto !== projectsArray[projectsArray.length - 1] && (
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: projectIndex * 0.15 + 0.3,
                                ease: "easeOut" 
                            }}
                            style={{ transformOrigin: 'left' }}
                        >
                            <Line className="w-full" />
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </>
    )
}

export default Projects;