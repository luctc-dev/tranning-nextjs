const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')

const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: [
      "./styles/_variables.scss",
      "./styles/_mixins.scss"
    ]
  }
};

module.exports = withSass(withCSS({
  distDir: 'build',
  webpack: (config, options) => {
    console.log(config.module.rules);
    config.module.rules.map(rule => {
      if (
        rule.test &&
        (rule.test.source.includes("scss") || rule.test.source.includes("sass"))
      ) {
          rule.use.push(resourcesLoader);
      }
    });
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config;
  }
}));
// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')

// const rulesLoader = {
//   test: /\.(scss|css|sass)$/,
//   use: [
//     {
//       loader: "sass-resources-loader",
//       options: {
//         resources: [
//           "./styles/_variables.scss",
//           "./styles/_mixins.scss",
//           "./styles/_breakpoints.scss",
//           "./styles/_fonts.scss",
//         ]
//       }
//     }
//   ]
// }

// module.exports = withCSS(
//   withSass({
//     /* config options here */
//     webpack: (config, options) => {
      
//       config.module.rules.push(rulesLoader);
//       config.module.rules.push({
//         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 100000,
//               name: '[name].[ext]'
//             }
//           }
//         ]
//       });
//       console.log("config");
//       console.log(config.module.rules);
//       return config;
//     }
//   })
// )