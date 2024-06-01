using job_application_management_system_api.Models.DTOs;
using job_application_management_system_api.Repositories.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/job")]
[EnableCors("AllowSpecificOrigins")]
public class JobController : ControllerBase
{
    private readonly IJobService _jobService;

    public JobController(IJobService jobService)
    {
        _jobService = jobService;
    }

    [AllowAnonymous]
    [HttpPost("job-application")]
    public ActionResult JobApplication([FromBody] JobApplicationDTO jobApplicationDTO)
    {
        try
        {
            _jobService.JobApplication(jobApplicationDTO);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [AllowAnonymous]
    [HttpGet("get-all-jobs")]
    public ActionResult GetAllJobs()
    {
        try
        {
            var jobs = _jobService.GetAllJobs();
            return Ok(jobs);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [AllowAnonymous]
    [HttpGet("get-job/{jobID}")]
    public ActionResult GetJob(int jobID)
    {
        try
        {
            var job = _jobService.GetJob(jobID);
            return Ok(job);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }
}
