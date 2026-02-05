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

function IconGroupList({ contenido, center = false }: IconGroupListProps) {
    const { t } = useTranslation();

    return (
        <div>
            {contenido.map((bloque) => (
                <div key={bloque.titulo}>
                    {bloque.titulo && (
                        <h1 className="text-base text-content font-semibold">
                            {t(bloque.titulo)}
                        </h1>
                    )}

                    <div className={`flex flex-wrap gap-6 p-2.5 ${center ? "justify-center" : "justify-start"}`}>
                        {bloque.items.map((item) => (
                            <div
                                key={item.nombre}
                                className="flex flex-col items-center text-content"
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
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default IconGroupList;