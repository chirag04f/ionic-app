import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FoodItemPropsData } from '../interfaces/CustomInterfaces';

const FoodItem: React.FC<FoodItemPropsData> = ({ ...data }) => {
    const [itemCount, updateItemCount] = useState(0);
    const history = useHistory();
    const mainStyle = "flex flex-col h-40 pl-3 pt-3 rounded-3xl";
    const isGrad = itemCount === 0 ? "" : "bg-gradient-to-r from-transparent to-green-500";
    const imgContainerStyle = "relative overflow-hidden rounded-xl shadow-lg cursor-pointer " + isGrad;
    const goToFoodDetails = () => {
        history.push(
            {
                pathname: `/fooddetails/${data.id}`,
                state: {
                    id: data.id,
                    data: data,
                }
            }
        );
    };
    return (
        <div key={data.id} className={mainStyle}>
            <div className={imgContainerStyle}>
                <div className="opacity-70">
                    <img onClick={goToFoodDetails} className="object-cover w-full h-40" src={data.image} alt={data.name} />
                </div>
                <div className="absolute h-36 grid grid-cols-1 gap-4 top-0 content-between">
                    <div>
                        <div className="pt-3 pl-3 text-sm font-semibold text-white">{data.name}</div>
                        <div className="pt-1 pl-3 text-xs text-white">{data.price}</div>
                    </div>
                </div>
                <div className='relative px-3 py-2 bottom-16 flex justify-between'>
                    {itemCount === 0
                        ? <div></div>
                        : <div className='font-bold text-white rounded-full bg-green-500 flex items-center justify-center text-xs pl-2 pr-2'>
                            {itemCount}
                        </div>
                    }
                    <div className='border-solid border-2 border-green-500 rounded-full px-4 py-1 font-semibold' onClick={() => { updateItemCount(itemCount + 1); }}>
                        Add
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;

