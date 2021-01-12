let array = ['|', '/', "-", "\\", "|"];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${array[i]}    `);
  }, 100 + (i * 200));
}
setTimeout(() => {
  process.stdout.write('\n');
}, 100 + array.length * 200);
