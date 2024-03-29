﻿using MeetingTimer.Repositories.Interfaces;
using MeetingTimer.ResponseModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using System.Threading.Tasks;

namespace MeetingTimer.Controllers
{
    public class SessionController : BaseController
    {
        private readonly ISessionRepository _sessionRepository;

        public SessionController(ISessionRepository sessionRepository)
        {
            _sessionRepository = sessionRepository;
        }

        /// <summary>
        /// Creates a session
        /// </summary>
        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<SessionResponse>> CreateSession()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var session = await _sessionRepository.CreateSession();

            var response = new SessionResponse()
            {
                SessionId = session.SessionId,
                HostId = session.HostId,
            };

            return CreatedAtAction(
                actionName: nameof(GetSession),
                routeValues: new { id = response.SessionId },
                value: response);
        }

        /// <summary>
        /// Get a session by Id
        /// </summary>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SessionResponse))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<SessionResponse>> GetSession(int id)
        {
            var session = await _sessionRepository.GetSessionById(id);

            if (session == null)
            {
                return NotFound();
            }

            var response = new SessionResponse()
            {
                SessionId = session.SessionId,
                HostId = session.HostId,
            };

            return Ok(response);
        }
    }
}
