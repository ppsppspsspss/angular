using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace job_application_management_system_api.Models
{
    public class JobApplication
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int jobApplicationID { get; set; }
        public int jobID { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? fathersName { get; set; }
        public string? mothersName { get; set; }
        public string? phone { get; set; }
        public string? email { get; set; }
        public string? currentAddress { get; set; }
        public string? permanentAddress { get; set; }
        public string? bscStatus { get; set; }
        public string? bscAdmissionDate { get; set; }
        public string? bscGraduationDate { get; set; }
        public string? mscStatus { get; set; }
        public string? mscAdmissionDate { get; set; }
        public string? mscGraduationDate { get; set; }
        public string? cv { get; set; }

    }
}
