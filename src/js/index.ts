interface SilcAccordionSettings {
    openMultiple: boolean;
    openFirst: boolean;
    tabs: boolean;
}

export class SilcAccordion {

    protected element: HTMLElement;
    protected settings: SilcAccordionSettings;
    protected labels: NodeList;
    protected nav: Element;

    /**
     * Constructor
     * @param {HTMLElement} element
     */
    public constructor(element: HTMLElement) {

        // Set class properties
        this.element = element;
        this.labels = this.element.querySelectorAll('.silc-accordion__label');
        this.nav = this.element.querySelector('.silc-accordion__nav-items');
        this.settings = this.applySettings();

        // Label event listener
        if (this.labels.length) {
            this.labelEventListener();
        }

        // Nav event listener
        if (this.settings.tabs && this.nav !== undefined) {
            this.navEventListener();
            this.nav.querySelector('.silc-accordion__nav-link').classList.add('silc-accordion__nav-link--active');
            this.element.querySelector('.silc-accordion__content').classList.add('silc-accordion__content--visible-persist');
        }

        // Open first element
        if (this.settings.openFirst) {
            this.element.querySelector('.silc-accordion__content').classList.add('silc-accordion__content--visible');
        }
    }

    /**
     * Apply accordion settings
     */
    protected applySettings(): SilcAccordionSettings {

        // Defaults
        let settings = <SilcAccordionSettings>{
            tabs: false,
            openMultiple: false,
            openFirst: false
        };

        if (this.element.classList.contains('silc-accordion--become-tabs') ||
            this.element.classList.contains('silc-accordion--tabs')) {
            settings.tabs = true;
        }

        if (this.element.dataset.silcAccordionOpenMultiple !== undefined) {
            settings.openMultiple = true;
        }

        if (this.element.dataset.silcAccordionOpenFirst !== undefined) {
            settings.openFirst = true;
        }

        return settings;
    }

    /**
     * Event listener for accordion labels
     */
    protected labelEventListener() {

        this.element.addEventListener('click', (e) => {

            // Get target from event
            let target = <HTMLElement>e.target;

            // If target contains label class
            if (target.classList.contains('silc-accordion__label')) {

                e.preventDefault();

                let content = this.getContent(target);
                this.showContent(content);
            }

            e.stopPropagation();
        });
    }

    /**
     * Event listener for tabs navigation
     */
    protected navEventListener() {
        this.nav.addEventListener('click', (e) => {

            let target = <HTMLElement>e.target;

            if (target.classList.contains('silc-accordion__nav-link')) {
                e.preventDefault();
                this.toggleTab(target);
            }

            e.stopPropagation();
        });
    }

    /**
     * Gets content element from clicked label
     * @param {Element} label
     */
    protected getContent(label): Element {
        return <Element>label.parentNode.nextElementSibling;
    }

    /**
     * Gets content based on id
     * @param {String} id - id of content to get
     */
    protected getContentById(id: String): Element {
        return <Element>this.element.querySelector(id + ' .silc-accordion__content');
    }

    /**
     * Toggle tab from clicked nav link
     * @param {Element} link - link element clicked
     */
    protected toggleTab(link: Element) {

        let targetId = link.getAttribute('href');
        let content = this.getContentById(targetId);

        this.hideAllPersitentVisible();
        this.showContent(content);

        // Add active class
        this.nav.querySelector('.silc-accordion__nav-link--active').classList.remove('silc-accordion__nav-link--active');
        link.classList.add('silc-accordion__nav-link--active');

        // Ensure that one tab is always open
        content.classList.add('silc-accordion__content--visible-persist');
    }

    /**
     * Show content
     * @param {Element} el
     */
    protected showContent(el: Element) {

        if (!this.settings.openMultiple) {
            this.hideAllVisible();
            el.classList.add('silc-accordion__content--visible');
        } else {
            el.classList.toggle('silc-accordion__content--visible');
        }
    }

    /**
     * Hide all visible content
     */
    protected hideAllVisible() {

        [].forEach.call(this.element.querySelectorAll('.silc-accordion__content--visible'), (el) => {
            el.classList.remove('silc-accordion__content--visible');
        });
    }

    /**
     * Hide all persistent visible content
     * Persistent visible class is used for accordions that transform to tabs
     */
    protected hideAllPersitentVisible() {

        // Hide all persitent visible content
        [].forEach.call(this.element.querySelectorAll('.silc-accordion__content--visible-persist'), (el) => {
            el.classList.remove('silc-accordion__content--visible-persist');
        });
    }
}
