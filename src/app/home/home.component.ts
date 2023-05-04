import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  @ViewChild('modal') modal!: ElementRef;

  openModal() {
    const modal = document.body.querySelector("#modal");
    if(!modal) {
      return;
    }
    this.modal.nativeElement.open();
  }

  closeModal() {
    const modal = document.body.querySelector("#modal");
    if(!modal) {
      return;
    }
    this.modal.nativeElement.close();
  }

}
