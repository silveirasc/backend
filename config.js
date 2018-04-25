// Configuration File
// Arquivo de configuração

console.log('entrou no config');
module.exports = {    
    port: 4000,
    databaseURI: "mongodb://localhost/mean",
    // Secret to generate JWT(Json Web Token), you can put any value here Eg: '231312', 'minhaChave', '237283jh2j3h'.
    // Chave secreta para gerar o JWT(Json Web Token), você pode colocar qualquer coisa Ex: '231312', 'minhaChave', '237283jh2j3h'.
    secret: 'mysecret',
    // Time for authentication token expires
    // Tempo para o token de autenticação expirar
    tokenExpireTime: 604800, // 1 Semana // 1 Week
    // Tamanho mínimo da senha
    passwordMinLength: 6,
    // Here you can define the error messages' content
    // Aqui você pode definir o conteúdo das mensagens de erro
    msgs:{
        invalidEmail: "e-mail invalido",
        invalidName: "Nome invalido",
        invalidPassword: "Senha invalida",
        // Mensagem que é retornada quando o tamanho da senha é pequeno 
        weakPassword: "A senha é muito curta, é necessário no minimo 6 caracteres",
        userCreated: "Usuario criado",
        userSaveFailed: "Aconteceu um erro ao salvar o processo, tente novamente!",
        // Mensagem que será retornada caso o e-mail que o usuário esteja tentando cadastrar já esteja em uso! 
        userAleadyExists: "Este e-mail já encontra-se registrado",
        userNotExists: "Usuário não existe",
        // Senha incorreta
        wrongPassword: "Senha incorreta!"
    }

}