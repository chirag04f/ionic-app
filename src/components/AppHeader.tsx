import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

export default function AppHeader() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Restaurant <span className='text-yellow-300'>Tables</span></IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}
