# Projeto Jest - Mock!

Este projeto foi feito para avaliação de meus conhecimentos sobre _Jest_ ofertado pela Trybe.

## O que foi desenvolvido:

Nesse projeto desenvolvi um Mock para testar uu chamada em API utilizando o Jest .


# Requisitos Obedecidos

Todos os requisitos constituem regras de negócio definidas pela escola. Não me sendo autorizado alterá-las para uma outra arquitetura ou uso de outra tecnologia.

O projeto vai:

- Revisar seu conhecimento acerca de testes utilizando o Jest;
- Aplicar testes em funções assíncronas;
- 'Mockar' funções;
- 'Mockar' APIs.

Seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate** e do **TravisCI**.

**ATENÇÃO** Não modifiquem os arquivos da pasta `src`, o objetivo do projeto é que vocês trabalhem apenas com a pasta `test`.

### 1. Jest Assíncrono

Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

### 2. Mock Functions

Crie mock functions no arquivo `test/mockFunctions.spec.js` para que os testes mockados 'sobrescrevam' o código definido na pasta `src`. A idéia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

### 3. Mock APIs

Crie um API mock no arquivo `test/mockApi.spec.js` para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

Exemplo de resposta da API randomuser.me:

```js

{
  gender: 'female',
  name: { title: 'Ms', first: 'Deborah', last: 'Hanson' },
  location: {
    street: { number: 1299, name: 'Rochestown Road' },
    city: 'Birr',
    state: 'Wicklow',
    country: 'Ireland',
    postcode: 16223,
    coordinates: { latitude: '26.2451', longitude: '45.2995' },
    timezone: {
      offset: '+5:30',
      description: 'Bombay, Calcutta, Madras, New Delhi'
    }
  },
  email: 'deborah.hanson@example.com',
  login: {
    uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
    username: 'bluewolf366',
    password: 'iverson3',
    salt: 'XKOOGc2x',
    md5: '8cb7b4686f3869247b3ed189de780ea6',
    sha1: 'c24641f415cf36f4494ea4007fb3d77b47a6aad5',
    sha256: 'a7bdd079ead0adf21f30cee5b94e5581a9fa0d5fc8b3c1881dbc864dabc55a80'
  },
  dob: { date: '1965-10-01T06:35:49.694Z', age: 55 },
  registered: { date: '2009-02-11T05:48:39.772Z', age: 11 },
  phone: '021-953-7205',
  cell: '081-160-6277',
  id: { name: 'PPS', value: '0109675T' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/7.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg'
  },
  nat: 'IE'
}

```

### 4. Setup e Teardown

Intercale funções entre os testes definidos no arquivo `test/setupTeardown.js`.

