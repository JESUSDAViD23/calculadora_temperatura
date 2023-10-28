import { Selector } from 'testcafe';

fixture `TestCafe Smoke Test`
    .page `https://calculadora-temperatura-ivory.vercel.app/inicio`; // Asegúrate de reemplazar con tu URL local

test('TestCafe is Working Properly', async t => {
    // Agrega aquí tu lógica de prueba
    await t
        .expect(Selector('body').exists).ok();
});
