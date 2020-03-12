Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

fetch('https://www.datos.gov.co/resource/yec2-e4mm.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        generateTable(myJson);
    });

//funtions        


function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function generateTable(elementsJson) {
    var table = document.getElementById("dataTable");
    var html = `
    <thead>
        <tr>
            <th>Rango de edad</th>
            <th>Enero</th>
            <th>Febrero</th>
            <th>Marzo</th>
            <th>Abril</th>
            <th>Mayo</th>
            <th>Junio</th>
            <th>Julio</th>
            <th>Agosto</th>
            <th>Septiembre</th>
            <th>Octubre</th>
            <th>Noviembre</th>
            <th>Diciembre</th>
            <th>Total</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
        <th>Rango de edad</th>
        <th>Enero</th>
        <th>Febrero</th>
        <th>Marzo</th>
        <th>Abril</th>
        <th>Mayo</th>
        <th>Junio</th>
        <th>Julio</th>
        <th>Agosto</th>
        <th>Septiembre</th>
        <th>Octubre</th>
        <th>Noviembre</th>
        <th>Diciembre</th>
        <th>Total</th>
        </tr>
    </tfoot>
    <tbody>
    `;
    for (let json of elementsJson) {
        html += `
        <tr>
            <td>${json.rango_de_edad}</td>
            <td>${json.enero_2018}</td>
            <td>${json.febrero_2018}</td>
            <td>${json.marzo_2018}</td>
            <td>${json.abril_2018}</td>
            <td>${json.mayo_2018}</td>
            <td>${json.junio_2018}</td>
            <td>${json.julio_2018}</td>
            <td>${json.agosto_2018}</td>
            <td>${json.septiembre_2018}</td>
            <td>${json.octubre_2018}</td>
            <td>${json.noviembre_2018}</td>
            <td>${json.diciembre_2018}</td>
            <td>${json.totales}</td>
        </tr>
        `;
    }
    html += `
    </tbody>
        `;
    table.innerHTML = html;
}