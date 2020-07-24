const { taskOne, taskTwo } = require('./tasks');

async function main() {
  try {
    console.time('Measuring time');
    const results = await Promise.all([taskOne(), taskTwo()])//Peticiones en paralelo

//Peticiones secuenciales
    // const firstValue = await taskOne();
    // const secondValue = await taskTwo();
    console.timeEnd('Measuring time');

    console.log('Task One returned', results[0]);
    console.log('Task two returned', results[1]);
  } catch (error) {
    console.log(error);
  }
}

main();