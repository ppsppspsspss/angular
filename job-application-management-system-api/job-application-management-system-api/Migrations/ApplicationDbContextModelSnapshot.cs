﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SocialMedia.API.Data;

#nullable disable

namespace jobapplicationmanagementsystemapi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("SocialMedia.API.Models.User", b =>
                {
                    b.Property<int>("userID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("userID"));

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fullname")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("role")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("userID");

                    b.ToTable("User");
                });

            modelBuilder.Entity("job_application_management_system_api.Models.Job", b =>
                {
                    b.Property<int>("jobID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("jobID"));

                    b.Property<string>("applicants")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("deadline")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("designation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("jobTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("jobType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("maxApplicants")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("negotiable")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phone")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("postedOn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("salary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("workHourEnd")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("workHourStart")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("jobID");

                    b.ToTable("Job");
                });

            modelBuilder.Entity("job_application_management_system_api.Models.JobApplication", b =>
                {
                    b.Property<int>("jobApplicationID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("jobApplicationID"));

                    b.Property<string>("bscAIUB")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscAIUBID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscAdmissionDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscCGPA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscGraduate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscGraduationDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("bscUniversity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("currentAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("cv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fathersName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("jobID")
                        .HasColumnType("int");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mothersName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscAIUB")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscAIUBID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscAdmissionDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscCGPA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscGraduate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscGraduationDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("mscUniversity")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("permanentAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("jobApplicationID");

                    b.ToTable("JobApplication");
                });

            modelBuilder.Entity("job_application_management_system_api.Models.JobRequirement", b =>
                {
                    b.Property<int>("jobRequirementID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("jobRequirementID"));

                    b.Property<int>("jobID")
                        .HasColumnType("int");

                    b.Property<string>("requirement")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("jobRequirementID");

                    b.ToTable("JobRequirement");
                });

            modelBuilder.Entity("job_application_management_system_api.Models.JobResponsibility", b =>
                {
                    b.Property<int>("jobResponsibilityID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("jobResponsibilityID"));

                    b.Property<int>("jobID")
                        .HasColumnType("int");

                    b.Property<string>("responsibility")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("jobResponsibilityID");

                    b.ToTable("JobResponsibility");
                });

            modelBuilder.Entity("job_application_management_system_api.Models.UserSkill", b =>
                {
                    b.Property<int>("userSkillID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("userSkillID"));

                    b.Property<int>("jobApplicationID")
                        .HasColumnType("int");

                    b.Property<string>("skill")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("userSkillID");

                    b.ToTable("UserSkill");
                });
#pragma warning restore 612, 618
        }
    }
}
