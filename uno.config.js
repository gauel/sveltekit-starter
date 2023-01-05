import { defineConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { extractorSvelte } from '@unocss/core';

import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
	presets: [
		presetIcons(),
		presetAttributify(),
		presetUno({
			dark: 'media'
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorSvelte],
	corePlugins: {
		container: false
	}
});
