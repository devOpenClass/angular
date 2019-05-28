import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  content: string;
  createdAt = new Date();
  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
    this.loveIts = 0;
  }
  onLoveIt(){
    this.loveIts += 1;
  }
  onDontLoveIt(){
    this.loveIts -= 1;
  }
  getLoveits(){
    return this.loveIts;
  }
  loveit(){
    if(this.loveIts > 0) {
      return 'list-group-item-success';
    }
    else if (this.loveIts < 0 ) {
      return 'list-group-item-danger';
    }
    else if (this.loveIts === 0){
      return 'ist-group-item';
    }
  }

}
