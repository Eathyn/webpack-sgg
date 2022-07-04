module.exports = {
	presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入
        corejs: {
          version: '3',
          proposals: true,
        },
      },
    ],
  ],
}
