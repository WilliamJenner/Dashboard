using Net6SpaTemplate;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

Log.Information("Starting up");

try
{
    var app = ConfigureBuilder(args).Build();

    ConfigureApp(app);

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    Log.Information("Shut down complete");
    Log.CloseAndFlush();
}

#region Bootstrapping Methods

WebApplicationBuilder ConfigureBuilder(string[] strings)
{
    var webApplicationBuilder = WebApplication.CreateBuilder(strings);

    webApplicationBuilder.Host.UseSerilog();

    webApplicationBuilder.Services.Configure<AppSettings>(provider => webApplicationBuilder.Configuration.GetSection("AppSettings").Bind(provider));
    
    var mvcBuilder = webApplicationBuilder.Services.AddControllersWithViews();

    if (webApplicationBuilder.Environment.IsDevelopment())
    {
        mvcBuilder.AddRazorRuntimeCompilation();
    }

    webApplicationBuilder.Services.AddResponseCompression();

    return webApplicationBuilder;
}

void ConfigureApp(WebApplication webApplication)
{
    webApplication.UseSerilogRequestLogging();

    webApplication.UseHttpsRedirection();

    webApplication.UseStaticFiles();

    webApplication.UseRouting();

    webApplication.UseAuthorization();

    webApplication.UseResponseCompression();

    webApplication.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            "default",
            "{controller=Home}/{action=Index}/{id?}");

        endpoints.MapFallbackToController("Index", "Home");
    });

    //SpaServices needs to be registered last 
    if (webApplication.Environment.IsDevelopment())
    {
        webApplication.Use(async (context, next) =>
        {
            context.Response.Headers.Add("Cache-Control", "private, no-cache");
            await next.Invoke();
        });
        webApplication.UseDeveloperExceptionPage();
    }
}

#endregion