type Item = {
    icon: string;
    nombre: string;
};

type Datos = {
    titulo?: string;
    items: Item[];
};

type IconGroupListProps = {
    contenido: Datos[];
    center?: boolean;
};

import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function IconGroupList({ contenido, center = false }: IconGroupListProps) {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <div>
            {contenido.map((bloque, bloqueIndex) => (
                <motion.div 
                    key={bloque.titulo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: bloqueIndex * 0.2 }}
                >
                    {bloque.titulo && (
                        <motion.h1 
                            className="text-base text-content font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: bloqueIndex * 0.2 + 0.1 }}
                        >
                            {t(bloque.titulo)}
                        </motion.h1>
                    )}

                    <motion.div 
                        className={`flex flex-wrap gap-6 p-2.5 ${center ? "justify-center" : "justify-start"}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {bloque.items.map((item) => (
                            <motion.div
                                key={item.nombre}
                                className="flex flex-col items-center text-content"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5, 
                                    rotate: 3,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon={item.icon} className="w-10 h-10" />
                                <p className="text-xs text-center">
                                    {item.nombre.split(" ").map((word, idx) => (
                                        <React.Fragment key={idx}>
                                            {word}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

export default IconGroupList;