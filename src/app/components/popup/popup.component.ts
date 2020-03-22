import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodItemService } from 'src/app/services/food-item/food-item.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ErrorDialogPopupComponent } from '../error-dialog-popup/error-dialog-popup.component';

//  Delete Pop Up confirmation added by Daykel Muro 10/4/2019
@Component({
    selector: 'popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent {

    @Input() id;
    data: any;

    constructor(public activeModal: NgbActiveModal,
                public foodService: FoodItemService,
                private router: Router,
                private errorDialog: MatDialog, ) {
    }

    onClose(): void {
        console.log(this.id);
        this.foodService.deleteFoodItem(this.id).subscribe(newData => {
            this.data = newData;
            window.location.reload();
        });
        this.activeModal.close('closed');
    }

    onDismiss(reason: String): void {
        this.activeModal.dismiss(reason);
    }
}
