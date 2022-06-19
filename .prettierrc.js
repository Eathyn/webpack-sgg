module.exports = {
  useTabs: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  singleAttributePerLine: true,
	overrides: [
		{
			files: ['**/*.css', '**/*.scss', '**/*.sass', '**/*.styl', '**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
}
