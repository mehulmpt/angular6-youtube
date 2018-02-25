import { Component } from '@angular/core';
import { RecordsService } from './records.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = []

  constructor(private myFirstService : RecordsService) {
    
  }

  ngOnInit() {
    this.myFirstService.getData().subscribe(data => {
      this.records = data.obj
    })
  }
}
