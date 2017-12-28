"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var execSync = require('child_process').execSync;
var headers = {
    'User-Agent': 'servicestack-cli-1'
};
var replaceAll = function (str, search, replacement) {
    var target = str;
    return target.split(search).join(replacement);
};
var templatesRepos = require('./testing.json');
var templateJsonTemplateStr = JSON.stringify(require('./template.json'));
var packageScriptsDir = resolvePackageScriptsDir();
var templateRoot = path.join(packageScriptsDir, 'dist');
if (!fs.existsSync(templateRoot)) {
    fs.mkdirSync(templateRoot);
}
// request({url:'./testing.json',headers}, (err,res,json) => {
//     if (err)
//         handleError(err);
//     if (res.statusCode >= 400)
//         handleError(`Request failed '${url}': ${res.statusCode} ${res.statusMessage}`);
//
//     try {
//         var repos = JSON.parse(json);
//         repos.forEach((item,index) => {
//             processServiceStackTemplate(templateRoot,item);
//         })
//     } catch (e) {
//         console.log('json', json);
//         handleError(e, `ERROR: Could not parse JSON response from: ${url}`);
//     }
// });
// Debugging without hitting GH rate limit
templatesRepos.forEach(function (item, index) {
    processServiceStackTemplate(templateRoot, item);
});
var outputDir = path.join(packageScriptsDir, '..', 'src', 'content');
execSync("mv ./* " + outputDir, { cwd: path.join(packageScriptsDir, 'dist') });
function processServiceStackTemplate(templateRootDir, repoItem) {
    var safeName = replaceAll(repoItem.name, '-', '_') + '_template';
    var templateDir = path.join(templateRootDir, safeName);
    if (!fs.existsSync(templateDir)) {
        fs.mkdirSync(templateDir);
    }
    execSync("dotnet-new " + repoItem.name, { cwd: templateDir });
    execSync('mv MyApp TempMyApp', { cwd: templateDir });
    execSync("mv TempMyApp/* .", { cwd: templateDir });
    execSync('rm -rf ./TempMyApp', { cwd: templateDir });
    var friendlyItemName = toTitleCase(replaceAll(repoItem.name, '-', ' '));
    var templateJsonOut = templateJsonTemplateStr;
    templateJsonOut = replaceAll(templateJsonOut, '$template_name$', repoItem.name);
    templateJsonOut = replaceAll(templateJsonOut, '$template_friendly$', friendlyItemName);
    var templateConfigDir = path.join(templateDir, '.template.config');
    fs.mkdirSync(templateConfigDir);
    fs.writeFileSync(path.join(templateConfigDir, 'template.json'), templateJsonOut);
}
function resolvePackageScriptsDir() {
    var commandPath = process.cwd();
    var inPackageScripts = commandPath.endsWith('package_scripts');
    if (inPackageScripts)
        return commandPath;
    var hasPackageJsonFile = fs.existsSync(path.join(commandPath, 'package.json'));
    if (hasPackageJsonFile) {
        var packageJson = require(path.join(commandPath, 'package.json'));
        if (packageJson.name === 'servicestack-template-packager')
            return path.join(commandPath, 'package_scripts');
    }
    throw Error('Use from NetCoreApps/templates repository directory only.');
}
function handleError(e, msg) {
    if (msg === void 0) { msg = null; }
    if (msg) {
        console.error(msg);
    }
    console.error(e.message || e);
    process.exit(-1);
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
//# sourceMappingURL=index.js.map