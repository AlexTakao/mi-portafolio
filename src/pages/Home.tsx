import Content from "../components/layout/Content";
import Card from "../components/ui/Card";

function Home() {
    return (
        <div className="w-full p-2.5 md:px-36 flex flex-col gap-2.5 md:gap-7">
            <Card />
            <Content />
        </div>
    );
}

export default Home;