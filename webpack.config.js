module.exports = {
  //entry: './main.js',
  //entry: './exp3/Name.js',
  //entry: './exp4/App.jsx',
  //entry: './exp5/App.jsx',
  //entry: './exp6/App.jsx',
  //entry: './exp7/App.jsx',
  //entry: './exp8/App.js',
  //entry: './exp9/App.jsx',
  //entry: './exp10/App.js',
  //entry: './exp11/App.js',
  //entry: './exp12/App.js',
  //entry: './exp13-route-1/App.js',
  //entry: './exp14-route-2/App.js',
  //entry: './exp15-route-3/App.js',
  //entry: './exp15-route-4/App.js',
  //entry: './exp16-ref/App.js',
  //entry: './exp17-empForm/CreateEmp.js',
  //entry: './exp17-checkbox/App.js',
  entry: './exp17-Dropdown/App.js',
  //entry: './exp17-Dropdown/List.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback:{
          index:'./index.html'
      },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
