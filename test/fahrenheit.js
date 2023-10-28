import { Selector } from 'testcafe';

fixture`Prueba de Temperatura`
    .page`https://calculadora-temperatura-ivory.vercel.app/fahrenheit`;

test('Prueba de conversión de temperatura', async t => {
    const input = Selector('#celsius');
    await t
        .typeNumber("#celsius", '25')
        .expect(input.value).eql('25');

    const message = Selector('#mensaje').innerText;
    await t
        .expect(message).contains('25')
        .expect(message).contains('77');
});
