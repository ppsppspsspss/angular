import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

  constructor(private route: ActivatedRoute) { }

  jobID: number | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobID = params['jobID'];
    });
  }

}
