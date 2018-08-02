# Introdução
O componente cp-counter permite escolher um tamanho máximo permitido no campo e também cria um contador de que indica se o número de caracteres do que está no `input`, além de oferecer um contador que demonstra quantos dígitos faltam para alcançar o máximo.

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
<cp-counter capivara-confirm="$ctrl.message" </cp-counter>
```

```javascript
class MyController {
    constructor() {
        this.message = 'Tem certeza que deseja deletar?'
    }
}
capivara.controller(document.body, MyController);
```

!> Lembre-se de que é necessário colocar o código `JavaScript` dentro de um elemento `<scipt>` no `HTML`.


## Parâmetros

O componente possui diversos parâmetros para a customização, a tabela abaixo mostra mais informações sobre eles

|       Atributo       |   Tipo   | Requerido |                                     Descrição                                     |
|:--------------------:|:--------:|:---------:|:---------------------------------------------------------------------------------:|
|   capivara-confirm   | `String` |   `Sim`   | Essa é a mensagem que aparece no cabeçalho do modal                               |
|         size         | `String` |   `Não`   | Define o tamanho do modal `sm`, `md`, `lg`. `DEFAULT: md`.                        |
| confirm-button-class | `String` |   `Não`   | Classes que será aplicadas no botão confirmar. `DEFAULT: btn btn-primary`.        |
| dismiss-button-class | `String` |   `Não`   | Classes que será aplicadas no botão cancelar. `DEFAULT: btn btn-default`.         |
| delete-button-class  | `String` |   `Não`   | Classes que será aplicadas no botão que chama o modal. `DEFAULT: btn btn-danger`. |
| confirm-button       | `String` |   `Não`   | Texto do botão confirmar. `DEFAULT: Confirmar`.                                   |
| dismiss-button       | `String` |   `Não`   | Texto do botão cancelar. `DEFAULT: Retornar`.                                     |

# Exemplo

Um exemplo de utilização de todos os parâmetros que o componente possui, vale lembrar que o único parâmetro obrigatório é o `capivara-confirm`, todos os outros possuem valores `default`. O exemplo mostra como devemos configurar o componente com as customizações desejadas.

```html
<cp-counter 
    capivara-confirm="$ctrl.message" 
    confirm-button-class="$ctrl.confirmButtonClass" 
    dismiss-button-class="$ctrl.dismissButtonClass"
    delete-button-class="$ctrl.deleteButtonClass"
    confirm-button="$ctrl.confirmButton"
    dismiss-button="$ctrl.dismissButton"
    size="$ctrl.size"
></cp-counter>
```

```javascript
class MyController {
    constructor() {
        this.message = 'Tem certeza que deseja deletar?'
        this.confirmButtonClass = "btn btn-warning"
        this.dismissButtonClass = "btn btn-danger"
        this.confirmButton = "Sim"
        this.dismissButton = "Não"
        this.size = "lg"
        this.deleteButtonClass = "btn btn-success"
    }
}
capivara.controller(document.body, MyController);
```