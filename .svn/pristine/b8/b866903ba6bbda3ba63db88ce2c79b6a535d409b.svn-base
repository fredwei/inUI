// 所有png图片压缩
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// less 文件处理
fis.match('*.less', {
  // fis-parser-less-2.x 插件进行解析
  parser: fis.plugin('less-2.x'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});

// 自动给 css 属性添加前缀，让标准的 css3 支持更多的浏览器
fis.match('*.{css,less,scss}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
});


// 输出到本地，使用测试环境资源
fis
.set('project.ignore', [
  '*.bat',
  'fis-conf.js'
])
// .match('*.{css,less}', {
//   optimizer: fis.plugin('clean-css', {
//     // keepBreaks: true,

//     // 更多其他配置
//   })
// })
.match('*', {
  isHtmlLike: false,
  isCssLike: false,
  // 配置目录
  deploy: [
    fis.plugin('local-deliver', {
      to: '../src/'
    })
  ]
});







// 输出到本地，使用正式环境资源
fis.media('res')
.set('project.ignore', [
  // 视图层如需要构建将view注释掉即可
  // 'view/**',
  '*.bat',
  'fis-conf.js'
])
// 给js文件加时间戳
.match('*.js', {
  // url: '/foxsaas/pc/src$0',
  optimizer: fis.plugin('uglify-js')
})
.match('*.{css,less}', {
  optimizer: fis.plugin('clean-css', {
    // keepBreaks: true,

    // 更多其他配置
  })
})
.match('*', {
  domain: 'http://saasres.ingdan.com',
  // 不处理html文件，避免将头部的js移动到底部和一些莫名的错误
  // isHtmlLike: false,
  // 配置目录
  deploy: fis.plugin('local-deliver', {
    to: '../res/'
  })
});

