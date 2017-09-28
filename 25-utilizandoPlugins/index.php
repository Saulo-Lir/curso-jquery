<html>
    <head>
        <meta charset="UTF-8"/>
        <style type='text/css'>
        </style>
        <title>Jquery</title>
    </head>
    
    <body>
        <!-- Baixar o plugin e adiciona-lo no projeto -->
        <!-- Link do plugin utilizado nesta aula:
        https://github.com/igorescobar/jQuery-Mask-Plugin -->
        <!-- Ler a documentação do plugin no site para auxiliar na utilização -->
        
        <form>
            Data:</br>
            <input type='text' name='data' id='data'/><br/><br/>
            
            Hora:</br>
            <input type='text' name='hora' id='hora'/><br/><br/>
            
            CPF:</br>
            <input type='text' name='cpf' id='cpf'/><br/><br/>
            
            Tel:</br>
            <input type='text' name='data' id='tel'/><br/><br/>
            
            <input type='submit' value='Enviar'/><br/><br/>
            
            
        </form>
            
        <script type='text/javascript'  src='../jquery/jquery-3.2.1.min.js'></script>
        <!-- Inserindo o arquivo de plugin -->
        <script type='text/javascript' src='jquery.mask.js'></script>
        <script type='text/javascript'  src='script.js'></script>     
    </body>
</html>    
