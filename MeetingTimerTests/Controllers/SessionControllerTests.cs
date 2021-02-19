using MeetingTimer.Controllers;
using MeetingTimer.Models;
using MeetingTimer.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace MeetingTimerTests.Controllers
{
    public class SessionControllerTests
    {
        [Fact]
        public async Task CreateSession_WhenModelIsValid_ReturnsCreatedResponse()
        {
            var session = new Session();
            var mockRepository = new Mock<ISessionRepository>();
            mockRepository
                .Setup(repo => repo.CreateSession())
                .ReturnsAsync(session);
            var controller = new SessionController(mockRepository.Object);

            var response = await controller.CreateSession();

            Assert.IsType<CreatedAtActionResult>(response.Result);
        }

        [Fact]
        public async Task CreateSession_GivenInvalidModel_ReturnsBadRequest()
        {
            var mockRepository = new Mock<ISessionRepository>();
            var controller = new SessionController(mockRepository.Object);
            controller.ModelState.AddModelError("error", "some error");

            var response = await controller.CreateSession();

            Assert.IsType<BadRequestResult>(response.Result);
        }
    }
}
