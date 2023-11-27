
# Gerador de QR Code

Este projeto consiste em uma página web simples para gerar QR Codes a partir de links inseridos pelo usuário. Ele oferece a funcionalidade de exportar o QR Code gerado como uma imagem ou um arquivo PDF.

## Estrutura de Arquivos

A estrutura do projeto é organizada da seguinte maneira:

- **index.html**: Arquivo principal da aplicação, contendo a estrutura HTML da página.
- **styles.css**: Arquivo CSS com os estilos da página.
- **script.js**: Arquivo JavaScript com a lógica para gerar o QR Code, exportá-lo como imagem ou PDF.

<hr>

## Funcionalidades

### Geração do QR Code
Ao inserir um link válido no campo de texto e clicar no botão "Gerar QR Code", o código JavaScript utiliza a biblioteca QRCode.js para gerar dinamicamente o QR Code correspondente ao link fornecido. O QR Code é exibido na área designada na página.

### Exportação como Imagem
O botão "Exportar como Imagem" permite ao usuário baixar o QR Code gerado como uma imagem PNG. Ao clicar no botão, o código JavaScript converte o QR Code (representado como um elemento canvas na página) em uma imagem e inicia automaticamente o download dessa imagem com o nome "qrcode.png".

### Exportação como PDF
O botão "Exportar como PDF" possibilita ao usuário salvar o QR Code como um arquivo PDF. Quando acionado, o JavaScript cria um novo documento PDF usando a biblioteca jsPDF e adiciona o QR Code como uma imagem dentro desse PDF. Em seguida, inicia-se o download do arquivo PDF com o nome "qrcode.pdf".

Este projeto oferece uma maneira simples e interativa de gerar e exportar QR Codes a partir de links, tornando-se útil para diversas finalidades, como compartilhamento de informações e marketing digital.

---