<html>
    <head>
        <meta charset="UTF-8"/>
        <style type='text/css'>
            .bgbox{
                position: fixed;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7); /* Os 3 primeiros parâmetros são a cor, e o 4 parâmetro é a tranparência */
                display: none;
            }
            .fotobox{
                position: fixed;
                left: 50%;
                top: 50%;
                width: 500px;
                height: 400px;
                background-color: #FFF;
                /* Centralizar na tela */
                margin-left: -270px;
                margin-top: -220px;
                /* Centralizar na tela */
                padding: 20px;
                display: none;
            }
        </style>
        <title>Jquery</title>
    </head>
    
    <body>
        
        <a href='javascript:;' class='galeria'> <!-- Não executa nada ao clicar no link -->
            <img src='imagens/01.jpg' border='0' width='150'/>
        </a>
        
        <a href='javascript:;' class='galeria'>
            <img src='imagens/02.jpg' border='0' width='150'/>
        </a>
        
        <div class='bgbox'></div> <!-- Background transparente -->
        
        <div class='fotobox'>
            <img src='' width='100%'/><br/>
            <button>Fechar</button>
        </div>
        
        <script type='text/javascript'  src='../jquery/jquery-3.2.1.min.js'></script>
        <script type='text/javascript'  src='script.js'></script>     
    </body>
</html>    