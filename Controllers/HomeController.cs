using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("*")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly AppSettings _appSettings;

        public HomeController(ILogger<HomeController> logger, IOptionsMonitor<AppSettings> appSettings)
        {
            _logger = logger;

            _appSettings = appSettings.CurrentValue;
        }

        public IActionResult Index()
        {
            var appState = new AppState
            {
                AppSettings = _appSettings
            };

            HttpContext.Response.Headers.Add("Refresh", "6000;");

            return View(appState);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}