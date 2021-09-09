const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:resolve(__dirname,'dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8 * 1024,
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{
                    esModule:false
                }
            },
            {
              //其他资源
                exclude:/\.(css|js|html)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}