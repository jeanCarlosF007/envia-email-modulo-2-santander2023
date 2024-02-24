# Projeto Final Individual Módulo II Santander Coders 2023 - Javascript 

## Sobre

Este repositório contém o projeto com funcionalidade de envio de e-mail para clientes específicos de uma loja fictícia, a Car Store, desenvolvido como projeto final individual do módulo de Lógica de Programação I do curso **Santander Coders 2023**, ministrado pela [AdaTech](https://ada.tech/).

## Como rodar o projeto

Não há segredos. Você não precisa de dependências. Basta usar o comando *node [nome do arquivo]* no terminal, ou então o Code Runner, executando a função principal com o parâmetro correto. Isso deve ser feito levando em conta o arquivo *mount-and-send-email.js*, isto é, quando você estiver nesse arquivo específico.

## Proposta

Construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição.

## Funcionalidades

Temos alguns arquivos separando as diversas funcionalidades do programa. 

- Nos arquivos clientsData.js, new-models-data.js e top-sold-data.js temos arrays que fazem a vez de um "banco de dados" que armazenaria os dados dos clientes e dos veículos. Convém ressaltar que no clientsData.js cada cliente tem as informações essenciais que viabiliza o envio do e-mail de maneira estruturada: nome, e-mail, se deseja receber as atualizações e os dias desde a última visita - este último devido ao fato de que só quem deve receber as atualizações é quem visitou a loja no último mês e mostrou interesse em recebê-las;
- O arquivo verify-day.js contém a função que faz a verificação do dia da semana - já que os e-mails devem ser enviados todas as segundas-feiras;
- Em verify-object-keys temos uma função que realiza a validação se cada elemento do array (da lista de e-mails) possui os dados essenciais ao envio do e-mail;
- No convert-week-day é feita a conversão do dia da semana para que ele possa ser exibido na mensagem que aparece quando não é dia de envio (segunda-feira);
- O arquivo envia-email.js foi fornecido como modelo e ele faz o envio "fake" dos e-mails para os clientes.
- Por fim, o arquivo mount-and-send-mail faz todas as tratativas (incluso validações) para que o corpo do e-mail seja montado e ele seja [efetivamente] enviado. Na verdade, é nele que a mágica acontece, pois ele utiliza a função enviarEmail() do arquivo envia-email.js em seu desfecho, caso todas as condições sejam satisfeitas.

## Autor

* [Jean Carlos Farias](https://github.com/jeanCarlosF007)
