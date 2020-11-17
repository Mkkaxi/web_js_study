module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ['chrome 78']
                  }
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: require.resolve('./vueloader.js')
        }
      }
    ]
  }
}