export default function Summary({feedback}: {feedback: Feedback}) {
    return (
        <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
            <h2 className="text-4xl !text-black font-bold">Summary</h2>
            <p className="text-lg text-gray-500">{feedback.overallScore}%</p>
        </div>
    )
}