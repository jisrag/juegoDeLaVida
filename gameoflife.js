function iniciarMatriz(llenarMatriz) {
    for(var fil = 0; fil<llenarMatriz.length; fil++){
        for(var col = 0; col<llenarMatriz.length; col++){
            llenarMatriz[fil][col]= Math.floor(Math.random() * 2);
        }
    }
    return llenarMatriz;
    
}

function imprimirMatriz(mostrarMatriz){
    for(var fil = 0; fil<mostrarMatriz.length; fil++){
        for(var col = 0; col<mostrarMatriz.length; col++){
         document.write(mostrarMatriz[fil][col] + "     ");
        }
        document.write("<br>");
        }
    
}

function matrizResultado(mInicial, mVecinos){
    var col=0;
    for(var fil = 0; fil<mInicial.length; fil++){
       
        for(col = 0; col<mInicial.length; col++){
            if (mInicial[fil][col]==0) {
                if (mVecinos[fil][col]==3) {
                    mInicial[fil][col]=1;
                }else{
                    mInicial[fil][col]=0;
                }
            }else{
                if (mVecinos[fil][col]<=1) {
                    mInicial[fil][col]=0;
                }else{
                     if (mVecinos[fil][col]>=4) {
                    mInicial[fil][col]=0;
                     }else{
                     if (mVecinos[fil][col]==2 || mVecinos[fil][col]==3) {
                     mInicial[fil][col]=1;
                }
            }
            }
        

            
        }
    }col=0;
        
    }
return mInicial;
}

function llenarMaestraVecinos(mInicial, mVecinos){
    mVecinos=contarCentros(mInicial, mVecinos);
    mVecinos=contarIzquierdos(mInicial, mVecinos);
    mVecinos=contarDerechos(mInicial, mVecinos);
    mVecinos=contarArribas(mInicial, mVecinos);
    mVecinos=contarAbajos(mInicial, mVecinos);
    mVecinos= contarIzqSup(mInicial, mVecinos);
    mVecinos= contarIzqInf(mInicial, mVecinos);
    mVecinos=contarDerSup(mInicial, mVecinos);
    mVecinos=contarDerInf(mInicial, mVecinos);
   return mVecinos;

}

function contarCentros(mInicial, mVecinos){
    var fil=1;
    var col=1;
    var conta=0;
for(fil;fil<4;fil++){
    col=0;
    for(col;col<4;col++){
       conta=0;
        if (mInicial[fil-1][col-1]>0){conta++; }
        if (mInicial[fil-1][col]>0){conta++; }
        if (mInicial[fil-1][col+1]>0){conta++; }
        if (mInicial[fil][col+1]>0){conta++; }
        if (mInicial[fil+1][col+1]>0){conta++; }
        if (mInicial[fil+1][col]>0){conta++; }
        if (mInicial[fil+1][col-1]>0){conta++; }
        if (mInicial[fil][col-1]>0){conta++; }
        mVecinos[fil][col]=conta;
    }

}
return mVecinos;
}

function contarIzquierdos(mInicial, mVecinos){
    var fil=1;
    var col=0;
    for(fil;fil<4;fil++){
    var conta=0;
    if (mInicial[fil-1][col]>0){conta++; }
    if (mInicial[fil+1][col]>0){conta++;}   
    if (mInicial[fil-1][col+1]>0){conta++;}
    if (mInicial[fil][col+1]>0){conta++;}
    if (mInicial[fil+1][col+1]>0){conta++;}
    mVecinos[fil][col]=conta;
    }
    return mVecinos;
}

function contarDerechos(mInicial, mVecinos){
    var fil=1;
    var col=4;
    for(fil;fil<4;fil++){
    var conta=0;
    if (mInicial[fil-1][col]>0){conta++; }
    if (mInicial[fil-1][col-1]>0){conta++;}   
    if (mInicial[fil][col-1]>0){conta++;}
    if (mInicial[fil+1][col-1]>0){conta++;}
    if (mInicial[fil+1][col]>0){conta++;}
    mVecinos[fil][col]=conta;
    }
    return mVecinos;
}

function contarArribas(mInicial, mVecinos){
    var fil=0;
    var col=1;
    for(col;col<4;col++){
    var conta=0;
    if (mInicial[fil][col-1]>0){conta++; }
    if (mInicial[fil+1][col-1]>0){conta++;}   
    if (mInicial[fil+1][col]>0){conta++;}
    if (mInicial[fil+1][col+1]>0){conta++;}
    if (mInicial[fil][col+1]>0){conta++;}
    mVecinos[fil][col]=conta;
    }
    return mVecinos;
}

function contarAbajos(mInicial, mVecinos){
    var fil=4;
    var col=1;
    for(col;col<4;col++){
    var conta=0;
    if (mInicial[fil][col-1]>0){conta++; }
    if (mInicial[fil-1][col-1]>0){conta++;}   
    if (mInicial[fil-1][col]>0){conta++;}
    if (mInicial[fil-1][col+1]>0){conta++;}
    if (mInicial[fil][col+1]>0){conta++;}
    mVecinos[fil][col]=conta;
    }
    return mVecinos;
}

function contarIzqSup(mInicial, mVecinos){
    var fil=0;
    var col=0;
    var conta=0;
    if (mInicial[fil][col+1]>0){conta++; }
    if (mInicial[fil+1][col]>0){conta++;}   
    if (mInicial[fil+1][col+1]>0){conta++;}
    mVecinos[fil][col]=conta;
    return mVecinos;
}

function contarIzqInf(mInicial, mVecinos){
    var fil=4;
    var col=0;
    var conta=0;
    if (mInicial[fil-1][col]>0){conta++; }
    if (mInicial[fil-1][col+1]>0){conta++;}   
    if (mInicial[fil][col+1]>0){conta++;}
    mVecinos[fil][col]=conta;
    return mVecinos;

}

function contarDerSup(mInicial, mVecinos){
    var fil=0;
    var col=4;
    var conta=0;
    if (mInicial[fil][col-1]>0){conta++; }
    if (mInicial[fil+1][col-1]>0){conta++;}   
    if (mInicial[fil+1][col]>0){conta++;}
    mVecinos[fil][col]=conta;
    return mVecinos;
}

function contarDerInf(mInicial, mVecinos){
   
    var fil=4;
    var col=4;
    var conta=0;
    if (mInicial[fil-1][col]>0){conta++; }
    if (mInicial[fil-1][col-1]>0){conta++;}   
    if (mInicial[fil][col-1]>0){conta++;}
    mVecinos[fil][col]=conta;
    return mVecinos;

}