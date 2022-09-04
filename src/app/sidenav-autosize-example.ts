import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ArrayAlgosService } from './algo/array/service/array-algos';
import { AlgoQaData } from './common/algo-qa-data';


/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrls: ['sidenav-autosize-example.css'],
})
export class SidenavAutosizeExample {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  public algoDataMap: Map<number, AlgoQaData> = new Map<number, AlgoQaData>();

  public currentAlgoQaData: AlgoQaData = new AlgoQaData();

  constructor(
    public arrayAlogs: ArrayAlgosService
  ) {

    arrayAlogs.algoQandAnsdataArray.forEach((element, index, array) => {

      element.tag = index;
      this.algoDataMap.set(index, element);


    });


  }

  public question_click(algoQaData: any): void {


    console.log(algoQaData);

    let curAlgoQaData = this.algoDataMap.get(algoQaData.tag);
    if (curAlgoQaData) {
      this.currentAlgoQaData = curAlgoQaData;
    }

  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */