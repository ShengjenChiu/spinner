const chArr = ['|', '/', '-', '\\', '|'];

for (let i = 1; i <= chArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${chArr[i - 1]}   `);
  }, 100 + (i - 1) * 200);
}
