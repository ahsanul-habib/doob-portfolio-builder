import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BrandChange = (props) => {
  const [brandsClient, changeBrandsClient] = useState(props.brand_logo);

  const discard = () => {
    props.toggleModalChange('brand-change-modal');
  };

  const save = () => {
    props.changeBrand(brandsClient);
    props.toggleModalChange('brand-change-modal');
  };

  const toggleActive = (index) => {
    const updatedBrandsClient = brandsClient.map((brand, i) => 
      i === index ? { ...brand, active: !brand.active } : brand
    );
    changeBrandsClient(updatedBrandsClient);
  };

  const setAnImageToClient = (index, img_src) => {
    const updatedBrandsClient = brandsClient.map((brand, i) => 
      i === index ? { ...brand, img_src } : brand
    );
    changeBrandsClient(updatedBrandsClient);
  };

  return (
    <div className="fixed w-screen hidden h-screen z-20" id="brand-change-modal">
      <div className="relative w-full h-full backdrop-blur-lg backdrop-filter flex flex-col justify-center items-center">
        <div className="absolute w-10/12 bg-slate-200 rounded-lg flex flex-col items-center p-5 gap-3 max-h-8/10 overflow-y-scroll">
          <h1 className='text-3xl font-bold'>Brands</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {brandsClient.map((brand, index) => {
              const [imageSrc, setImageSrc] = useState(brand.img_src || '');

              const handleImageInputChange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();

                reader.onload = function (e) {
                  setImageSrc(e.target.result);
                  setAnImageToClient(index, e.target.result);
                };
                reader.readAsDataURL(file);
              };

              return (
                <div key={uuidv4()} className='bg-gray-100 flex flex-col gap-3 justify-between items-center'>
                  <input type="file" accept="image/*" onChange={handleImageInputChange} />
                  {imageSrc && (
                    <img key={uuidv4()} className="self-center w-full p-8 rounded-lg" src={imageSrc} alt="Preview" />
                  )}
                  <input
                    className='w-7 h-7'
                    type="checkbox"
                    checked={brand.active}
                    onChange={() => toggleActive(index)}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={discard}
              className="text-black hover:text-white py-2 px-6 hover:bg-red-500 border-2 rounded-lg border-red-500"
            >
              Cancel
            </button>
            <button
              onClick={save}
              className="text-white ml-2 py-2 px-8 bg-green-400 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandChange;
