import {Cat, Dog} from '../src';

let obj;
describe('Given an instance of my Cat library', () => {
  beforeEach(() => {
    obj = new Cat();
  });
  describe('when I need the name', () => {
    test('should return the name', () => {
      expect(obj.name).toBe('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  beforeEach(() => {
    obj = new Dog();
  });
  describe('when I need the name', () => {
    test('should return the name', () => {
      expect(obj.name).toBe('Dog');
    });
  });
});
