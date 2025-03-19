using BallonServiceContract;
using Microsoft.AspNetCore.Mvc;

namespace ReactPet.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class BallonController : ControllerBase
    {
        private readonly IBallonService ballonService;

        public BallonController(IBallonService ballonService) : base()
        {
            this.ballonService = ballonService;
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(int id) {
           
            var b=ballonService.Get(id);
            if (b == null) return NotFound(id);
            return Ok(b);
        }
        [HttpGet]
        public List<Balloon> Get() => ballonService.Get();
        [HttpPost]
        public Balloon Create(Balloon b) => ballonService.Create(b);//new Balloon() { Collor = 0, Name = "none", R = 1,PressureAbs=1 }
        [HttpPatch]
        public IActionResult Update(Balloon b)
        {
            Balloon? balloon = ballonService.Update(b);
            if (balloon != null) return Ok(balloon);
            return NotFound(b.Id);
        }

        [HttpDelete("{id}")]
        public IActionResult  Delete(int id) => ballonService.Delete(id) ? Ok() : NotFound();



    }
}