﻿// <auto-generated />
using MeetingTimer.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MeetingTimer.Migrations
{
    [DbContext(typeof(MeetingTimerDbContext))]
    partial class MeetingTimerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.3")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("MeetingTimer.Models.Host", b =>
                {
                    b.Property<int>("HostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.HasKey("HostId");

                    b.ToTable("Hosts");
                });

            modelBuilder.Entity("MeetingTimer.Models.Member", b =>
                {
                    b.Property<int>("MemberId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("SessionId")
                        .HasColumnType("integer");

                    b.HasKey("MemberId");

                    b.HasIndex("SessionId");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("MeetingTimer.Models.Session", b =>
                {
                    b.Property<int>("SessionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("HostId")
                        .HasColumnType("integer");

                    b.HasKey("SessionId");

                    b.HasIndex("HostId");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("MeetingTimer.Models.Member", b =>
                {
                    b.HasOne("MeetingTimer.Models.Session", "Session")
                        .WithMany("Members")
                        .HasForeignKey("SessionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Session");
                });

            modelBuilder.Entity("MeetingTimer.Models.Session", b =>
                {
                    b.HasOne("MeetingTimer.Models.Host", "Host")
                        .WithMany("Sessions")
                        .HasForeignKey("HostId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Host");
                });

            modelBuilder.Entity("MeetingTimer.Models.Host", b =>
                {
                    b.Navigation("Sessions");
                });

            modelBuilder.Entity("MeetingTimer.Models.Session", b =>
                {
                    b.Navigation("Members");
                });
#pragma warning restore 612, 618
        }
    }
}
