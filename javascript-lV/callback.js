let alunas = ['jess', 'josi', 'ana alice', 'ingrid', 'rafa', 'jani', 'dezzao'];

if(!alunas.includes('vitoria')){console.log("vitoria n ta na lista")};
// vitoria n ta na lista

if(alunas.includes('josi')){console.log("josi ta na lista")};
// josi ta na lista

const comecaComJ = nome => nome.startsWith('j')

comecaComJ('jess')
// true

comecaComJ('josi')
// true

comecaComJ('dezzao')
// false