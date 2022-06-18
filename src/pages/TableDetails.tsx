import { IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react';
import React, { Component } from 'react'
import AppHeader from '../components/AppHeader';
import FoodItem from '../components/FoodItem';
import MenuDrawer from '../components/MenuDrawer';
import TableCard from '../components/TableCard';
import FakeData from '../data/FakeData';
import { FoodItemProps, FoodItemPropsData } from '../interfaces/CustomInterfaces';

class TableDetails extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.location.state;
    }

    render() {
        const foodItemData: Array<FoodItemPropsData> = FakeData.getFoodItemData();
        console.log(this.props);
        return (
            <IonPage>
                <div className='flex'>
                    <AppHeader />
                    <MenuDrawer />
                </div>
                <div className='flex'>
                    <div className="flex-none w-24 h-screen pt-4 bg-[#1F1F1F]">
                        {
                            FakeData.sideMenuData().map((element: any, i: number) => {
                                return <div key={i} className="grid justify-items-center pb-2">
                                    <img className='w-8 h-8' src="/assets/images/ic_popular.png"></img>
                                    <div className="p-2 text-xs">{element.title}</div>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex-initial w-screen pr-4">
                        <IonContent>
                            <div className='grid grid-cols-4 grid-rows-3'>
                                {foodItemData.map((element: FoodItemPropsData, i: number) => {
                                    return (
                                        <div key={i}>
                                            <FoodItem
                                                id={element.id}
                                                name={element.name}
                                                price={element.price}
                                                image={element.image}
                                                details={element.details}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </IonContent>
                    </div>
                </div>
            </IonPage>
        );
    }
}

export default TableDetails;
