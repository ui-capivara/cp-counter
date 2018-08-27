# Introdução
O componente cp-counter permite escolher um tamanho máximo permitido no campo e também cria um contador que indica quantos dígitos faltam para alcançar o máximo permitido.

------
# Instalação

## CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente, porém no exemplo iremos utilizar a ultima versão disponível.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-counter.min.css">

<!-- Component -->
<script src="https://unpkg.com/@uicapivara/cp-counter@latest/dist/cp-counter.min.js"></script>
```
Certifique-se de ler sobre as diferentes construções e use a produção, substituindo os arquivos .js por .min.js. Esta é uma compilação otimizada para velocidade em vez de experiência de desenvolvimento.

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

# Como usar

Se chegamos até aqui, provavelmente a instalação foi finalizada êxito, isso significa que já podemos utilizar o cp-counter.
Vamos agora criar uma nova instância do componente. Para isso basta colocarmos no HTML o nome do compoente e também uma `class` que possuirá as propriedades de configuração do componente.

```html
<cp-counter max-length="20" cp-model="$ctrl.myCounter"></cp-counter>
```

```javascript
class MyController {
    constructor() {
      this.myCounter = 'Example';
    }
}
capivara.controller(document.body, MyController);
```

Disponibilizamos alguns exemplos utilizando o componente juntamente com outros frameworks.

*   CapivaraJS - [JSFiddle](https://jsfiddle.net/1kbLruyq/125/)
*   Angular.js - [JSFiddle](https://jsfiddle.net/t0b8xxfj/64/)
*   Angular - [JSFiddle](https://jsfiddle.net/1hk7knwq/8641/)
*   Vue.js - [JSFiddle](http://jsfiddle.net/td4v7qqd/247/)
*   React.js - [JSFiddle](http://jsfiddle.net/td4v7qqd/242/)

!> Lembre-se de que é necessário colocar o código `JavaScript` dentro de um elemento `<script>` no `HTML`.


## Parâmetros

O componente possui alguns parâmetros para a customização, a tabela abaixo mostra mais informações sobre eles

| Atributo    | Tipo     | Requerido | Descrição                                                                   |
| :---------: | :------: | :-------: | :-------------------------------------------------------------------------: |
| max-length  | `int`    | `Sim`     | Valor que define o número de caracteres que podem ser inseridos no `input`. |
| placeholder | `String` | `Não`     | Mensagem que aparece dentro do `input`.                                     |
| cp-model    |	`String` |	`Não`	 | Variável que recebe o valor digitado no `input`                             |

# Exemplo

Um exemplo de utilização de todos os parâmetros que o componente possui, vale lembrar que o único parâmetro obrigatório é o `max-length`. O exemplo mostra como devemos configurar o componente com as customizações desejadas.

```html
    <cp-counter 
        cp-model="$ctrl.myCounter"
        max-length="20"
        placeholder="'Insira seu texto...'"
    ></cp-counter>
```

```js
    <script>
        class MyController {
            constructor() {
                this.myCounter = '';
            }
        }
        capivara.controller(document.body, MyController);
    </script>
```
Este exemplo pode ser encontrado no [JSFiddle](https://jsfiddle.net/1kbLruyq/123/)