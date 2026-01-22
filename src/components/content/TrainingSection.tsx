import { useTranslation } from "react-i18next";
import TimeLine from "../ui/TimeLine";
import { TRAININGS } from "@/data/formacion";

const items = TRAININGS;

function TrainingSection() {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="text-content text-2xl font-bold">{t("TRAINING")}</h1>
            <div className="w-full">
                <TimeLine items={items} />
            </div>
        </>
    )
}

export default TrainingSection;