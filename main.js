$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log('submit');
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoDaNovaImagem);
        const NovoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(NovoItem);
        $(`
        <div class="ovelay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
            `).appendTo(NovoItem);
            $(NovoItem).appendTo(`ul`);
            $(NovoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val ('')
    })
})
