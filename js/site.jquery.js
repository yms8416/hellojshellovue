var bdg = $("#bdgError");
var txt = $("#txtPerson");
bdg.hide();
$("#btnAdd").click(function(){
    var text = txt.val();
    if(text){
        bdg.hide();
        addToList(text);
        txt.val("");
    }
    else{
        bdg.show();        
    }
});
$(".btnDelete").on("click", deleteOnClick);

function addToList(name){
    $(".btnDelete").off("click");
    var lst = $("#lstPeople");
    lst.append('<li class="list-group-item clearfix">' + 
    name +
    '<span class="float-right">' + 
        '<button class="btn btn-danger btnDelete">Sil</button>' +
    '</span>' + 
    '</li>');
    $(".btnDelete").on("click", deleteOnClick);
}

function deleteOnClick(){
    var btn = $(this);
    btn.closest("li").remove()
};