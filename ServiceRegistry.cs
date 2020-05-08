using Microsoft.Extensions.DependencyInjection;
using Scrutor;
using System.CodeDom.Compiler;
using WebApplication1;

namespace WebApp
{
    public class ServiceRegistry
    {
        public static void ScanForAllRemainingRegistrations(IServiceCollection services)
        {
            services.Scan(scan => scan
                .FromAssembliesOf(typeof(Startup))
                .AddClasses(x => x.WithoutAttribute(typeof(GeneratedCodeAttribute)))
                .UsingRegistrationStrategy(RegistrationStrategy.Skip)
                .AsImplementedInterfaces()
                .WithScopedLifetime());
        }
    }
}
