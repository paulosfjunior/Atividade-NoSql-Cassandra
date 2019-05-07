import { Component ,Event, EventEmitter} from '@stencil/core';

@Component({
    tag: 'app-fab',
    styleUrl: 'app-fab.css'
})

export class AppFab {
    @Event()openModal:EventEmitter

    render() {
        return [
            <ion-fab style={{"z-index":"9"}} vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button>
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
                <ion-fab-list side="top">
                    <ion-fab-button href="/item" ><ion-icon name="beer"></ion-icon></ion-fab-button>
                </ion-fab-list>
                <ion-fab-list side="start">
                    <ion-fab-button href="/customer" ><ion-icon name="person-add"></ion-icon></ion-fab-button>
                </ion-fab-list>

            </ion-fab>
        ];
    }
}
