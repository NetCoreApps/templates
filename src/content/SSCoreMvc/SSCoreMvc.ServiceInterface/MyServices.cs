using System;
using ServiceStack;
using SSCoreMvc.ServiceModel;

namespace SSCoreMvc.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request) =>
            new HelloResponse { Result = $"Hello, {request.Name}!" };
    }
}
