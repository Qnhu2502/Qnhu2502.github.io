<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="myscripts.js"></script>
</head>
<body>
    <input type="text" id="txta">
    <input type="text" id="txtb">
    <button onclick="tongab();">
        Tính tổng
    </button>
</body>
</html>
còn đây là tệp javascript
function tongab() {
    var txta = document.getElementById('txta').value;
    var txtb = document.getElementById('txtb').value;
    if (txta == null || txta == '' || isNaN(txta)) {
        alert('Vui lòng nhập số a hợp lệ');
        return;
    }
    if (txtb == null || txtb == '' || isNaN(txtb)) {
        alert('Vui lòng nhập số b hợp lệ');
        return;
    }
    alert(parseInt(txta) + parseInt(txtb));
}