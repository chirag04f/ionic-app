import { IonCheckbox, IonContent, IonButtons, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonToolbar, IonTitle } from '@ionic/react';
import React, { Component } from 'react'
import AppHeader from '../../components/AppHeader';
import { ConstantColors, ConstantIcons } from '../../theme/Constant';
import './FoodDetail.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MenuDrawer from '../../components/MenuDrawer';

export default class FoodDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = props.location.state;
    }
    render() {
        const slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        const addLetterSpcaing = "text-[10px] tracking-[.25em]";
        const labelTextStyle = `text-xs ${addLetterSpcaing} text-[${ConstantColors.subtitleColor}] font-bold pt-3`;
        return (
            <div className="h-screen">
                <div className='flex'>
                    <AppHeader />
                    <MenuDrawer />
                </div>
                <IonContent>
                    <div className='flex'>
                        {/* Side Bar */}
                        <div className="flex-none w-16 h-screen pt-4 bg-[#1F1F1F]">
                        </div>
                        {/*  */}
                        {/* Left Side Panel */}
                        <div className="flex-initial h-screen w-1/2 px-2 py-2">
                            {/* Description Card */}
                            <div className={`rounded-md bg-[${ConstantColors.cardColor}] p-6`}>
                                <div className={`text-xs ${addLetterSpcaing} text-[${ConstantColors.subtitleColor}] font-bold pb-3`}>DESCRIPTION</div>
                                <div className='text-sm text-white '>{this.state.data.details.description}</div>
                            </div>
                            {/*  */}
                            {/* Food Item Details Grid */}
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
                            {/*  */}
                            <div className={`rounded-md bg-[${ConstantColors.cardColor}] mt-2 p-6`}>
                                <div className={`${addLetterSpcaing} text-xs text-[${ConstantColors.subtitleColor}] font-bold pb-3`}>INGREDIENTS</div>
                                {
                                    this.state.data.details.ingredients.map((ingredient: any, index: number) => {
                                        return (
                                            <span key={index} className='inline-block text-sm pr-5 text-white '>{ingredient}</span>
                                        );
                                    })
                                }
                            </div>
                            <div className={`rounded-md bg-[${ConstantColors.cardColor}] mt-2 p-6`}>
                                <div className={`${addLetterSpcaing} text-xs text-[${ConstantColors.subtitleColor}] font-bold pb-3`}>RELATED ITEMS YOU MAY LIKE
                                    <div className="container-snap flex overflow-x-auto mt-4">
                                        {
                                            this.state.data.details.ingredients.map((item: any, index: number) => {
                                                return (
                                                    <section className="relative flex-shrink-0">
                                                        <span><img src={this.state.data.image} className="object-cover h-32 mr-2 rounded-2xl" alt="" /></span>
                                                        <span className='absolute w-full py-2.5 bottom-0 inset-x-0 top-0 px-4 text-white text-sm font-semibold text-left tracking-[0em]'>{item}</span>
                                                        <span className='absolute w-full py-2.5 bottom-0 inset-x-0 top-5 px-4 text-white text-xs font-normal text-left tracking-[0em]'>$ {index}.00</span>
                                                    </section>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* Right Side Panel */}
                        <div className="flex-initial h-screen w-1/2 py-2 pr-2">
                            <div className={`rounded-md bg-[${ConstantColors.cardColor}]`}>
                                <Swiper pagination={true} modules={[Pagination]} className="cursor-pointer">
                                    <SwiperSlide>
                                        <img className='rounded-md object-cover w-full h-40' src={this.state.data.image} alt={this.state.data.image} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='rounded-md object-cover w-full h-40' src={this.state.data.image} alt={this.state.data.image} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='rounded-md object-cover w-full h-40' src={this.state.data.image} alt={this.state.data.image} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='rounded-md object-cover w-full h-40' src={this.state.data.image} alt={this.state.data.image} />
                                    </SwiperSlide>
                                </Swiper>
                                <div className='px-4'>
                                    <div className='text-xl'>{this.state.data.name}</div>
                                    <div className={`text-xs pt-1 font-extrabold text-[${ConstantColors.subtitleColor}]`}>{this.state.data.details.foodType}</div>
                                    <div className={`${addLetterSpcaing} pt-4 pb-4 text-[${ConstantColors.subtitleColor}]`}>ADD OPTIONS</div>
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
                                <div className='bg-green-500 rounded-b-md py-2 grid justify-items-center cursor-pointer'>
                                    <div>Add to Cart</div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </IonContent >
            </div >
        )
    }
}
