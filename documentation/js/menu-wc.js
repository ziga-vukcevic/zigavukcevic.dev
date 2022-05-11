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
                    <a href="index.html" data-type="index-link">zigavukcevic.dev documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' : 'data-target="#xs-components-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' :
                                            'id="xs-components-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HighlightSkillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightSkillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoadmapItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoadmapItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoadmapItemListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoadmapItemListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' : 'data-target="#xs-injectables-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' :
                                        'id="xs-injectables-links-module-AppModule-083bab4c5765817a4ec18086ca71df8c928c0158376e79e4d9557437ce609d3549276f9a0600b389ee929c51ef549ec4df4005dc7b0b78719d872f0421a7319f"' }>
                                        <li class="link">
                                            <a href="injectables/RoadmapService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoadmapService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IsUnitTestDescriptionVisibleInterface.html" data-type="entity-link" >IsUnitTestDescriptionVisibleInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoadmapItemInterface.html" data-type="entity-link" >RoadmapItemInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});