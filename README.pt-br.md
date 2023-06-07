# DropMail - Gerador de E-mail Temporário
[![us](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/AugustoBosa/DropMail/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/AugustoBosa/DropMail/blob/main/README.pt-br.md)

> Este é um desafio da Coodesh.

Este aplicativo front-end React foi desenvolvido como parte do desafio da Coodesh. O DropMail oferece aos usuários uma solução simples para gerar contas de e-mail temporárias usando a API do DropMail.

Veja-o em funcionamento: [DropMail - Demo do Gerador de E-mail Temporário](https://dropmail-tempmail.netlify.app/)
![image](https://github.com/AugustoBosa/DropMail/assets/115903598/dde21f3c-ec45-4f04-88e2-a8dde2d47e07)

> **Nota:** Por favor, observe que a demonstração implantada é fornecida apenas para fins de demonstração e pode não refletir dados ou funcionalidades em tempo real.

## Desafio
No mundo online atual, muitos sites e serviços exigem um endereço de e-mail válido para registro, acesso a conteúdo protegido ou recebimento de notificações importantes. No entanto, o problema surge quando esses sites usam indevidamente nossos endereços de e-mail para enviar spam indesejado, anúncios ou se tornarem alvos de hackers e ataques de robôs.

Para resolver esse problema, uma solução confiável é usar um endereço de e-mail temporário, especialmente quando você está incerto sobre a confiabilidade de um site. Dessa forma, você pode manter sua caixa de entrada livre de spam e proteger sua privacidade. Neste desafio, a tarefa é desenvolver um aplicativo que consuma uma API de e-mail temporário, permitindo que os usuários utilizem serviços online sem expor seus endereços de e-mail reais.

# Tabela de Conteúdos

- 🌐 [Suporte de Idioma](#suporte-de-idioma)
- ⚙️ [Instalação](#instalação)
- 📖 [Uso](#uso)
  - 📺 [Demonstração](#video)  
- 🚀 [Implantação](#implantação)
- ✨ [Recursos](#recursos)
- 📚 [Documentação](#documentação)
  - 📡[API do DropMail](#api) 
- 🤝 [Contribuição](#contribuição)
- 📝 [Licença](#licença)
- 🙏 [Agradecimentos](#agradecimentos)
- ⚠️ [Manutenção do Projeto](#manutenção-do-projeto)
- 📞 [Contato](#contato)

## 🌐 Suporte de Idioma <a name="suporte-de-idioma"></a>
O aplicativo DropMail - Gerador de E-mail Temporário atualmente oferece suporte apenas ao idioma inglês.

**Nota:** A interface e o uso do aplicativo são projetados para serem intuitivos e simples, utilizando palavras e símbolos simples e universalmente compreendidos. Portanto, não há necessidade de traduções no momento.

Agradecemos sua compreensão e incentivamos você a explorar os recursos e funcionalidades do aplicativo em inglês. Se você tiver alguma dúvida ou precisar de assistência, nossa equipe de suporte está sempre aqui para ajudar.

## ⚙️ Instalação <a name="instalação"></a>

1. Clone o repositório

 do front-end:

   ```bash
   git clone https://github.com/AugustoBosa/DropMail.git
   ```

2. Instale as dependências:

   ```bash
   cd DropMail
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o aplicativo em `http://localhost:5173` ou a porta especificada no arquivo `vite.config.js`.

## 📖 Uso <a name="uso"></a>

Usar o aplicativo DropMail - Gerador de E-mail Temporário é simples e conveniente:

- Abra o aplicativo em seu navegador da web.
- Ao abrir, o aplicativo verificará automaticamente a última ID de sessão armazenada no localStorage do seu navegador. Se a sessão tiver expirado ou nenhuma ID de sessão for encontrada, uma nova sessão será criada e salva no localStorage.
- Para copiar o endereço de e-mail temporário, você tem duas opções:
  - Selecione manualmente o endereço de e-mail clicando e arrastando o cursor do mouse sobre ele, em seguida, copie-o.
  - Clique no botão de cópia localizado ao lado do endereço de e-mail, e ele será instantaneamente copiado para a área de transferência.
- O aplicativo atualiza automaticamente a caixa de entrada a cada 15 segundos para buscar novos e-mails. No entanto, você também pode atualizar a caixa de entrada manualmente usando o botão de atualização fornecido.
- Para acessar o conteúdo de um e-mail, basta clicar no e-mail na lista de caixa de entrada. A mensagem será exibida e, se houver anexos, você poderá baixá-los clicando no botão de download na parte inferior direita da mensagem.

Aproveite o uso do DropMail para gerar contas de e-mail temporárias e gerenciar suas comunicações por e-mail sem esforço!

### 📺 Demonstração <a name="video"></a>

Fique atento à próxima demonstração em vídeo mostrando os recursos e a funcionalidade do DropMail.

## 🚀 Implantação <a name="implantação"></a>

O front-end é implantado no Netlify (https://dropmail-tempmail.netlify.app/).

Observe que esses links de implantação são fornecidos como exemplos e podem não estar acessíveis ou disponíveis no futuro.

## ✨ Recursos <a name="recursos"></a>
O aplicativo DropMail - Gerador de E-mail Temporário oferece os seguintes recursos principais:

Gerar contas de e-mail temporárias
Copiar endereço de e-mail para a área de transferência
Atualizar automaticamente a caixa de entrada para atualizações em tempo real
Visualizar mensagens de e-mail em uma interface fácil de usar
Baixar mensagens de e-mail e anexos para acesso offline
Receber notificações quando chegar um novo e-mail

## 📚 Documentação <a name="documentação"></a>

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="

35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" width="35px"></img>

O aplicativo é construído usando React e Tailwind CSS e consome a API DropMail. Ele é projetado com uma mentalidade móvel em primeiro lugar e segue um design simples, porém eficaz, fornecido pelo desafio.

Para executar o aplicativo, certifique-se de ter o Node.js instalado. Clone o repositório e siga as instruções na seção [Instalação](#instalação) para configurar o projeto.

O aplicativo utiliza as seguintes dependências e dependências de desenvolvimento:

- [axios](https://www.npmjs.com/package/axios): Um cliente HTTP baseado em promessa para fazer requisições de API.
- [react](https://reactjs.org/): Uma biblioteca JavaScript para construir interfaces de usuário.
- [react-dom](https://reactjs.org/docs/react-dom.html): Um pacote para renderizar componentes React no DOM.
- [vite](https://vitejs.dev/): Um servidor de desenvolvimento rápido e uma ferramenta de compilação para aplicativos web modernos.
- [react-icons](https://www.npmjs.com/package/react-icons): Uma coleção de ícones populares para React.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): Um plugin para analisar CSS e adicionar prefixos de fornecedor automaticamente.
- [postcss](https://www.npmjs.com/package/postcss): Uma ferramenta para transformar estilos com plugins JS.
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): Um framework CSS de utilidades para construir interfaces de usuário personalizadas rapidamente.

Para obter mais informações sobre cada dependência, consulte a respectiva documentação no npm.

### 📡 API DropMail <a name="api"></a>

A API DropMail fornece um serviço de e-mail temporário e está atualmente em estado de "beta público". Mudanças incompatíveis com versões anteriores ainda são possíveis.

- Endpoint HTTP: `https://dropmail.me/api/graphql/${AUTH_TOKEN}`
- A API usa o formato GraphQL. Esquema GraphQL: `schema.graphql`.
- Você pode usar qualquer string única com 8 caracteres ou mais como `${AUTH_TOKEN}` agora, mas mecanismos de autenticação podem ser introduzidos posteriormente.
- Ambos os métodos GET e POST podem ser usados. Para GET, adicione parâmetros codificados em URL à URL como uma string de consulta: `/api/graphql/MY_TOKEN?query=...&variables=...` ("variables" deve ser um objeto JSON). POST aceita `application/x-www-form-urlencoded` e `application/json` como Content-Types. Se nenhum cabeçalho "Content-Type" for fornecido, o corpo será esperado em JSON.

>Para obter mais informações, consulte a [documentação da API DropMail](https://dropmail.me/api/).

## 🤝 Contribuição <a name="contribuição"></a>

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade

 para abrir uma nova issue ou enviar um pull request.

Antes de enviar um pull request, certifique-se de seguir as diretrizes de contribuição e de teste.

## 📝 Licença <a name="licença"></a>

Este projeto está licenciado sob a [MIT License](LICENSE).

## 🙏 Agradecimentos <a name="agradecimentos"></a>

Gostaria de expressar minha gratidão aos criadores do desafio da Coodesh por me proporcionarem uma ótima oportunidade de aprendizado. Este projeto me permitiu explorar novas tecnologias como Tailwind CSS e GraphQL. Foi uma experiência emocionante.

## ⚠️ Manutenção do Projeto <a name="manutenção-do-projeto"></a>

O projeto é mantido ativamente e pode passar por reformulações e atualizações para solucionar possíveis bugs ou problemas que possam surgir no futuro. No momento, nenhum bug foi relatado.

Observe que os links de implantação fornecidos podem ficar offline ou inacessíveis no futuro devido a vários motivos. Se você encontrar dificuldades ao acessar o aplicativo ou tiver alguma dúvida, não hesite em entrar em contato comigo para obter assistência.

Seus comentários e contribuições são valiosos para melhorar o projeto, portanto, não hesite em relatar quaisquer bugs ou sugerir melhorias caso encontre algum. Juntos, podemos tornar o DropMail - Gerador de E-mail Temporário ainda melhor!
## 📞 Contato <a name="contato"></a>

Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para enviar um e-mail para [augustobosa.dev@gmail.com](mailto:augustobosa.dev@gmail.com).
