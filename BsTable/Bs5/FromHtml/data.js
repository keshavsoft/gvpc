var array = [
    {
        'id': 0,
        'name': 'Keshav',
        'price': '$0'
    },
    {
        'id': 1,
        'name': 'Veerendra',
        'price': '$1'
    },
    {
        'id': 2,
        'name': 'Item 2',
        'price': '$2'
    },
    {
        'id': 3,
        'name': 'Item 3',
        'price': '$3'
    },
    {
        'id': 4,
        'name': 'Item 4',
        'price': '$4'
    },
    {
        'id': 5,
        'name': 'Item 5',
        'price': '$5'
    }
]
var data = document.getElementById("vk");
console.log('jhvc');
for(var i=0; i<array.length; i++){
    var source = document.getElementById("template1").innerHTML;
    var template = Handlebars.compile(source);
    var jVarLocalK1 = template(array[i]);
    data.innerHTML += jVarLocalK1;
}