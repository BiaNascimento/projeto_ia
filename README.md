# 🌤️ Weather App

Aplicação web simples que permite consultar a temperatura atual de qualquer cidade do mundo, utilizando APIs gratuitas e sem necessidade de chave de acesso.

## 📋 Sobre o Projeto

O **Weather App** foi desenvolvido como projeto de estudo com foco em consumo de APIs externas e organização modular de código JavaScript. O usuário digita o nome de uma cidade e a aplicação retorna a temperatura atual em graus Celsius.

## 🚀 Funcionalidades

- Busca de cidades por nome em português
- Exibição da temperatura atual (°C)
- Tratamento de erros (cidade não encontrada, falha na requisição)
- Interface responsiva e simples

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização da interface |
| JavaScript (ES Modules) | Lógica da aplicação |
| [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) | Conversão de nome de cidade em coordenadas geográficas |
| [Open-Meteo Weather API](https://open-meteo.com/en/docs) | Dados meteorológicos em tempo real |

> Nenhuma chave de API é necessária — ambas as APIs são gratuitas e abertas.

## 📁 Estrutura do Projeto

```
projeto_ia/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── ui.js
    ├── utils.js
    ├── api/
    │   ├── geocodingService.js
    │   └── weatherService.js
    └── ui/
        └── renderWeather.js
```

## ▶️ Como Executar

Por se tratar de uma aplicação front-end pura com ES Modules, é necessário servir os arquivos através de um servidor HTTP local (não funciona ao abrir o `index.html` diretamente no navegador).

### Opção 1 — VS Code com Live Server

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clique com o botão direito em `index.html` → **Open with Live Server**

### Opção 2 — Node.js com `http-server`

```bash
# Instalar o http-server globalmente (apenas uma vez)
npm install -g http-server

# Dentro da pasta do projeto
http-server .
```

Acesse `http://localhost:8080` no navegador.

### Opção 3 — Python

```bash
# Python 3
python -m http.server 8080
```

Acesse `http://localhost:8080` no navegador.

## 💡 Como Usar

1. Digite o nome de uma cidade no campo de busca (ex: `São Paulo`, `Tokyo`, `Paris`)
2. Clique em **Buscar**
3. A temperatura atual da cidade será exibida na tela

## 🔌 APIs Utilizadas

### Geocoding API (Open-Meteo)

Converte o nome da cidade em coordenadas de latitude e longitude.

```
GET https://geocoding-api.open-meteo.com/v1/search?name={cidade}&count=1&language=pt&format=json
```

### Weather API (Open-Meteo)

Retorna a temperatura atual com base nas coordenadas geográficas.

```
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m&timezone=auto
```

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e está disponível livremente.
