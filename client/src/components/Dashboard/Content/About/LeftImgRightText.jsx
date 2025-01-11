import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LeftImgRightText = ({color,image,heading}) => {
  return (
		<div className={color} >
			<div className="flex items-center min-h-32 gap-4 p-2 rounded-lg">
				<div className="rounded-lg overflow-hidden">
					<img src={image} style={{width:100}} className='rounded-lg' alt="Card Image" />
				</div>
				<div className="flex justify-between flex-col">
					<div className='text-white font-medium text-xl'>{heading}</div>
					<button className="p-2 mt-3 font-medium text-md justify-center flex items-center gap-2 rounded-lg bg-white">
						Check Now <ArrowForwardIcon />{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

export default LeftImgRightText