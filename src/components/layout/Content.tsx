import ButtonPrincipal from "../ui/Button";
import CornerRightDown from "./../../assets/corner-right-down.svg?react"
function Content() {
    const opciones = [
        { texto: 'Habilidades', icon: 'tool' },
        { texto: 'Formación', icon: 'academic' },
        { texto: 'Proyectos', icon: 'notebook' }
    ] as const;

    return (
        <div>
            <div className="flex flex-row gap-10 w-full">
                <div className="hidden md:block">
                    <div className="hidden md:flex flex-row gap-2.5 py-2.5 items-center">
                        <h1 className="text-[1.75rem] font-medium italic">Acerca de mí</h1>
                        <CornerRightDown />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                    {opciones.map((opcion) => (
                        <ButtonPrincipal
                            key={opcion.texto}
                            texto={opcion.texto}
                            icon={opcion.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;