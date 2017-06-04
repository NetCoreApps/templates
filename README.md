# .NET Core ServiceStack Templates for `dotnet new`
This repository contains the latest templates for working with ServiceStack on .NET Core.

## Installation
Currently the latest version of the .NET Core CLI/SDK will require the cloning of this repository for installation, in the future, `dotnet new` will allow installation of these templates via a NuGet package `ServiceStack.Core.Templates`. It also assumes you have a `git` client installed as well as the .NET Core CLI. For now, to install these templates you will need to do the following.

- `git clone https://github.com/NetCoreApps/templates.git {LocalTempPath}`
- `dotnet new -i {LocalTempPath}\templates\src\content`

For example, if you are on Windows with a `Temp` directory, the following script should work.

```
git clone https://github.com/NetCoreApps/templates.git c:\Temp
dotnet new -i c:\Temp\templates\src\content
```

If you are on Ubuntu/Debian, the following should work.
```
git clone https://github.com/NetCoreApps/templates.git /tmp
dotnet new -i /tmp/templates/src/content
```

To confirm the templates are installed correctly, type `dotnet new` into a console and you should see the two ServiceStack Core templates listed. 

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/servicestackvs/dotnet_new_example.png)


## Create a new project
If you want to use the `ss-empty` template now installed, you can use the following command to create a new project with the name `MyApp` in it's own directory.

```
dotnet new -i ss-empty -o MyApp -n MyApp
```

The `-o` argument controls the output directory name and `-n` controls the name of the template. If neither are provided a default `WebApplication1` project will be created within the current directory of the cli.

Opening the created `MyApp.sln` file with VS2017 and running with the default IIS Express will result in a working ServiceStack app on .NET Core.

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/servicestackvs/dotnet_new_example_running.png)

### ServiceStack with MVC
Also included in the templates is an MVC .NET Core 1.1 application ready to run!

![](https://raw.githubusercontent.com/ServiceStack/Assets/master/img/servicestackvs/dotnet_new_mvc_example_running.png)

### Running a `ss-selfhost`
If you going to create a new `SelfHost` using the `ss-selfhost` template and run it with Visual Studio 2017, remember to switch from the default `IIS Express` in the run drop-down to `MyApp`. The `IIS Express` run won't work as the SelfHost template don't include the `.UseIISIntegration()` in the StartUp process.
