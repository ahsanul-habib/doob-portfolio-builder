const ContactUS = (props) => {
    return (
        <div className="w-10/12 self-center py-6 border-y-2 border-gray-200" id="contact-us">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
                <div>
                    <img className="h-20 inline" id="logo-2" src={props.logo_img} alt="Brand Logo" />
                </div>
                <a className="flex flex-row justify-center items-center px-6 py-2 border border-gray-400 h-10 text-lg rounded-lg text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105" href={`tel:${props.phone}`}>CONTACT US</a>
            </div>
        </div>
    );
}

export default ContactUS;
