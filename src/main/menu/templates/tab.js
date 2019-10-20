import * as actions from '../actions/tab'
import { showTabBar } from '../actions/view'

export default function (keybindings) {
  const fileMenu = {
    id: 'paragraphMenuEntry',
    label: '&Tab',
    submenu: [{
      label: 'New Tab',
      accelerator: keybindings.getAccelerator('tabNewTab'),
      click (menuItem, browserWindow) {
        actions.newBlankTab(browserWindow)
        showTabBar(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: 'Close Tab',
      accelerator: keybindings.getAccelerator('tabCloseTab'),
      click (menuItem, browserWindow) {
        actions.closeTab(browserWindow)
      }
    }]
  }

  fileMenu.submenu.push({
    label: 'Close Saved Tabs',
    click (menuItem, browserWindow) {
      actions.closeSavedTab(browserWindow)
    }
  }, {
    label: 'Close All Tabs',
    click (menuItem, browserWindow) {
      actions.closeAllTab(browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    label: 'Rename Tab',
    click (menuItem, browserWindow) {
      actions.renameTab(browserWindow)
    }
  }, {
    label: 'Copy Tab Path',
    click (menuItem, browserWindow) {
      actions.copyTabPath(browserWindow)
    }
  }, {
    label: 'Show Tab in Folder',
    click (menuItem, browserWindow) {
      actions.showTabInFolder(browserWindow)
    }
  })
  return fileMenu
}
