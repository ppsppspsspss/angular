import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  jobID: number | null = null;
  bsc: boolean = false;
  msc: boolean = false;
  date: string = '';
  bscAIUB: boolean = false;
  bscGraduate: boolean = false;
  mscAIUB: boolean = false;
  mscGraduate: boolean = false;
  skills: string[] = [];
  firstName: string = '';
  lastName: string = '';
  fathersName: string = '';
  mothersName: string = '';
  phone: string = '';
  email: string = '';
  currentAddress: string = '';
  permanentAddress: string = '';
  sameAsCurrentAddress: boolean = false;
  bscAdmissionDate: string = '';
  universityBsc: string = '';
  cgpaBsc: string = '';
  aiubIdBsc: string = '';
  bscGraduationDate: string = '';
  mscAdmissionDate: string = '';
  universityMsc: string = '';
  cgpaMsc: string = '';
  aiubIdMsc: string = '';
  mscGraduationDate: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobID = +params['jobID'];
    });
  }

  onSubmit() {

    const jobApplication = {
      jobID: this.jobID,
      firstName: this.firstName,
      lastName: this.lastName,
      fathersName: this.fathersName,
      mothersName: this.mothersName,
      phone: this.phone,
      email: this.email,
      currentAddress: this.currentAddress,
      permanentAddress: this.permanentAddress,
      bscStatus: this.bsc ? "true" : "false",
      bscAdmissionDate: this.bsc ? this.bscAdmissionDate : null,
      bscAIUB: this.bscAIUB ? "true" : "false",
      bscUniversity: this.bscAIUB ? null : this.universityBsc,
      bscCGPA: this.bscAIUB ? null : this.cgpaBsc,
      bscAIUBID: this.bscAIUB ? this.aiubIdBsc : null,
      bscGraduate: this.bscGraduate ? "true" : "false",
      bscGraduationDate: this.bscGraduate ? this.bscGraduationDate : null,
      mscStatus: this.msc ? "true" : "false",
      mscAdmissionDate: this.msc ? this.mscAdmissionDate : null,
      mscAIUB: this.mscAIUB ? "true" : "false",
      mscUniversity: this.msc ? null : this.universityMsc,
      mscCGPA: this.msc ? null : this.cgpaMsc,
      mscAIUBID: this.mscAIUB ? this.aiubIdMsc : null,
      mscGraduate: this.mscGraduate ? "true" : "false",
      mscGraduationDate: this.mscGraduate ? this.mscGraduationDate : null,
      cv: null
    };

    this.jobService.jobApplication(jobApplication).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );

  }

}
