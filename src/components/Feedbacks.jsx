const Feedbacks=(props)=>{
    const feedbacks=props.feedbacks;
    return (
        <div>
    <div className="py-20 flex flex-col items-center border-b-2">
        <div className="bg-gray-100">
            <span className="p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Client Feedback</span>
        </div>
        <h1 className="text-center text-5xl font-bold mt-5 mb-7 dark:text-white">Awesome Client Feedback.</h1>
        <h5 className="w-80 text-center tracking-widest text-gray-300 mb-10 dark:text-gray-300">{props.moto}</h5>
        <div className="w-10/12 flex flex-row flex-wrap mb-16" id="feedbacks-list">
            {feedbacks.map((feedback, index) =>(
            <div key={index} className="w-full p-2 mt-20 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center relative">
                    <img className="w-32 h-32 rounded-full absolute top-1/2 transform -translate-y-1/2" src={feedback['img_src']} />
                </div>
                <div className="flex pt-20 flex-col items-center bg-gray-200 rounded-xl dark:bg-gray-700">
                    <span className="w-56 pb-4 text-center max-w-full dark:text-white">{feedback['description']}</span>
                    <span className="pb-4 text-center dark:text-gray-400">{feedback['name']}</span>
                    <span className="pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">{feedback['profession']}</span>
                </div>
            </div>
                
            ))};
        </div>
    </div>
</div>

    )
}

export default Feedbacks;