const enviarEmail = require('./envia-email');
const isMondayToday = require('./verify-day');
const convertWeekDay = require('./convert-week-day');
const clientsMails = require('./clientsData');
const newModels = require('./new-models-data');
const topSoldCars = require('./top-sold-data');
const verifyObjectKeys = require('./verify-object-keys');

const mountMailBody = (user, newCars, topSold) => {
    if (!user) throw new ReferenceError("Para que o correio eletrônico seja enviado, é necessário haver um usuário. Informe quem receberá o e-mail.");
    if (typeof user !== 'string') throw new TypeError("O nome de usuário deve conter caracteres válidos!");
    if (!newCars || !topSold) throw new ReferenceError("Você deve fornecer duas listas de carros novos para compor o corpo do e-mail: uma com as novidades, outra com os mais vendidos!");
    if (!Array.isArray(newCars) || !Array.isArray(topSold)) throw new TypeError("Os dados para as novidades e mais vendidos devem ser listas!");

    const body =
        `
            Opa! Tudo bom, ${user}?!
  
            Temos novidades imperdíveis para você, que quer  se destacar na multidão e chegar de líder! 
            Os autos que chegaram essa semana foram:
  
            ${showList(newCars)}
            Seguimos com nossas condições especiais para aquisição: a depender do seu histórico, você pode pagar metade do valor do automóvel na borracha e picar o restante todo em lâminas de cheque de mil!
            Abrace essa oportunidade, que é pra ti!!! 
            
            Confira também nossos modelos mais vendidos da semana:
            
            ${showList(topSold)} 
            Conte conosco sempre!
            Excelente semana!`

    return body;
}

const showList = (carList) => {
    if (!Array.isArray(carList)) throw new TypeError("Informe um elemento do tipo Array!");
    let listToString = [];
    for (let car of carList) {
        listToString.push(`Marca: ${car.brand} | Modelo: ${car.model} | Ano: ${car.year} | Preço: ${car.price} \n          `);
    }
    return listToString.join("");
}

const sendMail = (mailList) => {
    if (!mailList) throw new ReferenceError("A lista de e-mails deve ser informada - você não pode passar um dado 'vazio'!")
    if (!Array.isArray(mailList)) throw new TypeError("Você deve informar uma lista de e-mails!");
    if (!verifyObjectKeys(mailList)) throw new ReferenceError("A lista informada tem algum dado faltante. Confira se todos os cadastros contém os dados necessários: usuário, e-mail, a decisão quanto a receber e-mail e o intervalo em dias desde a última visita!");
    let mailsToReceive = mailList.filter(el => el.wishesToReceive === 1 && el.daysSinceLastVisit <= 30);
    mailsToReceive = mailsToReceive.filter(el => el.daysSinceLastVisit <= 30);
    if (isMondayToday()) {
        for (el of mailsToReceive) {
            let address = el.email;
            let subject = "Classificados CarStore";
            let mailBody = mountMailBody(el.user, newModels, topSoldCars);
            enviarEmail(address, subject, mailBody);
        }
    } else {
        const today = new Date();
        const todayInString = convertWeekDay(today.getDay());
        const differentDayMessage = `Hoje é ${todayInString}, portanto os e-mails não serão enviados!`;
        return console.log(differentDayMessage);
    }
}

sendMail(clientsMails);

