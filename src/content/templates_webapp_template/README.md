# templates-webapp

[![](https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/templates-webapp.png)](http://templates-webapp.web-templates.io/)

> Browse [source code](https://github.com/NetCoreTemplates/templates-webapp), view live demo [templates-webapp.web-templates.io](http://templates-webapp.web-templates.io) and install with [dotnet-new](http://docs.servicestack.net/dotnet-new):

    $ npm install -g @servicestack/cli

    $ dotnet-new templates-webapp ProjectName

# .NET Core 2.0 Templates WebApp

The `/app` folder contains the Rockwind Web App project.

The `/web` folder contains the [Web Apps binaries](https://github.com/NetCoreWebApps/Web).

To run in VS Code type `Ctrl+Shift+B` to run the configured `build` task, otherwise in terminal run:

    $ dotnet web/app.dll ../app/web.settings

The [/support/northwind-data](https://github.com/NetCoreWebApps/WebApp/tree/master/src/support/northwind-data) project lets you quickly try out Rockwind against your local RDBMS by populating it with a copy of the Northwind database using the same sqlserver identifier and connection string from the App, e.g:

    $ dotnet run sqlserver "Server=localhost;Database=northwind;User Id=test;Password=test;"

See [templates.servicestack.net/docs/web-apps](http://templates.servicestack.net/docs/web-apps) for more info on ServiceStack Web Apps.
