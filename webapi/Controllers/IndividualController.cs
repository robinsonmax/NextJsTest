using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IndividualController : ControllerBase
    {
        [HttpGet(Name = "GetIndividual")]
        public Individual Get(int id)
        {
            // Just delaying the API response to test loading indicators
            Thread.Sleep(500);

            return new Individual() { 
                ID = id,
                FirstName = "Max",
                Surname = "Robinson",
                DateOfBirth = new DateOnly(2000, 1, 1),
                StartDate = DateTime.Now.AddDays(1),
                EndDate = null
            };
        }

    }
}
