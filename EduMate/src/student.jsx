import Upcoming from "./components/upcoming";

export default function Student() {
    return <div>
        <div className="p-20">
            <div className="text-8xl font-bold text-[--tertiary] ">Heyy Divij,</div>
            <div className="text-7xl font-bold">
                Attend sessions and give tests to gear up for your next exam.
            </div>
        </div>
        <Upcoming />

    </div>
}