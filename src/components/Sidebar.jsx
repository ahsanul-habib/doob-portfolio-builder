import React from 'react';

export default function Sidebar(props) {

    var menus=props.menus;
    menus.map((menu) =>
    <a key={menu["title"]} className="font-semibold tracking-wide text-xl py-2 border-b-2 hover:text-black dark:hover:text-white" href="#">{menu["title"]}</a>
    )
    const toggleSidebar = () => {
        
    };

    return (
        // <div>

        // {props.logo_img}
        // </div>
        <div className="hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-50" id="sidebarOverlay">
            <div className="hidden w-3/4 h-screen bg-white dark:bg-black dark:text-white fixed z-10" id="sidebar">
                <div className="flex flex-row justify-between items-center p-4 border-b-2">
                    <img className="w-6/12" src={props.logo_img} alt="Doob Logo" />
                    <button onClick={props.toggleSidebar}> {/* Use onClick event */}
                        <span className="material-symbols-outlined text-3xl" id="sideBarButton">
                            close
                        </span>
                    </button>
                </div>

                <div className="p-6 flex flex-col dark:text-gray-400 text-gray-600" id="sidebarMenu">
                {menus.map((menu, index) => (
                        <a key={index} className="font-semibold tracking-wide text-xl py-2 border-b-2 hover:text-black dark:hover:text-white" href={menu.href}>
                            {menu.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
