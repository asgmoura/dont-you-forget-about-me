import db from '/js/services/data.js';
import friendsView from '/js/view/friendsView.js';

async function init() {
    console.log("ola");
    const vimtages = await db.getVimtages();
    friendsView.render(vimtages);
}
export default { init };