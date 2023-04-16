using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DashboardController : ControllerBase
    {

        [HttpGet(Name = "GetPanel")]
        public DashboardPanel Get(int id)
        {
            // Just delaying the API response to test loading indicators
            Thread.Sleep(200);

            return new DashboardPanel() { 
                AsOf = DateTime.UtcNow,
                Title = $"This is panel {id}",
                PanelJson = ""
            };
        }

    }
}
