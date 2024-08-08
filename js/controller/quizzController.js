import vimtages from "/js/services/data.js";
import quizzView from "/js/view/quizzView.js"

async function init() {
    
    quizzView.render(await vimtages.getVimtages());
}

export default { init };