const path = require('path')
const webpack = require('webpack')
module.exports = {
   entry: {
      // vendor:['antd-mobile','antd','moment']
   },
   resolve: {
      extensions:['.js','.jsx'],
      alias: {
         '@':path.resolve(process.cwd(),'src'),

      },
   },
  
      // optimization: {
      //    splitChunks: {
      //      chunks: 'async',
      //      minSize: 30000,
      //      maxSize: 7000000,
      //      minChunks: 3,
      //      maxAsyncRequests: 6,
      //      maxInitialRequests: 4,
      //      automaticNameDelimiter: '~',
      //      cacheGroups: {
      //        defaultVendors: {
      //          test: /[\\/]node_modules[\\/]/,
      //          priority: -10
      //        },
      //        default: {
      //          minChunks: 1,
      //          priority: -20,
      //          reuseExistingChunk: true
      //        }
      //      }
      //    }
      //  },
   

   externals: {
      // 'antdMobile':'antd-mobile',
   }
 
	
}