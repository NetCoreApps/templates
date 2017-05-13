using NUnit.Framework;
using ServiceStack;
using ServiceStack.Testing;
using SSCoreAngular4.ServiceInterface;
using SSCoreAngular4.ServiceModel;

namespace SSCoreAngular4.Tests
{
    [TestFixture]
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
        public void Test_Method1()
        {
            var service = appHost.Container.Resolve<MyServices>();

            var response = (HelloResponse)service.Any(new Hello { Name = "World" });

            Assert.That(response.Result, Is.EqualTo("Hello, World!"));
        }
    }
}
