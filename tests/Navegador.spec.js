// Importar o módulo Playwright
const { chromium } = require('playwright');

// Função assíncrona para executar o teste
(async () => {
    try {
        // Conectar ao navegador já aberto
        const browser = await chromium.connect({ wsEndpoint: 'ws://localhost:9222' }); // Substitua pelo seu endpoint WS

        // Criar uma nova página no contexto existente
        const page = await browser.newPage();

        // Navegar para a URL desejada na nova guia
        await page.goto('https://www.uol.com.br/');

        // Exibir o título da página no console
        console.log('Página aberta:', await page.title());

        // Você pode continuar com seus testes aqui...

        // Fechar a página (opcional)
        await page.close();
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
})();
