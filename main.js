$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(){
        console.log("submit");
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const NovoItem = $('<li>style="display: none</li>')
        $(`<img src="${enderecoDaNovaImagem}">`).apendTo(NovoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
            `).apendTo(NovoItem);
            $(NovoItem).apendTo('ul');
            $(NovoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val ('')
    })
})
