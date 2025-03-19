# Desafio MB

Este projeto é um formulário de cadastro multi-step desenvolvido com Vue.js, que permite a entrada de dados pessoais e profissionais, aplicando validações customizadas em cada campo.

---

## Como Rodar o Projeto

### 1. Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instalar as Dependências do Frontend
```sh
cd front
npm install
```

### 3. Rodar o Frontend em Ambiente de Desenvolvimento (OPCIONAL)
```sh
npm run dev
```
O projeto ficará disponível no navegador, geralmente em `http://localhost:5173`.

### 4. Buildar o Frontend para Produção (Para testar o serviço do servidor em node)
```sh
npm run build
```
Os arquivos finais ficarão na pasta `dist/`.

### 5. Instalar as Dependências do Backend
```sh
cd ../server
npm install
```

### 6. Rodar o Servidor Backend
```sh
npm start
```
O servidor ficará disponível em `http://localhost:3000`.

Acessar `http://localhost:3000/registration` para que seja renderizada a página do formulário.

## Validação dos Campos
A validação dos campos foi implementada de maneira simples, sem regex, verificando se os valores estão dentro dos formatos corretos.ATENÇÃO para os formatos, será importante na hora de testar

- **Email**: Verifica se possui `@` e `.`
- **Nome e Razão Social**: Verifica se possui pelo menos 3 caracteres
- **CPF**: Confirma se possui 11 dígitos e está no formato `XXX.XXX.XXX-XX`
- **CNPJ**: Confirma se possui 14 dígitos e está no formato `XX.XXX.XXX/XXXX-XX`
- **Data de Nascimento/Data de Abertura**: Verifica se a data é válida e menor ou igual à data de hoje
- **Telefone**: Confirma se está no formato `(XX)XXXXX-XXXX`
- **Senha**: Verifica se possui pelo menos 3 caracteres

Caso um campo seja inválido, não será possível avançar no cadastrado, será exibida uma mensagem `Verifique os dados preenchidos para continuar`.


