import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'ig-car-pool',
  templateUrl: 'car-pool.html',
  styleUrls: ['./car-pool.scss'],
})
export class CarPoolPage {
  // speaker: any;
  // constructor(private dataProvider: ConferenceData, private router: Router, private route: ActivatedRoute) {}
  // ionViewWillEnter() {
  //   this.dataProvider.load().subscribe((data: any) => {
  //     const speakerId = this.route.snapshot.paramMap.get('speakerId');
  //     if (data && data.speakers) {
  //       for (const speaker of data.speakers) {
  //         if (speaker && speaker.id === speakerId) {
  //           this.speaker = speaker;
  //           break;
  //         }
  //       }
  //     }
  //   });
  // }
}
