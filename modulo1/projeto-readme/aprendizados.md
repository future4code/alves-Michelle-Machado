# Aprendizados da Semana

Aula Git (05/05/2022)

O Git é uma ferramenta que guarda todas as versões de um projeto em desenvolvimento (seja de programação ou não). Já o GitHub é um plataforma na nuvem que armazena/hospeda os projetos, podendo disponibilizar códigos para qualquer pessoa do mundo.

Para pegar um projeto do GitHub e clonar para o seu computador (armazenamento local), faça o seguinte: 
1. Entre no GitHub; 2. Copiar o link do repositório; 3. Abra no terminal do Git Bash e escreva: git clone (link do repositório). 4. Vai aparecer uma pasta no seu Desktop com os arquivos do GitHub

**git add**: É um comando que adiciona ou modifica um arquivo local. É utilizado para sinalizado que houve uma interação no arquivo. Se eu quiser adicionar apenas um arquivo escreva git add (nome do arquivo), se você quiser adicionar vários arquivos do mesmo diretório escreva git add.

**git status**: Nos permite ver o estado do repositório, quais arquivos foram preparados ou despreparados e se houve erro em alguma modificação ou adição de arquivos.

**git add --all**: Adiciona os arquivos novos ou modificados desde a raiz até o repositório, ou seja, é um comando que você não tem muito controle. O ideal seria utilizar o comando git add. pois você irá modificar apenas os arquivos do diretório que você está ou o git add (nome do arquivo), para modificar um arquivo especifico.

**git commit -m “comentário”**: É um comando para dizer “o arquivo está alterado e pronto para upar na nuvem”, assim você consegue guardar o estado do seu repositório e conseguir ver um histórico de acordo com as suas alterações. É necessário colocar um comentário em aspas para que o usuário saiba o que foi alterado.

**git log**: Permite ver o histórico dos comandos, filtre o histórico do projeto e exibe os branchs que receberam commit.

**git branch**: Branch são galho/ramos de alterações de um projeto. Caso você não lembre os nomes das branchs de um projeto, você pode ler todos os branchs do projeto com o comando git branch. 
Obs: Branch não é uma pasta. Branch é uma “realidade paralela” de versões de um projeto.

**git branch (nome-da-branch)**: Esse comando cria um branch com o nome

**git checkout (nome-da-branch)**: A principal funcionalidade de um checkout é alterar o seu local de trabalho mudando de branch. 

**git checkout -b (nome-da-branch)**: Este comando irá criar um branch e fazer você ser direcionado para esse novo branch

**git push origin (nome-da-banch)**: Depois de adicionar e commitar os arquivos, escrevemos o o git push origin (nome da branch) para salvar remotamente 

**merge**: Mesclar as alterações do brach (arquivo local) com o main (arquivo original).

