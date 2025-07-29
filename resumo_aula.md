# 📚 Resumo dos conceitos aplicados

### 📦 -D na instalação de dependências
 O sinal -D (ou --save-dev) é usado ao instalar dependências de desenvolvimento, ou seja, pacotes que são usados apenas durante o desenvolvimento da aplicação e não são incluídos na versão final em produção.

### ⚡Fastify

 O fastify é um framework web para Node.js que permite criar servidores HTTP de forma rápida e eficiente.

 ### 🌐 Rota /ola

 Significa que é a rota raiz do servidor. Rota é o caminho que define um endpoint da API. A rota /ola representa um ponto de entrada da aplicação, e nesse caso, pode ser usada como uma rota de teste ou saudação no servidor.



# 📡 Métodos HTTP

#### Os métodos HTTP definem as ações que podem ser realizadas em um recurso (como dados do banco) por meio de uma requisição. São fundamentais no desenvolvimento de APIs RESTful. Veja os principais:


 🔹 GET

 Usado para: Buscar dados do servidor.

 Exemplo: Listar tarefas, obter detalhes de um item.

 Não altera nada no banco de dados.

 Listar algo. Não tem corpo (body) na requisição.
 

 🔹 POST

 Usado para: Criar um novo recurso.

 Exemplo: Adicionar uma nova tarefa.

 Envia dados no corpo da requisição.

 🔹 PUT

 Usado para: Atualizar totalmente um recurso existente.

 Exemplo: Substituir todos os dados de uma tarefa existente.
 Atualizar  algo, sobrescreve o recurso por completo, enquanto PATCH altera só partes dele.

 🔹 PATCH

 Usado para: Atualizar parcialmente um recurso.

 Exemplo: Alterar apenas o status de uma tarefa.
 PATCH -> Atualizar algo em especifíco.

 🔹 DELETE

 Usado para: Remover um recurso do servidor.

 Exemplo: Excluir uma tarefa do banco de dados.

 Deletar. Só precisa do ID ou identificação do item a ser removido.

#### OBS: POST, PUT e PATCH geralmente têm body (com os dados a serem enviados).

### 🧠 Para não esquecer


| Método     | Função                            | Exemplo prático                                 |
| ---------- | --------------------------------- | ----------------------------------------------- |
| **GET**    | Buscar dados (sem alterar nada)   | Buscar lista de tarefas: `GET /tarefas`         |
| **POST**   | Criar um novo recurso             | Criar nova tarefa: `POST /tarefas`              |
| **PUT**    | Atualizar **tudo** de um recurso  | Atualizar tarefa inteira: `PUT /tarefas/1`      |
| **PATCH**  | Atualizar **parte** de um recurso | Mudar só o status da tarefa: `PATCH /tarefas/1` |
| **DELETE** | Deletar um recurso                | Excluir tarefa: `DELETE /tarefas/1`             |


