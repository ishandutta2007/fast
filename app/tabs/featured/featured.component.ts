import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "Featured",
  moduleId: module.id,
  template: `
  <ListView [items]="channels$ | async" class="list-group">
    <ng-template let-dataitem="item">
      <GridLayout class="list-group-item" rows="auto" columns="*, auto, auto">
        <Label [text]="dataitem.name" android:class="label-item" colSpan="2" row="0"></Label>
        <Button [text]="dataitem.isSelected?'UnFollow':'follow'" 
                [class]="dataitem.isSelected?'btn btn-rounded-lg btn-primary':'btn btn-rounded-lg btn-outline'"
                (tap)="dataitem.isSelected?unfollow(dataitem):follow(dataitem)" col="2" row="0"></Button>
      </GridLayout>
    </ng-template>
  </ListView>
  `
})
export class FeaturedComponent implements OnInit {
  public channels$: Observable<any>;
  constructor(
    private ngZone: NgZone,
    private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.channels$ = <any>this.firebaseService.getPath('channels');
  }

  unfollow(dataitem) {
     dataitem.isSelected = false;//not working
  }
  follow(dataitem) {
     dataitem.isSelected = true;//not working
  }
}
