import { IonAvatar, IonContent, IonItem, IonLabel, IonListHeader, IonPage, IonText, IonTitle } from "@ionic/react";
import { useHistory } from "react-router-dom";
import React from "react";
interface UserSingleListProps {
    result: any;
}
const UserSingleList: React.FC<UserSingleListProps> = ({ result }) => {
    const [userData, setUserData] = React.useState(result);
    const history = useHistory();
    var redirectPath = `/user`;
    return (
        <IonItem onClick={() => {
            history.push(
                redirectPath,
                result
            )
        }}>
            <IonAvatar>
                <img src={userData.picture.thumbnail}></img>
            </IonAvatar>
            <h2 className="item-text-wrap text-teal-800">{userData.name.title + " " + userData.name.first + " " + userData.name.last}</h2>
            <br />
            <h5 className="item-text-wrap text-purple-800">{userData.email}</h5>
        </IonItem>
    );
};

export default UserSingleList;

