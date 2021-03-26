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
        private readonly Mock<ISessionRepository> _mockRepository;
        private readonly SessionController _controller;

        public SessionControllerTests()
        {
            _mockRepository = new Mock<ISessionRepository>();
            _controller = new SessionController(_mockRepository.Object);
        }

        [Fact]
        public async Task CreateSession_WhenModelIsValid_ReturnsCreatedResponse()
        {
            var session = new Session();
            _mockRepository
                .Setup(repo => repo.CreateSession())
                .ReturnsAsync(session);

            var response = await _controller.CreateSession();

            Assert.IsType<CreatedAtActionResult>(response.Result);
        }

        [Fact]
        public async Task CreateSession_GivenInvalidModel_ReturnsBadRequest()
        {
            _controller.ModelState.AddModelError("error", "some error");

            var response = await _controller.CreateSession();

            Assert.IsType<BadRequestResult>(response.Result);
        }
    }
}
