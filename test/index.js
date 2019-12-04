'use strict';

const expect = require('chai').expect;
const checkEnv = require('..');

describe('sanity checks', () => {
	it('should not throw when environmental vars set correctly', () => {
    expect(checkEnv(['ONE'])).to.not.throw;
  });
    
  it('should throw error when environmental variables not set', () => {
    expect(checkEnv.bind(null, ['non-existent']))
      .throw('Missing environment variable non-existent');
  });
});
