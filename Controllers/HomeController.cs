using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Net6SpaTemplate.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppSettings _appConfig;

        public HomeController(IOptions<AppSettings> appConfig)
        {
            _appConfig = appConfig.Value;
        }

        public IActionResult Index()
        {

            return View("Index", _appConfig);
        }
    }
}
