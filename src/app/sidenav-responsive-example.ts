import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { ArrayAlgos } from './algo/array/service/array-algos';
import { AlgoQaData } from './common/algo-qa-data';

/** @title Responsive sidenav */
@Component({
  selector: 'sidenav-responsive-example',
  templateUrl: 'sidenav-responsive-example.html',
  styleUrls: ['sidenav-responsive-example.css'],
})
export class SidenavResponsiveExample implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav : Map<number, AlgoQaData>;

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  public algoDataMap:Map<number, AlgoQaData> = new Map<number, AlgoQaData>();

  constructor(
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher,
     arrayAlogs: ArrayAlgos
     ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);



    arrayAlogs.algoQandAnsdataArray.forEach((element, index, array)  => {
      
      element.tag = index;
      this.algoDataMap.set(index, element);


    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true; // /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */