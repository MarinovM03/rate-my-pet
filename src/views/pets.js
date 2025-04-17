import { html } from 'lit-html';

const template = () => html`
    <h3>This is the Pets view!</h3>
`;


export default function (ctx) {
    ctx.render(template());
}