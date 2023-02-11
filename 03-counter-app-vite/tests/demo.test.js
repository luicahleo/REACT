
describe('Pruebas de <DemosComponent/>', () => {


   test('Esta prueba ni ebe fallar', () => {

      // 1. inicializacion
      const message1 = 'Hola mundo  ';
      //2. estimulo
      const message2 = message1.trim();
      //3. observar el comportamiento esperado

      expect(message1).toBe(message2);
   })
})