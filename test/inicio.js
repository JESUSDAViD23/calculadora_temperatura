import { Selector } from 'testcafe';

fixture `TestCafe Smoke Test`
    .page `https://www.https://calculadora-temperatura-ivory.vercel.app/inicio.com/`; // Asegúrate de reemplazar con tu URL local

    test('Verificar título de la página', async (t) => {
        // Definir un selector para el título de la página
        const pageTitle = Selector('title');
      
        // Realizar la aserción
        await t
          .expect(pageTitle.innerText).eql('Calculadora');
      });