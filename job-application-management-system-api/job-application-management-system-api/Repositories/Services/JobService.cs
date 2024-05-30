using job_application_management_system_api.Models;
using job_application_management_system_api.Repositories.IServices;
using SocialMedia.API.Data;
using Microsoft.EntityFrameworkCore; // Add this import for DbSet<T>
using Microsoft.Extensions.Configuration; // Add this import for IConfiguration
using System; // Add this import for Exception
using System.Collections.Generic; // Add this import for List<T>

namespace job_application_management_system_api.Repositories.Services
{
    public class JobService : IJobService
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _configuration;

        public JobService(ApplicationDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
        }

        public List<Job> GetAllJobs() {

            var jobs = _db.Job.ToList();

            if (jobs.Count > 0) return jobs;
            else throw new Exception("No jobs found");

        }

        public Job GetJob(int jobID)
        {
            var job = _db.Job.FirstOrDefault(job => job.jobID == jobID);

            if (job != null) return job;
            else throw new Exception("No job found");

        }

    }
}
