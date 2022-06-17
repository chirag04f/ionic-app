import React from 'react'
import { TableCardProps } from '../interfaces/CustomInterfaces';
import { useHistory } from 'react-router';

const TableCard: React.FC<TableCardProps> = ({ index, timeLeft, itemsOrder, isCancelled }) => {
    const history = useHistory();
    const isTimeLeft: boolean = timeLeft === "00:00";
    const emptyTable = itemsOrder === "0" && isTimeLeft;
    const bgColor = isCancelled ? "bg-red-500" : emptyTable ? "" : isTimeLeft ? "bg-yellow-500" : "bg-[#009946]";
    const borderStyle = emptyTable ? "border-solid border-2 border-[#009946]" : "";
    const mainStyle = "cursor-pointer flex flex-col space-y-4 h-24 pl-3 pt-3 rounded-2xl " + bgColor + " " + borderStyle;
    const goToTableDetails = () => {
        history.push(
            {
                pathname: `/tables/${index}`,
                state: {
                    index: index,
                    timeLeft: timeLeft,
                    itemsOrder: itemsOrder,
                    isCancelled: isCancelled
                }
            }
        );
    };
    return (
        <div className={mainStyle} onClick={goToTableDetails}>
            <div className='flex justify-between'>
                <div className='text-lg font-semibold'>Table {index}</div>
                <div className='pr-4'>{isTimeLeft ? "" : timeLeft}</div>
            </div>
            {
                itemsOrder === "0"
                    ? <div>No Orders</div>
                    : <div>Ordered {itemsOrder} items</div>
            }
        </div>
    )
}

export default TableCard;
