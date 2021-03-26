using MeetingTimer.Controllers;
using MeetingTimer.Models;
using MeetingTimer.Repositories.Interfaces;
using MeetingTimer.ResponseModels;
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
        public async Task CreateSession_WhenModelIsValid_ReturnsCreatedSessionResponse()
        {
            const int sessionId = 1;
            var session = new Session
            {
                SessionId = sessionId,
            };

            _mockRepository
                .Setup(repo => repo.CreateSession())
                .ReturnsAsync(session);

            var response = await _controller.CreateSession();

            var createdResponse = Assert.IsType<CreatedAtActionResult>(response.Result);
            var sessionResponse = Assert.IsType<SessionResponse>(createdResponse.Value);
            Assert.Equal(expected: sessionId, actual: sessionResponse.SessionId);
        }

        [Fact]
        public async Task CreateSession_GivenInvalidModel_ReturnsBadRequest()
        {
            const string errorKey = "Error";
            const string errorMessage = "Message";
            _controller.ModelState.AddModelError(errorKey, errorMessage);

            var response = await _controller.CreateSession();

            var badRequestResult = Assert.IsType<BadRequestObjectResult>(response.Result);
            var errors = Assert.IsType<SerializableError>(badRequestResult.Value);
            Assert.True(errors.ContainsKey(errorKey));
            Assert.Equal(expected: errorMessage, actual: (errors[errorKey] as string[])[0]);
        }
    }
}
