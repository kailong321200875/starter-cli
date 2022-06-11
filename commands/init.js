const ora = require("ora");
const download = require("download-git-repo");
const templateList = require("../template.json");
const symbols = require("log-symbols");
const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "rawlist",
      message: "请选择初始化项目模板",
      name: "template",
      choices: Object.keys(templateList),
    },
  ])
  .then((answers) => {
    const templateName = answers.template;
    const url = templateList[templateName];
    console.log(chalk.green("\n Start generating... \n"));
    // 出现加载图标
    const spinner = ora("Downloading...");
    spinner.start();
    download(`${url}`, `./${templateName}`, (err) => {
      if (err) {
        spinner.fail();
        console.log(
          chalk.red(symbols.error),
          chalk.red(`Generation failed. ${err}`)
        );
        return;
      }
      // 结束加载图标
      spinner.succeed();
      console.log(
        chalk.green(symbols.success),
        chalk.green("Generation completed!")
      );
      console.log("\n To get started");
      console.log(`\n    cd ${templateName} \n`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  });
