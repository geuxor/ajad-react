exports.setNativeValue = (element, value) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
};

exports.findTimeout = (body, selector, timeout=1000) => {
  return new Promise((resolve, reject)=> {
    let timePassed = 0;
    
    const search = () => setTimeout(() => {
      const element = body.find(selector)[0];
      if (element) resolve(element);
      else {
        timePassed += 100;
        if (timePassed > timeout) reject();
        else search();
      }
    }, 100);
    search();
  });
};