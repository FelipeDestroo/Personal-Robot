# Personal-Robot
***
## Propósito do projeto:
desenvolvido para a competição de projeto de inovação promovido pela FIRST, na categoria FRC. 
Foi utilizado o codificador de navegador P5.JS do qual possui diversas 
bibliotecas pré-instaladas, para o auxílio das duas programações criadas, com o 
propósito de se realizar os exercícios físicos de elevação lateral e rosca direta, 
juntamente com a PoseNet, o que facilita a nossa codificação. A biblioteca da PoseNet 
foi adicionada como um link (HTML) disponibilizado pela “Open Source Initiative” com 
a licença MIT livre de direitos autorais, quando adicionada ela consegue traçar todo o 
vetor e identificar o esqueleto do corpo humano automaticamente, logo após é 
adicionada as variáveis e os nomes de cada membro que deseja utilizar na 
programação do editor on-line, seguidamente deve ser adicionado e mencionado os 
principais órgãos apendiculares como ponto chave, para que seja efetuado o 
movimento que deseja realizar (Exemplo: Ombro, cotovelo e punho, equivalentes aos
exercícios de elevação lateral e rosca direta), uma função “arc” é adicionada com a 
finalidade de criar uma elipse em relação do ombro ao punho e do ombro ao cotovelo, 
determinada com os valores de x (horizontal) e y (vertical) para a inteligência artificial 
localizar o ponto de partida do exercício e onde deve terminar, logo em seguida 
adicionamos o comando “looping” para que se repita a linha de códigos da leitura dos 
movimentos corporais do praticante e terminar a série do exercício selecionado. Já 
para ser computado e armazenado a pontuação que a pessoa atingiu e prosseguir, os 
valores de x e y voltam para auxiliar, é escrito qual o limite desses valores (Exemplo: 
um ângulo de 90º, para o levantamento lateral), caso a pessoa atinja um ângulo maior 
que 80º e volte ao ponto de início do exercício, o programa entende que a execução 
foi perfeita e marca a pontuação, caso a pessoa ultrapasse ou não chegue ao valor 
estipulado, o programa vai requisitar para que a ação seja feita novamente até 
conseguir terminar a tarefa.
***

**● Personal Robot - Elevação lateral:** https://editor.p5js.org/FelipeDestro/sketches/cxodEdLm9 

PS: (é necessário ter uma câmera/webcam para visualizar o programa funcionando)

[Megazord7563](https://www.instagram.com/megazord7563/) 🤖💙
