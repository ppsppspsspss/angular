using job_application_management_system_api.Models;
using job_application_management_system_api.Repositories.IServices;
using SocialMedia.API.Data;
using job_application_management_system_api.Models.DTOs; // Add this import for List<T>

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

        public string JobApplication(JobApplicationDTO jobApplicationDTO) {

            var _jobApplication = new JobApplication
            {
                jobID = jobApplicationDTO.jobID,
                firstName = jobApplicationDTO.firstName,
                lastName = jobApplicationDTO.lastName,
                fathersName = jobApplicationDTO.fathersName,
                mothersName = jobApplicationDTO.mothersName,
                phone = jobApplicationDTO.phone,
                email = jobApplicationDTO.email,
                currentAddress = jobApplicationDTO.currentAddress,
                permanentAddress = jobApplicationDTO.permanentAddress,
                bscStatus = jobApplicationDTO.bscStatus,
                bscAdmissionDate = jobApplicationDTO.bscAdmissionDate,
                bscAIUB = jobApplicationDTO.bscAIUB,
                bscAIUBID = jobApplicationDTO.bscAIUBID,
                bscUniversity = jobApplicationDTO.bscUniversity,
                bscCGPA = jobApplicationDTO.bscCGPA,
                bscGraduate = jobApplicationDTO.bscGraduate,
                bscGraduationDate = jobApplicationDTO.bscGraduationDate,
                mscStatus = jobApplicationDTO.mscStatus,
                mscAdmissionDate = jobApplicationDTO.mscAdmissionDate,
                mscAIUB = jobApplicationDTO.mscAIUB,
                mscAIUBID = jobApplicationDTO.mscAIUBID,
                mscUniversity = jobApplicationDTO.mscUniversity,
                mscCGPA = jobApplicationDTO.mscCGPA,
                mscGraduate = jobApplicationDTO.mscGraduate,
                mscGraduationDate = jobApplicationDTO.mscGraduationDate,
                cv = jobApplicationDTO.cv
            };

            _db.JobApplication.Add(_jobApplication);
            _db.SaveChanges();

            return "Job application submitted successfully.";
            
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
