/* global describe, it, before */

import chai from 'chai';
import {Cat, Dog} from '../src/';

chai.expect();

const expect = chai.expect;

let obj;

describe('Given an instance of my Cat library', () => {
  before(() => {
    obj = new Cat();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(obj.name).to.be.equal('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    obj = new Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(obj.name).to.be.equal('Dog');
    });
  });
});