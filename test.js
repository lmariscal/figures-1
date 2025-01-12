import test from 'ava';
import figures from '.';

const result = (main, windows) => process.platform === 'win32' ? process.env.WT_SESSION ? main : windows : main;

console.log('  ' + Object.keys(figures).map(symbol => figures[symbol]).join('  ') + '\n');

test('figures', t => {
	t.is(figures.tick, result('✔', '√'));
});

test('fallbacks', t => {
	t.is(figures('foo'), 'foo');
	t.is(figures('?bar?'), '?bar?');
	t.is(figures('✔ ✔ ✔'), result('✔ ✔ ✔', '√ √ √'));
	t.is(figures('✔ ✖\n★ ▇'), result('✔ ✖\n★ ▇', '√ ×\n* █'));
	t.is(figures('✔ ✖ ★ ▇'), result('✔ ✖ ★ ▇', '√ × * █'));
});
