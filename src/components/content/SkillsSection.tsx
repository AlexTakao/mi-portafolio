import { SKILLS } from "@/data/skills";
import IconGroupList from "../ui/IconGroupList";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function SkillsSection() {
    const skills = SKILLS;
    const { t } = useTranslation();
    return(
        <>
            <motion.h1 
                className="text-content text-2xl font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {t('MISHABILIDADES')}
            </motion.h1>
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <IconGroupList contenido={skills} />
            </motion.div>
        </>
    )
}

export default SkillsSection;