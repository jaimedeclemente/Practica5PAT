let data;
const getData = async () => {
	let request = await fetch(
		"http://api.marketstack.com/v1/eod?access_key=6399c995a6c4865fb9b2b9f1e85843fc&symbols=MRL.BMEX",
        {
            method: 'GET',
    });
	if (request.status === 200) {
		let data = await request.json();
        console.log(data);
        $('#apertura').html(data.data[0].open);
        $('#cierre').html(data.data[0].close);
        let variacion = ((data.data[0].close-data.data[0].open)/data.data[0].open)*100;
        $('#variacion').html(variacion.toFixed(2)+"%");
        let volumen = data.data[0].volume/1000000;
        $('#volumen').html(volumen.toFixed(2)+"M");
		}
};
getData();