import {LitElement, html} from '@polymer/lit-element';

export class ZzButton extends LitElement {
  static get properties() {
    return {
      label: String
    };
  }

  constructor() {
    super();
    this.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent('button-clicked', { bubbles: true, composed: true }));
    });
  }

  _render({ label }) {
    return html`
      <style>
        :host {
          display: block;
        }

        button {
          background-color: red;
          color: white;
        }
      </style>

      <button>${label}</button>
    `;
  }
}

customElements.define('zz-button', ZzButton);
