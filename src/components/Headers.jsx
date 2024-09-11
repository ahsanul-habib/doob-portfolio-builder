export default function(props){
    const menus=props.menus;
    return(
<header className="border-b border-black h-20">
    <div className="w-10/12 h-20 mx-auto flex flex-row justify-between items-center">
        <div className="logo">
            <img src={props.logo_img} id="logo-img" className="h-12" />
        </div>
        <div className="flex flex-row items-center">
            <div className="hidden md:flex flex-row text-gray-500 font-bold" id="menus">
                {/* Menu items */}
                {menus.map((menu, index) => (
                        <a key={index} className="p-4 hover:text-black dark:hover:text-white" href={menu.href}>
                            {menu.title}
                        </a>
                    ))}
            </div>
            <a href="#" className="px-4 py-1 text-white h-10 text-xl rounded-3xl btn-accent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-110">Buy Now</a>
            <button onClick={props.toggleDark} className="flex justify-center items-center btn-accent p-2 rounded-full aspect-square h-9 mx-1 bg-orange-500">
                <span className="material-symbols-outlined" id="isDark">
                    light_mode
                </span>
            </button>
            <button onClick={props.toggleSidebar} className="md:hidden flex justify-center items-center btn-accent p-2 rounded-full aspect-square h-9 mx-1 bg-orange-500">
                <span className="material-symbols-outlined" id="sideBarButton">
                menu
                </span>
            </button>
        </div>
    </div>
</header>

    )
}