<html>
    <head>
        <meta charset="UTF-8"/>
        <style type='text/css'>
            .fundovermelho{
                background-color: red;
            }
            .focado{
                background-color:#999;
            }
        </style>
        <title>Jquery</title>
    </head>
    
    <body>
       <form method='POST' id='form'>
            Nome:<br/>
            <input type='text' name='nome' id='texto' /><br/><br/>
            
            Email:<br/>
            <input type='email' name='email' id='email'/><br/><br/>
            
            Idade:<br/>
            <select name='idade' id='idade'>
                <option>10 Anos</option>
                <option>20 Anos</option>
                <option>30 Anos</option>
            </select><br/><br/>
            
            <input type='submit' id='botao' value='Enviar'/>
       </form>
        
        
        <script type='text/javascript'  src='../jquery/jquery-3.2.1.min.js'></script>
        <script type='text/javascript'  src='script.js'></script>     
    </body>
</html>    