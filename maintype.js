// GLOBAL SELECTORS 
var menuNavBarLinks = document.querySelectorAll('.menu-links li');
var mainBoardPanel = document.querySelector('.main-board-panel');
var pages = mainBoardPanel.querySelectorAll('.pages');
var simulatorsPageContainer = document.querySelector('.simulators-page .container');
var Simulator = /** @class */ (function () {
    function Simulator() {
    }
    return Simulator;
}());
//Creating an array of object
var simulatorsV = [];
//EVENT LISTENERS
menuNavBarLinks.forEach(function (element) {
    element.addEventListener('click', callPages);
});
//FUNCTIONS
function callPages(event) {
    var menuLinkIDs = event.target.id;
    for (var index = 0; index < pages.length; index++) {
        var element = pages[index];
        var pageID = element.id;
        if (menuLinkIDs == pageID) {
            switch (menuLinkIDs) {
                //Relatorio Page
                case 'relatorio-form':
                    var pageHeaderContainer = element.querySelector('.page-header-container');
                    var pageBodyContainer = element.querySelector('.page-body-container');
                    element.setAttribute('style', 'display:block');
                    if (pageHeaderContainer && pageBodyContainer) {
                        pageHeaderContainer.remove();
                        pageBodyContainer.remove();
                        relatorioFormCreation();
                    }
                    else {
                        relatorioFormCreation();
                    }
                    break;
                //simuladores Page
                case 'simuladores':
                    element.setAttribute('style', 'display:block');
                    var headerContainer = element.querySelector('.simulators-page .page-header-container');
                    var bodyContainer = element.querySelector('.simulators-page .page-body-container');
                    if (headerContainer && bodyContainer) {
                        headerContainer.remove();
                        bodyContainer.remove();
                        simulatorsPageContainer.setAttribute('style', 'display:block');
                    }
                    else {
                        simulatorsPageContainer.setAttribute('style', 'display:block');
                    }
                    var allBtnsEnviarRelatorio = document.querySelectorAll('.simulators-page .button-container .btn-enviar-relatorio');
                    allBtnsEnviarRelatorio.forEach(function (element) {
                        element.addEventListener('click', sendRelatorio);
                    });
                    break;
                // Relatorios Page
                case 'relatorios':
                    element.setAttribute('style', 'display:block');
                    break;
            }
        }
        else {
            element.setAttribute('style', 'display:none');
        }
    }
}
//This function is being called from callPages
function sendRelatorio(event) {
    //Creating an instance of Class
    var model = new Simulator();
    var btnClicked = event.target;
    var simulatorName = btnClicked.id;
    //let simulatorsPageContainer = document.querySelector('.simulators-page .container') as HTMLDivElement;
    simulatorsPageContainer.setAttribute('style', 'display:none');
    relatorioFormCreation(simulatorName, model);
}
function relatorioFormCreation(selectedName, simulator) {
    //Creating an instance of Class
    //let model = new Simulator();
    var relatorioFormPage = document.querySelector('.main-board-panel .simulators-page');
    mainBoardPanel.append(relatorioFormPage);
    //PageHeader Container       
    var pageHeaderDivContainer = document.createElement('div');
    pageHeaderDivContainer.className = 'container page-header-container';
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    //FIRST COL   
    var firstCol = document.createElement('div');
    firstCol.className = 'col';
    var h5TagPageTittle = document.createElement('h5');
    h5TagPageTittle.className = 'page-tittle';
    h5TagPageTittle.innerHTML = selectedName;
    var paragrapSubPageTittle = document.createElement('p');
    paragrapSubPageTittle.className = 'page-sub-tittle';
    paragrapSubPageTittle.innerHTML = 'Quantidade';
    var spanBadge = document.createElement('span');
    spanBadge.className = 'badge bg-success';
    spanBadge.innerHTML = '4';
    firstCol.append(h5TagPageTittle);
    paragrapSubPageTittle.append(spanBadge);
    firstCol.append(paragrapSubPageTittle);
    //SECOND COL   
    var secondCol = document.createElement('div');
    secondCol.className = 'col';
    var ulCodeList = document.createElement('ul');
    ulCodeList.className = 'code-list';
    var liItemOne = document.createElement('li');
    liItemOne.innerHTML = 'Data: ';
    var liItemTwo = document.createElement('li');
    var selectForm = document.createElement('select');
    selectForm.className = 'custom-select mr-sm-2';
    selectForm.id = 'inlineFormCustomSelect';
    var defaultOption = document.createElement('option');
    defaultOption.innerHTML = 'Codigo...';
    defaultOption.setAttribute('selected', '');
    var optionOne = document.createElement('option');
    optionOne.setAttribute('value', '1');
    optionOne.innerHTML = 'codigo1';
    //check this new way of appending
    selectForm.append(defaultOption, optionOne);
    liItemTwo.append(selectForm);
    ulCodeList.append(liItemOne);
    ulCodeList.append(liItemTwo);
    secondCol.append(ulCodeList);
    rowDiv.append(firstCol);
    rowDiv.append(secondCol);
    pageHeaderDivContainer.append(rowDiv);
    relatorioFormPage.append(pageHeaderDivContainer);
    //END  of PageHeader Container    
    //PageBody Container 
    var pageBodyDivContainer = document.createElement('div');
    pageBodyDivContainer.className = 'container page-body-container';
    var bodyRowDiv = document.createElement('div');
    bodyRowDiv.className = 'row';
    pageBodyDivContainer.append(bodyRowDiv);
    //FIRST body COL   
    var bodyFirstCol = document.createElement('div');
    bodyFirstCol.className = 'col';
    //first subTittle Container
    var fSubPanelTittleContainer = document.createElement('div');
    fSubPanelTittleContainer.className = 'subpanel-tittle-container';
    var fSubpanelImg = document.createElement('img');
    fSubpanelImg.src = './imgs/icons/line-start.png';
    var fSubpanelSpan = document.createElement('span');
    fSubpanelSpan.innerHTML = 'Pulsos Carotideos';
    fSubPanelTittleContainer.append(fSubpanelImg);
    fSubPanelTittleContainer.append(fSubpanelSpan);
    bodyFirstCol.append(fSubPanelTittleContainer);
    //Pulsos Caroideos List
    var ulPulsosCarotideosList = document.createElement('ul');
    ulPulsosCarotideosList.className = 'pulsos-carotideos-list';
    // FIRST LI ITEM
    var pulsosLiItemDireito = document.createElement('li');
    pulsosLiItemDireito.innerHTML = 'Direito';
    var pulsosSelectForm = document.createElement('select');
    pulsosSelectForm.className = 'custom-select mr-sm-2';
    pulsosSelectForm.id = 'inlineFormCustomSelect';
    var pdefaultOption = document.createElement('option');
    pdefaultOption.setAttribute('selected', '');
    pdefaultOption.innerHTML = 'Escolha...';
    var poptionOne = document.createElement('option');
    poptionOne.setAttribute('value', '1');
    poptionOne.innerHTML = 'Parou de Funcionar';
    var poptionTwo = document.createElement('option');
    poptionTwo.setAttribute('value', '2');
    poptionTwo.innerHTML = 'Pulso Fraco';
    var poptionThree = document.createElement('option');
    poptionThree.setAttribute('value', '3');
    poptionThree.innerHTML = 'Nenhuma Falha';
    pulsosSelectForm.append(pdefaultOption);
    pulsosSelectForm.append(poptionOne);
    pulsosSelectForm.append(poptionTwo);
    pulsosSelectForm.append(poptionThree);
    pulsosLiItemDireito.append(pulsosSelectForm);
    ulPulsosCarotideosList.append(pulsosLiItemDireito);
    // SECOND LI ITEM
    var pulsosLiItemEsquerdo = document.createElement('li');
    pulsosLiItemEsquerdo.innerHTML = 'Esquerdo';
    var pulsosEsquerdoSelectForm = document.createElement('select');
    pulsosEsquerdoSelectForm.className = 'custom-select mr-sm-2';
    pulsosEsquerdoSelectForm.id = 'inlineFormCustomSelect';
    var pdefaultOptionEsqu = document.createElement('option');
    pdefaultOptionEsqu.setAttribute('selected', '');
    pdefaultOptionEsqu.innerHTML = 'Escolha...';
    var esqueOptionOne = document.createElement('option');
    esqueOptionOne.setAttribute('value', '1');
    esqueOptionOne.innerHTML = 'Parou de Funcionar';
    var esqueOptionTwo = document.createElement('option');
    esqueOptionTwo.setAttribute('value', '2');
    esqueOptionTwo.innerHTML = 'Pulso Fraco';
    var esqueOptionThree = document.createElement('option');
    esqueOptionThree.setAttribute('value', '3');
    esqueOptionThree.innerHTML = 'Nenhuma Falha';
    pulsosEsquerdoSelectForm.append(pdefaultOptionEsqu);
    pulsosEsquerdoSelectForm.append(esqueOptionOne);
    pulsosEsquerdoSelectForm.append(esqueOptionTwo);
    pulsosEsquerdoSelectForm.append(esqueOptionThree);
    pulsosLiItemEsquerdo.append(pulsosEsquerdoSelectForm);
    ulPulsosCarotideosList.append(pulsosLiItemEsquerdo);
    //second subTittle Container
    var sSubPanelTittleContainer = document.createElement('div');
    sSubPanelTittleContainer.className = 'subpanel-tittle-container';
    var sSubpanelImg = document.createElement('img');
    sSubpanelImg.src = './imgs/icons/line-start.png';
    var sSubpanelSpan = document.createElement('span');
    sSubpanelSpan.innerHTML = 'Pulsos Carotideos';
    sSubPanelTittleContainer.append(sSubpanelImg);
    sSubPanelTittleContainer.append(sSubpanelSpan);
    //Pulsos Radiais List  
    var ulPulsosRadialList = document.createElement('ul');
    ulPulsosRadialList.className = 'pulsos-radiais-list';
    // FIRST LI ITEM
    var radialLiItemDireito = document.createElement('li');
    radialLiItemDireito.innerHTML = 'Radial Direito';
    var pulsosRadialSelectForm = document.createElement('select');
    pulsosRadialSelectForm.className = 'custom-select mr-sm-2';
    pulsosRadialSelectForm.id = 'inlineFormCustomSelect';
    var rdefaultOption = document.createElement('option');
    rdefaultOption.setAttribute('selected', '');
    rdefaultOption.innerHTML = 'Escolha...';
    var rOptionOne = document.createElement('option');
    rOptionOne.setAttribute('value', '1');
    rOptionOne.innerHTML = 'Parou de Funcionar';
    var rOptionTwo = document.createElement('option');
    rOptionTwo.setAttribute('value', '2');
    rOptionTwo.innerHTML = 'Pulso Fraco';
    var rOptionThree = document.createElement('option');
    rOptionThree.setAttribute('value', '3');
    rOptionThree.innerHTML = 'Nenhuma Falha';
    pulsosRadialSelectForm.append(rdefaultOption);
    pulsosRadialSelectForm.append(rOptionOne);
    pulsosRadialSelectForm.append(rOptionTwo);
    pulsosRadialSelectForm.append(rOptionThree);
    radialLiItemDireito.append(pulsosRadialSelectForm);
    ulPulsosRadialList.append(radialLiItemDireito);
    // SECOND LI ITEM
    var braquealLiItemDireito = document.createElement('li');
    braquealLiItemDireito.innerHTML = 'Braqueal Direito';
    var pulsoBraquealSelectForm = document.createElement('select');
    pulsoBraquealSelectForm.className = 'custom-select mr-sm-2';
    pulsoBraquealSelectForm.id = 'inlineFormCustomSelect';
    var bdefaultOption = document.createElement('option');
    bdefaultOption.setAttribute('selected', '');
    bdefaultOption.innerHTML = 'Escolha...';
    var bOptionOne = document.createElement('option');
    bOptionOne.setAttribute('value', '1');
    bOptionOne.innerHTML = 'Parou de Funcionar';
    var bOptionTwo = document.createElement('option');
    bOptionTwo.setAttribute('value', '2');
    bOptionTwo.innerHTML = 'Pulso Fraco';
    var bOptionThree = document.createElement('option');
    bOptionThree.setAttribute('value', '3');
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
    var bodySecondCol = document.createElement('div');
    bodySecondCol.className = 'col';
    var ulGeneralList = document.createElement('ul');
    ulGeneralList.className = 'general-list';
    //Third subTittle Container
    var tSubPanelTittleContainer = document.createElement('div');
    tSubPanelTittleContainer.className = 'subpanel-tittle-container';
    var tSubpanelImg = document.createElement('img');
    tSubpanelImg.src = './imgs/icons/line-start.png';
    var tSubpanelSpan = document.createElement('span');
    tSubpanelSpan.innerHTML = 'Geral Settings';
    tSubPanelTittleContainer.append(tSubpanelImg);
    tSubPanelTittleContainer.append(tSubpanelSpan);
    ulGeneralList.append(tSubPanelTittleContainer);
    //GENERAL LIST ITEMS
    //First LI Item
    var liElementOne = document.createElement('li');
    var spanElementOne = document.createElement('span');
    spanElementOne.innerHTML = 'Incursões Respiratórias';
    liElementOne.append(spanElementOne);
    var incursõesRespSelectForm = document.createElement('select');
    incursõesRespSelectForm.className = 'custom-select mr-sm-2';
    incursõesRespSelectForm.id = 'inlineFormCustomSelect';
    var incursoesDefaultOption = document.createElement('option');
    incursoesDefaultOption.setAttribute('selected', '');
    incursoesDefaultOption.innerHTML = 'Escolha...';
    var incOptionOne = document.createElement('option');
    incOptionOne.setAttribute('value', '1');
    incOptionOne.innerHTML = 'Parou de Funcionar';
    var incOptionTwo = document.createElement('option');
    incOptionTwo.setAttribute('value', '2');
    incOptionTwo.innerHTML = 'Nenhuma Falha';
    incursõesRespSelectForm.append(incursoesDefaultOption);
    incursõesRespSelectForm.append(incOptionOne);
    incursõesRespSelectForm.append(incOptionTwo);
    liElementOne.append(incursõesRespSelectForm);
    ulGeneralList.append(liElementOne);
    //Second LI Item
    var liElementTwo = document.createElement('li');
    var spanElementTwo = document.createElement('span');
    spanElementTwo.innerHTML = 'Eletrodos para Monitorização';
    liElementTwo.append(spanElementTwo);
    var eletrodosSelectForm = document.createElement('select');
    eletrodosSelectForm.className = 'custom-select mr-sm-2';
    eletrodosSelectForm.id = 'inlineFormCustomSelect';
    var eletroDefaultOption = document.createElement('option');
    eletroDefaultOption.setAttribute('selected', '');
    eletroDefaultOption.innerHTML = 'Escolha...';
    var eletrodoOptionOne = document.createElement('option');
    eletrodoOptionOne.setAttribute('value', '1');
    eletrodoOptionOne.innerHTML = 'Parou de Funcionar';
    var eletrodoOptionTwo = document.createElement('option');
    eletrodoOptionTwo.setAttribute('value', '2');
    eletrodoOptionTwo.innerHTML = 'Faltam eletrodos';
    var eletrodoOptionThree = document.createElement('option');
    eletrodoOptionThree.setAttribute('value', '3');
    eletrodoOptionThree.innerHTML = 'Nenhuma Falha';
    eletrodosSelectForm.append(eletroDefaultOption);
    eletrodosSelectForm.append(eletrodoOptionOne);
    eletrodosSelectForm.append(eletrodoOptionTwo);
    eletrodosSelectForm.append(eletrodoOptionThree);
    liElementTwo.append(eletrodosSelectForm);
    ulGeneralList.append(liElementTwo);
    //THIRD LI Item
    var liElementThre = document.createElement('li');
    var spanElementThree = document.createElement('span');
    spanElementThree.innerHTML = 'Bordas de Choque Elétrico';
    liElementThre.append(spanElementThree);
    var bordasChoqueSelectForm = document.createElement('select');
    bordasChoqueSelectForm.className = 'custom-select mr-sm-2';
    bordasChoqueSelectForm.id = 'inlineFormCustomSelect';
    var choqueDefaultOption = document.createElement('option');
    choqueDefaultOption.setAttribute('selected', '');
    choqueDefaultOption.innerHTML = 'Escolha...';
    var choqueOptionOne = document.createElement('option');
    choqueOptionOne.setAttribute('value', '1');
    choqueOptionOne.innerHTML = 'Parou de Funcionar';
    var choqueOptionTwo = document.createElement('option');
    choqueOptionTwo.setAttribute('value', '2');
    choqueOptionTwo.innerHTML = 'Pulso Fraco';
    var choqueOptionThree = document.createElement('option');
    choqueOptionThree.setAttribute('value', '3');
    choqueOptionThree.innerHTML = 'Nenhuma Falha';
    bordasChoqueSelectForm.append(choqueDefaultOption);
    bordasChoqueSelectForm.append(choqueOptionOne);
    bordasChoqueSelectForm.append(choqueOptionTwo);
    bordasChoqueSelectForm.append(choqueOptionThree);
    liElementThre.append(bordasChoqueSelectForm);
    ulGeneralList.append(liElementThre);
    //FORTH LI Item
    var liElementForth = document.createElement('li');
    var spanElementForth = document.createElement('span');
    spanElementForth.innerHTML = 'Ausculta Cardiaca';
    liElementForth.append(spanElementForth);
    var cardiacaSelectForm = document.createElement('select');
    cardiacaSelectForm.className = 'custom-select mr-sm-2';
    cardiacaSelectForm.id = 'inlineFormCustomSelect';
    var cardiacaDefaultOption = document.createElement('option');
    cardiacaDefaultOption.setAttribute('selected', '');
    cardiacaDefaultOption.innerHTML = 'Escolha...';
    var cardiacaOptionOne = document.createElement('option');
    cardiacaOptionOne.setAttribute('value', '1');
    cardiacaOptionOne.innerHTML = 'Parou de Funcionar';
    var cardiacaOptionTwo = document.createElement('option');
    cardiacaOptionTwo.setAttribute('value', '2');
    cardiacaOptionTwo.innerHTML = 'Pulso Fraco';
    var cardiacaOptionThree = document.createElement('option');
    cardiacaOptionThree.setAttribute('value', '3');
    cardiacaOptionThree.innerHTML = 'Nenhuma Falha';
    cardiacaSelectForm.append(cardiacaDefaultOption);
    cardiacaSelectForm.append(cardiacaOptionOne);
    cardiacaSelectForm.append(cardiacaOptionTwo);
    cardiacaSelectForm.append(cardiacaOptionThree);
    liElementForth.append(cardiacaSelectForm);
    ulGeneralList.append(liElementForth);
    //Fifth LI Item
    var liElementFifth = document.createElement('li');
    var spanElementFifth = document.createElement('span');
    spanElementFifth.innerHTML = 'Ausculta Pulmonar';
    liElementFifth.append(spanElementFifth);
    var pulmonarSelectForm = document.createElement('select');
    pulmonarSelectForm.className = 'custom-select mr-sm-2';
    pulmonarSelectForm.id = 'inlineFormCustomSelect';
    var pulmonarDefaultOption = document.createElement('option');
    pulmonarDefaultOption.setAttribute('selected', '');
    pulmonarDefaultOption.innerHTML = 'Escolha...';
    var pulmonarOptionOne = document.createElement('option');
    pulmonarOptionOne.setAttribute('value', '1');
    pulmonarOptionOne.innerHTML = 'Parou de Funcionar';
    var pulmonarOptionTwo = document.createElement('option');
    pulmonarOptionTwo.setAttribute('value', '2');
    pulmonarOptionTwo.innerHTML = 'Pulso Fraco';
    var pulmonarOptionThree = document.createElement('option');
    pulmonarOptionThree.setAttribute('value', '3');
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
    var buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'gerar-relatorio-button-container';
    var btnVoltar = document.createElement('button');
    btnVoltar.type = 'button';
    btnVoltar.className = 'btn btn-outline-secondary';
    btnVoltar.id = 'btn-voltar';
    btnVoltar.innerHTML = 'Voltar';
    var btnGerarRelatorio = document.createElement('button');
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
