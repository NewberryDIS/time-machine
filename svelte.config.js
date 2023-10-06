import adapter from '@sveltejs/adapter-static';
import path from 'path';
// import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ trailingSlash: 'always' }),
		alias: {
			$comps: path.resolve('./src/components'),
			$sm: path.resolve('./src/storymap/'),
			$data: path.resolve('./src/data'),
			$src: path.resolve('./src')
		},
		paths: {
			base: dev ? '' : '/time-machine'
		}
	}
};

export default config;
