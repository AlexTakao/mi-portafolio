import { SKILLS } from "@/data/skills";
import Gallery from "../ui/Gallery";
import { useTranslation } from "react-i18next";

function SkillsSection() {
    const skills = SKILLS;
    const { t } = useTranslation();
    return(
        <>
            <h1 className="text-content text-2xl font-bold">{t('MISHABILIDADES')}</h1>
            <div className="w-full">
                <Gallery contenido={skills} />
            </div>
        </>
    )
}

export default SkillsSection;