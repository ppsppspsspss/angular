using job_application_management_system_api.Models;
using job_application_management_system_api.Models.DTOs;

namespace job_application_management_system_api.Repositories.IServices
{
    public interface IJobService
    {
        List<Job> GetAllJobs();
        Job GetJob(int jobID);
        string JobApplication(JobApplicationDTO jobApplicationDTO);
    }
}
