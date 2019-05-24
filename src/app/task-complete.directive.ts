import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[capTaskComplete]'
})
export class TaskCompleteDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultStatus: boolean = false;

  @Input('capTaskComplete') taskStatus: boolean = false;

  @HostListener('mousedown') onmousedown(){
    this.taskStatus = !this.taskStatus;
    this.checkTask(this.taskStatus || this.defaultStatus || false);
  }  

  private checkTask(status: boolean){
    if(status){
      this.el.nativeElement.style.color = "greenyellow";
    } else{
      this.el.nativeElement.style.color = "silver";
    }
  }
}
