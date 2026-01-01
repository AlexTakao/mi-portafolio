import { useTranslation } from "react-i18next";
import TimeLine from "../ui/TimeLine";

function TrainingSection() {
    const { t } = useTranslation();
    return (
        <>
            <h1 className="text-content text-2xl font-bold">{t("TRAINING")}</h1>
            <div className="w-full">
                <TimeLine />
            </div>
        </>
    )
}

export default TrainingSection;