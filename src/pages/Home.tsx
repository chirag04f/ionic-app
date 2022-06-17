import {
  IonBadge, IonContent, IonHeader, IonPage,
  IonTitle, IonToolbar, IonList, IonItem,
  IonLabel, IonRadio, IonInput, IonItemOptions,
  IonToggle, IonItemSliding, IonCheckbox, IonItemOption, IonAvatar
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
          <IonBadge color="tertiary" slot='end'>99</IonBadge>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListExample />
      </IonContent>
    </IonPage>
  );
};

const ListExample: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellowwwwwwwwwww</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonAvatar>
          <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" />
        </IonAvatar>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>

    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item Start</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => { }}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => { }}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => { }}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => { }}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);

export default Home;
