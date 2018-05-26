var page = {
    data : {
        showError : false,
        name : "",
        people : [],
        id : 0
    },
    methods : {
        add : function(){
            var p = new person(this.name);
            this.people.push(p);
            this.name = "";
        }
    } 
}

var person = function(name) {
    this.fullName = name;
    this.id = ++page.data.id;
    this.remove = function (person){
        page.data.people.filter(function(i, j) {
            if(i.id == person.id){
                page.data.people.splice(j, 1);
                return;
            }
        });
    }
}

var vm = new Vue({
    el : "#peoplePage",
    data : page.data,
    methods : page.methods
});

// var ym = new Vue({
//     el : "#muchArea",
//     data : {
//         year : 2018
//     }
// });