const { cToF, fToC } = require('./conventer');

describe('Conventer', () => {
  it('Convent from celsius to fahrneight', () => {
    expect(cToF(60)).toEqual('60°C is equal to 140.00°F');
  });
  it('Convent from fahrneight to celsius', () => {
    expect(fToC(45)).toEqual('45°F is equal to 7.22°C');
  });
});
