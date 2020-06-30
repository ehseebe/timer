let input = process.argv.slice(2);

const simpleTimer = (input) => {
  for (let timer of input) {
    const time = parseInt(timer)
    console.log("whats timer:", time, "type:", typeof time)
    if (time > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, timer * 1000);
    }
  }
}


simpleTimer(input);

