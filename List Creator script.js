// Criando lista com id lista

function listCreator(listElements){
  
  //Array contendo a lista de nodes e elementos juntos
  const listComponents = listElements.split(" ");
    
    
  
  //crear o Nodo pai com primeiro elemento do array listComponents
  const fatherNode = document.createElement(listComponents[0]);

  //Ciclo para criar os nodos filho da lista segundo a necessidade do usuario
  const childrensLimit = listComponents.length - 2; 
  
  for(let counter = 0; counter < childrensLimit; counter++)
    {
    const element =  document.createElement(listComponents[1]);
    fatherNode.append(element);
    }
  const finalSplice = listComponents.length;
  const items = listComponents.slice(2, finalSplice);

  const textItems = items.join();
 
    
  function AttributesAndElements(attributes, textOfli){
    
    //array contendo os attributos del elemento pai da lista
    const splitAttributes = attributes.split(" ");
    
    //array contendo os itens da lista
    const itemList = textOfli.split(",")
    
fatherNode.setAttribute(splitAttributes[0], splitAttributes[1]);

const childrenOffatherNode = fatherNode.children;
   
    //Adicionando o texto a Lista 
    for(let listli in childrenOffatherNode)
      {
        
   childrenOffatherNode[listli].textContent = itemList[listli];
    
      }
   
    return fatherNode;
   }

  // Crea lista formatada para entregar
  const lista = AttributesAndElements("id lista",textItems);
  
return lista;
  }


// Criando uma lista e colocando no HTML body como filho
const list = listCreator("ul li Acre item2 item3");
 document.body.appendChild(list);
