let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

let regionSel = document.getElementById("select");
let productSel = document.getElementById("select1");

//select选择变换的响应事件监听
regionSel.onchange = function() {
	deleteTr();
	var objArrData = getData();
	freshTable(objArrData);
}

productSel.onchange = function() {
	deleteTr();
	var objArrData = getData();
	freshTable(objArrData);
}

//删除原来的tr节点
function deleteTr() {
	let saleTable = document.getElementById("saleTable");
	let trArr = document.getElementsByClassName("tempTr");
	for(let i = trArr.length - 1; i >= 0; i--) {
		saleTable.removeChild(trArr[i]);
	}
}

//获取对象数组数据
function getData() {
	let strReginSel = regionSel.options[regionSel.selectedIndex].innerHTML;
	let strProductSel = productSel.options[productSel.selectedIndex].innerHTML;
	var arrTmep = [];
	for(let item of sourceData) {
		if(item.region == strReginSel && item.product == strProductSel) {
			arrTmep.push(item);
		}
	}
	return arrTmep;
}

//渲染新表格
function freshTable(objArrData) {
	var arr = [];
	for(let i = 0; i < objArrData.length; i++) {
		arr[0] = objArrData[i]["product"];
		arr[1] = objArrData[i]["region"];
		for(let j = 2, k = 0; k < objArrData[i]["sale"].length; j++, k++) {
			arr[j] = objArrData[i]["sale"][k];
		}
		addTr(arr);
		//console.log(arr);
	}
}

//添加表项
function addTr(arr) {
	let tr = document.createElement("tr");
	tr.className = "tempTr";
	//创建14个td
	let productTd = document.createElement("td");
	let regionTd = document.createElement("td");
	let janTd = document.createElement("td");
	let febTd = document.createElement("td");
	let marTd = document.createElement("td");
	let aprTd = document.createElement("td");
	let mayTd = document.createElement("td");
	let junTd = document.createElement("td");
	let julTd = document.createElement("td");
	let augTd = document.createElement("td");
	let septTd = document.createElement("td");
	let octTd = document.createElement("td");
	let novTd = document.createElement("td");
	let decTd = document.createElement("td");
	//创建14个textNode
	let productText = document.createTextNode(arr[0]);
	let regionText = document.createTextNode(arr[1]);
	let janText = document.createTextNode(arr[2]);
	let febText = document.createTextNode(arr[3]);
	let marText = document.createTextNode(arr[4]);
	let aprText = document.createTextNode(arr[5]);
	let mayText = document.createTextNode(arr[6]);
	let junText = document.createTextNode(arr[7]);
	let julText = document.createTextNode(arr[8]);
	let augText = document.createTextNode(arr[9]);
	let septText = document.createTextNode(arr[10]);
	let octText = document.createTextNode(arr[11]);
	let novText = document.createTextNode(arr[12]);
	let decText = document.createTextNode(arr[13]);
	//将文本加到td下
	productTd.appendChild(productText);
	regionTd.appendChild(regionText);
	janTd.appendChild(janText);
	febTd.appendChild(febText);
	marTd.appendChild(marText);
	aprTd.appendChild(aprText);
	mayTd.appendChild(mayText);
	junTd.appendChild(junText);
	julTd.appendChild(julText);
	augTd.appendChild(augText);
	septTd.appendChild(septText);
	octTd.appendChild(octText);
	novTd.appendChild(novText);
	decTd.appendChild(decText);
	//将td加到tr下
	tr.appendChild(productTd);
	tr.appendChild(regionTd);
	tr.appendChild(janTd);
	tr.appendChild(febTd);
	tr.appendChild(marTd);
	tr.appendChild(aprTd);
	tr.appendChild(mayTd);
	tr.appendChild(junTd);
	tr.appendChild(julTd);
	tr.appendChild(augTd);
	tr.appendChild(septTd);
	tr.appendChild(octTd);
	tr.appendChild(novTd);
	tr.appendChild(decTd);
	//将tr加到table下
	let saleTable = document.getElementById("saleTable");
	saleTable.appendChild(tr);
//	console.log(saleTable);

}

