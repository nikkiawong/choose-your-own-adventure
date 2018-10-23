import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [StoryService]
})
export class StartComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private storyService: StoryService) { }

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }

}
