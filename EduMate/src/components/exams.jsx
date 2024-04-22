export default function Exams() {
    let data = [
        [1, "Exam103", "24th April, 2024"],
        [1, "Exam103", "24th April, 2024"],
        [1, "Exam103", "24th April, 2024"],
    ]
    return <div className="bg-[--secondary] w-full flex-col items-center p-10 rounded-lg m-3">
        <div className="text-[--tertiary] text-4xl font-bold">Upcoming Exams</div>
        <div className="text-black text-2xl mt-7">
            {data.map((d, i) => {
                return <div key={i} className="gap-16 flex">
                    <div>{d[0]}</div>
                    <div >{d[1]}</div>
                    <div className="ml-10">{d[2]}</div>
                </div>
            })}
        </div>
    </div>
}