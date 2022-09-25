const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const extensions = ["scss", "js"];



const entries = {
  pages: [],
  generateEntries(__dirname,pathName){
    // generateEntries should create a separate  entry for each page
//example {main:['./main.js','./main.scss'],contacts:['./contacts.js','./contacts.scss']}

  },
   generateHtmlPluigins(__dirname, pathName) {

        const pagesDir = fs.readdirSync(path.join(__dirname, pathName.pages));
    return   pagesDir.map((page) => {
          extensions.map((ext) => {
            fs.access(
              path.join(__dirname, pathName.pages, page, `${page}.${ext}`),
              (err) => {
                if (err) {
                  console.warn(`There is no ${page}.${ext} for ${page}`);
                }
              }
            );
          });
           fs.access(
            path.join(__dirname, pathName.pages, page, `${page}.html`),
            (err) => {
              if (err) {
                  const message=`There is no ${page}.html in pages folder for ${page}`
                  console.warn(message)
                throw new Error(message)
              }
            }
          );
          const template = new HtmlWebpackPlugin({
            filename: `${page}.html`,
            template: path.join(
              __dirname,
              pathName.pages,
              page,
              `${page}.html`,
              
            ),
            inject:true
          });
          return template;
        });
  },
};

module.exports = entries;
