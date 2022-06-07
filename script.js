function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error");
    }, delay);
  });
}

async function getValueWithDelayAsync(value, delay) {
  try {
    const result = await getValueWithDelay(value, delay);
    console.log(result);
    const result3 = await getValueWithDelay("whatever", 1000);
    console.log(result3);
    const result2 = await getValueWithDelayError("error", 250);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

getValueWithDelayAsync("ammar", 250);
