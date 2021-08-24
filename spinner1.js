process.stdout.write('hello from spinner1.js... \rheyyy\n');

const symbs = "|/-\\|/-\\|";

let x = 800;
for (const char of symbs) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, x);
  x += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, x);
