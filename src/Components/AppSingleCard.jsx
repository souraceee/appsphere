import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AppSingleCard = ({ app  }) => {
  const {id, title, image, downloads, ratingAvg} = app

  return (
    <Link to={`/apps/${id}`}>
    <div className="p-4 bg-white rounded-xl transition duration-200 ease-linear hover:scale-[102%] hover:cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="size-[316px] rounded-lg object-cover"
      />

      {/* Info */}
      <div>
        <h3 className="py-4 text-xl font-medium">{title}</h3>
        
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 py-1 px-2 text-base font-medium bg-[#F1F5E8] text-[#00D390] rounded-sm'>
          <MdOutlineFileDownload />
          <p className='!text-[#00D390]'>{downloads}</p>
        </span>

        <span className='flex items-center gap-2 py-1 px-2 text-base font-medium bg-[#FFF0E1] text-[#FF8811] rounded-sm'>
          <FaStar />
          <p className='!text-[#FF8811]'>{ratingAvg}</p>
        </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AppSingleCard;