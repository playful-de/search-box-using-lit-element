import { LitElement, html, css } from "https://unpkg.com/lit@2.1.1?module";

export class FormComponent extends LitElement {
    
    static properties = {
        filterItemsList: { type: Function },
    };

    static styles = css`
        .form {
            display: flex;
            flex-direction: column;
        }
    `;

    constructor() {
        super();

        this.filterItemsList = () => { };

        this.searchText = "";
        this.isChecked = false;
    }

    render() {
        return html`
            <div class="form">
                <input type="text" .value=${this.searchText} @change=${this.updateSearchText}>
                <div>
                    <input type="checkbox" ?checked=${this.isChecked} @change=${this.updateIsChecked}>
                    Only show products in stock
                </div>
            </div>
        `;
    }

    updateSearchText = e => {
        this.searchText = e.target.value;
        this.filterItemsList(this.searchText, this.isChecked);
    }

    updateIsChecked = e => {
        this.isChecked = e.target.checked;
        this.filterItemsList(this.searchText, this.isChecked);
    }
}

customElements.define("form-component", FormComponent);