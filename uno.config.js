import { defineConfig, presetWind } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetRemToPx from '@unocss/preset-rem-to-px'
export default defineConfig({
    theme: {
        colors: {
            black: '#0C0C0C',
            red: '#F74137',
            'dark-red': '#B2150D',
            lightBlue: '#F3F8FF',
            yelllow: 'rgba(247, 212, 0, 1)'

}
    },
    presets: [presetWind(),
        presetRemToPx({
        baseFontSize: 4,
    })
    ],
    transformers: [
        transformerDirectives(),
    ],

})
