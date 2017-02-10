using Angular2SPAApp.ServiceInterface;
using Angular2SPAApp.ServiceModel;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Testing;

namespace Angular2SPAApp.Tests
{
    public class UnitTests
    {
        private readonly ServiceStackHost appHost;

        public UnitTests()
        {
            appHost = new BasicAppHost(typeof(MyServices).GetAssembly())
                {
                    ConfigureContainer = container =>
                    {
                        //Add your IoC dependencies here
                    }
                }
                .Init();
        }

        [OneTimeTearDown]
        public void TestFixtureTearDown()
        {
            appHost.Dispose();
        }

        [Test]
        public void TestMethod1()
        {
            var service = appHost.Container.Resolve<MyServices>();

            var response = (HelloResponse)service.Any(new Hello { Name = "World" });

            Assert.That(response.Result, Is.EqualTo("Hello, World!"));
        }
    }
}