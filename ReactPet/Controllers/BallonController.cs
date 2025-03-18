using BallonServiceContract;
using Microsoft.AspNetCore.Mvc;

namespace ReactPet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BallonController : ControllerBase
    {
        private readonly IBallonService ballonService;

        BallonController(IBallonService ballonService) : base()
        {
            this.ballonService = ballonService;
        }
      
        

    }
}