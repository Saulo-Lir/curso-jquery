<html>
    <head>
        <meta charset="UTF-8"/>
        <style type='text/css'>
            .div{
                width:200px;
                height:170px;               
                background-color:#EEE;
            }
        </style>
        <title>Jquery</title>
    </head>
    
    <body>
        
        <form method='POST' id='form'>
            Usuário:<br/>
            <input type='text' name='nome'/><br/><br/>
            
            Senha:<br/>
            <input type='password' name='senha'/><br/><br/>
            
            Idade:<br/>
            <select name='idade'>
                <option>10 anos</option>
                <option>20 anos</option>
                <option>30 anos</option>
            </select><br/><br/>
            
            <input type='submit' value='Entrar' />
            
            
        </form>
        
       <div class='div'></div>
               
        <script type='text/javascript'  src='../jquery/jquery-3.2.1.min.js'></script>
        <script type='text/javascript'  src='script.js'></script>     
    </body>
</html>    