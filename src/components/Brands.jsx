const Brands = (props) => {
    const Brand = props.brand_logo;
    return (
        <div className="w-full">
            <div className="mx-auto flex flex-row flex-wrap justify-center items-center w-10/12 mb-36">
                {Brand.map((brand, index) => (
                    brand['active'] === true && <img key={index} className="w-1/2 md:w-1/3 lg:w-1/5 opacity-80 hover:opacity-100" src={brand['img_src']} />
                ))}
            </div>
        </div>
    );
};

export default Brands;
