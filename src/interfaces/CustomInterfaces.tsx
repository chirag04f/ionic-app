export interface TableCardProps {
    index?: number;
    timeLeft: string;
    itemsOrder: string;
    isCancelled: boolean;
}

export interface FoodItemProps {
    data: FoodItemPropsData;
}

export interface FoodItemPropsData {
    id: number;
    name: string;
    price: string;
    image: string;
    details: Object;
}