import { Selector } from 'testcafe';

fixture`Prueba de Conversión de Temperatura`
    .page`https://calculadora-temperatura-ivory.vercel.app/inicio`;

    test('TestCafe is Working Properly', async t => {
        // Agrega aquí tu lógica de prueba
        await t
            .expect(Selector('app-root').exists).ok();
    });