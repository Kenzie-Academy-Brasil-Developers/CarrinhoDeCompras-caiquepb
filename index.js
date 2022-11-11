const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },{
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },{
        id: 3,
        name: "Água de coco",
        price: 8.99
    },{
        id: 4,
        name: "Mamão",
        price: 9.98
    },{
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

let body = document.querySelector('body')

let main = document.createElement('main')
body.appendChild(main)

let titulo = document.createElement('h1')
titulo.innerText = "Virtual Market"
main.appendChild(titulo)

let section1 = document.createElement('section')
section1.classList.add("tituloCarrinho")
main.appendChild(section1)

let tituloCarrinho = document.createElement('h4')
tituloCarrinho.innerText = "Itens"
section1.appendChild(tituloCarrinho)

let valorCarrinho = document.createElement('h4')
valorCarrinho.innerText = "Valor"
section1.appendChild(valorCarrinho)

function adicionaItens(lista){

    for(let i = 0; i < lista.length; i++){

        let nome = lista[i].name
        let preco = lista[i].price

        let ul = document.createElement('ul')
        ul.classList.add("ProductList")
        ul.innerText = nome
        main.appendChild(ul)

        let li = document.createElement('li')
        li.classList.add("ProductDetails")
        li.innerText = `R$ ${preco}`
        ul.appendChild(li) 

    }

}

adicionaItens(productsCart)


let section2 = document.createElement('section')
main.appendChild(section2)

let divTotalCarrinho = document.createElement('div')
divTotalCarrinho.classList.add("totalCarrinho")
section2.appendChild(divTotalCarrinho)

let total = document.createElement('p')
total.innerText = "Total"
divTotalCarrinho.appendChild(total)

function somaCarrinho(lista){

    let soma = 0

    for(let i = 0; i < lista.length; i++){
        soma += lista[i].price
    }

    return soma
    
}


let soma = document.createElement('p')
soma.innerText = `R$ ${somaCarrinho(productsCart)}`
divTotalCarrinho.appendChild(soma)

let button = document.createElement('button')
button.innerText = "Finalizar"
section2.appendChild(button)