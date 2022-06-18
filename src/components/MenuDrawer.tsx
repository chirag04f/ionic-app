import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { menuController } from "@ionic/core";

export default function MenuDrawer() {
    function openMenu() {
        menuController.open();
    }
    return (
        <div>
            <IonMenu side="end" contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Hello</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Hello</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <div id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonMenuToggle slot="end" color='red'>
                            <button className='px-3 py-2 bg-red-500 rounded-full w-36 mr-4' onClick={openMenu}>Items in Cart (99)</button>
                            {/* <IonButton color="danger" className='rounded-xl'>Items in Cart (2)</IonButton> */}
                        </IonMenuToggle>
                    </IonToolbar>
                </IonHeader>
            </div>
        </div>
    )
}
