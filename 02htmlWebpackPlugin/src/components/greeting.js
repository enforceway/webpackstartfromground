function sayHello(name) {
  const prefix = 'welcome,';
  return function() {
    return `${prefix}${name}`;
  }
}
export default sayHello