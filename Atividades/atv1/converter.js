function convert() {
    const fromCurrency = document.getElementById('fromCurrency').value; //Guarda o tipo de modea selecionado
    const toCurrency = document.getElementById('toCurrency').value; //Guarda o tipo de modea selecionado
    const amount = document.getElementById('amount').value; //Guarda o valor inserido pelo usuário

    // Verifica se o campo é vazio ou menor que zero
    if (amount === '' || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    // Essa é a API Awesonmeapi - Atualiza de forma o tipo da moeda
    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`;

    //
    fetch(apiUrl)
    //Converte a resposta da api em um json
        .then(response => response.json())
        .then(data => {
            const rateKey = `${fromCurrency}${toCurrency}`; //Concatena as moedas para obter o valor do objeto
            const rate = data[rateKey].bid; //Obetem o câmbio atual das moedas com o .bid
            const convertedAmount = (amount * rate).toFixed(2); //Conta de converssão
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`; //Para demonstrar o resultado final
        })

        //Caso tenha erro, exibe um console log
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            alert('Erro ao buscar os dados.');
        });
}
