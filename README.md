# PetSpot - Plataforma Inteligente para Pets

![PetSpot Logo](./petspot/src/assets/images/PetSpot-PNG.png)

## 📋 Sobre o Projeto

**PetSpot** é uma plataforma desenvolvida para centralizar todas as informações dos pets em um só lugar, facilitando o dia a dia dos tutores. Com foco em praticidade, oferecemos um espaço onde você pode cadastrar, monitorar e gerenciar o histórico de saúde do seu pet, substituindo as carteirinhas físicas por uma versão digital.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Vue.js 3**
- **Vite** para empacotamento e build
- **Bootstrap** via CDN para estilização adicional
- **Ionicons** via CDN para ícones
- **Pinia** para gerenciamento de estado

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Além disso, é interessante ter um editor para trabalhar com o código, como o [Visual Studio Code](https://code.visualstudio.com/).

## 🔧 Instalação

### Passo 1: Clone o repositório

Clone o repositório para a sua máquina local.

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### Passo 2: Instale as dependências

Entre na pasta do projeto e instale as dependências:

```bash
cd seu-repositorio
cd petspot
npm install
```

### Passo 3: Inicie o servidor de desenvolvimento

Após instalar as dependências, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

### Passo 4: Rodando o projeto com host exposto

Se você quiser acessar o projeto em outra rede local, inicie o servidor com:

```bash
npm run dev -- --host
```

Isso permitirá que o projeto seja acessível em outros dispositivos na mesma rede.

## 🛠 Estrutura de Pastas

```bash
├── public             # Arquivos públicos (favicon, index.html)
├── src
│   ├── assets         # Fontes, imagens e vídeos
│   ├── components     # Componentes reutilizáveis
│   │   ├── common     # Componentes comuns a todo o projeto
│   │   ├── shared     # Componentes compartilhados entre telas
│   │   └── ui         # Componentes de interface (botões, inputs, etc)
│   ├── layouts        # Layouts reutilizáveis
│   ├── pages          # Páginas da aplicação
│   ├── plugins        # Configuração de plugins (Vuetify, etc)
│   ├── router         # Configuração das rotas
│   ├── scripts/ts     # Scripts TypeScript
│   ├── services       # Serviços externos e APIs
│   ├── store          # Gerenciamento de estado com Pinia
│   ├── styles/css     # Estilos customizados
│   ├── types          # Tipos TypeScript globais
│   └── utils          # Funções utilitárias
└── vite.config.ts     # Configurações do Vite
```

## 🛠 Configurações Adicionais

### Bootstrap e Ionicons via CDN

Bootstrap e Ionicons são utilizados via CDN e não precisam ser instalados como dependências no projeto. Aqui está como estão sendo utilizados no `index.html`:

```html
<!-- Bootstrap CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Ionicons -->
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
></script>
```

## 🔄 Build para Produção

Para criar a build de produção, execute o comando:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist`.

## 👨‍💻 Contribuições

Se quiser contribuir com o projeto, sinta-se à vontade para enviar um pull request ou abrir issues no GitHub.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ por **[André Franceschini](https://github.com/franceschinii)**.
