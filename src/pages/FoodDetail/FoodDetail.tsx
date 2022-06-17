import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import React, { Component } from 'react'
import AppHeader from '../../components/AppHeader';
import { ConstantColors, ConstantIcons } from '../../theme/Constant';
import './FoodDetail.css';

export default class FoodDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.location.state;
    }
    render() {
        const labelTextStyle = `text-xs text-[${ConstantColors.subtitleColor}] font-bold pt-3`;
        return (
            <IonPage>
                <AppHeader />
                <div className='flex'>
                    <div className="flex-none w-16 h-screen pt-4 bg-[#1F1F1F]">
                    </div>
                    <div className="flex-initial w-1/2 px-2 py-2">
                        <div className={`rounded-md bg-[${ConstantColors.cardColor}] p-6`}>
                            <div className={`text-xs text-[${ConstantColors.subtitleColor}] font-bold pb-3`}>DESCRIPTION</div>
                            <div className='text-sm text-white '>{this.state.data.details.description}</div>
                        </div>
                        <div className='pt-2 flex'>
                            <div className={`flex-1 content-center rounded-md bg-[${ConstantColors.cardColor}] p-6`}>
                                <div className='grid justify-items-center'>
                                    <img className='w-8 h-8' src={ConstantIcons.servings} />
                                    <div className={labelTextStyle}>SERVINGS</div>
                                    <div className='text-sm text-white '>{this.state.data.details.servings} People</div>
                                </div>
                            </div>
                            <div className={`mx-2 flex-1 rounded-md bg-[${ConstantColors.cardColor}] p-6`}>
                                <div className='grid justify-items-center'>
                                    <img className='w-8 h-8' src={ConstantIcons.cookingTime} />
                                    <div className={labelTextStyle}>COOKING TIME</div>
                                    <div className='text-sm text-white '>{this.state.data.details.cookingTime}</div>
                                </div>
                            </div>
                            <div className={`flex-1 rounded-md bg-[${ConstantColors.cardColor}] p-6`}>
                                <div className='grid justify-items-center'>
                                    <img className='w-8 h-8' src={ConstantIcons.energy} />
                                    <div className={labelTextStyle}>ENERGY</div>
                                    <div className='text-sm text-white '>{this.state.data.details.energy}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial w-1/2 py-2 pr-2">
                        <div className={`rounded-md bg-[${ConstantColors.cardColor}]`}>
                            <img className='rounded-md object-cover w-full h-40' src={this.state.data.image} alt={this.state.data.image} />
                            <div className='px-4'>
                                <div className='text-xl'>{this.state.data.name}</div>
                                <div className={`text-xs pt-1 font-extrabold text-[${ConstantColors.subtitleColor}]`}>{this.state.data.details.foodType}</div>
                                <div className={`text-[10px] pt-4 pb-4 tracking-[.25em] text-[${ConstantColors.subtitleColor}]`}>ADD OPTIONS</div>
                                {
                                    this.state.data.details.addOns.map((element: any, i: number) => {
                                        return (
                                            <div key={i} className='flex py-2'>
                                                <IonCheckbox className='w-4 h-4' />
                                                <div className='flex-1 text-sm ml-2'>{element.name}</div>
                                                <div className='flex text-sm'>{element.price}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className='bg-green-500 rounded-b-md py-2 grid justify-items-center'>
                                <div>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonPage >
        )
    }
}
