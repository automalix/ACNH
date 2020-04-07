let counter = 0;
let itemQuant = 0;

function clear(){
  document.querySelector('#selectedName').textContent = "";
  document.querySelector('#selectedHex').textContent = "";
  document.querySelector('#selectedDecimal').textContent = "";
  document.querySelector('#codeOutput').textContent = "";
  counter = 0;
  itemQuant = 0;
}

clear();

function filterFunction() {
  let input = document.getElementById('myInput');
  let filter = input.value.toUpperCase();
  let div = document.getElementById('myDropdown');
  let a = div.getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = 'none';
    }
  }
}
function cb(event){
  let itemName = event.target.hash;
  itemName = itemName.replace("#", "")
  itemName = itemName.replace("%20", " ")
  itemName = itemName.replace("%20", " ")
  let itemHex = event.target.dataset.hex
  let itemDecimal = parseInt(itemHex, 16)
  console.log(itemName, itemHex)

  let code = {
    0: `04100000 AC3B90C0 0000${itemHex}\n04100000 AC3B90C4 000000${itemQuant}`,
    1: `04100000 AC3B90C8 0000${itemHex}\n04100000 AC3B90CC 000000${itemQuant}`,
    2: `04100000 AC3B90D0 0000${itemHex}\n04100000 AC3B90D4 000000${itemQuant}`,
    3: `04100000 AC3B90D8 0000${itemHex}\n04100000 AC3B90DC 000000${itemQuant}`,
    4: `04100000 AC3B90E0 0000${itemHex}\n04100000 AC3B90E4 000000${itemQuant}`,
    5: `04100000 AC3B90E8 0000${itemHex}\n04100000 AC3B90EC 000000${itemQuant}`,
    6: `04100000 AC3B90F0 0000${itemHex}\n04100000 AC3B90F4 000000${itemQuant}`,
    7: `04100000 AC3B90F8 0000${itemHex}\n04100000 AC3B90FC 000000${itemQuant}`,
    8: `04100000 AC3B9100 0000${itemHex}\n04100000 AC3B9104 000000${itemQuant}`,
    9: `04100000 AC3B9108 0000${itemHex}\n04100000 AC3B910C 000000${itemQuant}`,
    10: `04100000 AC3B9110 0000${itemHex}\n04100000 AC3B9114 000000${itemQuant}`,
    11: `04100000 AC3B9118 0000${itemHex}\n04100000 AC3B911C 000000${itemQuant}`,
    12: `04100000 AC3B9120 0000${itemHex}\n04100000 AC3B9124 000000${itemQuant}`,
    13: `04100000 AC3B9128 0000${itemHex}\n04100000 AC3B912C 000000${itemQuant}`,
    14: `04100000 AC3B9130 0000${itemHex}\n04100000 AC3B9134 000000${itemQuant}`,
    15: `04100000 AC3B9138 0000${itemHex}\n04100000 AC3B913C 000000${itemQuant}`,
    16: `04100000 AC3B9140 0000${itemHex}\n04100000 AC3B9144 000000${itemQuant}`,
    17: `04100000 AC3B9148 0000${itemHex}\n04100000 AC3B914C 000000${itemQuant}`,
    18: `04100000 AC3B9150 0000${itemHex}\n04100000 AC3B9154 000000${itemQuant}`,
    19: `04100000 AC3B9158 0000${itemHex}\n04100000 AC3B915C 000000${itemQuant}`,
    20: `04100000 AC3B9008 0000${itemHex}\n04100000 AC3B900C 000000${itemQuant}`,
    21: `04100000 AC3B9010 0000${itemHex}\n04100000 AC3B9014 000000${itemQuant}`,
    22: `04100000 AC3B9018 0000${itemHex}\n04100000 AC3B901C 000000${itemQuant}`,
    23: `04100000 AC3B9020 0000${itemHex}\n04100000 AC3B9024 000000${itemQuant}`,
    24: `04100000 AC3B9028 0000${itemHex}\n04100000 AC3B902C 000000${itemQuant}`,
    25: `04100000 AC3B9030 0000${itemHex}\n04100000 AC3B9034 000000${itemQuant}`,
    26: `04100000 AC3B9038 0000${itemHex}\n04100000 AC3B903C 000000${itemQuant}`,
    27: `04100000 AC3B9040 0000${itemHex}\n04100000 AC3B9044 000000${itemQuant}`,
    28: `04100000 AC3B9048 0000${itemHex}\n04100000 AC3B904C 000000${itemQuant}`,
    29: `04100000 AC3B9050 0000${itemHex}\n04100000 AC3B9054 000000${itemQuant}`,
    30: `04100000 AC3B9058 0000${itemHex}\n04100000 AC3B905C 000000${itemQuant}`,
    31: `04100000 AC3B9060 0000${itemHex}\n04100000 AC3B9064 000000${itemQuant}`,
    32: `04100000 AC3B9068 0000${itemHex}\n04100000 AC3B906C 000000${itemQuant}`,
    33: `04100000 AC3B9070 0000${itemHex}\n04100000 AC3B9074 000000${itemQuant}`,
    34: `04100000 AC3B9078 0000${itemHex}\n04100000 AC3B907C 000000${itemQuant}`,
    35: `04100000 AC3B9080 0000${itemHex}\n04100000 AC3B9084 000000${itemQuant}`,
    36: `04100000 AC3B9088 0000${itemHex}\n04100000 AC3B908C 000000${itemQuant}`,
    37: `04100000 AC3B9090 0000${itemHex}\n04100000 AC3B9094 000000${itemQuant}`,
    38: `04100000 AC3B9098 0000${itemHex}\n04100000 AC3B909C 000000${itemQuant}`,
    39: `04100000 AC3B90A0 0000${itemHex}\n04100000 AC3B90A4 000000${itemQuant}`,
  }

  document.querySelector('#selectedName').innerHTML += itemName + "\n";
  document.querySelector('#selectedHex').textContent += itemHex + "\n";
  document.querySelector('#selectedDecimal').textContent += itemDecimal + "\n";
  document.querySelector('#codeOutput').textContent += `[${itemName} DIY Recipe Slot ${counter + 1}]\n` + code[counter] + "\n\n"
  counter++;
}

document.querySelectorAll('#myDropdown > a').forEach(cur => cur.addEventListener('click', e => cb(e)))
document.querySelector('#clear').addEventListener('click', clear)