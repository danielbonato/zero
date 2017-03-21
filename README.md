# scaffolding for new projects

Estrutura desenvolvida para projetos novos baseada em Bootstrap e Jquery. Está incluso jquery Easing para animações, LazySizes para carregamento de imagens sob demanda e Font Awesome para icones.

## Desenvolvedor

[![Daniel Bonato](https://avatars2.githubusercontent.com/u/7832246?v=3&s=90)](https://github.com/danielbonato) 
<br>
[Daniel Bonato](https://github.com/danielbonato)
<br>
[WebSite](https://danielbonato.com.br) 

## A quem se destina?

Sempre que vamos começar um projeto temos que configurar grunt, bower e outras coisas. Então resolvi fazer um projeto zero para isso.

### Módulos instalados
- clean
- copy
- less
- cssmin
- svgmin
- autoprefixer
- newer
- concat
- uglify
- watch
- timegrunt

### Complementos 
- [Bootstrap 3.3.7](http://getbootstrap.com/)
- [Jquery 3.2.0](https://jquery.com/)
- [Jquery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)
- [LazySizes](https://github.com/aFarkas/lazysizes)
- [Font Awesome 4.7.0](http://fontawesome.io/)


### Como funciona?

- Executar na pasta do projeto: sudo npm install
- Comandos: "grunt" e "grunt watch" configurados

### Trabalhando com media queries

A biblioteca foi desenvolvida para compilar todos os .less de uma única vez. Para fazer os arquivos particionados você deve coloar o sufixo: landscape, tablet, desktop, wide. Ex: menu_mobile, menu_tablet, menu_desktop, menu_wide.

Obs: Lembrar de incluir no seu css padrão os demais css na ordem desejada. Ex: @import "home_tablet.less"; @import "home_desktop.less"; @import "home_wide.less";

### Jquery Easing

- Exemplo:
    $(function() {
        $(element).slideUp({
            duration: 1000, 
            easing: method, 
            complete: callback
        });
    });

### LazySizes

- non-responsive images: -
<img data-src="image.jpg" class="lazyload" />

- responsive example with automatic sizes calculation: -
<img
    data-sizes="auto"
    data-src="image2.jpg"
    data-srcset="image1.jpg 300w,
    image2.jpg 600w,
    image3.jpg 900w" class="lazyload" />

- iframe example -
<iframe frameborder="0"
    class="lazyload"
    allowfullscreen=""
    data-src="//www.youtube.com/embed/ZfV-aYdU4uE">
</iframe>


### Pré-requisitos de sistema

- [Node.js](http://nodejs.org/)
- [NPM](https://www.npmjs.org/)
- Se for usuário Windows, também é necessário ter um programa de terminal
instalado, como o [PuTTY](http://www.putty.org/).