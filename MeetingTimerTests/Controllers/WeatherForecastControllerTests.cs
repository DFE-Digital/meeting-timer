using MeetingTimer;
using MeetingTimer.Controllers;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace MeetingTimerTests.Controllers
{
    public class WeatherForcastControllerTests
    {
        [Fact]
        public void GetTest_ReturnsTest()
        {
            // Arrange
            var mockLogger = new Mock<ILogger<WeatherForecastController>>().Object;
            var weatherForecastController = new WeatherForecastController(mockLogger);

            // Act
            var result = weatherForecastController.GetTest();

            // Assert
            Assert.Equal("test", result);
        }
    }
}
