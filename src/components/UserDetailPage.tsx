import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { useHistory, useLocation } from "react-router-dom";

interface UserDetailPageProps {
    result: any;
}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ result }) => {
    const location = useLocation<Location>();
    const userData = location.state as any;
    const history = useHistory();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Detail</IonTitle>
                    <IonTitle>{userData.name.title + " " + userData.name.first + " " + userData.name.last}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton onClick={history.goBack}></IonButton>
            </IonContent>
        </IonPage>
    )
}

export default UserDetailPage;
