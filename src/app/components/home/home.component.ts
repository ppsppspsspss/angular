import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/types/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  token = localStorage.getItem("access-token");
  role = this.token != null ? 'Admin' : 'User';
  jobs: Job[] = [];
  visible: boolean = false;
  loadJob: Partial<Job> = {};

  constructor(private authService: AuthService, private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  getRemainingVacancies(job: any): number {
    return Number.parseInt(job.maxApplicants) - Number.parseInt(job.applicants);
  }

  loadJobs(): void {
    this.jobService.getAllJobs().subscribe(
      (data: Job[]) => { 
        this.jobs = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  showDialog(jobID: number) {
    this.jobService.getJob(jobID).subscribe(
      (data: Job) => { 
        this.loadJob = data;
        this.visible = true;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  apply(jobID: number) {
    this.router.navigate(['/application-form', jobID]);
  }
  

}
