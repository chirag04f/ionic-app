import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { Component } from 'react'
import AppHeader from '../components/AppHeader';
import TableCard from '../components/TableCard'
import FakeData from '../data/FakeData';
import { TableCardProps } from '../interfaces/CustomInterfaces';


export default class AllTables extends Component<any, any> {
    tableData: Array<TableCardProps> = FakeData.allTableData();
    render() {
        return (
            <IonPage>
                <AppHeader />
                <IonContent>
                    <div className='p-2 grid gap-4 grid-cols-4 grid-rows-3'>
                        {this.tableData.map((element: any, i: number) => {
                            return (
                                <TableCard
                                    key={i}
                                    index={i + 1}
                                    itemsOrder={element.itemsOrder}
                                    timeLeft={element.timeLeft}
                                    isCancelled={element.isCancelled}
                                />
                            );
                        })}
                    </div>
                </IonContent>
            </IonPage>
        )
    }
}
