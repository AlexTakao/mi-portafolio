import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TimeLine from "../ui/TimeLine";
import { TRAININGS } from "@/data/formacion";

const items = TRAININGS;

function TrainingSection() {
    const { t } = useTranslation();
    return (
        <>
            <motion.h1 
                className="text-content text-2xl font-bold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {t("TRAINING")}
            </motion.h1>
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
            >
                <TimeLine items={items} />
            </motion.div>
        </>
    )
}

export default TrainingSection;