var tds = document.getElementsByTagName("td");
for (var i = 0; i < tds.length; i++) {
    var cell = document.getElementById(tds[i].getAttribute("id"));
    cell.onclick = processClick;
}

function processClick() {
    var classAttribute = this.getAttribute("class");
    if (classAttribute === "marked") {
        this.removeAttribute("class");
    } else {
        this.setAttribute("class", "marked");
    }
}

function Widget(partNo, size) {
    this.no = partNo;
    this.breed = size;
}

function Widget2(partNo, size, name) {
    Widget.call(this, partNo, size);
    this.name = name;
}

Widget2.prototype = new Widget();
Widget2.prototype.say = function() {
    console.log("Hello!");
};
Widget2.prototype.constructor = Widget2;

var xxx = {
    name: "Alice",
    say: function() {
        var counter = 0;
        return function() {
            console.log(counter++);
        }
    }
}

