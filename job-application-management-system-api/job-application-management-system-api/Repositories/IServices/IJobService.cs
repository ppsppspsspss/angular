using job_application_management_system_api.Models;

namespace job_application_management_system_api.Repositories.IServices
{
    public interface IJobService
    {
        List<Job> GetAllJobs();
        Job GetJob(int jobID);
    }
}
