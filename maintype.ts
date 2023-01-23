// GLOBAL SELECTORS 
const menuNavBarLinks = document.querySelectorAll('.menu-links li');
const mainBoardPanel = document.querySelector('.main-board-panel') as HTMLDivElement;
const pages = mainBoardPanel.querySelectorAll('.pages');
let simulatorsPageContainer = document.querySelector('.simulators-page .container') as HTMLDivElement;

class Simulator{
    name: string;
    quantity: number;
    codes: Array<string>;
    
}
//Creating an array of object
let simulatorsV: Simulator [] = [];




//EVENT LISTENERS
menuNavBarLinks.forEach( element =>{
    element.addEventListener('click',callPages);
});


//FUNCTIONS
function callPages(event: any){
   
    let menuLinkIDs = event.target.id;

    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        let pageID = element.id;

        if(menuLinkIDs == pageID){
            switch(menuLinkIDs){
                //Relatorio Page
                case 'relatorio-form':

                   let pageHeaderContainer =  element.querySelector('.page-header-container');
                   let pageBodyContainer =  element.querySelector('.page-body-container');
                    
                   element.setAttribute('style','display:block');

                    if(pageHeaderContainer && pageBodyContainer){
                        pageHeaderContainer.remove();
                        pageBodyContainer.remove();
                        relatorioFormCreation();
                    }else{
                        relatorioFormCreation();
                    }
                    
                    
                break
                //simuladores Page
                case 'simuladores':
                    element.setAttribute('style','display:block');
                    let headerContainer =  element.querySelector('.simulators-page .page-header-container');
                    let bodyContainer =  element.querySelector('.simulators-page .page-body-container');
                    if(headerContainer && bodyContainer){
                        headerContainer.remove();
                        bodyContainer.remove();
                        simulatorsPageContainer.setAttribute('style','display:block');
                    }else{
                        simulatorsPageContainer.setAttribute('style','display:block');
                    }
                    const allBtnsEnviarRelatorio = document.querySelectorAll('.simulators-page .button-container .btn-enviar-relatorio');
                    allBtnsEnviarRelatorio.forEach(element =>{
                        element.addEventListener('click',sendRelatorio);
                    });


                    break
                // Relatorios Page
                case 'relatorios':
                    element.setAttribute('style','display:block');
                    break
            }
            
        }else{
            element.setAttribute('style','display:none');
        }
    }
    
}
//This function is being called from callPages
function sendRelatorio(event: any){
    //Creating an instance of Class
    let model = new Simulator();

    let btnClicked = event.target;
    let simulatorName = btnClicked.id;
    //let simulatorsPageContainer = document.querySelector('.simulators-page .container') as HTMLDivElement;
    simulatorsPageContainer.setAttribute('style','display:none');
    relatorioFormCreation(simulatorName, model);
    
}

function relatorioFormCreation(selectedName: string , simulator: Simulator){
//Creating an instance of Class
    //let model = new Simulator();
    
    const relatorioFormPage = document.querySelector('.main-board-panel .simulators-page') as HTMLDivElement;
    mainBoardPanel.append(relatorioFormPage);
//PageHeader Container       
    const pageHeaderDivContainer = document.createElement('div');
    pageHeaderDivContainer.className = 'container page-header-container';
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
//FIRST COL   
    const firstCol = document.createElement('div');
    firstCol.className = 'col';
    const h5TagPageTittle = document.createElement('h5');
    h5TagPageTittle.className = 'page-tittle';
    h5TagPageTittle.innerHTML = selectedName;
    const paragrapSubPageTittle = document.createElement('p');
    paragrapSubPageTittle.className = 'page-sub-tittle';
    paragrapSubPageTittle.innerHTML = 'Quantidade';
    const spanBadge = document.createElement('span');
    spanBadge.className = 'badge bg-success';
    spanBadge.innerHTML = '4';
    firstCol.append(h5TagPageTittle);
    paragrapSubPageTittle.append(spanBadge);
    firstCol.append(paragrapSubPageTittle);
//SECOND COL   
    const secondCol = document.createElement('div');
    secondCol.className = 'col';
    const ulCodeList = document.createElement('ul');
    ulCodeList.className = 'code-list';

    const liItemOne = document.createElement('li');
    liItemOne.innerHTML = 'Data: ';
    const liItemTwo = document.createElement('li');
    const selectForm = document.createElement('select');
    selectForm.className = 'custom-select mr-sm-2';
    selectForm.id = 'inlineFormCustomSelect';
    const defaultOption = document.createElement('option');
    defaultOption.innerHTML = 'Codigo...'
    defaultOption.setAttribute('selected','');
    const optionOne = document.createElement('option');
    optionOne.setAttribute('value','1');
    optionOne.innerHTML = 'codigo1'
    //check this new way of appending
    selectForm.append(defaultOption,optionOne);
    liItemTwo.append(selectForm);
    ulCodeList.append(liItemOne);
    ulCodeList.append(liItemTwo)
    secondCol.append(ulCodeList);
    rowDiv.append(firstCol);
    rowDiv.append(secondCol);
    pageHeaderDivContainer.append(rowDiv);
    relatorioFormPage.append(pageHeaderDivContainer);

 //END  of PageHeader Container    
 //PageBody Container 

    const pageBodyDivContainer = document.createElement('div');
    pageBodyDivContainer.className = 'container page-body-container';
    const bodyRowDiv = document.createElement('div');
    bodyRowDiv.className = 'row';
    pageBodyDivContainer.append(bodyRowDiv);

//FIRST body COL   
    const bodyFirstCol = document.createElement('div');
    bodyFirstCol.className = 'col';

    //first subTittle Container
    const fSubPanelTittleContainer = document.createElement('div');
    fSubPanelTittleContainer.className = 'subpanel-tittle-container';
    const fSubpanelImg =  document.createElement('img');
    fSubpanelImg.src = './imgs/icons/line-start.png';
    const fSubpanelSpan =  document.createElement('span');
    fSubpanelSpan.innerHTML = 'Pulsos Carotideos';
    fSubPanelTittleContainer.append(fSubpanelImg);
    fSubPanelTittleContainer.append(fSubpanelSpan);
    bodyFirstCol.append(fSubPanelTittleContainer);

//Pulsos Caroideos List
    const ulPulsosCarotideosList = document.createElement('ul');
    ulPulsosCarotideosList.className = 'pulsos-carotideos-list';
    // FIRST LI ITEM
    const pulsosLiItemDireito = document.createElement('li');
    pulsosLiItemDireito.innerHTML = 'Direito';
    const pulsosSelectForm = document.createElement('select');
    pulsosSelectForm.className = 'custom-select mr-sm-2';
    pulsosSelectForm.id = 'inlineFormCustomSelect';
    const pdefaultOption = document.createElement('option');
    pdefaultOption.setAttribute('selected','');
    pdefaultOption.innerHTML = 'Escolha...'
    const poptionOne = document.createElement('option');
    poptionOne.setAttribute('value','1');
    poptionOne.innerHTML = 'Parou de Funcionar'
    const poptionTwo = document.createElement('option');
    poptionTwo.setAttribute('value','2');
    poptionTwo.innerHTML = 'Pulso Fraco'
    const poptionThree = document.createElement('option');
    poptionThree.setAttribute('value','3');
    poptionThree.innerHTML = 'Nenhuma Falha';
    pulsosSelectForm.append(pdefaultOption);
    pulsosSelectForm.append(poptionOne);
    pulsosSelectForm.append(poptionTwo);
    pulsosSelectForm.append(poptionThree);
    pulsosLiItemDireito.append(pulsosSelectForm);
    ulPulsosCarotideosList.append(pulsosLiItemDireito);

    // SECOND LI ITEM
    const pulsosLiItemEsquerdo = document.createElement('li');
    pulsosLiItemEsquerdo.innerHTML = 'Esquerdo';
    const pulsosEsquerdoSelectForm = document.createElement('select');
    pulsosEsquerdoSelectForm.className = 'custom-select mr-sm-2';
    pulsosEsquerdoSelectForm.id = 'inlineFormCustomSelect';
    const pdefaultOptionEsqu = document.createElement('option');
    pdefaultOptionEsqu.setAttribute('selected','');
    pdefaultOptionEsqu.innerHTML = 'Escolha...'
    const esqueOptionOne = document.createElement('option');
    esqueOptionOne.setAttribute('value','1');
    esqueOptionOne.innerHTML = 'Parou de Funcionar'
    const esqueOptionTwo = document.createElement('option');
    esqueOptionTwo.setAttribute('value','2');
    esqueOptionTwo.innerHTML = 'Pulso Fraco'
    const esqueOptionThree = document.createElement('option');
    esqueOptionThree.setAttribute('value','3');
    esqueOptionThree.innerHTML = 'Nenhuma Falha';
    pulsosEsquerdoSelectForm.append(pdefaultOptionEsqu);
    pulsosEsquerdoSelectForm.append(esqueOptionOne);
    pulsosEsquerdoSelectForm.append(esqueOptionTwo);
    pulsosEsquerdoSelectForm.append(esqueOptionThree);
    pulsosLiItemEsquerdo.append(pulsosEsquerdoSelectForm);
    ulPulsosCarotideosList.append(pulsosLiItemEsquerdo);

    //second subTittle Container
    const sSubPanelTittleContainer = document.createElement('div');
    sSubPanelTittleContainer.className = 'subpanel-tittle-container';
    const sSubpanelImg =  document.createElement('img');
    sSubpanelImg.src = './imgs/icons/line-start.png';
    const sSubpanelSpan =  document.createElement('span');
    sSubpanelSpan.innerHTML = 'Pulsos Carotideos';
    sSubPanelTittleContainer.append(sSubpanelImg);
    sSubPanelTittleContainer.append(sSubpanelSpan);


//Pulsos Radiais List  
    const ulPulsosRadialList = document.createElement('ul');
    ulPulsosRadialList.className = 'pulsos-radiais-list';
    // FIRST LI ITEM
    const radialLiItemDireito = document.createElement('li');
    radialLiItemDireito.innerHTML = 'Radial Direito';
    const pulsosRadialSelectForm = document.createElement('select');
    pulsosRadialSelectForm.className = 'custom-select mr-sm-2';
    pulsosRadialSelectForm.id = 'inlineFormCustomSelect';
    const rdefaultOption = document.createElement('option');
    rdefaultOption.setAttribute('selected','');
    rdefaultOption.innerHTML = 'Escolha...'
    const rOptionOne = document.createElement('option');
    rOptionOne.setAttribute('value','1');
    rOptionOne.innerHTML = 'Parou de Funcionar'
    const rOptionTwo = document.createElement('option');
    rOptionTwo.setAttribute('value','2');
    rOptionTwo.innerHTML = 'Pulso Fraco'
    const rOptionThree = document.createElement('option');
    rOptionThree.setAttribute('value','3');
    rOptionThree.innerHTML = 'Nenhuma Falha';
    pulsosRadialSelectForm.append(rdefaultOption);
    pulsosRadialSelectForm.append(rOptionOne);
    pulsosRadialSelectForm.append(rOptionTwo);
    pulsosRadialSelectForm.append(rOptionThree);
    radialLiItemDireito.append(pulsosRadialSelectForm);
    ulPulsosRadialList.append(radialLiItemDireito);
    // SECOND LI ITEM
    const braquealLiItemDireito = document.createElement('li');
    braquealLiItemDireito.innerHTML = 'Braqueal Direito';
    const pulsoBraquealSelectForm = document.createElement('select');
    pulsoBraquealSelectForm.className = 'custom-select mr-sm-2';
    pulsoBraquealSelectForm.id = 'inlineFormCustomSelect';
    const bdefaultOption = document.createElement('option');
    bdefaultOption.setAttribute('selected','');
    bdefaultOption.innerHTML = 'Escolha...'
    const bOptionOne = document.createElement('option');
    bOptionOne.setAttribute('value','1');
    bOptionOne.innerHTML = 'Parou de Funcionar'
    const bOptionTwo = document.createElement('option');
    bOptionTwo.setAttribute('value','2');
    bOptionTwo.innerHTML = 'Pulso Fraco'
    const bOptionThree = document.createElement('option');
    bOptionThree.setAttribute('value','3');
    bOptionThree.innerHTML = 'Nenhuma Falha';
    pulsoBraquealSelectForm.append(bdefaultOption);
    pulsoBraquealSelectForm.append(bOptionOne);
    pulsoBraquealSelectForm.append(bOptionTwo);
    pulsoBraquealSelectForm.append(bOptionThree);
    braquealLiItemDireito.append(pulsoBraquealSelectForm);
    ulPulsosRadialList.append(braquealLiItemDireito);

    bodyFirstCol.append(fSubPanelTittleContainer);
    bodyFirstCol.append(ulPulsosCarotideosList);
    bodyFirstCol.append(sSubPanelTittleContainer);
    bodyFirstCol.append(ulPulsosRadialList);

    bodyRowDiv.append(bodyFirstCol);
    pageBodyDivContainer.append(bodyRowDiv);
    relatorioFormPage.append(pageBodyDivContainer);

//SECOND body COL

    const bodySecondCol = document.createElement('div');
    bodySecondCol.className = 'col';
    const ulGeneralList = document.createElement('ul');
    ulGeneralList.className = 'general-list';
    //Third subTittle Container
    const tSubPanelTittleContainer = document.createElement('div');
    tSubPanelTittleContainer.className = 'subpanel-tittle-container';
    const tSubpanelImg =  document.createElement('img');
    tSubpanelImg.src = './imgs/icons/line-start.png';
    const tSubpanelSpan =  document.createElement('span');
    tSubpanelSpan.innerHTML = 'Geral Settings';
    tSubPanelTittleContainer.append(tSubpanelImg);
    tSubPanelTittleContainer.append(tSubpanelSpan);
    ulGeneralList.append(tSubPanelTittleContainer);

    //GENERAL LIST ITEMS
    //First LI Item
    const liElementOne =  document.createElement('li');
    const spanElementOne =  document.createElement('span');
    spanElementOne.innerHTML = 'Incursões Respiratórias';
    liElementOne.append(spanElementOne);
    const incursõesRespSelectForm = document.createElement('select');
    incursõesRespSelectForm.className = 'custom-select mr-sm-2';
    incursõesRespSelectForm.id = 'inlineFormCustomSelect';
    const incursoesDefaultOption = document.createElement('option');
    incursoesDefaultOption.setAttribute('selected','');
    incursoesDefaultOption.innerHTML = 'Escolha...'
    const incOptionOne = document.createElement('option');
    incOptionOne.setAttribute('value','1');
    incOptionOne.innerHTML = 'Parou de Funcionar'
    const incOptionTwo = document.createElement('option');
    incOptionTwo.setAttribute('value','2');
    incOptionTwo.innerHTML = 'Nenhuma Falha'
    incursõesRespSelectForm.append(incursoesDefaultOption);
    incursõesRespSelectForm.append(incOptionOne);
    incursõesRespSelectForm.append(incOptionTwo);
    liElementOne.append(incursõesRespSelectForm);
    ulGeneralList.append(liElementOne);

    //Second LI Item
    const liElementTwo =  document.createElement('li');
    const spanElementTwo =  document.createElement('span');
    spanElementTwo.innerHTML = 'Eletrodos para Monitorização';
    liElementTwo.append(spanElementTwo);

    const eletrodosSelectForm = document.createElement('select');
    eletrodosSelectForm.className = 'custom-select mr-sm-2';
    eletrodosSelectForm.id = 'inlineFormCustomSelect';
    const eletroDefaultOption = document.createElement('option');
    eletroDefaultOption.setAttribute('selected','');
    eletroDefaultOption.innerHTML = 'Escolha...'
    const eletrodoOptionOne = document.createElement('option');
    eletrodoOptionOne.setAttribute('value','1');
    eletrodoOptionOne.innerHTML = 'Parou de Funcionar'
    const eletrodoOptionTwo = document.createElement('option');
    eletrodoOptionTwo.setAttribute('value','2');
    eletrodoOptionTwo.innerHTML = 'Faltam eletrodos'
    const eletrodoOptionThree = document.createElement('option');
    eletrodoOptionThree.setAttribute('value','3');
    eletrodoOptionThree.innerHTML = 'Nenhuma Falha';
    eletrodosSelectForm.append(eletroDefaultOption);
    eletrodosSelectForm.append(eletrodoOptionOne);
    eletrodosSelectForm.append(eletrodoOptionTwo);
    eletrodosSelectForm.append(eletrodoOptionThree);
    liElementTwo.append(eletrodosSelectForm);
    ulGeneralList.append(liElementTwo);
    

    //THIRD LI Item
    const liElementThre =  document.createElement('li');
    const spanElementThree =  document.createElement('span');
    spanElementThree.innerHTML = 'Bordas de Choque Elétrico';
    liElementThre.append(spanElementThree);
    const bordasChoqueSelectForm = document.createElement('select');
    bordasChoqueSelectForm.className = 'custom-select mr-sm-2';
    bordasChoqueSelectForm.id = 'inlineFormCustomSelect';
    const choqueDefaultOption = document.createElement('option');
    choqueDefaultOption.setAttribute('selected','');
    choqueDefaultOption.innerHTML = 'Escolha...'
    const choqueOptionOne = document.createElement('option');
    choqueOptionOne.setAttribute('value','1');
    choqueOptionOne.innerHTML = 'Parou de Funcionar'
    const choqueOptionTwo = document.createElement('option');
    choqueOptionTwo.setAttribute('value','2');
    choqueOptionTwo.innerHTML = 'Pulso Fraco'
    const choqueOptionThree = document.createElement('option');
    choqueOptionThree.setAttribute('value','3');
    choqueOptionThree.innerHTML = 'Nenhuma Falha';
    bordasChoqueSelectForm.append(choqueDefaultOption);
    bordasChoqueSelectForm.append(choqueOptionOne);
    bordasChoqueSelectForm.append(choqueOptionTwo);
    bordasChoqueSelectForm.append(choqueOptionThree);
    liElementThre.append(bordasChoqueSelectForm);
    ulGeneralList.append(liElementThre);


    //FORTH LI Item
    const liElementForth =  document.createElement('li');
    const spanElementForth =  document.createElement('span');
    spanElementForth.innerHTML = 'Ausculta Cardiaca';
    liElementForth.append(spanElementForth);

    const cardiacaSelectForm = document.createElement('select');
    cardiacaSelectForm.className = 'custom-select mr-sm-2';
    cardiacaSelectForm.id = 'inlineFormCustomSelect';
    const cardiacaDefaultOption = document.createElement('option');
    cardiacaDefaultOption.setAttribute('selected','');
    cardiacaDefaultOption.innerHTML = 'Escolha...'
    const cardiacaOptionOne = document.createElement('option');
    cardiacaOptionOne.setAttribute('value','1');
    cardiacaOptionOne.innerHTML = 'Parou de Funcionar'
    const cardiacaOptionTwo = document.createElement('option');
    cardiacaOptionTwo.setAttribute('value','2');
    cardiacaOptionTwo.innerHTML = 'Pulso Fraco'
    const cardiacaOptionThree = document.createElement('option');
    cardiacaOptionThree.setAttribute('value','3');
    cardiacaOptionThree.innerHTML = 'Nenhuma Falha';
    cardiacaSelectForm.append(cardiacaDefaultOption);
    cardiacaSelectForm.append(cardiacaOptionOne);
    cardiacaSelectForm.append(cardiacaOptionTwo);
    cardiacaSelectForm.append(cardiacaOptionThree);
    liElementForth.append(cardiacaSelectForm);
    ulGeneralList.append(liElementForth);


    //Fifth LI Item
    const liElementFifth =  document.createElement('li');
    const spanElementFifth =  document.createElement('span');
    spanElementFifth.innerHTML = 'Ausculta Pulmonar';
    liElementFifth.append(spanElementFifth);
    const pulmonarSelectForm = document.createElement('select');
    pulmonarSelectForm.className = 'custom-select mr-sm-2';
    pulmonarSelectForm.id = 'inlineFormCustomSelect';
    const pulmonarDefaultOption = document.createElement('option');
    pulmonarDefaultOption.setAttribute('selected','');
    pulmonarDefaultOption.innerHTML = 'Escolha...'
    const pulmonarOptionOne = document.createElement('option');
    pulmonarOptionOne.setAttribute('value','1');
    pulmonarOptionOne.innerHTML = 'Parou de Funcionar'
    const pulmonarOptionTwo = document.createElement('option');
    pulmonarOptionTwo.setAttribute('value','2');
    pulmonarOptionTwo.innerHTML = 'Pulso Fraco'
    const pulmonarOptionThree = document.createElement('option');
    pulmonarOptionThree.setAttribute('value','3');
    pulmonarOptionThree.innerHTML = 'Nenhuma Falha';
    pulmonarSelectForm.append(pulmonarDefaultOption);
    pulmonarSelectForm.append(pulmonarOptionOne);
    pulmonarSelectForm.append(pulmonarOptionTwo);
    pulmonarSelectForm.append(pulmonarOptionThree);
    liElementFifth.append(pulmonarSelectForm);
    ulGeneralList.append(liElementFifth);

    bodySecondCol.append(ulGeneralList);
    bodyRowDiv.append(bodySecondCol);
   
    //BUTTONS GERAR RELATORIO CONTAINER
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'gerar-relatorio-button-container';
    const btnVoltar = document.createElement('button');
    btnVoltar.type = 'button';
    btnVoltar.className = 'btn btn-outline-secondary';
    btnVoltar.id = 'btn-voltar'
    btnVoltar.innerHTML = 'Voltar';
    const btnGerarRelatorio = document.createElement('button');
    btnGerarRelatorio.type = 'button';
    btnGerarRelatorio.className = 'btn btn-outline-secondary';
    btnGerarRelatorio.id = 'btn-gerar-relatorio';
    btnGerarRelatorio.innerHTML = 'Gerar Relatorio';
    buttonsContainer.append(btnVoltar);
    buttonsContainer.append(btnGerarRelatorio);
    bodyRowDiv.append(buttonsContainer);
    
    pageBodyDivContainer.append(bodyRowDiv);
    ;
}


