import {Component, Input, OnInit} from '@angular/core';
import {interpolateParams} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-AppListpPostComponent',
  templateUrl: './app-listp-post.component.html',
  styleUrls: ['./app-listp-post.component.scss']
})
export class AppListpPostComponent  {

  title = 'Bienvenue sur mon blog!';

  posts =[
    {
      title : 'Premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
        'ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec ' +
        'nonummy molestie, enim est eleifend mi'
    },
    {
      title : 'deuxième post ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
        'ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec ' +
        'nonummy molestie, enim est eleifend mi'
    },
    {
      title : 'troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ' +
        'ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec ' +
        'nonummy molestie, enim est eleifend mi'
    }

  ];


}
