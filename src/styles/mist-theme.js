import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-styles/paper-styles.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<style is="custom-style">
    html {
        --app-background-color: #f2f2f2;
        --app-primary-color: #444444;
        
        --app-background-secondary-color: #ffffff;
        --app-secondary-color: #757575;
        
        --app-background-highlight-color: #444444;
        --app-highlight-color: var(--white-opaque-87);

        --app-section-primary-color: var(--app-primary-color);
        --app-section-secondary-color: var(--app-primary-color);

        --app-accent-color: #0099cc;
        --form-h1-weight: 200;

        --black-color: #000;
        --black-opaque-87: rgba(0,0,0,0.87);
        --black-opaque-54: rgba(0,0,0,0.54);

        --white-color: #fff;
        --white-opaque-95: rgba(255, 255, 255, 0.95);
        --white-opaque-87: rgba(255, 255, 255, 0.87);

        --link-color: #2196F3;

        --tab-color: #444444;
        --tab-ontainer-width: 69%;

        --logo-height: 53px;
        --logo-width: 119px;
        --logo-image: url('/landing/images/logo.svg');
        --vertical-logo: url('/landing/images/logo-vertical.svg');
        --form-box-shadow: rgba(0, 0, 0, 0.157) 0px 2px 5px 0px, rgba(0, 0, 0, 0.118) 0px 2px 10px 0px;
        --form-background: #f7f7f7;
        --form-output-color: #444;

        --landing-pages-min-height: 80vh;
        
        --app-header-box-shadow: rgba(0, 0, 0, 0.156863) 0px 2px 5px 0px, rgba(0, 0, 0, 0.117647) 0px 2px 10px 0px;
        --paper-button-ink-color: var(--app-accent-color);
        --paper-icon-button-ink-color: var(--app-accent-color);
        --paper-spinner-color: var(--app-accent-color);
        --paper-input-container-focus-color: var(--app-accent-color);
        --paper-input-container-underline: {
            border-color: var(--app-accent-color);
        };
    };
    --app-header-shadow: {
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
        height: 10px;
        bottom: -10px;
    };
</style>`;

document.head.appendChild($_documentContainer.content);
