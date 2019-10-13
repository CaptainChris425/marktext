import * as actions from '../actions/file'
import { showTabBar } from '../actions/view'

export default function (keybindings) {
  return {
    id: 'paragraphMenuEntry',
    label: '&Tab',
    submenu: [{
      label: 'New Tab',
      accelerator: keybindings.getAccelerator('fileNewTab'),
      click (menuItem, browserWindow) {
        actions.newBlankTab(browserWindow)
        showTabBar(browserWindow)
      }
    },{
      type: 'separator'
    }]
  }
}
