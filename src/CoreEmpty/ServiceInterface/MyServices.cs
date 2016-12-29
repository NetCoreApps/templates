using $saferootprojectname$.ServiceModel;
using ServiceStack;

namespace $saferootprojectname$.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = "Hello, {0}!".Fmt(request.Name) };
        }
    }
}