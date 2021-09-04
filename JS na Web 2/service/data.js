export const removeDatasRepetidas = (dados) => {
    const datasUnicas = [];

    dados.forEach(data => {
        if (datasUnicas.indexOf(data.dataFormatada) == -1) {
            datasUnicas.push(data.dataFormatada);
        }
    });
    return datasUnicas;
}

export const ordenaDatas = (datas) => {
    datas.sort((a, b) => {
        const aMoment = moment(a, "DD/MM/YYYY");
        const bMoment = moment(b, "DD/MM/YYYY");
        return aMoment - bMoment;
    })
}