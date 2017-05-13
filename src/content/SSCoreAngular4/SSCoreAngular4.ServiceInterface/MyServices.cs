using System;
using ServiceStack;
using SSCoreAngular4.ServiceModel;

namespace SSCoreAngular4.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = "Hello, {0}!".Fmt(request.Name) };
        }
    }
}
