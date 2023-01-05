import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { extractorSvelte } from '@unocss/core'

import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
	presets: [
		presetIcons(),
		presetAttributify(),
		presetUno({
			dark: 'media'
		})
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	],
	extractors: [extractorSvelte],
	corePlugins: {
		container: {
			center: true
		},
	},
	theme: {
		breakpoints: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		colors: {
			'timber': {
				'50': '#f3f9fa',
				'100': '#d5eef2',
				'200': '#acdbe3',
				'300': '#7abfce',
				'400': '#4e9fb3',
				'500': '#358297',
				'600': '#286579',
				'700': '#245161',
				'800': '#20434f',
				'900': '#14252b',
			},
		}
	}
})