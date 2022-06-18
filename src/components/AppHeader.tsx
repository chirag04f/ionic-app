import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

import { menuController } from "@ionic/core";
import { menuOutline } from "ionicons/icons";
import MenuDrawer from './MenuDrawer';

export default function AppHeader() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Restaurant <span className='text-yellow-300'>Tables</span></IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}
