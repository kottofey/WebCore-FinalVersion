import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{
		files: ['**/*.js'],
		rules: js.configs.recommended.rules,
	},
	{
		rules: {
			'no-undef': 'off',
			'eol-last': 0,
			'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0}],
		},
	},
	eslintPluginPrettierRecommended,
];
