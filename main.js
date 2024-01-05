    //$(document).ready(function(){
    //document.querySelector('header button');//  OBS COM JS é preciso por todo esse seletor
    //$('#btnCancelar'); // ja com o jQuery basta digitar apenas esse seletor

    // document.querySelector('header button').addEventListener('click', function(){
    //    //Forma com JS comum
    //}); 

    //});
$(document).ready(function(){
    $('header button').click(function(){ //Forma com o jQuery
        $('form').slideDown(); 
    });

    $('#btnCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoImagemNova = $('#enderecoNovaImg').val();
        console.log(enderecoImagemNova);
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        $(`
            <div class="overlayImagemLink">
                <a href="${enderecoImagemNova}" target="_blank" title="Ver a imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#enderecoNovaImg').val('');
    });
});


