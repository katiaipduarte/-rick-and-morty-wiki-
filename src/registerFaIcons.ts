import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
  library.add(faSearch, faTimes, faArrowRight, faArrowLeft);
}
