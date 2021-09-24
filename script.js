var dados = localStorage.getItem('dados')? JSON.parse(localStorage.getItem('dados')) : []

var tela= 1
var selecionado=null
function add (){
    var nome = document.querySelector('#nome').value
    var telefone = document.querySelector('#telefone').value
    if (nome=='') return
    if (telefone=='') return
  
   dados.push(
            {
                nome:nome,
                telefone:telefone
            }
            )
    tela=1
    listar ()
     
}

function del (i=null){
    i?delete dados[i]:delete dados[selecionado]
    tela=1
    console.log(dados)
    dados.length==0?dados=[]:''
    
    listar ()
}               

function mudartela(i, id=null){
    id!==null?selecionado=id:''
    tela=i
    listar ()
}

function edit (i=null) {
    if (i!==null) {
        tela=4
        selecionado=i
        document.querySelector('#nome').value=dados[i].nome
        document.querySelector('#telefone').value=dados[i].telefone
    } else {
        dados[selecionado].nome=document.querySelector('#nome').value
        dados[selecionado].telefone=document.querySelector('#telefone').value
        tela=1
    }
    
    


    listar ()


}

function listar () { 
    if (tela==1){ //tela inicial
        document.querySelector('#tela_add').style.display='none'
        document.querySelector('#novo').style.display=''
        document.querySelector('#opcoes').style.display='none'
        document.querySelector('#ed').style.display='none'
        document.querySelector('#sal').style.display='none'
    }
    if (tela==2){ //tela add
        document.querySelector('#tela_add').style.display='' 
        document.querySelector('#novo').style.display='none'
        document.querySelector('#opcoes').style.display='none'
        document.querySelector('#ed').style.display='none'
        document.querySelector('#sal').style.display=''
    }
    if (tela==3){ //tela deletar
        document.querySelector('#tela_add').style.display='none'
        document.querySelector('#novo').style.display='none'
        document.querySelector('#opcoes').style.display=''
        document.querySelector('#ed').style.display='none'
        document.querySelector('#sal').style.display='none'
    }
    if (tela==4){ //tela editar
        document.querySelector('#tela_add').style.display=''
        document.querySelector('#novo').style.display='none'
        document.querySelector('#opcoes').style.display='none'
        document.querySelector('#ed').style.display=''
        document.querySelector('#sal').style.display='none'
    }


    document.querySelector('tbody').innerHTML=''
    var content = ``
    dados.map((iten,i)=>{
        content=content+`<tr>
            <td>${iten.nome}</td>
            <td>${iten.telefone}</td>
            <td>
                <i onclick='mudartela(3,${i})' class="bi bi-trash"></i> 
                <i onclick='edit(${i})' class="bi bi-pen-fill"></i>
            </td>
        <tr>`
    })
    document.querySelector('tbody').innerHTML= content

    if(JSON.stringify(dados)=='[null]'){
        localStorage.setItem('dados', '[]')
    }else{
        localStorage.setItem('dados', JSON.stringify(dados))
    }

    
}
listar ()