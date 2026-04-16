

## BUG 01
    Acesso não autenticado permite manipulação de dados

Descrição:

A aplicação permite que usuários não autenticados consigam acessar diretamente páginas internas do sistema e
executar ações como criação de itens e remoção de itens. 

Steps:

    1. Abra uma aba anônima
    2. Acesse:
    https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha/bancos-de-dados
    3. Tentar criar um novo item

Actual result:
Usuário não autenticado consegue acessar a página e criar/remover itens
Expected:
Usuário deve ser redirecionado para a tela de login e não deve conseguir acessar ou
manipular dados

Repro rate:
5/5

Link do
attachment:https://drive.google.com/file/d/1_TCZoEhrA70fTQGWUwvX9Sx8nBSGGIyv/view
?usp=drive_link


## BUG 02
    Mensagem incorreta ao utilizar credenciais válidas
    

Descrição:
O sistema apresenta comportamento inconsistente ao exibir uma mensagem de erro de login inválido. Clicar no botão de continue permite que o usuário prossiga e acesse a aplicação.

Steps:

    1. Abra o site
    2. Insira email: qa@test.com
    3. Insira senha: 123456
    4. Clicar em "Entrar"

Actual result:
Mensagem exibida: "Seu login está incorreto, quer continuar?"

Expected:
Usuário deve ser autenticado sem exibição de erro

Repro rate:
5/5

Link do attachment:
https://drive.google.com/file/d/1Ey8-p03YIircnv-KM3ws-L6fliFlKfH7/view?usp=drive_link


## BUG 03 
    Dados não persistem após recarregar a página

Descrição:
Após recarregar a página, ou utilizar o botão de recarregar, todos os itens criados pelos
usuários são removidos do banco de dados.


Steps:

    1. Abra o site
    2. Utilize credenciais válidas
    3. Acessar "Banco de dados"
    4. Criar um novo item
    5. Atualizar a página

Actual result:
Ao recarregar a página, todos os itens desaparecem da lista.

Expected:
Os itens devem permanecer salvos após atualização.

Repro rate:
5/5
Link do attachment: 
https://drive.google.com/file/d/12Tabun21ps53t-mX8_gz9gXOa-OmKw38/view?usp=drive_link

## BUG 04
    Itens arquivados não aparecem na seção de arquivados

Descrição:
Itens marcados como arquivados desaparecem da lista principal, porém não são exibidos na seção de itens arquivados.

Steps:

    1. Abra o site
    2. Utilize credenciais válidas
    3. Vá para ‘’banco de dados’’
    4. Criar item
    5. Clicar em "Arquivar"
    6. Acessar "Itens Arquivados"

Actual result:
Nenhum item aparece na lista de arquivados

Expected:
Os itens devem aparecer corretamente na seção de arquivados
Repro rate:
5/5

## BUG 05
    Botão "Esqueci minha senha" não funciona

Descrição:
O botão de recuperação de senha não executa nenhuma ação ao ser clicado pelo usuário.

Steps:

    1. Abra o site
    2. Acessar tela de login
    3. Clicar em "Esqueci minha senha"

Actual result:
Clicar no botão de "esqueci minha senha" não tem resultado nenhum

Expected:
Usuário deve ser redirecionado para fluxo de recuperação de senha
Repro rate:
5/5

## BUG 06
    Clicar no botão "Candidato" não mostra o menu "dropdown"

Descrição:
Botão "Candidato" não executa nenhuma ação após o usuário logar em sua conta.

Steps:

    1. Fazer login
    2. Clicar em "Candidato"

Actual result:
Nenhuma ação ocorre quando o usuário clica no botão "usuario"

Expected:
Sistema deveria mostrar um menu de dropdown para o usuario.
Repro rate:
5/5


## Observação Geral
Foram identificadas falhas críticas relacionadas a:
● Controle de acesso (segurança)
● Persistência de dados

Esses problemas podem indicar uma possível ausência de validação no backend e falhas
na integração entre frontend e backend.
