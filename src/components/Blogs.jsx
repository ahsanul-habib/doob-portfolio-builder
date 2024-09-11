const Blogs=(props)=>{
    const blogs=props.blogs;
    return (
        <div className="py-20 flex flex-col items-center w-full">
    <div className="bg-gray-100">
        <span className="p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Latest News</span>
    </div>
    <h1 className="text-5xl font-bold mt-5 mb-7 dark:text-white">Read from the Blog.</h1>
    <h5 className="w-80 text-center tracking-widest text-gray-600 mb-6 dark:text-gray-300 moto">{props.moto}</h5>
    <div className="w-10/12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10" id="blogs-container">
        {blogs.map((blog,index)=>(
        <div key={index} className="p-4 hover:scale-105">
            <a href="#" className="block">
                <div className="bg-gray-100 rounded-lg dark:bg-gray-500">
                    <img src={blog['img_src']} className="w-full rounded-lg" />
                    <div className="px-10 py-8">
                        <h3 className="text-gray-700 mb-4 dark:text-gray-300">{blog['category']} / {blog['date']}</h3>
                        <h1 className="mb-2 font-bold text-xl mw-full dark:text-white">{blog['title']}</h1>
                    </div>
                </div>
            </a>
        </div>

        ))};
    </div>
</div>

    )
}

export default Blogs;