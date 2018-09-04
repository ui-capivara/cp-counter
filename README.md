# Cp-counter
O componente cp-counter permite escolher um tamanho máximo permitido no campo e também cria um contador que indica quantos dígitos faltam para alcançar o máximo permitido.

------
# Instalação

## CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-counter.min.css">

<!-- Component -->
<script src="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-counter.min.js"></script>
```

## NPM
O NPM é o método de instalação recomendado ao criar aplicativos de grande escala. Ele combina muito bem com bundlers de módulo, como Webpack ou Browserify.

```shell
$ npm install @uicapivara/cp-counter --save
```
Após a instalação, precisamos importar o componente no projeto.

Se seu projeto utiliza **typescript** você pode importar o componente normalmente.
```javascript
import '@uicapivara/cp-counter';
```
Caso contrário é necessário importa-los especificando o arquivo **js**. Exemplo:
```javascript
import '@uicapivara/cp-counter/index.js';
```

Você pode acessar a documentação completa do componente clicando [aqui](https://ui-capivara.github.io/cp-counter/#/).