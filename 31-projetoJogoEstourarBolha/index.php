<html>
    <head>
        <meta charset="UTF-8"/>
        <style type='text/css'>
           .placar{
                width: 150px;
                height: 120px;
                position: fixed;
                left: 0px;
                top: 0px;
                background-color: #DDD;
                text-align: center;
           }
           #placar{
                font-size: 50px;
           }
           .bola{
                width: 50px;
                height: 50px;
                border-radius: 25px;
                position: absolute;
           }
        </style>
        <title>Jquery</title>
    </head>
    
    <body>
        
        <div class='placar'>
            Bolas Estouradas:<br/>
            <span id='placar'>0</span><br/>
            <button id='comecar'>Começar o Jogo</button>
        </div>
        
        
            
        <script type='text/javascript'  src='../jquery/jquery-3.2.1.min.js'></script>
        <script type='text/javascript'  src='script.js'></script>     
    </body>
</html>    