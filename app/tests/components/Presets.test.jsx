var expect = require('expect');

var Presets = require('Presets');

describe('Presets', () => {

  it('file should exist', ()=>{
  expect(Presets).toExist();
  });

    describe('File contents', ()=>{
      it('should have a length >= 1', ()=>{
        expect(Presets.length).toBeGreaterThanOrEqualTo(1);
      });

      it('should be an array', () =>{
        expect(Presets).toBeA('array');
      });

      it('array should contain objects', () =>{
        expect(Presets[1]).toBeA('object');
      });

      it('objects in the array should contain a name field', () =>{
        expect(Presets[1].name).toExist();
        expect(Presets[1].name).toBeA('string');
      });

      it('objects in the array should contain a time field', () =>{
        expect(Presets[1].time).toExist();
        expect(Presets[1].time).toBeA('number');
      });

  });
});

