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
                    <a href="index.html" data-type="index-link">localization documentation</a>
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
                                <a href="modules/LanguageModule.html" data-type="entity-link" >LanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' : 'data-bs-target="#xs-controllers-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' :
                                            'id="xs-controllers-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' }>
                                            <li class="link">
                                                <a href="controllers/LanguageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' : 'data-bs-target="#xs-injectables-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' :
                                        'id="xs-injectables-links-module-LanguageModule-9cf096066d1b1ee05d0c3edd78e920d95032c062624caf190bf7e0c925c63337b501b748dc474641b55df610ceb79c959085f1da2ac6964393124075a38b98a4"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-c878b21844c3604b7705b5370d05f25b10760ee7ea43d53c1552843140652722c04bdbada8c3ab2a1c9c2154b5d0f7e5cc3781c6d5976d4e0bd029526e7ae099"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-c878b21844c3604b7705b5370d05f25b10760ee7ea43d53c1552843140652722c04bdbada8c3ab2a1c9c2154b5d0f7e5cc3781c6d5976d4e0bd029526e7ae099"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-c878b21844c3604b7705b5370d05f25b10760ee7ea43d53c1552843140652722c04bdbada8c3ab2a1c9c2154b5d0f7e5cc3781c6d5976d4e0bd029526e7ae099"' :
                                        'id="xs-injectables-links-module-PrismaModule-c878b21844c3604b7705b5370d05f25b10760ee7ea43d53c1552843140652722c04bdbada8c3ab2a1c9c2154b5d0f7e5cc3781c6d5976d4e0bd029526e7ae099"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslateModule.html" data-type="entity-link" >TranslateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' : 'data-bs-target="#xs-controllers-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' :
                                            'id="xs-controllers-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' }>
                                            <li class="link">
                                                <a href="controllers/TranslateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' : 'data-bs-target="#xs-injectables-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' :
                                        'id="xs-injectables-links-module-TranslateModule-7bf60e7506187070061b770bf3a6523aa349d7e367de8a76bc9ddd2103fa69ccf488369575d6f391b5a6114785a303017add032e1bf7a92e6d43f972a76856a7"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TranslateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateService</a>
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
                                    <a href="controllers/LanguageController.html" data-type="entity-link" >LanguageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TranslateController.html" data-type="entity-link" >TranslateController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateLanguageDto.html" data-type="entity-link" >CreateLanguageDto</a>
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
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslateService.html" data-type="entity-link" >TranslateService</a>
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
                                <a href="interfaces/CreateLanguageRequestInterface.html" data-type="entity-link" >CreateLanguageRequestInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateTranslateRequestInterface.html" data-type="entity-link" >CreateTranslateRequestInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseConfigOptions.html" data-type="entity-link" >DatabaseConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetrieveTranslateRequestInterface.html" data-type="entity-link" >RetrieveTranslateRequestInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetrieveTranslateResponseInterface.html" data-type="entity-link" >RetrieveTranslateResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateTranslateRequestInterface.html" data-type="entity-link" >UpdateTranslateRequestInterface</a>
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