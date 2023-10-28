import { Selector } from 'testcafe';

fixture`Prueba de Conversión de Temperatura`
    .page`https://calculadora-temperatura-ivory.vercel.app/kelvin`;

test('Prueba de conversión de temperatura a Kelvin', async t => {
    const input = Selector('#celsius');
    await t
        .typeNumber("#celsius", '25')
        .expect(input.value).eql('25');

    const message = Selector('#mensaje').innerText;
    await t
        .expect(message).contains('25')
        .expect(message).contains('298.15');
});
