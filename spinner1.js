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
