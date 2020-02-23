import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  tests : Test[] = [
    {
      Id : 1, 
      desc : 'Do Some test'
    },
    {
      Id : 2,
      desc : 'do another'
    },
    {
      Id : 3,
      desc : 'and another'
    },
    {
      Id : 4, 
      desc : 'but do this first!'
    },
    {
      Id : 5,
      desc : 'Re-order me'
    },
    {
      Id : 6,
      desc : 'drag me!!'
    },
    {
      Id : 7, 
      desc : 'All the other tests should go first'
    },
    {
      Id : 8,
      desc : 'make me number 4'
    },
    {
      Id : 9,
      desc : 'I can\'t think of anything else...'
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
    for(let i in this.tests){
      this.tests[i].Id =  +i + 1;
    }
  }

}

export interface Test {
  Id: number;
  desc: string;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */