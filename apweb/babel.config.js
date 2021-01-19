module.exports = {
  presets: [
    '@vue/app'
  ],
    // 新增
    plugins: [
        [
            'import',
            { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
        ]
    ]
}
