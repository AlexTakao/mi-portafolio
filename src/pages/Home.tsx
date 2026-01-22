import AboutContent from "@/components/layout/AboutContent";
import CareerCard from "@/components/sections/CareerCard";

function Home() {
    return (
        <div className="w-full p-2.5 md:px-36 px-4 flex flex-col gap-2.5 md:gap-7">
            <CareerCard />
            <AboutContent />
        </div>
    );
}

export default Home;