import { IonContent, IonHeader, IonNav, IonPage, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import UserSingleList from "../components/UserSingleList";
import FakeData from "../data/FakeData";

class UserListScreen extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            userData: {},
            isFetching: true,
        }
    }
    componentDidMount() {
        if (FakeData.allUserData.result !== undefined) {
            return;
        }
        console.log("fetching data");
        fetch("https://randomuser.me/api/?results=10")
            .then((res) => {
                return res.json()
            }).then((json) => {
                FakeData.setUserData(json);
                this.setState({
                    isFetching: false,
                    userData: json,
                });
            });
    }

    render() {
        var { userData, isFetching } = this.state;
        return (
            <IonPage>
                <IonNav class="ion-nav">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>All Users</IonTitle>
                            {/* <IonTitle>{result.name.title + " " + result.name.first + " " + result.name.last}</IonTitle> */}
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen>
                        {isFetching
                            ? <IonSpinner color="primary" />
                            : <IonContent>
                                <IonTitle>User Fetched</IonTitle>
                                {FakeData.allUserData.results.map((element: any, i: number) => {
                                    return (<UserSingleList key={i} result={element} ></UserSingleList>);
                                })}
                            </IonContent>
                        }
                    </IonContent>
                </IonNav>
            </IonPage>
        );
    }
};

export default UserListScreen;

