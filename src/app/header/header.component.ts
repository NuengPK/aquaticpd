import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
@Output() onoff = new EventEmitter<string>();
  onChangeAquaticFood(){
    this.onoff.emit('aquaticFood');
  };
  onChangeDistribution(){
    this.onoff.emit('distribution');
  };
};
// console.log(this.openAquaticFood,this.openDistribution)
