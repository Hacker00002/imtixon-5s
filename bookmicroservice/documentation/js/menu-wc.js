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
                    <a href="index.html" data-type="index-link">bookmicroservice documentation</a>
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
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' : 'data-bs-target="#xs-controllers-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' :
                                            'id="xs-controllers-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' : 'data-bs-target="#xs-injectables-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' :
                                        'id="xs-injectables-links-module-BookModule-5e0e82d1a1238dcac97c0707ee8aa95419c01536b4dcbd0275817c982d7195b5621d5a6c7b3fbd8beee51547f3db4bdee334e42599138c10efe60d40b686b66f"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LocalizationModule.html" data-type="entity-link" >LocalizationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LocalizationModule-b337096c39487be18f2c60a4fef9703a0e6e2ec10b868671323de4c615f7f381d0982451db9c4a3fadbcddcac5dbebbd4b1f22b93975734bd4b50a84e816914a"' : 'data-bs-target="#xs-injectables-links-module-LocalizationModule-b337096c39487be18f2c60a4fef9703a0e6e2ec10b868671323de4c615f7f381d0982451db9c4a3fadbcddcac5dbebbd4b1f22b93975734bd4b50a84e816914a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LocalizationModule-b337096c39487be18f2c60a4fef9703a0e6e2ec10b868671323de4c615f7f381d0982451db9c4a3fadbcddcac5dbebbd4b1f22b93975734bd4b50a84e816914a"' :
                                        'id="xs-injectables-links-module-LocalizationModule-b337096c39487be18f2c60a4fef9703a0e6e2ec10b868671323de4c615f7f381d0982451db9c4a3fadbcddcac5dbebbd4b1f22b93975734bd4b50a84e816914a"' }>
                                        <li class="link">
                                            <a href="injectables/LocalizationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalizationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-d316b243500eaf5c7018eacb3efe453317d57dbd37d17a875049d29e3dd36f9a993f37879ab31492e0be87e63cf1207613def0bf4a847eb67ffb16e01328cd05"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-d316b243500eaf5c7018eacb3efe453317d57dbd37d17a875049d29e3dd36f9a993f37879ab31492e0be87e63cf1207613def0bf4a847eb67ffb16e01328cd05"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-d316b243500eaf5c7018eacb3efe453317d57dbd37d17a875049d29e3dd36f9a993f37879ab31492e0be87e63cf1207613def0bf4a847eb67ffb16e01328cd05"' :
                                        'id="xs-injectables-links-module-PrismaModule-d316b243500eaf5c7018eacb3efe453317d57dbd37d17a875049d29e3dd36f9a993f37879ab31492e0be87e63cf1207613def0bf4a847eb67ffb16e01328cd05"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BookRetrieveAllDto.html" data-type="entity-link" >BookRetrieveAllDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
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
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalizationService.html" data-type="entity-link" >LocalizationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
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
                                <a href="interfaces/BookRetrieveAllRequest.html" data-type="entity-link" >BookRetrieveAllRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateBookRequestInterface.html" data-type="entity-link" >CreateBookRequestInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatabaseConfigOptions.html" data-type="entity-link" >DatabaseConfigOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalizationServiceOptions.html" data-type="entity-link" >LocalizationServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetrieveTranslateRequest.html" data-type="entity-link" >RetrieveTranslateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RetrieveTranslateResponse.html" data-type="entity-link" >RetrieveTranslateResponse</a>
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