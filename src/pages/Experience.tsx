import alextakaoFly from "@/assets/alextakao-fly.avif"
import Card from "@/components/ui/Card";
import IconGroupList from "@/components/ui/IconGroupList";
import Timeline from "@/components/ui/TimeLine";
import { EXPERIENCES } from "@/data/experiencia"
import { motion } from "framer-motion";

type TimelineEntry = {
    date: string;
    endDate?: Date;
    title: string;
    description: string;
    otherContentChild?: React.ReactNode;
    link?: string;
};
type TimelineBlock = {
    titulo: string;
    items: TimelineEntry[];
};

function Experience() {
    const otherContent = EXPERIENCES.map(tech => (
        <div className="mt-2">
            <IconGroupList contenido={tech.technologies} key={tech.title} />
        </div>
    ));

    const items: TimelineBlock[] = EXPERIENCES.map(exp => ({
        titulo: exp.company,
        items: [{
            date: exp.date,
            endDate: new Date(exp.endDate),
            title: exp.title,
            description: exp.description,
            otherContentChild: otherContent
        }]
    }));
    return (
        <div className="w-full py-2.5 px-6 md:px-36 grid md:grid-cols-[1fr_auto] mb-2">
            <Card>
                <div className="p-4">
                    <Timeline items={items} />
                </div>
            </Card>
            <div className="hidden lg:block w-96">
                <motion.div
                    className="sticky top-20"
                    animate={{
                        y: [0, -20, 0], // Sube 20 pixeles y vuelve a bajar
                    }}
                    transition={{
                        duration: 3,      // Tiempo que tarda una vuelta completa
                        repeat: Infinity, // Se repite para siempre
                        ease: "easeInOut" // Suaviza el inicio y el final del movimiento
                    }}
                >
                    <picture>
                        <source srcSet={alextakaoFly} type="image/avif" />
                        <img className="h-full object-contain" src={alextakaoFly} alt="Contacto AlexTakao" />
                    </picture>
                </motion.div>
            </div>
        </div>
    )
}

export default Experience;