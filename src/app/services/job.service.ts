import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../types/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5171/api/job"

  getAllJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this.baseUrl + "/get-all-jobs", {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }

  getJob(jobID: number): Observable<Job>{
    return this.http.get<Job>(this.baseUrl + "/get-job/" + jobID , {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }

}
