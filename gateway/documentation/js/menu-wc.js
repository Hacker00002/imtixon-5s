'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gateway documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookClientModule.html" data-type="entity-link" >BookClientModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookClientModule-e060cc54c237000388822494347f620f33917a861663180e05d60b5ca28d37755a5dc38e040e647b59131f5dddf38c0c692185e8e1dbba2a5699b5ca9f7755f8"' : 'data-bs-target="#xs-injectables-links-module-BookClientModule-e060cc54c237000388822494347f620f33917a861663180e05d60b5ca28d37755a5dc38e040e647b59131f5dddf38c0c692185e8e1dbba2a5699b5ca9f7755f8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookClientModule-e060cc54c237000388822494347f620f33917a861663180e05d60b5ca28d37755a5dc38e040e647b59131f5dddf38c0c692185e8e1dbba2a5699b5ca9f7755f8"' :
                                        'id="xs-injectables-links-module-BookClientModule-e060cc54c237000388822494347f620f33917a861663180e05d60b5ca28d37755a5dc38e040e647b59131f5dddf38c0c692185e8e1dbba2a5699b5ca9f7755f8"' }>
                                        <li class="link">
                                            <a href="injectables/BookClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' : 'data-bs-target="#xs-controllers-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' :
                                            'id="xs-controllers-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' : 'data-bs-target="#xs-injectables-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' :
                                        'id="xs-injectables-links-module-BookModule-e2872ea9426ac0ad75dfff56184aa9b52547294303267f99445eda02bc1c1d3a75578fa71b792ec3faee1d3851803232ac0e164532ae77f815ebdc647d3f8405"' }>
                                        <li class="link">
                                            <a href="injectables/BookClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/BookController.html" data-type="entity-link" >BookController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BookClientService.html" data-type="entity-link" >BookClientService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfigOptions.html" data-type="entity-link" >AppConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookConfigOptions.html" data-type="entity-link" >BookConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookRetrieveAllRequest.html" data-type="entity-link" >BookRetrieveAllRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookRetrieveAllResponse.html" data-type="entity-link" >BookRetrieveAllResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateBookRequest.html" data-type="entity-link" >CreateBookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateBookInterface.html" data-type="entity-link" >UpdateBookInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});