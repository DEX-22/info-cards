
const piezas = {

    rey:{
        position:{
            i:0,j:0
        },
        icon:'♔', // para el rey negro;
    },
    reina:{
        position:{
            i:0,j:0
        },
        icon:'♛', // para una reina blanca;
    },
    alfil:{
        position:[ ],
        icon:'♝', // para un alfil blanco;
    },
    caballo:{
        position:[ ],
        icon:'♞', // para un caballo blanco;
    },
    torre:{
        position:[ ],
        icon:'♜', // para una torre blanca;
    },
    peon:{
        position:[ ],
        icon:'♟', // para un peón blanco;
    },
    vacio:{
        position:[ ],
        icon:' ' , //(un espacio) si no hay pieza en esa casilla.
    },
}


function isInSameAxis(rey,pieza){
    if(rey.i === pieza.i)
        return true

    if(rey.j === pieza.j)
        return true

    return false
}
function isInDiagonal(rey,pieza){
    return Math.abs(rey.i - pieza.i) == Math.abs(rey.j - pieza.j)
}

function checkQueen(rey,reina){
 
    if(isInSameAxis(rey,reina))
        return true
    
    if( isInDiagonal(rey,reina) )
        return true

    return false
    
}
function checkTorre(rey,torres){

    let result = false

    torres.position.map( torre => {
        
      if(isInSameAxis(rey,torre))
          result = true
    })
    return result

}

function checkCaballo(rey,caballos){

    let result = false

    caballos.position.map( caballo => {
        
        const diffI = Math.abs(rey.i - caballo.i)
        const diffJ = Math.abs(rey.j - caballo.j)


        if( diffI+diffJ === 3)
            result = true
    })

    return result
}

function checkAlfil(rey, alfiles){
    let result = false
  
    alfiles.position.map( alfil => {

        if( isInDiagonal(rey,alfil) )
          result = true

    })
    
    return result
}
function checkPeon(rey,peones){
  let result = false
  
  peones.position.map( peon =>{
         
    const diffI = Math.abs(rey.i - peon.i)
    const diffJ = Math.abs(rey.j - peon.j)
      
      if( [diffI,diffJ].includes(1) ) 
          result = true
      
    })
  
  return result
  
}

function kingIsInCheck (arr) {
  
arr.map( (rows,i) => {
    rows.map( (item,j) => {

        switch(item){
            case piezas.rey.icon:
                piezas.rey.position = {i,j}
            break;    
            case piezas.reina.icon:
                piezas.reina.position= {i,j}
            break;
            case piezas.alfil.icon:
                piezas.alfil.position.push({i,j})
            break;
            case piezas.caballo.icon:
                piezas.caballo.position.push({i,j})
            break;
            case piezas.torre.icon:
                piezas.torre.position.push({i,j})
            break;
            case piezas.peon.icon:
                piezas.peon.position.push({i,j})
            break;
            case piezas.vacio.icon:
                piezas.vacio.position.push({i,j})
            break;
        }

    })
})
const {rey,reina,alfil,torre,caballo,peon} = piezas

    let result = ''

        if(checkQueen(rey.position,reina.position)
                || checkTorre(rey.position,torre)
                || checkAlfil(rey.position,alfil)
                || checkCaballo(rey.position,caballo)
                || checkPeon(rey.position,peon) ){

                for (const piezas of pieza) {
                    if(!['rey','reina'].includes(pieza)){

                        pieza.position.map( el => {

                            result = !(isInSameAxis(rey,pieza) || isInDiagonal(rey,pieza))

                        })

                    }
                }

          }
  
    return result
}


const arr = 
[
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','♔',' ','♞',' ','♜',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ','♛',' ',' ',' ',' ',' ',' '],
    ['♝',' ',' ',' ',' ','♝',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','♜',' ',' ',' ',' ',' ']
]


console.log(isTheKingInCheck(arr))
